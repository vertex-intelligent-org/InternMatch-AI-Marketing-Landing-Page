"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { SparklesIcon } from "./Icons";

const FULL_TEXT = "AI-powered internship matching for university students";
const TYPING_SPEED_MS = 38; // ~38ms per character delivers a fluid, intelligent AI token stream
const PAUSE_DURATION_MS = 2000; // Keep full text visible for ~2 seconds
const FADE_DURATION_MS = 220; // Subtle fade before restarting cycle

interface HeroCapsuleProps {
  className?: string;
}

function subscribeToReducedMotion(
  onStoreChange: () => void
) {
  const mediaQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  mediaQuery.addEventListener(
    "change",
    onStoreChange
  );

  return () => {
    mediaQuery.removeEventListener(
      "change",
      onStoreChange
    );
  };
}

function getReducedMotionSnapshot() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroCapsule({ className = "" }: HeroCapsuleProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "paused" | "fading">("typing");

  const prefersReducedMotion =
    useSyncExternalStore(
      subscribeToReducedMotion,
      getReducedMotionSnapshot,
      getReducedMotionServerSnapshot
    );

  // Looping typewriter lifecycle
  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeoutId: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayedCount < FULL_TEXT.length) {
        timeoutId = setTimeout(() => {
          setDisplayedCount((prev) => prev + 1);
        }, TYPING_SPEED_MS);
      } else {
        // Finished typing entire sentence; transition on the timer queue.
        timeoutId = setTimeout(() => {
          setPhase("paused");
        }, 0);
      }
    } else if (phase === "paused") {
      timeoutId = setTimeout(() => {
        setPhase("fading");
      }, PAUSE_DURATION_MS);
    } else if (phase === "fading") {
      timeoutId = setTimeout(() => {
        setDisplayedCount(0);
        setPhase("typing");
      }, FADE_DURATION_MS);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedCount, phase, prefersReducedMotion]);

  const renderedCount =
    prefersReducedMotion
      ? FULL_TEXT.length
      : displayedCount;

  const renderedPhase =
    prefersReducedMotion
      ? "paused"
      : phase;

  const visibleText = FULL_TEXT.slice(
    0,
    renderedCount
  );

  const ghostText = FULL_TEXT.slice(
    renderedCount
  );

  return (
    <div
      className={`inline-flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] mb-3 backdrop-blur-xs select-none max-w-full self-start ${className}`}
    >
      <style>{`
        @keyframes heroCapsuleSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .hero-capsule-spinner {
          animation: heroCapsuleSpin 6s linear infinite;
        }
        .hero-capsule-text {
          font-size: clamp(9px, 2.8vw, 12px);
          white-space: nowrap;
        }
        @media (min-width: 640px) {
          .hero-capsule-text {
            font-size: 0.875rem; /* 14px - matches text-sm */
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-capsule-spinner {
            animation: none !important;
          }
        }
      `}</style>

      {/* Continuously rotating dotted / radial spinner-like icon */}
      <SparklesIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#467A8F] shrink-0 hero-capsule-spinner" />

      {/* Single-line typewriter text container: in-flow ghost reserves full width on ONE line with ZERO layout shift */}
      <span
        className={`hero-capsule-text inline-block font-semibold leading-none transition-opacity duration-200 ${
          renderedPhase === "fading" ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        {/* Currently visible typed text */}
        <span>{visibleText}</span>

        {/* Streaming AI typing cursor */}
        {renderedPhase === "typing" && !prefersReducedMotion && (
          <span
            className="inline-block w-[1.5px] h-[0.9em] -mr-[1.5px] bg-[#467A8F] ml-0.5 align-middle animate-pulse shrink-0"
            aria-hidden="true"
          />
        )}

        {/* Ghost continuation: keeps remaining un-typed characters in flow with opacity-0 on the same single line,
            guaranteeing the complete single-line width is reserved from frame 0 with ZERO layout shift */}
        <span
          className="opacity-0 select-none pointer-events-none"
          aria-hidden="true"
        >
          {ghostText}
        </span>
      </span>

      {/* Clean screen reader announcement */}
      <span className="sr-only">{FULL_TEXT}</span>
    </div>
  );
}

"use client";

import React from "react";
import { Button } from "@/components/Button";
import { HeroBowScene } from "@/components/HeroBowScene";
import { ArrowRightIcon, SparklesIcon, PlayIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 overflow-x-clip overflow-y-visible isolate"
    >
      {/* === INTERNMATCH HERO AURORA START === */}

      <style>{`
        @keyframes internmatchHeroAuroraA {
          0% {
            transform:
              translate3d(-10%, -4%, 0)
              scale(1.15)
              rotate(-2deg);
          }

          50% {
            transform:
              translate3d(4%, 2%, 0)
              scale(1.22)
              rotate(2deg);
          }

          100% {
            transform:
              translate3d(12%, -2%, 0)
              scale(1.16)
              rotate(-1deg);
          }
        }

        @keyframes internmatchHeroAuroraB {
          0% {
            transform:
              translate3d(10%, 3%, 0)
              scale(1.20)
              rotate(2deg);
          }

          50% {
            transform:
              translate3d(-4%, -3%, 0)
              scale(1.12)
              rotate(-2deg);
          }

          100% {
            transform:
              translate3d(-12%, 2%, 0)
              scale(1.18)
              rotate(1deg);
          }
        }

        @keyframes internmatchHeroAuroraC {
          0% {
            transform:
              translate3d(-4%, 2%, 0)
              scale(1.08);
          }

          50% {
            transform:
              translate3d(7%, -2%, 0)
              scale(1.17);
          }

          100% {
            transform:
              translate3d(-2%, 3%, 0)
              scale(1.10);
          }
        }

        .internmatch-hero-aurora-a {
          animation:
            internmatchHeroAuroraA
            14s
            cubic-bezier(0.45, 0, 0.55, 1)
            infinite alternate;
        }

        .internmatch-hero-aurora-b {
          animation:
            internmatchHeroAuroraB
            18s
            cubic-bezier(0.45, 0, 0.55, 1)
            infinite alternate;
        }

        .internmatch-hero-aurora-c {
          animation:
            internmatchHeroAuroraC
            22s
            ease-in-out
            infinite alternate;
        }

        @media (prefers-reduced-motion: reduce) {
          .internmatch-hero-aurora-a,
          .internmatch-hero-aurora-b,
          .internmatch-hero-aurora-c {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
        style={{
          zIndex: -1,
          background:
            "linear-gradient(180deg, #F7F7F5 0%, #F4F7F8 20%, #F3F6F7 66%, #F7F7F5 100%)",
        }}
        aria-hidden="true"
      >

        {/* ===============================================
            LARGE MOVING COLOR FIELD A
            pink + cyan
            =============================================== */}

        <div
          className="
            internmatch-hero-aurora-a
            absolute
            -left-[34%]
            -top-[20%]
            h-[94%]
            w-[155%]
            blur-[46px]
            sm:blur-[68px]
            lg:-left-[20%]
            lg:-top-[22%]
            lg:h-[100%]
            lg:w-[135%]
            lg:blur-[90px]
            will-change-transform
          "
          style={{
            background: `
              radial-gradient(
                ellipse 38% 48% at 16% 28%,
                rgba(230, 80, 213, 0.46) 0%,
                rgba(190, 90, 220, 0.27) 30%,
                rgba(190, 90, 220, 0.07) 52%,
                transparent 73%
              ),

              radial-gradient(
                ellipse 46% 50% at 54% 24%,
                rgba(38, 181, 229, 0.62) 0%,
                rgba(51, 163, 218, 0.36) 32%,
                rgba(51, 163, 218, 0.08) 55%,
                transparent 74%
              )
            `,
          }}
        />

        {/* ===============================================
            LARGE MOVING COLOR FIELD B
            teal + green
            =============================================== */}

        <div
          className="
            internmatch-hero-aurora-b
            absolute
            -right-[34%]
            top-[8%]
            h-[92%]
            w-[150%]
            blur-[52px]
            sm:blur-[74px]
            lg:-right-[22%]
            lg:top-[4%]
            lg:h-[100%]
            lg:w-[130%]
            lg:blur-[98px]
            opacity-90
            will-change-transform
          "
          style={{
            background: `
              radial-gradient(
                ellipse 46% 48% at 78% 32%,
                rgba(40, 190, 193, 0.45) 0%,
                rgba(52, 168, 177, 0.25) 35%,
                rgba(52, 168, 177, 0.06) 57%,
                transparent 76%
              ),

              radial-gradient(
                ellipse 44% 52% at 82% 68%,
                rgba(49, 170, 125, 0.38) 0%,
                rgba(65, 158, 126, 0.20) 34%,
                rgba(65, 158, 126, 0.045) 58%,
                transparent 76%
              )
            `,
          }}
        />

        {/* ===============================================
            MOVING VIOLET / BLUE DEPTH
            =============================================== */}

        <div
          className="
            internmatch-hero-aurora-c
            absolute
            -left-[20%]
            top-[36%]
            h-[76%]
            w-[122%]
            blur-[64px]
            sm:blur-[82px]
            lg:h-[72%]
            lg:w-[110%]
            lg:blur-[108px]
            opacity-75
            will-change-transform
          "
          style={{
            background: `
              radial-gradient(
                ellipse 44% 50% at 26% 54%,
                rgba(111, 101, 223, 0.28) 0%,
                rgba(111, 101, 223, 0.13) 40%,
                transparent 72%
              ),

              radial-gradient(
                ellipse 46% 48% at 65% 48%,
                rgba(63, 183, 222, 0.24) 0%,
                rgba(63, 183, 222, 0.09) 45%,
                transparent 74%
              )
            `,
          }}
        />

        {/* ===============================================
            SOFT LIGHT IN THE CENTER

            Keeps typography and Blender model readable.
            =============================================== */}

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 58% 44% at 46% 38%,
                rgba(255,255,255,0.38) 0%,
                rgba(255,255,255,0.13) 45%,
                transparent 78%
              )
            `,
          }}
        />

        {/* ===============================================
            TOP HEADER BLEND

            Navbar feels like part of the same background.
            No rectangular beginning.
            =============================================== */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[12%]
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(247,247,245,0.24) 0%, rgba(247,247,245,0) 100%)",
          }}
        />

        {/* ===============================================
            BOTTOM SEAMLESS FADE

            This is the important part:
            Aurora slowly dissolves into the normal website
            background BEFORE the next section begins.
            =============================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[42%]
          "
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(247,247,245,0) 0%,
                rgba(247,247,245,0.10) 18%,
                rgba(247,247,245,0.32) 42%,
                rgba(247,247,245,0.68) 70%,
                rgba(247,247,245,0.92) 88%,
                #F7F7F5 100%
              )
            `,
          }}
        />

      </div>

      {/* === INTERNMATCH HERO AURORA END === */}

      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#467A8F]/8 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-[#78A9B8]/6 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F7F8] border border-[#C7DDE3] text-[13px] sm:text-sm font-semibold text-[#2D4C59] mb-5 backdrop-blur-xs">
              <SparklesIcon className="w-3.5 h-3.5 text-[#467A8F]" />
              <span>AI-powered internship matching for university students</span>
            </div>

            <h1 className="text-[46px] sm:text-[54px] md:text-[64px] font-extrabold tracking-[-0.035em] text-[#171A1C] leading-[1.02] mb-0">
              Stop searching.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D4C59] via-[#467A8F] to-[#78A9B8]">
                Start matching.
              </span>
            </h1>

            {/*
              MOBILE:
              Bow scene is intentionally in normal document flow directly
              below the headline so the complete composition is visible
              immediately and can never be clipped beneath the Hero.
            */}
            <div
              data-bow-track
              className="relative w-full h-[640px] sm:h-[700px] lg:hidden mt-1"
            >
              <div className="sticky top-[96px] pt-4">
                <HeroBowScene className="w-full max-w-[680px] mx-auto" />
              </div>
            </div>

            <p className="text-[17px] sm:text-[19px] text-[#656B70] leading-[1.65] max-w-lg mb-8 font-normal">
              Upload your CV once. InternMatch AI understands your skills, finds
              relevant internships, explains why they fit, and helps you move
              from discovery to application.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-6">
              <Button
                href="#demo"
                variant="primary"
                size="lg"
                icon={<PlayIcon className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md"
              >
                Watch Demo
              </Button>

              <Button
                href="#product"
                variant="secondary"
                size="lg"
                icon={<ArrowRightIcon className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Explore InternMatch
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[13px] sm:text-sm text-[#656B70] pt-3 border-t border-[#E5E7E8] w-full">
              <span className="font-medium text-[#171A1C]">
                Built for university students.
              </span>

              <span className="hidden sm:inline text-slate-300">
                {"\u2022"}
              </span>

              <span className="text-[#656B70] text-[12px] sm:text-[13px]">
                {SITE_CONFIG.languages[0]} {"\u00B7"}{" "}
                {SITE_CONFIG.languages[1]} {"\u00B7"}{" "}
                <span
                  className="font-cairo font-semibold text-[#171A1C]"
                  lang="ar"
                  dir="rtl"
                >
                  {SITE_CONFIG.languages[2]}
                </span>
              </span>
            </div>
          </div>

          {/* DESKTOP: signature bow scene occupies the visual column. */}
          <div
            data-bow-track
            className="hidden lg:block lg:col-span-7 relative h-[900px]"
          >
            <div className="sticky top-28 flex min-h-[300px] items-center justify-center pt-4">
              <HeroBowScene className="w-full max-w-[820px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

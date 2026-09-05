"use client";

import React from "react";
import { HeroProfileCard } from "./HeroProfileCard";

interface HeroMatchingNetworkProps {
  mode?: "mobile" | "desktop";
  children: React.ReactNode;
  className?: string;
}

export function HeroMatchingNetwork({
  mode = "mobile",
  children,
  className = "",
}: HeroMatchingNetworkProps) {
  const isDesktop = mode === "desktop";

  return (
    <div
      className={`relative w-full ${
        isDesktop ? "aspect-[14/9]" : "aspect-square"
      } select-none ${className}`}
    >
      <style>{`
        @keyframes internmatchCardFloatA {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-3.5px) rotate(-15deg); }
        }
        @keyframes internmatchCardFloatB {
          0%, 100% { transform: translateY(0px) rotate(-14deg); }
          50% { transform: translateY(-3px) rotate(-14deg); }
        }
        @keyframes internmatchCardFloatC {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-3.5px) rotate(-15deg); }
        }
        @keyframes internmatchCardFloatD {
          0%, 100% { transform: translateY(0px) rotate(-14deg); }
          50% { transform: translateY(-2.8px) rotate(-14deg); }
        }
        @keyframes internmatchHaloPulse {
          0%, 100% {
            r: 7.5px;
            opacity: 0.12;
          }
          50% {
            r: 11px;
            opacity: 0.32;
          }
        }
        @keyframes internmatchSignalTravel {
          0% {
            stroke-dashoffset: 160;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .internmatch-card-float-a {
          animation: internmatchCardFloatA 6.2s ease-in-out infinite;
        }
        .internmatch-card-float-b {
          animation: internmatchCardFloatB 7.5s ease-in-out infinite 0.9s;
        }
        .internmatch-card-float-c {
          animation: internmatchCardFloatC 6.8s ease-in-out infinite 1.6s;
        }
        .internmatch-card-float-d {
          animation: internmatchCardFloatD 8.2s ease-in-out infinite 2.4s;
        }
        .internmatch-halo-pulse {
          animation: internmatchHaloPulse 4.5s ease-in-out infinite;
        }
        .internmatch-signal-path {
          stroke-dasharray: 6 36;
          animation: internmatchSignalTravel 14s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .internmatch-card-float-a,
          .internmatch-card-float-b,
          .internmatch-card-float-c,
          .internmatch-card-float-d,
          .internmatch-halo-pulse,
          .internmatch-signal-path,
          .internmatch-particle {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>

      {/* ============================================================
          LAYER 0: BACKGROUND SVG DATA NETWORK MESH (z-0)
          - Geometric polygonal student mesh around bow
          - Target convergence perfectly centered at exact target bullseye:
              Mobile: (798, 172)
              Desktop: (1101, 112)
          - Darker, high-visibility node hierarchy
          - Glowing moving electrons / particles along network paths
          - Dense company opportunities constellation (lower-right)
          - STRICT LABEL SAFE ZONES: zero lines or nodes passing through
            "student profiles", "Matching Accuracy: 96%", or "company opportunities"
          ============================================================ */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {isDesktop ? (
          /* ==========================================================
             DESKTOP NETWORK MESH: Coordinate space 1400 x 900
             Target exact center: (1101, 112)
             ========================================================== */
          <svg
            viewBox="0 0 1400 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="deskFlowNorth" x1="160" y1="360" x2="1101" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#254C5C" stopOpacity="0.48" />
                <stop offset="50%" stopColor="#467A8F" stopOpacity="0.36" />
                <stop offset="100%" stopColor="#7ED1E0" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="deskCompanyFlow" x1="1080" y1="700" x2="1101" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#152E38" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#5FB6C7" stopOpacity="0.60" />
              </linearGradient>
              <filter id="deskParticleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Target Halo centered precisely at (1101, 112) */}
            <circle cx="1101" cy="112" r="50" stroke="#5FB6C7" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="4 4" />
            <circle cx="1101" cy="112" r="68" stroke="#7ED1E0" strokeWidth="0.8" strokeOpacity="0.25" />

            {/* Structured Geometric Student Mesh (Left)
                Safe Zone: y < 270 in x < 280 kept clear for "student profiles" label */}
            <g stroke="#6199AA" strokeOpacity="0.36" strokeWidth="1">
              <polygon points="120,380 170,310 270,340" />
              <polygon points="170,310 280,270 370,290" />
              <polygon points="270,340 370,290 450,330" />
              <polygon points="120,380 140,490 230,450" />
              <polygon points="140,490 220,580 300,530" />
              <polygon points="220,580 160,670 250,660" />
              <polygon points="160,670 200,770 290,750" />
              <polygon points="290,750 380,730 350,640" />
              <polygon points="300,530 390,500 350,640" />
              <polygon points="270,340 370,290 350,420" />
              <polygon points="230,450 350,420 300,530" />
              <polygon points="370,290 450,330 430,440" />
              <polygon points="350,420 430,440 390,500" />
              <polygon points="200,770 290,820 380,800" />
              <polygon points="380,800 460,780 380,730" />
            </g>

            {/* Converging Rays Centered to Bullseye (1101, 112)
                Respects safe zone: routes clear of "Matching Accuracy: 96%" at (1101, 220-310) */}
            <g strokeWidth="1.2">
              <path d="M 280,270 C 520,210 820,150 1101,112" stroke="url(#deskFlowNorth)" strokeOpacity="0.40" fill="none" />
              <path d="M 370,290 C 600,230 860,160 1101,112" stroke="url(#deskFlowNorth)" strokeOpacity="0.46" fill="none" />
              <path d="M 450,330 C 680,270 900,180 1101,112" stroke="url(#deskFlowNorth)" strokeOpacity="0.50" fill="none" />
              <path d="M 580,310 C 780,250 940,170 1101,112" stroke="url(#deskFlowNorth)" strokeOpacity="0.55" fill="none" />
              <path d="M 870,200 L 1101,112" stroke="url(#deskFlowNorth)" strokeOpacity="0.65" />

              {/* Company Cluster to Target: Flanking routes around Matching Accuracy safe zone */}
              <path d="M 1250,525 C 1280,360 1260,200 1101,112" stroke="url(#deskCompanyFlow)" strokeOpacity="0.52" fill="none" />
              <path d="M 1180,515 C 1230,370 1220,210 1101,112" stroke="url(#deskCompanyFlow)" strokeOpacity="0.48" fill="none" />
              <path d="M 1040,530 C 970,380 980,220 1101,112" stroke="url(#deskFlowNorth)" strokeOpacity="0.45" fill="none" />
            </g>

            {/* Traveling Pulses (routed around label safe zones) */}
            <path
              d="M 370,290 Q 750,170 1101,112"
              stroke="#7ED1E0"
              strokeWidth="1.4"
              strokeOpacity="0.55"
              fill="none"
              className="internmatch-signal-path"
            />
            <path
              d="M 390,500 Q 700,370 980,560"
              stroke="#467A8F"
              strokeWidth="1.4"
              strokeOpacity="0.48"
              fill="none"
              className="internmatch-signal-path"
            />

            {/* Glowing Moving Electrons / Particles */}
            <g className="internmatch-particle" filter="url(#deskParticleGlow)">
              <circle r="2.4" fill="#5CE5E7">
                <animateMotion dur="7s" repeatCount="indefinite" path="M 170,310 L 280,270 L 370,290 L 450,330 C 680,270 900,180 1101,112" />
              </circle>
              <circle r="2.2" fill="#7ED1E0">
                <animateMotion dur="8.5s" repeatCount="indefinite" path="M 350,420 L 430,440 L 680,480 L 1040,530" />
              </circle>
              <circle r="2.4" fill="#5CE5E7">
                <animateMotion dur="6.5s" repeatCount="indefinite" path="M 1250,525 C 1280,360 1260,200 1101,112" />
              </circle>
              <circle r="2.0" fill="#7ED1E0">
                <animateMotion dur="7.5s" repeatCount="indefinite" path="M 980,560 L 1040,530 L 1110,540 L 1180,515 L 1250,525 L 1200,675 L 1090,710 Z" />
              </circle>
            </g>

            {/* Dense Company Constellation (kept above y=715 so company opportunities label is clean) */}
            <g stroke="#2C5969" strokeOpacity="0.55" strokeWidth="1.15">
              <polygon points="980,560 1040,530 1110,540" />
              <polygon points="1040,530 1110,540 1180,515" />
              <polygon points="1110,540 1180,515 1250,525" />
              <polygon points="980,560 960,630 1020,610" />
              <polygon points="1020,610 1090,620 1110,540" />
              <polygon points="1090,620 1160,600 1180,515" />
              <polygon points="1160,600 1230,590 1250,525" />
              <polygon points="1230,590 1280,580 1250,525" />
              <polygon points="960,630 1000,690 1020,610" />
              <polygon points="1020,610 1060,680 1090,620" />
              <polygon points="1090,620 1130,690 1160,600" />
              <polygon points="1160,600 1200,675 1230,590" />
              <polygon points="1230,590 1260,660 1280,580" />
              <polygon points="1060,680 1090,710 1130,690" />
              <polygon points="1130,690 1160,710 1200,675" />
            </g>

            {/* Darker Company Nodes (y <= 710) */}
            <g fill="#152E38">
              <circle cx="980" cy="560" r="4.5" />
              <circle cx="1040" cy="530" r="5.5" />
              <circle cx="1110" cy="540" r="6.0" />
              <circle cx="1180" cy="515" r="5.2" />
              <circle cx="1250" cy="525" r="4.8" />
              <circle cx="960" cy="630" r="4.2" />
              <circle cx="1020" cy="610" r="4.8" />
              <circle cx="1090" cy="620" r="5.8" />
              <circle cx="1160" cy="600" r="6.2" />
              <circle cx="1230" cy="590" r="5.5" />
              <circle cx="1280" cy="580" r="4.6" />
              <circle cx="1000" cy="690" r="4.2" />
              <circle cx="1060" cy="680" r="5.2" />
              <circle cx="1130" cy="690" r="5.8" />
              <circle cx="1200" cy="675" r="5.2" />
              <circle cx="1260" cy="660" r="4.5" />
              <circle cx="1090" cy="710" r="4.6" />
              <circle cx="1160" cy="710" r="4.6" />
            </g>

            {/* Student Nodes with High Contrast (all y >= 270) */}
            <g fill="#1F4552">
              <circle cx="120" cy="380" r="3.5" />
              <circle cx="170" cy="310" r="3.8" />
              <circle cx="270" cy="340" r="3.8" />
              <circle cx="280" cy="270" r="3.8" />
              <circle cx="370" cy="290" r="4.2" />
              <circle cx="450" cy="330" r="4.2" />
              <circle cx="140" cy="490" r="3.2" />
              <circle cx="230" cy="450" r="3.8" />
              <circle cx="350" cy="420" r="3.8" />
              <circle cx="220" cy="580" r="3.8" />
              <circle cx="300" cy="530" r="4.0" />
              <circle cx="390" cy="500" r="4.0" />
              <circle cx="160" cy="670" r="3.2" />
              <circle cx="250" cy="660" r="3.8" />
              <circle cx="350" cy="640" r="3.8" />
              <circle cx="200" cy="770" r="3.2" />
              <circle cx="290" cy="750" r="3.8" />
              <circle cx="380" cy="730" r="3.8" />
            </g>

            {/* Target Bullseye Node */}
            <circle cx="1101" cy="112" r="6.2" fill="#152E38" />
            <circle cx="1101" cy="112" r="11" fill="#78A9B8" className="internmatch-halo-pulse" />
            <circle cx="1160" cy="600" r="9.5" fill="#78A9B8" className="internmatch-halo-pulse" />
          </svg>
        ) : (
          /* ==========================================================
             MOBILE NETWORK MESH: Coordinate space 900 x 900
             EXACT TARGET BULLSEYE CENTER: (798, 172)
             ========================================================== */
          <svg
            viewBox="0 0 900 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="mobFlowNorth" x1="100" y1="360" x2="798" y2="172" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#254C5C" stopOpacity="0.48" />
                <stop offset="50%" stopColor="#467A8F" stopOpacity="0.36" />
                <stop offset="100%" stopColor="#7ED1E0" stopOpacity="0.58" />
              </linearGradient>
              <linearGradient id="mobCompanyFlow" x1="720" y1="700" x2="798" y2="172" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#152E38" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#5FB6C7" stopOpacity="0.60" />
              </linearGradient>
              <filter id="mobParticleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Target Glowing Aura Rings (Exact Center: 798, 172) */}
            <circle cx="798" cy="172" r="46" stroke="#5FB6C7" strokeWidth="1.4" strokeOpacity="0.55" strokeDasharray="3.5 3.5" />
            <circle cx="798" cy="172" r="64" stroke="#7ED1E0" strokeWidth="0.9" strokeOpacity="0.30" />

            {/* --- 1. GEOMETRIC STUDENT PROFILES TRIANGULAR MESH (LEFT) ---
                Safe Zone: all points kept at y >= 270 in x < 240 for "student profiles" label */}
            <g stroke="#6199AA" strokeOpacity="0.38" strokeWidth="1">
              <polygon points="60,285 120,270 180,280" />
              <polygon points="120,270 240,260 180,280" />
              <polygon points="180,280 240,260 290,310" />
              <polygon points="60,285 110,340 50,360" />
              <polygon points="60,285 180,280 110,340" />
              <polygon points="110,340 180,280 170,370" />
              <polygon points="180,280 290,310 220,350" />
              <polygon points="170,370 220,350 280,390" />
              <polygon points="50,360 110,340 100,460" />
              <polygon points="110,340 170,370 160,480" />
              <polygon points="50,360 40,470 100,460" />

              {/* Mid-region behind riser and grip */}
              <polygon points="100,460 160,480 230,470" />
              <polygon points="170,370 280,390 230,470" />
              <polygon points="280,390 360,460 300,490" />
              <polygon points="230,470 300,490 360,460" />
              <polygon points="40,470 100,460 50,580" />
              <polygon points="100,460 160,480 120,570" />
              <polygon points="50,580 120,570 100,460" />

              {/* Lower region around lower bow limb */}
              <polygon points="120,570 160,480 190,590" />
              <polygon points="160,480 230,470 260,580" />
              <polygon points="190,590 260,580 230,470" />
              <polygon points="260,580 300,490 330,600" />
              <polygon points="50,580 120,570 70,690" />
              <polygon points="120,570 190,590 140,680" />
              <polygon points="70,690 140,680 120,570" />
              <polygon points="140,680 190,590 210,700" />
              <polygon points="190,590 260,580 280,690" />
              <polygon points="260,580 330,600 280,690" />
              <polygon points="280,690 330,600 340,720" />
              <polygon points="70,690 140,680 120,790" />
              <polygon points="140,680 210,700 200,800" />
              <polygon points="120,790 200,800 140,680" />
              <polygon points="210,700 280,690 270,810" />
              <polygon points="200,800 270,810 210,700" />
              <polygon points="280,690 340,720 340,820" />
              <polygon points="270,810 340,820 280,690" />
            </g>

            {/* Connecting paths across center field */}
            <g stroke="#467A8F" strokeOpacity="0.32" strokeWidth="1">
              <path d="M 290,310 L 370,330 L 480,310 L 590,260" />
              <path d="M 280,390 L 390,410 L 520,380 L 620,360" />
              <path d="M 360,460 L 460,490 L 580,440 L 700,550" />
              <path d="M 330,600 L 450,580 L 580,550 L 670,610" />
              <path d="M 340,720 L 480,690 L 610,660 L 690,670" />
              <path d="M 340,820 L 480,800 L 600,770" />
            </g>

            {/* --- 2. CONVERGING RAYS TERMINATING IN TARGET CENTER (798, 172) ---
                Safe Zone: routes around "Matching Accuracy: 96%" at (798, 270-360) */}
            <g strokeWidth="1.2">
              <path d="M 240,260 C 440,220 620,180 798,172" stroke="url(#mobFlowNorth)" strokeOpacity="0.38" fill="none" />
              <path d="M 290,310 C 480,240 650,190 798,172" stroke="url(#mobFlowNorth)" strokeOpacity="0.45" fill="none" />
              <path d="M 390,340 C 530,260 670,200 798,172" stroke="url(#mobFlowNorth)" strokeOpacity="0.50" fill="none" />
              <path d="M 590,240 L 798,172" stroke="url(#mobFlowNorth)" strokeOpacity="0.65" />

              {/* Company cluster to target: flanking paths avoiding the label */}
              <path d="M 860,510 C 895,410 895,250 798,172" stroke="url(#mobCompanyFlow)" strokeOpacity="0.52" fill="none" />
              <path d="M 810,530 C 880,410 880,240 798,172" stroke="url(#mobCompanyFlow)" strokeOpacity="0.48" fill="none" />
              <path d="M 700,550 C 660,410 670,270 798,172" stroke="url(#mobFlowNorth)" strokeOpacity="0.45" fill="none" />
            </g>

            {/* Traveling Light Pulse Path */}
            <path
              d="M 290,310 Q 560,200 798,172"
              stroke="#7ED1E0"
              strokeWidth="1.4"
              strokeOpacity="0.55"
              fill="none"
              className="internmatch-signal-path"
            />
            <path
              d="M 330,600 Q 580,420 700,550"
              stroke="#467A8F"
              strokeWidth="1.4"
              strokeOpacity="0.50"
              fill="none"
              className="internmatch-signal-path"
            />

            {/* --- 3. GLOWING MOVING ELECTRONS / PARTICLES ---
                All paths route clear of label safe zones */}
            <g className="internmatch-particle" filter="url(#mobParticleGlow)">
              {/* Particle 1: in Student mesh */}
              <circle r="2.4" fill="#5CE5E7">
                <animateMotion dur="6.5s" repeatCount="indefinite" path="M 60,285 L 180,280 L 290,310 L 220,350 L 170,370 L 110,340 Z" />
              </circle>
              {/* Particle 2: from student mesh via upper arc to target bullseye */}
              <circle r="2.5" fill="#5CE5E7">
                <animateMotion dur="7.2s" repeatCount="indefinite" path="M 290,310 C 480,240 650,190 798,172" />
              </circle>
              {/* Particle 3: through central corridor into company cluster */}
              <circle r="2.2" fill="#7ED1E0">
                <animateMotion dur="8s" repeatCount="indefinite" path="M 230,470 L 360,460 L 460,490 L 580,440 L 700,550" />
              </circle>
              {/* Particle 4: from company cluster along right arc into target bullseye */}
              <circle r="2.5" fill="#5CE5E7">
                <animateMotion dur="6s" repeatCount="indefinite" path="M 860,510 C 895,410 895,250 798,172" />
              </circle>
              {/* Particle 5: in company cluster web */}
              <circle r="2.2" fill="#7ED1E0">
                <animateMotion dur="6.8s" repeatCount="indefinite" path="M 700,550 L 750,520 L 810,530 L 860,510 L 870,570 L 820,580 L 770,600 Z" />
              </circle>
              {/* Particle 6: in company cluster lower web */}
              <circle r="2.0" fill="#5CE5E7">
                <animateMotion dur="7.5s" repeatCount="indefinite" path="M 670,610 L 720,590 L 770,600 L 790,670 L 740,660 Z" />
              </circle>
            </g>

            {/* --- 4. DENSE COMPANY OPPORTUNITIES CONSTELLATION ---
                Terminates at y <= 710 to keep "company opportunities" label unobstructed */}
            <g stroke="#2C5969" strokeOpacity="0.55" strokeWidth="1.15">
              <polygon points="700,550 750,520 810,530" />
              <polygon points="750,520 810,530 860,510" />
              <polygon points="700,550 670,610 720,590" />
              <polygon points="720,590 770,600 810,530" />
              <polygon points="770,600 820,580 860,510" />
              <polygon points="820,580 870,570 860,510" />
              <polygon points="670,610 690,670 720,590" />
              <polygon points="720,590 740,660 770,600" />
              <polygon points="770,600 790,670 820,580" />
              <polygon points="820,580 840,650 870,570" />
              <polygon points="870,570 880,640 840,650" />
              <polygon points="690,670 720,710 740,660" />
              <polygon points="740,660 770,710 790,670" />
              <polygon points="790,670 820,705 840,650" />
            </g>

            {/* --- 5. HIGH-VISIBILITY DARKER NODES HIERARCHY --- */}

            {/* Student mesh nodes (darker teal, all y >= 270) */}
            <g fill="#1F4552">
              <circle cx="60" cy="285" r="3.2" />
              <circle cx="120" cy="270" r="3.5" />
              <circle cx="180" cy="280" r="3.8" />
              <circle cx="240" cy="260" r="3.8" />
              <circle cx="290" cy="310" r="4.0" />
              <circle cx="50" cy="360" r="3.0" />
              <circle cx="110" cy="340" r="3.5" />
              <circle cx="170" cy="370" r="3.8" />
              <circle cx="220" cy="350" r="3.8" />
              <circle cx="280" cy="390" r="4.0" />
              <circle cx="40" cy="470" r="3.0" />
              <circle cx="100" cy="460" r="3.5" />
              <circle cx="160" cy="480" r="3.8" />
              <circle cx="230" cy="470" r="4.2" />
              <circle cx="300" cy="490" r="3.8" />
              <circle cx="360" cy="460" r="4.0" />
              <circle cx="50" cy="580" r="3.0" />
              <circle cx="120" cy="570" r="3.5" />
              <circle cx="190" cy="590" r="3.8" />
              <circle cx="260" cy="580" r="4.0" />
              <circle cx="330" cy="600" r="3.8" />
              <circle cx="70" cy="690" r="3.0" />
              <circle cx="140" cy="680" r="3.5" />
              <circle cx="210" cy="700" r="3.8" />
              <circle cx="280" cy="690" r="3.8" />
              <circle cx="340" cy="720" r="3.8" />
              <circle cx="120" cy="790" r="2.8" />
              <circle cx="200" cy="800" r="3.2" />
              <circle cx="270" cy="810" r="3.5" />
              <circle cx="340" cy="820" r="3.5" />
            </g>

            {/* Midfield guide nodes */}
            <g fill="#254C5C">
              <circle cx="370" cy="330" r="3.2" />
              <circle cx="480" cy="310" r="3.5" />
              <circle cx="590" cy="260" r="3.8" />
              <circle cx="390" cy="410" r="3.2" />
              <circle cx="520" cy="380" r="3.5" />
              <circle cx="620" cy="360" r="3.8" />
              <circle cx="460" cy="490" r="3.2" />
              <circle cx="580" cy="440" r="3.5" />
              <circle cx="450" cy="580" r="3.2" />
              <circle cx="580" cy="550" r="3.5" />
              <circle cx="480" cy="690" r="3.2" />
              <circle cx="610" cy="660" r="3.5" />
              <circle cx="480" cy="800" r="3.0" />
              <circle cx="600" cy="770" r="3.2" />
            </g>

            {/* Company nodes: prominent, dark-teal (y <= 710) */}
            <g fill="#152E38">
              <circle cx="700" cy="550" r="4.6" />
              <circle cx="750" cy="520" r="5.6" />
              <circle cx="810" cy="530" r="6.0" />
              <circle cx="860" cy="510" r="5.0" />
              <circle cx="670" cy="610" r="4.5" />
              <circle cx="720" cy="590" r="5.8" />
              <circle cx="770" cy="600" r="6.2" />
              <circle cx="820" cy="580" r="5.2" />
              <circle cx="870" cy="570" r="4.8" />
              <circle cx="690" cy="670" r="4.5" />
              <circle cx="740" cy="660" r="5.8" />
              <circle cx="790" cy="670" r="5.2" />
              <circle cx="840" cy="650" r="4.8" />
              <circle cx="880" cy="640" r="4.2" />
              <circle cx="720" cy="710" r="4.5" />
              <circle cx="770" cy="710" r="4.8" />
              <circle cx="820" cy="705" r="4.5" />
            </g>

            {/* Target Central Bullseye Hub (Exact: 798, 172) */}
            <circle cx="798" cy="172" r="6.2" fill="#152E38" />
            <circle cx="798" cy="172" r="11" fill="#78A9B8" className="internmatch-halo-pulse" />
            <circle cx="770" cy="600" r="9.5" fill="#78A9B8" className="internmatch-halo-pulse" />
          </svg>
        )}
      </div>

      {/* ============================================================
          LAYER 1: APPROVED BLENDER 3D CANVAS (z-10)
          HeroBowScene passed cleanly as children
          ============================================================ */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* ============================================================
          LAYER 2: INFORMATION & ANNOTATION LAYER (z-20)
          - Labels completely unobstructed with dedicated safe zones
          - Cards positioned along arrow corridor with ample breathing room
          - Matching Accuracy sits cleanly below target with zero overlaps
          - Student profiles sits gracefully above the left network
          - Company opportunities sits cleanly below the company cluster
          ============================================================ */}
      <div
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* 1. Annotation: "student profiles" (above upper bow limb, completely clean space) */}
        <div
          className="absolute select-none pointer-events-none text-left"
          style={
            isDesktop
              ? { left: "6%", top: "18%" }
              : { left: "7%", top: "18%" }
          }
        >
          <div className="flex flex-col text-left leading-tight text-[#171A1C]">
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-tight">
              student
            </span>
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-tight">
              profiles
            </span>
          </div>
        </div>

        {/* 2. Annotation: "company opportunities" (below dense company cluster, completely clean space) */}
        <div
          className="absolute select-none pointer-events-none text-right"
          style={
            isDesktop
              ? { right: "6%", top: "83%" }
              : { right: "6%", top: "83%" }
          }
        >
          <div className="flex flex-col text-right leading-tight text-[#171A1C]">
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-tight">
              company
            </span>
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-tight">
              opportunities
            </span>
          </div>
        </div>

        {/* 3. Annotation: "Matching \n Accuracy: \n 96%"
            Placed in clean negative space directly beneath the target bullseye.
            Protected from cards by generous horizontal offset. */}
        <div
          className="absolute select-none pointer-events-none text-center"
          style={
            isDesktop
              ? { left: "79.5%", top: "26%", transform: "translateX(-50%)" }
              : { left: "89%", top: "27%", transform: "translateX(-45%)" }
          }
        >
          <div className="flex flex-col items-center leading-none tracking-normal">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#467A8F]">
              Matching
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#467A8F] mt-0.5">
              Accuracy:
            </span>
            <span className="text-lg sm:text-2xl font-black text-[#152E38] tracking-tight mt-1">
              96%
            </span>
          </div>
        </div>

        {/* 4. FOUR FLOATING STUDENT PROFILE CARDS
            Shifted toward target area by ~1cm (~38px-42px on mobile, proportional on desktop):
            - Completely opens the arrow corridor (arrow shaft, tip, and trajectory fully clear)
            - Sara: shifted right/up (+40px, -8px on mobile | 44%, 31% on desktop)
            - Mert: shifted right/up (+34px, -10px on mobile | 61%, 17% on desktop)
            - Omar: shifted right/up (+38px, -4px on mobile | 59%, 35% on desktop)
            - Lina: shifted right/up (+36px, -6px on mobile | 48%, 47% on desktop)
        */}

        {/* Mert — Design (Leading toward target) */}
        <HeroProfileCard
          id="mert"
          name="Mert"
          role="Design"
          floatAnimation="d"
          style={
            isDesktop
              ? { left: "61%", top: "17%" }
              : { left: "calc(52% + 34px)", top: "calc(21% - 10px)" }
          }
        />

        {/* Sara — UX Design (Shifted toward target, well clear of bow & arrow shaft) */}
        <HeroProfileCard
          id="sara"
          name="Sara"
          role="UX Design"
          floatAnimation="a"
          style={
            isDesktop
              ? { left: "44%", top: "31%" }
              : { left: "calc(31% + 40px)", top: "calc(34% - 8px)" }
          }
        />

        {/* Omar — Software Dev (Shifted left/down, fully clear of 96% and Matching Accuracy) */}
        <HeroProfileCard
          id="omar"
          name="Omar"
          role="Software Dev"
          floatAnimation="b"
          style={
            isDesktop
              ? { left: "54%", top: "38%" }
              : { left: "calc(50% + 20px)", top: "calc(37% + 6px)" }
          }
        />

        {/* Lina — Marketing (Shifted toward target, clear of lower bow limb) */}
        <HeroProfileCard
          id="lina"
          name="Lina"
          role="Marketing"
          floatAnimation="c"
          style={
            isDesktop
              ? { left: "48%", top: "47%" }
              : { left: "calc(38% + 36px)", top: "calc(49% - 6px)" }
          }
        />
      </div>
    </div>
  );
}

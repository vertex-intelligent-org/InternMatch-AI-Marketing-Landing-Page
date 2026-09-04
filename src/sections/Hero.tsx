"use client";

import React from "react";
import { Button } from "@/components/Button";
import { DeviceFrame } from "@/components/DeviceFrame";
import { FloatingSkillChip } from "@/components/FloatingSkillChip";
import { ArrowRightIcon, DocumentIcon, SparklesIcon, PlayIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Restrained brand light atmosphere (#467A8F subtle ambience) */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#467A8F]/8 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-[#78A9B8]/6 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: ~42% copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2F7F8] border border-[#C7DDE3] text-xs font-semibold text-[#2D4C59] mb-6 backdrop-blur-xs">
              <SparklesIcon className="w-3.5 h-3.5 text-[#467A8F]" />
              <span>AI-powered internship matching for university students</span>
            </div>

            {/* Main Brand Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#171A1C] leading-[1.08] mb-6">
              Stop searching.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D4C59] via-[#467A8F] to-[#78A9B8]">
                Start matching.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#656B70] leading-relaxed max-w-lg mb-8 font-normal">
              Upload your CV once. InternMatch AI understands your skills, finds
              relevant internships, explains why they fit, and helps you move
              from discovery to application.
            </p>

            {/* CTAs: Watch Demo & Explore InternMatch */}
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

            {/* Microcopy */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#656B70] pt-2 border-t border-[#E5E7E8] w-full">
              <span className="font-medium text-[#171A1C]">
                Built for university students.
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-[#656B70] font-mono text-[11px]">
                {SITE_CONFIG.languages.join(" · ")}
              </span>
            </div>
          </div>

          {/* Right Column: ~58% visual hero (BLENDER REPLACEMENT ZONE) */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            {/*
              ============================================================
              HERO BLENDER REPLACEMENT ZONE (data-blender-zone="hero-cv-match")
              This entire composition is structured so that later a pre-rendered
              video (<video src="/media/hero-blender.webm" poster="/media/hero-poster.png">)
              can seamlessly replace this DOM/CSS composition.
              ============================================================
            */}
            <div
              id="hero-visual-zone"
              data-blender-zone="hero-cv-match"
              className="relative w-full max-w-[540px] aspect-[4/4.5] flex items-center justify-center"
            >
              {/* Subtle radial aura */}
              <div className="absolute inset-0 bg-[#467A8F]/6 rounded-full filter blur-3xl -z-10" />

              {/* CV Document Ingestion Flow (Floating Left Layer) */}
              <div className="absolute -left-2 sm:-left-6 top-8 z-20 w-44 sm:w-48 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7E8] shadow-xl shadow-slate-900/5 animate-float-slow hidden xs:block">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#E5E7E8]">
                  <div className="w-6 h-6 rounded-lg bg-[#F2F7F8] text-[#467A8F] flex items-center justify-center">
                    <DocumentIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#171A1C] leading-none">
                      Candidate_CV.pdf
                    </div>
                    <div className="text-[9px] text-[#467A8F] font-medium">
                      Structured Intake
                    </div>
                  </div>
                </div>

                {/* Simulated extracted CV blocks */}
                <div className="space-y-1.5 text-[9px] text-[#656B70]">
                  <div className="flex justify-between items-center bg-[#F7F7F5] px-2 py-1 rounded">
                    <span>Skills Extracted</span>
                    <span className="font-semibold text-[#345B6B]">14 tags</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#F7F7F5] px-2 py-1 rounded">
                    <span>Projects Parsed</span>
                    <span className="font-semibold text-[#171A1C]">3 verified</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#F7F7F5] px-2 py-1 rounded">
                    <span>Education Vector</span>
                    <span className="font-semibold text-[#171A1C]">CS Senior</span>
                  </div>
                </div>

                {/* Flow indicator to phone */}
                <div className="mt-2 pt-1 flex items-center justify-between text-[9px] text-[#467A8F] font-medium">
                  <span>Vectorizing profile</span>
                  <span className="w-2 h-2 rounded-full bg-[#467A8F] animate-ping" />
                </div>
              </div>

              {/* Center Mobile Device Frame Mockup */}
              <DeviceFrame className="z-10 transform scale-95 sm:scale-100 hover:scale-[1.01] transition-transform duration-300">
                <div className="p-4 flex flex-col h-full bg-gradient-to-b from-[#F7F7F5] via-white to-[#F7F7F5]">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-semibold text-[#467A8F] uppercase tracking-wider">
                        Active Matchups
                      </div>
                      <div className="text-base font-bold text-[#171A1C]">
                        Top Opportunities
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#F2F7F8] border border-[#C7DDE3] text-[#345B6B] flex items-center justify-center text-xs font-bold">
                      MB
                    </div>
                  </div>

                  {/* Primary Hero Card: AI Engineering Intern 94% Match */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E5E7E8] shadow-sm relative overflow-hidden mb-3">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E3EEF1]/70 to-transparent rounded-bl-3xl pointer-events-none" />

                    <div className="flex items-start justify-between mb-2.5">
                      <div>
                        <span className="text-[10px] font-semibold text-[#656B70] uppercase">
                          Tech Forward Lab
                        </span>
                        <h4 className="text-sm font-bold text-[#171A1C] leading-tight">
                          AI Engineering Intern
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] text-xs font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#467A8F]" />
                        94% Match
                      </span>
                    </div>

                    <p className="text-[11px] text-[#656B70] mb-3 leading-snug">
                      Focus on NLP pipeline integration, LLM fine-tuning, and scalable inference services.
                    </p>

                    {/* Skill Match Breakdown inside Card */}
                    <div className="space-y-1.5 pt-2 border-t border-[#E5E7E8] text-[10px]">
                      <div className="flex items-center justify-between text-[#656B70]">
                        <span>Profile Alignment</span>
                        <span className="font-semibold text-[#345B6B]">Exceptional</span>
                      </div>
                      <div className="w-full bg-[#F7F7F5] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#467A8F] to-[#78A9B8] h-full w-[94%]" />
                      </div>
                    </div>
                  </div>

                  {/* Secondary Card Sneak Peek */}
                  <div className="p-3.5 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] opacity-80">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[9px] font-medium text-[#656B70]">
                          Data Platform Inc
                        </div>
                        <div className="text-xs font-bold text-[#171A1C]">
                          Machine Learning Fellow
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-[#171A1C] bg-white px-2 py-0.5 rounded-md border border-[#E5E7E8]">
                        89%
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-auto pt-3">
                    <div className="w-full py-2.5 rounded-xl bg-[#171A1C] text-white text-center text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5">
                      <span>View Match Breakdown</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </DeviceFrame>

              {/* Floating Match Result Badge (Top Right) */}
              <div className="absolute -right-2 sm:-right-4 top-14 z-20">
                <FloatingSkillChip
                  type="score"
                  label="94% Match"
                  subtext="Semantic + Skill Alignment"
                />
              </div>

              {/* Floating Matched Evidence Chips */}
              <div className="absolute -right-4 sm:-right-6 top-36 z-20 space-y-2 hidden sm:block">
                <FloatingSkillChip label="Python" type="matched" />
                <FloatingSkillChip label="FastAPI" type="matched" />
                <FloatingSkillChip label="Machine Learning" type="matched" />
              </div>

              {/* Floating Missing Requirement Chip */}
              <div className="absolute -right-2 sm:right-2 bottom-12 z-20">
                <FloatingSkillChip
                  label="Docker"
                  type="missing"
                  subtext="Recommended prior to application"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

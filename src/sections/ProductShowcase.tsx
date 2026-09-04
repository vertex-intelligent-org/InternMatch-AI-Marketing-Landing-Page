import React from "react";
import { CheckIcon, SparklesIcon } from "@/components/Icons";

export function ProductShowcase() {
  return (
    <section id="product" className="py-24 sm:py-32 space-y-28 md:space-y-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            Product Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            Engineered for high signal.
            <br />
            Built for candidate clarity.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            Every feature is designed to reduce friction and eliminate ambiguity between your academic background and real employer roles.
          </p>
        </div>

        {/* ========================================================
            STORY A — CV ANALYSIS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 md:mb-36">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-xs font-bold tracking-widest text-[#345B6B] uppercase">
              CV ANALYSIS
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] mt-2 mb-3 tracking-tight">
              Your CV becomes your profile.
            </h3>
            <h4 className="text-lg font-semibold text-[#171A1C] mb-4">
              Upload once. Build from what already represents you.
            </h4>
            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              InternMatch turns your CV into a structured candidate profile so you don&apos;t repeatedly enter the same information.
            </p>
            <div className="space-y-3 pt-2 text-sm text-[#171A1C] font-medium">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>Structured extraction of skills, education, experience and projects</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>Structured skill taxonomy and project extraction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>Original CV is not rewritten by InternMatch</span>
              </div>
            </div>
          </div>

          {/* Stylized Mockup A (CV Analysis) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F7F7F5] border border-[#E5E7E8] shadow-sm relative overflow-hidden">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7E8] shadow-xs">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E7E8]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F2F7F8] text-[#467A8F] flex items-center justify-center font-bold text-sm border border-[#C7DDE3]">
                      CV
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#171A1C]">Sample_CV.pdf</div>
                      <div className="text-xs text-[#656B70]">CV processed · Structured profile created</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F2F7F8] text-[#345B6B] text-xs font-semibold border border-[#C7DDE3]">
                    Structured
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8]">
                    <span className="text-[11px] font-semibold text-[#656B70] uppercase tracking-wider block mb-1">
                      Extracted Skills
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="px-2 py-0.5 rounded-md bg-white border border-[#E5E7E8] font-medium text-[#171A1C]">Python</span>
                      <span className="px-2 py-0.5 rounded-md bg-white border border-[#E5E7E8] font-medium text-[#171A1C]">FastAPI</span>
                      <span className="px-2 py-0.5 rounded-md bg-white border border-[#E5E7E8] font-medium text-[#171A1C]">PyTorch</span>
                      <span className="px-2 py-0.5 rounded-md bg-white border border-[#E5E7E8] font-medium text-[#171A1C]">PostgreSQL</span>
                      <span className="px-2 py-0.5 rounded-md bg-[#F2F7F8] border border-[#C7DDE3] font-medium text-[#345B6B]">+8 more</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8]">
                    <span className="text-[11px] font-semibold text-[#656B70] uppercase tracking-wider block mb-1">
                      Academic Focus
                    </span>
                    <div className="font-semibold text-[#171A1C] mt-1">Üsküdar University</div>
                    <div className="text-[#656B70] mt-0.5">Computer Engineering, Senior</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            STORY B — MATCHUPS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 md:mb-36">
          {/* Stylized Mockup B (Matchups Screen) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F7F7F5] border border-[#E5E7E8] shadow-sm relative overflow-hidden">
              <div className="space-y-4">
                {/* Active Match Card */}
                <div className="bg-white rounded-2xl p-5 border border-[#C7DDE3] shadow-xs">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-[11px] font-semibold text-[#345B6B] uppercase tracking-wider">
                        High Alignment
                      </span>
                      <h4 className="text-base font-bold text-[#171A1C]">
                        AI Systems Intern
                      </h4>
                      <p className="text-xs text-[#656B70]">Autonomous Platforms Inc · Remote / Istanbul</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] text-sm font-bold">
                      94%
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#E5E7E8]">
                    <span className="text-[11px] text-[#656B70] font-medium">Core matches:</span>
                    <span className="px-2 py-0.5 rounded bg-[#F7F7F5] text-[#171A1C] text-[11px] font-medium">Python</span>
                    <span className="px-2 py-0.5 rounded bg-[#F7F7F5] text-[#171A1C] text-[11px] font-medium">Vector DBs</span>
                    <span className="px-2 py-0.5 rounded bg-[#F7F7F5] text-[#171A1C] text-[11px] font-medium">REST APIs</span>
                  </div>
                </div>

                {/* Secondary Match Card */}
                <div className="bg-white/80 rounded-2xl p-4 border border-[#E5E7E8] shadow-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#171A1C]">
                        Backend Engineering Fellow
                      </h4>
                      <p className="text-xs text-[#656B70]">Cloud Infrastructures · Hybrid</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F7F7F5] text-[#656B70] text-xs font-bold border border-[#E5E7E8]">
                      88%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-[#345B6B] uppercase">
              MATCHUPS
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] mt-2 mb-3 tracking-tight">
              Know where you actually fit.
            </h3>
            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              InternMatch combines skill alignment, semantic similarity and candidate preferences to surface more relevant internship opportunities.
            </p>
            <div className="p-4 rounded-2xl bg-[#F2F7F8] border border-[#C7DDE3] text-xs text-[#2D4C59] space-y-1">
              <div className="font-semibold">Deterministic Hybrid Scoring</div>
              <p className="text-[#656B70] leading-normal">
                Matches are scored from structured candidate and internship signals rather than generated from scratch. Students can see the main factors behind each match.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            STORY C — WHY YOU MATCH
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 md:mb-36">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-xs font-bold tracking-widest text-[#345B6B] uppercase">
              WHY YOU MATCH
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] mt-2 mb-3 tracking-tight">
              A percentage isn&apos;t enough.
            </h3>
            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              See which skills align, what&apos;s missing, and what you can improve before applying.
            </p>
            <div className="space-y-3 pt-2 text-sm text-[#171A1C] font-medium">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>Explicit breakdown of overlapping skills</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                  !
                </span>
                <span>Clear warning on missing prerequisites (e.g. Docker, CI/CD)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <SparklesIcon className="w-3 h-3 text-[#467A8F]" />
                </span>
                <span>Actionable tips to strengthen your application before submission</span>
              </div>
            </div>
          </div>

          {/* Stylized Mockup C (Why You Match Breakdown) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F7F7F5] border border-[#E5E7E8] shadow-sm relative overflow-hidden">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7E8] shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7E8]">
                  <span className="text-xs font-bold text-[#171A1C]">Diagnostic Fit Analysis</span>
                  <span className="text-xs font-mono font-bold text-[#345B6B]">Role: AI Intern</span>
                </div>

                {/* Overlapping skills */}
                <div>
                  <div className="text-[11px] font-bold text-[#656B70] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Direct Overlapping Skills (4)</span>
                    <span className="text-[#345B6B] font-semibold">Strong Match</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] text-xs font-medium flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3" /> Python
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] text-xs font-medium flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3" /> FastAPI
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] text-xs font-medium flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3" /> Machine Learning
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] text-xs font-medium flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3" /> SQL
                    </span>
                  </div>
                </div>

                {/* Missing requirements */}
                <div>
                  <div className="text-[11px] font-bold text-[#656B70] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Gaps &amp; Missing Skills (1)</span>
                    <span className="text-amber-700 font-semibold">Learnable</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Docker Containerization
                    </span>
                  </div>
                  <p className="text-[11px] text-[#656B70] mt-2">
                    Tip: Complete a basic Docker container project or include containerization in your course projects to address this gap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            STORY D — APPLICATION SUPPORT
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 md:mb-36">
          {/* Stylized Mockup D (Application Support) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F7F7F5] border border-[#E5E7E8] shadow-sm relative overflow-hidden">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7E8] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7E8]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#467A8F]" />
                    <span className="text-xs font-bold text-[#171A1C]">Application Support</span>
                  </div>
                  <span className="text-[11px] text-[#656B70] font-mono">Grounded in your candidate profile</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] text-xs space-y-2">
                  <div className="font-semibold text-[#171A1C]">Generated Tailored Introduction:</div>
                  <p className="text-[#656B70] leading-relaxed">
                    &ldquo;Having developed an end-to-end FastAPI and PyTorch NLP pipeline during university project coursework, my technical experience in structured feature extraction directly aligns with your AI Systems Intern role requirements...&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#656B70] pt-1">
                  <span className="text-[#345B6B] font-medium">✓ Grounded evidence</span>
                  <span>Review and edit before use</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-[#345B6B] uppercase">
              APPLICATION SUPPORT
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] mt-2 mb-3 tracking-tight">
              Go from match to application faster.
            </h3>
            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              Create context-aware application content grounded in your real background and the internship requirements.
            </p>
            <p className="text-sm text-[#656B70] leading-relaxed">
              Application content is grounded in your profile and the role requirements, helping you prepare a more relevant application.
            </p>
          </div>
        </div>

        {/* ========================================================
            STORY E — APPLICATION TRACKING
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-xs font-bold tracking-widest text-[#345B6B] uppercase">
              APPLICATION TRACKING
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] mt-2 mb-3 tracking-tight">
              Keep every application in one place.
            </h3>
            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              Follow progress from Saved to Applied, Interviewing and final outcomes.
            </p>
            
            {/* Visual Timeline Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-lg bg-[#F7F7F5] text-[#656B70] border border-[#E5E7E8]">Saved</span>
              <span className="text-slate-300">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#F2F7F8] text-[#345B6B] border border-[#C7DDE3]">Applied</span>
              <span className="text-slate-300">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#467A8F] text-white">Interviewing</span>
              <span className="text-slate-300">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#171A1C] text-white">Accepted</span>
            </div>
          </div>

          {/* Stylized Mockup E (Application Tracker) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F7F7F5] border border-[#E5E7E8] shadow-sm relative overflow-hidden">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7E8] shadow-xs space-y-3">
                <div className="text-xs font-bold text-[#171A1C] pb-2 border-b border-[#E5E7E8]">
                  Sample Application Pipeline
                </div>

                <div className="p-3 rounded-xl bg-[#F2F7F8] border border-[#C7DDE3] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#171A1C]">Autonomous Platforms Inc</div>
                    <div className="text-[11px] text-[#656B70]">AI Systems Intern</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#467A8F] text-white text-[10px] font-bold">
                    Interviewing
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#171A1C]">Cloud Scale Labs</div>
                    <div className="text-[11px] text-[#656B70]">Backend Fellow</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#345B6B] border border-[#C7DDE3] text-[10px] font-bold">
                    Applied
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#171A1C]">FinTech Research Hub</div>
                    <div className="text-[11px] text-[#656B70]">Data Engineering Intern</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#656B70] border border-[#E5E7E8] text-[10px] font-bold">
                    Saved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Globe2 } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import IndiaMapFigure from "@/components/ui/IndiaMapFigure";
import { faqItems } from "@/features/marketing/data/contact";

export default function BusinessPresence() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-8 sm:py-10 md:py-12 border-t border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* ================= LEFT COLUMN: OUR BUSINESS PRESENCE ================= */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
              {/* Left Side Content */}
              <div className="flex flex-col items-start text-left sm:col-span-7">
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                  Our Business Presence
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[38px] lg:leading-[1.15]">
                  We&rsquo;re Wherever <br />
                  Our Customers Are.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  AIVIQONE operates as a digital-first company, serving customers
                  across India and beyond, through our online platform.
                </p>

                {/* Built in India Card */}
                <div className="mt-8 flex w-full items-center gap-3.5 rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-4 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] backdrop-blur-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <Globe2 size={22} />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-sm font-bold text-white">Built in India. Serving Globally.</span>
                    <span className="mt-1 text-xs text-slate-400">
                      Delivering technology that helps businesses grow, from anywhere.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Real India Map Figure */}
              <div className="flex items-center justify-center sm:col-span-5">
                <IndiaMapFigure />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: FREQUENTLY ASKED QUESTIONS ================= */}
          <div className="flex flex-col lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Frequently Asked Questions
            </span>

            <div className="mt-4">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
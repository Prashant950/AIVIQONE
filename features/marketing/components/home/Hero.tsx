"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Layers,
  BrainCircuit,
  ShieldCheck,
  MessageSquare,
  Star,
} from "lucide-react";

const trustBadges = [
  {
    icon: Layers,
    label: "All-in-One CRM",
    sub: "Unified leads, pipeline & deals",
    highlight: "100% Synced",
  },
  {
    icon: BrainCircuit,
    label: "AI-Powered Copilot",
    sub: "Automated qualification & insights",
    highlight: "10x Faster",
  },
  {
    icon: MessageSquare,
    label: "Omnichannel WhatsApp",
    sub: "Two-way chats & instant alerts",
    highlight: "Instant Sync",
  },
  {
    icon: ShieldCheck,
    label: "Enterprise Security",
    sub: "SOC-2 ready & role permissions",
    highlight: "99.99% Uptime",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center overflow-hidden bg-[#020617] pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-8">
      {/* Background Lighting & Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top radial gradient flare */}
        <div className="absolute left-1/2 -top-28 h-[420px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-500/20 via-cyan-500/10 to-transparent blur-[110px]" />
        
        {/* Ambient colored side glows */}
        <div className="absolute -left-48 top-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[90px]" />
        <div className="absolute -right-48 top-1/3 h-80 w-80 rounded-full bg-cyan-500/15 blur-[90px]" />

        {/* Subtle Cyber Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1420px] flex-col items-center gap-5 px-4 text-center sm:gap-6 sm:px-6 lg:gap-7 lg:px-10">
        
        {/* Main Headline */}
        <div className="flex max-w-4xl flex-col items-center gap-2.5 sm:gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-400 sm:text-xs">
            THE MODERN SALES CRM
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12]">
            Your Leads Are Everywhere. <br className="hidden sm:inline" />
            Your Sales{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
              Shouldn’t Be.
            </span>
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-[17px]">
            AIVIQONE unifies your leads, WhatsApp conversations, automated follow-ups,
            calls, and pipeline intelligence into one hyper-fast, AI-driven sales command center.
          </p>
        </div>

        {/* CTA Button Row & Guarantee */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col w-full sm:w-auto items-center justify-center gap-3 sm:flex-row sm:gap-3.5">
            <Link
              href="/pricing"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-sky-400 to-blue-600 px-7 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(56,189,248,0.65)] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <Link
              href="/contact"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-sky-500/30 bg-[#060c1a]/90 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-[#08122c] hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] active:scale-[0.98]"
            >
              <Calendar size={17} className="text-sky-400" />
              <span>Book a Live Demo</span>
            </Link>
          </div>

          {/* Social Proof & Trust rating */}
          <div className="mt-2.5 pt-1 sm:mt-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-slate-900 bg-sky-500 text-[9px] font-bold text-white shadow-sm">SK</div>
                <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-slate-900 bg-cyan-500 text-[9px] font-bold text-white shadow-sm">MR</div>
                <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-slate-900 bg-blue-600 text-[9px] font-bold text-white shadow-sm">JL</div>
                <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-slate-900 bg-emerald-500 text-[9px] font-bold text-white shadow-sm">AD</div>
              </div>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-200 text-[11px]">4.9/5</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-300 text-[11px] sm:text-xs">Loved by 1,200+ Sales Reps</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400 text-[11px] sm:text-xs">No credit card required</span>
          </div>
        </div>

        {/* Trust & Key Capability Badges Grid */}
        <div className="mt-1 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3.5">
          {trustBadges.map(({ icon: Icon, label, sub, highlight }) => (
            <div
              key={label}
              className="group relative flex items-center gap-3 rounded-2xl border border-sky-500/20 bg-[#060c1a]/85 p-3 sm:p-3.5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-[#08122c] hover:shadow-[0_0_22px_rgba(56,189,248,0.2)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_12px_rgba(2,132,199,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:bg-sky-500/20 group-hover:text-sky-300">
                <Icon size={20} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {label}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 leading-snug">{sub}</span>
                <span className="mt-1 inline-flex text-[9.5px] font-bold text-sky-400/90 uppercase tracking-wider">
                  ✦ {highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


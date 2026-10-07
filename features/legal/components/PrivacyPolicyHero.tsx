"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Lock,
  UserCheck,
  Database,
  Building2,
  Calendar,
  ArrowRight,
  KeyRound,
  FileCheck2,
  CheckCircle2,
  Cpu,
  EyeOff,
  Server,
} from "lucide-react";
import { lastUpdated } from "@/features/legal/data/privacyPolicy";

export default function PrivacyPolicyHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#020617] py-8 sm:py-10 lg:py-14 border-b border-slate-800/70">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1420px] px-3.5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Rich Typography, Badges & Actions (5 Cols) */}
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Legal &amp; Compliance
            </div>

            <h1 className="mt-3.5 sm:mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[50px] lg:leading-[1.12]">
              Your Privacy &amp; Data <br className="hidden sm:inline" />
              Security <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Matter to Us.</span>
            </h1>

            <p className="mt-3 sm:mt-5 max-w-lg text-xs leading-relaxed text-slate-300 sm:text-base">
              AIVIQONE is committed to protecting your privacy with enterprise-grade encryption, strict tenant isolation, and transparent data practices aligned with global data protection standards.
            </p>

            <div className="my-4 sm:my-5 h-[2px] w-12 bg-sky-400" />

            {/* Meta Information Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-xl border border-sky-500/20 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm backdrop-blur-sm">
                <Building2 size={15} className="text-sky-400 shrink-0" />
                <span className="font-semibold text-white text-xs sm:text-sm">AIVIQONE Technologies Pvt. Ltd.</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm">
                <Calendar size={15} className="text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm">
                  Last Updated: <strong className="text-white">{lastUpdated}</strong>
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#policy-content"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95"
              >
                Read Full Policy
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact-us"
                className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-[#060c1a]/90 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-[#070e24] hover:text-white"
              >
                Grievance Officer
                <UserCheck size={15} className="text-sky-400" />
              </a>
            </div>

            {/* Trust Assurance Pills */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-800/80 pt-4 sm:pt-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>DPDP Act 2023 Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>AES-256 Bit Encryption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Zero Data Selling</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Security Architecture Diagram (7 Cols) */}
          <div className="w-full lg:col-span-7">
            <div className="relative mx-auto flex w-full max-w-full lg:max-w-[690px] items-center justify-center py-2 lg:h-[515px]">
              
              {/* SVG Curved Connectors & Network Signals */}
              <svg
                viewBox="0 0 700 515"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                  </linearGradient>

                  <filter id="secGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Top-Left -> Center */}
                <path
                  d="M 195 80 C 255 80, 265 185, 310 205"
                  fill="none"
                  stroke="url(#secGrad)"
                  strokeWidth="1.6"
                  strokeDasharray="3.5 3.5"
                />
                <circle cx="195" cy="80" r="4.5" fill="#38bdf8" filter="url(#secGlow)" />
                <circle cx="195" cy="80" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

                {/* Top-Right -> Center */}
                <path
                  d="M 505 80 C 445 80, 435 185, 390 205"
                  fill="none"
                  stroke="url(#secGrad)"
                  strokeWidth="1.6"
                  strokeDasharray="3.5 3.5"
                />
                <circle cx="505" cy="80" r="4.5" fill="#38bdf8" filter="url(#secGlow)" />
                <circle cx="505" cy="80" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

                {/* Mid-Left -> Center */}
                <path
                  d="M 205 305 C 265 305, 275 250, 310 235"
                  fill="none"
                  stroke="url(#secGrad)"
                  strokeWidth="1.6"
                  strokeDasharray="3.5 3.5"
                />
                <circle cx="205" cy="305" r="4.5" fill="#38bdf8" filter="url(#secGlow)" />
                <circle cx="205" cy="305" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

                {/* Mid-Right -> Center */}
                <path
                  d="M 495 305 C 435 305, 425 250, 390 235"
                  fill="none"
                  stroke="url(#secGrad)"
                  strokeWidth="1.6"
                  strokeDasharray="3.5 3.5"
                />
                <circle cx="495" cy="305" r="4.5" fill="#38bdf8" filter="url(#secGlow)" />
                <circle cx="495" cy="305" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

                {/* Center -> Bottom Pipeline */}
                <path
                  d="M 350 270 L 350 435"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="1.6"
                  strokeDasharray="3.5 3.5"
                />
                <circle cx="350" cy="435" r="4.5" fill="#38bdf8" filter="url(#secGlow)" />
                <circle cx="350" cy="435" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />
              </svg>

              {/* Grid Cards Container */}
              <div className="relative grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[515px] lg:grid-cols-1">
                
                {/* 1. Top-Left Card: Privacy Controls */}
                <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.25)] lg:absolute lg:left-0 lg:top-0 lg:w-[210px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                      <UserCheck size={14} />
                    </span>
                    <p className="text-[13px] font-bold text-slate-100">User Privacy Rights</p>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { label: "Data Access", status: "Enabled", color: "#38bdf8" },
                      { label: "Right to Erasure", status: "Active", color: "#34d399" },
                      { label: "Consent Logs", status: "Audited", color: "#fbbf24" },
                      { label: "Data Export", status: "Instant", color: "#a855f7" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1.5 text-[11.5px]">
                          <span className="h-1.5 w-1.5 rounded-sm" style={{ backgroundColor: item.color }} />
                          {item.label}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-200">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Top-Right Card: Cryptographic Security */}
                <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.25)] lg:absolute lg:right-0 lg:top-0 lg:w-[210px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                      <KeyRound size={14} />
                    </span>
                    <p className="text-[13px] font-bold text-slate-100">Encryption Shield</p>
                  </div>
                  <p className="text-[10px] text-slate-400">Standard</p>
                  <p className="text-sm font-extrabold text-white">AES-256 &amp; TLS 1.3</p>
                  <p className="mt-0.5 text-[11px] font-semibold text-emerald-400">
                    ✓ Zero Plaintext Exposure
                  </p>
                  
                  {/* Security waveform indicator */}
                  <div className="mt-2 h-5 w-full overflow-hidden rounded bg-slate-900/60 p-0.5">
                    <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full">
                      <path
                        d="M 0,10 Q 15,2 30,10 T 60,10 T 80,4 T 100,10"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                </div>

                {/* CENTER: Glowing Shield Orbit Core with AIVIQONE Logo */}
                <div className="relative z-20 my-4 flex items-center justify-center lg:absolute lg:left-1/2 lg:top-[39%] lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
                  {/* Rotating Orbit Dash Ring */}
                  <div className="absolute -inset-6 animate-[spin_26s_linear_infinite] rounded-full border border-dashed border-sky-400/40" />
                  
                  {/* Deep Ambient Glow */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500/30 to-cyan-500/30 blur-2xl animate-pulse" />

                  {/* Main Core Shield Container */}
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-sky-400/70 bg-[#030712] shadow-[0_0_50px_rgba(56,189,248,0.55)]">
                    <div className="flex h-22 w-22 flex-col items-center justify-center rounded-full border border-sky-400/30 bg-[#020617] p-2 overflow-hidden text-center">
                      <div className="relative flex items-center justify-center">
                        <Shield size={42} className="text-sky-400/30 stroke-[1.5]" />
                        <Lock size={22} className="absolute text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                      </div>
                      <span className="text-[9px] font-extrabold tracking-wider text-cyan-300 uppercase mt-0.5">
                        PROTECTED
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Mid-Left Card: Data Isolation */}
                <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.25)] lg:absolute lg:left-0 lg:top-[46%] lg:w-[210px]">
                  <p className="mb-2 text-[13px] font-bold text-slate-100">Data Isolation</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                        <Server size={13} />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-medium text-slate-200">Tenant Siloing</span>
                        <span className="text-[10px] text-slate-400">Strict Separation</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                        <Database size={13} />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-medium text-slate-200">Encrypted Backups</span>
                        <span className="text-[10px] text-slate-400">Point-in-Time</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Mid-Right Card: Grievance & Compliance */}
                <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.25)] lg:absolute lg:right-0 lg:top-[46%] lg:w-[210px]">
                  <p className="mb-2 text-[13px] font-bold text-slate-100">Grievance SLA</p>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center justify-between text-[11.5px]">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <FileCheck2 size={13} className="text-emerald-400 shrink-0" /> Response SLA
                      </span>
                      <span className="text-[10.5px] font-bold text-emerald-400">&lt; 24 Hours</span>
                    </div>
                    <div className="flex items-center justify-between text-[11.5px]">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <EyeOff size={13} className="text-sky-400 shrink-0" /> Third-Party Ads
                      </span>
                      <span className="text-[10.5px] font-bold text-sky-400">Zero / None</span>
                    </div>
                    <div className="flex items-center justify-between text-[11.5px]">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Cpu size={13} className="text-purple-400 shrink-0" /> Audit Logging
                      </span>
                      <span className="text-[10.5px] font-bold text-slate-200">Continuous</span>
                    </div>
                  </div>
                </div>

                {/* 5. Bottom Horizontal Pipeline Bar */}
                <div className="z-10 mt-6 flex w-full items-center justify-between overflow-x-auto rounded-2xl border border-sky-500/20 bg-[#060c18]/95 px-5 py-3 shadow-xl backdrop-blur-md lg:absolute lg:bottom-0 lg:left-0 lg:mt-0">
                  {[
                    { label: "Collection", icon: Database },
                    { label: "Encryption", icon: Lock },
                    { label: "Access Control", icon: KeyRound },
                    { label: "Audit Trails", icon: FileCheck2 },
                    { label: "Retention", icon: Server },
                    { label: "User Rights", icon: UserCheck },
                  ].map((item, idx, arr) => (
                    <div key={item.label} className="flex items-center gap-2.5 sm:gap-4">
                      <div className="group flex flex-col items-center gap-1 cursor-default transition-all duration-300">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:border-sky-400 group-hover:bg-sky-500/20 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                          <item.icon size={16} />
                        </div>
                        <span className="text-[11.5px] font-medium text-slate-300 whitespace-nowrap">
                          {item.label}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight size={12} className="text-slate-600 shrink-0 mb-3" />
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
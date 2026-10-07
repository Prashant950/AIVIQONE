"use client";

import {
  Lock,
  User,
  SlidersHorizontal,
  Building2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Database,
  KeyRound,
  ShieldAlert,
} from "lucide-react";
import { cookiePolicyMeta } from "@/features/legal/data/cookiePolicy";

export default function CookiePolicyHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#020617] py-8 sm:py-10 lg:py-16 border-b border-slate-800/70">
      {/* Ambient background glows & cosmic depth */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[90px]" />

      <div className="relative mx-auto w-full max-w-[1420px] px-3.5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Rich Typography, Meta Badges & Actions (6 Cols) */}
          <div className="flex flex-col items-start text-left lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Legal &amp; Privacy Architecture
            </div>

            <h1 className="mt-3.5 sm:mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[46px] lg:leading-[1.14]">
              Cookie Policy &amp; <br className="hidden sm:inline" />
              Tracking <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies.</span>
            </h1>

            <p className="mt-3 sm:mt-4 max-w-lg text-xs leading-relaxed text-slate-300 sm:text-base">
              Learn how AIVIQONE Technologies uses cookies and encrypted identifiers to deliver secure authentication, protect account integrity, and provide responsive platform intelligence.
            </p>

            <div className="my-4 sm:my-5 h-[2px] w-12 bg-sky-400" />

            {/* Meta Information Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-xl border border-sky-500/20 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm backdrop-blur-sm">
                <Building2 size={15} className="text-sky-400 shrink-0" />
                <span className="font-semibold text-white text-xs sm:text-sm">{cookiePolicyMeta.company}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm">
                <Calendar size={15} className="text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm">
                  Version: <strong className="text-white">{cookiePolicyMeta.version}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm">
                <span className="text-slate-400 text-xs sm:text-sm">Last Updated:</span>
                <strong className="text-cyan-300 text-xs sm:text-sm">{cookiePolicyMeta.lastUpdated}</strong>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#policy-content"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95"
              >
                Read Full Policy (41 Sections)
                <ArrowRight size={15} />
              </a>
              <a
                href="#cookie-preferences"
                className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-[#060c1a]/90 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-[#070e24] hover:text-white"
              >
                <SlidersHorizontal size={15} className="text-cyan-400" />
                Manage Preferences
              </a>
            </div>

            {/* Trust Assurance Pills */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>DPDPA 2023 Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Zero Unauthorized Tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Encrypted Vault Security</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End 3D Cyber Lock / Shield (Taala Band) Graphic (6 Cols) */}
          <div className="flex w-full items-center justify-center lg:col-span-6">
            <div className="relative flex h-[310px] w-[290px] sm:h-[450px] sm:w-[440px] lg:h-[490px] lg:w-[480px] items-center justify-center">
              
              {/* Outer Volumetric Glow */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-sky-500/25 via-cyan-400/30 to-blue-600/25 blur-[75px] animate-pulse" />

              {/* 3D Orbiting Gyroscope Rings (SVG) */}
              <svg
                viewBox="0 0 480 480"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.75" />
                  </linearGradient>

                  <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Elliptical 3D Ring 1 */}
                <ellipse
                  cx="240"
                  cy="255"
                  rx="210"
                  ry="80"
                  fill="none"
                  stroke="url(#orbitGrad1)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  transform="rotate(-20 240 255)"
                  className="opacity-75 animate-[spin_55s_linear_infinite]"
                />

                {/* Elliptical 3D Ring 2 */}
                <ellipse
                  cx="240"
                  cy="255"
                  rx="200"
                  ry="70"
                  fill="none"
                  stroke="url(#orbitGrad1)"
                  strokeWidth="1.2"
                  strokeDasharray="6 6"
                  transform="rotate(25 240 255)"
                  className="opacity-60 animate-[spin_45s_linear_infinite_reverse]"
                />

                {/* Outer Orbit Path */}
                <ellipse
                  cx="240"
                  cy="255"
                  rx="220"
                  ry="95"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1"
                  opacity="0.3"
                  transform="rotate(-4 240 255)"
                />

                {/* Glowing Nodes on Orbit */}
                <circle cx="95" cy="195" r="3" fill="#38bdf8" filter="url(#neonGlow)" />
                <circle cx="390" cy="130" r="3.5" fill="#06b6d4" filter="url(#neonGlow)" />
                <circle cx="375" cy="375" r="2.5" fill="#38bdf8" filter="url(#neonGlow)" />
                <circle cx="115" cy="370" r="2" fill="#06b6d4" opacity="0.85" />
                <circle cx="240" cy="80" r="3" fill="#38bdf8" filter="url(#neonGlow)" />
                <circle cx="240" cy="430" r="2.5" fill="#0284c7" opacity="0.85" />
              </svg>

              {/* Satellite Node 1: Left Lock Badge (Taala band) */}
              <div className="absolute left-1 sm:left-3 top-[32%] z-20 flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                <div className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-sky-400/60 bg-[#040c1e]/95 text-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.7)] backdrop-blur-md">
                  <span className="absolute -inset-1 rounded-full border border-sky-400/40 animate-ping opacity-30" />
                  <Lock size={18} className="drop-shadow-[0_0_10px_rgba(56,189,248,1)]" />
                </div>
                <span className="rounded-full bg-[#020617]/95 px-2.5 py-0.5 text-[9.5px] font-bold text-sky-300 border border-sky-500/40 shadow-md">
                  Locked
                </span>
              </div>

              {/* Satellite Node 2: Right Top User Consent Badge */}
              <div className="absolute right-1 sm:right-3 top-[26%] z-20 flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                <div className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-cyan-400/60 bg-[#040c1e]/95 text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.7)] backdrop-blur-md">
                  <span className="absolute -inset-1 rounded-full border border-cyan-400/40 animate-ping opacity-30" />
                  <User size={18} className="drop-shadow-[0_0_10px_rgba(6,182,212,1)]" />
                </div>
                <span className="rounded-full bg-[#020617]/95 px-2.5 py-0.5 text-[9.5px] font-bold text-cyan-300 border border-cyan-500/40 shadow-md">
                  User Consent
                </span>
              </div>

              {/* Satellite Node 3: Right Bottom Data Vault Badge */}
              <div className="absolute right-6 sm:right-9 bottom-[12%] z-20 flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-blue-400/60 bg-[#040c1e]/95 text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.7)] backdrop-blur-md">
                  <Database size={16} className="drop-shadow-[0_0_10px_rgba(59,130,246,1)]" />
                </div>
                <span className="rounded-full bg-[#020617]/95 px-2.5 py-0.5 text-[9.5px] font-bold text-blue-300 border border-blue-500/40 shadow-md">
                  Data Vault
                </span>
              </div>

              {/* CENTERPIECE: CYBER SECURITY LOCK WITH SHIELD BODY & ENCLOSED COOKIE */}
              <div className="relative z-10 flex h-[260px] w-[210px] sm:h-[320px] sm:w-[260px] lg:h-[350px] lg:w-[285px] flex-col items-center justify-center">
                
                {/* Padlock Shackle + Military Shield Body (SVG) */}
                <svg
                  viewBox="0 0 280 340"
                  className="h-full w-full drop-shadow-[0_0_40px_rgba(56,189,248,0.75)]"
                >
                  <defs>
                    {/* Metallic Chrome Shackle Gradient */}
                    <linearGradient id="shackleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0369a1" />
                      <stop offset="30%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="70%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>

                    {/* Shackle Inner Hollow Gradient */}
                    <linearGradient id="shackleInnerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#082f49" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#082f49" />
                    </linearGradient>

                    {/* Shield Body Deep Metallic Background */}
                    <linearGradient id="shieldBodyFill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#081b38" stopOpacity="0.98" />
                      <stop offset="45%" stopColor="#020713" stopOpacity="0.99" />
                      <stop offset="100%" stopColor="#05152d" stopOpacity="0.98" />
                    </linearGradient>

                    {/* Outer Neon Cyber Rim */}
                    <linearGradient id="neonRim" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="35%" stopColor="#06b6d4" />
                      <stop offset="70%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>

                    {/* Glass Reflection */}
                    <linearGradient id="glassGlare" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                      <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* 1. MASTER LOCK SHACKLE (Taala Handle) */}
                  {/* Outer Shackle Arc */}
                  <path
                    d="M 92 88 L 92 50 C 92 20, 188 20, 188 50 L 188 88"
                    fill="none"
                    stroke="url(#shackleGrad)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Inner Shackle Highlight Arc */}
                  <path
                    d="M 92 88 L 92 50 C 92 20, 188 20, 188 50 L 188 88"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  {/* Left & Right Lock Cylinder Collars */}
                  <rect x="80" y="72" width="24" height="14" rx="3" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
                  <rect x="176" y="72" width="24" height="14" rx="3" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />

                  {/* 2. MILITARY ANGULAR SECURITY SHIELD BODY */}
                  {/* Outer Shield Shell */}
                  <path
                    d="M 140 82 
                       L 245 82 
                       C 252 82, 258 88, 258 95
                       L 252 180 
                       C 246 245, 195 295, 140 328 
                       C 85 295, 34 245, 28 180 
                       L 22 95 
                       C 22 88, 28 82, 35 82 
                       Z"
                    fill="url(#shieldBodyFill)"
                    stroke="url(#neonRim)"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />

                  {/* Inner Concentric Shield Plate */}
                  <path
                    d="M 140 96 
                       L 232 96 
                       L 238 175 
                       C 232 232, 188 278, 140 308 
                       C 92 278, 48 232, 42 175 
                       L 48 96 
                       Z"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.8"
                  />

                  {/* Top-Left Glass Reflection Shard */}
                  <path
                    d="M 40 90 L 130 90 L 52 230 C 44 200, 40 160, 40 90 Z"
                    fill="url(#glassGlare)"
                  />

                  {/* Security Corner Rivets */}
                  <circle cx="42" cy="100" r="3" fill="#38bdf8" />
                  <circle cx="238" cy="100" r="3" fill="#38bdf8" />
                  <circle cx="140" cy="316" r="3" fill="#06b6d4" />
                </svg>

                {/* Inner Vault Chamber: Glowing Cookie & Integrated Lock Keyhole */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 text-center">
                  
                  {/* Glowing 3D Cyber Cookie */}
                  <div className="relative flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 drop-shadow-[0_0_22px_rgba(56,189,248,0.95)] transition-transform duration-500 hover:scale-105"
                    >
                      <defs>
                        <radialGradient id="cookieCore" cx="45%" cy="45%" r="55%">
                          <stop offset="0%" stopColor="#082245" />
                          <stop offset="85%" stopColor="#020814" />
                          <stop offset="100%" stopColor="#0a2a54" />
                        </radialGradient>
                      </defs>

                      {/* Cookie Outline with Crisp Bite Mark */}
                      <path
                        d="M 50 10
                           A 40 40 0 0 1 87 36
                           C 81 38, 77 44, 79 50
                           C 81 56, 87 58, 84 65
                           C 81 72, 73 72, 73 78
                           A 40 40 0 0 1 50 90
                           A 40 40 0 1 1 50 10 Z"
                        fill="url(#cookieCore)"
                        stroke="#38bdf8"
                        strokeWidth="3.2"
                        strokeLinejoin="round"
                      />

                      {/* Luminous Chocolate Chip Dots */}
                      <circle cx="34" cy="34" r="4.5" fill="#38bdf8" />
                      <circle cx="56" cy="30" r="3.5" fill="#06b6d4" />
                      <circle cx="45" cy="52" r="5" fill="#38bdf8" />
                      <circle cx="28" cy="58" r="4" fill="#0284c7" />
                      <circle cx="50" cy="74" r="4" fill="#38bdf8" />
                      <circle cx="68" cy="50" r="3.2" fill="#06b6d4" />
                    </svg>

                    {/* Integrated Keyhole & Lock Badge right at the center bottom */}
                    <div className="absolute -bottom-2 -right-1 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-sky-400/90 bg-[#030816] text-sky-300 shadow-[0_0_20px_rgba(56,189,248,1)] backdrop-blur-md">
                      <Lock size={16} className="drop-shadow-[0_0_8px_rgba(56,189,248,1)]" />
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="mt-2.5 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3 py-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <ShieldCheck size={13} className="text-cyan-400" />
                    <span>LOCKED &amp; SECURED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import {
  Heart,
  Target,
  Gauge,
  Layers,
  Handshake,
  Compass,
  Boxes,
  FileText,
  Phone,
  BarChart3,
  CircleDollarSign,
  Landmark,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Left Column: 6 Principles Cards
const principlesList = [
  {
    icon: Heart,
    title: "CUSTOMER FIRST",
    description: "Build around real customer problems.",
  },
  {
    icon: Target,
    title: "OWNERSHIP",
    description: "Take responsibility for outcomes.",
  },
  {
    icon: Gauge,
    title: "SPEED",
    description: "Move quickly without sacrificing quality.",
  },
  {
    icon: Layers,
    title: "SIMPLICITY",
    description: "Remove unnecessary complexity.",
  },
  {
    icon: Handshake,
    title: "TRANSPARENCY",
    description: "Communicate clearly and honestly.",
  },
  {
    icon: Compass,
    title: "LONG-TERM THINKING",
    description: "Build systems that can grow for years.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
          
          {/* ================= COLUMN 1: WHAT WE BELIEVE (7 COLS) ================= */}
          <div className="flex flex-col text-left pr-0 lg:col-span-7 lg:border-r lg:border-slate-800/80 lg:pr-6 xl:pr-8">
            <div className="min-h-[85px] sm:min-h-[95px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                WHAT WE BELIEVE
              </span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-[26px] lg:text-[28px]">
                Principles That Shape How We Build.
              </h2>
            </div>

            {/* 6 Principles Cards in 1 Row on Desktop */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6 sm:gap-2.5">
              {principlesList.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group flex flex-col justify-between rounded-2xl border border-sky-500/20 bg-[#060e22]/90 p-3 sm:p-3.5 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] min-h-[175px]"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div>
                      <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-sky-500/30 bg-[#030919] text-sky-400 shadow-[0_0_12px_rgba(2,132,199,0.25)] transition-all duration-300 group-hover:border-sky-300 group-hover:bg-[#071330] group-hover:text-white group-hover:shadow-[0_0_18px_rgba(56,189,248,0.6)]">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-3 text-[11px] sm:text-[11.5px] font-extrabold tracking-wider text-white uppercase leading-tight">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[12px] leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= COLUMN 2: THE AIVIQONE ECOSYSTEM (5 COLS) ================= */}
          <div className="flex flex-col text-left pl-0 lg:col-span-5 lg:pl-6 xl:pl-8">
            <div className="min-h-[85px] sm:min-h-[95px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                THE AIVIQONE ECOSYSTEM
              </span>
            </div>

            {/* Ecosystem Radial Circuit Diagram */}
            <div className="relative mx-auto mt-2 flex h-[290px] sm:h-[320px] w-full max-w-[440px] scale-[0.85] xs:scale-[0.92] sm:scale-100 origin-center items-center justify-center select-none">
              
              {/* SVG Connecting High-Tech Circuit Traces with glowing end nodes */}
              <svg
                viewBox="0 0 480 320"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <filter id="ecosystemGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <radialGradient id="orbitAmbientGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient Center Glow */}
                <circle cx="240" cy="160" r="130" fill="url(#orbitAmbientGlow)" />

                {/* Subtle orbit pulse rings */}
                <circle cx="240" cy="160" r="105" fill="none" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.25" />
                <circle cx="240" cy="160" r="65" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.3" />

                {/* 1. TOP: CRM */}
                <line x1="240" y1="115" x2="240" y2="55" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" />
                <circle cx="240" cy="55" r="3" fill="#38bdf8" filter="url(#ecosystemGlow)" />

                {/* 2. TOP-RIGHT: LEADS */}
                <line x1="280" y1="130" x2="350" y2="78" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" />
                <circle cx="350" cy="78" r="3" fill="#38bdf8" filter="url(#ecosystemGlow)" />

                {/* 3. MIDDLE-RIGHT: WHATSAPP */}
                <line x1="295" y1="160" x2="355" y2="160" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" />
                <circle cx="355" cy="160" r="3" fill="#38bdf8" filter="url(#ecosystemGlow)" />

                {/* 4. BOTTOM-RIGHT: VOIP */}
                <line x1="280" y1="190" x2="350" y2="242" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" />
                <circle cx="350" cy="242" r="3" fill="#38bdf8" filter="url(#ecosystemGlow)" />

                {/* 5. BOTTOM-LEFT: ANALYTICS */}
                <line x1="200" y1="190" x2="130" y2="242" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" />
                <circle cx="130" cy="242" r="3" fill="#38bdf8" filter="url(#ecosystemGlow)" />

                {/* 6. MIDDLE-LEFT: SMART SALARY */}
                <line x1="185" y1="160" x2="125" y2="160" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" />
                <circle cx="125" cy="160" r="3" fill="#38bdf8" filter="url(#ecosystemGlow)" />

                {/* 7. TOP-LEFT: SMART LENDING */}
                <line x1="200" y1="130" x2="130" y2="78" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" />
                <circle cx="130" cy="78" r="3" fill="#38bdf8" filter="url(#ecosystemGlow)" />
              </svg>

              {/* Central Glowing A1 AIVIQONE Pod */}
              <div className="relative z-10 flex h-20 w-20 sm:h-[88px] sm:w-[88px] flex-col items-center justify-center rounded-full border-2 border-sky-400 bg-[#030919] shadow-[0_0_35px_rgba(56,189,248,0.75)] transition-transform duration-300 hover:scale-105">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                  <Image
                    src="/A_logo.png"
                    alt="A1 AIVIQONE Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <span className="mt-0.5 text-[8.5px] sm:text-[9px] font-black tracking-widest text-white uppercase drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]">
                  AIVIQONE
                </span>
              </div>

              {/* 7 Satellite Glassmorphism Cards */}

              {/* 1. TOP: CRM */}
              <div className="absolute left-1/2 top-1 z-20 -translate-x-1/2 flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#061028]/95 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-[0_0_15px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <Boxes size={13} className="text-sky-400 shrink-0" />
                <span>CRM</span>
              </div>

              {/* 2. TOP-RIGHT: LEADS */}
              <div className="absolute right-3 sm:right-6 top-[15%] z-20 flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#061028]/95 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-[0_0_15px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <FileText size={13} className="text-sky-400 shrink-0" />
                <span>LEADS</span>
              </div>

              {/* 3. MIDDLE-RIGHT: WHATSAPP */}
              <div className="absolute right-0 sm:right-2 top-1/2 z-20 -translate-y-1/2 flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#061028]/95 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-[0_0_15px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <FaWhatsapp size={14} className="text-[#25D366] shrink-0" />
                <span>WHATSAPP</span>
              </div>

              {/* 4. BOTTOM-RIGHT: VOIP */}
              <div className="absolute right-3 sm:right-6 bottom-[15%] z-20 flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#061028]/95 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-[0_0_15px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <Phone size={13} className="text-sky-400 shrink-0" />
                <span>VOIP</span>
              </div>

              {/* 5. BOTTOM-LEFT: ANALYTICS */}
              <div className="absolute left-3 sm:left-6 bottom-[15%] z-20 flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#061028]/95 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-[0_0_15px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <BarChart3 size={13} className="text-sky-400 shrink-0" />
                <span>ANALYTICS</span>
              </div>

              {/* 6. MIDDLE-LEFT: SMART SALARY */}
              <div className="absolute left-0 sm:left-2 top-1/2 z-20 -translate-y-1/2 flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#061028]/95 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-[0_0_15px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <CircleDollarSign size={13} className="text-sky-400 shrink-0" />
                <span>SMART SALARY</span>
              </div>

              {/* 7. TOP-LEFT: SMART LENDING */}
              <div className="absolute left-3 sm:left-6 top-[15%] z-20 flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#061028]/95 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-[0_0_15px_rgba(2,132,199,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <Landmark size={13} className="text-sky-400 shrink-0" />
                <span>SMART LENDING</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
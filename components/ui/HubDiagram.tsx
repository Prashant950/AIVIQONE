"use client";

import Image from "next/image";
import { Boxes, MessagesSquare, Zap, BarChart3, ShieldCheck } from "lucide-react";

export default function HubDiagram() {
    return (
        <div className="w-full flex items-center justify-center overflow-hidden h-[240px] xs:h-[280px] sm:h-[370px] md:h-[420px]">
            {/* Fixed-Width Canvas with Proportional Auto-Scaling across all screens */}
            <div className="relative w-[580px] h-[400px] shrink-0 scale-[0.52] xs:scale-[0.62] sm:scale-[0.82] md:scale-100 origin-center select-none">

                {/* 1. PERSPECTIVE FLOOR GRID & ARROW CONNECTOR TRACES SVG */}
                <svg
                    viewBox="0 0 580 400"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                >
                    <defs>
                        {/* Soft Ambient Radial Floor Underglow */}
                        <radialGradient id="hubAmbientFloor" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                        </radialGradient>

                        {/* 3D Pedestal Body Gradient */}
                        <linearGradient id="pedestalCylinderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0a2550" />
                            <stop offset="50%" stopColor="#031026" />
                            <stop offset="100%" stopColor="#010614" />
                        </linearGradient>

                        {/* 3D Pedestal Top Face Gradient */}
                        <radialGradient id="pedestalTopFace" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0b2c60" />
                            <stop offset="60%" stopColor="#030e24" />
                            <stop offset="100%" stopColor="#010613" />
                        </radialGradient>

                        {/* Neon Glow Filter */}
                        <filter id="neonPulse" x="-40%" y="-40%" width="180%" height="180%">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        {/* Arrow Head Marker (Pointing toward cards) */}
                        <marker
                            id="cyanArrow"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="5"
                            markerHeight="5"
                            orient="auto-start-reverse"
                        >
                            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
                        </marker>
                    </defs>

                    {/* Ambient Floor Glow */}
                    <ellipse cx="290" cy="200" rx="230" ry="120" fill="url(#hubAmbientFloor)" />

                    {/* --- LIGHT PERSPECTIVE RINGS --- */}
                    <ellipse cx="290" cy="200" rx="225" ry="115" fill="none" stroke="#0ea5e9" strokeWidth="0.6" strokeOpacity="0.16" />
                    <ellipse cx="290" cy="200" rx="165" ry="85" fill="none" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.22" />
                    <ellipse cx="290" cy="200" rx="110" ry="58" fill="none" stroke="#0284c7" strokeWidth="0.8" strokeOpacity="0.26" />

                    {/* ================= 5 ARROW CONNECTING CIRCUIT TRACES ================= */}

                    {/* 1. TOP ARROW TRACE (CRM) */}
                    <line
                        x1="290"
                        y1="150"
                        x2="290"
                        y2="68"
                        stroke="#38bdf8"
                        strokeWidth="1.8"
                        markerEnd="url(#cyanArrow)"
                    />
                    <circle cx="290" cy="150" r="3" fill="#38bdf8" filter="url(#neonPulse)" />

                    {/* 2. LEFT ARROW TRACE (COMMUNICATION) */}
                    <line
                        x1="205"
                        y1="200"
                        x2="150"
                        y2="200"
                        stroke="#38bdf8"
                        strokeWidth="1.8"
                        markerEnd="url(#cyanArrow)"
                    />
                    <circle cx="205" cy="200" r="3" fill="#38bdf8" filter="url(#neonPulse)" />

                    {/* 3. RIGHT ARROW TRACE (AUTOMATION) */}
                    <line
                        x1="375"
                        y1="200"
                        x2="430"
                        y2="200"
                        stroke="#38bdf8"
                        strokeWidth="1.8"
                        markerEnd="url(#cyanArrow)"
                    />
                    <circle cx="375" cy="200" r="3" fill="#38bdf8" filter="url(#neonPulse)" />

                    {/* 4. BOTTOM-LEFT ARROW TRACE (ANALYTICS) */}
                    <line
                        x1="235"
                        y1="240"
                        x2="180"
                        y2="315"
                        stroke="#38bdf8"
                        strokeWidth="1.8"
                        markerEnd="url(#cyanArrow)"
                    />
                    <circle cx="235" cy="240" r="3" fill="#38bdf8" filter="url(#neonPulse)" />

                    {/* 5. BOTTOM-RIGHT ARROW TRACE (DECISION INTELLIGENCE) */}
                    <line
                        x1="345"
                        y1="240"
                        x2="400"
                        y2="315"
                        stroke="#38bdf8"
                        strokeWidth="1.8"
                        markerEnd="url(#cyanArrow)"
                    />
                    <circle cx="345" cy="240" r="3" fill="#38bdf8" filter="url(#neonPulse)" />

                    {/* ================= 3D CYBER METALLIC PEDESTAL PLATFORM ================= */}

                    {/* Tier 1: Bottom Base Rim */}
                    <ellipse cx="290" cy="225" rx="95" ry="48" fill="#01040d" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.3" />

                    {/* Tier 2: Extruded Cylinder Body */}
                    <path
                        d="M 200 204 A 90 45 0 0 0 380 204 L 380 222 A 90 45 0 0 1 200 222 Z"
                        fill="url(#pedestalCylinderGrad)"
                        stroke="#0284c7"
                        strokeWidth="0.8"
                    />

                    {/* Tier 2: Neon Cyan Seam Ring */}
                    <path
                        d="M 202 204 A 88 44 0 0 0 378 204"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        filter="url(#neonPulse)"
                    />

                    {/* Tier 3: Upper Cylinder Bevel */}
                    <path
                        d="M 208 186 A 82 41 0 0 0 372 186 L 378 204 A 88 44 0 0 1 202 204 Z"
                        fill="#020b1c"
                    />

                    {/* Tier 3: Glowing Top Disc Bevel */}
                    <ellipse cx="290" cy="185" rx="82" ry="41" fill="#04122d" stroke="#38bdf8" strokeWidth="2.5" filter="url(#neonPulse)" />

                    {/* Tier 3: Inner Recessed Disc Face */}
                    <ellipse cx="290" cy="185" rx="70" ry="35" fill="url(#pedestalTopFace)" stroke="#0ea5e9" strokeWidth="1.2" />

                    {/* Inner Core Accent Ring */}
                    <ellipse cx="290" cy="185" rx="56" ry="28" fill="#010512" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.55" />
                    
                    {/* Inner Core Ambient Glow */}
                    <ellipse cx="290" cy="185" rx="42" ry="21" fill="#0ea5e9" fillOpacity="0.18" filter="url(#neonPulse)" />
                </svg>

                {/* 2. CENTER AIVIQONE LOGO & BRAND TEXT */}
                <div className="absolute left-1/2 top-[185px] z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
                    <div className="relative h-7 w-7 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
                        <Image
                            src="/A_logo.png"
                            alt="AIVIQONE Logo"
                            fill
                            sizes="28px"
                            className="object-contain"
                            priority
                        />
                    </div>

                    <span className="mt-0.5 text-[8px] font-black tracking-[0.22em] text-white uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]">
                        AIVIQONE
                    </span>
                </div>

                {/* 3. SATELLITE GLASSMORPHISM CARDS */}

                {/* 1. TOP CENTER: CRM */}
                <div className="absolute left-1/2 top-2 z-30 -translate-x-1/2 rounded-xl border border-sky-400/35 bg-[#040a1e]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_0_18px_rgba(2,132,199,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                    <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                            <Boxes size={12.5} strokeWidth={2} />
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-wider text-white uppercase">
                            CRM
                        </span>
                    </div>
                    <p className="mt-0.5 text-[8px] sm:text-[8.5px] font-medium text-slate-300 whitespace-nowrap">
                        Customer Relationships
                    </p>
                </div>

                {/* 2. LEFT MIDDLE: COMMUNICATION */}
                <div className="absolute left-4 top-[50%] z-30 -translate-y-1/2 rounded-xl border border-sky-400/35 bg-[#040a1e]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_0_18px_rgba(2,132,199,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                    <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                            <MessagesSquare size={12.5} strokeWidth={2} />
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-wider text-white uppercase">
                            COMMUNICATION
                        </span>
                    </div>
                    <p className="mt-0.5 text-[8px] sm:text-[8.5px] font-medium text-slate-300 whitespace-nowrap">
                        Connect, Engage, Respond.
                    </p>
                </div>

                {/* 3. RIGHT MIDDLE: AUTOMATION */}
                <div className="absolute right-4 top-[50%] z-30 -translate-y-1/2 rounded-xl border border-sky-400/35 bg-[#040a1e]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_0_18px_rgba(2,132,199,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                    <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                            <Zap size={12.5} strokeWidth={2} />
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-wider text-white uppercase">
                            AUTOMATION
                        </span>
                    </div>
                    <p className="mt-0.5 text-[8px] sm:text-[8.5px] font-medium text-slate-300 whitespace-nowrap">
                        Workflows, Tasks, Triggers.
                    </p>
                </div>

                {/* 4. BOTTOM LEFT: ANALYTICS */}
                <div className="absolute left-6 bottom-3 z-30 rounded-xl border border-sky-400/35 bg-[#040a1e]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_0_18px_rgba(2,132,199,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                    <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                            <BarChart3 size={12.5} strokeWidth={2} />
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-wider text-white uppercase">
                            ANALYTICS
                        </span>
                    </div>
                    <p className="mt-0.5 text-[8px] sm:text-[8.5px] font-medium text-slate-300 whitespace-nowrap">
                        Reports, Insights, Performance.
                    </p>
                </div>

                {/* 5. BOTTOM RIGHT: DECISION INTELLIGENCE */}
                <div className="absolute right-6 bottom-3 z-30 rounded-xl border border-sky-400/35 bg-[#040a1e]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_0_18px_rgba(2,132,199,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                    <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                            <ShieldCheck size={12.5} strokeWidth={2} />
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-wider text-white uppercase">
                            DECISION INTELLIGENCE
                        </span>
                    </div>
                    <p className="mt-0.5 text-[8px] sm:text-[8.5px] font-medium text-slate-300 whitespace-nowrap">
                        Data, Signals, Recommendations.
                    </p>
                </div>

            </div>
        </div>
    );
}
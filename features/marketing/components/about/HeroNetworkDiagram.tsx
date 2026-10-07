import Image from "next/image";
import {
  User,
  Users,
  CalendarCheck,
  Phone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroNetworkDiagram() {
  return (
    <div className="relative mx-auto flex w-full max-w-full lg:max-w-[690px] items-center justify-center py-2 lg:h-[515px]">
      
      {/* SVG Curved Connectors, Glowing Dots, and Arrows */}
      <svg
        viewBox="0 0 700 515"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cyanConnectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
          </linearGradient>

          <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Top-Left (Lead Pipeline) -> Center Core */}
        <path
          d="M 195 80 C 255 80, 265 185, 310 205"
          fill="none"
          stroke="url(#cyanConnectorGrad)"
          strokeWidth="1.6"
          strokeDasharray="3.5 3.5"
        />
        <circle cx="195" cy="80" r="4.5" fill="#38bdf8" filter="url(#glowFilter)" />
        <circle cx="195" cy="80" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

        {/* 2. Top-Right (Sales Performance) -> Center Core */}
        <path
          d="M 505 80 C 445 80, 435 185, 390 205"
          fill="none"
          stroke="url(#cyanConnectorGrad)"
          strokeWidth="1.6"
          strokeDasharray="3.5 3.5"
        />
        <circle cx="505" cy="80" r="4.5" fill="#38bdf8" filter="url(#glowFilter)" />
        <circle cx="505" cy="80" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

        {/* 3. Mid-Left (Follow-up Reminder) -> Center Core */}
        <path
          d="M 205 305 C 265 305, 275 250, 310 235"
          fill="none"
          stroke="url(#cyanConnectorGrad)"
          strokeWidth="1.6"
          strokeDasharray="3.5 3.5"
        />
        <circle cx="205" cy="305" r="4.5" fill="#38bdf8" filter="url(#glowFilter)" />
        <circle cx="205" cy="305" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

        {/* 4. Mid-Right (Recent Activity) -> Center Core */}
        <path
          d="M 495 305 C 435 305, 425 250, 390 235"
          fill="none"
          stroke="url(#cyanConnectorGrad)"
          strokeWidth="1.6"
          strokeDasharray="3.5 3.5"
        />
        <circle cx="495" cy="305" r="4.5" fill="#38bdf8" filter="url(#glowFilter)" />
        <circle cx="495" cy="305" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />

        {/* 5. Center Core -> Bottom Flow Bar */}
        <path
          d="M 350 270 L 350 435"
          fill="none"
          stroke="#0284c7"
          strokeWidth="1.6"
          strokeDasharray="3.5 3.5"
        />
        <circle cx="350" cy="435" r="4.5" fill="#38bdf8" filter="url(#glowFilter)" />
        <circle cx="350" cy="435" r="7" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.6" className="animate-ping" />
      </svg>

      {/* Grid Container for Cards */}
      <div className="relative grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[515px] lg:grid-cols-1">
        
        {/* Top-Left: Lead Pipeline */}
        <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.2)] lg:absolute lg:left-0 lg:top-0 lg:w-[195px]">
          <p className="mb-2 text-[13px] font-bold text-slate-100">Lead Pipeline</p>
          <div className="space-y-1.5">
            {[
              { label: "New", count: "3,250", color: "#38bdf8" },
              { label: "Contacted", count: "2,250", color: "#34d399" },
              { label: "Interested", count: "1,800", color: "#fbbf24" },
              { label: "Proposal", count: "950", color: "#f97316" },
              { label: "Won", count: "320", color: "#a855f7" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-[12px]">
                  <span className="h-1.5 w-1.5 rounded-sm" style={{ backgroundColor: item.color }} />
                  {item.label}
                </span>
                <span className="text-[12px] font-bold text-slate-100">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top-Right: Sales Performance */}
        <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.2)] lg:absolute lg:right-0 lg:top-0 lg:w-[195px]">
          <p className="text-[13px] font-bold text-slate-100">Sales Performance</p>
          <p className="mt-1 text-[10px] text-slate-400">Revenue</p>
          <p className="text-base font-extrabold text-white">₹48,75,000</p>
          <p className="mt-0.5 text-[11px] font-semibold text-emerald-400">
            ↑ 16.3% <span className="text-[10px] font-normal text-slate-400">vs last month</span>
          </p>
          
          {/* Wave Area Chart */}
          <div className="mt-1.5 h-6 w-full overflow-hidden">
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full">
              <path
                d="M 0,26 Q 25,28 45,16 T 80,10 T 100,3"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2"
              />
              <path
                d="M 0,26 Q 25,28 45,16 T 80,10 T 100,3 L 100,30 L 0,30 Z"
                fill="rgba(2, 132, 199, 0.2)"
              />
            </svg>
          </div>
        </div>

        {/* CENTER: Glowing Multi-Ring Core with A_logo */}
        <div className="relative z-20 my-4 flex items-center justify-center lg:absolute lg:left-1/2 lg:top-[39%] lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
          {/* Outermost Orbit Ring */}
          <div className="absolute -inset-6 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-sky-500/30" />
          
          {/* Deep Ambient Glow */}
          <div className="absolute -inset-4 rounded-full bg-sky-500/25 blur-xl" />

          {/* Main Glowing Circle */}
          <div className="relative flex h-26 w-26 items-center justify-center rounded-full border-2 border-sky-400/70 bg-[#030712] shadow-[0_0_45px_rgba(56,189,248,0.5)]">
            {/* Inner Ring */}
            <div className="flex h-22 w-22 items-center justify-center rounded-full border border-sky-400/30 bg-[#020617] p-3 overflow-hidden">
              <Image
                src="/A_logo.png"
                alt="AIVIQONE Logo"
                width={65}
                height={65}
                className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              />
            </div>
          </div>
        </div>

        {/* Mid-Left: Follow-up Reminder */}
        <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.2)] lg:absolute lg:left-0 lg:top-[46%] lg:w-[205px]">
          <p className="mb-2.5 text-[14px] font-bold text-slate-100">Follow-up Reminder</p>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                <Phone size={17} />
              </span>
              <div className="flex flex-col">
                <span className="text-[13px] font-medium text-slate-200">Call with Rahul Verma</span>
                <span className="text-[10.5px] text-slate-400">Today, 11:30 AM</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <FaWhatsapp size={17} />
              </span>
              <div className="flex flex-col">
                <span className="text-[13px] font-medium text-slate-200">WhatsApp Follow-up</span>
                <span className="text-[10.5px] text-slate-400">Today, 02:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mid-Right: Recent Activity */}
        <div className="z-10 rounded-2xl border border-sky-500/20 bg-[#060c18]/95 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(2,132,199,0.2)] lg:absolute lg:right-0 lg:top-[46%] lg:w-[205px]">
          <p className="mb-2.5 text-[14px] font-bold text-slate-100">Recent Activity</p>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2 truncate text-[12.5px] text-slate-200">
                <FaWhatsapp className="text-emerald-400 shrink-0" size={17} /> WhatsApp sent
              </span>
              <span className="text-[10px] text-slate-500 shrink-0 ml-1">11:30 AM</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2 truncate text-[12.5px] text-slate-200">
                <Phone className="text-sky-400 shrink-0" size={17} /> Outgoing call
              </span>
              <span className="text-[10px] text-slate-500 shrink-0 ml-1">10:15 AM</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2 truncate text-[12.5px] text-slate-200">
                <CalendarCheck className="text-amber-400 shrink-0" size={17} /> Meeting done
              </span>
              <span className="text-[10px] text-slate-500 shrink-0 ml-1">Yesterday</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2 truncate text-[12.5px] text-slate-200">
                <CheckCircle2 className="text-purple-400 shrink-0" size={17} /> Deal moved
              </span>
              <span className="text-[10px] text-slate-500 shrink-0 ml-1">May 15</span>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Pipeline Bar */}
        <div className="z-10 mt-6 flex w-full items-center justify-between overflow-x-auto rounded-2xl border border-sky-500/20 bg-[#060c18]/95 px-6 py-3.5 shadow-xl backdrop-blur-md lg:absolute lg:bottom-0 lg:left-0 lg:mt-0">
          {[
            { label: "Leads", icon: User },
            { label: "Customers", icon: Users },
            { label: "Tasks", icon: CalendarCheck },
            { label: "WhatsApp", icon: FaWhatsapp },
            { label: "Calls", icon: Phone },
            { label: "Reports", icon: BarChart3 },
          ].map((item, idx, arr) => (
            <div key={item.label} className="flex items-center gap-3 sm:gap-5">
              <div className="group flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:border-sky-400 group-hover:bg-sky-500/20 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                  <item.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[14px] font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </span>
              </div>
              {idx < arr.length - 1 && (
                <ArrowRight size={14} className="text-slate-600 shrink-0 mb-4" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
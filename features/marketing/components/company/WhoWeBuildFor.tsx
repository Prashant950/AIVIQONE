"use client";

import Image from "next/image";
import {
  Landmark,
  Building2,
  TrendingUp,
  UserCog,
  Handshake,
  Users,
} from "lucide-react";

// Top 5 Industry Cards
const industryCards = [
  {
    icon: Landmark,
    title: "Loan Agencies",
    description: "Manage leads, customers and loan workflows efficiently.",
  },
  {
    icon: Building2,
    title: "DSAs",
    description: "Empower DSAs with better tools, visibility and productivity.",
  },
  {
    icon: TrendingUp,
    title: "Financial Services",
    description: "Streamline operations and improve customer experience.",
  },
  {
    icon: UserCog,
    title: "Sales Teams",
    description: "Help sales teams stay organised and close more deals.",
  },
  {
    icon: Handshake,
    title: "Growing Businesses",
    description: "Built for businesses that want to scale with confidence.",
  },
];

export default function WhoWeBuildFor() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
          
          {/* ================= LEFT COLUMN: WHO WE BUILD FOR (7 COLS) ================= */}
          <div className="flex flex-col text-left pr-0 lg:col-span-7 lg:pr-8 xl:pr-10">
            <div className="min-h-[85px] sm:min-h-[95px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                WHO WE BUILD FOR
              </span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-[26px] lg:text-[28px]">
                Technology Designed Around<br className="hidden sm:inline" />
                Real Business Problems.
              </h2>
            </div>

            {/* Top 5 Cards Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-3">
              {industryCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group flex flex-col justify-between rounded-2xl border border-sky-500/20 bg-[#060e22]/90 p-3.5 sm:p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(2,132,199,0.35)]"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/30 bg-[#030919] text-sky-400 shadow-[0_0_10px_rgba(2,132,199,0.25)] transition-all duration-300 group-hover:border-sky-300 group-hover:bg-[#071330] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                        <Icon size={18} />
                      </span>
                      <h3 className="mt-2.5 text-sm sm:text-[12.5px] font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[10.5px] sm:text-[12px] leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Wide Card: Customer-Facing Organizations */}
            <div className="group mt-3 flex w-full items-center gap-3.5 rounded-2xl border border-sky-500/20 bg-[#060e22]/90 p-3.5 sm:p-4 text-left shadow-md backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(2,132,199,0.35)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-[#030919] text-sky-400 shadow-[0_0_10px_rgba(2,132,199,0.25)] transition-all duration-300 group-hover:border-sky-300 group-hover:bg-[#071330] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                <Users size={20} />
              </span>
              <div className="flex flex-col">
                <h3 className="text-xs sm:text-[13px] font-bold text-white">
                  Customer-Facing Organizations
                </h3>
                <p className="mt-0.5 text-[12.5px] sm:text-[11.5px] text-slate-400 group-hover:text-slate-300">
                  Centralize conversations and customer interactions.
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: FROM THE FOUNDER (5 COLS) ================= */}
          <div className="flex flex-col text-left pl-0 lg:col-span-5 lg:border-l lg:border-slate-800/80 lg:pl-8 xl:pl-10">
            <div className="min-h-[85px] sm:min-h-[95px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                FROM THE FOUNDER
              </span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-[26px] lg:text-[28px]">
                Building AIVIQONE With a<br className="hidden sm:inline" />
                Long-Term Vision.
              </h2>
            </div>

            {/* Founder Block: Photo on Left + Text & Signature on Right */}
            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 lg:gap-6">
              
              {/* Founder Image Card */}
              <div className="relative h-[230px] w-[180px] sm:h-[260px] sm:w-[195px] shrink-0 overflow-hidden rounded-2xl border border-sky-500/30 bg-[#061026] shadow-[0_0_25px_rgba(2,132,199,0.3)] transition-all duration-300 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]">
                <Image
                  src="/Founder.png"
                  alt="Anant - Founder & CEO"
                  fill
                  sizes="(max-width: 640px) 180px, 195px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Founder Info & Signature */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-between h-full py-1">
                <div>
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-white">
                    Anant
                  </h3>
                  <span className="mt-0.5 inline-block text-xs sm:text-[13px] font-bold text-sky-400 uppercase tracking-wider">
                    Founder &amp; CEO
                  </span>

                  <p className="mt-3.5 text-xs sm:text-[12.5px] leading-relaxed text-slate-300">
                    AIVIQONE is being built with a long-term vision: to create
                    technology that genuinely improves how businesses operate,
                    sell and serve their customers.
                  </p>
                </div>

                {/* Hand-drawn Vector Signature for Anant */}
                <div className="mt-5 flex items-center justify-center sm:justify-start">
                  <svg
                    viewBox="0 0 150 48"
                    className="h-10 w-32 text-sky-300/90 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* 'A' */}
                    <path d="M 10 38 L 22 10 L 34 38" />
                    <path d="M 15 28 L 30 28" />
                    {/* 'n' */}
                    <path d="M 40 22 L 40 38 M 40 27 C 43 20, 52 20, 55 27 L 55 38" />
                    {/* 'a' */}
                    <path d="M 66 30 C 64 23, 58 23, 58 30 C 58 37, 67 37, 67 30 L 67 38" />
                    {/* 'n' */}
                    <path d="M 75 22 L 75 38 M 75 27 C 78 20, 87 20, 90 27 L 90 38" />
                    {/* 't' */}
                    <path d="M 100 13 L 100 36 C 100 39, 103 40, 107 38" />
                    <path d="M 94 21 L 106 21" />
                    {/* Flourish underline */}
                    <path d="M 25 41 Q 75 45, 135 32" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
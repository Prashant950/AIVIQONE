import Link from "next/link";
import { ArrowRight, LucideIcon, Check } from "lucide-react";
import { IconType } from "react-icons";

type FeatureBlockProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon | IconType;
  linkLabel?: string;
  href?: string;
  reversed?: boolean;
};

export default function FeatureDetailBlock({
  number,
  eyebrow,
  title,
  description,
  bullets,
  icon: Icon,
  linkLabel,
  href = "/book-a-demo",
  reversed = false,
}: FeatureBlockProps) {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Typography & Content Column (7 Cols) */}
          <div
            className={`flex flex-col items-start text-left lg:col-span-7 ${reversed ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
              }`}
          >
            <span className="flex items-center gap-2.5 text-sm font-bold tracking-widest text-sky-400 uppercase">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/10 text-xs font-extrabold text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                {number}
              </span>
              {eyebrow}
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
              {title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>

            <div className="my-5 h-[2px] w-12 bg-sky-400" />

            {/* Bullets Grid */}
            <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-center gap-2.5 rounded-xl border border-sky-500/15 bg-[#060c1a]/80 px-3.5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/40 hover:bg-[#070e24]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/15 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Optional Link Button */}
            {linkLabel && (
              <div className="mt-6">
                <Link
                  href={href}
                  className="group relative inline-flex items-center gap-3 rounded-xl border border-sky-400/40 bg-gradient-to-r from-[#060c1a] via-[#0b162e] to-[#060c1a] px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  <span>{linkLabel}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-sky-400 group-hover:text-black">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* High-Tech Visual Column (5 Cols) */}
          <div
            className={`flex items-center justify-center lg:col-span-5 ${reversed ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"
              }`}
          >
            <div className="group relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
              {/* Outer slow-spinning dashed ring */}
              <div className="absolute inset-0 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-sky-500/30" />

              {/* Middle ring, reverse spin */}
              <div className="absolute inset-7 animate-[spin_16s_linear_infinite_reverse] rounded-full border border-dotted border-sky-400/25 sm:inset-9" />

              {/* Soft ambient glow */}
              <div className="absolute inset-10 rounded-full bg-sky-500/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:inset-12" />

              {/* Orbiting glowing dot on outer ring */}
              <div className="absolute inset-0 animate-[spin_24s_linear_infinite]">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_3px_rgba(56,189,248,0.8)]" />
              </div>

              {/* Core icon badge */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-sky-400/70 bg-[#030712] shadow-[0_0_35px_rgba(56,189,248,0.55)] transition-all duration-500 group-hover:scale-105 group-hover:border-sky-300 group-hover:shadow-[0_0_45px_rgba(56,189,248,0.8)] sm:h-28 sm:w-28">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-sky-400/25 bg-[#020617] text-sky-400 shadow-inner sm:h-22 sm:w-22">
                  <Icon size={44} strokeWidth={1.5} className="drop-shadow-[0_0_10px_rgba(56,189,248,0.75)]" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
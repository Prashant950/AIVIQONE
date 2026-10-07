import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CompanyFinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
      <div className="relative mx-auto flex w-full max-w-[1420px] flex-col items-center justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:gap-6 lg:px-12">
        
        {/* Left Side: Headline */}
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-[28px] lg:text-[32px]">
            Let&rsquo;s Build the Future<br className="hidden sm:inline" />
            of Business <span className="text-sky-400">Together.</span>
          </h2>
        </div>

        {/* Center: Vertical Divider + Subtitle */}
        <div className="flex items-center gap-6 text-center lg:text-left">
          <div className="hidden h-12 w-[1px] bg-slate-800/90 lg:block" />
          <p className="max-w-[220px] text-xs sm:text-sm leading-relaxed text-slate-300">
            Discover what AIVIQONE can do<br className="hidden sm:inline" />
            for your business.
          </p>
        </div>

        {/* Action CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/book-a-demo"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(2,132,199,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] active:scale-95"
          >
            Book a Demo
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-xl border border-slate-700 bg-[#070e24]/80 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:text-white"
          >
            Contact AIVIQONE
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right Edge: Stylized A1 Logo Watermark */}
        <div className="relative hidden shrink-0 lg:flex items-center justify-center">
          <div className="relative h-24 w-24 xl:h-28 xl:w-28 opacity-25 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Image
              src="/A_logo.png"
              alt="AIVIQONE Watermark"
              fill
              sizes="(max-width: 1280px) 96px, 112px"
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
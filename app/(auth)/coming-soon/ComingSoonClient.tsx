"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Sparkles, LogIn, ShieldAlert } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function ComingSoonClient() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#020617] text-white flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Background ambient cosmic glow effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[250px] w-[600px] rounded-full bg-sky-400/5 blur-[120px]" />
        
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-8 sm:py-12 text-center">
        
        {/* Robot Mascot Illustration with Halo Glow and Smooth Float Animation */}
        <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
          {/* Animated Cyan Glow Disc behind Mascot */}
          <div className="absolute h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-400/20 to-blue-600/20 blur-2xl animate-pulse" />
          
          <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-b from-[#0a1532]/90 to-[#030919]/90 p-2 sm:p-3 shadow-[0_0_40px_rgba(56,189,248,0.25)] backdrop-blur-xl transition-transform hover:scale-105 duration-500">
            <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-2xl bg-[#020617]">
              <Image
                src="/robot_coming_soon.jpg"
                alt="AIVIQONE Robot Mascot - Coming Soon"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
                className="object-cover object-center transition-all duration-700 hover:scale-105"
              />
              {/* Bottom gentle gradient blend */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020617] to-transparent opacity-80" />
            </div>
          </div>
        </div>

        {/* Coming Soon Status Pill */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] backdrop-blur-md">
          <Sparkles size={13} className="text-sky-400 animate-spin" style={{ animationDuration: "6s" }} />
          <span>Coming Soon</span>
        </div>

        {/* Main Headings */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Nothing here yet
        </h1>

        {/* Highlight Subtext */}
        <p className="mt-3 text-base sm:text-lg md:text-xl font-medium text-slate-300 max-w-lg">
          This space is waiting for something awesome.
        </p>

        {/* Explanation Message */}
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
          We are currently perfecting our intelligent sales CRM dashboard experience. Direct access will be unlocked as soon as the release is live.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <button
            onClick={() => router.back()}
            className="group flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-[#081026]/90 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 shadow-md backdrop-blur-md transition-all hover:border-sky-400 hover:text-white hover:bg-slate-800/80 active:scale-[0.98] cursor-pointer"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>

          <Link
            href="/"
            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all hover:opacity-95 hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] active:scale-[0.98]"
          >
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Subtle Sign-in again option */}
        <div className="mt-6 flex items-center gap-1.5 text-xs text-slate-500">
          <span>Need to switch account?</span>
          <Link
            href="/login"
            className="inline-flex items-center gap-1 font-medium text-sky-400 hover:text-sky-300 hover:underline"
          >
            <LogIn size={12} />
            <span>Sign In</span>
          </Link>
        </div>
      </main>

      {/* Footer info */}
      <footer className="relative z-20 w-full shrink-0 border-t border-slate-800/40 py-4 text-center text-xs text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
          <span>&copy; {new Date().getFullYear()} AIVIQONE Technologies Pvt. Ltd. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

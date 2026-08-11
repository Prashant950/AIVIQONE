import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#070b14] px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 lg:px-8">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/3 left-1/2 z-0 h-[250px] w-[320px] sm:h-[400px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0469F8]/20 via-blue-950/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#070b14] to-[#070b14] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        
        {/* Main Headline */}
        <h1 className="font-sans text-3xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-7xl leading-[1.15] sm:leading-[1.12]">
          Turn Every Lead <br className="hidden sm:block" />
          Into an <span className="bg-gradient-to-r from-[#0469F8] to-blue-400 bg-clip-text text-transparent font-semibold">Opportunity.</span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-4 sm:mt-6 max-w-2xl font-sans text-sm sm:text-base font-normal leading-relaxed text-slate-400 lg:text-lg">
          AIVIQONE brings CRM, AI-powered lead management, WhatsApp, and
          business communication into one intelligent platform built for
          modern sales teams.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3.5 sm:gap-4 sm:flex-row w-full sm:w-auto">
          {/* Primary Button */}
          <button className="group font-sans flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-lg bg-[#0469F8] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-[#0352c5] hover:shadow-lg hover:shadow-[#0469F8]/25 hover:-translate-y-0.5 active:translate-y-0">
            Start Free
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* Secondary Outlined Button (Border set to #0469F8) */}
          <button className="font-sans flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-lg border border-[#0469F8]/60 bg-[#0d1322]/40 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-[#0469F8] hover:bg-[#0469F8]/10 hover:text-white hover:-translate-y-0.5 active:translate-y-0">
            Book a Demo
            <Calendar size={18} className="text-[#0469F8] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Responsive Trust Badge */}
        <div className="mt-6 sm:mt-8 flex w-full items-center justify-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium text-blue-400 backdrop-blur-md transition-all hover:border-blue-500/40 hover:bg-blue-500/15">
            <ShieldCheck size={14} className="text-[#0469F8] shrink-0" />
            <span className="text-center">Built for teams that refuse to lose leads.</span>
          </div>
        </div>

      </div>
    </section>
  );
}

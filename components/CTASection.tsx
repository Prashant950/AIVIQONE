import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800/60 bg-[#070b14] px-5 py-16 text-center lg:px-8 lg:py-24">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-950/30 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Main Heading */}
        <h2 className="font-sans text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl lg:text-4xl">
          Stop managing leads. Start converting them.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 font-sans text-sm font-normal text-slate-400 sm:text-base">
          Give your sales team one system to manage every lead, conversation
          and follow-up.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          {/* Primary Button with #0469F8 Color */}
          <button className="font-sans flex w-full items-center justify-center gap-2 rounded-lg bg-[#0469F8] px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0352c5] hover:shadow-lg hover:shadow-[#0469F8]/25 sm:w-auto">
            Get Started with AIVIQONE
            <ArrowRight size={16} />
          </button>

          {/* Secondary Outlined Button */}
          <button className="font-sans flex w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-transparent px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-slate-600 hover:bg-slate-900/60 sm:w-auto">
            Talk to Sales
            <Phone size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

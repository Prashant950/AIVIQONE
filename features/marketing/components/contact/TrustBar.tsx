import { ShieldCheck } from "lucide-react";
import { trustPoints } from "@/features/marketing/data/contact";

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-6 sm:py-8 border-t border-slate-800/60">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-[#0e2144] bg-[#050c1e]/95 p-6 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] backdrop-blur-sm sm:p-7 lg:grid-cols-12 lg:gap-6 lg:p-8 xl:gap-8">
          {/* Left Side: Shield Icon Badge + "Your Inquiry Matters." (5 cols) */}
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:col-span-5">
            {/* Double-Ring Shield Icon Badge */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <ShieldCheck size={30} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Your Inquiry Matters.
              </h3>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-400">
                Every inquiry is reviewed by our team so we can understand your
                requirements before recommending the right solution.
              </p>
            </div>
          </div>

          {/* Right Side: 4 Trust Points (7 cols with left border) */}
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2 sm:divide-x sm:divide-[#0e2144]/80 lg:col-span-7 lg:border-l lg:border-[#0e2144] lg:pl-4 xl:pl-6">
            {trustPoints.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center gap-1.5 px-1.5 sm:px-2 ${
                  idx > 0 ? "sm:pl-3 lg:pl-3 xl:pl-4" : ""
                }`}
              >
                <div className="flex items-center justify-center text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)] transition-transform duration-300 hover:scale-110">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white text-center">
                  {title}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 text-center leading-tight">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
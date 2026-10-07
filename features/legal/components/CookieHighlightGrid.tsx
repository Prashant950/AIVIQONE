import { ShieldCheck, SlidersHorizontal, BarChart3, Gauge, Target, Lock } from "lucide-react";
import { cookieHighlights } from "@/features/legal/data/cookiePolicy";

const iconMap: Record<string, typeof ShieldCheck> = {
  essential: ShieldCheck,
  functional: SlidersHorizontal,
  analytics: BarChart3,
  performance: Gauge,
  marketing: Target,
  security: Lock,
};

export default function CookieHighlightGrid() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-slate-800/80 bg-[#040816] p-3.5 sm:p-5">
      <div className="flex flex-col gap-0.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Core Operational Categories</h4>
        <p className="text-xs text-slate-300">How cookies power secure authentication, speed, and platform intelligence:</p>
      </div>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {cookieHighlights.map((item) => {
          const Icon = iconMap[item.key];
          return (
            <div
              key={item.key}
              className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-[#020510]/80 p-3 sm:p-3.5 transition-all duration-200 hover:border-cyan-500/40"
            >
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                <Icon size={16} />
              </span>
              <div className="flex flex-col gap-0.5">
                <h5 className="text-xs font-bold text-white">{item.title}</h5>
                <p className="text-[11px] leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
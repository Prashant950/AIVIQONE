import { ElementType } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: ElementType;
  subtext?: string;
}

export default function StatCard({
  label,
  value,
  change,
  isPositive = true,
  icon: Icon,
  subtext,
}: StatCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-5 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] backdrop-blur-sm transition-all hover:border-sky-500/40 hover:bg-[#071128]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <Icon size={18} />
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {value}
        </span>

        {change && (
          <div
            className={`flex items-center gap-0.5 text-xs font-bold ${
              isPositive ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span>{change}</span>
          </div>
        )}
      </div>

      {subtext && <p className="mt-1 text-[11px] text-slate-400">{subtext}</p>}
    </div>
  );
}

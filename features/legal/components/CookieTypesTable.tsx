import { ShieldCheck, SlidersHorizontal, BarChart3, Megaphone, Lock, Gauge } from "lucide-react";
import { cookieTypesTable } from "@/features/legal/data/cookiePolicy";

const iconMap: Record<string, typeof ShieldCheck> = {
  "Strictly Necessary": Lock,
  Functional: SlidersHorizontal,
  Performance: Gauge,
  Analytics: BarChart3,
  "Marketing & Advertising": Megaphone,
  "Security & Fraud Prevention": ShieldCheck,
};

export default function CookieTypesTable() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-[#040816] p-5">
      <div className="flex flex-col gap-1">
        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Cookie Category Breakdown</h4>
        <p className="text-xs text-slate-300">Detailed summary of cookie purposes, persistence durations, and necessity:</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-800/80">
        <table className="w-full min-w-[620px] text-left text-xs">
          <thead className="bg-[#060e22] text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-300">Category</th>
              <th className="px-4 py-3 font-semibold text-slate-300">Purpose &amp; Scope</th>
              <th className="px-4 py-3 font-semibold text-slate-300">Duration</th>
              <th className="px-4 py-3 font-semibold text-slate-300">Required?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70 bg-[#020510]/80">
            {cookieTypesTable.map((row) => {
              const Icon = iconMap[row.category] || ShieldCheck;
              const isMandatory = row.required.includes("Mandatory");

              return (
                <tr key={row.category} className="transition-colors hover:bg-slate-900/40">
                  <td className="flex items-center gap-2 px-4 py-3 font-semibold text-white">
                    <Icon size={14} className="text-cyan-400 shrink-0" />
                    <span>{row.category}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{row.purpose}</td>
                  <td className="px-4 py-3 text-slate-400">{row.duration}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold ${
                        isMandatory
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : "bg-slate-800 text-slate-400 border border-slate-700/50"
                      }`}
                    >
                      {row.required}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
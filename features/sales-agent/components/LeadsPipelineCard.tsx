import { Info, ChevronRight } from "lucide-react";

export default function LeadsPipelineCard() {
  const stages = [
    { label: "Contacted", count: 18, color: "text-sky-400", border: "border-sky-500/30", bg: "bg-sky-500/10" },
    { label: "Interested", count: 12, color: "text-teal-400", border: "border-teal-500/30", bg: "bg-teal-500/10" },
    { label: "Follow-up", count: 10, color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
    { label: "Documentation & Details", count: 6, color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10" },
    { label: "Approval / Review", count: 3, color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
    { label: "Confirmed", count: 2, color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
  ];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-1.5 mb-3.5">
        <h2 className="text-sm font-bold text-white tracking-tight">My Leads Pipeline</h2>
        <Info size={13} className="text-slate-500 cursor-pointer" />
      </div>

      {/* 6 Stage Pipeline Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-3.5">
        {stages.map((stage, idx) => (
          <div
            key={stage.label}
            className={`relative flex flex-col justify-between rounded-xl border ${stage.border} ${stage.bg} p-2.5 text-center transition-all hover:scale-[1.02]`}
          >
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${stage.color} truncate`}>
              {stage.label}
            </span>
            <span className="text-xl font-extrabold text-white mt-1.5">
              {stage.count}
            </span>
            {idx < stages.length - 1 && (
              <ChevronRight
                size={14}
                className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-slate-600 z-10"
              />
            )}
          </div>
        ))}
      </div>

      {/* Pipeline Node Connection Line */}
      <div className="relative mb-4 flex items-center justify-between px-4">
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500" />
        {stages.map((st, i) => (
          <div
            key={i}
            className="relative z-10 h-2.5 w-2.5 rounded-full border-2 border-[#070e24] bg-sky-400 shadow-sm"
          />
        ))}
      </div>

      {/* Side / Loss Metrics */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#1b2b52] bg-[#09132e] p-2.5 text-center">
          <span className="text-[11px] font-medium text-slate-400">Not Interested</span>
          <span className="text-lg font-bold text-white mt-0.5">5</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-red-500/25 bg-red-500/5 p-2.5 text-center">
          <span className="text-[11px] font-medium text-red-300">Rejected / Lost</span>
          <span className="text-lg font-bold text-red-400 mt-0.5">3</span>
        </div>
      </div>
    </div>
  );
}
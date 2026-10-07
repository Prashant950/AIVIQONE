import DonutChart from "@/components/ui/DonutChart";

export default function WorkOverviewCard() {
  const segments = [
    { label: "Follow-ups", value: 14, percent: "14 (29%)", color: "#38bdf8" },
    { label: "Tasks", value: 8, percent: "8 (17%)", color: "#2dd4bf" },
    { label: "Completed", value: 31, percent: "31 (65%)", color: "#34d399" },
    { label: "Overdue", value: 4, percent: "4 (8%)", color: "#f87171" },
    { label: "Unassigned", value: 4, percent: "4 (8%)", color: "#a78bfa" },
  ];

  return (
    <div className="rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
      <h2 className="text-sm font-bold text-white tracking-tight mb-3">
        Today&rsquo;s Work Overview
      </h2>

      <div className="flex items-center justify-between gap-4">
        {/* Donut Chart */}
        <div className="shrink-0 flex items-center justify-center">
          <DonutChart
            segments={segments.map((s) => ({ value: s.value, color: s.color }))}
            size={110}
            strokeWidth={12}
            centerValue="61"
            centerLabel="Total Work"
          />
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-1.5 flex-1 pl-2">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: seg.color }}
                />
                <span className="text-slate-300 text-[11px] font-medium">{seg.label}</span>
              </div>
              <span className="text-slate-400 text-[11px] font-semibold">{seg.percent}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
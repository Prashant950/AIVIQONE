import DonutChart from "@/components/ui/DonutChart";

export default function DailyGoalCard() {
  const goal = 56;
  const achieved = 42;
  const percent = Math.round((achieved / goal) * 100);

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-bg-card p-5 text-center">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-sm font-semibold text-text-primary">Daily Goal</h2>
        <button className="text-text-muted hover:text-text-primary">✕</button>
      </div>
      <DonutChart
        segments={[
          { value: percent, color: "#0588FD" },
          { value: 100 - percent, color: "#1E293B" },
        ]}
        size={130}
        centerValue={`${percent}%`}
        centerLabel="Calls Goal"
      />
      <span className="text-sm text-text-secondary">
        {achieved} / {goal} Calls
      </span>
      <button className="text-xs font-semibold text-brand hover:underline">View Goals →</button>
    </div>
  );
}
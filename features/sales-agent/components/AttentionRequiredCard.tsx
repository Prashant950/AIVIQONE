import {
  AlertTriangle,
  ChevronRight,
  Clock,
  CheckSquare,
  Users,
  Flame,
  HelpCircle,
  Calendar,
} from "lucide-react";

export default function AttentionRequiredCard() {
  const items = [
    { label: "Overdue Follow-ups", count: 12, icon: Clock, color: "text-red-400" },
    { label: "Overdue Tasks", count: 9, icon: CheckSquare, color: "text-red-400" },
    { label: "Leads without Follow-up", count: 7, icon: Users, color: "text-amber-400" },
    { label: "High Priority Leads", count: 5, icon: Flame, color: "text-amber-400" },
    { label: "Leads stuck in Follow-up", count: 4, icon: HelpCircle, color: "text-amber-400" },
    { label: "Tasks due today", count: 3, icon: Calendar, color: "text-orange-400" },
  ];

  return (
    <div className="rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="flex items-center gap-1.5 text-sm font-bold text-white tracking-tight">
          <AlertTriangle size={14} className="text-red-400" />
          <span>Attention Required</span>
        </h2>
        <button className="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">
          View All
        </button>
      </div>

      {/* Items */}
      <div className="flex flex-col divide-y divide-[#131e3d]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              className="flex items-center justify-between py-2 text-left hover:bg-[#0b1739]/40 px-1 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Icon size={13} className={item.color} />
                <span className="text-xs text-slate-300 font-medium">{item.label}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xs font-bold ${item.color}`}>{item.count}</span>
                <ChevronRight size={12} className="text-slate-500" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
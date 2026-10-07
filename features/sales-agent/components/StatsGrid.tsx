import {
  Phone,
  PhoneCall,
  CalendarClock,
  CheckSquare,
  Users,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export const statCards = [
  {
    icon: Phone,
    iconBg: "bg-blue-500/15 text-sky-400",
    label: "Calls Today",
    value: "42",
    change: "12.5%",
    isUp: true,
    isNegativeColor: false,
  },
  {
    icon: PhoneCall,
    iconBg: "bg-teal-500/15 text-teal-400",
    label: "Calls Connected",
    value: "31",
    change: "8.3%",
    isUp: true,
    isNegativeColor: false,
  },
  {
    icon: CalendarClock,
    iconBg: "bg-purple-500/15 text-purple-400",
    label: "Follow-ups Today",
    value: "14",
    change: "16.7%",
    isUp: true,
    isNegativeColor: false,
  },
  {
    icon: CheckSquare,
    iconBg: "bg-amber-500/15 text-amber-400",
    label: "Tasks Today",
    value: "8",
    change: "11.1%",
    isUp: false,
    isNegativeColor: true,
  },
  {
    icon: Users,
    iconBg: "bg-emerald-500/15 text-emerald-400",
    label: "Active Leads",
    value: "56",
    change: "10.2%",
    isUp: true,
    isNegativeColor: false,
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-red-500/15 text-red-400",
    label: "Overdue",
    value: "4",
    change: "33.3%",
    isUp: true,
    isNegativeColor: true, // Overdue increasing is bad (red)
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 xl:grid-cols-6">
      {statCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className="flex flex-col justify-between rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-3.5 shadow-sm hover:border-blue-500/30 transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${card.iconBg}`}
              >
                <Icon size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-slate-400">
                  {card.label}
                </span>
                <span className="text-xl font-bold text-white tracking-tight">
                  {card.value}
                </span>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1 text-[10.5px]">
              {card.isUp ? (
                <span
                  className={`flex items-center font-semibold ${
                    card.isNegativeColor ? "text-red-400" : "text-emerald-400"
                  }`}
                >
                  <ArrowUp size={11} className="mr-0.5" />
                  {card.change}
                </span>
              ) : (
                <span
                  className={`flex items-center font-semibold ${
                    card.isNegativeColor ? "text-red-400" : "text-emerald-400"
                  }`}
                >
                  <ArrowDown size={11} className="mr-0.5" />
                  {card.change}
                </span>
              )}
              <span className="text-slate-500">vs yesterday</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
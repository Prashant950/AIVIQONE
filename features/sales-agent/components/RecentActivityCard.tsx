import { PhoneCall, CalendarClock, CheckCircle2, UserPlus, Calendar } from "lucide-react";

export default function RecentActivityCard() {
  const activities = [
    {
      text: "You called Neha Gupta",
      meta: "Call Connected (02:45)",
      time: "10 min ago",
      icon: PhoneCall,
      iconBg: "bg-emerald-500/20 text-emerald-400",
    },
    {
      text: "Follow-up completed with Amit Verma",
      meta: "Next follow-up on 15 Jul",
      time: "25 min ago",
      icon: CalendarClock,
      iconBg: "bg-blue-500/20 text-sky-400",
    },
    {
      text: "Task completed: Update lead details",
      meta: "Lead: Priya Singh",
      time: "45 min ago",
      icon: CheckCircle2,
      iconBg: "bg-teal-500/20 text-teal-400",
    },
    {
      text: "New lead Priya Singh added",
      meta: "Source: Website",
      time: "1 hr ago",
      icon: UserPlus,
      iconBg: "bg-purple-500/20 text-purple-400",
    },
    {
      text: "You scheduled follow-up with Rahul Sharma",
      meta: "On 15 Jul, 11:00 AM",
      time: "2 hr ago",
      icon: Calendar,
      iconBg: "bg-amber-500/20 text-amber-400",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-white tracking-tight">Recent Activity</h2>
        <button className="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">
          View All
        </button>
      </div>

      {/* Activities List */}
      <div className="flex flex-col divide-y divide-[#131e3d]">
        {activities.map((act, i) => {
          const Icon = act.icon;
          return (
            <div key={i} className="flex items-center justify-between py-2 hover:bg-[#0b1739]/40 px-1 rounded-lg transition-colors">
              <div className="flex items-center gap-2.5">
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${act.iconBg}`}>
                  <Icon size={12} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white leading-tight">
                    {act.text}
                  </span>
                  <span className="text-[10.5px] text-slate-400 leading-tight">
                    {act.meta}
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-slate-500 shrink-0 font-medium">{act.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
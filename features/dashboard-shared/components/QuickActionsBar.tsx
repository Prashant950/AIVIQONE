import {
  Phone,
  MessageCircle,
  UserPlus,
  CalendarClock,
  CheckSquare,
  StickyNote,
  Calendar,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function QuickActionsBar() {
  const actions = [
    { icon: Phone, label: "Start Call", sub: "Call Prospect", color: "text-sky-400" },
    { icon: MessageCircle, label: "WhatsApp", sub: "Send Message", color: "text-emerald-400" },
    { icon: UserPlus, label: "Add Lead", sub: "Create New Lead", color: "text-blue-400" },
    { icon: CalendarClock, label: "Schedule Follow-up", sub: "Set Reminder", color: "text-teal-400" },
    { icon: CheckSquare, label: "Create Task", sub: "Add New Task", color: "text-emerald-400" },
    { icon: StickyNote, label: "Add Note", sub: "Add Quick Note", color: "text-amber-400" },
    { icon: Calendar, label: "View Calendar", sub: "Check Schedule", color: "text-purple-400" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-3.5 items-stretch">
      {/* Quick Actions Container (7 action items) */}
      <div className="rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
        <h2 className="text-sm font-bold text-white tracking-tight mb-3">Quick Actions</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <button
                key={act.label}
                type="button"
                className="flex flex-col items-start gap-1.5 rounded-xl border border-[#1b2b52] bg-[#08122c] p-2.5 text-left transition-all hover:border-sky-500/40 hover:bg-[#0b183a] cursor-pointer"
              >
                <Icon size={16} className={act.color} />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    {act.label}
                  </span>
                  <span className="text-[9.5px] text-slate-400 leading-tight mt-0.5">
                    {act.sub}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Overdue Banner */}
      <div className="flex flex-col justify-between rounded-2xl border border-red-500/25 bg-red-500/5 p-4 sm:p-5 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 text-red-400">
          <AlertTriangle size={16} className="shrink-0" />
          <span className="text-xs font-bold text-white">You have 4 overdue items</span>
        </div>

        <div className="mt-4">
          <Link
            href="/sales-agent/follow-ups"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 hover:underline"
          >
            <span>View Overdue</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
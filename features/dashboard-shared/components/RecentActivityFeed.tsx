import { Phone, MessageSquare, UserPlus, CheckCircle, Clock } from "lucide-react";

export default function RecentActivityFeed() {
  const activities = [
    {
      id: "1",
      icon: Phone,
      title: "Outbound Call Completed",
      desc: "Call with Rajesh Sharma (Personal Loan, ₹5L) - Scheduled Follow-up for tomorrow.",
      time: "10 mins ago",
      color: "text-sky-400 bg-sky-500/10 border-sky-400/30",
    },
    {
      id: "2",
      icon: MessageSquare,
      title: "WhatsApp Quotation Sent",
      desc: "Home Loan eligibility report shared with Ananya Verma.",
      time: "35 mins ago",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-400/30",
    },
    {
      id: "3",
      icon: UserPlus,
      title: "New Lead Captured",
      desc: "Vikram Malhotra submitted inquiry via Website Landing Page.",
      time: "1 hour ago",
      color: "text-blue-400 bg-blue-500/10 border-blue-400/30",
    },
    {
      id: "4",
      icon: CheckCircle,
      title: "Deal Approved & Disbursed",
      desc: "Business Loan ₹15L disbursed for Apex Logistics.",
      time: "2 hours ago",
      color: "text-green-400 bg-green-500/10 border-green-400/30",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-6 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <h3 className="text-base font-bold text-white">Recent Activity Stream</h3>
        <span className="text-xs text-sky-400 font-semibold cursor-pointer hover:underline">
          View All Logs
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-start gap-3.5 border-b border-slate-800/50 pb-3.5 last:border-b-0 last:pb-0">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${item.color}`}>
                <Icon size={16} />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{item.title}</span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock size={11} />
                    {item.time}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400 leading-snug">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

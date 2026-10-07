"use client";

import { Calendar, Clock, CheckCircle2, Phone, MessageSquare, AlertCircle } from "lucide-react";

export default function FollowUpsPage() {
  const followUps = [
    { id: "1", client: "Rajesh Sharma", phone: "+91 98765 43210", note: "Collect signed sanction letter for ₹5L PL.", time: "11:00 AM", status: "Due Today", urgent: true },
    { id: "2", client: "Ananya Verma", phone: "+91 98111 22334", note: "Confirm property valuation visit slot.", time: "02:30 PM", status: "Due Today", urgent: false },
    { id: "3", client: "Deepak Chawla", phone: "+91 97777 88899", note: "Send revised interest rate breakdown.", time: "04:15 PM", status: "Due Today", urgent: false },
    { id: "4", client: "Meenakshi Sundaram", phone: "+91 96666 55544", note: "Customer requested callback after meeting.", time: "Tomorrow 10:00 AM", status: "Upcoming", urgent: false },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Scheduled Follow-ups</h2>
        <p className="text-xs text-slate-400">Stay on top of critical client touchpoints and conversion reminders.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {followUps.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-5 shadow-sm sm:flex-row sm:items-center"
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                item.urgent ? "border-amber-500/30 bg-amber-500/10 text-amber-400" : "border-sky-500/30 bg-sky-500/10 text-sky-400"
              }`}>
                <Clock size={20} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{item.client}</span>
                  <span className="text-xs text-slate-400">({item.phone})</span>
                  {item.urgent && (
                    <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-bold text-rose-400">
                      URGENT
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-300">{item.note}</p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-sky-400 font-semibold">
                  <Calendar size={12} />
                  <span>{item.time} &bull; {item.status}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <button className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-[#050c1e] px-3.5 py-2 text-xs font-semibold text-sky-400 hover:border-sky-400">
                <Phone size={13} />
                <span>Call Now</span>
              </button>
              <button className="flex items-center gap-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/25">
                <CheckCircle2 size={13} />
                <span>Mark Done</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

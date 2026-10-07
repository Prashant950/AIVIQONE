"use client";

import { Calendar, User, Clock, AlertTriangle } from "lucide-react";

export default function TeamFollowUpsPage() {
  const followUps = [
    { id: "1", agent: "Prashant Singh", client: "Rajesh Sharma", note: "Sanction letter discussion", time: "11:00 AM", overdue: false },
    { id: "2", agent: "Pooja Hegde", client: "Vikram Malhotra", note: "Pending ITR documents", time: "09:30 AM", overdue: true },
    { id: "3", agent: "Rohit Deshmukh", client: "Ananya Verma", note: "Property evaluation site visit", time: "02:30 PM", overdue: false },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Team Scheduled Follow-ups</h2>
        <p className="text-xs text-slate-400">Monitor all agent client interactions and overdue tasks across your team.</p>
      </div>

      <div className="flex flex-col gap-3">
        {followUps.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-4 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                item.overdue ? "border-rose-500/30 bg-rose-500/10 text-rose-400" : "border-sky-500/30 bg-sky-500/10 text-sky-400"
              }`}>
                {item.overdue ? <AlertTriangle size={18} /> : <Calendar size={18} />}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">
                  {item.client} &bull; <span className="text-sky-400 font-normal">Assigned to {item.agent}</span>
                </span>
                <span className="text-xs text-slate-300 mt-0.5">{item.note}</span>
              </div>
            </div>

            <div className="text-right text-xs">
              <span className={`font-bold ${item.overdue ? "text-rose-400" : "text-slate-400"}`}>
                {item.time} {item.overdue && "(OVERDUE)"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

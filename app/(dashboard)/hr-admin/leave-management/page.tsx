"use client";

import { CalendarDays, CheckCircle2, XCircle } from "lucide-react";

export default function LeaveManagementPage() {
  const leaves = [
    { employee: "Karan Johar", type: "Sick Leave", duration: "1 Day (Today)", reason: "Medical appointment", status: "Pending" },
    { employee: "Pooja Hegde", type: "Casual Leave", duration: "2 Days (28-29 Aug)", reason: "Family event", status: "Approved" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Leave Management &amp; Approvals</h2>
        <p className="text-xs text-slate-400">Review employee leave applications and manage department balance quotas.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-5 py-3.5">Employee</th>
              <th className="px-5 py-3.5">Leave Type</th>
              <th className="px-5 py-3.5">Duration</th>
              <th className="px-5 py-3.5">Reason</th>
              <th className="px-5 py-3.5 text-right">Decision</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {leaves.map((l) => (
              <tr key={l.employee} className="hover:bg-slate-800/40">
                <td className="px-5 py-3.5 font-bold text-white">{l.employee}</td>
                <td className="px-5 py-3.5 text-slate-300">{l.type}</td>
                <td className="px-5 py-3.5 text-slate-300">{l.duration}</td>
                <td className="px-5 py-3.5 text-slate-400">{l.reason}</td>
                <td className="px-5 py-3.5 text-right">
                  {l.status === "Pending" ? (
                    <div className="flex items-center justify-end gap-2">
                      <button className="rounded-lg bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-[11px] font-bold text-emerald-400">Approve</button>
                      <button className="rounded-lg bg-rose-500/15 border border-rose-500/30 px-2.5 py-1 text-[11px] font-bold text-rose-400">Reject</button>
                    </div>
                  ) : (
                    <span className="text-emerald-400 font-bold">{l.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

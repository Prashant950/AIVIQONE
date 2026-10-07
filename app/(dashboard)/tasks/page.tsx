"use client";

import Link from "next/link";
import { CheckSquare, Plus, Users, Clock } from "lucide-react";

export default function TasksMasterPage() {
  const tasks = [
    { id: "T-101", title: "Complete branch Q3 target reconciliation", assignee: "Rohit Deshmukh", due: "28 Aug", status: "In Progress" },
    { id: "T-102", title: "Review high-ticket LAP valuation report", assignee: "Prashant Singh", due: "Today", status: "Pending" },
    { id: "T-103", title: "Configure new VoIP SIP trunk credentials", assignee: "Prashant Singh", due: "Completed", status: "Done" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Tasks &amp; Project Operations</h2>
          <p className="text-xs text-slate-400">Master view of all departmental deliverables and shared team items.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/tasks/shared"
            className="rounded-xl border border-slate-700 bg-[#050c1e] px-3.5 py-2 text-xs font-semibold text-slate-300 hover:border-sky-400"
          >
            Shared Tasks
          </Link>
          <Link
            href="/tasks/new"
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white"
          >
            <Plus size={14} />
            <span>Create Task</span>
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-5 py-3.5">Task ID &amp; Title</th>
              <th className="px-5 py-3.5">Assignee</th>
              <th className="px-5 py-3.5">Due Date</th>
              <th className="px-5 py-3.5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {tasks.map((t) => (
              <tr key={t.id} className="hover:bg-slate-800/40">
                <td className="px-5 py-3.5">
                  <span className="font-bold text-white block">{t.title}</span>
                  <span className="text-[11px] text-slate-400">{t.id}</span>
                </td>
                <td className="px-5 py-3.5 text-slate-300">{t.assignee}</td>
                <td className="px-5 py-3.5 text-slate-300">{t.due}</td>
                <td className="px-5 py-3.5 text-right">
                  <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                    t.status === "Done"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                  }`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { CheckSquare, Users } from "lucide-react";

export default function SharedTasksPage() {
  const shared = [
    { title: "Monthly loan disbursement audit checklist", team: "Sales Operations", count: "4/6 done" },
    { title: "WhatsApp marketing template approval", team: "Marketing & Growth", count: "2/3 done" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Shared Team Tasks</h2>
        <p className="text-xs text-slate-400">Collaborative workspaces across sales, credit underwriting, and operations.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {shared.map((s) => (
          <div key={s.title} className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-5">
            <h3 className="text-sm font-bold text-white">{s.title}</h3>
            <span className="text-xs text-sky-400 font-semibold">{s.team}</span>
            <div className="mt-4 border-t border-slate-800 pt-3 flex justify-between text-xs">
              <span className="text-slate-400">Progress</span>
              <span className="font-bold text-emerald-400">{s.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

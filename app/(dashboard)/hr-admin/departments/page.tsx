"use client";

import { Network, Users, Plus } from "lucide-react";

export default function DepartmentsPage() {
  const depts = [
    { name: "Direct Sales & DSA Operations", head: "Rohit Deshmukh", count: 28 },
    { name: "Credit Risk & Underwriting", head: "Sunil Verma", count: 8 },
    { name: "Customer Success & Support", head: "Deepa Nair", count: 7 },
    { name: "Technology & Engineering", head: "Prashant Singh", count: 5 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Organizational Departments</h2>
          <p className="text-xs text-slate-400">Manage business units and departmental leadership.</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white">
          <Plus size={14} />
          <span>Add Department</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {depts.map((d) => (
          <div key={d.name} className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <Network size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{d.name}</h3>
                <span className="text-xs text-slate-400">Head: {d.head}</span>
              </div>
            </div>
            <div className="mt-4 border-t border-slate-800 pt-3 flex justify-between text-xs">
              <span className="text-slate-400">Active Staff</span>
              <span className="font-bold text-sky-400">{d.count} Members</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

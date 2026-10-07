"use client";

import { UserCheck, Search, Filter } from "lucide-react";

export default function GlobalLeadsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Global Leads Master Console</h2>
        <p className="text-xs text-slate-400">All inbound and assigned leads across all sales branches.</p>
      </div>

      <div className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-6 text-center text-xs text-slate-400">
        <UserCheck size={32} className="mx-auto text-sky-400 mb-2" />
        <span className="text-white font-bold text-sm block">Global Leads Aggregator</span>
        <span>Displaying organization-wide 1,280 active lead records.</span>
      </div>
    </div>
  );
}

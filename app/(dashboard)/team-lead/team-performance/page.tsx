"use client";

import { Trophy, TrendingUp, Award, Users } from "lucide-react";

export default function TeamPerformancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Team KPI &amp; Conversion Analytics</h2>
        <p className="text-xs text-slate-400">Evaluate individual agent productivity, conversion ratios and sales milestones.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-amber-500/30 bg-[#070e24] p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
            <Trophy size={24} />
          </div>
          <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-slate-400">Top Performer (MTD)</span>
          <span className="mt-1 block text-lg font-bold text-white">Karan Johar</span>
          <span className="mt-1 text-xs text-emerald-400 font-bold">₹18.2L Disbursed (22 Deals)</span>
        </div>

        <div className="rounded-2xl border border-sky-500/30 bg-[#070e24] p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
            <TrendingUp size={24} />
          </div>
          <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-slate-400">Highest Conversion Rate</span>
          <span className="mt-1 block text-lg font-bold text-white">Prashant Singh</span>
          <span className="mt-1 text-xs text-sky-400 font-bold">34.8% Lead-to-Disburse</span>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-[#070e24] p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
            <Award size={24} />
          </div>
          <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-slate-400">Most Calls Connected</span>
          <span className="mt-1 block text-lg font-bold text-white">Rohit Deshmukh</span>
          <span className="mt-1 text-xs text-emerald-400 font-bold">482 Connected Calls</span>
        </div>
      </div>
    </div>
  );
}

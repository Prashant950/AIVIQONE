"use client";

import { GitPullRequest, Search, DollarSign } from "lucide-react";

export default function PipelinePage() {
  const stages = [
    { title: "New Inquiry", count: 24, volume: "₹1.2 Cr" },
    { title: "Document Collection", count: 18, volume: "₹85L" },
    { title: "Bank Credit Assessment", count: 12, volume: "₹92L" },
    { title: "Sanctioned & Approved", count: 8, volume: "₹45L" },
    { title: "Disbursed", count: 15, volume: "₹1.1 Cr" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Deal Pipeline &amp; Stage Flow</h2>
        <p className="text-xs text-slate-400">Track deal progression from initial contact to successful disbursement.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stages.map((stage) => (
          <div
            key={stage.title}
            className="flex flex-col justify-between rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-4 shadow-sm backdrop-blur-sm"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">{stage.title}</span>
              <span className="mt-2 text-2xl font-extrabold text-sky-400">{stage.count} Deals</span>
            </div>
            <div className="mt-4 border-t border-slate-800 pt-3">
              <span className="text-[11px] font-semibold text-slate-400">Total Volume:</span>
              <span className="block text-sm font-bold text-emerald-400">{stage.volume}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

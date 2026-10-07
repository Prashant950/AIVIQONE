"use client";

import { BarChart3, TrendingUp, Download } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Executive Analytics &amp; Reports</h2>
          <p className="text-xs text-slate-400">Deep performance breakdown across products, branches, and lenders.</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white">
          <Download size={14} />
          <span>Export Full Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-6">
          <h3 className="text-sm font-bold text-white mb-2">Disbursement by Product Category</h3>
          <div className="flex flex-col gap-3 text-xs mt-4">
            <div className="flex justify-between"><span>Personal Loans (38%)</span><span className="text-sky-400 font-bold">₹6.99 Cr</span></div>
            <div className="flex justify-between"><span>Home Loans (42%)</span><span className="text-sky-400 font-bold">₹7.72 Cr</span></div>
            <div className="flex justify-between"><span>Business Loans (20%)</span><span className="text-sky-400 font-bold">₹3.68 Cr</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-6">
          <h3 className="text-sm font-bold text-white mb-2">Lead Conversion Funnel Efficiency</h3>
          <div className="flex flex-col gap-3 text-xs mt-4">
            <div className="flex justify-between"><span>Total Inbound Leads</span><span className="text-white font-bold">1,280</span></div>
            <div className="flex justify-between"><span>Contacted &amp; Qualified</span><span className="text-white font-bold">890 (69.5%)</span></div>
            <div className="flex justify-between"><span>Applications Submitted</span><span className="text-white font-bold">420 (32.8%)</span></div>
            <div className="flex justify-between"><span>Final Disbursements</span><span className="text-emerald-400 font-bold">295 (23.0%)</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

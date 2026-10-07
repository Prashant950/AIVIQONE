"use client";

import { CreditCard, Download, CheckCircle2, Shield } from "lucide-react";

export default function BillingPage() {
  const invoices = [
    { id: "INV-2026-001", date: "01 Feb 2026", amount: "₹24,999", plan: "Enterprise Tier (50 Seats)", status: "Paid" },
    { id: "INV-2026-002", date: "01 Jan 2026", amount: "₹24,999", plan: "Enterprise Tier (50 Seats)", status: "Paid" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Billing &amp; Subscription Management</h2>
        <p className="text-xs text-slate-400">View active subscription details, seats, and download GST tax invoices.</p>
      </div>

      <div className="rounded-2xl border border-sky-500/30 bg-[#050c1e] p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase text-sky-400">Active Plan</span>
            <span className="text-xl font-bold text-white mt-1">AIVIQONE Enterprise Plan</span>
            <span className="text-xs text-slate-400">50 Active User Licenses &bull; Annual Billing</span>
          </div>
          <button className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white">
            Manage Payment Method
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800">
          <h3 className="text-sm font-bold text-white">Billing History &amp; GST Invoices</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">Invoice ID</th>
                <th className="px-5 py-3.5">Billing Date</th>
                <th className="px-5 py-3.5">Description</th>
                <th className="px-5 py-3.5">Amount</th>
                <th className="px-5 py-3.5 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-800/40">
                  <td className="px-5 py-3.5 font-bold text-white">{inv.id}</td>
                  <td className="px-5 py-3.5 text-slate-300">{inv.date}</td>
                  <td className="px-5 py-3.5 text-slate-300">{inv.plan}</td>
                  <td className="px-5 py-3.5 font-bold text-white">{inv.amount}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="inline-flex items-center gap-1 text-sky-400 hover:underline">
                      <Download size={13} />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

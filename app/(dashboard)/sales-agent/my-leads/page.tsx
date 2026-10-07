"use client";

import { useState } from "react";
import { UserCheck, Search, Filter, Phone, MessageSquare, Plus, ChevronRight, Eye } from "lucide-react";

export default function MyLeadsPage() {
  const [filter, setFilter] = useState("all");

  const sampleLeads = [
    { id: "L-101", name: "Rajesh Sharma", phone: "+91 98765 43210", product: "Personal Loan", amount: "₹5,00,000", status: "Hot", stage: "Document Verification", date: "Today" },
    { id: "L-102", name: "Ananya Verma", phone: "+91 98111 22334", product: "Home Loan", amount: "₹45,00,000", status: "Warm", stage: "Bank Approval", date: "Yesterday" },
    { id: "L-103", name: "Vikram Malhotra", phone: "+91 97222 33445", product: "Business Loan", amount: "₹15,00,000", status: "Hot", stage: "Disbursement Pending", date: "22 Aug" },
    { id: "L-104", name: "Pooja Hegde", phone: "+91 99887 76655", product: "Credit Card", amount: "Premium", status: "New", stage: "Initial Callback", date: "21 Aug" },
    { id: "L-105", name: "Suresh Gupta", phone: "+91 94555 66778", product: "Loan Against Property", amount: "₹80,00,000", status: "Cold", stage: "Follow-up Next Month", date: "20 Aug" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header with Search and Actions */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">My Leads Pipeline</h2>
          <p className="text-xs text-slate-400">Manage and track your active prospects and loan applications.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md">
            <Plus size={14} />
            <span>Create Lead</span>
          </button>
        </div>
      </div>

      {/* Leads Table Container */}
      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] backdrop-blur-sm">
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800">
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search leads by name, phone or product..."
              className="w-full rounded-xl border border-slate-800 bg-[#030712] py-2 pl-9 pr-3 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-[#030712] px-3 py-2 text-xs text-slate-300 hover:border-slate-700">
              <Filter size={13} />
              <span>All Stages</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">Lead Name &amp; Contact</th>
                <th className="px-5 py-3.5">Product</th>
                <th className="px-5 py-3.5">Amount</th>
                <th className="px-5 py-3.5">Priority</th>
                <th className="px-5 py-3.5">Pipeline Stage</th>
                <th className="px-5 py-3.5 text-right">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {sampleLeads.map((lead) => (
                <tr key={lead.id} className="transition-colors hover:bg-slate-800/40">
                  <td className="px-5 py-3.5">
                    <div className="flex flex-col">
                      <span className="font-bold text-white">{lead.name}</span>
                      <span className="text-[11px] text-slate-400">{lead.phone}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-slate-200">{lead.product}</td>
                  <td className="px-5 py-3.5 font-bold text-white">{lead.amount}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                        lead.status === "Hot"
                          ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                          : lead.status === "Warm"
                          ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                          : "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-300">{lead.stage}</td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="Direct Call"
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-700 bg-[#050c1e] text-sky-400 hover:border-sky-400 hover:bg-sky-500/10"
                      >
                        <Phone size={12} />
                      </button>
                      <button
                        title="WhatsApp Chat"
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-700 bg-[#050c1e] text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10"
                      >
                        <MessageSquare size={12} />
                      </button>
                    </div>
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

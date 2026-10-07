"use client";

import { Users, Search, Filter, Mail, Phone, MoreHorizontal } from "lucide-react";

export default function CustomersPage() {
  const customers = [
    { id: "C-01", name: "Rajesh Sharma", email: "rajesh.sharma@gmail.com", phone: "+91 98765 43210", loanType: "Personal Loan", disbursed: "₹5,00,000", status: "Active", bank: "HDFC Bank" },
    { id: "C-02", name: "Ananya Verma", email: "ananya.v@outlook.com", phone: "+91 98111 22334", loanType: "Home Loan", disbursed: "₹45,00,000", status: "In Approval", bank: "ICICI Bank" },
    { id: "C-03", name: "Vikram Malhotra", email: "vikram@apexlogistics.in", phone: "+91 97222 33445", loanType: "Business Loan", disbursed: "₹15,00,000", status: "Active", bank: "Axis Bank" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Customer Accounts Directory</h2>
          <p className="text-xs text-slate-400">View customer profile, KYC status, and disbursed loan records.</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="relative max-w-sm w-full">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search customers by name, phone or email..."
              className="w-full rounded-xl border border-slate-800 bg-[#030712] py-2 pl-9 pr-3 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">Customer</th>
                <th className="px-5 py-3.5">Product &amp; Bank</th>
                <th className="px-5 py-3.5">Disbursed Amount</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800/40">
                  <td className="px-5 py-3.5">
                    <span className="font-bold text-white block">{c.name}</span>
                    <span className="text-[11px] text-slate-400">{c.email} &bull; {c.phone}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-white font-medium block">{c.loanType}</span>
                    <span className="text-[11px] text-slate-400">{c.bank}</span>
                  </td>
                  <td className="px-5 py-3.5 font-bold text-emerald-400">{c.disbursed}</td>
                  <td className="px-5 py-3.5">
                    <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="text-slate-400 hover:text-white">
                      <MoreHorizontal size={16} />
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

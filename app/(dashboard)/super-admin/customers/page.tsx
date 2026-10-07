"use client";

import { Users, Search, Download } from "lucide-react";

export default function MasterCustomersPage() {
  const masterClients = [
    { id: "MC-01", name: "Apex Logistics India Pvt Ltd", category: "Corporate", contact: "Vikram Malhotra", totalLoans: "₹45L", status: "Active" },
    { id: "MC-02", name: "Kiran Exports Ltd", category: "SME", contact: "Kiran Rao", totalLoans: "₹1.2 Cr", status: "Active" },
    { id: "MC-03", name: "Rajesh Sharma", category: "Retail", contact: "Rajesh Sharma", totalLoans: "₹5L", status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Master Customers Database</h2>
          <p className="text-xs text-slate-400">Complete organization-wide client relationship records.</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-[#050c1e] px-3.5 py-2 text-xs font-semibold text-sky-400 hover:border-sky-400">
          <Download size={14} />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">Customer / Entity</th>
                <th className="px-5 py-3.5">Category</th>
                <th className="px-5 py-3.5">Primary Contact</th>
                <th className="px-5 py-3.5">Disbursed Book</th>
                <th className="px-5 py-3.5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {masterClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-800/40">
                  <td className="px-5 py-3.5 font-bold text-white">{client.name}</td>
                  <td className="px-5 py-3.5 text-slate-300">{client.category}</td>
                  <td className="px-5 py-3.5 text-slate-300">{client.contact}</td>
                  <td className="px-5 py-3.5 font-bold text-emerald-400">{client.totalLoans}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                      {client.status}
                    </span>
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

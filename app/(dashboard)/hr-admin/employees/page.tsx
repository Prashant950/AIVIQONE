"use client";

import { Users, Plus, Mail, Phone } from "lucide-react";

export default function EmployeesPage() {
  const staff = [
    { name: "Prashant Singh", role: "Sr. Solution Architect", dept: "Technology", email: "prashant@aiviqone.com", status: "Active" },
    { name: "Rohit Deshmukh", role: "Team Lead - Sales", dept: "Sales", email: "rohit@aiviqone.com", status: "Active" },
    { name: "Pooja Hegde", role: "Loan Processing Specialist", dept: "Operations", email: "pooja@aiviqone.com", status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Employee Directory</h2>
          <p className="text-xs text-slate-400">View staff credentials, roles and departmental assignments.</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white">
          <Plus size={14} />
          <span>Add Employee</span>
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-5 py-3.5">Employee</th>
              <th className="px-5 py-3.5">Designation</th>
              <th className="px-5 py-3.5">Department</th>
              <th className="px-5 py-3.5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {staff.map((s) => (
              <tr key={s.email} className="hover:bg-slate-800/40">
                <td className="px-5 py-3.5">
                  <span className="font-bold text-white block">{s.name}</span>
                  <span className="text-[11px] text-slate-400">{s.email}</span>
                </td>
                <td className="px-5 py-3.5 text-slate-300">{s.role}</td>
                <td className="px-5 py-3.5 text-slate-300">{s.dept}</td>
                <td className="px-5 py-3.5 text-right text-emerald-400 font-bold">{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

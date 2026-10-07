"use client";

import { Shield, Plus, UserCheck } from "lucide-react";

export default function TeamPage() {
  const users = [
    { name: "Prashant Singh", email: "prashant@aiviqone.com", role: "Super Admin", status: "Active" },
    { name: "Rohit Deshmukh", email: "rohit@aiviqone.com", role: "Team Lead", status: "Active" },
    { name: "Pooja Hegde", email: "pooja@aiviqone.com", role: "Sales Agent", status: "Active" },
    { name: "Karan Johar", email: "karan@aiviqone.com", role: "Sales Agent", status: "Active" },
    { name: "Neha Sharma", email: "neha@aiviqone.com", role: "HR Admin", status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Team Members &amp; Access Control</h2>
          <p className="text-xs text-slate-400">Manage user roles, permission scopes and multi-branch team access.</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white">
          <Plus size={14} />
          <span>Invite Member</span>
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">User</th>
                <th className="px-5 py-3.5">Email</th>
                <th className="px-5 py-3.5">Role</th>
                <th className="px-5 py-3.5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {users.map((u) => (
                <tr key={u.email} className="hover:bg-slate-800/40">
                  <td className="px-5 py-3.5 font-bold text-white">{u.name}</td>
                  <td className="px-5 py-3.5 text-slate-400">{u.email}</td>
                  <td className="px-5 py-3.5">
                    <span className="rounded-md bg-sky-500/15 border border-sky-500/30 px-2 py-0.5 text-[10px] font-bold text-sky-400">
                      {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right text-emerald-400 font-bold">{u.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";

import StatCard from "@/features/dashboard-shared/components/StatCard";
import { GitPullRequest, Users, Trophy, TrendingUp, Calendar, AlertCircle } from "lucide-react";

export default function TeamLeadDashboard() {
  const teamMembers = [
    { name: "Prashant Singh", calls: 42, leads: 18, conversions: "₹12.5L", status: "On Track" },
    { name: "Rohit Deshmukh", calls: 38, leads: 15, conversions: "₹9.8L", status: "On Track" },
    { name: "Pooja Hegde", calls: 29, leads: 12, conversions: "₹6.4L", status: "Needs Attention" },
    { name: "Karan Johar", calls: 45, leads: 22, conversions: "₹18.2L", status: "Top Performer" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Team Lead Command Dashboard</h2>
        <p className="text-xs text-slate-400">Real-time team deal velocity, pipeline monitoring and agent KPI stats.</p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Team Active Deals" value="86" change="+14% this week" isPositive={true} icon={GitPullRequest} />
        <StatCard label="Total Team Pipeline" value="₹2.45 Cr" change="+22% MTD" isPositive={true} icon={TrendingUp} />
        <StatCard label="Active Sales Agents" value="8" subtext="All 8 checked in today" icon={Users} />
        <StatCard label="Team Disbursed (MTD)" value="₹84.2L" change="92% of target" isPositive={true} icon={Trophy} />
      </div>

      {/* Team Performance Table */}
      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Agent Live Performance Leaderboard</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">Agent</th>
                <th className="px-5 py-3.5">Calls Today</th>
                <th className="px-5 py-3.5">Active Leads</th>
                <th className="px-5 py-3.5">Disbursed (MTD)</th>
                <th className="px-5 py-3.5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {teamMembers.map((member) => (
                <tr key={member.name} className="hover:bg-slate-800/40">
                  <td className="px-5 py-3.5 font-bold text-white">{member.name}</td>
                  <td className="px-5 py-3.5 text-slate-200">{member.calls}</td>
                  <td className="px-5 py-3.5 text-slate-200">{member.leads}</td>
                  <td className="px-5 py-3.5 font-bold text-emerald-400">{member.conversions}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                      member.status === "Top Performer"
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                        : member.status === "On Track"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                    }`}>
                      {member.status}
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

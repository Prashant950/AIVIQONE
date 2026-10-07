"use client";

import { useState } from "react";
import { Phone, MoreVertical, Info, ChevronLeft, ChevronRight } from "lucide-react";

interface LeadRow {
  name: string;
  type: string;
  avatarInitials: string;
  avatarBg: string;
  phone: string;
  source: string;
  status: "Not Called" | "Follow-up Due" | "No Answer";
  lastContact: string;
  nextFollowUp: string;
  priority: "High" | "Medium" | "Low";
  leadStatus: "New" | "Interested" | "Contacted" | "Follow-up";
}

const leads: LeadRow[] = [
  {
    name: "Rahul Sharma",
    type: "New Lead",
    avatarInitials: "RS",
    avatarBg: "bg-blue-600",
    phone: "+91 98765 43210",
    source: "Website",
    status: "Not Called",
    lastContact: "Never",
    nextFollowUp: "Today, 11:30 AM",
    priority: "High",
    leadStatus: "New",
  },
  {
    name: "Neha Gupta",
    type: "New Lead",
    avatarInitials: "NG",
    avatarBg: "bg-pink-600",
    phone: "+91 87654 32109",
    source: "Facebook",
    status: "Follow-up Due",
    lastContact: "11 Jul, 4:20 PM",
    nextFollowUp: "Today, 12:00 PM",
    priority: "High",
    leadStatus: "Interested",
  },
  {
    name: "Amit Verma",
    type: "New Lead",
    avatarInitials: "AV",
    avatarBg: "bg-amber-600",
    phone: "+91 76543 21098",
    source: "Referral",
    status: "No Answer",
    lastContact: "10 Jul, 3:15 PM",
    nextFollowUp: "Today, 2:00 PM",
    priority: "Medium",
    leadStatus: "Contacted",
  },
  {
    name: "Priya Singh",
    type: "New Lead",
    avatarInitials: "PS",
    avatarBg: "bg-emerald-600",
    phone: "+91 65432 10987",
    source: "Website",
    status: "Not Called",
    lastContact: "Never",
    nextFollowUp: "Today, 3:00 PM",
    priority: "Medium",
    leadStatus: "New",
  },
  {
    name: "Vikram Joshi",
    type: "Existing Lead",
    avatarInitials: "VJ",
    avatarBg: "bg-purple-600",
    phone: "+91 54321 09876",
    source: "Google Ads",
    status: "Follow-up Due",
    lastContact: "11 Jul, 11:10 AM",
    nextFollowUp: "Tomorrow, 10:00 AM",
    priority: "Low",
    leadStatus: "Follow-up",
  },
];

export default function CallingListCard() {
  const [activeTab, setActiveTab] = useState("call-now");
  const [page, setPage] = useState(1);

  const tabs = [
    { key: "call-now", label: "Call Now" },
    { key: "follow-up", label: "Follow-up Due", count: 7, countColor: "bg-red-500" },
    { key: "no-answer", label: "No Answer", count: 5, countColor: "bg-amber-500" },
    { key: "call-later", label: "Call Later", count: 6, countColor: "bg-blue-500" },
    { key: "high-priority", label: "High Priority", count: 3, countColor: "bg-red-500" },
  ];

  return (
    <div className="rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
        <div className="flex items-center gap-1.5">
          <h2 className="text-sm font-bold text-white tracking-tight">My Calling List</h2>
          <Info size={13} className="text-slate-500 cursor-pointer" />
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-[#1b2b52] bg-[#08122c] px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:border-sky-400 hover:text-white transition-colors cursor-pointer">
            View All
          </button>
          <button className="text-slate-400 hover:text-white p-1">
            <MoreVertical size={14} />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 border-b border-[#15203c] scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#0d1b3e] text-white border border-blue-500/40 shadow-sm"
                  : "text-slate-400 hover:bg-[#0a1532] hover:text-slate-200"
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`flex h-4 min-w-4 items-center justify-center rounded-full ${tab.countColor} px-1 text-[9px] font-bold text-white`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Calling List Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[780px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#15203c] text-[11px] font-medium text-slate-500">
              <th className="pb-2.5 pl-1">Name</th>
              <th className="pb-2.5">Phone Number</th>
              <th className="pb-2.5">Source</th>
              <th className="pb-2.5">Status</th>
              <th className="pb-2.5">Last Contact</th>
              <th className="pb-2.5">Next Follow-up</th>
              <th className="pb-2.5">Priority</th>
              <th className="pb-2.5">Lead Status</th>
              <th className="pb-2.5 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#131e3d]">
            {leads.map((row) => (
              <tr key={row.name} className="hover:bg-[#0b1739]/50 transition-colors">
                {/* Name + Avatar */}
                <td className="py-2.5 pl-1">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${row.avatarBg} text-[10px] font-bold text-white`}
                    >
                      {row.avatarInitials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white leading-tight">
                        {row.name}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-tight">
                        {row.type}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Phone */}
                <td className="py-2.5 font-medium text-slate-300">
                  <span className="flex items-center gap-1">
                    <Phone size={11} className="text-slate-500" />
                    <span>{row.phone}</span>
                  </span>
                </td>

                {/* Source */}
                <td className="py-2.5 text-slate-400">{row.source}</td>

                {/* Status */}
                <td className="py-2.5">
                  <span
                    className={`inline-block rounded-lg px-2 py-0.5 text-[10px] font-semibold ${
                      row.status === "Follow-up Due"
                        ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                        : row.status === "No Answer"
                        ? "border border-orange-500/30 bg-orange-500/10 text-orange-300"
                        : "border border-slate-700 bg-slate-800/80 text-slate-300"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>

                {/* Last Contact */}
                <td className="py-2.5 text-slate-400">{row.lastContact}</td>

                {/* Next Follow-up */}
                <td className="py-2.5 font-medium text-slate-300">
                  {row.nextFollowUp}
                </td>

                {/* Priority */}
                <td className="py-2.5">
                  <span
                    className={`inline-block rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                      row.priority === "High"
                        ? "bg-red-500/15 text-red-400"
                        : row.priority === "Medium"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-emerald-500/15 text-emerald-400"
                    }`}
                  >
                    {row.priority}
                  </span>
                </td>

                {/* Lead Status */}
                <td className="py-2.5">
                  <span
                    className={`inline-block rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                      row.leadStatus === "New"
                        ? "bg-blue-500/15 text-blue-400"
                        : row.leadStatus === "Interested"
                        ? "bg-teal-500/15 text-teal-400"
                        : row.leadStatus === "Contacted"
                        ? "bg-sky-500/15 text-sky-400"
                        : "bg-purple-500/15 text-purple-400"
                    }`}
                  >
                    {row.leadStatus}
                  </span>
                </td>

                {/* Action */}
                <td className="py-2.5 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-xl bg-blue-600 px-2.5 py-1 text-[10.5px] font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors cursor-pointer"
                    >
                      <Phone size={11} />
                      <span>Call</span>
                    </button>
                    <button className="text-slate-500 hover:text-slate-300 p-0.5">
                      <MoreVertical size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-[#15203c] pt-2.5 text-[11px] text-slate-500">
        <span>Showing 1 to 5 of 25 results</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#1b2b52] hover:border-slate-500 text-slate-400 hover:text-white"
          >
            <ChevronLeft size={12} />
          </button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-semibold ${
                page === num
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:bg-[#0c1838] hover:text-white"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(5, p + 1))}
            className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#1b2b52] hover:border-slate-500 text-slate-400 hover:text-white"
          >
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
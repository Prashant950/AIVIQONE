"use client";

import { useState } from "react";
import { Check, Phone, MessageSquare, Plus, CheckCircle2 } from "lucide-react";

export default function MyTasksCard() {
  const [activeTab, setActiveTab] = useState<"pending" | "progress" | "completed">("pending");

  const tasks = [
    {
      title: "Follow-up with Neha Gupta",
      type: "Lead Follow-up",
      due: "Today, 11:30 AM",
      priority: "High",
      priorityColor: "text-red-400",
      iconType: "check",
      iconBg: "bg-purple-500/20 text-purple-400",
    },
    {
      title: "Call Amit Verma",
      type: "Make Initial Call",
      due: "Today, 12:00 PM",
      priority: "High",
      priorityColor: "text-red-400",
      iconType: "phone",
      iconBg: "bg-amber-500/20 text-amber-400",
    },
    {
      title: "Send WhatsApp message to Rahul Sharma",
      type: "Communication",
      due: "Today, 2:00 PM",
      priority: "Medium",
      priorityColor: "text-amber-400",
      iconType: "message",
      iconBg: "bg-teal-500/20 text-teal-400",
    },
    {
      title: "Update lead details in CRM",
      type: "Data Update",
      due: "Tomorrow, 10:30 AM",
      priority: "Medium",
      priorityColor: "text-amber-400",
      iconType: "check-done",
      iconBg: "bg-emerald-500/20 text-emerald-400",
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#17254a] bg-[#070e24]/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-white tracking-tight">My Tasks</h2>
        <button className="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">
          View All
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 border-b border-[#15203c] pb-2 mb-3">
        <button
          onClick={() => setActiveTab("pending")}
          className={`rounded-xl px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "pending"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Pending (8)
        </button>
        <button
          onClick={() => setActiveTab("progress")}
          className={`rounded-xl px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "progress"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          In Progress (3)
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`rounded-xl px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "completed"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Completed (5)
        </button>
      </div>

      {/* Task List */}
      <div className="flex flex-col divide-y divide-[#131e3d]">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center justify-between py-2 hover:bg-[#0b1739]/40 px-1 rounded-lg transition-colors">
            <div className="flex items-center gap-2.5">
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${task.iconBg}`}>
                {task.iconType === "phone" ? (
                  <Phone size={11} />
                ) : task.iconType === "message" ? (
                  <MessageSquare size={11} />
                ) : (
                  <Check size={11} />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white leading-tight">
                  {task.title}
                </span>
                <span className="text-[10px] text-slate-400 leading-tight">
                  {task.type}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end text-right">
              <span className="text-[10.5px] text-slate-300 font-medium">{task.due}</span>
              <span className={`text-[10px] font-bold ${task.priorityColor}`}>
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Create Task Action */}
      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-sky-500/40 bg-sky-500/5 py-2 text-xs font-semibold text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all cursor-pointer"
      >
        <Plus size={13} />
        <span>Create Task</span>
      </button>
    </div>
  );
}
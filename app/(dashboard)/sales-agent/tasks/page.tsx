"use client";

import { CheckSquare, Plus, Clock, AlertCircle } from "lucide-react";

export default function AgentTasksPage() {
  const tasks = [
    { id: "1", title: "Collect ITR acknowledgement for Vikram Malhotra", due: "Today 4:00 PM", priority: "High", done: false },
    { id: "2", title: "Verify residential address for Rajesh Sharma", due: "Today 6:00 PM", priority: "Medium", done: false },
    { id: "3", title: "Follow-up on credit card upgrade request", due: "Tomorrow 11:00 AM", priority: "Low", done: true },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">My Daily Tasks</h2>
          <p className="text-xs text-slate-400">Action items assigned to you for lead processing and documentation.</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md">
          <Plus size={14} />
          <span>New Task</span>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between rounded-2xl border p-4 backdrop-blur-sm transition-all ${
              task.done
                ? "border-slate-800/50 bg-[#040817]/60 opacity-60"
                : "border-[#0e2144] bg-[#050c1e]/90 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={task.done}
                className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-400"
              />
              <div className="flex flex-col">
                <span className={`text-xs sm:text-sm font-bold ${task.done ? "line-through text-slate-500" : "text-white"}`}>
                  {task.title}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock size={11} />
                  Due: {task.due}
                </span>
              </div>
            </div>

            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                task.priority === "High"
                  ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                  : task.priority === "Medium"
                  ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              {task.priority} Priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

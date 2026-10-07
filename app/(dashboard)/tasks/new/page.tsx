"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckSquare } from "lucide-react";

export default function NewTaskPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [assignee, setAssignee] = useState("Prashant Singh");
  const [priority, setPriority] = useState("Medium");
  const [due, setDue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/tasks");
  };

  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/tasks" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-300 hover:text-white">
          <ArrowLeft size={16} />
        </Link>
        <h2 className="text-xl font-bold text-white">Create New Task</h2>
      </div>

      <div className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">Task Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Follow up on borrower CIBIL score discrepancy"
              required
              className="rounded-xl border border-slate-800 bg-[#030712] px-4 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">Description &amp; Notes</label>
            <textarea
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Add key context, file references, or guidelines..."
              className="rounded-xl border border-slate-800 bg-[#030712] p-3 text-xs text-white focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-300">Assignee</label>
              <select
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="rounded-xl border border-slate-800 bg-[#030712] px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
              >
                <option value="Prashant Singh">Prashant Singh</option>
                <option value="Rohit Deshmukh">Rohit Deshmukh</option>
                <option value="Pooja Hegde">Pooja Hegde</option>
                <option value="Karan Johar">Karan Johar</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-300">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="rounded-xl border border-slate-800 bg-[#030712] px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-xs font-bold text-white shadow-md hover:opacity-90"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import { UserPlus, Plus } from "lucide-react";

export default function RecruitmentPage() {
  const jobs = [
    { title: "Senior Sales Executive - Loan DSA", dept: "Sales", openings: 4, applicants: 28, status: "Active" },
    { title: "Underwriting & Credit Analyst", dept: "Credit Risk", openings: 2, applicants: 12, status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">Talent Recruitment Pipeline</h2>
          <p className="text-xs text-slate-400">Manage hiring positions, candidate screenings, and interview schedules.</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white">
          <Plus size={14} />
          <span>Post Job</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {jobs.map((j) => (
          <div key={j.title} className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-5">
            <h3 className="text-sm font-bold text-white">{j.title}</h3>
            <span className="text-xs text-sky-400 font-semibold">{j.dept}</span>
            <div className="mt-4 border-t border-slate-800 pt-3 flex justify-between text-xs">
              <span className="text-slate-400">{j.openings} Openings &bull; {j.applicants} Applicants</span>
              <span className="text-emerald-400 font-bold">{j.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

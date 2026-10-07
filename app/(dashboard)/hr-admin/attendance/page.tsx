"use client";

import { Clock, CheckCircle2, XCircle } from "lucide-react";

export default function AttendancePage() {
  const staff = [
    { name: "Prashant Singh", department: "Sales", checkIn: "09:12 AM", status: "Present" },
    { name: "Rohit Deshmukh", department: "Sales", checkIn: "09:05 AM", status: "Present" },
    { name: "Pooja Hegde", department: "Operations", checkIn: "09:28 AM", status: "Present" },
    { name: "Karan Johar", department: "Sales", checkIn: "-", status: "On Leave" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Staff Daily Attendance Logs</h2>
        <p className="text-xs text-slate-400">Track check-in times and daily workforce availability.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">Employee</th>
                <th className="px-5 py-3.5">Department</th>
                <th className="px-5 py-3.5">Check-In Time</th>
                <th className="px-5 py-3.5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {staff.map((s) => (
                <tr key={s.name} className="hover:bg-slate-800/40">
                  <td className="px-5 py-3.5 font-bold text-white">{s.name}</td>
                  <td className="px-5 py-3.5 text-slate-300">{s.department}</td>
                  <td className="px-5 py-3.5 text-slate-300">{s.checkIn}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                      s.status === "Present"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    }`}>
                      {s.status}
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

"use client";

import { PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, Play, Download, Search } from "lucide-react";

export default function CallsPage() {
  const callLogs = [
    { id: "1", contact: "Rajesh Sharma", phone: "+91 98765 43210", type: "outgoing", duration: "4m 12s", outcome: "Interested - Follow up set", time: "Today 10:15 AM", recording: true },
    { id: "2", contact: "Ananya Verma", phone: "+91 98111 22334", type: "incoming", duration: "8m 45s", outcome: "Eligibility Discussed", time: "Today 09:30 AM", recording: true },
    { id: "3", contact: "Unknown Prospect", phone: "+91 91234 56789", type: "missed", duration: "0s", outcome: "Missed Call", time: "Yesterday 05:20 PM", recording: false },
    { id: "4", contact: "Vikram Malhotra", phone: "+91 97222 33445", type: "outgoing", duration: "6m 10s", outcome: "Documents Requested", time: "Yesterday 02:10 PM", recording: true },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">VoIP Call Logs &amp; Recordings</h2>
          <p className="text-xs text-slate-400">Stream audio recordings and analyze agent communication metrics.</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-sm backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800">
          <div className="relative max-w-sm">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search call logs by name or number..."
              className="w-full rounded-xl border border-slate-800 bg-[#030712] py-2 pl-9 pr-3 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5">Contact</th>
                <th className="px-5 py-3.5">Type</th>
                <th className="px-5 py-3.5">Duration</th>
                <th className="px-5 py-3.5">Outcome</th>
                <th className="px-5 py-3.5">Timestamp</th>
                <th className="px-5 py-3.5 text-right">Recording</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {callLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/40">
                  <td className="px-5 py-3.5">
                    <span className="font-bold text-white block">{log.contact}</span>
                    <span className="text-[11px] text-slate-400">{log.phone}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1.5 capitalize">
                      {log.type === "incoming" && <PhoneIncoming size={14} className="text-emerald-400" />}
                      {log.type === "outgoing" && <PhoneOutgoing size={14} className="text-sky-400" />}
                      {log.type === "missed" && <PhoneMissed size={14} className="text-rose-400" />}
                      <span>{log.type}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-slate-300">{log.duration}</td>
                  <td className="px-5 py-3.5 text-slate-300">{log.outcome}</td>
                  <td className="px-5 py-3.5 text-slate-400">{log.time}</td>
                  <td className="px-5 py-3.5 text-right">
                    {log.recording ? (
                      <div className="flex items-center justify-end gap-2">
                        <button className="flex h-7 items-center gap-1 rounded-lg border border-sky-400/30 bg-sky-500/10 px-2.5 text-[11px] font-bold text-sky-400 hover:bg-sky-500/20">
                          <Play size={10} />
                          <span>Play</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] text-slate-600">No Audio</span>
                    )}
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

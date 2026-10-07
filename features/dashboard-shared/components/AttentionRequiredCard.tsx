import { AlertTriangle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AttentionRequiredCard() {
  const alerts = [
    {
      id: "1",
      title: "5 Overdue Follow-ups",
      desc: "High-value prospects pending callback from today morning.",
      actionText: "View Leads",
      href: "/sales-agent/follow-ups",
      urgent: true,
    },
    {
      id: "2",
      title: "KYC Documents Incomplete",
      desc: "3 loan applications require missing bank statements.",
      actionText: "Review Files",
      href: "/sales-agent/customers",
      urgent: false,
    },
    {
      id: "3",
      title: "WhatsApp SLA Threshold",
      desc: "2 new inquiries unassigned for more than 15 minutes.",
      actionText: "Assign Inquiries",
      href: "/sales-agent/whatsapp",
      urgent: true,
    },
  ];

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-[#0c0f1d] p-6 shadow-[inset_0_1px_0_0_rgba(245,158,11,0.2)] backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-amber-400">
          <AlertTriangle size={18} />
          <h3 className="text-base font-bold text-white">Attention Required</h3>
        </div>
        <span className="rounded-full bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
          {alerts.length} Action Items
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3.5">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-[#050c1e] p-3.5 transition-colors hover:border-slate-700"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">{alert.title}</span>
                {alert.urgent && (
                  <span className="rounded bg-rose-500/20 px-1.5 py-0.2 text-[10px] font-bold text-rose-400">
                    URGENT
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{alert.desc}</p>
            </div>

            <Link
              href={alert.href}
              className="flex shrink-0 items-center gap-1 text-xs font-bold text-sky-400 hover:underline"
            >
              <span>{alert.actionText}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

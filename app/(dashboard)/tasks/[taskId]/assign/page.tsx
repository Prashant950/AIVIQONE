import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface AssignTaskPageProps {
  params: Promise<{ taskId: string }>;
}

export default async function AssignTaskPage({ params }: AssignTaskPageProps) {
  const { taskId } = await params;

  return (
    <div className="mx-auto max-w-xl flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link
          href="/tasks"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-300 hover:text-white"
        >
          <ArrowLeft size={16} />
        </Link>
        <h2 className="text-xl font-bold text-white">Assign Task #{taskId}</h2>
      </div>

      <div className="rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-6">
        <p className="text-xs text-slate-400 mb-4">
          Select an agent or team member to transfer or assign task #{taskId}.
        </p>
        <div className="flex flex-col gap-3">
          {["Prashant Singh", "Rohit Deshmukh", "Pooja Hegde", "Karan Johar"].map((agent) => (
            <button
              key={agent}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#030712] p-3 text-xs text-white hover:border-sky-400"
            >
              <span>{agent}</span>
              <span className="text-sky-400 font-bold">Assign &rarr;</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

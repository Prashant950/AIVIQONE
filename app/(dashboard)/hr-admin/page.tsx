"use client";

import StatCard from "@/features/dashboard-shared/components/StatCard";
import { Users, Clock, CalendarDays, UserPlus, Network, Building2 } from "lucide-react";

export default function HRAdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Human Resources &amp; People Operations</h2>
        <p className="text-xs text-slate-400">Manage workforce attendance, employee profiles, leave requests and recruitment.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Staff" value="48" subtext="Across 4 Departments" icon={Users} />
        <StatCard label="Attendance Today" value="95.8%" change="46 / 48 present" isPositive={true} icon={Clock} />
        <StatCard label="Pending Leave Requests" value="3" subtext="Requires approval" icon={CalendarDays} />
        <StatCard label="Open Positions" value="6" subtext="In Active Recruitment" icon={UserPlus} />
      </div>
    </div>
  );
}

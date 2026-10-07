"use client";

import StatCard from "@/features/dashboard-shared/components/StatCard";
import { Shield, Users, CreditCard, BarChart3, TrendingUp, Building2 } from "lucide-react";

export default function SuperAdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Super Admin Enterprise Control Center</h2>
        <p className="text-xs text-slate-400">Organization-wide telemetry, billing status, and enterprise system health.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Enterprise Users" value="124" change="+8 new this month" isPositive={true} icon={Users} />
        <StatCard label="Total Disbursed (YTD)" value="₹18.4 Cr" change="+42% YoY" isPositive={true} icon={TrendingUp} />
        <StatCard label="Active Subscription" value="Enterprise Plan" subtext="Renews on 15 Jan 2027" icon={CreditCard} />
        <StatCard label="System Uptime" value="99.98%" subtext="All services operational" icon={Shield} />
      </div>
    </div>
  );
}

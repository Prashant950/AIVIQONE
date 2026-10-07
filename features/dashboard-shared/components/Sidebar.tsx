"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import {
  LayoutDashboard,
  PhoneCall,
  UserCheck,
  CalendarClock,
  CheckSquare,
  Calendar,
  Users,
  Contact,
  Phone,
  MessageSquare,
  Bell,
  User,
  X,
} from "lucide-react";
import DonutChart from "@/components/ui/DonutChart";
import { Role, SidebarItem, sidebarConfig } from "../config/sidebarConfig";

export interface SidebarProps {
  role?: Role;
  sections?: SidebarItem[];
  notificationCount?: number;
}

export default function Sidebar({
  role = "sales-agent",
  sections,
  notificationCount = 12,
}: SidebarProps) {
  const pathname = usePathname();

  const myWork = [
    { label: "Calling List", href: "/sales-agent/calling-list", icon: PhoneCall },
    { label: "My Leads", href: "/sales-agent/my-leads", icon: UserCheck },
    { label: "Follow-ups", href: "/sales-agent/follow-ups", icon: CalendarClock, badge: "14", badgeColor: "bg-red-500" },
    { label: "My Tasks", href: "/sales-agent/tasks", icon: CheckSquare, badge: "8", badgeColor: "bg-amber-500" },
    { label: "Calendar", href: "/sales-agent/calendar", icon: Calendar },
  ];

  const crm = [
    { label: "Customers", href: "/sales-agent/customers", icon: Users },
    { label: "Contacts", href: "/sales-agent/contacts", icon: Contact },
  ];

  const communication = [
    { label: "Calls", href: "/sales-agent/calls", icon: Phone },
    { label: "WhatsApp", href: "/sales-agent/whatsapp", icon: MessageSquare },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col justify-between border-r border-[#15203c] bg-[#070e24] px-3.5 py-4 lg:flex overflow-y-auto selection:bg-sky-500 selection:text-white scrollbar-none">
      <div className="flex flex-col gap-4">
        {/* Brand Header with Close/Toggle Icon */}
        <div className="flex items-center justify-between px-1.5 pt-1">
          <Logo />
          <button
            type="button"
            aria-label="Collapse menu"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0d1b3e] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={12} />
          </button>
        </div>

        {/* Dashboard Main Link */}
        <Link
          href="/sales-agent"
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
            pathname === "/sales-agent"
              ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.45)]"
              : "text-slate-400 hover:bg-[#0c1838] hover:text-white"
          }`}
        >
          <LayoutDashboard size={15} />
          <span>Dashboard</span>
        </Link>

        {/* Section: MY WORK */}
        <div className="flex flex-col gap-0.5">
          <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            MY WORK
          </span>
          {myWork.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-blue-600/20 text-sky-400 border border-blue-500/30"
                    : "text-slate-400 hover:bg-[#0c1838] hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={14} className={isActive ? "text-sky-400" : "text-slate-400 group-hover:text-slate-200"} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`flex h-4 min-w-4 items-center justify-center rounded-full ${item.badgeColor} px-1 text-[9px] font-bold text-white`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Section: CRM */}
        <div className="flex flex-col gap-0.5">
          <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            CRM
          </span>
          {crm.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-blue-600/20 text-sky-400 border border-blue-500/30"
                    : "text-slate-400 hover:bg-[#0c1838] hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={14} className={isActive ? "text-sky-400" : "text-slate-400 group-hover:text-slate-200"} />
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Section: COMMUNICATION */}
        <div className="flex flex-col gap-0.5">
          <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            COMMUNICATION
          </span>
          {communication.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-blue-600/20 text-sky-400 border border-blue-500/30"
                    : "text-slate-400 hover:bg-[#0c1838] hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={14} className={isActive ? "text-sky-400" : "text-slate-400 group-hover:text-slate-200"} />
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Notifications & Profile */}
        <div className="flex flex-col gap-0.5 pt-1 border-t border-[#15203c]/60">
          <Link
            href="/sales-agent/notifications"
            className="group flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-[#0c1838] hover:text-slate-200"
          >
            <div className="flex items-center gap-2.5">
              <Bell size={14} />
              <span>Notifications</span>
            </div>
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
              {notificationCount}
            </span>
          </Link>

          <Link
            href="/sales-agent/profile"
            className="group flex items-center gap-2.5 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-[#0c1838] hover:text-slate-200"
          >
            <User size={14} />
            <span>Profile</span>
          </Link>
        </div>
      </div>

      {/* Docked Daily Goal Card at Bottom of Sidebar */}
      <div className="mt-4 rounded-2xl border border-blue-500/20 bg-[#0a1432]/90 p-3 text-center backdrop-blur-sm shadow-md">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-bold text-slate-200">Daily Goal</span>
          <button className="text-slate-500 hover:text-slate-300 text-xs">✕</button>
        </div>

        <div className="flex justify-center my-1.5">
          <DonutChart
            segments={[
              { value: 75, color: "#38bdf8" },
              { value: 25, color: "#132147" },
            ]}
            size={74}
            strokeWidth={8}
            centerValue="75%"
          />
        </div>

        <div className="text-[11px] font-semibold text-slate-300">Calls Goal</div>
        <div className="text-[10px] text-slate-400 mt-0.5">42 / 56 Calls</div>
        <Link
          href="/sales-agent/goals"
          className="mt-1.5 inline-block text-[10px] font-bold text-sky-400 hover:text-sky-300"
        >
          View Goals &gt;
        </Link>
      </div>
    </aside>
  );
}

"use client";

import { Search, Bell, Calendar, ChevronDown } from "lucide-react";

export interface TopbarProps {
  title?: string;
  greetingName?: string;
  subtitle?: string;
  notificationCount?: number;
  userName?: string;
  userRole?: string;
  userAvatarInitials?: string;
}

export default function Topbar({
  title = "Dashboard",
  greetingName = "Rahul Sharma",
  subtitle = "Here's your work for today.",
  notificationCount = 12,
  userName = "Rahul Sharma",
  userRole = "Sales Agent",
}: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex min-h-[64px] w-full items-center justify-between border-b border-[#15203c] bg-[#050b1d]/95 px-5 sm:px-6 py-2.5 backdrop-blur-md">
      {/* Greeting on Left */}
      <div className="flex flex-col">
        {greetingName ? (
          <div>
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>Good Morning, {greetingName}</span>
              <span>👋</span>
            </h1>
            {subtitle && (
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{subtitle}</p>
            )}
          </div>
        ) : (
          <h1 className="text-lg font-bold text-white tracking-tight">{title}</h1>
        )}
      </div>

      {/* Center Search Bar */}
      <div className="hidden md:flex w-72 lg:w-96 items-center mx-4">
        <div className="relative w-full">
          <Search
            size={14}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="text"
            placeholder="Search leads, customers..."
            className="w-full rounded-xl border border-[#1b2b52] bg-[#08122c] py-2 pl-9 pr-12 text-xs text-white placeholder:text-slate-500 transition-colors focus:border-sky-400 focus:outline-none"
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-[#1d305d] bg-[#0c1a3d] px-1.5 py-0.5 text-[9.5px] font-semibold text-slate-400">
            ⌘ K
          </span>
        </div>
      </div>

      {/* Right Action Icons & User Profile */}
      <div className="flex items-center gap-3">
        {/* Date Filter Pill */}
        <button
          type="button"
          className="hidden sm:flex items-center gap-2 rounded-xl border border-[#1b2b52] bg-[#08122c] px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-sky-500/50 transition-colors cursor-pointer"
        >
          <Calendar size={13} className="text-slate-400" />
          <span>Today, 13 Jul</span>
          <ChevronDown size={13} className="text-slate-400" />
        </button>

        {/* Notifications Icon with Red Badge */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-xl border border-[#1b2b52] bg-[#08122c] text-slate-300 hover:border-sky-400 hover:text-white transition-colors cursor-pointer"
        >
          <Bell size={15} />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white shadow-sm">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User Profile Avatar with Online Status */}
        <div className="flex items-center gap-2.5 pl-1.5 border-l border-[#1b2b52] cursor-pointer">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/20 text-xs font-bold text-sky-400">
            RS
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-[#050b1d]" />
          </div>
          <div className="hidden lg:flex flex-col text-left">
            <div className="flex items-center gap-1 text-xs font-bold text-white leading-tight">
              <span>{userName}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </div>
            <span className="text-[10px] text-slate-400 leading-tight">{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/features/dashboard-shared/components/Sidebar";
import Topbar from "@/features/dashboard-shared/components/Topbar";
import { Role } from "@/features/dashboard-shared/config/sidebarConfig";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let role: Role = "sales-agent";
  if (pathname.includes("/super-admin")) role = "super-admin";
  else if (pathname.includes("/team-lead")) role = "team-lead";
  else if (pathname.includes("/hr-admin")) role = "hr-admin";

  const getTitle = () => {
    if (pathname.includes("/super-admin")) return "Super Admin Workspace";
    if (pathname.includes("/team-lead")) return "Team Lead Control Center";
    if (pathname.includes("/hr-admin")) return "HR & Workforce Operations";
    return "Sales Agent Dashboard";
  };

  const isSalesAgentDashboard = pathname === "/sales-agent";

  return (
    <div className="min-h-screen bg-[#030718] text-white">
      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col lg:pl-60">
        {!isSalesAgentDashboard && <Topbar title={getTitle()} />}
        <main className={isSalesAgentDashboard ? "min-h-screen" : "min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8"}>
          {children}
        </main>
      </div>
    </div>
  );
}

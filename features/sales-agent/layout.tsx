import Sidebar from "@/features/dashboard-shared/components/Sidebar";
import { salesAgentSidebar } from "@/features/dashboard-shared/config/sidebarConfig";

export default function SalesAgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      <Sidebar sections={salesAgentSidebar} notificationCount={12} role="sales-agent" />
      <div className="flex-1 md:pl-64 overflow-x-hidden min-h-screen">{children}</div>
    </div>
  );
}
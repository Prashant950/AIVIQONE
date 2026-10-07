import Topbar from "@/features/dashboard-shared/components/Topbar";
import StatsGrid from "@/features/sales-agent/components/StatsGrid";
import CallingListCard from "@/features/sales-agent/components/CallingListCard";
import WorkOverviewCard from "@/features/sales-agent/components/WorkOverviewCard";
import AttentionRequiredCard from "@/features/sales-agent/components/AttentionRequiredCard";
import LeadsPipelineCard from "@/features/sales-agent/components/LeadsPipelineCard";
import MyTasksCard from "@/features/sales-agent/components/MyTasksCard";
import RecentActivityCard from "@/features/sales-agent/components/RecentActivityCard";
import QuickActionsBar from "@/features/dashboard-shared/components/QuickActionsBar";

export const metadata = {
  title: "Sales Agent Dashboard | AIVIQONE",
  description: "Sales Agent Control Center and Lead Management Dashboard",
};

export default function SalesAgentDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030718] text-white">
      {/* Top Header */}
      <Topbar
        greetingName="Rahul Sharma"
        subtitle="Here's your work for today."
        notificationCount={12}
        userName="Rahul Sharma"
        userRole="Sales Agent"
      />

      {/* Main Dashboard Container */}
      <div className="flex flex-col gap-4 p-4 sm:p-5 lg:p-6">
        {/* Row 1: Top 6 KPI Stat Cards */}
        <StatsGrid />

        {/* Row 2: Middle Main Layout (2-Column Split: 68% vs 32%) */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_350px]">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* My Calling List */}
            <CallingListCard />

            {/* Sub-grid: Leads Pipeline + My Tasks */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <LeadsPipelineCard />
              <MyTasksCard />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <WorkOverviewCard />
            <AttentionRequiredCard />
            <RecentActivityCard />
          </div>
        </div>

        {/* Row 3: Bottom Quick Actions Bar + Overdue Alert */}
        <QuickActionsBar />
      </div>
    </div>
  );
}
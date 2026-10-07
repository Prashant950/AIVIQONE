import { ElementType } from "react";
import {
  LayoutDashboard,
  UserCheck,
  Calendar,
  PhoneCall,
  MessageSquare,
  Users,
  CheckSquare,
  GitPullRequest,
  TrendingUp,
  BarChart3,
  Shield,
  CreditCard,
  Building2,
  Clock,
  CalendarDays,
  UserPlus,
  Network,
} from "lucide-react";

export type Role = "sales-agent" | "team-lead" | "super-admin" | "hr-admin";

export interface SidebarItem {
  label: string;
  href: string;
  icon: ElementType;
}

export const sidebarConfig: Record<Role, SidebarItem[]> = {
  "sales-agent": [
    { label: "Dashboard", href: "/sales-agent", icon: LayoutDashboard },
    { label: "My Leads", href: "/sales-agent/my-leads", icon: UserCheck },
    { label: "Follow-ups", href: "/sales-agent/follow-ups", icon: Calendar },
    { label: "Calls & VoIP", href: "/sales-agent/calls", icon: PhoneCall },
    { label: "WhatsApp Chat", href: "/sales-agent/whatsapp", icon: MessageSquare },
    { label: "Customers", href: "/sales-agent/customers", icon: Users },
    { label: "Tasks", href: "/sales-agent/tasks", icon: CheckSquare },
  ],
  "team-lead": [
    { label: "Overview", href: "/team-lead", icon: LayoutDashboard },
    { label: "Deal Pipeline", href: "/team-lead/pipeline", icon: GitPullRequest },
    { label: "Team Follow-ups", href: "/team-lead/follow-ups", icon: Calendar },
    { label: "Team Performance", href: "/team-lead/team-performance", icon: TrendingUp },
    { label: "Tasks", href: "/tasks", icon: CheckSquare },
  ],
  "super-admin": [
    { label: "Control Center", href: "/super-admin", icon: LayoutDashboard },
    { label: "Global Leads", href: "/super-admin/leads", icon: UserCheck },
    { label: "Master Customers", href: "/super-admin/customers", icon: Users },
    { label: "Analytics & Reports", href: "/super-admin/reports", icon: BarChart3 },
    { label: "Team & Access", href: "/super-admin/team", icon: Shield },
    { label: "Billing & Plans", href: "/super-admin/billing", icon: CreditCard },
  ],
  "hr-admin": [
    { label: "HR Dashboard", href: "/hr-admin", icon: LayoutDashboard },
    { label: "Employees", href: "/hr-admin/employees", icon: Users },
    { label: "Attendance", href: "/hr-admin/attendance", icon: Clock },
    { label: "Leave Requests", href: "/hr-admin/leave-management", icon: CalendarDays },
    { label: "Recruitment", href: "/hr-admin/recruitment", icon: UserPlus },
    { label: "Departments", href: "/hr-admin/departments", icon: Network },
  ],
};

export const salesAgentSidebar = sidebarConfig["sales-agent"];
export const teamLeadSidebar = sidebarConfig["team-lead"];
export const superAdminSidebar = sidebarConfig["super-admin"];
export const hrAdminSidebar = sidebarConfig["hr-admin"];
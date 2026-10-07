import { Phone, PhoneCall, CalendarClock, CheckSquare, Users, AlertTriangle } from "lucide-react";

export const statCards = [
  { icon: Phone, iconColor: "#38BDF8", label: "Calls Today", value: 42, change: "12.5%", changeDirection: "up" as const },
  { icon: PhoneCall, iconColor: "#38BDF8", label: "Calls Connected", value: 31, change: "8.3%", changeDirection: "up" as const },
  { icon: CalendarClock, iconColor: "#FBBF24", label: "Follow-ups Today", value: 14, change: "16.7%", changeDirection: "up" as const },
  { icon: CheckSquare, iconColor: "#FBBF24", label: "Tasks Today", value: 8, change: "11.1%", changeDirection: "down" as const },
  { icon: Users, iconColor: "#34D399", label: "Active Leads", value: 56, change: "10.2%", changeDirection: "up" as const },
  { icon: AlertTriangle, iconColor: "#F87171", label: "Overdue", value: 4, change: "33.3%", changeDirection: "down" as const },
];

export type CallingListFilter = "call-now" | "follow-up-due" | "no-answer" | "call-later" | "high-priority";

export const callingListTabs: { key: CallingListFilter; label: string; count?: number }[] = [
  { key: "call-now", label: "Call Now" },
  { key: "follow-up-due", label: "Follow-up Due", count: 7 },
  { key: "no-answer", label: "No Answer", count: 5 },
  { key: "call-later", label: "Call Later", count: 6 },
  { key: "high-priority", label: "High Priority", count: 3 },
];

export const callingListRows = [
  { name: "Rahul Sharma", type: "New Lead", phone: "+91 98765 43210", source: "Website", status: "Not Called", lastContact: "Never", nextFollowUp: "Today, 11:30 AM", priority: "High", leadStatus: "New" },
  { name: "Neha Gupta", type: "New Lead", phone: "+91 87654 32109", source: "Facebook", status: "Follow-up Due", lastContact: "11 Jul, 4:20 PM", nextFollowUp: "Today, 12:00 PM", priority: "High", leadStatus: "Interested" },
  { name: "Amit Verma", type: "New Lead", phone: "+91 76543 21098", source: "Referral", status: "No Answer", lastContact: "10 Jul, 3:15 PM", nextFollowUp: "Today, 2:00 PM", priority: "Medium", leadStatus: "Contacted" },
  { name: "Priya Singh", type: "New Lead", phone: "+91 65432 10987", source: "Website", status: "Not Called", lastContact: "Never", nextFollowUp: "Today, 3:00 PM", priority: "Medium", leadStatus: "New" },
  { name: "Vikram Joshi", type: "Existing Lead", phone: "+91 54321 09876", source: "Google Ads", status: "Follow-up Due", lastContact: "11 Jul, 11:10 AM", nextFollowUp: "Tomorrow, 10:00 AM", priority: "Low", leadStatus: "Follow-up" },
];

export const workOverview = {
  total: 61,
  segments: [
    { label: "Follow-ups", value: 14, percent: "29%", color: "#38BDF8" },
    { label: "Tasks", value: 8, percent: "17%", color: "#2DD4BF" },
    { label: "Completed", value: 31, percent: "65%", color: "#34D399" },
    { label: "Overdue", value: 4, percent: "8%", color: "#F87171" },
    { label: "Unassigned", value: 4, percent: "8%", color: "#A78BFA" },
  ],
};

export const attentionItems = [
  { label: "Overdue Follow-ups", count: 12 },
  { label: "Overdue Tasks", count: 9 },
  { label: "Leads without Follow-up", count: 7 },
  { label: "High Priority Leads", count: 5 },
  { label: "Leads stuck in Follow-up", count: 4 },
  { label: "Tasks due today", count: 3 },
];

export const leadsPipeline = [
  { label: "Contacted", count: 18, color: "#38BDF8" },
  { label: "Interested", count: 12, color: "#2DD4BF" },
  { label: "Follow-up", count: 10, color: "#A78BFA" },
  { label: "Documentation & Details", count: 6, color: "#FBBF24" },
  { label: "Approval / Review", count: 3, color: "#FB923C" },
  { label: "Confirmed", count: 2, color: "#34D399" },
];

export const pipelineSideStats = [
  { label: "Not Interested", count: 5, tone: "muted" as const },
  { label: "Rejected / Lost", count: 3, tone: "danger" as const },
];

export type TaskStatus = "pending" | "in-progress" | "completed";

export const myTasks: { title: string; type: string; due: string; priority: "High" | "Medium" | "Low"; status: TaskStatus }[] = [
  { title: "Follow-up with Neha Gupta", type: "Lead Follow-up", due: "Today, 11:30 AM", priority: "High", status: "completed" },
  { title: "Call Amit Verma", type: "Make Initial Call", due: "Today, 12:00 PM", priority: "High", status: "in-progress" },
  { title: "Send WhatsApp message to Rahul Sharma", type: "Communication", due: "Today, 2:00 PM", priority: "Medium", status: "completed" },
  { title: "Update lead details in CRM", type: "Data Update", due: "Tomorrow, 10:30 AM", priority: "Medium", status: "completed" },
];

export const recentActivity = [
  { text: "You called Neha Gupta", meta: "Call Connected (02:45)", time: "10 min ago", type: "call" as const },
  { text: "Follow-up completed with Amit Verma", meta: "Next follow-up on 15 Jul", time: "25 min ago", type: "task" as const },
  { text: "Task completed: Update lead details", meta: "Lead: Priya Singh", time: "45 min ago", type: "task" as const },
  { text: "New lead Priya Singh added", meta: "Source: Website", time: "1 hr ago", type: "lead" as const },
  { text: "You scheduled follow-up with Rahul Sharma", meta: "On 15 Jul, 11:00 AM", time: "2 hr ago", type: "followup" as const },
];
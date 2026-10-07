import {
  Boxes, MessagesSquare, Zap, BarChart3, Brain,
  Users2, FileText, Cog, Sparkles, Eye,
  Building2, Landmark, UserCog, TrendingUp, Handshake,
  Heart, Target, Gauge, Layers, ShieldCheck, Compass,
  Lock, Shield, Server, FileCheck2,
} from "lucide-react";

// Hero hub — 5 nodes around center
export const heroHubItems = [
  { label: "CRM", sub: "Customer Relationship", icon: Boxes, angle: -90 },
  { label: "Communication", sub: "Connect, Engage, Respond", icon: MessagesSquare, angle: -150 },
  { label: "Automation", sub: "Workflows, Tasks, Triggers", icon: Zap, angle: -30 },
  { label: "Analytics", sub: "Reports, Insights, Performance", icon: BarChart3, angle: 155 },
  { label: "Decision Intelligence", sub: "Data, Signals, Recommendations", icon: Brain, angle: 25 },
];

export const purposePoints = [
  "Reduce operational complexity",
  "Eliminate scattered customer information",
  "Automate repetitive work",
  "Help teams make better decisions",
  "Give businesses one connected operating system",
];

export const missionFlow = [
  { label: "PEOPLE", icon: Users2 },
  { label: "DATA", icon: FileText },
  { label: "AUTOMATION", icon: Cog },
  { label: "INTELLIGENCE", icon: Sparkles },
];

export const visionHubItems = [
  { label: "Customers", icon: Users2, angle: -90 },
  { label: "Sales Teams", icon: UserCog, angle: -18 },
  { label: "Communication", icon: MessagesSquare, angle: 54 },
  { label: "Automation", icon: Cog, angle: 126 },
  { label: "Analytics", icon: BarChart3, angle: 198 },
];

export const beforeStackItems = ["Excel", "WhatsApp", "Phone", "Notes", "Separate CRM", "Manual Follow-ups"];
export const afterStackItems = ["CRM", "WhatsApp", "VoIP", "Automation", "Analytics", "Decision Intelligence"];

export const philosophyCards = [
  { icon: Eye, title: "Simplicity", description: "Powerful technology should remain easy to understand." },
  { icon: Layers, title: "Integration", description: "Business systems should work together instead of operating in isolation." },
  { icon: Target, title: "Intelligence", description: "Data should help teams make better decisions." },
  { icon: Compass, title: "Execution", description: "Technology should create measurable business outcomes." },
];

export const buildForCards = [
  { icon: Landmark, title: "Loan Agencies", description: "Manage leads, customers and loan efficiently." },
  { icon: Building2, title: "DSAs", description: "Empower DSAs with better tools, visibility." },
  { icon: TrendingUp, title: "Financial Services", description: "Streamline operations and improve customer experience." },
  { icon: UserCog, title: "Sales Teams", description: "Help sales teams stay organised and close more deals." },
  { icon: Handshake, title: "Growing Businesses", description: "Built for businesses that want to scale with confidence." },
];

export const principlesCards = [
  { icon: Heart, title: "Customer First", description: "Build around real customer problems." },
  { icon: Target, title: "Ownership", description: "Take responsibility for outcomes." },
  { icon: Gauge, title: "Speed", description: "Move quickly without sacrificing quality." },
  { icon: Layers, title: "Simplicity", description: "Remove unnecessary complexity." },
  { icon: Handshake, title: "Transparency", description: "Communicate clearly and honestly." },
  { icon: Compass, title: "Long-term Thinking", description: "Build systems that can grow for years." },
];

export const ecosystemHubItems = [
  { label: "CRM", icon: Boxes, angle: -90 },
  { label: "Leads", icon: Users2, angle: -30 },
  { label: "WhatsApp", icon: MessagesSquare, angle: 30 },
  { label: "VoIP", icon: Landmark, angle: 90 },
  { label: "Analytics", icon: BarChart3, angle: 150 },
  { label: "Smart Salary", icon: FileCheck2, angle: 210 },
  { label: "Smart Lending", icon: Landmark, angle: 250 },
];

export const roadmapSteps = [
  { label: "CRM", icon: Boxes },
  { label: "Communication", icon: MessagesSquare },
  { label: "Automation", icon: Cog },
  { label: "Intelligence", icon: Sparkles },
  { label: "Business Infrastructure", icon: Server },
];

export const responsibilityCards = [
  { icon: ShieldCheck, title: "Secure Technology", description: "We use modern security practices to keep data protected." },
  { icon: Lock, title: "Privacy Focused", description: "Your data is yours. We protect it with strict privacy principles." },
  { icon: Server, title: "Reliable Infrastructure", description: "Built on scalable and secure infrastructure you can trust." },
  { icon: FileCheck2, title: "Transparent Practices", description: "We believe in clarity, honesty and long-term relationships." },
];
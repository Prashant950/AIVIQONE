import {
  UserPlus,
  Users,
  CalendarCheck,
  Zap,
  ShieldCheck,
  MapPin,
  Boxes,
  MessagesSquare,
  FileText,
  BarChart3,
  Target,
  Layers,
  Wallet,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

export const featuresHeroBadges = [
  { icon: Layers, label: "All-in-One Platform", sub: "CRM, Communication & Automation" },
  { icon: ShieldCheck, label: "Secure & Reliable", sub: "Enterprise grade security with 99.9% uptime" },
  { icon: MapPin, label: "Built for India", sub: "Designed for Indian businesses & DSAs" },
];

export const workflowSteps = [
  { label: "Lead", icon: UserPlus },
  { label: "Customer", icon: Users },
  { label: "Follow-up", icon: CalendarCheck },
  { label: "WhatsApp", icon: FaWhatsapp, accent: true },
  { label: "Call", icon: MdPhoneInTalk },
  { label: "Documents", icon: FileText },
  { label: "Analysis", icon: BarChart3 },
  { label: "Conversion", icon: Target },
];

export const featureBlocks = [
  {
    number: "01",
    eyebrow: "CRM",
    title: "CRM That Keeps Your Entire Customer Journey Connected",
    description:
      "Stop managing customer information across spreadsheets, notebooks and disconnected tools. AIVIQONE gives your team one centralized workspace.",
    bullets: ["Lead Management", "Notes & Activities", "Customer Management", "Documents", "Pipeline Management", "Search & Filters", "Customer Timeline", "Import & Export"],
    icon: Boxes,
    linkLabel: "Explore CRM",
  },
  {
    number: "02",
    eyebrow: "Lead Management",
    title: "Turn Leads Into Organized Opportunities",
    description:
      "Capture, assign, track and move every lead through your sales pipeline without losing follow-ups.",
    bullets: ["Lead Capture", "Follow-up Tracking", "Lead Assignment", "Lead Conversion", "Kanban Pipeline", "Team Distribution", "Lead Scoring", "Lead Activities"],
    icon: UserPlus,
  },
  {
    number: "03",
    eyebrow: "WhatsApp",
    title: "Turn WhatsApp Conversations Into Sales Opportunities",
    description:
      "Manage every WhatsApp conversation from one inbox, without switching between your phone and CRM.",
    bullets: ["WhatsApp Inbox", "Auto Reply", "Team Inbox", "Scheduled Messages", "Message Templates", "WhatsApp Automation", "Broadcast", "Conversation History"],
    icon: FaWhatsapp,
    linkLabel: "Explore WhatsApp",
  },
  {
    number: "04",
    eyebrow: "VoIP Calling",
    title: "Every Call Becomes Part of Your CRM",
    description:
      "Make and receive calls directly from AIVIQONE — every call is automatically logged against the right customer.",
    bullets: ["Virtual Number", "Dial Pad", "Click-to-Call", "Incoming Calls", "Outgoing Calls", "Call History", "Call Recording", "Call Notes", "IVR", "Call Analytics"],
    icon: MdPhoneInTalk,
  },
  {
    number: "05",
    eyebrow: "Automation",
    title: "Automate the Work Your Team Repeats Every Day",
    description:
      "Set up rules once and let AIVIQONE handle repetitive tasks — from lead assignment to follow-up reminders.",
    bullets: ["Workflow Builder", "Trigger-Based Automation", "Conditional Logic", "Lead Stage Automation", "Policy-Based Evaluation", "Required Duration", "Notifications", "Follow-up Automation"],
    icon: Zap,
  },
  {
    number: "06",
    eyebrow: "Smart Salary Engine",
    title: "Understand the Customer Before You Recommend",
    description:
      "Analyse income, employment and financial profile automatically — so your team recommends the right product with confidence, every time.",
    bullets: ["Sales Dashboard", "Employment Details", "Financial Profile", "Lead Analytics", "Agent Performance Tracking", "Eligibility Analyzers", "EMI Analysis Info", "Automated Calculations"],
    icon: Wallet,
  },
  {
    number: "07",
    eyebrow: "Customer 360",
    title: "One Customer. One Timeline.",
    description:
      "Every interaction — calls, WhatsApp messages, tasks, notes and documents — lives on a single connected timeline.",
    bullets: ["Customer Overview", "Deal History", "Lead History", "Tasks", "WhatsApp Conversations", "Calls & Recordings", "Notes", "Customer Timeline"],
    icon: MessagesSquare,
  },
];
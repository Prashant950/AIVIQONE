import {
  FileSpreadsheet,
  Phone,
  FileText,
  Clock,
  Database,
  User,
  Users,
  Kanban,
  CalendarCheck,
  Share2,
  Target,
  UserRound,
  Boxes,
  CalendarClock,
  MessagesSquare,
  ShieldCheck,
  Zap,
  Lock,
  TrendingUp,
  Code2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const beforeItems = [
  { label: "Spreadsheets", icon: FileSpreadsheet, color: "text-emerald-400" },
  { label: "WhatsApp", icon: FaWhatsapp, color: "text-[#25D366]" },
  { label: "Phone Calls", icon: Phone, color: "text-slate-300" },
  { label: "Notes", icon: FileText, color: "text-amber-400" },
  { label: "Manual Follow-ups", icon: Clock, color: "text-sky-400" },
  { label: "Scattered Customer Data", icon: Database, color: "text-purple-400" },
];

export const afterItems = [
  { label: "One CRM", icon: User, color: "text-sky-400" },
  { label: "One Customer Record", icon: Users, color: "text-sky-400" },
  { label: "One Pipeline", icon: Kanban, color: "text-sky-400" },
  { label: "One Follow-up System", icon: CalendarCheck, color: "text-sky-400" },
  { label: "Connected Communication", icon: Share2, color: "text-sky-400" },
  { label: "Sales Visibility", icon: Target, color: "text-sky-400" },
];

export const orbitItems = [
  { label: "Leads", icon: UserRound, angle: -90 },
  { label: "Communication", icon: MessagesSquare, angle: -30 },
  { label: "Follow-ups", icon: CalendarClock, angle: 30 },
  { label: "Analytics", icon: TrendingUp, angle: 90 },
  { label: "Automation", icon: Zap, angle: 150 },
  { label: "Customers", icon: Boxes, angle: 210 },
];

export const coreValues = [
  { icon: ShieldCheck, title: "Customer First", description: "We build for our customers and their success." },
  { icon: Zap, title: "Simplicity", description: "We keep things simple, clear and effective." },
  { icon: Target, title: "Ownership", description: "We take ownership and get things done." },
  { icon: Lock, title: "Integrity", description: "We operate with honesty, transparency and trust." },
  { icon: TrendingUp, title: "Continuous Improvement", description: "We learn, build and improve every single day." },
  { icon: Code2, title: "Made in India", description: "Proudly built in India for Indian businesses." },
];
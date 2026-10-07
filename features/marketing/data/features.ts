import { ClipboardCheck, Zap, PieChart } from "lucide-react";
import { FaWhatsapp, FaSitemap } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

export const features = [
  {
    icon: FaSitemap,
    title: "Smart Lead Management",
    description: "Capture, assign, track and nurture leads efficiently.",
    color: "#38BDF8",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Integration",
    description: "Manage conversations and campaigns inside your CRM.",
    color: "#25D366",
  },
  {
    icon: MdPhoneInTalk,
    title: "VoIP Calling",
    description: "Make & receive calls directly from your CRM.",
    color: "#0588FD",
  },
  {
    icon: ClipboardCheck,
    title: "Tasks & Reminders",
    description: "Stay on top of tasks, meetings and follow-ups.",
    color: "#F8FAFC",
  },
  {
    icon: Zap,
    title: "Sales Automation",
    description: "Automate repetitive work and save valuable time.",
    color: "#38BDF8",
  },
  {
    icon: PieChart,
    title: "Reports & Analytics",
    description: "Track performance and grow your business.",
    color: "#60A5FA",
  },
];
import {
  User,
  Users,
  CalendarCheck,
  Phone,
  ClipboardList,
  Target,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const platformPillars = [
  { label: "Leads", icon: User },
  { label: "Customers", icon: Users },
  { label: "Follow-ups", icon: CalendarCheck },
  { label: "WhatsApp", icon: FaWhatsapp, accent: true },
  { label: "Calls", icon: Phone },
  { label: "Tasks", icon: ClipboardList },
  { label: "Conversions", icon: Target },
];
import { Component, Clock, MessageSquare, EyeOff } from "lucide-react";

export const problems = [
  {
    icon: Component,
    title: "Scattered Leads",
    description:
      "Leads are spread across spreadsheets, WhatsApp, phone contacts and different systems.",
  },
  {
    icon: Clock,
    title: "Missed Follow-ups",
    description:
      "Salespeople forget when they need to contact customers again.",
  },
  {
    icon: MessageSquare,
    title: "Lost Conversations",
    description:
      "Important WhatsApp and call conversations remain disconnected from customer records.",
    hasDots: true,
  },
  {
    icon: EyeOff,
    title: "No Clear Visibility",
    description:
      "Managers don't know which leads are active, which agents are following up and where opportunities are getting lost.",
  },
];
import {
  CalendarDays, Users, Handshake, MessageSquareMore,
  Mail, Globe, Building2,
  ShieldCheck, Target, HeartHandshake, Award,
} from "lucide-react";

export const requestTypeCards = [
  {
    icon: CalendarDays,
    title: "Book a Demo",
    description: "See how AIVIQONE can bring your CRM, communication and sales workflows together.",
    linkLabel: "Request a Demo",
    href: "/book-a-demo",
  },
  {
    icon: Users,
    title: "Sales Inquiry",
    description: "Talk to our team about plans, implementation and business requirements.",
    linkLabel: "Contact Sales",
    href: "#form",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Interested in integrations, partnerships or working with AIVIQONE?",
    linkLabel: "Discuss Partnership",
    href: "#form",
  },
  {
    icon: MessageSquareMore,
    title: "General Inquiry",
    description: "Have a question about AIVIQONE? Send us a message.",
    linkLabel: "Get in Touch",
    href: "#form",
  },
];

export const directContactCards = [
  { icon: Mail, label: "Email", value: "hello@aiviqone.com" },
  { icon: Globe, label: "Website", value: "aiviqone.com" },
  { icon: Building2, label: "Company", value: "AIVIQONE Technologies Pvt. Ltd." },
];

export const faqItems = [
  { question: "How can I request an AIVIQONE demo?", answer: "Click on \u201CBook a Demo\u201D anywhere on this page or fill out the inquiry form and our team will schedule a session that fits your availability." },
  { question: "Who is AIVIQONE built for?", answer: "AIVIQONE is built for Loan DSAs, Credit Card Agents, Insurance Advisors, NBFCs and growing sales teams that need a unified CRM." },
  { question: "Can AIVIQONE integrate with our existing workflow?", answer: "Yes. AIVIQONE is designed to connect with your existing tools and processes with minimal disruption to your current workflow." },
  { question: "Can I talk to someone before subscribing?", answer: "Absolutely. Use the \u201CTalk to Our Team\u201D button or submit an inquiry and a member of our team will reach out to you." },
  { question: "How quickly will someone respond to my inquiry?", answer: "Our team typically responds within one business day. For urgent enquiries, booking a demo call is usually the fastest route." },
];

export const trustPoints = [
  { icon: ShieldCheck, title: "Secure & Private", description: "Your information is safe with us." },
  { icon: Target, title: "Relevant Solutions", description: "We understand your goals before we respond." },
  { icon: HeartHandshake, title: "Human Support", description: "Talk to real people who care." },
  { icon: Award, title: "Trusted Company", description: "Transparency at every step." },
];
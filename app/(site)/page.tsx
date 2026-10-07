import Hero from "@/features/marketing/components/home/Hero";
import PlatformOverview from "@/features/marketing/components/home/PlatformOverview";
import AudienceSection from "@/features/marketing/components/home/AudienceSection";
import ProblemSection from "@/features/marketing/components/home/ProblemSection";
import ValueSection from "@/features/marketing/components/home/ValueSection";
import FeaturesSection from "@/features/marketing/components/home/FeaturesSection";
import CTASection from "@/features/marketing/components/home/CTASection";

export const metadata = {
  title: "AIVIQONE | Modern Sales CRM for Growing Businesses",
  description:
    "AIVIQONE is a modern Sales CRM for managing leads, customers, WhatsApp, calls, follow-ups and sales activities in one intelligent platform.",
  keywords: [
    "AIVIQONE CRM",
    "Sales CRM software",
    "CRM software for sales teams",
    "Lead management software",
    "Sales management software",
    "WhatsApp CRM",
    "Sales automation software",
    "Customer relationship management software",
    "CRM for growing businesses",
  ],
  alternates: {
    canonical: "https://aiviqone.com/",
  },
  openGraph: {
    title: "AIVIQONE | Modern Sales CRM for Growing Businesses",
    description:
      "AIVIQONE is a modern Sales CRM for managing leads, customers, WhatsApp, calls, follow-ups and sales activities in one intelligent platform.",
    url: "https://aiviqone.com/",
    siteName: "AIVIQONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVIQONE | Modern Sales CRM for Growing Businesses",
    description:
      "AIVIQONE is a modern Sales CRM for managing leads, customers, WhatsApp, calls, follow-ups and sales activities in one intelligent platform.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <AudienceSection />
      <ProblemSection />
      <ValueSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
import FeaturesHero from "@/features/marketing/components/features/FeaturesHero";
import WorkflowFlow from "@/features/marketing/components/features/WorkflowFlow";
import FeatureBlocksList from "@/features/marketing/components/features/FeatureBlocksList";
import FeaturesCTA from "@/features/marketing/components/features/FeaturesCTA";
import TrackViewContent from "@/components/analytics/TrackViewContent";

export const metadata = {
  title: "AIVIQONE Features | Sales CRM, WhatsApp & Smart Calling",
  description:
    "Explore AIVIQONE features including sales CRM, lead management, WhatsApp CRM, VoIP calling, automation, smart salary analysis and Customer 360.",
  keywords: [
    "Sales CRM Features",
    "CRM features",
    "Sales CRM software",
    "Lead management features",
    "WhatsApp CRM",
    "WhatsApp automation",
    "Sales calling software",
    "VoIP CRM",
    "Sales automation",
    "Customer 360",
    "Lead management software",
    "CRM for sales teams",
  ],
  alternates: {
    canonical: "https://aiviqone.com/features",
  },
  openGraph: {
    title: "AIVIQONE Features | Sales CRM, WhatsApp & Smart Calling",
    description:
      "Explore AIVIQONE features including sales CRM, lead management, WhatsApp CRM, VoIP calling, automation, smart salary analysis and Customer 360.",
    url: "https://aiviqone.com/features",
    siteName: "AIVIQONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVIQONE Features | Sales CRM, WhatsApp & Smart Calling",
    description:
      "Explore AIVIQONE features including sales CRM, lead management, WhatsApp CRM, VoIP calling, automation, smart salary analysis and Customer 360.",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <TrackViewContent contentName="CRM Features" contentCategory="Features" />
      <FeaturesHero />
      <WorkflowFlow />
      <FeatureBlocksList />
      <FeaturesCTA />
    </>
  );
}
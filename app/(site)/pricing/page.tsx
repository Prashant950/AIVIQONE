import PricingContent from "@/features/marketing/components/pricing/PricingContent";
import TrackViewContent from "@/components/analytics/TrackViewContent";

export const metadata = {
  title: "AIVIQONE Pricing | Sales CRM Plans & Pricing",
  description:
    "Explore AIVIQONE Sales CRM pricing and plans for sales teams, Loan DSAs, agencies and growing businesses. Choose the plan that fits your needs.",
  keywords: [
    "Sales CRM Pricing",
    "CRM pricing",
    "Sales CRM plans",
    "CRM software pricing",
    "Sales CRM software",
    "CRM plans for sales teams",
    "CRM for Loan DSAs",
    "WhatsApp CRM pricing",
    "CRM pricing India",
    "Sales automation software pricing",
    "AIVIQONE pricing",
  ],
  alternates: {
    canonical: "https://aiviqone.com/pricing",
  },
  openGraph: {
    title: "AIVIQONE Pricing | Sales CRM Plans & Pricing",
    description:
      "Explore AIVIQONE Sales CRM pricing and plans for sales teams, Loan DSAs, agencies and growing businesses. Choose the plan that fits your needs.",
    url: "https://aiviqone.com/pricing",
    siteName: "AIVIQONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVIQONE Pricing | Sales CRM Plans & Pricing",
    description:
      "Explore AIVIQONE Sales CRM pricing and plans for sales teams, Loan DSAs, agencies and growing businesses. Choose the plan that fits your needs.",
  },
};

export default function PricingPage() {
  return (
    <>
      <TrackViewContent contentName="Pricing Plans" contentCategory="Pricing" />
      <PricingContent />
    </>
  );
}

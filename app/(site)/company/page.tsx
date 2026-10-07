import CompanyHero from "@/features/marketing/components/company/CompanyHero";
import TechSimplifySection from "@/features/marketing/components/company/TechSimplifySection";
import PurposeMissionVision from "@/features/marketing/components/company/PurposeMissionVision";
import WhyStarted from "@/features/marketing/components/company/WhyStarted";
import WhoWeBuildFor from "@/features/marketing/components/company/WhoWeBuildFor";
import PrinciplesSection from "@/features/marketing/components/company/PrinciplesSection";
import RoadAhead from "@/features/marketing/components/company/RoadAhead";
import CompanyFinalCTA from "@/features/marketing/components/company/CompanyFinalCTA";

export const metadata = {
  title: "AIVIQONE Company | Business Technology & Intelligent CRM",
  description:
    "Discover AIVIQONE Technologies and our vision to build intelligent business software connecting CRM, communication, automation, analytics and decision intelligence.",
  keywords: [
    "AIVIQONE Technologies",
    "AIVIQONE company",
    "Business software company",
    "Business technology platform",
    "Intelligent CRM platform",
    "Business automation software",
    "CRM technology company",
    "Sales technology",
    "Business intelligence platform",
    "CRM software company India",
  ],
  alternates: {
    canonical: "https://aiviqone.com/company",
  },
  openGraph: {
    title: "AIVIQONE Company | Business Technology & Intelligent CRM",
    description:
      "Discover AIVIQONE Technologies and our vision to build intelligent business software connecting CRM, communication, automation, analytics and decision intelligence.",
    url: "https://aiviqone.com/company",
    siteName: "AIVIQONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVIQONE Company | Business Technology & Intelligent CRM",
    description:
      "Discover AIVIQONE Technologies and our vision to build intelligent business software connecting CRM, communication, automation, analytics and decision intelligence.",
  },
};

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <TechSimplifySection />
      <PurposeMissionVision />
      <WhyStarted />
      <WhoWeBuildFor />
      <PrinciplesSection />
      <RoadAhead />
      <CompanyFinalCTA />
    </>
  );
}
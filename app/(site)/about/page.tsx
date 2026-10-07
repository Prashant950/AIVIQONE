import AboutHero from "@/features/marketing/components/about/AboutHero";
import WhoWeAre from "@/features/marketing/components/about/WhoWeAre";
import WhyExists from "@/features/marketing/components/about/WhyExists";
import MissionVision from "@/features/marketing/components/about/MissionVision";
import OurValues from "@/features/marketing/components/about/OurValues";
import AboutCTA from "@/features/marketing/components/about/AboutCTA";

export const metadata = {
  title: "About AIVIQONE | Building the Future of Sales Technology",
  description:
    "Learn about AIVIQONE Technologies, an Indian sales technology company building intelligent CRM, automation and communication tools for modern sales teams.",
  keywords: [
    "AIVIQONE Technologies",
    "About AIVIQONE",
    "Sales technology company",
    "Sales CRM company",
    "CRM company in India",
    "Indian SaaS company",
    "Sales automation company",
    "Sales software company",
    "CRM technology",
    "Sales management software",
  ],
  alternates: {
    canonical: "https://aiviqone.com/about",
  },
  openGraph: {
    title: "About AIVIQONE | Building the Future of Sales Technology",
    description:
      "Learn about AIVIQONE Technologies, an Indian sales technology company building intelligent CRM, automation and communication tools for modern sales teams.",
    url: "https://aiviqone.com/about",
    siteName: "AIVIQONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AIVIQONE | Building the Future of Sales Technology",
    description:
      "Learn about AIVIQONE Technologies, an Indian sales technology company building intelligent CRM, automation and communication tools for modern sales teams.",
  },
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <WhoWeAre />
            <WhyExists />
            <MissionVision />
            <OurValues />
            <AboutCTA />
        </>
    );
}
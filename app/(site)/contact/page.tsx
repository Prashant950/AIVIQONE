import ContactHero from "@/features/marketing/components/contact/ContactHero";
import RequestTypeCards from "@/features/marketing/components/contact/RequestTypeCards";
import ContactFormSection from "@/features/marketing/components/contact/ContactFormSection";
import ReachDirectly from "@/features/marketing/components/contact/ReachDirectly";
import BusinessSolutionSection from "@/features/marketing/components/contact/BusinessSolutionSection";
import BusinessPresence from "@/features/marketing/components/contact/BusinessPresence";
import TrustBar from "@/features/marketing/components/contact/TrustBar";
import ContactFinalCTA from "@/features/marketing/components/contact/ContactFinalCTA";

export const metadata = {
  title: "Contact AIVIQONE | Book a CRM Demo & Talk to Sales",
  description:
    "Contact AIVIQONE to book a CRM demo, discuss your sales requirements, explore business solutions or talk to our sales team.",
  keywords: [
    "AIVIQONE Contact",
    "Contact AIVIQONE",
    "AIVIQONE demo",
    "Book CRM demo",
    "Sales CRM demo",
    "CRM sales inquiry",
    "CRM software consultation",
    "Sales CRM for businesses",
    "CRM solutions India",
    "AIVIQONE sales team",
  ],
  alternates: {
    canonical: "https://aiviqone.com/contact",
  },
  openGraph: {
    title: "Contact AIVIQONE | Book a CRM Demo & Talk to Sales",
    description:
      "Contact AIVIQONE to book a CRM demo, discuss your sales requirements, explore business solutions or talk to our sales team.",
    url: "https://aiviqone.com/contact",
    siteName: "AIVIQONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AIVIQONE | Book a CRM Demo & Talk to Sales",
    description:
      "Contact AIVIQONE to book a CRM demo, discuss your sales requirements, explore business solutions or talk to our sales team.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <RequestTypeCards />
      <ContactFormSection />
      <ReachDirectly />
      <BusinessSolutionSection />
      <BusinessPresence />
      <TrustBar />
      <ContactFinalCTA />
    </>
  );
}
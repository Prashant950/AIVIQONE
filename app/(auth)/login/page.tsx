import LoginForm from "@/features/auth/components/LoginForm";

export const metadata = {
  title: "Login to AIVIQONE | Sales CRM",
  description:
    "Sign in to your AIVIQONE workspace to manage your CRM, leads, calls, WhatsApp conversations and sales activities.",
  keywords: [
    "AIVIQONE Login",
    "AIVIQONE sign in",
    "AIVIQONE CRM login",
    "Sales CRM login",
    "AIVIQONE workspace",
    "AIVIQONE account login",
  ],
  alternates: {
    canonical: "https://aiviqone.com/login",
  },
  openGraph: {
    title: "Login to AIVIQONE | Sales CRM",
    description:
      "Sign in to your AIVIQONE workspace to manage your CRM, leads, calls, WhatsApp conversations and sales activities.",
    url: "https://aiviqone.com/login",
    siteName: "AIVIQONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login to AIVIQONE | Sales CRM",
    description:
      "Sign in to your AIVIQONE workspace to manage your CRM, leads, calls, WhatsApp conversations and sales activities.",
  },
};

export default function LoginPage() {
  return <LoginForm />;
}

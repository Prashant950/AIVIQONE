export type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
   { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },

  {
    label: "Company",
    href: "/company",
    hasDropdown: true,
    dropdownItems: [
      { label: "About Company", href: "/company", description: "Our mission, vision and roadmap" },
      { label: "Privacy Policy", href: "/legal/privacy-policy", description: "How we protect and manage your data" },
      { label: "Terms of Service", href: "/legal/terms", description: "Terms and conditions of service" },
      { label: "Refund Policy", href: "/legal/refund-policy", description: "Refund and cancellation policy" },
      { label: "Cookie Policy", href: "/legal/cookie-policy", description: "Cookie policy and tracking details" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Smart CRM Platform", href: "/features" },
      { label: "WhatsApp Automation", href: "/features" },
      { label: "VoIP Calling & Recording", href: "/features" },
      { label: "Analytics & Reports", href: "/features" },
      { label: "Pricing & Plans", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About AIVIQONE", href: "/about" },
      { label: "Company Vision", href: "/company" },
      { label: "Features Overview", href: "/features" },
      { label: "Contact Sales", href: "/contact" },
      { label: "Book a Demo", href: "/contact#form" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Loan DSAs", href: "/features" },
      { label: "For Credit Card Agents", href: "/features" },
      { label: "For Insurance Advisors", href: "/features" },
      { label: "For NBFCs & Lenders", href: "/features" },
      { label: "For Sales Teams", href: "/features" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Refund Policy", href: "/legal/refund-policy" },
    ],
  },
];

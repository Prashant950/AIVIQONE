export type PolicySubsection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  bulletGroups?: { heading: string; bullets: string[] }[];
  subsections?: PolicySubsection[];
};

export const lastUpdated = "03 September 2026";
export const effectiveDate = "03 September 2026";
export const policyVersion = "1.0";

export const privacyPolicySections: PolicySection[] = [
  {
    id: "intro",
    title: "1. Introduction",
    paragraphs: [
      'Welcome to AIVIQONE Technologies Pvt. Ltd. ("AIVIQONE", "Company", "we", "our", or "us").',
      'At AIVIQONE, protecting the privacy and security of our users, customers, business partners, and website visitors is one of our highest priorities. This Privacy Policy explains how we collect, use, disclose, process, store, transfer, and protect your personal information when you access or use our websites (aiviqone.com), software applications, cloud-based services, customer relationship management (CRM) platform, communication services, APIs, mobile applications, integrations, support services, and any other products or services operated by AIVIQONE (collectively, "Services").',
      'Please read this Privacy Policy carefully before using our Services. By accessing or using our Services, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy.',
    ],
  },
  {
    id: "purpose",
    title: "1. Purpose of this Privacy Policy",
    paragraphs: ["The purpose of this Privacy Policy is to:"],
    bullets: [
      "Explain what information we collect.",
      "Explain why we collect your information.",
      "Explain how your information is processed.",
      "Describe your privacy rights.",
      "Describe how we protect your information.",
      "Explain when information may be shared with third parties.",
      "Explain your choices regarding your personal information.",
      "Ensure transparency regarding our privacy practices.",
    ],
  },
  {
    id: "scope",
    title: "2. Scope",
    paragraphs: [
      "This Privacy Policy applies to all individuals interacting with AIVIQONE, including but not limited to:",
    ],
    bullets: [
      "Website visitors",
      "Customers",
      "Prospective customers",
      "Registered users",
      "Trial users",
      "Business partners",
      "Vendors",
      "Contractors",
      "Employees (where applicable)",
      "Job applicants",
      "API users",
      "Developers",
      "Support contacts",
      "Individuals communicating with us",
    ],
    bulletGroups: [
      {
        heading: "This Privacy Policy applies regardless of the method used to access our Services, including:",
        bullets: [
          "Official website",
          "CRM platform",
          "Customer dashboard",
          "Mobile applications",
          "APIs",
          "Email communications",
          "Customer support channels",
          "Social media interactions",
          "Events and webinars",
          "Third-party integrations",
        ],
      },
    ],
  },
  {
    id: "definitions",
    title: "3. Definitions",
    paragraphs: ["For the purposes of this Privacy Policy:"],
    subsections: [
      {
        id: "3-1",
        title: "3.1 Personal Information",
        paragraphs: [
          '"Personal Information" means any information relating to an identified or identifiable individual, including but not limited to:',
        ],
        bullets: [
          "Name",
          "Email address",
          "Mobile number",
          "Business information",
          "Company name",
          "IP address",
          "Device identifiers",
          "Browser information",
          "Location data",
          "Customer account information",
          "Billing information",
          "Any information capable of identifying an individual directly or indirectly.",
        ],
      },
      {
        id: "3-2",
        title: "3.2 Sensitive Personal Information",
        paragraphs: [
          "Sensitive Personal Information includes information requiring additional protection under applicable laws, including information such as:",
        ],
        bullets: [
          "Authentication credentials",
          "Passwords",
          "Financial information",
          "Government-issued identification numbers (where collected)",
          "Payment-related information",
          "Security credentials",
        ],
        note: "AIVIQONE does not intentionally collect sensitive personal information unless necessary for providing the Services or required by law.",
      },
      {
        id: "3-3",
        title: "3.3 Customer Data",
        paragraphs: [
          "Customer Data means all information uploaded, stored, transmitted, generated, or managed by customers while using AIVIQONE Services.",
          "Examples include:",
        ],
        bullets: [
          "Leads",
          "Customer records",
          "Contact details",
          "Sales information",
          "Notes",
          "Attachments",
          "CRM records",
          "Business documents",
          "Team information",
          "Workflow information",
        ],
        note: "Ownership of Customer Data remains with the customer.",
      },
      {
        id: "3-4",
        title: "3.4 Usage Data",
        paragraphs: [
          "Usage Data refers to technical information automatically generated while using our Services, including:",
        ],
        bullets: [
          "Browser type",
          "Device information",
          "Operating system",
          "Language preference",
          "Session duration",
          "Click activity",
          "Feature usage",
          "Error logs",
          "Performance metrics",
          "Network information",
        ],
      },
      {
        id: "3-5",
        title: "3.5 Cookies",
        paragraphs: [
          "Cookies are small text files stored on your device that help us improve functionality, security, analytics, and user experience.",
        ],
      },
      {
        id: "3-6",
        title: "3.6 Processing",
        paragraphs: [
          '"Processing" includes any operation performed on personal information, including:',
        ],
        bullets: [
          "Collection",
          "Recording",
          "Storage",
          "Organization",
          "Structuring",
          "Updating",
          "Retrieval",
          "Consultation",
          "Use",
          "Disclosure",
          "Sharing",
          "Transmission",
          "Restriction",
          "Deletion",
          "Destruction",
        ],
      },
    ],
  },
  {
    id: "acceptance",
    title: "4. Acceptance of this Privacy Policy",
    paragraphs: [
      "By accessing, browsing, registering for, purchasing, or otherwise using any AIVIQONE Service, you acknowledge and agree that:",
    ],
    bullets: [
      "You have read this Privacy Policy.",
      "You understand how your information is collected and used.",
      "You consent to the practices described in this Privacy Policy, where consent is required by applicable law.",
      "You are legally capable of entering into a binding agreement.",
      "You agree to comply with our Terms and Conditions.",
    ],
    note: "If you do not agree with this Privacy Policy, you should discontinue use of our Services immediately.",
  },
  {
    id: "who-we-are",
    title: "5. Who We Are",
    paragraphs: [
      "AIVIQONE Technologies Pvt. Ltd. is a technology company providing cloud-based software solutions, including but not limited to:",
    ],
    bullets: [
      "Customer Relationship Management (CRM)",
      "Business communication tools",
      "Automation solutions",
      "Artificial Intelligence features",
      "Workflow management",
      "Analytics and reporting",
      "API services",
      "Business integrations",
      "Customer support tools",
      "Additional software products developed by AIVIQONE",
    ],
    note: "Our Services are designed primarily for businesses and professionals. They are not intended for unlawful activities or uses prohibited under applicable laws.",
  },
  {
    id: "principles",
    title: "6. Our Privacy Principles",
    paragraphs: ["AIVIQONE follows the following core privacy principles:"],
    subsections: [
      {
        id: "principle-transparency",
        title: "Transparency",
        paragraphs: ["We clearly explain how your information is collected and used."],
      },
      {
        id: "principle-minimization",
        title: "Data Minimization",
        paragraphs: ["We collect only the information reasonably necessary to provide and improve our Services."],
      },
      {
        id: "principle-security",
        title: "Security",
        paragraphs: ["We implement appropriate administrative, technical, and organizational safeguards to protect personal information."],
      },
      {
        id: "principle-accountability",
        title: "Accountability",
        paragraphs: ["We remain responsible for information processed under our control and continually review our privacy practices."],
      },
      {
        id: "principle-usercontrol",
        title: "User Control",
        paragraphs: ["Where applicable, users may access, update, correct, export, or request deletion of their personal information, subject to legal and contractual obligations."],
      },
      {
        id: "principle-improvement",
        title: "Continuous Improvement",
        paragraphs: ["We regularly review and enhance our privacy and security practices to address evolving technologies, legal requirements, and cybersecurity risks."],
      },
    ],
  },
  {
    id: "applicable-laws",
    title: "7. Applicable Laws",
    paragraphs: [
      "AIVIQONE endeavors to comply with applicable data protection and privacy laws, including, where relevant:",
    ],
    bullets: [
      "Digital Personal Data Protection Act, 2023 (India)",
      "Information Technology Act, 2000 (India)",
      "Applicable Information Technology Rules",
      "General Data Protection Regulation (GDPR), where applicable",
      "Other applicable international privacy laws based on the jurisdiction of our users",
    ],
    note: "Compliance obligations may vary depending on the location of the user and the nature of the Services provided.",
  },
  {
    id: "info-we-collect",
    title: "8. Information We Collect",
    paragraphs: [
      "The categories of information we collect depend on the Services you use, the manner in which you interact with AIVIQONE, your account settings, and applicable legal requirements.",
      "The information collected may include personal information, business information, technical information, communication records, and other data necessary to provide, improve, secure, and support our Services.",
    ],
    subsections: [
      {
        id: "8-1",
        title: "8.1 Information You Provide Directly",
        paragraphs: [
          "We may collect information that you voluntarily provide to us when you create an account, register for our Services, request a demo, contact customer support, purchase subscriptions, submit forms, participate in surveys, or communicate with us.",
        ],
        bullets: [
          "Full name, Business name & Company name",
          "Job title, Email address & Mobile number",
          "Office telephone number & Business address (Country, State, City, Postal code)",
          "Username & Password (stored in encrypted form)",
          "Profile photograph, Account preferences & Communication preferences",
          "Billing information & Tax information (where required)",
          "Documents submitted for verification and support requests",
        ],
      },
      {
        id: "8-2",
        title: "8.2 Account Information",
        paragraphs: ["When you create an AIVIQONE account, we may collect:"],
        bullets: [
          "Account ID, User role, Organization details & Subscription plan",
          "Workspace information, User permissions & Authentication records",
          "Login history, MFA status, Session identifiers & Security preferences",
        ],
      },
      {
        id: "8-3",
        title: "8.3 CRM Data",
        paragraphs: [
          "When you use our CRM platform, you or your organization may upload, create, store, or process Customer Data including customer names, prospects, lead records, contact info, sales pipelines, notes, tasks, documents, team assignments, activity logs, workflows, and reports.",
        ],
        note: "Ownership of such Customer Data remains with the customer.",
      },
      {
        id: "8-4",
        title: "8.4 Communication Data",
        paragraphs: [
          "Support tickets, customer service conversations, email communications, live chat messages, feedback, feature requests, survey responses, and meeting notes.",
        ],
        note: "Where legally permitted, communications may be monitored or recorded for quality assurance, training, security, and dispute resolution.",
      },
      {
        id: "8-5",
        title: "8.5 Billing and Payment Information",
        paragraphs: [
          "Billing name, billing address, invoice details, GST information, subscription history, payment status, transaction references, and payment timestamps.",
        ],
        note: "AIVIQONE does not intentionally store complete debit card, credit card, or banking credentials on its own servers. Payments are handled by authorized PCI-DSS compliant third-party payment gateways.",
      },
      {
        id: "8-6",
        title: "8.6 Device Information",
        paragraphs: [
          "Device type, device model, operating system, browser type & version, screen resolution, language settings, time zone, device identifiers, and hardware characteristics.",
        ],
      },
      {
        id: "8-7",
        title: "8.7 Network Information",
        paragraphs: [
          "IP address, Internet Service Provider (ISP), approximate geographic location, connection type, network logs, DNS information, and session request headers.",
        ],
      },
      {
        id: "8-8",
        title: "8.8 Log Information",
        paragraphs: [
          "Login/logout events, authentication logs, error reports, system events, API requests, security events, browser requests, and server timestamps.",
        ],
      },
      {
        id: "8-9",
        title: "8.9 Usage Information",
        paragraphs: [
          "Features accessed, buttons clicked, navigation paths, time spent on pages, session duration, dashboard activity, workflow interactions, API usage, and reports generated.",
        ],
      },
      {
        id: "8-10",
        title: "8.10 Cookies and Similar Technologies",
        paragraphs: [
          "Cookies, web beacons, pixels, and local storage used to maintain sessions, remember preferences, improve security, analyze traffic, and personalize user experience.",
        ],
      },
      {
        id: "8-11",
        title: "8.11 Analytics Information",
        paragraphs: [
          "Website traffic, page visits, user engagement, bounce rate, navigation patterns, device usage, geographic distribution, and product usage trends.",
        ],
      },
      {
        id: "8-12",
        title: "8.12 Information from Third Parties",
        paragraphs: [
          "Information received from business partners, referral partners, integration providers, identity verification providers, payment processors, and marketing partners.",
        ],
      },
    ],
  },
  {
    id: "how-we-collect",
    title: "9. How We Collect Information",
    paragraphs: ["We collect information through various lawful methods:"],
    subsections: [
      {
        id: "9-1",
        title: "9.1 Direct Collection",
        paragraphs: [
          "Information collected directly when you register an account, complete forms, purchase Services, contact support, subscribe to communications, or upload documents.",
        ],
      },
      {
        id: "9-2",
        title: "9.2 Automatic Collection",
        paragraphs: [
          "Certain technical data is collected automatically through browser interactions, cookies, device info, IP logs, and system telemetry.",
        ],
      },
      {
        id: "9-3",
        title: "9.3 Customer Uploads",
        paragraphs: [
          "Customers upload CRM records, contacts, files, and documents directly into the platform, which are processed on behalf of the customer.",
        ],
      },
      {
        id: "9-4",
        title: "9.4 Third-Party Integrations",
        paragraphs: [
          "Where you connect third-party platforms with AIVIQONE, information is exchanged in accordance with your authorization.",
        ],
      },
      {
        id: "9-5",
        title: "9.5 Support Interactions",
        paragraphs: [
          "Information provided during support chats, email exchanges, bug reports, and diagnostic logs.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "10. How We Use Your Information",
    paragraphs: [
      "AIVIQONE processes personal information only for legitimate business purposes, to provide and improve the Services, fulfill contractual obligations, maintain security, and comply with applicable laws.",
    ],
    subsections: [
      {
        id: "10-1",
        title: "10.1 Providing Our Services",
        paragraphs: ["Creating accounts, authenticating users, providing platform access, delivering CRM features, and processing workflows."],
      },
      {
        id: "10-2",
        title: "10.2 Account Administration",
        paragraphs: ["Identity verification, role & permission management, password resets, and Multi-Factor Authentication (MFA)."],
      },
      {
        id: "10-3",
        title: "10.3 Customer Support",
        paragraphs: ["Investigating technical issues, resolving tickets, tracking history, and improving customer satisfaction."],
      },
      {
        id: "10-4",
        title: "10.4 Product Improvement",
        paragraphs: ["Aggregated feature adoption analysis, stability monitoring, bug fixing, and scalability optimization."],
      },
      {
        id: "10-5",
        title: "10.5 Security and Fraud Prevention",
        paragraphs: ["Detecting suspicious activities, preventing abuse, monitoring compromised accounts, and mitigating threats."],
      },
      {
        id: "10-6",
        title: "10.6 Service Communications",
        paragraphs: ["Account alerts, security notifications, maintenance notices, invoices, and critical announcements."],
      },
      {
        id: "10-7",
        title: "10.7 Marketing Communications",
        paragraphs: ["Product announcements, webinars, newsletters, and promotional updates (with easy opt-out options)."],
      },
      {
        id: "10-8",
        title: "10.8 Analytics and Business Intelligence",
        paragraphs: ["Evaluating navigation patterns, feature usage, and infrastructure demands."],
      },
      {
        id: "10-9",
        title: "10.9 Artificial Intelligence Features",
        paragraphs: [
          "Generating requested AI outputs, automating workflows, and providing intelligent CRM recommendations.",
        ],
        note: "Customer Data processed through AI features will NOT be used to train publicly available AI models without explicit customer authorization.",
      },
      {
        id: "10-10",
        title: "10.10 Legal Compliance",
        paragraphs: ["Meeting statutory obligations, responding to regulatory inquiries, and defending legal claims."],
      },
      {
        id: "10-11",
        title: "10.11 Business Operations",
        paragraphs: ["Internal reporting, financial audits, risk management, quality assurance, and compliance audits."],
      },
    ],
  },
  {
    id: "consent-legal-basis",
    title: "11. Consent and Legal Basis for Processing",
    paragraphs: [
      "AIVIQONE processes personal information only for legitimate, specified purposes, including delivering Services, fulfilling contracts, ensuring platform security, and complying with statutory laws.",
      "Where required by applicable law, AIVIQONE obtains valid consent. You may withdraw consent at any time, subject to legal and contractual limits.",
    ],
  },
  {
    id: "communications",
    title: "12. Communications",
    paragraphs: ["When using our Services, you may receive different categories of communications:"],
    subsections: [
      {
        id: "12-1",
        title: "12.1 Mandatory Communications",
        paragraphs: ["Login verification, security alerts, service outage notices, billing invoices, and policy updates."],
      },
      {
        id: "12-2",
        title: "12.2 Promotional Communications",
        paragraphs: ["Product updates, feature launches, educational content, and newsletters (opt-out available anytime)."],
      },
      {
        id: "12-3",
        title: "12.3 Customer Support Communications",
        paragraphs: ["Email, phone calls, live chat, video meetings, and approved messaging platforms."],
      },
    ],
  },
  {
    id: "cookies-tracking",
    title: "13. Cookies and Tracking Technologies",
    paragraphs: [
      "AIVIQONE uses cookies and similar technologies to ensure our website and services function properly, improve performance, remember settings, and enhance user experience.",
    ],
    subsections: [
      {
        id: "13-1",
        title: "13.1 Types of Cookies We May Use",
        bullets: [
          "Essential Cookies: Required for user authentication, session security, and core system functionality.",
          "Functional Cookies: Remember language settings, dashboard layout, and display preferences.",
          "Performance Cookies: Track site performance, feature load times, and error rates.",
          "Analytics Cookies: Help us understand visitor behavior and improve platform navigation.",
          "Advertising Cookies: Used (where consented) to measure marketing effectiveness and deliver relevant content.",
        ],
      },
      {
        id: "13-2",
        title: "13.2 Managing Cookies",
        paragraphs: [
          "Most web browsers allow you to view, delete, block, or disable cookies. Note that disabling essential cookies may impact certain functionality of the Services.",
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "14. Analytics",
    paragraphs: [
      "AIVIQONE may use internal analytics tools and authorized third-party analytics providers (such as aggregated session duration, device types, browser statistics, and geographic regions) to optimize reliability, security, and user experience. Where practical, analytics data is anonymized or aggregated.",
    ],
  },
  {
    id: "sharing-info",
    title: "15. Sharing of Information",
    paragraphs: [
      "AIVIQONE values the privacy of its users and does NOT sell, rent, lease, or trade Personal Information to third parties for monetary consideration.",
      "We share information only under strict confidentiality and operational safeguards described below:",
    ],
    subsections: [
      {
        id: "15-1",
        title: "15.1 Sharing Within AIVIQONE",
        paragraphs: [
          "Accessed strictly on a need-to-know basis by authorized personnel for customer support, technical ops, billing, security, and compliance.",
        ],
      },
      {
        id: "15-2",
        title: "15.2 Service Providers",
        paragraphs: [
          "Trusted third-party vendors for cloud hosting, data storage, payment processing, email/SMS delivery, backup, and performance monitoring under strict confidentiality agreements.",
        ],
      },
      {
        id: "15-3",
        title: "15.3 Payment Processors",
        paragraphs: [
          "Authorized payment gateways process transactions in compliance with PCI-DSS and applicable financial standards.",
        ],
      },
      {
        id: "15-4",
        title: "15.4 Business Integrations",
        paragraphs: [
          "When you choose to connect third-party apps (e.g. Email, Calendars, WhatsApp, Cloud Storage), data is exchanged as authorized by you.",
        ],
      },
      {
        id: "15-5",
        title: "15.5 Corporate Transactions",
        paragraphs: [
          "In the event of a merger, acquisition, asset sale, or restructuring, information may be transferred subject to continued confidentiality protections.",
        ],
      },
      {
        id: "15-6",
        title: "15.6 Legal Requirements",
        paragraphs: [
          "Disclosures required by applicable laws, court orders, government authorities, or to prevent fraud and protect public safety.",
        ],
      },
      {
        id: "15-7",
        title: "15.7 Protection of Rights",
        paragraphs: [
          "Disclosures necessary to enforce agreements, prevent security incidents, investigate abuse, and protect our intellectual property.",
        ],
      },
      {
        id: "15-8",
        title: "15.8 Business Partners",
        paragraphs: [
          "Joint services delivered with trusted partners with strict confidentiality and security requirements.",
        ],
      },
    ],
  },
  {
    id: "third-party-services",
    title: "16. Third-Party Services",
    paragraphs: [
      "Our Services may link to or integrate with independent third-party platforms (payment gateways, cloud providers, social networks). AIVIQONE is not responsible for the privacy practices of third parties, and we encourage you to review their policies.",
    ],
  },
  {
    id: "international-transfers",
    title: "17. International Data Transfers",
    paragraphs: [
      "Depending on your location and service requirements, personal data may be processed in countries outside your residence. Where applicable, AIVIQONE implements adequate cross-border transfer safeguards including contractual clauses and lawful mechanisms.",
    ],
  },
  {
    id: "data-storage",
    title: "18. Data Storage & Backups",
    paragraphs: [
      "Personal Information and Customer Data are stored in secure cloud environments, production servers, and disaster recovery infrastructure with administrative, technical, and physical safeguards.",
    ],
    subsections: [
      {
        id: "18-1",
        title: "18.1 Data Backups",
        paragraphs: [
          "To ensure service continuity and disaster recovery, AIVIQONE maintains encrypted backups retained only as long as necessary for operational and security recovery.",
        ],
      },
    ],
  },
  {
    id: "data-retention",
    title: "19. Data Retention",
    paragraphs: [
      "AIVIQONE retains Personal Information only for as long as necessary to provide Services, fulfill contractual agreements, resolve disputes, maintain security, and comply with legal requirements.",
    ],
    subsections: [
      {
        id: "19-1",
        title: "19.1 Account Information",
        paragraphs: ["Retained while your account remains active, and for legitimate recordkeeping thereafter."],
      },
      {
        id: "19-2",
        title: "19.2 Customer Data",
        paragraphs: ["Remains under customer control. Upon account termination, data is deleted or returned in accordance with agreements."],
      },
      {
        id: "19-3",
        title: "19.3 Billing Records",
        paragraphs: ["Invoices, receipts, and tax records are retained as mandated by taxation and financial reporting laws."],
      },
      {
        id: "19-4",
        title: "19.4 Security Logs",
        paragraphs: ["System logs, authentication trails, and audit logs are retained for fraud prevention and forensic security."],
      },
      {
        id: "19-5",
        title: "19.5 Deletion of Information",
        paragraphs: ["Data is permanently deleted or irreversibly anonymized when no longer required."],
      },
    ],
  },
  {
    id: "data-accuracy",
    title: "20. Data Accuracy",
    paragraphs: [
      "Users are encouraged to ensure their account information is accurate, complete, and up to date via account settings or by reaching out to support.",
    ],
  },
  {
    id: "information-security",
    title: "21. Information Security",
    paragraphs: [
      "AIVIQONE is committed to protecting the confidentiality, integrity, and availability of Personal Information and Customer Data through enterprise-grade security controls.",
    ],
    subsections: [
      {
        id: "21-1",
        title: "21.1 Security Measures",
        bullets: [
          "End-to-end encryption of data in transit using TLS/SSL protocols.",
          "Encryption of sensitive data at rest using industry-standard cryptography.",
          "Secure authentication and Multi-Factor Authentication (MFA) capabilities.",
          "Role-based access controls (RBAC) and least privilege principles.",
          "Firewall protection, intrusion detection, and 24/7 security monitoring.",
          "Regular security patching, vulnerability scans, and continuous disaster recovery planning.",
        ],
      },
      {
        id: "21-2",
        title: "21.2 Employee Access Controls",
        paragraphs: [
          "Access is restricted strictly on a need-to-know basis. All employees and contractors are bound by non-disclosure and confidentiality obligations.",
        ],
      },
      {
        id: "21-3",
        title: "21.3 Customer Responsibilities",
        paragraphs: [
          "Customers must maintain strong passwords, protect credentials, configure user permissions appropriately, and report suspected breaches promptly.",
        ],
      },
      {
        id: "21-4",
        title: "21.4 Security Incidents",
        paragraphs: [
          "In the event of a confirmed security incident, AIVIQONE will investigate promptly and notify affected users and regulatory authorities as required by applicable laws.",
        ],
      },
    ],
  },
  {
    id: "your-privacy-rights",
    title: "22. Your Privacy Rights",
    paragraphs: [
      "Depending on your jurisdiction and applicable data protection legislation (such as India's DPDP Act 2023 or GDPR), you may exercise the following rights:",
    ],
    subsections: [
      { id: "22-1", title: "22.1 Right to Access", paragraphs: ["Request a summary of personal information processed by us."] },
      { id: "22-2", title: "22.2 Right to Correction", paragraphs: ["Request correction of inaccurate, incomplete, or outdated information."] },
      { id: "22-3", title: "22.3 Right to Deletion", paragraphs: ["Request erasure of personal information where no longer required or where consent is withdrawn."] },
      { id: "22-4", title: "22.4 Right to Withdraw Consent", paragraphs: ["Withdraw consent at any time for future processing."] },
      { id: "22-5", title: "22.5 Right to Restrict Processing", paragraphs: ["Request restriction of processing under certain legal grounds."] },
      { id: "22-6", title: "22.6 Right to Object", paragraphs: ["Object to processing based on legitimate interests or direct marketing."] },
      { id: "22-7", title: "22.7 Right to Data Portability", paragraphs: ["Request a copy of your personal data in a structured, machine-readable format."] },
      { id: "22-8", title: "22.8 Right to Lodge a Complaint", paragraphs: ["File a complaint with the Data Protection Board or competent authority in your jurisdiction."] },
    ],
  },
  {
    id: "exercising-rights",
    title: "23. Exercising Your Rights",
    paragraphs: [
      "To exercise your privacy rights, contact us at privacy@aiviqone.com or through the Grievance Officer details. We verify requests before processing to protect user privacy.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "24. Children's Privacy",
    paragraphs: [
      "AIVIQONE Services are designed for businesses and professionals and are not directed to individuals under 18 years of age. We do not knowingly collect personal data from minors.",
    ],
  },
  {
    id: "third-party-websites",
    title: "25. Third-Party Websites",
    paragraphs: [
      "Our website and services may link to external websites. We are not responsible for the content, privacy policies, or practices of third-party websites.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "26. User Responsibilities",
    paragraphs: [
      "Users agree to provide accurate information, protect login credentials, use the platform lawfully, respect privacy regulations, and secure customer data uploaded to their accounts.",
    ],
  },
  {
    id: "data-accuracy-reaffirm",
    title: "27. Data Accuracy Reaffirmation",
    paragraphs: [
      "Users are responsible for ensuring information provided to AIVIQONE remains up-to-date and complete.",
    ],
  },
  {
    id: "business-continuity",
    title: "28. Business Continuity & Disaster Recovery",
    paragraphs: [
      "AIVIQONE maintains automated multi-region backups, redundant infrastructure, failover procedures, and incident response measures to guarantee system availability.",
    ],
  },
  {
    id: "changes-to-policy",
    title: "29. Changes to this Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect legal, regulatory, or operational improvements. Notice of material updates will be posted on our website or sent via email.",
    ],
  },
  {
    id: "contact-information",
    title: "30. Contact Information",
    paragraphs: [
      "For privacy questions, data requests, or compliance inquiries, please contact us:",
    ],
    bullets: [
      "Company: AIVIQONE Technologies Pvt. Ltd.",
      "Email: privacy@aiviqone.com",
      "General Support: support@aiviqone.com",
      "Website: https://www.aiviqone.com",
    ],
  },
  {
    id: "grievance-officer",
    title: "31. Grievance Officer (India)",
    paragraphs: [
      "In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the details of the Grievance Officer are:",
    ],
    bullets: [
      "Name: Anant",
      "Designation: Grievance Officer",
      "Email: hello@aiviqone.com",
      "Working Days: Monday to Friday (excluding public holidays)",
    ],
    note: "We acknowledge and respond to grievances within the statutory timelines prescribed under Indian law.",
  },
  {
    id: "governing-law",
    title: "32. Governing Law",
    paragraphs: [
      "This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of India.",
    ],
  },
  {
    id: "jurisdiction",
    title: "33. Jurisdiction",
    paragraphs: [
      "Subject to dispute resolution procedures, the courts located in New Delhi, India shall have exclusive jurisdiction over disputes arising out of this Privacy Policy.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "34. Dispute Resolution",
    paragraphs: [
      "Parties agree to attempt amicable, good-faith negotiations before initiating formal legal proceedings.",
    ],
  },
  {
    id: "compliance-laws",
    title: "35. Compliance with Applicable Laws",
    paragraphs: [
      "AIVIQONE operates in strict compliance with the DPDP Act 2023 (India), IT Act 2000, GDPR, and relevant international cybersecurity standards.",
    ],
  },
  {
    id: "confidentiality-customer-data",
    title: "36. Confidentiality of Customer Data",
    paragraphs: [
      "AIVIQONE acknowledges that Customer Data belongs solely to the respective customer. We will not access, use, or disclose Customer Data except as required for service operation or authorized by the customer.",
    ],
  },
  {
    id: "business-transfers-clause",
    title: "37. Business Transfers",
    paragraphs: [
      "In case of a corporate sale or merger, customer data protections will remain intact and consistent with this Privacy Policy.",
    ],
  },
  {
    id: "severability",
    title: "38. Severability",
    paragraphs: [
      "If any provision is found invalid or unenforceable by a court, the remaining provisions shall continue in full force and effect.",
    ],
  },
  {
    id: "no-waiver",
    title: "39. No Waiver",
    paragraphs: [
      "Failure by AIVIQONE to enforce any provision shall not constitute a waiver of that or any other right.",
    ],
  },
  {
    id: "force-majeure",
    title: "40. Force Majeure",
    paragraphs: [
      "AIVIQONE shall not be liable for delays resulting from events beyond reasonable control (natural disasters, network outages, war, pandemics, cyberattacks).",
    ],
  },
  {
    id: "assignment",
    title: "41. Assignment",
    paragraphs: [
      "AIVIQONE may assign its rights and obligations in the event of corporate restructuring. Users may not assign rights without prior written consent.",
    ],
  },
  {
    id: "entire-privacy-policy",
    title: "42. Entire Privacy Policy",
    paragraphs: [
      "This document represents the entire understanding between you and AIVIQONE regarding data privacy and should be read alongside our Terms of Service and Cookie Policy.",
    ],
  },
  {
    id: "customer-responsibility-data",
    title: "43. Customer-Provided Data & Responsibility",
    paragraphs: [
      "Customers act as Data Controllers for records they import and are responsible for ensuring they possess all necessary consents and legal rights under applicable law.",
    ],
  },
  {
    id: "version-history",
    title: "44. Version History",
    paragraphs: [
      "Version 1.0 — Effective Date: 03 September 2026 — Initial Release.",
    ],
  },
];
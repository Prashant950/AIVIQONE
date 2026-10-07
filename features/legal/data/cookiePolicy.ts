export type CookieSubsection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CookieSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: CookieSubsection[];
};

export const cookiePolicyMeta = {
  company: "AIVIQONE Technologies Pvt. Ltd.",
  version: "1.0",
  effectiveDate: "03 September 2026",
  lastUpdated: "03 September 2026",
  documentTitle: "Cookie Policy",
  status: "Approved for Publication",
  classification: "Public Legal Document",
  copyright: "Copyright © 2026 AIVIQONE Technologies Pvt. Ltd. All Rights Reserved.",
};

export const cookieHighlights = [
  {
    key: "essential",
    title: "Keep the website functioning properly",
    description: "Enable core features, user authentication, and system security.",
  },
  {
    key: "functional",
    title: "Remember your preferences",
    description: "Store language, theme, and dashboard configurations.",
  },
  {
    key: "analytics",
    title: "Understand website usage",
    description: "Analyze visitor traffic and product journeys to improve usability.",
  },
  {
    key: "performance",
    title: "Improve website performance",
    description: "Optimize page loading times, content delivery, and responsiveness.",
  },
  {
    key: "marketing",
    title: "Measure marketing performance",
    description: "Understand conversion channels and campaign effectiveness.",
  },
  {
    key: "security",
    title: "Security and fraud prevention",
    description: "Protect against unauthorized access, session hijacking, and automated abuse.",
  },
];

export const cookieTypesTable = [
  {
    category: "Strictly Necessary",
    purpose: "Essential for core website operation, user authentication, session security, and load balancing.",
    duration: "Session / Persistent",
    required: "Yes (Mandatory)",
  },
  {
    category: "Functional",
    purpose: "Remember preferences, language, regional settings, and dashboard layouts for an enhanced experience.",
    duration: "Persistent",
    required: "No (Optional)",
  },
  {
    category: "Performance",
    purpose: "Collect aggregated metrics on page load times, errors, and system responsiveness to optimize speed.",
    duration: "Persistent",
    required: "No (Optional)",
  },
  {
    category: "Analytics",
    purpose: "Understand visitor interactions, navigation paths, and feature adoption across the platform.",
    duration: "Persistent",
    required: "No (Optional)",
  },
  {
    category: "Marketing & Advertising",
    purpose: "Measure campaign ROI, prevent repetitive ads, and understand audience acquisition channels.",
    duration: "Persistent",
    required: "No (Optional)",
  },
  {
    category: "Security & Fraud Prevention",
    purpose: "Detect suspicious logins, prevent bot attacks, enforce MFA, and protect user accounts.",
    duration: "Session / Persistent",
    required: "Yes (Mandatory)",
  },
];

export const cookiePreferenceToggles = [
  { key: "essential", label: "Strictly Necessary Cookies", locked: true, description: "Required for basic website security and navigation." },
  { key: "functional", label: "Functional Cookies", locked: false, description: "Saves your theme, region, and personalized dashboard views." },
  { key: "performance", label: "Performance Cookies", locked: false, description: "Monitors page load speeds and technical error reports." },
  { key: "analytics", label: "Analytics Cookies", locked: false, description: "Provides aggregated insights on feature adoption and user journeys." },
  { key: "marketing", label: "Marketing & Advertising Cookies", locked: false, description: "Measures promotional campaign reach and conversion metrics." },
];

export const cookiePolicySections: CookieSection[] = [
  {
    id: "s1",
    title: "1. Purpose",
    subsections: [
      {
        id: "s1-1",
        title: "1.1 Purpose of this Cookie Policy",
        paragraphs: [
          "The purpose of this Cookie Policy is to provide transparent information regarding:",
        ],
        bullets: [
          "(a) the types of cookies used by AIVIQONE;",
          "(b) the purposes for which cookies are used;",
          "(c) how users may manage or disable cookies;",
          "(d) how cookies interact with Personal Information;",
          "(e) the rights available to users regarding cookies and similar technologies.",
        ],
      },
      {
        id: "s1-2",
        title: "1.2 Scope",
        paragraphs: [
          "This Cookie Policy applies to all visitors, users, customers, subscribers, developers, partners, vendors, and other individuals who access or interact with:",
        ],
        bullets: [
          "AIVIQONE websites;",
          "Customer portals;",
          "CRM platform;",
          "Dashboards;",
          "Mobile applications (where available);",
          "APIs;",
          "Documentation portals;",
          "Knowledge base;",
          "Marketing websites;",
          "Landing pages;",
          "Any future online services operated by AIVIQONE.",
        ],
      },
    ],
  },
  {
    id: "s2",
    title: "2. Definitions",
    paragraphs: [
      "Unless the context otherwise requires, the following definitions shall apply.",
    ],
    subsections: [
      {
        id: "s2-1",
        title: '2.1 "Cookie"',
        paragraphs: [
          'A "Cookie" means a small text file placed on a user\'s browser, computer, mobile device, tablet, or other internet-enabled device by a website or application for the purpose of recognizing the device, storing information, remembering preferences, improving functionality, measuring usage, enhancing security, or facilitating other legitimate operational purposes.',
        ],
      },
      {
        id: "s2-2",
        title: '2.2 "First-Party Cookie"',
        paragraphs: [
          'A "First-Party Cookie" means a cookie placed directly by AIVIQONE through its own websites, applications, or Services.',
        ],
      },
      {
        id: "s2-3",
        title: '2.3 "Third-Party Cookie"',
        paragraphs: [
          'A "Third-Party Cookie" means a cookie placed by an independent third-party service provider whose technology, content, analytics, advertising, payment, authentication, communication, or other services are integrated into or accessible through the Services.',
        ],
      },
      {
        id: "s2-4",
        title: '2.4 "Session Cookie"',
        paragraphs: [
          'A "Session Cookie" means a temporary cookie that remains on the user\'s device only during the active browser session and is automatically deleted when the browser is closed.',
        ],
      },
      {
        id: "s2-5",
        title: '2.5 "Persistent Cookie"',
        paragraphs: [
          'A "Persistent Cookie" means a cookie that remains stored on the user\'s device for a predefined period or until manually deleted by the user.',
        ],
      },
      {
        id: "s2-6",
        title: '2.6 "Similar Technologies"',
        paragraphs: [
          '"Similar Technologies" include technologies functionally similar to cookies, including but not limited to:',
        ],
        bullets: [
          "Web Beacons;",
          "Pixel Tags;",
          "Tracking Pixels;",
          "Local Storage;",
          "Session Storage;",
          "Device Identifiers;",
          "SDK Technologies;",
          "Embedded Scripts;",
          "HTML5 Storage;",
          "Log Files;",
          "Similar internet technologies used for operational, analytical, security, or service-related purposes.",
        ],
      },
    ],
  },
  {
    id: "s3",
    title: "3. What Are Cookies?",
    paragraphs: [
      "Cookies are small data files stored on a user's device when the user visits a website or interacts with an online service. Cookies enable websites and applications to:",
    ],
    bullets: [
      "recognize returning users;",
      "remember user preferences;",
      "maintain login sessions;",
      "improve website functionality;",
      "enhance security;",
      "personalize user experiences;",
      "measure website performance;",
      "understand user behavior;",
      "support analytics;",
      "maintain platform stability.",
    ],
    subsections: [
      {
        id: "s3-note",
        title: "Personal Information Relationship",
        paragraphs: [
          "Cookies generally do not directly identify an individual. However, where cookies are associated with Personal Information or unique identifiers, they may constitute Personal Information under applicable privacy laws.",
        ],
      },
    ],
  },
  {
    id: "s4",
    title: "4. Types of Cookies Used by AIVIQONE",
    paragraphs: [
      "Depending upon the Services used, AIVIQONE may deploy one or more of the following categories of cookies.",
    ],
    subsections: [
      {
        id: "s4-1",
        title: "4.1 Strictly Necessary Cookies",
        paragraphs: [
          "Strictly Necessary Cookies are essential for the operation of the Services. These cookies enable core functionality including:",
        ],
        bullets: [
          "user authentication;",
          "secure login;",
          "session management;",
          "fraud prevention;",
          "network management;",
          "account security;",
          "load balancing;",
          "payment processing;",
          "navigation between secure pages.",
        ],
      },
      {
        id: "s4-2",
        title: "4.2 Functional Cookies",
        paragraphs: [
          "Functional Cookies enable enhanced features and personalization, including:",
        ],
        bullets: [
          "remembering language preferences;",
          "remembering regional settings;",
          "remembering user interface preferences;",
          "remembering dashboard configurations;",
          "remembering accessibility preferences;",
          "saving user selections;",
          "improving usability.",
        ],
      },
      {
        id: "s4-3",
        title: "4.3 Performance Cookies",
        paragraphs: [
          "Performance Cookies help AIVIQONE understand how users interact with the Services. These cookies may collect information regarding:",
        ],
        bullets: [
          "pages visited;",
          "navigation paths;",
          "page loading times;",
          "feature usage;",
          "session duration;",
          "system responsiveness;",
          "website errors;",
          "performance bottlenecks.",
        ],
      },
      {
        id: "s4-4",
        title: "4.4 Analytics Cookies",
        paragraphs: [
          "Analytics Cookies assist AIVIQONE in understanding trends relating to:",
        ],
        bullets: [
          "website traffic;",
          "visitor behavior;",
          "user engagement;",
          "customer journeys;",
          "conversion performance;",
          "feature adoption;",
          "product optimization.",
        ],
      },
      {
        id: "s4-5",
        title: "4.5 Security Cookies",
        paragraphs: [
          "Security Cookies help detect and prevent:",
        ],
        bullets: [
          "unauthorized access;",
          "account compromise;",
          "suspicious login attempts;",
          "automated attacks;",
          "fraudulent activity;",
          "abuse of the Services;",
          "session hijacking;",
          "credential misuse.",
        ],
      },
    ],
  },
  {
    id: "s5",
    title: "5. Cookie Consent",
    paragraphs: [
      "Where required by applicable law, AIVIQONE shall obtain the user's consent before placing non-essential cookies on the user's device. Users may:",
    ],
    bullets: [
      "accept all cookies;",
      "reject non-essential cookies;",
      "customize cookie preferences; or",
      "modify previously selected cookie settings through available consent management tools, where provided.",
    ],
    subsections: [
      {
        id: "s5-note",
        title: "Effect of Withdrawal",
        paragraphs: [
          "The withdrawal of consent shall not affect the lawfulness of cookie processing carried out prior to such withdrawal.",
        ],
      },
    ],
  },
  {
    id: "s6",
    title: "6. Marketing Cookies",
    subsections: [
      {
        id: "s6-1",
        title: "6.1 Purpose",
        paragraphs: [
          "Subject to applicable law and the User's consent where required, AIVIQONE may use Marketing Cookies to better understand user engagement and to improve the effectiveness of marketing communications. Marketing Cookies may be used for purposes including:",
        ],
        bullets: [
          "Measuring campaign effectiveness;",
          "Understanding customer acquisition channels;",
          "Identifying referral sources;",
          "Evaluating promotional campaigns;",
          "Improving marketing strategies;",
          "Preventing duplicate campaign attribution;",
          "Measuring conversions;",
          "Optimizing user journeys.",
        ],
      },
      {
        id: "s6-2",
        title: "6.2 Consent",
        paragraphs: [
          "Marketing Cookies shall only be deployed where: (a) applicable law permits such deployment; and (b) the User has provided valid consent where such consent is required. Users may withdraw or modify such consent at any time through available cookie preference settings.",
        ],
      },
    ],
  },
  {
    id: "s7",
    title: "7. Advertising Cookies",
    subsections: [
      {
        id: "s7-1",
        title: "7.1 Advertising Technologies",
        paragraphs: [
          "Where applicable, AIVIQONE or its authorized partners may use Advertising Cookies and similar technologies to:",
        ],
        bullets: [
          "deliver relevant advertisements;",
          "limit repetitive advertisements;",
          "measure advertising performance;",
          "understand audience engagement;",
          "evaluate campaign effectiveness;",
          "improve advertising efficiency.",
        ],
      },
      {
        id: "s7-2",
        title: "7.2 Personalized Advertising",
        paragraphs: [
          "Where legally permitted and based upon the User's consent where required, Advertising Cookies may be used to display advertisements that are more relevant to the User's interests. The User may disable personalized advertising through available browser controls, cookie preference tools, or applicable third-party settings.",
        ],
      },
    ],
  },
  {
    id: "s8",
    title: "8. Social Media Cookies",
    subsections: [
      {
        id: "s8-1",
        title: "8.1 Social Media Integrations",
        paragraphs: [
          "Certain portions of the Services may contain features, widgets, buttons, plugins, embedded content, or integrations provided by third-party social media platforms. Such integrations may place cookies or similar technologies on the User's device. Examples may include integrations relating to:",
        ],
        bullets: [
          "Social sharing;",
          "Authentication;",
          "Embedded media;",
          "Community engagement;",
          "Business pages;",
          "Customer communication.",
        ],
      },
      {
        id: "s8-2",
        title: "8.2 Independent Processing",
        paragraphs: [
          "Any information collected by third-party social media providers shall remain subject to the respective privacy policies, cookie policies, and terms of such providers. AIVIQONE neither owns nor controls the cookie practices of independent third-party platforms.",
        ],
      },
    ],
  },
  {
    id: "s9",
    title: "9. Security and Fraud Prevention Technologies",
    paragraphs: [
      "To protect the Services and Users, AIVIQONE may deploy cookies and similar technologies for legitimate security purposes, including:",
    ],
    bullets: [
      "User authentication;",
      "Session validation;",
      "Device recognition;",
      "Login verification;",
      "Multi-factor authentication support;",
      "Fraud detection;",
      "Bot detection;",
      "Abuse prevention;",
      "Account protection;",
      "Suspicious activity detection;",
      "Risk scoring;",
      "Cybersecurity monitoring.",
    ],
  },
  {
    id: "s10",
    title: "10. AI and Automated Technologies",
    paragraphs: [
      "Certain Services may incorporate Artificial Intelligence (\"AI\"), Machine Learning (\"ML\"), automation engines, or intelligent system optimization technologies. Where cookies or similar technologies support AI-powered functionality, they may be used for purposes such as:",
    ],
    bullets: [
      "improving response performance;",
      "remembering user preferences;",
      "maintaining conversational context;",
      "optimizing feature performance;",
      "detecting abnormal usage patterns;",
      "improving system reliability;",
      "supporting service optimization.",
    ],
    subsections: [
      {
        id: "s10-note",
        title: "Automated Decision Making",
        paragraphs: [
          "Unless otherwise disclosed, AIVIQONE does not use cookies to make solely automated decisions producing legal or similarly significant effects concerning Users.",
        ],
      },
    ],
  },
  {
    id: "s11",
    title: "11. First-Party Cookies",
    paragraphs: [
      "First-Party Cookies are placed directly by AIVIQONE. Such cookies may be used for:",
    ],
    bullets: [
      "authentication;",
      "maintaining login sessions;",
      "user preferences;",
      "dashboard settings;",
      "security;",
      "fraud prevention;",
      "operational stability;",
      "platform performance;",
      "service customization.",
    ],
  },
  {
    id: "s12",
    title: "12. Third-Party Cookies",
    subsections: [
      {
        id: "s12-1",
        title: "12.1 Third-Party Service Providers",
        paragraphs: [
          "The Services may integrate with independent third-party providers that place cookies or similar technologies for legitimate operational purposes. Such providers may include:",
        ],
        bullets: [
          "Cloud infrastructure providers;",
          "Payment processors;",
          "Identity and authentication providers;",
          "Analytics providers;",
          "Customer support platforms;",
          "Communication service providers;",
          "Email delivery providers;",
          "Video hosting providers;",
          "Mapping services;",
          "Content delivery networks;",
          "Security monitoring providers.",
        ],
      },
      {
        id: "s12-2",
        title: "12.2 Independent Policies",
        paragraphs: [
          "Third-party cookies are governed by the respective policies of the relevant third-party provider. AIVIQONE does not control cookie duration, data processing practices, retention periods, privacy practices, or security controls implemented by independent third-party providers. Users are encouraged to review the applicable privacy and cookie policies of such providers.",
        ],
      },
    ],
  },
  {
    id: "s13",
    title: "13. Purposes of Cookie Processing",
    paragraphs: [
      "Subject to applicable law, cookies and similar technologies may be used by AIVIQONE for one or more of the following purposes:",
    ],
    bullets: [
      "(a) providing the Services;",
      "(b) authenticating Users;",
      "(c) maintaining secure sessions;",
      "(d) protecting Customer Accounts;",
      "(e) preventing fraud;",
      "(f) preventing abuse;",
      "(g) maintaining platform security;",
      "(h) remembering User preferences;",
      "(i) improving usability;",
      "(j) measuring system performance;",
      "(k) diagnosing technical issues;",
      "(l) improving customer experience;",
      "(m) supporting analytics;",
      "(n) measuring service usage;",
      "(o) monitoring infrastructure health;",
      "(p) improving AI-powered functionality;",
      "(q) complying with applicable legal obligations;",
      "(r) maintaining business continuity;",
      "(s) protecting the legitimate interests of AIVIQONE, its Users, and its business partners, where permitted by law.",
    ],
  },
  {
    id: "s14",
    title: "14. Legal Basis for Cookie Processing",
    paragraphs: [
      "Where required by applicable law, AIVIQONE processes cookie-related information based upon one or more of the following legal grounds:",
    ],
    bullets: [
      "User Consent;",
      "Performance of a Contract;",
      "Compliance with Legal Obligations;",
      "Protection of Vital Interests;",
      "Legitimate Business Interests;",
      "Other lawful bases recognized under applicable law.",
    ],
    subsections: [
      {
        id: "s14-variation",
        title: "Jurisdictional Variation",
        paragraphs: [
          "The applicable legal basis may vary depending upon: the category of cookie; the Services used; the User's jurisdiction; and applicable legal requirements.",
        ],
      },
    ],
  },
  {
    id: "s15",
    title: "15. Cookie Retention",
    subsections: [
      {
        id: "s15-1",
        title: "15.1 Retention Period",
        paragraphs: [
          "Cookies and similar technologies may remain stored on the User's device for varying periods depending upon their purpose and configuration. Generally, cookies fall into the following categories: Session Cookies, Persistent Cookies, Security Cookies, Functional Cookies, Analytics Cookies, Marketing Cookies. Each category may have different retention periods based upon operational requirements, applicable law, technical necessity, contractual obligations, or the settings established by AIVIQONE or authorized third-party service providers.",
        ],
      },
      {
        id: "s15-2",
        title: "15.2 Session Cookies",
        paragraphs: [
          "Session Cookies are temporary in nature. These cookies are generally deleted automatically when: the browser is closed; the user signs out; the session expires; or the authentication session terminates. Session Cookies are primarily used for:",
        ],
        bullets: [
          "secure authentication;",
          "maintaining login sessions;",
          "navigation continuity;",
          "temporary user preferences;",
          "fraud prevention.",
        ],
      },
      {
        id: "s15-3",
        title: "15.3 Persistent Cookies",
        paragraphs: [
          "Persistent Cookies remain on the User's device until: (a) they expire automatically; (b) they are manually deleted by the User; (c) browser settings remove them; or (d) they are replaced by updated cookies. Persistent Cookies assist in:",
        ],
        bullets: [
          "remembering user preferences;",
          "improving user experience;",
          "recognizing returning visitors;",
          "maintaining customized settings;",
          "supporting analytical functions.",
        ],
      },
    ],
  },
  {
    id: "s16",
    title: "16. Cookie Management",
    subsections: [
      {
        id: "s16-1",
        title: "16.1 User Control",
        paragraphs: [
          "Users remain in control of cookie preferences, subject to applicable law and technical limitations. Users may:",
        ],
        bullets: [
          "accept all cookies;",
          "reject non-essential cookies;",
          "customize cookie categories;",
          "withdraw previously granted consent;",
          "modify browser cookie settings;",
          "delete stored cookies.",
        ],
      },
      {
        id: "s16-2",
        title: "16.2 Effect of Disabling Cookies",
        paragraphs: [
          "Disabling certain categories of cookies may affect the availability or functionality of the Services. Depending upon the cookies disabled, Users may experience:",
        ],
        bullets: [
          "repeated login requests;",
          "loss of saved preferences;",
          "reduced personalization;",
          "limited dashboard functionality;",
          "authentication interruptions;",
          "degraded website performance;",
          "inability to access certain secure areas.",
        ],
      },
    ],
  },
  {
    id: "s17",
    title: "17. Browser Controls",
    paragraphs: [
      "Most modern internet browsers permit Users to manage cookies through browser settings. Depending upon the browser, Users may be able to:",
    ],
    bullets: [
      "block cookies;",
      "delete existing cookies;",
      "receive cookie notifications;",
      "restrict third-party cookies;",
      "configure site-specific cookie permissions.",
    ],
    subsections: [
      {
        id: "s17-note",
        title: "Browser Variability",
        paragraphs: [
          "Browser functionality varies depending upon browser type, browser version, operating system, and device configuration. AIVIQONE does not control browser-based cookie management features.",
        ],
      },
    ],
  },
  {
    id: "s18",
    title: "18. Withdrawal of Consent",
    paragraphs: [
      "Where cookie processing is based upon User consent, the User may withdraw such consent at any time. Withdrawal of consent shall not affect:",
    ],
    bullets: [
      "(a) the lawfulness of processing conducted before withdrawal;",
      "(b) processing based upon another lawful basis;",
      "(c) processing relating to Strictly Necessary Cookies.",
    ],
    subsections: [
      {
        id: "s18-persistence",
        title: "Post-Withdrawal Cookies",
        paragraphs: [
          "Following withdrawal, previously stored cookies may continue to exist until manually removed by the User or automatically deleted in accordance with applicable retention settings.",
        ],
      },
    ],
  },
  {
    id: "s19",
    title: "19. Do Not Track (DNT)",
    paragraphs: [
      "Certain internet browsers support \"Do Not Track\" (\"DNT\") signals. At present, no universally accepted technological standard exists governing the interpretation or implementation of DNT signals. Accordingly, unless required by applicable law, AIVIQONE does not guarantee that the Services will respond to all browser-generated DNT signals in a uniform manner.",
      "Should applicable legal requirements or industry standards materially change, AIVIQONE may update its practices accordingly.",
    ],
  },
  {
    id: "s20",
    title: "20. International Data Transfers",
    paragraphs: [
      "Certain cookie-related information may be processed by service providers located in jurisdictions outside the User's country of residence. Where such international processing occurs, AIVIQONE shall implement commercially reasonable safeguards appropriate under applicable law, which may include:",
    ],
    bullets: [
      "contractual safeguards;",
      "organizational measures;",
      "technical safeguards;",
      "legally recognized transfer mechanisms;",
      "risk-based security controls.",
    ],
  },
  {
    id: "s21",
    title: "21. Children's Privacy",
    paragraphs: [
      "The Services are intended primarily for business and professional use. AIVIQONE does not knowingly use non-essential cookies to collect Personal Information from children where prohibited by applicable law.",
      "Where AIVIQONE becomes aware that cookie-related Personal Information has been collected from a child in violation of applicable legal requirements, commercially reasonable steps shall be taken to delete such information, subject to applicable law.",
      "Parents or legal guardians who believe that a child has provided Personal Information through the Services are encouraged to contact AIVIQONE using the contact information provided in this Cookie Policy.",
    ],
  },
  {
    id: "s22",
    title: "22. Data Protection and Security",
    paragraphs: [
      "Cookie-related information is protected using commercially reasonable administrative, technical, organizational, and physical safeguards designed to protect against:",
    ],
    bullets: [
      "unauthorized access;",
      "unauthorized disclosure;",
      "alteration;",
      "accidental loss;",
      "misuse;",
      "unlawful destruction;",
      "cybersecurity threats.",
    ],
    subsections: [
      {
        id: "s22-responsibility",
        title: "User Responsibility",
        paragraphs: [
          "While AIVIQONE continually works to protect information processed through cookies and similar technologies, no internet transmission or electronic storage system can be guaranteed to be completely secure. Users remain responsible for maintaining the security of their own devices, browsers, passwords, and network connections.",
        ],
      },
    ],
  },
  {
    id: "s23",
    title: "23. Cookies and Personal Information",
    paragraphs: [
      "Certain cookies may be linked with Personal Information where necessary to provide the Services. Where cookies are associated with identifiable individuals, AIVIQONE processes such information in accordance with: this Cookie Policy; the Privacy Policy; applicable data protection laws; and applicable contractual obligations.",
      "The use of cookies does not expand AIVIQONE's rights to process Personal Information beyond those described in the Privacy Policy or required by applicable law.",
    ],
  },
  {
    id: "s24",
    title: "24. Third-Party Services",
    subsections: [
      {
        id: "s24-1",
        title: "24.1 Integration with Third-Party Services",
        paragraphs: [
          "The Services may integrate with independent third-party products, platforms, software, or services that may use cookies or similar tracking technologies in connection with their own functionality. Such third-party services may include, without limitation:",
        ],
        bullets: [
          "Cloud Infrastructure Providers;",
          "Payment Gateways;",
          "Identity and Authentication Providers;",
          "Analytics Platforms;",
          "Customer Support Platforms;",
          "Email Delivery Services;",
          "Content Delivery Networks (CDNs);",
          "Video Hosting Providers;",
          "Mapping Services;",
          "Communication Platforms;",
          "Customer Relationship Management Integrations;",
          "Artificial Intelligence Service Providers;",
          "Security Monitoring Services.",
        ],
      },
      {
        id: "s24-2",
        title: "24.2 Independent Data Processing",
        paragraphs: [
          "Any collection, storage, processing, or transfer of information by independent third-party providers shall be governed by the respective privacy policies, cookie policies, and contractual terms of such providers. AIVIQONE does not own, operate, or control the internal cookie practices of independent third parties.",
        ],
      },
      {
        id: "s24-3",
        title: "24.3 Third-Party Responsibility",
        paragraphs: [
          "To the maximum extent permitted by applicable law, AIVIQONE shall not be responsible for:",
        ],
        bullets: [
          "(a) the privacy practices of third-party providers;",
          "(b) cookies placed independently by third parties;",
          "(c) changes made to third-party cookie technologies;",
          "(d) security incidents occurring solely within third-party systems;",
          "(e) modifications to third-party privacy practices after integration with the Services.",
        ],
      },
    ],
  },
  {
    id: "s25",
    title: "25. Analytics Providers",
    paragraphs: [
      "AIVIQONE may use internal or external analytics technologies to understand how the Services are used and to improve performance, usability, reliability, and security. Analytics technologies may collect information relating to:",
    ],
    bullets: [
      "device type;",
      "browser type;",
      "operating system;",
      "pages visited;",
      "navigation paths;",
      "feature usage;",
      "session duration;",
      "error reports;",
      "performance metrics;",
      "approximate geographic region;",
      "referral sources.",
    ],
    subsections: [
      {
        id: "s25-form",
        title: "Aggregation & De-Identification",
        paragraphs: [
          "Analytics information is generally processed in aggregated, statistical, or de-identified form where reasonably practicable.",
        ],
      },
    ],
  },
  {
    id: "s26",
    title: "26. Security Monitoring Cookies",
    paragraphs: [
      "To protect the Services, AIVIQONE may use cookies or similar technologies for legitimate cybersecurity purposes, including:",
    ],
    bullets: [
      "detecting malicious activity;",
      "identifying suspicious login attempts;",
      "preventing account takeover;",
      "recognizing trusted devices;",
      "validating authenticated sessions;",
      "mitigating automated attacks;",
      "monitoring infrastructure security;",
      "supporting incident response.",
    ],
  },
  {
    id: "s27",
    title: "27. Changes to This Cookie Policy",
    subsections: [
      {
        id: "s27-1",
        title: "27.1 Right to Modify",
        paragraphs: [
          "AIVIQONE reserves the right to amend, revise, replace, supplement, or otherwise modify this Cookie Policy at any time to reflect: changes in applicable law; regulatory guidance; technological developments; operational requirements; security enhancements; business practices; and product updates.",
        ],
      },
      {
        id: "s27-2",
        title: "27.2 Notification",
        paragraphs: [
          "Where required by applicable law, Users shall be notified of material changes through one or more of the following methods:",
        ],
        bullets: [
          "Website notification;",
          "Customer Dashboard;",
          "Email notification;",
          "Cookie Consent Banner;",
          "In-Application Notice;",
          "Other reasonable electronic communication.",
        ],
      },
    ],
  },
  {
    id: "s28",
    title: "28. User Rights",
    paragraphs: [
      "Depending upon the User's jurisdiction and applicable law, Users may have rights relating to cookie-based processing of Personal Information, including the right to:",
    ],
    bullets: [
      "receive information regarding cookies;",
      "withdraw consent;",
      "request access to Personal Information;",
      "request correction of inaccurate information;",
      "request deletion of Personal Information;",
      "request restriction of processing;",
      "object to certain categories of processing;",
      "request data portability where applicable;",
      "lodge complaints with the appropriate supervisory authority.",
    ],
  },
  {
    id: "s29",
    title: "29. Disclaimer",
    paragraphs: [
      "Cookies and similar technologies improve the operation of the Services but cannot eliminate all technical, operational, or cybersecurity risks. Accordingly, AIVIQONE does not warrant that:",
    ],
    bullets: [
      "(a) all cookies will function without interruption;",
      "(b) cookies will always remain compatible with every browser or device;",
      "(c) third-party cookies will remain available;",
      "(d) cookie-dependent functionality will operate continuously without maintenance or interruption.",
    ],
    subsections: [
      {
        id: "s29-basis",
        title: "As-Is Provision",
        paragraphs: [
          'To the maximum extent permitted by applicable law, the Services and associated cookie technologies are provided on an "AS IS" and "AS AVAILABLE" basis.',
        ],
      },
    ],
  },
  {
    id: "s30",
    title: "30. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, AIVIQONE shall not be liable for any loss, damage, interruption, or inconvenience arising solely from:",
    ],
    bullets: [
      "browser settings;",
      "deletion of cookies by the User;",
      "third-party cookie technologies;",
      "browser incompatibility;",
      "device configuration;",
      "internet connectivity issues;",
      "restrictions imposed by browser vendors;",
      "user refusal of non-essential cookies;",
      "failures attributable to third-party systems beyond AIVIQONE's reasonable control.",
    ],
  },
  {
    id: "s31",
    title: "31. Compliance with Applicable Law",
    paragraphs: [
      "AIVIQONE endeavors to implement cookie practices in accordance with applicable laws and regulations, which may include, where relevant:",
    ],
    bullets: [
      "The Digital Personal Data Protection Act, 2023 (India);",
      "The Information Technology Act, 2000 (India);",
      "Applicable Information Technology Rules;",
      "Consumer protection laws;",
      "Telecommunications regulations;",
      "International privacy frameworks where contractually or legally applicable.",
    ],
  },
  {
    id: "s32",
    title: "32. Governing Law",
    paragraphs: [
      "This Cookie Policy shall be governed by and construed in accordance with the laws of the Republic of India, without regard to conflict of law principles.",
      "Subject to applicable dispute resolution provisions, the courts located in New Delhi, India, shall have exclusive jurisdiction over disputes arising from or relating to this Cookie Policy.",
    ],
  },
  {
    id: "s33",
    title: "33. Interpretation",
    paragraphs: [
      "Unless the context otherwise requires:",
    ],
    bullets: [
      "(a) words importing the singular include the plural and vice versa;",
      "(b) words importing any gender include every gender;",
      "(c) the words \"including\", \"include\", \"such as\", and similar expressions shall be construed as meaning \"including without limitation\";",
      "(d) references to statutes include amendments, modifications, reenactments, subordinate legislation, and successor legislation;",
      "(e) references to \"writing\" include legally recognized electronic communications.",
    ],
  },
  {
    id: "s34",
    title: "34. Relationship with Other Legal Documents",
    paragraphs: [
      "This Cookie Policy should be read together with, and forms an integral part of, the following legal documents published by AIVIQONE, where applicable:",
    ],
    bullets: [
      "Privacy Policy;",
      "Terms of Service;",
      "Acceptable Use Policy;",
      "Refund & Cancellation Policy;",
      "Data Processing Addendum (DPA);",
      "Service Level Agreement (SLA);",
      "Enterprise Agreements;",
      "Any additional legal notices incorporated by reference.",
    ],
    subsections: [
      {
        id: "s34-prevail",
        title: "Order of Precedence",
        paragraphs: [
          "In the event of any inconsistency between this Cookie Policy and another applicable agreement executed specifically with a Customer, the terms of that specific agreement shall prevail to the extent of such inconsistency.",
        ],
      },
    ],
  },
  {
    id: "s35",
    title: "35. Electronic Communications",
    paragraphs: [
      "By accessing or using the Services, Users acknowledge and agree that communications relating to this Cookie Policy may be provided electronically, including through:",
    ],
    bullets: [
      "Website notices;",
      "Cookie consent banners;",
      "Customer Dashboard;",
      "Email notifications;",
      "In-application messages;",
      "Other legally recognized electronic communication methods.",
    ],
  },
  {
    id: "s36",
    title: "36. Severability",
    paragraphs: [
      "If any provision of this Cookie Policy is held to be invalid, unlawful, void, or unenforceable by a court or competent authority:",
    ],
    bullets: [
      "(a) such provision shall be interpreted or modified to the minimum extent necessary to make it enforceable while preserving its original intent;",
      "(b) if modification is not possible, such provision shall be deemed severed;",
      "(c) the remaining provisions shall remain valid, enforceable, and continue in full force and effect.",
    ],
  },
  {
    id: "s37",
    title: "37. Waiver",
    paragraphs: [
      "No delay or failure by AIVIQONE in exercising any right or remedy under this Cookie Policy shall constitute a waiver of such right or remedy. Any waiver shall:",
    ],
    bullets: [
      "(a) be in writing;",
      "(b) be signed by an authorized representative of AIVIQONE; and",
      "(c) apply only to the specific matter expressly identified.",
    ],
    subsections: [
      {
        id: "s37-future",
        title: "Future Exercise",
        paragraphs: [
          "No single or partial exercise of any right shall prevent the future exercise of that or any other right.",
        ],
      },
    ],
  },
  {
    id: "s38",
    title: "38. Contact Information",
    paragraphs: [
      "For any questions, requests, or concerns regarding this Cookie Policy or AIVIQONE's use of cookies and similar technologies, please contact:",
      "AIVIQONE Technologies Pvt. Ltd.",
      "General Support: hello@aiviqone.com",
      "Privacy Officer: hello@aiviqone.com",
      "Legal Department: hello@aiviqone.com",
      "Website: https://www.aiviqone.com",
      "Business Hours: Monday to Friday, excluding public holidays, unless otherwise notified.",
    ],
  },
  {
    id: "s39",
    title: "39. Version History",
    paragraphs: [
      "Version 1.0 | Effective Date: 03 September 2026 | Description: Initial Release",
      "AIVIQONE may update this Cookie Policy from time to time. The latest version will always be made available through the official website, and the \"Last Updated\" date will indicate when changes became effective.",
    ],
  },
  {
    id: "s40",
    title: "40. Final Acknowledgement",
    paragraphs: [
      "BY ACCESSING OR USING THE SERVICES, THE USER ACKNOWLEDGES THAT:",
    ],
    bullets: [
      "(a) THE USER HAS READ THIS COOKIE POLICY;",
      "(b) THE USER UNDERSTANDS HOW COOKIES AND SIMILAR TECHNOLOGIES ARE USED;",
      "(c) WHERE REQUIRED BY APPLICABLE LAW, THE USER HAS BEEN PROVIDED WITH THE OPPORTUNITY TO ACCEPT, REJECT, OR MANAGE NON-ESSENTIAL COOKIES;",
      "(d) THE USER UNDERSTANDS THAT CERTAIN ESSENTIAL COOKIES ARE NECESSARY FOR THE OPERATION, SECURITY, AND FUNCTIONALITY OF THE SERVICES;",
      "(e) THE USER AGREES THAT THE USE OF THE SERVICES IS SUBJECT TO THIS COOKIE POLICY, THE PRIVACY POLICY, AND THE TERMS OF SERVICE.",
    ],
  },
  {
    id: "s41",
    title: "41. Effective Date",
    paragraphs: [
      "This Cookie Policy shall become effective on the date specified at the beginning of this document and shall remain in force until amended, replaced, or withdrawn by AIVIQONE. Continued access to or use of the Services after any updated version becomes effective shall constitute acceptance of the revised Cookie Policy to the extent permitted by applicable law.",
    ],
    subsections: [
      {
        id: "s41-meta",
        title: "Document Specifications",
        bullets: [
          "Document Title: Cookie Policy",
          "Company: AIVIQONE Technologies Pvt. Ltd.",
          "Document Version: 1.0",
          "Status: Approved for Publication (Subject to completion of company-specific information)",
          "Document Classification: Public Legal Document",
          "Copyright © 2026 AIVIQONE Technologies Pvt. Ltd. All Rights Reserved.",
        ],
      },
    ],
  },
];
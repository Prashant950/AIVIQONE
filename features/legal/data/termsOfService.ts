export type TermsSubsection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TermsSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: TermsSubsection[];
};

export const termsOfServiceMeta = {
  company: "AIVIQONE Technologies Pvt. Ltd.",
  version: "1.0",
  effectiveDate: "03 September 2026",
  lastUpdated: "03 September 2026",
  documentTitle: "Terms of Service",
  status: "Approved for Publication",
  classification: "Public Legal Document",
  copyright: "Copyright © 2026 AIVIQONE Technologies Pvt. Ltd. All Rights Reserved.",
};

export const termsHighlights = [
  {
    key: "license",
    title: "Commercial SaaS License",
    description: "Limited, non-exclusive, revocable license for authorized internal business use.",
  },
  {
    key: "ownership",
    title: "Customer Data Ownership",
    description: "You retain 100% full ownership, title, and intellectual property rights in your customer records.",
  },
  {
    key: "enterprise",
    title: "Enterprise Governance",
    description: "Role-based access controls, administrative auditing, and multi-factor authentication enforcement.",
  },
  {
    key: "ai",
    title: "Responsible AI & APIs",
    description: "Encrypted processing with strict tenant isolation and no unauthorized model training on CRM data.",
  },
  {
    key: "security",
    title: "Security & Confidentiality",
    description: "Commercial-grade encryption, five-year confidentiality covenants, and proactive fraud prevention.",
  },
  {
    key: "arbitration",
    title: "Binding Legal Framework",
    description: "Governed under Indian law with formal dispute resolution and Arbitration Act 1996 seat in New Delhi.",
  },
];

export const termsOfServiceSections: TermsSection[] = [
  {
    id: "s1",
    title: "1. Preamble",
    subsections: [
      {
        id: "s1-1",
        title: "1.1 Platform Scope",
        paragraphs: [
          "AIVIQONE develops, owns, licenses, operates, and provides cloud-based software solutions, including but not limited to Customer Relationship Management (CRM) software, Artificial Intelligence (AI) features, workflow automation, business communication services, APIs, dashboards, analytics, reporting systems, customer support tools, integrations, and any additional software products, modules, or digital services introduced from time to time.",
        ],
      },
      {
        id: "s1-2",
        title: "1.2 Legal Framework",
        paragraphs: [
          "These Terms establish the legal rights, duties, obligations, responsibilities, liabilities, limitations, and remedies governing the relationship between AIVIQONE and every User of the Services.",
        ],
      },
      {
        id: "s1-3",
        title: "1.3 Voluntary Acceptance",
        paragraphs: [
          "By accessing, browsing, registering for, subscribing to, purchasing, integrating with, downloading, installing, or otherwise using any portion of the Services, the User expressly acknowledges that the User has carefully read, understood, and voluntarily agreed to be legally bound by these Terms, together with all policies incorporated herein by reference, including but not limited to the Privacy Policy, Cookie Policy, Refund Policy, Acceptable Use Policy, Data Processing Addendum (where applicable), and any other policy published by AIVIQONE.",
        ],
      },
      {
        id: "s1-4",
        title: "1.4 Non-Agreement Consequence",
        paragraphs: [
          "If the User does not agree to these Terms in their entirety, the User shall immediately discontinue all access to and use of the Services.",
        ],
      },
    ],
  },
  {
    id: "s2",
    title: "2. Definitions",
    paragraphs: [
      "Unless the context otherwise requires, the following terms shall have the meanings assigned below.",
    ],
    subsections: [
      { id: "s2-1", title: '2.1 "Account"', paragraphs: ['"Account" means the unique account created by or on behalf of a User for the purpose of accessing, managing, or using the Services.'] },
      { id: "s2-2", title: '2.2 "Affiliate"', paragraphs: ['"Affiliate" means any entity that directly or indirectly controls, is controlled by, or is under common control with AIVIQONE. For the purposes of this definition, "control" means the ownership of more than fifty percent (50%) of the voting rights or the power to direct management and policies.'] },
      { id: "s2-3", title: '2.3 "Authorized User"', paragraphs: ['"Authorized User" means any employee, contractor, consultant, representative, agent, or other individual authorized by a Customer to access or use the Services under the Customer\'s subscription.'] },
      { id: "s2-4", title: '2.4 "Customer Data"', paragraphs: ['"Customer Data" means all data, records, documents, files, contacts, communications, databases, notes, attachments, messages, reports, configurations, metadata, images, videos, audio recordings, and other information uploaded, transmitted, stored, generated, or otherwise processed by or on behalf of the Customer through the Services. Customer Data shall at all times remain the property of the Customer, subject to the limited rights expressly granted to AIVIQONE under these Terms for the sole purpose of providing, maintaining, securing, improving, and supporting the Services.'] },
      { id: "s2-5", title: '2.5 "Confidential Information"', paragraphs: ['"Confidential Information" means any non-public information disclosed by either party, whether oral, written, electronic, visual, or in any other form, including but not limited to source code, object code, software architecture, algorithms, technical documentation, APIs, business strategies, financial information, pricing, product roadmaps, customer lists, security practices, trade secrets, research, designs, inventions, proprietary know-how, and all other information designated as confidential or which reasonably ought to be understood to be confidential.'] },
      { id: "s2-6", title: '2.6 "Documentation"', paragraphs: ['"Documentation" means any manuals, technical specifications, user guides, API references, implementation guides, knowledge base articles, tutorials, or instructional materials made available by AIVIQONE relating to the Services.'] },
      { id: "s2-7", title: '2.7 "Intellectual Property Rights"', paragraphs: ['"Intellectual Property Rights" include all present and future rights relating to copyrights, trademarks, service marks, patents, patent applications, trade secrets, industrial designs, database rights, domain names, software, source code, object code, algorithms, confidential know-how, moral rights, and all other proprietary rights recognized under applicable law anywhere in the world.'] },
      { id: "s2-8", title: '2.8 "Services"', paragraphs: ['"Services" include all software, applications, cloud services, APIs, CRM solutions, AI-powered tools, communication modules, automation systems, dashboards, integrations, websites, documentation, support services, maintenance services, beta features, updates, upgrades, and any other digital products or services offered by AIVIQONE.'] },
      { id: "s2-9", title: '2.9 "Subscription"', paragraphs: ['"Subscription" means the commercial arrangement under which AIVIQONE grants the Customer a limited, non-exclusive, non-transferable, revocable right to access and use the Services in accordance with the selected subscription plan.'] },
      { id: "s2-10", title: '2.10 "Third-Party Services"', paragraphs: ['"Third-Party Services" mean any products, software, APIs, infrastructure, cloud providers, payment gateways, messaging providers, communication providers, analytics providers, authentication providers, or other external services that integrate with or interact with the Services.'] },
    ],
  },
  {
    id: "s3",
    title: "3. Acceptance of Terms",
    subsections: [
      {
        id: "s3-1",
        title: "3.1 Representations and Warranties",
        paragraphs: ["By accessing or using the Services, the User irrevocably represents and warrants that:"],
        bullets: [
          "(a) the User has attained the age of majority and possesses the legal capacity to enter into binding contracts;",
          "(b) the User has read and understood these Terms;",
          "(c) the User agrees to comply with these Terms and all applicable laws;",
          "(d) where the User acts on behalf of an organization, the User possesses full authority to bind such organization to these Terms; and",
          "(e) all information provided to AIVIQONE is true, complete, accurate, and not misleading.",
        ],
      },
      {
        id: "s3-2",
        title: "3.2 Corporate Authority",
        paragraphs: [
          "If any person accesses the Services on behalf of a legal entity, all references to \"User\" shall include such legal entity, and that entity shall be jointly and severally liable for compliance with these Terms.",
        ],
      },
      {
        id: "s3-3",
        title: "3.3 Right to Refuse Access",
        paragraphs: [
          "AIVIQONE reserves the absolute right to refuse access to the Services, suspend any Account, or reject any registration request where it reasonably believes that access would violate applicable law, these Terms, or the legitimate interests of AIVIQONE or its customers.",
        ],
      },
    ],
  },
  {
    id: "s4",
    title: "4. Incorporation of Other Policies",
    paragraphs: [
      "The following documents are hereby incorporated into and form an integral part of these Terms:",
    ],
    bullets: [
      "(a) Privacy Policy;",
      "(b) Cookie Policy;",
      "(c) Refund Policy;",
      "(d) Acceptable Use Policy;",
      "(e) Data Processing Addendum, where applicable;",
      "(f) Service Level Agreement, where applicable;",
      "(g) Any additional legal or operational policy published by AIVIQONE from time to time.",
    ],
    subsections: [
      {
        id: "s4-precedence",
        title: "Order of Precedence",
        paragraphs: [
          "In the event of any conflict between these Terms and a separately executed written Enterprise Agreement signed by both parties, the Enterprise Agreement shall prevail solely to the extent of such conflict.",
        ],
      },
    ],
  },
  {
    id: "s5",
    title: "5. Grant of License",
    subsections: [
      {
        id: "s5-1",
        title: "5.1 Limited License",
        paragraphs: [
          "AIVIQONE grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services solely for your internal business purposes and in accordance with these Terms. This license does not grant you any ownership rights in the AIVIQONE platform, software, technology, trademarks, content, or intellectual property.",
          "Your license to use the Services will end upon termination or suspension of your account or subscription, except where continued access is expressly permitted under these Terms or a separate written agreement.",
        ],
      },
      {
        id: "s5-2",
        title: "5.2 Nature of License",
        paragraphs: ["Unless expressly agreed in writing by AIVIQONE, the license granted under these Terms:"],
        bullets: [
          "(a) is limited to the Subscription purchased by the Customer;",
          "(b) may not be assigned, sublicensed, leased, rented, pledged, transferred, or otherwise made available to any third party;",
          "(c) is revocable by AIVIQONE in accordance with these Terms;",
          "(d) shall automatically terminate upon expiration or termination of the applicable Subscription.",
        ],
      },
      {
        id: "s5-3",
        title: "5.3 Reservation of Rights",
        paragraphs: [
          "All rights not expressly granted under these Terms are hereby reserved exclusively by AIVIQONE. Without limitation, AIVIQONE retains exclusive ownership of Software, Source Code, Object Code, APIs, User Interface, Platform Architecture, AI Models, Documentation, Product Designs, Algorithms, Databases, Trade Secrets, Trademarks, Logos, Domain Names, Business Methods, Platform Improvements, Product Roadmaps, and Future Developments.",
          "No implied license shall arise by implication, estoppel, or otherwise.",
        ],
      },
    ],
  },
  {
    id: "s6",
    title: "6. Eligibility",
    subsections: [
      {
        id: "s6-1",
        title: "6.1 Eligibility Requirements",
        paragraphs: ["The Services may only be used by persons or entities who:"],
        bullets: [
          "(a) possess legal capacity to enter into binding contracts;",
          "(b) are at least eighteen (18) years of age or the age of majority under applicable law;",
          "(c) are not prohibited from receiving software services under applicable laws;",
          "(d) are not listed under any applicable sanctions or restricted party lists;",
          "(e) comply with all applicable export control, anti-money laundering, and anti-corruption laws.",
        ],
      },
      {
        id: "s6-2",
        title: "6.2 Business Users",
        paragraphs: [
          "The Services are designed primarily for business and professional use. Where an individual registers on behalf of a company, partnership, LLP, trust, government authority, educational institution, or any other organization, such individual represents and warrants that he or she possesses full legal authority to bind that organization.",
        ],
      },
      {
        id: "s6-3",
        title: "6.3 Verification",
        paragraphs: ["AIVIQONE reserves the right to verify identity, business registration, ownership of email domains, payment information, government-issued identification, and corporate authorization. Failure to complete verification may result in suspension or rejection of registration."],
      },
    ],
  },
  {
    id: "s7",
    title: "7. Account Registration",
    subsections: [
      {
        id: "s7-1",
        title: "7.1 Registration Details",
        paragraphs: ["Certain Services require the creation of an Account. To register an Account, the User may be required to provide: Full Name, Business Name, Company Name, Email Address, Mobile Number, Billing Information, Organization Details, GST Information (where applicable), and any additional information reasonably requested by AIVIQONE."],
      },
      {
        id: "s7-2",
        title: "7.2 Accuracy of Information",
        paragraphs: ["The User represents and warrants that all registration information shall: (a) be true; (b) be accurate; (c) remain current; (d) not impersonate another person; and (e) not infringe the rights of any third party. The User shall promptly update any information that becomes inaccurate."],
      },
      {
        id: "s7-3",
        title: "7.3 Single Source of Truth",
        paragraphs: ["The Customer acknowledges that information maintained within the Customer Account shall constitute the primary record for administrative purposes. AIVIQONE shall be entitled to rely upon such information unless notified otherwise in writing."],
      },
      {
        id: "s7-4",
        title: "7.4 Refusal of Registration",
        paragraphs: ["AIVIQONE reserves the absolute and unconditional right to refuse any application for registration where false information has been provided, fraud is suspected, platform abuse may occur, security risks exist, or registration may adversely affect the Services."],
      },
    ],
  },
  {
    id: "s8",
    title: "8. Account Security",
    subsections: [
      {
        id: "s8-1",
        title: "8.1 Responsibility for Credentials",
        paragraphs: ["The User shall be solely responsible for maintaining the confidentiality and security of Usernames, Passwords, Authentication Tokens, API Keys, Access Credentials, Security Questions, One-Time Passwords, and Backup Codes."],
      },
      {
        id: "s8-2",
        title: "8.2 Security Measures",
        paragraphs: ["The User agrees to implement reasonable security measures, including Multi-Factor Authentication (MFA), strong passwords, device encryption, antivirus protection, secure internet connections, access control policies, and periodic credential rotation."],
      },
      {
        id: "s8-3",
        title: "8.3 Unauthorized Access Notification",
        paragraphs: ["The User shall immediately notify AIVIQONE upon becoming aware of unauthorized access, credential compromise, security incidents, suspected hacking, unauthorized API usage, or data breaches affecting the Account."],
      },
      {
        id: "s8-4",
        title: "8.4 Liability",
        paragraphs: ["The User shall remain responsible for all activities conducted through the Account until AIVIQONE receives notice of unauthorized use and has had a reasonable opportunity to secure the Account."],
      },
    ],
  },
  {
    id: "s9",
    title: "9. Authorized Users",
    subsections: [
      { id: "s9-1", title: "9.1 Organization Accounts", paragraphs: ["Customers may authorize employees, contractors, consultants, or representatives to access the Services. Each Authorized User shall comply with these Terms."] },
      { id: "s9-2", title: "9.2 Administrative Control", paragraphs: ["The Customer shall be solely responsible for adding users, removing users, assigning permissions, monitoring account activity, and maintaining appropriate access controls."] },
      { id: "s9-3", title: "9.3 Responsibility for Authorized Users", paragraphs: ["The Customer shall remain fully liable for every act or omission of its Authorized Users as though such act or omission had been committed by the Customer itself."] },
      { id: "s9-4", title: "9.4 Removal of Access", paragraphs: ["AIVIQONE reserves the right to suspend or revoke access of any Authorized User where continued access threatens platform security, violates these Terms, or infringes applicable law."] },
    ],
  },
  {
    id: "s10",
    title: "10. Customer Responsibilities",
    paragraphs: ["The Customer acknowledges and agrees that it shall:"],
    bullets: [
      "(a) use the Services only for lawful purposes;",
      "(b) comply with all applicable laws, regulations, and governmental requirements;",
      "(c) obtain all necessary consents before uploading or processing Personal Information belonging to third parties;",
      "(d) ensure that Customer Data is accurate and lawfully obtained;",
      "(e) maintain independent backups of critical business information where appropriate;",
      "(f) monitor Account activity;",
      "(g) promptly report security incidents;",
      "(h) cooperate with reasonable investigations relating to misuse of the Services;",
      "(i) refrain from using the Services in a manner likely to impair, disrupt, damage, overload, or interfere with the operation of the platform.",
    ],
  },
  {
    id: "s11",
    title: "11. Customer Warranties",
    paragraphs: ["The Customer represents, warrants, and undertakes that:"],
    bullets: [
      "(a) it possesses all rights necessary to upload Customer Data;",
      "(b) Customer Data does not infringe the Intellectual Property Rights or privacy rights of any third party;",
      "(c) Customer Data does not contain unlawful, defamatory, fraudulent, malicious, or prohibited material;",
      "(d) use of the Services shall comply with all applicable laws;",
      "(e) Customer Data shall not be uploaded in violation of contractual, statutory, or fiduciary obligations.",
    ],
  },
  {
    id: "s12",
    title: "12. No Unlawful Use",
    paragraphs: [
      "The Services shall not be used for any unlawful, fraudulent, deceptive, abusive, or unauthorized purpose. Any use inconsistent with these Terms shall constitute a material breach entitling AIVIQONE to suspend or terminate access immediately, without prejudice to any other rights or remedies available under applicable law.",
    ],
  },
  {
    id: "s13",
    title: "13. Acceptable Use of the Services",
    subsections: [
      { id: "s13-1", title: "13.1 Lawful Use", paragraphs: ["The Customer shall access and use the Services strictly in accordance with these Terms, all applicable laws, and industry standards, and shall not use the Services for any unlawful, fraudulent, or deceptive purpose."] },
      { id: "s13-2", title: "13.2 Responsible Use", paragraphs: ["The Customer agrees to use the Services in a manner that preserves the integrity of the platform, does not adversely affect other users, and does not expose AIVIQONE to operational or cybersecurity risks."] },
      { id: "s13-3", title: "13.3 Compliance Obligations", paragraphs: ["The Customer shall remain solely responsible for ensuring that its use of the Services complies with all applicable privacy, consumer protection, telecommunications, intellectual property, anti-spam, and export control laws."] },
    ],
  },
  {
    id: "s14",
    title: "14. Prohibited Activities",
    paragraphs: [
      "Without limiting any other provision of these Terms, the Customer shall not, directly or indirectly, engage in any of the following prohibited activities:",
    ],
    subsections: [
      { id: "s14-1", title: "14.1 Illegal Activities", paragraphs: ["Violating any applicable law, committing fraud, facilitating money laundering, financing terrorism, impersonating others, distributing illegal content, or conducting phishing/social engineering attacks."] },
      { id: "s14-2", title: "14.2 Platform Abuse", paragraphs: ["Attempting unauthorized access, circumventing security mechanisms, scanning without permission, introducing malware/ransomware/viruses, conducting DoS/DDoS attacks, or interfering with infrastructure."] },
      { id: "s14-3", title: "14.3 Unauthorized Access", paragraphs: ["Accessing another customer's Account, bypassing authentication, sharing credentials with unauthorized persons, using stolen credentials, or attempting privilege escalation."] },
      { id: "s14-4", title: "14.4 Reverse Engineering", paragraphs: ["Reverse engineering, decompiling, disassembling, modifying, adapting, translating, copying, replicating, cloning, mirroring, or attempting to discover source code or internal logic."] },
      { id: "s14-5", title: "14.5 Intellectual Property Violations", paragraphs: ["Removing copyright notices, proprietary marks, copying Documentation, redistributing or reselling software without authorized partner agreements."] },
      { id: "s14-6", title: "14.6 Automated Abuse", paragraphs: ["Using bots, crawlers, scrapers, or automation scripts to overload the Services, extract databases, bypass usage limits, or manipulate analytics."] },
      { id: "s14-7", title: "14.7 Spam and Unsolicited Communications", paragraphs: ["Sending unsolicited commercial messages, spam, fraudulent marketing campaigns, or violating telecommunication anti-spam regulations."] },
      { id: "s14-8", title: "14.8 Harmful Content", paragraphs: ["Uploading or storing content that is unlawful, obscene, defamatory, harassing, discriminatory, hateful, or promotes criminal activity."] },
    ],
  },
  {
    id: "s15",
    title: "15. Customer Data",
    subsections: [
      { id: "s15-1", title: "15.1 Ownership", paragraphs: ["As between AIVIQONE and the Customer, the Customer shall retain all right, title, and interest in and to Customer Data. Nothing contained in these Terms shall transfer ownership of Customer Data to AIVIQONE."] },
      { id: "s15-2", title: "15.2 Limited License", paragraphs: ["The Customer grants AIVIQONE a worldwide, non-exclusive, royalty-free, limited license to host, store, process, transmit, and display Customer Data solely to provide, maintain, secure, and improve the Services."] },
      { id: "s15-3", title: "15.3 Responsibility for Customer Data", paragraphs: ["The Customer shall be solely responsible for the legality, accuracy, required consents, and independent backup of all uploaded Customer Data."] },
      { id: "s15-4", title: "15.4 Data Integrity", paragraphs: ["AIVIQONE acts as a technology service provider and is not responsible for inaccurate records, duplicate entries, or user-generated errors."] },
    ],
  },
  {
    id: "s16",
    title: "16. User Content",
    subsections: [
      { id: "s16-1", title: "16.1 Responsibility", paragraphs: ["Users remain solely responsible for all content uploaded, stored, transmitted, generated, or published using the Services."] },
      { id: "s16-2", title: "16.2 Monitoring", paragraphs: ["AIVIQONE is under no general obligation to monitor content, but reserves the right to investigate abuse, comply with lawful governmental requests, and enforce these Terms."] },
      { id: "s16-3", title: "16.3 Removal of Content", paragraphs: ["AIVIQONE reserves the right to remove, quarantine, or restrict access to any content that violates these Terms, infringes third-party rights, or creates legal liability."] },
    ],
  },
  {
    id: "s17",
    title: "17. Data Backups",
    paragraphs: [
      "While AIVIQONE maintains routine operational backups for business continuity, maintaining independent backups of critical business information remains the Customer's responsibility.",
    ],
  },
  {
    id: "s18",
    title: "18. Reservation of Rights",
    paragraphs: [
      "AIVIQONE reserves the right to investigate, suspend, restrict, or terminate any activity, Account, Customer Data, or User Content that violates these Terms or threatens platform integrity.",
    ],
  },
  {
    id: "s19",
    title: "19. Subscription Plans",
    subsections: [
      { id: "s19-1", title: "19.1 Subscription-Based Services", paragraphs: ["Access to specific features, storage limits, AI tools, APIs, and communication modules is governed by the selected Subscription Plan (Free Trial, Monthly, Annual, Enterprise, or Custom Agreements)."] },
      { id: "s19-2", title: "19.2 Subscription Activation", paragraphs: ["A Subscription becomes effective upon registration, acceptance of Terms, verification, and payment receipt."] },
      { id: "s19-3", title: "19.3 Subscription Term", paragraphs: ["Each Subscription remains valid for the selected billing cycle and automatically renews unless cancelled or terminated in accordance with these Terms."] },
    ],
  },
  {
    id: "s20",
    title: "20. Fees and Charges",
    subsections: [
      { id: "s20-1", title: "20.1 Fees", paragraphs: ["The Customer agrees to pay all applicable Subscription Fees, Usage Charges, AI Consumption Charges, API Fees, Communication Charges, Professional Service Fees, and Taxes."] },
      { id: "s20-2", title: "20.2 Pricing Changes", paragraphs: ["AIVIQONE reserves the right to revise pricing. Changes do not affect active prepaid periods until the subsequent renewal cycle."] },
      { id: "s20-3", title: "20.3 Currency", paragraphs: ["Fees are charged in the currency displayed at purchase. Any bank currency conversion fees are borne solely by the Customer."] },
    ],
  },
  {
    id: "s21",
    title: "21. Billing",
    subsections: [
      { id: "s21-1", title: "21.1 Billing Cycle", paragraphs: ["Billing may occur Monthly, Quarterly, Half-Yearly, Annually, or Multi-Year as specified in the plan."] },
      { id: "s21-2", title: "21.2 Automatic Renewal", paragraphs: ["Eligible subscriptions automatically renew unless cancelled prior to the renewal date, authorizing charges to the designated payment method."] },
      { id: "s21-3", title: "21.3 Billing Information", paragraphs: ["The Customer shall maintain accurate billing names, addresses, GST details, and payment credentials."] },
      { id: "s21-4", title: "21.4 Invoice Delivery", paragraphs: ["Invoices are delivered electronically through the Customer Dashboard, email, or billing portal."] },
    ],
  },
  {
    id: "s22",
    title: "22. Payment Terms",
    subsections: [
      { id: "s22-1", title: "22.1 Due Date", paragraphs: ["Payments become due immediately upon issuance of the invoice or on the designated due date."] },
      { id: "s22-2", title: "22.2 Accepted Payment Methods", paragraphs: ["Credit Cards, Debit Cards, UPI, Net Banking, Bank Transfers, and authorized digital gateways."] },
      { id: "s22-3", title: "22.3 Payment Failure", paragraphs: ["If payment fails or is reversed, AIVIQONE may suspend access, restrict premium features, recover outstanding balances, and initiate collection procedures."] },
      { id: "s22-4", title: "22.4 Late Payments", paragraphs: ["AIVIQONE reserves the right to suspend Services where undisputed payments remain overdue beyond the grace period."] },
    ],
  },
  {
    id: "s23",
    title: "23. Taxes",
    subsections: [
      { id: "s23-1", title: "23.1 Applicable Taxes", paragraphs: ["All statutory taxes, including GST, VAT, and duties, shall be payable by the Customer unless expressly stated otherwise."] },
      { id: "s23-2", title: "23.2 Tax Documentation", paragraphs: ["Customers must provide valid GSTIN or tax identification numbers for tax-compliant invoicing."] },
    ],
  },
  {
    id: "s24",
    title: "24. Free Trials",
    subsections: [
      { id: "s24-1", title: "24.1 Availability", paragraphs: ["AIVIQONE may offer Free Trial access under terms and durations determined exclusively by the Company."] },
      { id: "s24-2", title: "24.2 Trial Limitations", paragraphs: ["Usage caps, AI limits, storage quotas, and support tiers may apply during trial periods."] },
      { id: "s24-3", title: "24.3 Conversion", paragraphs: ["Free trials do not automatically convert into paid subscriptions without affirmative Customer purchase."] },
    ],
  },
  {
    id: "s25",
    title: "25. Refund Policy",
    subsections: [
      { id: "s25-1", title: "25.1 General Principle", paragraphs: ["Except where required by applicable law or agreed in writing, payments made to AIVIQONE are non-refundable."] },
      { id: "s25-2", title: "25.2 Exceptions", paragraphs: ["Refunds are governed strictly by our published Refund & Cancellation Policy."] },
      { id: "s25-3", title: "25.3 Chargebacks", paragraphs: ["Bad-faith chargebacks may result in account termination, recovery of processing costs, and legal remedies."] },
    ],
  },
  {
    id: "s26",
    title: "26. Promotional Offers",
    paragraphs: [
      "Promotional pricing, discount vouchers, and credits are temporary, non-transferable, cannot be combined unless permitted, and hold no cash value.",
    ],
  },
  {
    id: "s27",
    title: "27. Enterprise Agreements",
    paragraphs: [
      "Where an executed Enterprise Agreement exists, its customized commercial terms shall prevail solely over any inconsistent general provision in these Terms.",
    ],
  },
  {
    id: "s28",
    title: "28. Intellectual Property Rights",
    subsections: [
      { id: "s28-1", title: "28.1 Ownership", paragraphs: ["AIVIQONE remains the exclusive owner of all rights, titles, and interests in the Services, source code, UI, APIs, databases, AI models, algorithms, trademarks, logos, and proprietary frameworks. No IP rights are transferred to the Customer."] },
      { id: "s28-2", title: "28.2 Reservation of Rights", paragraphs: ["All rights not expressly granted are strictly reserved by AIVIQONE."] },
      { id: "s28-3", title: "28.3 Protection of Intellectual Property", paragraphs: ["The Customer shall take reasonable measures to prevent unauthorized copying, reverse engineering, or infringement."] },
    ],
  },
  {
    id: "s29",
    title: "29. Restrictions on Use",
    paragraphs: ["Except as expressly permitted, the Customer shall not:"],
    bullets: [
      "(a) copy the Services;",
      "(b) reproduce the Services;",
      "(c) modify the Services;",
      "(d) translate the Services;",
      "(e) adapt the Services;",
      "(f) distribute the Services;",
      "(g) sublicense the Services;",
      "(h) rent or lease the Services;",
      "(i) assign the Services;",
      "(j) commercially exploit the Services;",
      "(k) create derivative works based upon the Services;",
      "(l) remove proprietary notices;",
      "(m) circumvent licensing mechanisms;",
      "(n) interfere with security controls;",
      "(o) attempt to discover source code or proprietary architecture.",
    ],
  },
  {
    id: "s30",
    title: "30. Feedback",
    subsections: [
      { id: "s30-1", title: "30.1 Feedback License", paragraphs: ["Customer Feedback grants AIVIQONE a perpetual, irrevocable, worldwide, royalty-free license to use, commercialize, and implement such ideas without restriction or compensation."] },
      { id: "s30-2", title: "30.2 No Confidentiality", paragraphs: ["Feedback submitted shall not be treated as Customer Confidential Information."] },
    ],
  },
  {
    id: "s31",
    title: "31. Artificial Intelligence and Automated Features",
    paragraphs: [
      "AIVIQONE may provide artificial intelligence, machine learning, automation, analytics, recommendations, summarization, classification, or other automated features as part of the Services. Depending on the feature used, information processed by these features may include CRM information, customer-provided content, communication data, usage information, or other information necessary to provide the requested functionality.",
      "AIVIQONE will use such information only as necessary to provide, maintain, secure, improve, or develop the relevant Services, subject to applicable law and contractual obligations. Where AIVIQONE uses third-party AI or machine-learning service providers, information may be processed by those providers solely as necessary to provide the relevant functionality and subject to applicable contractual, security, and privacy safeguards.",
      "AIVIQONE will not intentionally use customer-provided CRM or communication content to train publicly available AI models where such use is prohibited by the applicable agreement with the customer or the applicable service provider. Customers should review the specific terms of any AI-enabled feature before submitting sensitive or confidential information through that feature.",
    ],
  },
  {
    id: "s32",
    title: "32. Application Programming Interfaces (APIs)",
    subsections: [
      { id: "s32-1", title: "32.1 API Access", paragraphs: ["API access requires active subscriptions, authentication tokens, rate-limit compliance, and adherence to API Documentation."] },
      { id: "s32-2", title: "32.2 API Restrictions", paragraphs: ["Customers shall not exceed rate limits, share secret keys, perform automated endpoint abuse, or attempt unauthorized access."] },
      { id: "s32-3", title: "32.3 API Changes", paragraphs: ["AIVIQONE reserves the right to evolve endpoints, modify authentication, and deprecate legacy APIs with reasonable notice."] },
    ],
  },
  {
    id: "s33",
    title: "33. Third-Party Services and Service Providers",
    paragraphs: [
      "AIVIQONE may use third-party service providers to operate, maintain, secure, and improve the Services. Depending on the features used by a customer, these providers may include services for:",
    ],
    bullets: [
      "Cloud hosting and infrastructure;",
      "Database and data storage;",
      "Authentication and security;",
      "Email and transactional communications;",
      "WhatsApp and business communication services;",
      "Voice and telephony services;",
      "Payment processing and billing;",
      "Analytics and performance monitoring;",
      "Customer support;",
      "Artificial intelligence and automation; and",
      "Other technical services required to operate the AIVIQONE platform.",
    ],
  },
  {
    id: "s34",
    title: "34. WhatsApp and Business Communication Data",
    paragraphs: [
      "Where customers use AIVIQONE's WhatsApp or business communication features, AIVIQONE may process information required to provide those features. Depending on the features used, this may include phone numbers, messages, message delivery status, media attachments, message templates, broadcast logs, and contact metadata.",
      "Customers are responsible for ensuring they have necessary consents and lawful bases to contact individuals. AIVIQONE does not sell WhatsApp communication data or customer CRM records for advertising purposes.",
    ],
  },
  {
    id: "s35",
    title: "35. Future VoIP or Telecommunication Services",
    paragraphs: [
      "If AIVIQONE introduces VoIP, cloud telephony, call masking, virtual numbers, SIP, or call recording, such services shall additionally comply with applicable telecommunications laws, licensing, call recording disclosures, and lawful interception regulations.",
    ],
  },
  {
    id: "s36",
    title: "36. Open-Source Software",
    paragraphs: [
      "Components distributed under open-source licenses remain governed by their respective license agreements. Open-source licenses prevail solely for their specific software components.",
    ],
  },
  {
    id: "s37",
    title: "37. Trademarks",
    paragraphs: [
      '"AIVIQONE", the AIVIQONE logo, product names, and branding elements are proprietary trademarks of AIVIQONE Technologies Pvt. Ltd. Unauthorized use or confusingly similar registrations are strictly prohibited.',
    ],
  },
  {
    id: "s38",
    title: "38. Confidentiality",
    subsections: [
      { id: "s38-1", title: "38.1 Scope", paragraphs: ["Includes source code, architectures, algorithms, pricing, customer data, security practices, and proprietary business roadmaps."] },
      { id: "s38-2", title: "38.2 Obligations", paragraphs: ["Strict confidentiality, need-to-know access restriction, and implementation of reasonable organizational and technical safeguards."] },
      { id: "s38-3", title: "38.3 Exceptions", paragraphs: ["Excludes publicly available information, independently developed data, or legally compelled disclosures with prior notice."] },
      { id: "s38-4", title: "38.4 Survival", paragraphs: ["Confidentiality covenants survive termination for a period of five (5) years, and indefinitely for trade secrets."] },
    ],
  },
  {
    id: "s39",
    title: "39. Data Protection",
    subsections: [
      { id: "s39-1", title: "39.1 General Principles", paragraphs: ["Personal Information is processed in accordance with our Privacy Policy and applicable data protection legislation (DPDPA 2023)."] },
      { id: "s39-2", title: "39.2 Customer Obligations", paragraphs: ["The Customer warrants it has secured all lawful consents and notices required to process data via the platform."] },
      { id: "s39-3", title: "39.3 Data Subject Requests", paragraphs: ["AIVIQONE routes individual data access, deletion, and correction requests to the respective Customer acting as data controller."] },
    ],
  },
  {
    id: "s40",
    title: "40. Information Security",
    paragraphs: [
      "AIVIQONE maintains administrative, technical, organizational, and physical safeguards including encryption in transit, encryption at rest, role-based access control, MFA, security audit logging, and vulnerability management.",
    ],
  },
  {
    id: "s41",
    title: "41. Service Availability",
    subsections: [
      { id: "s41-1", title: "41.1 Availability", paragraphs: ["Commercially reasonable efforts are deployed to ensure high availability, though uninterrupted uptime cannot be guaranteed."] },
      { id: "s41-2", title: "41.2 Planned Maintenance", paragraphs: ["Temporary maintenance windows are conducted with prior notice where practicable."] },
      { id: "s41-3", title: "41.3 Third-Party Dependencies", paragraphs: ["AIVIQONE is not liable for service degradation caused by third-party cloud infrastructure or carrier network failures."] },
    ],
  },
  {
    id: "s42",
    title: "42. Beta Features",
    paragraphs: [
      "Beta, experimental, and preview tools are provided on an 'as-is' basis for evaluation and may be modified or retired without liability.",
    ],
  },
  {
    id: "s43",
    title: "43. Warranties",
    subsections: [
      { id: "s43-1", title: "43.1 Mutual Authority", paragraphs: ["Both parties warrant legal corporate authority to execute and perform these Terms."] },
      { id: "s43-2", title: "43.2 Customer Warranty", paragraphs: ["Customer warrants lawful data ownership and regulatory compliance."] },
      { id: "s43-3", title: "43.3 Company Warranty", paragraphs: ["AIVIQONE warrants providing services in a professional, workmanlike manner consistent with industry standards."] },
    ],
  },
  {
    id: "s44",
    title: "44. Disclaimer of Warranties",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED ON AN 'AS IS', 'AS AVAILABLE', AND 'WITH ALL FAULTS' BASIS. AIVIQONE EXPRESSLY DISCLAIMS ALL WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND CONTINUOUS ERROR-FREE OPERATION.",
    ],
  },
  {
    id: "s45",
    title: "45. Limitation of Liability",
    subsections: [
      { id: "s45-1", title: "45.1 Exclusion of Certain Damages", paragraphs: ["AIVIQONE shall not be liable for indirect, incidental, special, consequential, punitive damages, loss of profits, data loss, or business interruption."] },
      { id: "s45-2", title: "45.2 Aggregate Liability", paragraphs: ["Total aggregate liability arising from these Terms shall not exceed the subscription fees actually paid by the Customer to AIVIQONE during the twelve (12) months preceding the claim."] },
      { id: "s45-3", title: "45.3 Exceptions", paragraphs: ["Nothing limits liability for fraud, willful misconduct, or liabilities that cannot be lawfully excluded under Indian law."] },
    ],
  },
  {
    id: "s46",
    title: "46. Force Majeure",
    paragraphs: [
      "AIVIQONE is not liable for performance delays resulting from acts of God, pandemics, natural disasters, war, cyberattacks, cloud provider disruptions, or governmental embargoes.",
    ],
  },
  {
    id: "s47",
    title: "47. Suspension of Services",
    subsections: [
      { id: "s47-1", title: "47.1 Right to Suspend", paragraphs: ["AIVIQONE may suspend access for security threats, overdue payments, platform abuse, or regulatory compliance."] },
      { id: "s47-2", title: "47.2 Emergency Suspension", paragraphs: ["Immediate suspension may occur without notice to prevent active cyberattacks or fraud."] },
      { id: "s47-3", title: "47.3 Effect", paragraphs: ["Suspension does not waive outstanding payment obligations."] },
    ],
  },
  {
    id: "s48",
    title: "48. Termination",
    subsections: [
      { id: "s48-1", title: "48.1 By Customer", paragraphs: ["Customers may terminate subscriptions via self-serve dashboard cancellation effective at cycle end."] },
      { id: "s48-2", title: "48.2 By Company", paragraphs: ["AIVIQONE may terminate upon written notice for uncured material breach (30-day notice), insolvency, or non-payment."] },
      { id: "s48-3", title: "48.3 Immediate Termination", paragraphs: ["Immediate termination applies for malicious activities, IP infringement, or legal prohibitions."] },
    ],
  },
  {
    id: "s49",
    title: "49. Effect of Termination",
    paragraphs: [
      "Upon termination, licenses cease immediately, outstanding amounts become due, and data is managed according to retention schedules.",
    ],
  },
  {
    id: "s50",
    title: "50. Survival",
    paragraphs: [
      "Clauses concerning Payment, IP, Confidentiality, Disclaimers, Liability Limits, Indemnification, Governing Law, and Arbitration survive termination.",
    ],
  },
  {
    id: "s51",
    title: "51. Indemnification",
    subsections: [
      { id: "s51-1", title: "51.1 Customer Indemnity", paragraphs: ["The Customer shall defend and hold harmless AIVIQONE from third-party claims arising from Customer Data, breach of Terms, or unlawful use."] },
      { id: "s51-2", title: "51.2 Procedure", paragraphs: ["Requires prompt notice, cooperation, and defense authorization."] },
    ],
  },
  {
    id: "s52",
    title: "52. Governing Law",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to conflict of law principles.",
    ],
  },
  {
    id: "s53",
    title: "53. Jurisdiction",
    paragraphs: [
      "Subject to arbitration, courts located in New Delhi, India, have exclusive jurisdiction over all disputes.",
    ],
  },
  {
    id: "s54",
    title: "54. Dispute Resolution",
    subsections: [
      { id: "s54-1", title: "54.1 Good Faith Negotiation", paragraphs: ["Parties shall first attempt amicable negotiation within thirty (30) days of written notice."] },
      { id: "s54-2", title: "54.2 Arbitration", paragraphs: ["Unresolved disputes are resolved by sole arbitrator under Arbitration and Conciliation Act 1996 in New Delhi, India, in English."] },
      { id: "s54-3", title: "54.3 Interim Relief", paragraphs: ["Parties may seek urgent injunctive relief before competent courts for IP or trade secret protection."] },
    ],
  },
  {
    id: "s55",
    title: "55. Compliance with Export Control Laws",
    paragraphs: [
      "Customers warrant compliance with international trade sanctions and export control regulations.",
    ],
  },
  {
    id: "s56",
    title: "56. Anti-Bribery and Anti-Corruption",
    paragraphs: [
      "Both parties commit to strict adherence to anti-corruption, anti-money laundering, and ethical commercial conduct.",
    ],
  },
  {
    id: "s57",
    title: "57. Audit Rights",
    paragraphs: [
      "AIVIQONE reserves reasonable rights to audit licensing and security compliance without unduly disrupting business operations.",
    ],
  },
  {
    id: "s58",
    title: "58. Notices",
    paragraphs: [
      "Notices may be delivered via registered email, customer dashboard, or courier, and are deemed received when electronically transmitted.",
    ],
  },
  {
    id: "s59",
    title: "59. Assignment",
    subsections: [
      { id: "s59-1", title: "59.1 By Company", paragraphs: ["AIVIQONE may assign rights and obligations to affiliates or corporate successors without prior consent."] },
      { id: "s59-2", title: "59.2 By Customer", paragraphs: ["Customer may not assign or transfer subscriptions without prior written consent."] },
    ],
  },
  {
    id: "s60",
    title: "60. Severability",
    paragraphs: [
      "If any clause is held invalid, it shall be modified to minimum extent or severed, leaving remaining provisions in full legal effect.",
    ],
  },
  {
    id: "s61",
    title: "61. Waiver",
    paragraphs: [
      "No failure or delay in exercising rights constitutes a waiver; waivers must be written and signed by authorized representatives.",
    ],
  },
  {
    id: "s62",
    title: "62. Entire Agreement",
    paragraphs: [
      "These Terms, along with incorporated Privacy Policy, Cookie Policy, Refund Policy, and Enterprise Agreements, constitute the entire agreement.",
    ],
  },
  {
    id: "s63",
    title: "63. Electronic Communications",
    paragraphs: [
      "Customers consent to electronic delivery of invoices, legal notices, account alerts, and policy amendments.",
    ],
  },
  {
    id: "s64",
    title: "64. Publicity",
    paragraphs: [
      "AIVIQONE shall not use Customer trademarks or testimonials in marketing without prior written consent.",
    ],
  },
  {
    id: "s65",
    title: "65. Relationship of the Parties",
    paragraphs: [
      "Parties are independent contractors; no partnership, agency, or employment relationship is created.",
    ],
  },
  {
    id: "s66",
    title: "66. No Third-Party Beneficiaries",
    paragraphs: [
      "These Terms exist solely for the benefit of the contracting parties.",
    ],
  },
  {
    id: "s67",
    title: "67. Cumulative Remedies",
    paragraphs: [
      "Remedies under these Terms are cumulative with all legal and equitable rights.",
    ],
  },
  {
    id: "s68",
    title: "68. Headings",
    paragraphs: [
      "Headings are inserted for convenience and do not affect legal interpretation.",
    ],
  },
  {
    id: "s69",
    title: "69. Interpretation",
    paragraphs: [
      "Singular includes plural; 'including' means 'including without limitation'; statutory references include amendments.",
    ],
  },
  {
    id: "s70",
    title: "70. Language",
    paragraphs: [
      "These Terms are executed in English; English text prevails over any translation.",
    ],
  },
  {
    id: "s71",
    title: "71. Contact Information",
    paragraphs: [
      "For questions regarding these Terms, contact:",
      "AIVIQONE Technologies Pvt. Ltd.",
      "General Support: hello@aiviqone.com",
      "Legal Department: hello@aiviqone.com",
      "Website: https://www.aiviqone.com",
      "Business Hours: Monday to Friday, excluding public holidays.",
    ],
  },
  {
    id: "s72",
    title: "72. Version History",
    paragraphs: [
      "Version 1.0 | Effective Date: 03 September 2026 | Description: Initial Release",
    ],
  },
  {
    id: "s73",
    title: "73. Final Acknowledgement",
    paragraphs: [
      "BY ACCESSING, REGISTERING FOR, SUBSCRIBING TO, PURCHASING, OR OTHERWISE USING THE SERVICES, THE CUSTOMER ACKNOWLEDGES AND AGREES THAT:",
    ],
    bullets: [
      "(a) THE CUSTOMER HAS READ THESE TERMS CAREFULLY;",
      "(b) THE CUSTOMER UNDERSTANDS THE LEGAL RIGHTS AND OBLIGATIONS CREATED BY THESE TERMS;",
      "(c) THE CUSTOMER HAS HAD THE OPPORTUNITY TO SEEK INDEPENDENT LEGAL ADVICE BEFORE ACCEPTING THESE TERMS;",
      "(d) THE CUSTOMER VOLUNTARILY AGREES TO BE LEGALLY BOUND BY THESE TERMS;",
      "(e) THE CUSTOMER ACCEPTS THESE TERMS WITHOUT RESERVATION.",
    ],
  },
  {
    id: "s74",
    title: "74. Execution",
    paragraphs: [
      "These Terms shall become legally effective on the earlier of: (a) the date on which the Customer clicks 'I Agree', 'Accept', or similar mechanism; (b) the date on which the Customer creates an Account; (c) the date on which the Customer first accesses or uses the Services; or (d) the effective date specified in any Enterprise Agreement.",
      "No physical signature is required where electronic acceptance is recognized under applicable law.",
    ],
    subsections: [
      {
        id: "s74-meta",
        title: "Document Specifications",
        bullets: [
          "Document Title: Terms of Service",
          "Company: AIVIQONE Technologies Pvt. Ltd.",
          "Document Version: 1.0",
          "Status: Approved for Publication",
          "Document Classification: Public Legal Document",
          "Copyright © 2026 AIVIQONE Technologies Pvt. Ltd. All Rights Reserved.",
        ],
      },
    ],
  },
];

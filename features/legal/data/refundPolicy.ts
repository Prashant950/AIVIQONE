export type RefundSubsection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type RefundSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: RefundSubsection[];
};

export const refundPolicyMeta = {
  company: "AIVIQONE Technologies Pvt. Ltd.",
  version: "1.0",
  effectiveDate: "03 September 2026",
  lastUpdated: "03 September 2026",
  documentTitle: "Refund & Cancellation Policy",
  status: "Approved for Publication",
  classification: "Public Legal Document",
  copyright: "Copyright © 2026 AIVIQONE Technologies Pvt. Ltd. All Rights Reserved.",
};

export const refundHighlights = [
  {
    key: "activation",
    title: "Instant Digital Delivery",
    description: "SaaS CRM and AI offerings are provisioned immediately upon transaction confirmation.",
  },
  {
    key: "cancellation",
    title: "Self-Serve Cancellation",
    description: "Cancel recurring subscriptions at any time via Customer Dashboard to prevent future renewals.",
  },
  {
    key: "transparency",
    title: "Transparent Commercials",
    description: "All setup fees, usage rates, and subscription terms are explicitly detailed prior to checkout.",
  },
  {
    key: "exceptions",
    title: "Fair Exceptional Reviews",
    description: "Duplicate charges or verified technical billing errors are promptly reviewed and refunded.",
  },
  {
    key: "security",
    title: "Dispute & Fraud Protection",
    description: "Direct resolution procedures to prevent unauthorized chargebacks and preserve account standing.",
  },
  {
    key: "governance",
    title: "Arbitration & Legal Standing",
    description: "Governed under the laws of India with fair dispute resolution and binding arbitration.",
  },
];

export const nonRefundableItemsList = [
  "Subscription Fees already billed",
  "Setup Fees & Onboarding Charges",
  "Implementation & Deployment Fees",
  "Professional Service Fees",
  "Technical Consulting Fees",
  "Training Charges & Workshops",
  "Custom Development Charges",
  "API Integration & Webhook Fees",
  "Data Migration Fees",
  "Communication & Telephony Charges",
  "SMS & OTP Broadcast Charges",
  "Voice Calling & VoIP Minutes",
  "WhatsApp Messaging & Meta API Charges",
  "AI Consumption & Token Charges",
  "Third-Party Software Licensing Fees",
  "Domain Registration & DNS Charges",
  "SSL Certificate & Security Assets",
  "Dedicated Cloud Infrastructure Costs",
  "Payment Gateway Processing Fees",
  "Taxes & Statutory Levies remitted to authorities",
];

export const refundPolicySections: RefundSection[] = [
  {
    id: "s1",
    title: "1. Purpose",
    subsections: [
      {
        id: "s1-1",
        title: "1.1 Purpose",
        paragraphs: [
          "The purpose of this Policy is to establish a transparent, fair, commercially reasonable, and legally enforceable framework governing:",
        ],
        bullets: [
          "(a) subscription cancellations;",
          "(b) renewal obligations;",
          "(c) refund eligibility;",
          "(d) non-refundable charges;",
          "(e) exceptional refund requests;",
          "(f) billing disputes;",
          "(g) payment reversals;",
          "(h) account termination consequences; and",
          "(i) the respective rights and obligations of AIVIQONE and the Customer in relation to commercial transactions involving the Services.",
        ],
      },
      {
        id: "s1-2",
        title: "1.2 Scope",
        paragraphs: [
          "This Policy applies to every individual or legal entity that purchases, subscribes to, renews, upgrades, downgrades, accesses, or otherwise uses any paid or unpaid Service provided by AIVIQONE, including but not limited to:",
        ],
        bullets: [
          "SaaS CRM subscriptions;",
          "Artificial Intelligence services;",
          "API subscriptions;",
          "Cloud-hosted software;",
          "Enterprise subscriptions;",
          "Professional services;",
          "Implementation services;",
          "Technical support plans;",
          "Communication services;",
          "Future products introduced by AIVIQONE.",
        ],
      },
    ],
  },
  {
    id: "s2",
    title: "2. Definitions",
    paragraphs: [
      "For purposes of this Policy, the following terms shall have the meanings assigned below.",
    ],
    subsections: [
      {
        id: "s2-1",
        title: '2.1 "Account"',
        paragraphs: [
          '"Account" means the registered customer account created for accessing or using the Services.',
        ],
      },
      {
        id: "s2-2",
        title: '2.2 "Customer"',
        paragraphs: [
          '"Customer" means any individual, company, partnership, LLP, sole proprietorship, governmental authority, educational institution, organization, or other legal entity purchasing or using the Services.',
        ],
      },
      {
        id: "s2-3",
        title: '2.3 "Subscription"',
        paragraphs: [
          '"Subscription" means the paid or unpaid contractual right granted by AIVIQONE permitting access to specified Services during an applicable Subscription Term.',
        ],
      },
      {
        id: "s2-4",
        title: '2.4 "Subscription Fees"',
        paragraphs: [
          '"Subscription Fees" mean all recurring or one-time fees payable for access to the Services, excluding applicable taxes unless expressly stated otherwise.',
        ],
      },
      {
        id: "s2-5",
        title: '2.5 "Billing Cycle"',
        paragraphs: [
          '"Billing Cycle" means the recurring period applicable to a Subscription, including monthly, quarterly, semi-annual, annual, multi-year, or any other commercially agreed billing interval.',
        ],
      },
      {
        id: "s2-6",
        title: '2.6 "Refund"',
        paragraphs: [
          '"Refund" means the repayment of amounts previously received by AIVIQONE and approved in accordance with this Policy or applicable law. Approval of a Refund shall not create any continuing obligation to approve future refund requests.',
        ],
      },
      {
        id: "s2-7",
        title: '2.7 "Cancellation"',
        paragraphs: [
          '"Cancellation" means the voluntary termination or discontinuation of a Subscription by the Customer before renewal or expiration. Cancellation shall not automatically entitle the Customer to a Refund unless expressly provided under this Policy or applicable law.',
        ],
      },
      {
        id: "s2-8",
        title: '2.8 "Renewal"',
        paragraphs: [
          '"Renewal" means the continuation of a Subscription beyond its current Subscription Term, whether automatically or manually.',
        ],
      },
      {
        id: "s2-9",
        title: '2.9 "Business Day"',
        paragraphs: [
          '"Business Day" means any day, other than a Saturday, Sunday, or public holiday, on which commercial banks are generally open for business in New Delhi, India.',
        ],
      },
    ],
  },
  {
    id: "s3",
    title: "3. General Principles",
    subsections: [
      {
        id: "s3-1",
        title: "3.1 Commercial Nature of the Services",
        paragraphs: [
          "The Customer expressly acknowledges that the Services comprise digital products, cloud-hosted software, subscription-based technology services, proprietary intellectual property, implementation services, and other commercially licensed offerings that become available immediately upon activation. Accordingly, the Customer acknowledges that refunds for digital services are fundamentally different from refunds applicable to physical goods.",
        ],
      },
      {
        id: "s3-2",
        title: "3.2 No Automatic Right to Refund",
        paragraphs: [
          "Except where expressly required under applicable law or expressly approved in writing by AIVIQONE, the payment of any Subscription Fee shall not automatically create any right to:",
        ],
        bullets: [
          "(a) a full refund;",
          "(b) a partial refund;",
          "(c) service credits;",
          "(d) monetary compensation; or",
          "(e) reimbursement of third-party expenses.",
        ],
      },
      {
        id: "s3-3",
        title: "3.3 Good Faith Administration",
        paragraphs: [
          "AIVIQONE shall administer this Policy in good faith, consistently, and in a commercially reasonable manner while reserving the right to assess each request on its individual facts and circumstances. Nothing contained herein shall obligate AIVIQONE to approve a request solely because a similar request has previously been approved.",
        ],
      },
    ],
  },
  {
    id: "s4",
    title: "4. Subscription Purchases",
    subsections: [
      {
        id: "s4-1",
        title: "4.1 Binding Purchase",
        paragraphs: [
          "Upon successful completion of a purchase, the Customer enters into a legally binding commercial agreement with AIVIQONE for the selected Subscription. The Customer shall remain responsible for all payment obligations arising from such purchase.",
        ],
      },
      {
        id: "s4-2",
        title: "4.2 Customer Responsibility",
        paragraphs: [
          "Prior to completing any purchase, the Customer is solely responsible for verifying:",
        ],
        bullets: [
          "the selected Subscription Plan;",
          "pricing;",
          "billing frequency;",
          "included features;",
          "usage limits;",
          "compatibility with business requirements;",
          "applicable taxes;",
          "renewal terms.",
        ],
      },
      {
        id: "s4-3",
        title: "4.3 Acceptance of Commercial Terms",
        paragraphs: [
          "By completing a purchase, the Customer represents, warrants, and acknowledges that: (a) all purchase information is accurate; (b) the Customer possesses legal authority to complete the transaction; (c) sufficient authorization exists for the chosen payment method; and (d) the Customer accepts this Policy without reservation.",
        ],
      },
    ],
  },
  {
    id: "s5",
    title: "5. Billing and Payment",
    subsections: [
      {
        id: "s5-1",
        title: "5.1 Payment Obligation",
        paragraphs: [
          "The Customer shall pay all applicable Subscription Fees, usage-based charges, implementation fees, communication charges, AI usage charges, professional service fees, taxes, and any other lawful charges applicable to the selected Services.",
        ],
      },
      {
        id: "s5-2",
        title: "5.2 Payment Confirmation",
        paragraphs: [
          "Access to paid Services may be conditioned upon successful payment authorization and confirmation. AIVIQONE reserves the right to delay activation where payment verification, fraud prevention procedures, regulatory compliance checks, or banking confirmation remain pending.",
        ],
      },
      {
        id: "s5-3",
        title: "5.3 Pricing Errors",
        paragraphs: [
          "Notwithstanding anything contained herein, AIVIQONE reserves the right to cancel any order resulting from: (a) typographical errors; (b) technical errors; (c) system malfunctions; (d) pricing inaccuracies; (e) unauthorized promotional configurations; or (f) payment processing errors. Where payment has already been received in respect of such an order, AIVIQONE's sole obligation shall be limited to refunding the amount actually received for the affected transaction.",
        ],
      },
    ],
  },
  {
    id: "s6",
    title: "6. Subscription Term",
    subsections: [
      {
        id: "s6-1",
        title: "6.1 Subscription Period",
        paragraphs: [
          "Each Subscription shall commence on the date of activation by AIVIQONE and shall continue for the duration of the applicable Subscription Term selected by the Customer, unless earlier suspended or terminated in accordance with this Policy, the Terms of Service, or any applicable written agreement.",
        ],
      },
      {
        id: "s6-2",
        title: "6.2 Renewal of Subscription",
        paragraphs: [
          "Unless otherwise expressly agreed in writing or unless automatic renewal has been disabled before the applicable renewal date, eligible Subscription Plans may automatically renew for successive Subscription Terms. By enrolling in an automatically renewing Subscription, the Customer authorizes AIVIQONE or its authorized payment processor to charge the applicable renewal fees using the designated payment method.",
        ],
      },
      {
        id: "s6-3",
        title: "6.3 Renewal Pricing",
        paragraphs: [
          "Subscription renewals shall generally occur at the pricing applicable on the renewal date unless: (a) a separate written commercial agreement provides otherwise; (b) promotional pricing expressly extends to renewal periods; or (c) applicable law requires a different treatment. AIVIQONE reserves the right to revise Subscription pricing before any renewal period, subject to applicable legal requirements.",
        ],
      },
    ],
  },
  {
    id: "s7",
    title: "7. Cancellation by the Customer",
    subsections: [
      {
        id: "s7-1",
        title: "7.1 Right to Cancel",
        paragraphs: [
          "Subject to the applicable Subscription Term and any minimum contractual commitment, the Customer may cancel a Subscription at any time through the Customer Dashboard or any other cancellation procedure designated by AIVIQONE. Cancellation shall prevent future renewals but shall not affect charges already incurred.",
        ],
      },
      {
        id: "s7-2",
        title: "7.2 Effective Date of Cancellation",
        paragraphs: [
          "Unless otherwise specified in writing, cancellation shall become effective upon the expiration of the then-current Subscription Term. The Customer shall continue to have access to the Services until the applicable Subscription expires, unless earlier suspended or terminated under the Terms of Service.",
        ],
      },
      {
        id: "s7-3",
        title: "7.3 No Retroactive Cancellation",
        paragraphs: [
          "Cancellation shall operate prospectively only. For the avoidance of doubt, cancellation shall not:",
        ],
        bullets: [
          "(a) reverse completed transactions;",
          "(b) invalidate previously issued invoices;",
          "(c) relieve the Customer from payment obligations already accrued;",
          "(d) automatically entitle the Customer to any refund.",
        ],
      },
      {
        id: "s7-4",
        title: "7.4 Customer Responsibility",
        paragraphs: [
          "The Customer shall remain solely responsible for ensuring that any cancellation request is submitted before the applicable renewal date. Failure to cancel prior to renewal shall not, by itself, create any entitlement to a refund.",
        ],
      },
    ],
  },
  {
    id: "s8",
    title: "8. Cancellation by AIVIQONE",
    subsections: [
      {
        id: "s8-1",
        title: "8.1 Company Rights",
        paragraphs: [
          "Without prejudice to any other rights or remedies available under applicable law or the Terms of Service, AIVIQONE reserves the right to suspend, restrict, or terminate any Subscription where:",
        ],
        bullets: [
          "(a) the Customer materially breaches any agreement with AIVIQONE;",
          "(b) payment obligations remain outstanding;",
          "(c) fraudulent activity is suspected;",
          "(d) the Services are used unlawfully;",
          "(e) platform security is threatened;",
          "(f) continued provision of the Services becomes unlawful.",
        ],
      },
      {
        id: "s8-2",
        title: "8.2 Operational Discontinuation",
        paragraphs: [
          "AIVIQONE may discontinue a Service, Subscription Plan, or product offering for legitimate business, commercial, operational, legal, regulatory, or technical reasons. Where reasonably practicable, commercially reasonable prior notice shall be provided. Nothing contained herein obligates AIVIQONE to continue offering any specific product or feature indefinitely.",
        ],
      },
      {
        id: "s8-3",
        title: "8.3 Effect of Company Cancellation",
        paragraphs: [
          "Unless otherwise required by applicable law or expressly agreed in writing, termination by AIVIQONE shall not automatically entitle the Customer to compensation for:",
        ],
        bullets: [
          "anticipated profits;",
          "business interruption;",
          "indirect losses;",
          "consequential damages;",
          "lost opportunities.",
        ],
      },
    ],
  },
  {
    id: "s9",
    title: "9. Refund Eligibility",
    subsections: [
      {
        id: "s9-1",
        title: "9.1 General Rule",
        paragraphs: [
          "Except as expressly provided in this Policy, required under applicable law, or approved in writing by an authorized representative of AIVIQONE, all payments made to AIVIQONE shall be final and non-refundable.",
        ],
      },
      {
        id: "s9-2",
        title: "9.2 Digital Services",
        paragraphs: [
          "The Customer expressly acknowledges that the Services consist primarily of digital products, subscription-based software, hosted infrastructure, proprietary technology, implementation services, and immediately accessible online services. Accordingly, refunds may be unavailable once the purchased Services have been activated, provisioned, delivered, configured, or otherwise made available to the Customer.",
        ],
      },
      {
        id: "s9-3",
        title: "9.3 Refund Requests at AIVIQONE's Discretion",
        paragraphs: [
          "Where AIVIQONE elects to consider a refund request that is not otherwise covered by the refund eligibility provisions of this Policy, AIVIQONE may assess the request at its reasonable discretion, subject to applicable law, the nature of the services purchased, the circumstances of the request, and any applicable contractual terms. Any refund granted under this provision will be considered an exception and will not create a precedent or entitlement to refunds in similar circumstances.",
        ],
      },
    ],
  },
  {
    id: "s10",
    title: "10. Non-Refundable Payments",
    paragraphs: [
      "Unless expressly required by applicable law, the following amounts shall be non-refundable:",
    ],
    bullets: [
      "Subscription Fees already billed;",
      "Setup Fees;",
      "Implementation Fees;",
      "Professional Service Fees;",
      "Technical Consulting Fees;",
      "Training Charges;",
      "Custom Development Charges;",
      "API Integration Fees;",
      "Migration Fees;",
      "Communication Charges;",
      "SMS Charges;",
      "Voice Calling Charges;",
      "WhatsApp Messaging Charges;",
      "AI Consumption Charges;",
      "Third-Party Licensing Fees;",
      "Domain Registration Charges;",
      "SSL Certificate Charges;",
      "Cloud Infrastructure Costs;",
      "Payment Gateway Charges;",
      "Government Fees;",
      "Taxes already remitted to governmental authorities;",
      "Administrative Charges.",
    ],
  },
  {
    id: "s11",
    title: "11. Exceptional Refunds",
    subsections: [
      {
        id: "s11-1",
        title: "11.1 Exceptional Circumstances",
        paragraphs: [
          "Notwithstanding anything contained herein, AIVIQONE may, in exceptional circumstances and at its sole and absolute discretion, approve a full or partial refund where:",
        ],
        bullets: [
          "(a) duplicate payments have been received;",
          "(b) an obvious billing error attributable solely to AIVIQONE has occurred;",
          "(c) an unauthorized transaction is confirmed following reasonable investigation;",
          "(d) applicable law requires a refund; or",
          "(e) other exceptional circumstances exist that AIVIQONE reasonably determines justify a refund.",
        ],
      },
      {
        id: "s11-2",
        title: "11.2 No Precedent",
        paragraphs: [
          "Approval of one refund request shall not: (a) create a contractual right; (b) establish a recurring practice; (c) amend this Policy; or (d) require approval of future refund requests. Each request shall be evaluated independently on its own facts.",
        ],
      },
      {
        id: "s11-3",
        title: "11.3 Refund Method",
        paragraphs: [
          "Where a refund is approved, AIVIQONE will generally return the approved refund amount to the original payment method used for the transaction.",
          "Where permitted by applicable law, the Customer may agree to receive an account credit or service credit instead of a monetary refund. AIVIQONE will not substitute account credit or service credit for a monetary refund where a monetary refund is required by applicable law.",
          "Refund processing times may vary depending on the payment method, payment gateway, bank, or financial institution involved.",
        ],
      },
    ],
  },
  {
    id: "s12",
    title: "12. Partial Refunds",
    paragraphs: [
      "Unless otherwise required by applicable law or expressly approved by AIVIQONE in writing, refunds shall not ordinarily be granted on a prorated basis for:",
    ],
    bullets: [
      "unused Subscription periods;",
      "partial months;",
      "partially consumed usage limits;",
      "unused AI credits;",
      "unused communication credits;",
      "unused API quotas.",
    ],
  },
  {
    id: "s13",
    title: "13. Free Trials",
    paragraphs: [
      "Where a Free Trial is offered:",
    ],
    bullets: [
      "(a) the Free Trial shall remain subject to any applicable eligibility requirements;",
      "(b) AIVIQONE may modify, suspend, or discontinue the Free Trial at any time;",
      "(c) expiration of the Free Trial shall not automatically create a refund entitlement;",
      "(d) any subsequent purchase of a paid Subscription shall be governed exclusively by this Policy and the Terms of Service.",
    ],
  },
  {
    id: "s14",
    title: "14. Chargebacks and Payment Disputes",
    subsections: [
      {
        id: "s14-1",
        title: "14.1 Good Faith Resolution",
        paragraphs: [
          "Prior to initiating any chargeback, payment reversal, banking dispute, or payment gateway dispute, the Customer agrees to make commercially reasonable efforts to resolve the matter directly with AIVIQONE. The Customer acknowledges that many payment-related concerns may be resolved promptly through AIVIQONE's customer support or billing team.",
        ],
      },
      {
        id: "s14-2",
        title: "14.2 Unauthorized Chargebacks",
        paragraphs: [
          "Where AIVIQONE reasonably determines that a chargeback, payment reversal, or banking dispute has been initiated fraudulently, abusively, or without a valid legal or contractual basis, AIVIQONE reserves the right, without prejudice to any other rights or remedies available under applicable law, to:",
        ],
        bullets: [
          "(a) suspend or terminate the Customer's Account;",
          "(b) suspend access to the Services;",
          "(c) recover all outstanding Subscription Fees and associated costs;",
          "(d) recover chargeback fees, banking charges, payment gateway fees, legal expenses, collection costs, and administrative costs incurred by AIVIQONE;",
          "(e) permanently restrict future purchases where permitted by applicable law; and",
          "(f) pursue any other remedy available under applicable law or contract.",
        ],
      },
      {
        id: "s14-3",
        title: "14.3 Investigation",
        paragraphs: [
          "AIVIQONE reserves the right to investigate any disputed transaction and may require the Customer to provide supporting documentation, including proof of identity, payment authorization, purchase confirmation, or other information reasonably necessary to determine the legitimacy of the dispute. Failure to cooperate with such investigation may result in rejection of the refund request or suspension of the relevant Account.",
        ],
      },
    ],
  },
  {
    id: "s15",
    title: "15. Promotional Offers, Discounts and Credits",
    subsections: [
      {
        id: "s15-1",
        title: "15.1 Promotional Pricing",
        paragraphs: [
          "From time to time, AIVIQONE may offer promotional pricing, introductory offers, discounts, coupon codes, service credits, loyalty incentives, referral benefits, or other commercial promotions. Unless expressly stated otherwise in writing:",
        ],
        bullets: [
          "(a) promotional offers are temporary in nature;",
          "(b) promotional pricing shall not automatically apply to renewals;",
          "(c) promotions may not be combined with other offers; and",
          "(d) promotions may be withdrawn, modified, or discontinued at any time, subject to applicable law.",
        ],
      },
      {
        id: "s15-2",
        title: "15.2 Non-Transferability",
        paragraphs: [
          "Promotional discounts, coupon codes, account credits, referral benefits, and complimentary service credits:",
        ],
        bullets: [
          "have no cash value unless expressly stated otherwise;",
          "are non-transferable;",
          "may not be resold;",
          "may not be redeemed for cash; and",
          "may expire in accordance with the applicable promotional terms.",
        ],
      },
      {
        id: "s15-3",
        title: "15.3 Abuse Prevention",
        paragraphs: [
          "AIVIQONE reserves the right to revoke promotional benefits where it reasonably believes that a promotion has been obtained or used through fraud, abuse, misrepresentation, multiple account creation, automated activity, or any other conduct inconsistent with the intended purpose of the promotion.",
        ],
      },
    ],
  },
  {
    id: "s16",
    title: "16. Taxes",
    subsections: [
      {
        id: "s16-1",
        title: "16.1 Taxes",
        paragraphs: [
          "Unless expressly stated otherwise, all prices published by AIVIQONE are exclusive of applicable taxes, duties, levies, surcharges, governmental assessments, withholding obligations, or similar statutory charges. The Customer shall remain responsible for payment of all applicable taxes arising from the purchase or use of the Services, except taxes imposed solely upon AIVIQONE's income.",
        ],
      },
      {
        id: "s16-2",
        title: "16.2 Government Charges",
        paragraphs: [
          "Where taxes have already been collected and remitted to the appropriate governmental authority, such taxes may not be refundable except where required by applicable law or where the relevant authority permits recovery.",
        ],
      },
    ],
  },
  {
    id: "s17",
    title: "17. Effect of Cancellation",
    subsections: [
      {
        id: "s17-1",
        title: "17.1 Termination of Access",
        paragraphs: [
          "Upon expiration or cancellation of a Subscription:",
        ],
        bullets: [
          "(a) the Customer's right to access paid features may immediately cease or expire at the end of the applicable Subscription Term;",
          "(b) premium functionality may become unavailable;",
          "(c) usage limits may be reduced to those applicable under any remaining plan;",
          "(d) certain integrations, APIs, communication services, AI functionality, or enterprise features may be disabled.",
        ],
      },
      {
        id: "s17-2",
        title: "17.2 Outstanding Obligations",
        paragraphs: [
          "Cancellation or expiration of a Subscription shall not relieve the Customer of any obligation arising prior to the effective date of cancellation, including obligations relating to:",
        ],
        bullets: [
          "unpaid invoices;",
          "accrued Subscription Fees;",
          "usage-based charges;",
          "taxes;",
          "indemnification;",
          "confidentiality;",
          "intellectual property;",
          "dispute resolution.",
        ],
      },
      {
        id: "s17-3",
        title: "17.3 No Revival",
        paragraphs: [
          "Cancellation of a Subscription shall not obligate AIVIQONE to restore, reactivate, or recover previously deleted Services, data, configurations, or account settings unless expressly agreed in writing or technically feasible.",
        ],
      },
    ],
  },
  {
    id: "s18",
    title: "18. Data Retention Following Cancellation",
    paragraphs: [
      "Following cancellation or termination of the Services, AIVIQONE may retain, archive, anonymize, delete, or otherwise process Customer Data in accordance with: the Privacy Policy; the Terms of Service; applicable law; regulatory obligations; internal data retention schedules; and legitimate business requirements.",
      "The Customer is solely responsible for exporting or retrieving any Customer Data prior to cancellation where such functionality is made available.",
    ],
  },
  {
    id: "s19",
    title: "19. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, AIVIQONE Technologies Pvt. Ltd., its affiliates, directors, officers, employees, agents, and service providers will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, business opportunities, goodwill, anticipated savings, or data arising out of or relating to refunds, cancellations, subscriptions, payments, or use of the Services.",
      "To the maximum extent permitted by applicable law, AIVIQONE's aggregate liability arising out of or relating to this Policy or the relevant transaction will not exceed the total fees actually paid by the Customer to AIVIQONE for the applicable Services during the twelve (12) months immediately preceding the event giving rise to the claim.",
      "Nothing in this Policy excludes or limits any liability that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    id: "s20",
    title: "20. Force Majeure",
    paragraphs: [
      "AIVIQONE shall not be responsible for any delay, inability, suspension, or failure to process refunds, cancellations, billing transactions, or payment operations resulting directly or indirectly from events beyond its reasonable control, including but not limited to:",
    ],
    bullets: [
      "natural disasters;",
      "floods;",
      "earthquakes;",
      "epidemics or pandemics;",
      "war;",
      "terrorism;",
      "civil unrest;",
      "governmental actions;",
      "internet outages;",
      "failures of payment gateways;",
      "banking system disruptions;",
      "telecommunications failures;",
      "cyberattacks;",
      "cloud infrastructure failures;",
      "labour disputes; or",
      "other force majeure events recognised under applicable law.",
    ],
  },
  {
    id: "s21",
    title: "21. Reservation of Rights",
    paragraphs: [
      "Except as expressly provided in this Policy, all rights, remedies, powers, and discretions available to AIVIQONE under applicable law, equity, or contract are hereby expressly reserved. No provision of this Policy shall be construed as limiting any legal remedy otherwise available to AIVIQONE.",
    ],
  },
  {
    id: "s22",
    title: "22. Changes to This Policy",
    subsections: [
      {
        id: "s22-1",
        title: "22.1 Right to Amend",
        paragraphs: [
          "AIVIQONE reserves the right, at its sole and absolute discretion, to amend, modify, supplement, replace, restate, or otherwise revise this Policy at any time to reflect: (a) changes in applicable law; (b) judicial decisions; (c) regulatory requirements; (d) technological developments; (e) changes in business operations; (f) modifications to the Services; (g) commercial practices; or (h) security, compliance, or operational requirements.",
        ],
      },
      {
        id: "s22-2",
        title: "22.2 Notification of Material Changes",
        paragraphs: [
          "Where required by applicable law, AIVIQONE shall use commercially reasonable efforts to notify Customers of material amendments through one or more of the following means: Customer Dashboard; Electronic Mail; Website Notice; In-Application Notification; Billing Portal; or any other legally recognized communication channel.",
          "Continued access to or use of the Services after the effective date of any revised Policy shall constitute acceptance of such revised Policy, to the extent permitted by applicable law.",
        ],
      },
    ],
  },
  {
    id: "s23",
    title: "23. Governing Law",
    paragraphs: [
      "This Policy shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles.",
      "Nothing contained herein shall prejudice or restrict any mandatory rights available to Customers under applicable law.",
    ],
  },
  {
    id: "s24",
    title: "24. Dispute Resolution",
    subsections: [
      {
        id: "s24-1",
        title: "24.1 Amicable Resolution",
        paragraphs: [
          "In the event of any dispute, controversy, or claim arising out of or in connection with this Policy, the Parties shall first attempt to resolve the matter through good faith negotiations. Either Party may initiate negotiations by providing written notice describing the nature of the dispute.",
        ],
      },
      {
        id: "s24-2",
        title: "24.2 Arbitration",
        paragraphs: [
          "If the dispute is not resolved within thirty (30) Business Days from the commencement of negotiations, such dispute shall be finally resolved by arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time. Unless otherwise agreed in writing:",
        ],
        bullets: [
          "Seat of Arbitration: New Delhi, India;",
          "Venue of Arbitration: New Delhi, India;",
          "Language: English;",
          "Number of Arbitrators: One (1), appointed in accordance with applicable law.",
          "The arbitral award shall be final and binding upon the Parties.",
        ],
      },
      {
        id: "s24-3",
        title: "24.3 Interim Relief",
        paragraphs: [
          "Nothing contained in this Policy shall prevent either Party from seeking interim, emergency, injunctive, or equitable relief before any court of competent jurisdiction for the protection of: Intellectual Property Rights; Confidential Information; proprietary technology; trade secrets; payment obligations; security interests; or any other rights requiring urgent judicial protection.",
        ],
      },
    ],
  },
  {
    id: "s25",
    title: "25. Jurisdiction",
    paragraphs: [
      "Subject to the arbitration provisions contained herein and to the extent permitted by applicable law, the courts situated in New Delhi, India, shall have exclusive jurisdiction over all matters arising out of or relating to this Policy.",
    ],
  },
  {
    id: "s26",
    title: "26. Severability",
    paragraphs: [
      "If any provision of this Policy is determined by a court of competent jurisdiction or arbitral tribunal to be invalid, unlawful, illegal, or unenforceable:",
    ],
    bullets: [
      "(a) such provision shall be modified only to the minimum extent necessary to make it enforceable while preserving its original commercial intent;",
      "(b) where modification is not legally possible, such provision shall be deemed severed from this Policy; and",
      "(c) the remaining provisions shall remain valid, binding, and enforceable in full force and effect.",
    ],
  },
  {
    id: "s27",
    title: "27. Waiver",
    paragraphs: [
      "No delay, omission, or failure by AIVIQONE in exercising any right, remedy, power, or privilege under this Policy shall constitute a waiver thereof. Any waiver shall:",
    ],
    bullets: [
      "(a) be made expressly in writing;",
      "(b) be signed by a duly authorized representative of AIVIQONE; and",
      "(c) apply solely to the specific circumstance expressly identified therein.",
      "A waiver of one breach shall not constitute a waiver of any preceding, subsequent, or continuing breach.",
    ],
  },
  {
    id: "s28",
    title: "28. Entire Policy",
    paragraphs: [
      "This Policy, together with the following documents, constitutes the complete and exclusive understanding between AIVIQONE and the Customer concerning refunds, cancellations, renewals, and related commercial matters:",
    ],
    bullets: [
      "Terms of Service;",
      "Privacy Policy;",
      "Cookie Policy;",
      "Acceptable Use Policy;",
      "Data Processing Addendum (where applicable);",
      "Service Level Agreement (where applicable);",
      "Enterprise Agreement (where applicable);",
      "Order Forms;",
      "Statements of Work; and",
      "any additional legal documents expressly incorporated by reference.",
    ],
    subsections: [
      {
        id: "s28-order",
        title: "Order of Precedence",
        paragraphs: [
          "In the event of any inconsistency between this Policy and a separately executed written agreement between AIVIQONE and the Customer, the provisions of such written agreement shall prevail solely to the extent of such inconsistency.",
        ],
      },
    ],
  },
  {
    id: "s29",
    title: "29. Electronic Communications",
    paragraphs: [
      "The Customer expressly consents to receive communications relating to this Policy electronically. Such communications may include:",
    ],
    bullets: [
      "billing notices;",
      "renewal reminders;",
      "cancellation confirmations;",
      "refund decisions;",
      "legal notices;",
      "compliance notifications;",
      "account-related communications.",
      "Electronic communications transmitted by AIVIQONE shall satisfy any legal requirement that such communications be in writing, to the extent permitted under applicable law.",
    ],
  },
  {
    id: "s30",
    title: "30. Contact Information",
    paragraphs: [
      "Any request relating to cancellations, billing disputes, refund requests, or this Policy may be submitted to:",
      "AIVIQONE Technologies Pvt. Ltd.",
      "Customer Support: hello@aiviqone.com",
      "Legal Department: hello@aiviqone.com",
      "Website: https://www.aiviqone.com",
      "Business Hours: Monday to Friday, excluding public holidays, unless otherwise notified.",
    ],
  },
  {
    id: "s31",
    title: "31. Version History",
    paragraphs: [
      "Version 1.0 | Effective Date: 03 September 2026 | Description: Initial Release",
      "AIVIQONE may revise this Policy periodically. The most current version shall be made available through the official website, and the \"Last Updated\" date shall indicate when the latest revision became effective.",
    ],
  },
  {
    id: "s32",
    title: "32. Final Acknowledgement",
    paragraphs: [
      "BY PURCHASING, SUBSCRIBING TO, RENEWING, ACCESSING, OR USING ANY PAID OR UNPAID SERVICE PROVIDED BY AIVIQONE, THE CUSTOMER HEREBY ACKNOWLEDGES, REPRESENTS, WARRANTS, AND AGREES THAT:",
    ],
    bullets: [
      "(a) THE CUSTOMER HAS CAREFULLY READ THIS REFUND & CANCELLATION POLICY;",
      "(b) THE CUSTOMER FULLY UNDERSTANDS THE RIGHTS, OBLIGATIONS, LIMITATIONS, AND COMMERCIAL CONSEQUENCES SET FORTH HEREIN;",
      "(c) THE CUSTOMER HAS BEEN AFFORDED A REASONABLE OPPORTUNITY TO SEEK INDEPENDENT LEGAL, FINANCIAL, OR PROFESSIONAL ADVICE PRIOR TO ENTERING INTO ANY TRANSACTION WITH AIVIQONE;",
      "(d) THE CUSTOMER VOLUNTARILY AGREES TO BE LEGALLY BOUND BY THIS POLICY;",
      "(e) THE CUSTOMER UNDERSTANDS THAT, EXCEPT AS EXPRESSLY PROVIDED HEREIN OR AS REQUIRED BY APPLICABLE LAW, PAYMENTS MADE TO AIVIQONE ARE FINAL AND NON-REFUNDABLE;",
      "(f) THE CUSTOMER ACCEPTS THIS POLICY WITHOUT LIMITATION, CONDITION, OR RESERVATION.",
    ],
  },
  {
    id: "s33",
    title: "33. Effective Date",
    paragraphs: [
      "This Policy shall become legally effective on the earliest of: (a) the date on which the Customer clicks \"I Agree\", \"Accept\", \"Subscribe\", \"Purchase\", or any similar electronic acceptance mechanism; (b) the date on which the Customer creates an Account; (c) the date on which the Customer purchases or renews a Subscription; (d) the date on which the Customer first accesses or uses any paid Service; or (e) the effective date specified in any Enterprise Agreement, Order Form, Statement of Work, or other written agreement executed with AIVIQONE.",
      "No physical signature shall be required for the validity or enforceability of this Policy where electronic acceptance is recognized under applicable law.",
    ],
    subsections: [
      {
        id: "s33-meta",
        title: "Document Specifications",
        bullets: [
          "Document Title: Refund & Cancellation Policy",
          "Company: AIVIQONE Technologies Pvt. Ltd.",
          "Document Version: 1.0",
          "Document Classification: Public Legal Document",
          "Copyright © 2026 AIVIQONE Technologies Pvt. Ltd. All Rights Reserved.",
        ],
      },
    ],
  },
];

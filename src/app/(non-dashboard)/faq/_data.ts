interface FAQItem {
  id: string
  question: string
  answer: string
  category: "sourcing" | "pricing" | "compliance" | "integration"
}

export const faqData: FAQItem[] = [
  {
    id: "pricing-structure",
    category: "pricing",
    question: "How does PashPro structure its fees? Is there a gain-share or performance model?",
    answer:
      "We offer flexible commercial arrangements tailored to your internal risk tolerance. The majority of our strategic sourcing engagements utilize a performance-linked gain-share model where our compensation is directly proportional to verified, realized cost reductions. For long-term managed procurement (BPO) and continuous tail-spend governance, we provide predictable monthly retainers backed by guaranteed minimum ROI SLAs (typically 4x to 6x first-year fee recovery).",
  },
  {
    id: "savings-timeline",
    category: "sourcing",
    question: "How quickly can our organization realize measurable cost savings?",
    answer:
      "For targeted RFx tenders and contract renegotiations, initial hard-dollar savings are typically captured within 60 to 90 days. During Phase 1 (Spend Diagnostic, Days 1–30), we baseline your data and identify fast-win categories. By Day 60, multi-round supplier negotiations are concluded, and finalized rate cards take effect by Day 90 upon contract signature.",
  },
  {
    id: "data-confidentiality",
    category: "compliance",
    question: "How does PashPro protect our proprietary spend data and supplier contracts?",
    answer:
      "We operate under rigorous institutional data protection standards. Before ingesting any accounts payable files or historical contracts, mutual enterprise NDAs are executed. All data is processed within SOC 2 Type II certified environments with AES-256 encryption at rest and TLS 1.3 in transit. We maintain a strict zero-leakage policy: supplier bid data is never shared across client accounts.",
  },
  {
    id: "erp-compatibility",
    category: "integration",
    question: "Can PashPro integrate with our existing ERP and procurement platforms (SAP, Coupa, Oracle)?",
    answer:
      "Yes. We integrate seamlessly into your current enterprise tech stack. Our systems team regularly configures cXML punchout catalogs, pre-negotiated rate cards, and automated approval workflows directly inside SAP Ariba, Coupa, Oracle Cloud Procurement, NetSuite, and Workday. There is no requirement to replace your existing software.",
  },
  {
    id: "incumbent-suppliers",
    category: "sourcing",
    question: "Do we have to terminate relationships with our existing incumbent suppliers?",
    answer:
      "Not necessarily. In fact, over 65% of our client savings are achieved by renegotiating and restructuring terms with incumbent suppliers rather than replacing them. We leverage our proprietary market price benchmarks and volume aggregation indices to compel incumbents to match competitive market tiers while preserving institutional knowledge and established logistics channels.",
  },
  {
    id: "minimum-spend",
    category: "pricing",
    question: "What spend volume is required to engage PashPro services?",
    answer:
      "Our services are optimized for mid-market and enterprise organizations with at least $10M in annual addressable spend across direct or indirect categories. However, for specialized single-category RFx tenders (such as enterprise cloud software licensing, logistics freight, or packaging), we can effectively engage on spend thresholds starting at $3M.",
  },
  {
    id: "supplier-vetting-esg",
    category: "compliance",
    question: "How are suppliers vetted for ESG, labor standards, and financial viability?",
    answer:
      "Every vendor recommended by PashPro undergoes our comprehensive 4-Tier Verification protocol: 1) Financial solvency audits via Dun & Bradstreet and CreditRiskMonitor; 2) ESG and carbon footprint benchmarking aligned with EcoVadis standards; 3) Ethical labor and human rights compliance checks (including forced labor and supply chain transparency regulations); and 4) ISO 9001/14001 quality audits.",
  },
  {
    id: "tail-spend-approach",
    category: "sourcing",
    question: "How does PashPro manage and consolidate chaotic tail spend?",
    answer:
      "We deploy a dedicated Spot-Buy Desk and unified procurement catalog. We ingest your fragmented 80/20 vendor tail (the thousands of vendors that each represent small transactional amounts), eliminate duplicate accounts, negotiate master corporate rate cards with core distributors, and route ad-hoc spot requisitions through automated pre-cleared approval gates.",
  },
  {
    id: "internal-team-collaboration",
    category: "integration",
    question: "How does PashPro collaborate with our existing internal procurement and finance personnel?",
    answer:
      "We function as an operational force multiplier, not a replacement for your in-house talent. We handle the time-consuming, resource-intensive analytical heavy lifting—such as supplier market research, complex RFx document preparation, mathematical should-cost modeling, and line-item invoice reconciliation—freeing your internal directors to focus on strategic stakeholder alignment and core operational execution.",
  },
  {
    id: "dispute-resolution-sla",
    category: "compliance",
    question: "What happens if a vetted vendor fails to meet agreed SLAs or quality tolerances?",
    answer:
      "All master agreements engineered by PashPro incorporate robust Service Level Agreements with explicit financial penalty clauses, service credits, and rapid cure periods. Our Supplier Relationship Management (SRM) team actively monitors vendor scorecards and manages formal Corrective Action Preventive Action (CAPA) resolutions on your behalf.",
  },
]






const faq = [
    {
        id: 1,
        question: "How do we start working together?",
        answer: "It starts with a free consultation call. We'll discuss your purchasing needs, current challenges, and goals. From there, we prepare a tailored proposal with clear scope, timelines, and pricing — no obligation, no pressure."
    },
    {
        id: 2,
        question: "Is the initial consultation really free?",
        answer: "Yes — completely. The first consultation and initial assessment cost you nothing. We only quote paid services once we both agree there's a clear opportunity to work together."
    },
    {
        id: 3,
        question: "What information do you need from me to get started?",
        answer: "At minimum: what you buy (or want to buy), approximate volumes, target pricing, and any supplier or quality requirements. For spend analysis projects, we'll also request recent purchasing data — always under NDA."
    },
    {
        id: 4,
        question: "How quickly can you deliver results?",
        answer: "It depends on the service 1. Supplier shortlists: (typically 5–10 business days). 2. First savings quick wins: (often within 30 days) 3. Full managed procurement setup: (2–4 weeks for transition)"
    },
]

const faqPricing = [
    { 
        id: 1,
        questions: "How do you charge for your services?",
        answer: "We offer flexible models to fit your needs"
    },
    { 
        id: 2,
        questions: "Will your fees eat into my savings?",
        answer: "Our clients typically see savings many times greater than our fees. In fact, we're happy to structure savings-based engagements where our fee is directly tied to the results we deliver — meaning if you don't save, you don't pay (on qualifying engagements)."
    },
    { 
        id: 3,
        questions: "Are there any hidden costs?",
        answer: "No. Every proposal clearly states what's included, what's excluded, and any third-party costs (e.g., freight, inspection fees, lab testing) — which are always passed through at cost with full transparency."
    },
    { 
        id: 4,
        questions: "Do you take commissions from suppliers?",
        answer: "Never. We are paid only by you. This is fundamental to our business model — our loyalty is exclusively to your interests. Any discounts or rebates negotiated with suppliers belong to you."
    },
]

const faqWork = [
    {
        id: 1,
        question: "Do I have to switch suppliers to work with you?",
        answer: "No. We can work with your existing suppliers — renegotiating terms, improving quality, and managing performance. If better alternatives exist, we'll present them, but the decision is always yours."
    },
    {
        id: 2,
        question: "How much control do I keep over purchasing decisions?",
        answer: "As much as you want. Most clients set approval thresholds. You approve budgets, supplier selections, and major contracts — we handle the execution."
    },
    {
        id: 3,
        question: "Who owns the supplier relationships and contracts?",
        answer: "You do. Contracts are signed between you and the supplier (with us acting as your representative if preferred). If we ever part ways, your suppliers, contracts, and data remain yours."
    },
    {
        id: 4,
        question: "Will you work with my competitors?",
        answer: "We serve clients across industries and may work with businesses in similar sectors. However, we maintain strict confidentiality — your pricing, supplier lists, volumes, and strategies are never shared with anyone, under any circumstances."
    },
    {
        id: 5,
        question: "How do we communicate day-to-day?",
        answer: "However works best for you: email, phone, WhatsApp, Slack, or scheduled calls. Every client gets a dedicated account manager as a single point of contact, plus regular status reports."
    },
]

const faqRisk = [
    {
        id: 1,
        question: "How do you ensure product quality?",
        answer: "Through a layered approach: vetting suppliers before you work with them, inspections at critical production stages, pre-shipment quality checks against your specifications, and clear contract terms that make suppliers accountable for defects."
    },
    {
        id: 2,
        question: "What happens if a shipment arrives defective?",
        answer: "Because we inspect before shipment, this is rare. But if it happens, we manage the entire claim process — negotiation for replacements, refunds, or repairs — backed by documented inspection evidence."
    },
    {
        id: 3,
        question: "How do you protect my product designs and IP?",
        answer: "We use NDAs with suppliers, ensure IP protection clauses are included in all contracts, and can structure manufacturing agreements that restrict your designs from being produced for others."
    },
    {
        id: 4,
        question: "Is my business data safe with you?",
        answer: "Yes. All client engagements are protected by a mutual NDA. Your purchasing data is used solely for your benefit, stored securely, and never shared or sold."
    },
]

const faqCapabilities = [
    {
        id: 1,
        question: "What products and categories do you handle?",
        answer: "A wide range, including: [raw materials, components, packaging, finished goods, equipment, office supplies, and more]. If you can buy it, we can likely source it. Ask us about your specific category." 
    },
    {
        id: 1,
        question: "Are there products you don't handle?",
        answer: "We don't work with products that are illegal, restricted, or that conflict with our ethical standards (e.g., items involving exploitative labor). Beyond that, we're highly flexible." 
    },
    {
        id: 1,
        question: "What's the minimum order size you work with?",
        answer: "There's no strict minimum. We work with small businesses placing [first orders of a few thousand dollars] through enterprises spending [millions annually]. For smaller orders, we often consolidate volumes across clients to unlock better pricing" 
    },
    {
        id: 1,
        question: "Do you handle international sourcing?",
        answer: "Yes — we source globally, with strong networks in [China, Vietnam, India, Turkey — adjust as needed] and on-the-ground capabilities in [15+] countries. We manage language, payments, compliance, and logistics end-to-end." 
    },
    {
        id: 1,
        question: "Can you work with our existing procurement team?",
        answer: "Absolutely. Many clients use us to extend their team — handling specific categories, international sourcing, or peak-season overflow — while their internal team keeps strategic control." 
    },
]

const faqLogistics = [
    {
        id: 1,
        question: "Do you handle shipping and customs?",
        answer: "Yes. We coordinate freight (air, sea, road), prepare all customs documentation, and manage clearance through to final delivery — door-to-door, fully tracked."
    },
    {
        id: 1,
        question: "Can you guarantee delivery dates?",
        answer: "We provide realistic, data-backed lead times and proactively expedite when risks arise. While no one can control every port delay or disruption, our on-time delivery rate is [95%+] — and we flag issues early, never after the fact."
    },
    {
        id: 1,
        question: "Who arranges and pays for freight?",
        answer: "We can structure it either way: you pay carriers directly, or we manage freight on your behalf and bill at cost. We'll recommend the cleanest option for your situation."
    },
]


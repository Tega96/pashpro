import {
  Compass,
  Layers,
  Users,
  FileCheck,
  BarChart3,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Building,
  Package,
  Server,
  Truck,
  Briefcase,
  Sparkles,
  Fuel,
} from "lucide-react"

export const detailedServices = [
  {
    id: "strategic-sourcing",
    icon: Compass,
    title: "Strategic Sourcing & RFx Execution",
    badge: "Core Service Pillar",
    overview:
      "A structured, seven-step strategic sourcing methodology that maximizes competitive tension among suppliers, uncovers hidden pricing tiers, and locks in long-term commercial terms.",
    metrics: "16% - 24% Average Cost Reduction",
    deliverables: [
      "Cross-border supplier market research & discovery",
      "Total Cost of Ownership (TCO) mathematical modeling",
      "Comprehensive RFI, RFP, and RFQ document drafting",
      "Multi-round e-Auction and sealed bid facilitation",
      "Formal supplier evaluation scoring matrix & recommendations",
    ],
    idealFor:
      "Mid-market to Fortune 500 enterprises with mature spend categories requiring refreshed competitive tenders or contract renewals.",
  },
  {
    id: "direct-indirect",
    icon: Layers,
    title: "Direct & Indirect Spend Optimization",
    badge: "Full Spectrum",
    overview:
      "Holistic category management spanning direct materials (raw chemicals, resins, metals, packaging) and indirect expenditures (MRO, facilities, tooling, office consumables).",
    metrics: "12% - 21% Savings across categories",
    deliverables: [
      "Bill of Materials (BOM) cost driver decomposition",
      "Standardization of MRO SKUs to eliminate redundant ordering",
      "Regional and global volume aggregation across business units",
      "Dual-sourcing strategies to prevent single-point-of-failure risks",
      "Continuous price indexing against commodity benchmarks",
    ],
    idealFor:
      "Manufacturing, healthcare, logistics, and multi-location retail enterprises with decentralized purchasing across sites.",
  },
  {
    id: "supplier-relationship",
    icon: Users,
    title: "Supplier Relationship Management (SRM)",
    badge: "Risk & Governance",
    overview:
      "Shift from transactional vendor interactions to high-trust collaborative partnerships. We establish automated scorecards, risk monitoring, and executive business reviews.",
    metrics: "99.2% SLA Adherence & 40% Defect Reduction",
    deliverables: [
      "Quarterly Business Reviews (QBRs) and KPI governance",
      "Tier-1 and Tier-2 financial solvency & geopolitical stress tests",
      "On-site factory quality and labor compliance audits (ISO standards)",
      "Structured corrective action plans (CAPA) for underperforming vendors",
      "Joint innovation and co-development incentive frameworks",
    ],
    idealFor:
      "Companies facing recurring vendor quality slips, delayed shipments, or heightened regulatory oversight on supplier traceability.",
  },
  {
    id: "contract-optimization",
    icon: FileCheck,
    title: "Contract Negotiation & Rebates",
    badge: "Legal & Commercial Alignment",
    overview:
      "Commercial contract structuring that aligns vendor compensation with delivery performance, prevents unnoticed pricing creep, and captures all earned rebates.",
    metrics: "100% Rebate Capture & Guaranteed Price Caps",
    deliverables: [
      "Master Service Agreement (MSA) commercial term optimization",
      "Inflation caps, fuel surcharge mechanisms, and currency pegging clauses",
      "Dynamic volume rebate brackets with automated trigger alerts",
      "Service Level Agreement (SLA) penalty and clawback mechanics",
      "Historical rebate reconciliation and revenue recovery",
    ],
    idealFor:
      "Enterprises with hundreds of historical contracts with expiring terms, missing rebate clauses, or ambiguous price hike triggers.",
  },
  {
    id: "tail-spend",
    icon: BarChart3,
    title: "Tail Spend Management & Consolidation",
    badge: "Leakage Elimination",
    overview:
      "Tackle the unmanaged 20% of your corporate spend that consumes 80% of accounts payable transactions. We convert chaos into cataloged efficiency.",
    metrics: "35% - 50% Reduction in Vendor Accounts",
    deliverables: [
      "Dedicated Spot-Buy Desk for one-off purchase orders",
      "Supplier rationalization and consolidation into master catalogs",
      "Procurement card (P-Card) policy enforcement and spend auditing",
      "Automated low-dollar order approvals and pre-cleared rate cards",
      "Significant reduction in accounts payable invoice processing costs",
    ],
    idealFor:
      "Finance and procurement teams overwhelmed by thousands of fragmented one-time vendors and rogue credit card purchasing.",
  },
  {
    id: "e-procurement",
    icon: Workflow,
    title: "Digital E-Procurement & P2P Integration",
    badge: "Digital Transformation",
    overview:
      "Modernize your Procure-to-Pay (P2P) workflows. We configure punchout catalogs, approval matrices, and automated 3-way matching in your existing ERP.",
    metrics: "65% Faster Order-to-Delivery Cycle",
    deliverables: [
      "Integration with SAP Ariba, Coupa, Oracle, NetSuite, or Workday",
      "Pre-configured punchout catalogs for pre-approved vendors",
      "Automated PO-to-Invoice 3-way matching rules",
      "Real-time spend visibility and category executive dashboards",
      "Supplier portal onboarding and digital invoicing compliance",
    ],
    idealFor:
      "Enterprises modernizing their ERP or seeking zero-touch invoice processing with full audit trails.",
  },
]

export const categoriesMatrix = [
  {
    icon: Fuel,
    name: "Oil and gas",
    scope: "Strategic sourcing, Contract and Negotiation management, category management ",
  },
  {
    icon: Package,
    name: "Direct Materials & Packaging",
    scope: "Resins, corrugated boxes, rigid plastics, stainless steel, APIs, specialty chemicals, and custom components.",
  },
  {
    icon: Building,
    name: "Facilities & MRO",
    scope: "Industrial tooling, janitorial services, HVAC maintenance, safety equipment, security staffing, and utility contracts.",
  },
  {
    icon: Server,
    name: "IT, SaaS & Telecom",
    scope: "Cloud infrastructure (AWS/Azure/GCP), enterprise software licenses, laptops, cybersecurity tools, and cellular fleets.",
  },
  {
    icon: Truck,
    name: "Logistics & Freight",
    scope: "Full truckload (FTL), less-than-truckload (LTL), ocean container freight, 3PL warehousing, and courier services.",
  },
  {
    icon: Briefcase,
    name: "Corporate & Professional Services",
    scope: "Management consulting, legal retainers, marketing agency fees, temporary staffing, and travel/hospitality programs.",
  },
]

export const engagementModels = [
  {
    title: "Managed Procurement (BPO)",
    badge: "Full Partnership",
    description:
      "PashPro serves as your outsourced or hybrid procurement department, managing end-to-end category spend, vendor governance, and day-to-day sourcing execution.",
    bullets: [
      "Dedicated Category Sourcing Directors",
      "Continuous spend analytics & invoice audits",
      "Guaranteed minimum annual cost reduction SLA",
      "Quarterly executive stakeholder reviews",
    ],
  },
  {
    title: "Project-Based Strategic Tenders",
    badge: "Targeted Impact",
    description:
      "Ideal for enterprise clients seeking deep market intelligence, RFx execution, and high-stakes contract renegotiation for specific major categories.",
    bullets: [
      "90 to 120-day high-intensity project cycle",
      "Comprehensive supplier bidding and e-Auctions",
      "Detailed rate card and MSA execution",
      "Seamless operational handover to internal teams",
    ],
  },
  {
    title: "Procurement Diagnostic & Advisory",
    badge: "Assessment & Strategy",
    description:
      "A fast-paced diagnostic that ingests historical ERP data to expose price variances, tail-spend leakages, and contractual vulnerabilities.",
    bullets: [
      "30-day comprehensive spend baseline audit",
      "Opportunity matrix with quantified EBIT savings",
      "Vendor risk and contract vulnerability report",
      "Roadmap for internal execution or PashPro engagement",
    ],
  },
]

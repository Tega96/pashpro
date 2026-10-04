import Link from "next/link"
import {
  ShieldCheck,
  TrendingDown,
  FileCheck,
  Building2,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Layers,
  BarChart3,
  Globe2,
  Lock,
  Workflow,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { SavingsCalculator } from "@/components/home/savings-calculator"

const coreServices = [
  {
    id: "strategic-sourcing",
    title: "Strategic Sourcing & RFx Execution",
    description:
      "Data-driven category tenders, global supplier discovery, and competitive multi-round RFx management that drives double-digit EBIT gains.",
    icon: Compass,
    deliverables: ["Total Cost of Ownership (TCO) Models", "Cross-border Supplier Panels", "e-Auction Execution"],
    href: "/services#strategic-sourcing",
  },
  {
    id: "direct-indirect",
    title: "Direct & Indirect Spend Optimization",
    description:
      "Full spectrum procurement coverage across raw materials, manufacturing components, MRO parts, corporate facilities, and logistics.",
    icon: Layers,
    deliverables: ["Bill of Materials (BOM) Benchmarking", "MRO Catalog Standardization", "Volume Aggregation"],
    href: "/services#direct-indirect",
  },
  {
    id: "supplier-relationship",
    title: "Supplier Relationship Management (SRM)",
    description:
      "Comprehensive supplier performance governance, financial viability assessments, ESG compliance audits, and proactive risk remediation.",
    icon: Users,
    deliverables: ["Quarterly Business Reviews (QBRs)", "Tier-1/2 Risk Auditing", "Scorecard Automation"],
    href: "/services#supplier-relationship",
  },
  {
    id: "contract-optimization",
    title: "Contract Negotiation & Rebates",
    description:
      "Enterprise contract structuring, master service agreement (MSA) optimization, dynamic volume rebate triggers, and strict indexation controls.",
    icon: FileCheck,
    deliverables: ["Price Escalation Caps", "Rebate Reconciliation", "Legal & SLA Alignment"],
    href: "/services#contract-optimization",
  },
  {
    id: "tail-spend",
    title: "Tail Spend Management & Consolidation",
    description:
      "Eliminate the 80/20 headache. We consolidate thousands of low-value, unmanaged vendors into unified, pre-negotiated catalogs.",
    icon: BarChart3,
    deliverables: ["Spot-buy Desk Management", "Vendor Rationalization (40%+ reduction)", "P-Card Spend Audits"],
    href: "/services#tail-spend",
  },
  {
    id: "e-procurement",
    title: "Digital E-Procurement & P2P Integration",
    description:
      "Modernize your procurement infrastructure. Seamless integration with SAP Ariba, Coupa, Oracle, and NetSuite for zero-touch approvals.",
    icon: Workflow,
    deliverables: ["PunchOut Catalog Setup", "Automated 3-Way Match", "Real-Time Spend Analytics"],
    href: "/services#e-procurement",
  },
]

const processStages = [
  {
    step: "01",
    name: "Spend Diagnostic & Baselines",
    description:
      "We ingest 24-36 months of ERP accounts payable data, classify historical spend, identify pricing variances, and establish immutable baseline metrics.",
  },
  {
    step: "02",
    name: "Market Intelligence & RFx Strategy",
    description:
      "Deep category intelligence combined with our pre-vetted global supplier network to construct comprehensive RFI/RFP bidding events.",
  },
  {
    step: "03",
    name: "Negotiation & Value Realization",
    description:
      "Our senior commodity strategists negotiate side-by-side with your leadership, capturing best-in-class price breaks and contractual protections.",
  },
  {
    step: "04",
    name: "Implementation & P2P Integration",
    description:
      "Standardizing rate cards, configuring catalog punchouts in your procurement software, and transitioning internal stakeholders without supply disruption.",
  },
  {
    step: "05",
    name: "Continuous Governance & Auditing",
    description:
      "Ongoing line-item invoice auditing, SLA monitoring, rebate collection, and regular supplier scorecards to prevent spend leakage over time.",
  },
]

const caseStudies = [
  {
    client: "Global Industrial Manufacturer",
    spend: "$62M Annual Addressable Spend",
    result: "$11.8M Net Savings (19.0%)",
    summary:
      "Consolidated 42 disparate regional MRO and metal fabrication suppliers into 3 master agreements with guaranteed lead times and rebate tiers.",
    industry: "Heavy Manufacturing",
    author: "VP of Global Supply Chain",
  },
  {
    client: "HealthTech & Medical Devices Corp",
    spend: "$28M Indirect & Packaging Spend",
    result: "23.4% Cost Reduction & 100% Audit Pass",
    summary:
      "Executed dual-sourcing strategy for sterile packaging and logistics, reducing supply chain interruption risk while strictly maintaining FDA compliance.",
    industry: "Healthcare & Life Sciences",
    author: "Chief Procurement Officer",
  },
  {
    client: "Enterprise SaaS & Fintech Group",
    spend: "$34M Cloud & Software Licensing",
    result: "$6.2M Recovered & Rightsized",
    summary:
      "Audited unutilized SaaS licenses, renegotiated enterprise multi-year agreements with Tier-1 cloud providers, and established centralized license governance.",
    industry: "Technology & Software",
    author: "Head of Infrastructure Procurement",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 lg:pt-28 pb-12 border-b border-border bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="outline" className="px-3 py-1 text-xs font-semibold gap-1.5 border-border bg-background">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Enterprise Procurement Servicing Partner
                </Badge>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  ISO 9001:2015 &bull; CIPS Compliant
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Transforming Enterprise Procurement into Bottom-Line Value
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                PashPro delivers institutional procurement servicing: strategic sourcing, contract optimization, supplier risk governance, and tail-spend consolidation. We help enterprise leaders reduce total cost of ownership by 14% to 22%.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" className="shadow-md">
                  <Link href="/contact" className="flex items-center gap-2">
                    <span>Request Sourcing Diagnostic</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/services">Explore Sourcing Services</Link>
                </Button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Zero Business Disruption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>100% Contract Audit Proof</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Performance Gain-Share Models</span>
                </div>
              </div>
            </div>

            {/* Right Card / Interactive Preview */}
            <div className="lg:col-span-5">
              <Card className="border-border bg-card shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-muted/50 rounded-full blur-3xl pointer-events-none" />
                <CardHeader className="pb-3 border-b border-border bg-muted/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        PashPro Sourcing Radar
                      </span>
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono">
                      Q1 2026 Audit
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold">
                    Enterprise Category Benchmark
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Indirect Materials &amp; MRO</span>
                      <span className="font-mono text-foreground font-bold">-21.4% Cost</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Logistics &amp; Intermodal Freight</span>
                      <span className="font-mono text-foreground font-bold">-16.8% Cost</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[70%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>IT Hardware &amp; SaaS Subscriptions</span>
                      <span className="font-mono text-foreground font-bold">-24.2% Cost</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[92%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Packaging &amp; Direct Materials</span>
                      <span className="font-mono text-foreground font-bold">-13.5% Cost</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[60%]" />
                    </div>
                  </div>

                  {/* <Separator /> */}

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-muted-foreground">Target Client ROI:</span>
                    <span className="font-bold text-foreground font-mono text-sm">6.2x First-Year Fee Multiple</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 border-t border-border py-3">
                  <Button variant="ghost" size="sm" className="w-full text-xs">
                    <Link href="/about" className="flex items-center justify-center gap-1">
                      <span>Explore Our Complete Sourcing Methodology</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Trusted Corporate Badges Strip */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-xs uppercase tracking-widest font-semibold text-center text-muted-foreground mb-6">
              Trusted by CPOs, CFOs &amp; Supply Chain Executives across Global Sectors
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
              <div className="rounded-lg border border-border bg-card/60 p-3 flex items-center justify-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold text-foreground">Apex Industrial Mfg</span>
              </div>
              <div className="rounded-lg border border-border bg-card/60 p-3 flex items-center justify-center gap-2">
                <Globe2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold text-foreground">TransGlobal Logistics</span>
              </div>
              <div className="rounded-lg border border-border bg-card/60 p-3 flex items-center justify-center gap-2">
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold text-foreground">Nova BioPharma</span>
              </div>
              <div className="rounded-lg border border-border bg-card/60 p-3 flex items-center justify-center gap-2">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold text-foreground">Sentinel Fintech</span>
              </div>
              <div className="rounded-lg border border-border bg-card/60 p-3 flex items-center justify-center gap-2">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold text-foreground">OmniRetail Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Key Performance Metrics */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="border-border bg-card">
            <CardContent className="p-6 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Managed Spend Portfolio
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
                $480M+
              </p>
              <p className="text-xs text-muted-foreground pt-1">
                Direct, indirect, and capital expenditure across 12 countries.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Average Cost Reduction
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
                19.4%
              </p>
              <p className="text-xs text-muted-foreground pt-1">
                Audited baseline savings captured within first 120 days.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                SLA Compliance Rate
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
                99.2%
              </p>
              <p className="text-xs text-muted-foreground pt-1">
                Enforced on-time fulfillment and quality tolerances.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Active Enterprise Accounts
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
                45+
              </p>
              <p className="text-xs text-muted-foreground pt-1">
                Corporate partnerships with 98% annual contract renewal.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <Badge variant="outline">Procurement Servicing Capabilities</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              End-to-End Strategic Sourcing &amp; Spend Governance
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              From direct raw materials to decentralized tail spend, PashPro provides specialized category experts and operational execution.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            <Link href="/services">View All Service Details &rarr;</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="border-border bg-card flex flex-col justify-between hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="w-full justify-between px-0 hover:px-2">
                    <Link href={service.href} className="text-xs font-medium">
                      <span>Learn more about this service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* <SavingsCalculator /> */}
      </section>

      {/* 5-Stage Procurement Lifecycle */}
      <section className="border-y border-border bg-muted/20 py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="outline">Proven Execution Framework</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              The PashPro 5-Stage Sourcing Lifecycle
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A disciplined, auditable methodology engineered to extract maximum supplier value without jeopardizing operational continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processStages.map((stage, idx) => (
              <Card key={idx} className="border-border bg-card relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black font-mono text-muted-foreground/60">
                      {stage.step}
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      Phase {idx + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-bold leading-snug">
                    {stage.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button variant="outline">
              <Link href="/about#methodology">
                Read Detailed Sourcing Governance Methodology &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies & Real Results */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="outline">Verified Enterprise Outcomes</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Proven Results Across Demanding Supply Chains
          </h2>
          <p className="text-sm text-muted-foreground">
            How enterprise procurement leaders partner with PashPro to unlock margin and enforce compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((item, idx) => (
            <Card key={idx} className="border-border bg-card flex flex-col justify-between">
              <CardHeader className="space-y-2">
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="text-[11px]">
                    {item.industry}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">{item.spend}</span>
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {item.client}
                </CardTitle>
                <p className="text-xl font-extrabold text-foreground font-mono pt-1">
                  {item.result}
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  &ldquo;{item.summary}&rdquo;
                </p>
              </CardContent>

              <CardFooter className="border-t border-border pt-3 text-xs text-muted-foreground flex items-center justify-between">
                <span>Verified Endorsement</span>
                <span className="font-semibold text-foreground">{item.author}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* High-Conversion Bottom Banner */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-primary text-primary-foreground p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="secondary" className="text-secondary-foreground font-medium">
              Start with a Risk-Free Diagnostic
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Ready to Eliminate Spend Leakage and Optimize Your Supply Network?
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Our Senior Sourcing Directors will review your current category spend baseline, identify high-probability price discrepancies, and deliver an actionable 90-day procurement plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <Button size="lg" variant="secondary" className="font-semibold">
              <Link href="/contact" className="flex items-center gap-2">
                <span>Schedule Sourcing Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/faq" className="flex items-center gap-2 text-secondary-foreground hover:text-primary-foreground">
                Review FAQs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

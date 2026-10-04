// import FooterSection from "../_components/FooterSection"
// import HeroSection from "../_components/HeroSection"
// import AboutImg from '@/../public/landing-splash.png'
// const About = () => {
//     return (
//         // <div className="relative top-0 left-0">
//         // <HeroSection 
//         //     src={AboutImg}
//         //     alt="Contact image"
//         //     title="Your Trusted Partner in Strategic Procurement"
//         //     description="From supplier sourcing to contract negotiation, we make purchasing simple, transparent, and cost-effective for businesses of every size"
//         // />
//         //     About page.
//         // <FooterSection />
//         // </div>
//     )
// }
// export default About



import Link from "next/link"
import {
  ShieldCheck,
  Award,
  Users2,
  CheckCircle2,
  FileCheck,
  Scale,
  Sparkles,
  ArrowRight,
  Target,
  Leaf,
  BarChart2,
  Lock,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"

const leadershipTeam = [
  {
    name: "Marcus Vance, CPO, FCIPS",
    role: "Managing Director & Global Head of Sourcing",
    bio: "Former VP of Global Procurement at a Fortune 100 industrial conglomerate. Over 22 years structuring multi-billion dollar direct material and cross-border supply chains.",
    initials: "MV",
    credentials: "FCIPS &bull; Harvard Business School Exec",
  },
  {
    name: "Elena Rostova",
    role: "VP of Supplier Governance & ESG Compliance",
    bio: "Specializes in supplier viability audits, ethical supply chain verification, and EcoVadis compliance frameworks across EMEA and North America.",
    initials: "ER",
    credentials: "Lead Auditor ISO 9001 &bull; Cambridge Sustainable Supply Chains",
  },
  {
    name: "Devin Thorne",
    role: "Chief Procurement Analytics & Systems Officer",
    bio: "Pioneer in algorithmic price benchmarking, ERP spend taxonomy automation, and Procure-to-Pay (P2P) systems architecture for enterprise clients.",
    initials: "DT",
    credentials: "M.S. Industrial Engineering &bull; Ex-Coupa Principal Strategist",
  },
  {
    name: "Amina Al-Mansoor",
    role: "Head of Contract Negotiation & Rebate Governance",
    bio: "Corporate commercial attorney and strategic negotiator specializing in volume indexation, dynamic rebate mechanisms, and master agreement risk mitigation.",
    initials: "AA",
    credentials: "J.D. Corporate Law &bull; Certified Contract Management (CCM)",
  },
]

const operatingPrinciples = [
  {
    icon: Target,
    title: "Data-Driven Price Discovery",
    description:
      "We replace speculative negotiations with real-time commodity indices, global price benchmarks, and clean should-cost engineering models.",
  },
  {
    icon: Scale,
    title: "Fiduciary Independence",
    description:
      "PashPro accepts zero kickbacks or undisclosed fees from suppliers. Our commercial alignment is 100% with our enterprise clients.",
  },
  {
    icon: Leaf,
    title: "ESG & Resilient Supply Networks",
    description:
      "Every vetted vendor on our panels undergoes rigorous ESG scoring, human rights auditing, and multi-tier geopolitical risk profiling.",
  },
  {
    icon: Lock,
    title: "Institutional Data Confidentiality",
    description:
      "All spend data, supplier contracts, and bidding dynamics are managed in SOC 2 Type II environments protected by ironclad enterprise NDAs.",
  },
]

const comparisonData = [
  {
    dimension: "Negotiation Leverage",
    traditional: "Limited to internal buying volume; sporadic spot quotes.",
    pashpro: "Aggregated leverage across $480M+ spend portfolio with pre-negotiated tier breaks.",
  },
  {
    dimension: "Market Intelligence",
    traditional: "Supplier-driven rate cards and subjective sales pitches.",
    pashpro: "Real-time commodity cost indices and algorithmic should-cost modeling.",
  },
  {
    dimension: "Tail Spend Governance",
    traditional: "Decentralized rogue spend; thousands of unvetted invoices.",
    pashpro: "Unified punchout catalogs and automated consolidation into master agreements.",
  },
  {
    dimension: "Contract Enforcement",
    traditional: "Static contracts stored in PDFs; unnoticed price bracket creep.",
    pashpro: "Automated 3-way invoice matching and proactive quarterly rebate audits.",
  },
  {
    dimension: "ESG & Compliance",
    traditional: "Annual checkbox surveys with minimal verification.",
    pashpro: "Continuous third-party audits, tier-2 visibility, and ISO 9001 governance.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* Hero Header */}
      <section className="pt-12 md:pt-16 pb-12 border-b border-border bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
          <Badge variant="outline" className="gap-1.5 py-1">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Institutional Procurement Leadership
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-4xl leading-tight">
            We Help Global Organizations Engineer High-Performance, Risk-Resilient Supply Chains
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Founded by veteran Chief Procurement Officers, PashPro was built to replace outdated, manual sourcing practices with disciplined category strategies, transparent benchmarks, and measurable bottom-line value.
          </p>
        </div>
      </section>

      {/* Mission & Corporate Story */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <Badge variant="secondary">Our Mission</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Bridging the Gap Between Enterprise Ambition and Supply Chain Reality
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              In an era defined by geopolitical volatility, inflation, and complex regulatory mandates, modern enterprises cannot afford passive procurement. Yet, most internal teams are consumed by day-to-day administrative fire-fighting, leaving indirect categories and tail spend unmanaged.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              PashPro acts as an institutional extension of your executive leadership. We combine industry-specialized category directors with global supplier access, ensuring your organization secures Tier-1 pricing, airtight contract protections, and sustainable supplier relationships.
            </p>
            <div className="pt-2">
              <Button>
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Inquire About Partnership</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-border bg-card">
                <CardHeader className="pb-2">
                  <Award className="h-6 w-6 text-foreground mb-2" />
                  <CardTitle className="text-lg font-bold">CIPS Accredited</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our team adheres to Chartered Institute of Procurement &amp; Supply ethics and procurement standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="pb-2">
                  <ShieldCheck className="h-6 w-6 text-foreground mb-2" />
                  <CardTitle className="text-lg font-bold">ISO 9001:2015</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Internationally certified Quality Management Systems governing every stage of our RFx and sourcing processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="pb-2">
                  <BarChart2 className="h-6 w-6 text-foreground mb-2" />
                  <CardTitle className="text-lg font-bold">EcoVadis Gold</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Top 5% sustainability and carbon footprint governance benchmarks for vetted supplier ecosystems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="pb-2">
                  <Lock className="h-6 w-6 text-foreground mb-2" />
                  <CardTitle className="text-lg font-bold">SOC 2 Type II</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Airtight security for all proprietary corporate spending records, bids, and contract documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Operating Principles */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="outline">Foundational Tenets</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            How We Operate
          </h2>
          <p className="text-sm text-muted-foreground">
            Our operating model is engineered to eliminate conflicts of interest and maximize verified savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operatingPrinciples.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card key={idx} className="border-border bg-card">
                <CardHeader className="space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Comparative Operating Model Table */}
      <section id="methodology" className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
        <div className="space-y-2">
          <Badge variant="outline">Comparative Advantage</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Traditional In-House Purchasing vs. PashPro Strategic Sourcing
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            See how our managed sourcing and category consolidation model compares to conventional transactional buying.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-1/4 font-bold text-foreground">Strategic Dimension</TableHead>
                <TableHead className="w-3/8 text-muted-foreground">Conventional Purchasing</TableHead>
                <TableHead className="w-3/8 font-bold text-foreground">PashPro Servicing Model</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-semibold text-foreground align-top">
                    {row.dimension}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground align-top leading-relaxed">
                    {row.traditional}
                  </TableCell>
                  <TableCell className="text-xs font-medium text-foreground align-top leading-relaxed bg-muted/20">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{row.pashpro}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Leadership Team Profiles */}
      <section id="leadership" className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="outline">Executive Leadership</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Led by Experienced Procurement Practitioners
          </h2>
          <p className="text-sm text-muted-foreground">
            Our partners have steered sourcing decisions for major Fortune 500 enterprises, sovereign wealth infrastructure funds, and high-growth industrial firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <Card key={idx} className="border-border bg-card flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <Avatar className="h-14 w-14 border border-border">
                  <AvatarFallback className="font-bold text-base bg-secondary text-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base font-bold text-foreground leading-snug">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground font-medium mt-1">
                    {member.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                <div className="pt-2 border-t border-border">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {member.credentials}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-xl border border-border bg-muted/40 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-2xl font-bold text-foreground">
              Interested in speaking with our category directors?
            </h3>
            <p className="text-sm text-muted-foreground">
              Schedule a confidential 30-minute introductory discovery session with our executive sourcing team.
            </p>
          </div>
          <Button size="lg" className="shrink-0">
            <Link href="/contact" className="flex items-center gap-2">
              <span>Schedule Discovery Session</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

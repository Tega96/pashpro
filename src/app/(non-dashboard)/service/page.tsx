import Link from "next/link"
import {
  detailedServices, 
  categoriesMatrix, 
  engagementModels
} from "./_data"
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


export default function ServicesPage() {
  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 pb-12 border-b border-border bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
          <Badge variant="outline" className="gap-1.5 py-1">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Comprehensive Sourcing Portfolio
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl leading-tight">
            Institutional Procurement Servicing Tailored to Enterprise Scale
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From strategic category tenders to daily tail-spend spot desks, PashPro provides the expertise, data intelligence, and execution muscle needed to optimize every dollar of enterprise expenditure.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
        <div className="space-y-2">
          <Badge variant="outline">Service Capabilities</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Our 6 Foundational Procurement Servicing Pillars
          </h2>
          <p className="text-sm text-muted-foreground">
            Each service can be deployed independently as a focused project or integrated into a comprehensive Managed Procurement partnership.
          </p>
        </div>

        <div className="space-y-8">
          {detailedServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={service.id} id={service.id} className="border-border bg-card shadow-sm scroll-mt-24">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl sm:text-2xl font-bold">
                            {service.title}
                          </CardTitle>
                          <Badge variant="secondary" className="hidden sm:inline-flex text-[11px]">
                            {service.badge}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          Impact Benchmark: {service.metrics}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      Pillar 0{idx + 1}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
                    {service.overview}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Core Execution Deliverables:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-foreground">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                    <span className="font-semibold text-foreground">Ideal Application:</span>
                    <span>{service.idealFor}</span>
                  </div>
                </CardContent>

                <CardFooter className="border-t border-border pt-4 flex justify-between items-center bg-muted/10">
                  <span className="text-xs text-muted-foreground">
                    Available under Gain-Share or Retainer engagement models.
                  </span>
                  <Button size="sm">
                    <Link href="/contact" className="flex items-center gap-1.5">
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Category Coverage Matrix */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <Badge variant="outline">Spend Categories</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Broad Multi-Category Procurement Expertise
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Our category directors possess deep domain-specific supplier networks and historical rate cards across essential enterprise disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesMatrix.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <Card key={idx} className="border-border bg-card">
                <CardHeader className="space-y-2 pb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">{cat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cat.scope}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="border-y border-border bg-muted/20 py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline">Commercial Flexibility</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Flexible Engagement Frameworks
            </h2>
            <p className="text-sm text-muted-foreground">
              Whether you need turnkey procurement outsourcing or a rapid 90-day sourcing sprint, we configure our scope to match your operational structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model, idx) => (
              <Card key={idx} className="border-border bg-card flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <Badge variant="secondary" className="w-fit text-[11px]">
                    {model.badge}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {model.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {model.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Structure Includes:
                  </p>
                  <ul className="space-y-2 text-xs text-foreground">
                    {model.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="border-t border-border pt-4">
                  <Button variant="outline" className="w-full">
                    <Link href="/contact">Select This Model</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bottom Callout */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-xl border border-border bg-card p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground">
              Unsure which sourcing model fits your current fiscal roadmap?
            </h3>
            <p className="text-sm text-muted-foreground">
              Our Senior Sourcing Directors will conduct an initial 30-minute spend consultation to identify fast ROI categories and recommend the optimal engagement path.
            </p>
          </div>
          <Button size="lg" className="shrink-0">
            <Link href="/contact" className="flex items-center gap-2">
              <span>Book Spend Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

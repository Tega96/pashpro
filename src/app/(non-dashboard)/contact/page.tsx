// import FooterSection from "../_components/FooterSection";
// import HeroSection from "../_components/HeroSection";
// import ContactIMG from "@/../public/contact.png"
// import ContactSection from "./ContactSection";
// import { div } from "framer-motion/client";


// const ContactPage = () => {
//     return (
//         // <div className="">
//         //     <HeroSection 
//         //         src={ContactIMG}
//         //         alt="Contact image"
//         //         title="Your Trusted Partner in Strategic Procurement"
//         //         description="From supplier sourcing to contract negotiation, we make purchasing simple, transparent, and cost-effective for businesses of every size"
//         //     />
//         //     <ContactSection />
//         //     <FooterSection />
//         // </div>
//         <div className=""></div>
//     )
// }
// export default ContactPage;


"use client"

import * as React from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Building2,
  FileCheck2,
  RotateCcw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const globalOffices = [
  {
    city: "Lagos, Nigeria",
    region: "",
    address: "Plot 71, Block 49, PA Daniel Ajiboye Lane, Lekki Scheme 2",
    phone: "+234 806 414 7626",
    email: "info@pashpro.com",
    hours: "Mon – Fri: 8:00 AM – 6:00 PM WAT",
  }
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    orgName: "",
    contactName: "",
    title: "",
    email: "",
    phone: "",
    spendRange: "$10M - $30M Annual Spend",
    serviceFocus: "Strategic Sourcing & RFx Execution",
    scopeNotes: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      orgName: "",
      contactName: "",
      title: "",
      email: "",
      phone: "",
      spendRange: "$10M - $30M Annual Spend",
      serviceFocus: "Strategic Sourcing & RFx Execution",
      scopeNotes: "",
    })
    setIsSubmitted(false)
  }

  return (
    <div className="flex flex-col space-y-16 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 pb-12 border-b border-border bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
          <Badge variant="outline" className="gap-1.5 py-1">
            <Mail className="h-3.5 w-3.5 text-primary" />
            Executive Engagement Desk
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl leading-tight">
            Initiate a Confidential Procurement Diagnostic or Submit an RFP
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Connect with our Senior Category Directors. We provide an initial baseline review of your addressable categories, identify contract risk exposure, and deliver actionable price targets.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Office Coordinates */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <Card className="border-border bg-card shadow-md">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">
                    Request for Proposal (RFP) &amp; Sourcing Audit
                  </CardTitle>
                  <Badge variant="secondary" className="text-[11px]">
                    Confidential NDA Protected
                  </Badge>
                </div>
                <CardDescription className="text-xs text-muted-foreground">
                  Complete the inquiry form below to route your request directly to the appropriate regional practice leader.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {isSubmitted ? (
                  <div className="rounded-xl border border-border bg-secondary/30 p-8 text-center space-y-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        Inquiry Received &amp; Ticket Dispatched
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground">
                        Tracking ID: RFP-2026-
                        {Math.floor(1000 + Math.random() * 9000)}
                      </p>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed pt-2">
                        Thank you, <span className="font-semibold text-foreground">{formData.contactName || "Executive"}</span>. A Senior Sourcing Strategist for <span className="font-semibold text-foreground">{formData.orgName || "your enterprise"}</span> has been assigned and will contact you at <span className="font-semibold text-foreground">{formData.email}</span> within 4 business hours.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Submit Another Sourcing Scope</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground" htmlFor="orgName">
                          Enterprise Organization Name *
                        </label>
                        <Input
                          id="orgName"
                          name="orgName"
                          required
                          placeholder="e.g. Apex Industrial Manufacturing"
                          value={formData.orgName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground" htmlFor="contactName">
                          Your Full Name *
                        </label>
                        <Input
                          id="contactName"
                          name="contactName"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.contactName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground" htmlFor="email">
                          Corporate Business Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="s.jenkins@apexindustrial.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground" htmlFor="phone">
                          Direct Telephone / Extension *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+234 803 123 4567"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground" htmlFor="title">
                          Your Corporate Title
                        </label>
                        <Input
                          id="title"
                          name="title"
                          placeholder="e.g. VP of Global Supply Chain / CFO"
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground" htmlFor="spendRange">
                          Approx. Annual Addressable Spend
                        </label>
                        <select
                          id="spendRange"
                          name="spendRange"
                          value={formData.spendRange}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground"
                        >
                          <option value="$3M - $10M Annual Spend" className="bg-popover text-popover-foreground">
                            N3M – N10M 
                          </option>
                          <option value="$10M - $30M Annual Spend" className="bg-popover text-popover-foreground">
                            N10M – N30M 
                          </option>
                          <option value="$30M - $75M Annual Spend" className="bg-popover text-popover-foreground">
                            N30M – N75M 
                          </option>
                          <option value="$75M+ Global Enterprise Spend" className="bg-popover text-popover-foreground">
                            N75M+  (Global Enterprise)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground" htmlFor="serviceFocus">
                        Primary Service Focus Required *
                      </label>
                      <select
                        id="serviceFocus"
                        name="serviceFocus"
                        value={formData.serviceFocus}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground"
                      >
                        <option value="Strategic Sourcing & RFx Execution" className="bg-popover text-popover-foreground">
                          Strategic Sourcing &amp; Category RFx
                        </option>
                        <option value="Direct & Indirect Spend Optimization" className="bg-popover text-popover-foreground">
                          Direct &amp; Indirect Spend Optimization
                        </option>
                        <option value="Supplier Relationship Management (SRM)" className="bg-popover text-popover-foreground">
                          Supplier Relationship Management &amp; Auditing
                        </option>
                        <option value="Contract Negotiation & Rebates" className="bg-popover text-popover-foreground">
                          Contract Negotiation &amp; Rebate Governance
                        </option>
                        <option value="Tail Spend Management & Consolidation" className="bg-popover text-popover-foreground">
                          Tail Spend Consolidation &amp; Spot Desk
                        </option>
                        <option value="Digital E-Procurement & P2P Integration" className="bg-popover text-popover-foreground">
                          Digital E-Procurement &amp; ERP Integration
                        </option>
                        <option value="Full Managed Procurement (BPO)" className="bg-popover text-popover-foreground">
                          Full Managed Procurement (BPO)
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground" htmlFor="scopeNotes">
                        Brief Scope or Key Problem Statement
                      </label>
                      <Textarea
                        id="scopeNotes"
                        name="scopeNotes"
                        rows={4}
                        placeholder="Detail target categories, current pain points (e.g. freight cost increases, unmanaged vendor tail, upcoming contract expirations)..."
                        value={formData.scopeNotes}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                      <span>
                        Your information is strictly protected under enterprise NDA protocols. We never share company details.
                      </span>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Submit Procurement Inquiry &amp; Schedule Audit
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Global Hubs & SLAs */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">
                  Guaranteed SLA Commitment
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  Our service standards for prospective and active corporate clients.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Rapid 4-Hour Response:</span> Every submitted RFP is acknowledged with an assigned Category Practice Leader within 4 business hours.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileCheck2 className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Standardized Mutual NDA:</span> Immediate bilateral execution of confidentiality terms prior to reviewing accounts payable files.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building2 className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Direct Access to Directors:</span> No junior intermediaries. You collaborate directly with senior former Chief Procurement Officers.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Global Offices Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Our Office
              </h3>
              {globalOffices.map((office, idx) => (
                <Card key={idx} className="border-border bg-card">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">
                        {office.city}
                      </CardTitle>
                      <Badge variant="outline" className="text-[10px]">
                        {office.region}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-muted-foreground font-mono">
                      <Clock className="h-3 w-3 shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

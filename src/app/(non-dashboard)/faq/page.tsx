"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {FaqCard} from "../_components/FaqCard";
import HeroSection from "../_components/HeroSection";
import { ArrowRight, Badge, CheckCircle2, HelpCircle, Search, ShieldQuestion } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { faqData } from "./_data";


const FAQS = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTab, setSelectedTab] = useState("all")

    // Filter FAQs based on tab and search text
    const filteredFAQs = faqData.filter((item) => {
        const matchesTab = selectedTab === "all" || item.category === selectedTab
        const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesTab && matchesSearch
    })
    return (
        <div className="flex flex-col space-y-16 pb-20">

            {/* <HeroSection 
                src={ContactIMG}
                alt="Contact image"
                title="Your Trusted Partner in Strategic Procurement"
                description="From supplier sourcing to contract negotiation, we make purchasing simple, transparent, and cost-effective for businesses of every size"
            /> */}


            {/* Header */}
            <section className="pt-12 md:pt-16 pb-12 border-b border-border bg-gradient-to-b from-muted/30 via-background to-background">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
                <Badge className={`gap-1.5 py-1 ${buttonVariants({variant: 'outline'})}`}>
                    <HelpCircle className="h-3.5 w-3.5 text-primary" />
                    Knowledge Base &amp; FAQ
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl leading-tight">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    Everything you need to know about our institutional procurement servicing, fee models, security compliance, and ERP integration.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl relative pt-2">
                    <Search className="absolute left-3.5 top-5 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="text"
                    placeholder="Search by topic, keyword (e.g. gain-share, ERP, ESG, timeline)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-11 bg-background border-input"
                    />
                </div>
                </div>
            </section>


            {/* Main Content & Accordion */}
            <section className="container mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* FAQ Accordion Side */}
                <div className="lg:col-span-8 space-y-6">
                    <Tabs
                    value={selectedTab}
                    onValueChange={setSelectedTab}
                    className="w-full"
                    >
                    <TabsList className="grid grid-cols-2 sm:grid-cols-5 w-full h-auto p-1 bg-muted">
                        <TabsTrigger value="all" className="text-xs py-2">
                        All ({faqData.length})
                        </TabsTrigger>
                        <TabsTrigger value="sourcing" className="text-xs py-2">
                        Sourcing
                        </TabsTrigger>
                        <TabsTrigger value="pricing" className="text-xs py-2">
                        Pricing &amp; ROI
                        </TabsTrigger>
                        <TabsTrigger value="compliance" className="text-xs py-2">
                        Compliance
                        </TabsTrigger>
                        <TabsTrigger value="integration" className="text-xs py-2">
                        ERP &amp; Tech
                        </TabsTrigger>
                    </TabsList>
                    </Tabs>

                    {filteredFAQs.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-border p-12 text-center space-y-3">
                        <ShieldQuestion className="h-10 w-10 text-muted-foreground mx-auto" />
                        <h3 className="text-base font-semibold text-foreground">
                        No questions match your query
                        </h3>
                        <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                        Try adjusting your search terms or switch categories to explore all topics.
                        </p>
                        <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            setSearchQuery("")
                            setSelectedTab("all")
                        }}
                        >
                        Reset Search Filter
                        </Button>
                    </div>
                    ) : (
                    <Accordion  className="w-full space-y-2">
                        {filteredFAQs.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border border-border rounded-lg px-4 bg-card"
                        >
                            <AccordionTrigger className="text-sm sm:text-base font-semibold py-4 hover:no-underline hover:text-foreground">
                            {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
                            {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                    )}
                </div>

                {/* Quick Contact & Escalation Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <Card className="border-border bg-card shadow-sm sticky top-24">
                    <CardHeader className="space-y-2">
                        <Badge className={`w-fit text-[11px] ${buttonVariants({variant: 'outline'})}`}>
                        Direct Executive Desk
                        </Badge>
                        <CardTitle className="text-xl font-bold">
                        Have a specific question not covered here?
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        Our Managing Directors review confidential inquiries and provide immediate guidance on category feasibility.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>Average response time: &lt; 4 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>Standard NDA protection provided</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>Complimentary spend diagnostic review</span>
                        </div>
                        </div>

                        <Separator />

                        <div className="space-y-1 text-xs">
                        <p className="font-semibold text-foreground">Direct Inquiries:</p>
                        <p className="text-muted-foreground">info@pashpro.com</p>
                        <p className="text-muted-foreground">+234 806 414 7626</p>
                        </div>

                        <Button className="w-full">
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                            <span>Contact Sourcing Strategists</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        </Button>
                    </CardContent>
                    </Card>
                </div>
                </div>
            </section>



            {/* <div className="font-black text-xl text-center p-4 md:p-6">
                Frequently asked questions
            </div>
            <div>
                <Card className="w-full w-sm md:max-w-xl px-6">
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                        <CardDescription>
                        Common questions about getting started
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {faq.map(({question,id, answer}) => (
                            <FaqCard 
                                key={id}
                                id={id}
                                question={question}
                                answer={answer}
                            />
                        ))};
                    </CardContent>
                </Card>
            </div>

            <div>
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Pricing & Fees</CardTitle>
                        <CardDescription>
                        Common questions about your account, plans, payments and
                        cancellations.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {faqPricing.map(({questions,id, answer}) => (
                            <FaqCard 
                                key={id}
                                id={id}
                                question={questions}
                                answer={answer}
                            />
                        ))};
                    </CardContent>
                </Card>
            </div>

            <div>
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Working With Us</CardTitle>
                        <CardDescription>
                        Common questions about our supply chain
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {faqWork.map(({question,id, answer}) => (
                            <FaqCard 
                                key={id}
                                id={id}
                                question={question}
                                answer={answer}
                            />
                        ))};
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Quality & Risk Protection</CardTitle>
                        <CardDescription>
                        Common questions about how we handle risk
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {faq.map(({question,id, answer}) => (
                            <FaqCard 
                                key={id}
                                id={id}
                                question={question}
                                answer={answer}
                            />
                        ))};
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Capabilities & Coverage</CardTitle>
                        <CardDescription>
                        Common questions about what our services entails
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {faqCapabilities.map(({question,id, answer}) => (
                            <FaqCard 
                                key={id}
                                id={id}
                                question={question}
                                answer={answer}
                            />
                        ))};
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Logistics & Delivery</CardTitle>
                        <CardDescription>
                        Common questions about what our logistics and delivery service
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {faqLogistics.map(({question,id, answer}) => (
                            <FaqCard 
                                key={id}
                                id={id}
                                question={question}
                                answer={answer}
                            />
                        ))};
                    </CardContent>
                </Card>
            </div> */}

        </div>
    )
}
export default FAQS;
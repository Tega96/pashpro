"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image'
import  { useState } from 'react'
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const HeroSection = ({
  src, title, description, alt
}: {
  src: string;
  title: string;
  description: string;
  alt: string;
}) => {
    const [formData, setFormData] = useState()
    const handleChange = () => {

    }
  return (
    <div className="relative top-0 left-0 h-screen w-full">
      <Image 
        src={src}
        alt={alt}
        fill
        className="object-cover object-center w-full h-full"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/90">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // className="absolute top-5/8 transform -translate-y-1/2  text-center w-full"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
            {/* <div className="max-w-4xl mx-auto px-16 sm:px-12">
                <h1 className="font-bold text-5xl mb-4 text-white">
                  {title}
                </h1>
                <p className='text-xl text-white/60 mb-18'>
                  {description}
                </p>
                <div>
                  <Button variant="secondary">
                    Partner With Us
                  </Button>
                  <Button variant="outline">
                    Talk to an Expert
                  </Button>
                </div>
            </div> */}


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
                {title}
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {description}
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

            </div>
            
        </motion.div>
        
      </div>
    </div>
  )
}

export default HeroSection;
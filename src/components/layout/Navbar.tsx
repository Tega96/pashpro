"use client"
import React, {useState} from 'react'
import {ArrowRight, Code, Menu, PhoneCall, ShieldCheck, X} from 'lucide-react'
import { usePathname } from 'next/navigation';
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { 
    Sheet, 
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet';


export const NAV_LINKS =  [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
        {/* Top micro-bar for institutional credibility */}
        {/* <div className="border-b border-border bg-muted/40 px-4 py-1.5 text-xs text-muted-foreground hidden sm:block">
          <div className="container mx-auto flex justify-between items-center max-w-7xl">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1 font-medium text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> ISO 9001:2015 Certified & CIPS Compliant Sourcing
              </span>
              <span className="text-border">|</span>
              <span>N480M+ Managed Spend Portfolio</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <PhoneCall className="h-3 w-3 text-primary" /> Global Desk: +1 (800) 582-7274
              </span>
              <span className="text-border">|</span>
              <Link href="/contact" className="hover:text-foreground transition-colors underline-offset-2 hover:underline">
                Client Portal Support
              </Link>
            </div>
          </div>
        </div> */}

        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-foreground group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tight">PashPro</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                Procurement Servicing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3.5 py-2 transition-colors ${
                    isActive
                      ? "bg-secondary text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              <Link href="/contact">Inquire</Link>
            </Button>
            <Button size="sm">
              <Link href="/contact" className="flex items-center gap-1.5">
                <span>Request Audit</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <Button className={buttonVariants({variant: 'outline'})} size="icon" aria-label="Open Navigation Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col justify-between">
                <div>
                  <SheetHeader className="text-left pb-4 border-b border-border">
                    <SheetTitle className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <span>PashPro</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-1 py-6">
                    {NAV_LINKS.map((link) => {
                      const isActive = pathname === link.href
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`rounded-md px-4 py-2.5 text-base font-medium transition-colors ${
                            isActive
                              ? "bg-secondary text-foreground font-semibold"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div className="border-t border-border pt-6 pb-2 space-y-3">
                  <div className="text-xs text-muted-foreground">
                    <p className="font-semibold text-foreground">Need Urgent Procurement Assistance?</p>
                    <p>Inquiries: info@pashpro.com</p>
                    <p>Direct: +234 806 414 7626</p>
                  </div>
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Schedule RFP Consultation</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      // <nav
      //     className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled
      //         ? 'bg-black/30 backdrop-blur-lg'
      //         : 'bg-transparent'
      //     }`}
      //     // style={{ transform: 'translate3d(0, 0, 0)' }}
      // >
      //     <div className="max-w-[1320px] mx-auto px-5">
      //         <div className="flex items-center justify-between">
      //             {/* Logo */}
      //             <div className="flex items-center gap-4">
      //                 <Code className='w-6 h-6 text-primary' />

      //                 {/* <button 
      //                     onClick={() => window.scrollTo({ top: 0, behaviour: 'smooth' })}
      //                     className="text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
      //                     aria-label="home"
      //                 >
      //                     {PERSONAL_INFO.name.split(' ')[0]}
      //                 </button> */}
      //             </div>

      //             {/* Desktop Navigation */}
      //             <nav className="hidden md:flex items-center gap-7">
      //                 {NAV_LINKS.map((link) => (
      //                     <button
      //                         key={link.id}
      //                         // onClick={() => handleNavClick(link.id)}
      //                         className={`text-base font-medium transition-all duration-300 `}
      //                     >
      //                         {link.label}
      //                     </button>
      //                 ))}
      //             </nav>

      //             {/* CTA Button */}
      //             <div className="hidden md:flex items-center gap-2">
      //                 <button
      //                     // onClick={() => handleNavClick('contact')}
      //                     className="px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
      //                 >
      //                     Hire Me
      //                 </button>
      //             </div>

      //             {/* Mobile Menu Button */}
      //             <button
      //                 onClick={() => setIsMenuOpen(!isMenuOpen)}
      //                 className="md:hidden p-4 text-white hover:text-white/80 transition-colors"
      //                 aria-label="menu"
      //                 aria-expanded={isMenuOpen}
      //             >
      //                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      //             </button>
      //         </div>
      //     </div>

      //     {/* Mobile Menu */}
          
      //     <div
      //         className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen
      //             ? 'max-h-96 opacity-100' 
      //             : 'max-h-0 opacity-50'
      //         }`}
      //     >
      //         <div className='bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3'>
      //             {NAV_LINKS.map(link => (
      //                 <button
      //                     key={link.id}
      //                     // onClick={() => handleNavClick(link.id)}
      //                     className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 `}
      //                 >
      //                     {link.label}
      //                 </button>
      //             ))}
      //             <button
      //                 // onClick={() => handleNavClick('contact')}
      //                 className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2"
      //             >
      //                 Hire Me
      //             </button>
      //         </div>
      //     </div>
      // </nav>
    )
}

export default Navbar;
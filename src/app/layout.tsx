import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "./(non-dashboard)/_components/FooterSection";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PashPro | Global Enterprise Procurement Servicing & Strategic Sourcing",
  description:
    "PashPro provides comprehensive procurement servicing, strategic direct/indirect sourcing, supplier relationship management, and contract optimization for enterprise organizations.",
  keywords: [
    "procurement servicing",
    "strategic sourcing",
    "supplier management",
    "contract negotiation",
    "tail spend management",
    "procure to pay",
    "supply chain consulting",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <FooterSection />
        </body>
      </ThemeProvider>
    </html>
  );
}


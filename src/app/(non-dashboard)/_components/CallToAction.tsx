"use client"

import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const CallToAction = () => {
  return (
    <div className="relative py-24">
      <Image 
        src="/landing-call-to-action.png"
        fill
        alt="Fayhoo call to action Image"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center"/>
        <motion.div
            initial={{opacity:0, y:20}}
            animate={{}}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true}}
            className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
        >
            <div className="flex flex-col md:flex-row justify-between items-center">
                <header className="mb-6 md:mb-0 md:mr-10">
                    <h2 className="text-2xl font-bold text-white">
                        Find Out How Much You Could Be Saving — In Just 30 Minutes
                    </h2>
                </header>
                <div className="">
                    <p className="text-white mb-3">
                        Book a free, no-obligation consultation. We'll review your current purchasing and show you exactly where the savings are hiding — with real numbers, not vague promises.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
                            className="inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:text-primary-50 hover:bg-primary-500"
                        >
                            Get Started
                        </button>
                        <Link
                            href="/#"
                            className={`inline-block text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600 `}
                            scroll={false}
                        >
                            call us now
                        </Link>
                    </div>
                </div>
            </div>

        </motion.div>
      
    </div>
  )
}

export default CallToAction;
"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
}

const DiscoverySection = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{containerVariants}}
        className='py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-blue-50'
    >
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
            <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
            >
                We build a tailored procurement strategy that saves you time and money.
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
                {[0, 1, 2, 3].map((index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <DiscoveryCard 
                            imageSrc={`/landing-search${3 - index}.png`}
                            title={
                                [
                                    "Discover ",
                                    "Strategize ",
                                    "Source and Negotiation",
                                    "Deliver & Optimize "
                                ][index]
                            }
                            description={
                                [
                                    "We analyze your current spending, needs, and challenges",
                                    "We design a sourcing plan tailored to your goals",
                                    "We tap into our supplier network to secure the best deals",
                                    "We manage orders, quality, and continuous improvement"
                                
                                ][index]
                            }
                        />
                    </motion.div>
                    
                ))}
            </div>

        </div>
      
    </motion.div>
  )
}

interface DiscoveryCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const DiscoveryCard = ({imageSrc, title, description}: DiscoveryCardProps) => {
    return (
        <div className="text-center">
            <div className="p-4 rounded-xl mb-4 flex justify-center items-center h-48">
                <Image 
                    src={imageSrc}
                    width={400}
                    height={400}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="mb-4">{description}</p>
            <Link
                href="/"
                className="inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
                scroll={false}
            >
                {/* {linkText} */}
            </Link>
        </div>
    )
}

export default DiscoverySection;
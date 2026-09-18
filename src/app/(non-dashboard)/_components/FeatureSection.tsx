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

const FeatureSection = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{containerVariants}}
        className='py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white'
    >
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
            <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
            >
                From sourcing to delivery, we've built every feature with your bottom line in mind.
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
                {[0, 1, 2].map((index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <FeatureCard 
                            imageSrc={`/landing-search${3 - index}.png`}
                            title={
                                [
                                    "Smart Supplier Matching ",
                                    " End-to-Order Management ",
                                    "Quality Assurance",
                                    "Global Sourcing Power",
                                    "Flexible Engagement "
                                ][index]
                            }
                            description={
                                [
                                    "We pair your needs with the best-fit suppliers based on price, quality, and location",
                                    "We handle quotes, orders, documentation, and follow-ups so you don't have to",
                                    "Every product is inspected against your specifications before it ships",
                                    "Tap into international markets without the language, logistics, or compliance headaches",
                                    "Use us for a single project or outsource your entire procurement function"
                                ][index]
                            }
                            linkText={['Explore', "Search", 'Discover'][index]}
                            linkHref={['/explore', '/search', '/discover'][index]}
                        />
                    </motion.div>
                    
                ))}
            </div>

        </div>
      
    </motion.div>
  )
}

interface FeatureCardProps {
    imageSrc: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
}

const FeatureCard = ({imageSrc, title, description, linkText, linkHref}: FeatureCardProps) => {
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
                href={linkHref}
                className="inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
                scroll={false}
            >
                {linkText}
            </Link>
        </div>
    )
}

export default FeatureSection
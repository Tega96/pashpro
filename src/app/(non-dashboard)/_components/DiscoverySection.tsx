"use client"

import { Button, buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
}

const DISCOVER = [
    {
        imageSrc: '/landing-icon-wand.png',
        title: 'Discover and Strategize',
        description: "We analyze your current spending, needs, and challenges We design a sourcing plan tailored to your goals"
    },
    {
        imageSrc: '/landing-icon-calendar.png',
        title: 'Sourcing and ne',
        description: "We tap into our supplier network to secure the best deals"
    },
    {
        imageSrc: '/landing-icon-heart.png',
        title: 'Enjoy your New Home',
        description: "Move into your new rental property and start enjoying your dream home"
    }

]

const DiscoverSection = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{containerVariants}}
        className='py-12 mb-16 bg-white'
    >
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <motion.div
                variants={itemVariants}
                className="my-12 text-center"
            >
                <h2 className="text-3xl font-semibold leading-tight text-gray-800">
                    Discover Our Services
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Find your Dream rental Property Today!
                </p>
                <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
                    Whether you need help sourcing a single product category or a full end-to-end procurement solution, 
                    we've got you covered. Explore our services and see how we can transform the way your business buys.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
                {DISCOVER.map((card, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <DiscoverCard {...card}/>
                    </motion.div>
                    
                ))}
                <Link href="/services" className={`mt-4 text-center ${buttonVariants({variant: 'outline'})} `}>
                    Explore our services
                </Link>
            </div>

        </div>
      
    </motion.div>
  )
}

interface DiscoverCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const DiscoverCard = ({imageSrc, title, description}: DiscoverCardProps) => {
    return (
        <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72 text-center">
            <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
                <Image 
                    src={imageSrc}
                    width={30}
                    height={30}
                    alt={title}
                    className="w-full h-full"
                />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mt-4">{title}</h3>
            <p className="mt-2 text-base text-gray-500">{description}</p>
        </div>
    )
}

export default DiscoverSection;

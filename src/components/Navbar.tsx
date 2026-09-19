"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { NAVLINK } from "@/lib/utils";


const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-auto shadow-xl">
            <div className="flex justify-between items-center w-full bg-primary-700 text-white py-3 px-8">
                <div className=" flex items-center gap-4 md:gap-6">
                    <Link 
                        href="/landing"
                        className="cursor-pointer hover:text-primary-700"
                        scroll={false}
                    >
                        <div className="flex items-center gap-3">
                            <Image 
                                src="/logo.png"
                                alt="Logo of Fayhoo Haven"
                                width={36}
                                height={36}
                                className="w-12 h-12"
                            />
                            <span>
                                <span className="">Pash</span>
                                <span className="text-secondary-500 font-light hover:text-primary-300">Pro</span>
                            </span>
                        </div>
                    </Link>
                </div>

                <nav className="">
                    <ul className="hidden md:flex space-x-6">
                        {NAVLINK.map(({linkTitle, linkHref}) => (
                            <li key={linkTitle}>
                                <Link href={linkHref}>{linkTitle}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-5">
                                 
                    <Link href="/contact">
                        <Button
                            variant="outline"
                            className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
                        >
                            Get started
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
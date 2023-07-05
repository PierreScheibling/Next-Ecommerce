'use client'

import Image from "next/image";
import ldg from "@/public/landing.jpeg"
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function Landing() {
    return (
        <AnimatePresence >
            <motion.div className="flex w-[100%]"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0, transition: {duration: 1} }}
            >
                <Image src={ldg} alt="landingPageImage" width={1000} height={1000} className=" h-[80vh] w-[100%] md:h-[78vh] md:w-[80%] object-cover"/>
                <div className="hidden md:flex md:h-[78vh] md:items-center md:justify-center md:w-[20%]">
                    <div className="flex-col align-center w-[100%]">
                        <Link href={"/"} className="flex w-[100%] align-center justify-center">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className="py-4 w-1/2 bg-black text-white flex align-center justify-center">
                                Shop Now
                            </motion.div>
                        </Link>
                    </div>
                </div>
                <Link href={"/"}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="md:hidden absolute top-1/2 right-1/3 py-2 w-1/3 bg-black text-white flex align-center justify-center"
                    >
                        Shop Now
                    </motion.div>
                </Link>
            </motion.div>
        </AnimatePresence>
    )
}
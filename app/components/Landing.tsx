'use client'

import Image from "next/image";
import angelic from "../../public/angelic.jpeg"
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export const Landing = () => {
    return (
        <AnimatePresence >
            <motion.div className="flex-grow relative"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0, transition: {duration: 1} }}
            >
                <Image src={angelic} alt="landingPageImage" width={1000} height={1000} className="flex-grow-1 h-[80vh] w-[100%] object-cover grayscale-[10%]"/>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: {delay: 0.4} }}
                    exit={{ opacity: 0, transition: {duration: 1} }}
                    className="absolute bottom-[45%] md:bottom-[33%] left-[20%] flex-col justify-center align-center w-[60%]">
                    <h1 className="hidden font-lobster md:flex justify-center text-5xl my-12 text-black font-extralight">Discover our Summer Collection</h1>
                    <Link href={"/shop"} className="flex align-center justify-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="py-4 w-[40%] bg-black text-white flex align-center justify-center">
                            Shop Now
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
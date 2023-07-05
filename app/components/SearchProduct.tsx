'use client'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { SearchParamTypes } from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"
import AddCart from "../product/[id]/AddCart"
import Image from "next/image"

export const SearchProduct = ({searchParams}: SearchParamTypes) => {
    return(
        <AnimatePresence>
            <motion.div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12" initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}>
                < Image src={searchParams.image} alt={searchParams.name} width={800} height={800} className="h-[60vh] w-[100%] object-cover md:w-2/5 md:h-[75vh] md:object-cover" priority={true}/>
                <div className="h-4/6 md:w-3/5">
                    <h1 className="text-2xl pb-2 font-medium">{searchParams.name}</h1>
                    <p className="py-2 text-justify font-light">{searchParams.description}</p>
                    {/* <p className="py-2">{searchParams.features}</p> */}
                    <div className="py-2">
                        {Array.isArray(searchParams.size) && searchParams.size.length > 1 && searchParams.size.map((s) => (
                            <span key={s} className="items-center mr-2 text-sm cursor-pointer text-gray-500 hover:text-black">{s}</span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <p className="font-medium">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
                    </div>
                    <AddCart {...searchParams}/>
                    <div className="flex justify-between mt-1 text-sm"><span>Free Shipping</span><div className="h-8 border-r pr-4"></div><span>Free return</span></div>
                    <div className="text-sm mb-4">Details</div>
                </div>
            </motion.div>
        </AnimatePresence>
    )  
}
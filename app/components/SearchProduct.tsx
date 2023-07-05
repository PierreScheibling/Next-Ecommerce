'use client'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { SearchParamTypes } from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"
import AddCart from "../product/[id]/AddCart"
import Image from "next/image"
import { useState } from 'react'
import natural from "../../public/100p-natural.png"
import european from "../../public/european-union.png"
import road from "../../public/road-transport.png"

export const SearchProduct = ({searchParams}: SearchParamTypes) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleToggleDetails = () => {
        setIsDetailsOpen(!isDetailsOpen);
    };

    const handleSizeClick = (size: any) => {
        setSelectedSize(size);
      };

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
                            <span key={s}
                            className={`items-center mr-2 text-sm cursor-pointer ${
                              selectedSize === s ? "text-black" : "text-gray-500"
                            }`}
                            onClick={() => handleSizeClick(s)}>{s}</span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <p className="font-medium">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
                    </div>
                    <AddCart {...searchParams}/>
                    <div className="flex justify-between mt-1 text-sm"><span>Free Shipping</span><div className="h-8 border-r pr-4"></div><span>Free return</span></div>
                    <div className="text-sm my-4 cursor-pointer underline" onClick={handleToggleDetails}>Details +</div>
                    {isDetailsOpen && (
                    <div className="flex justify-between">
                        <div className="flex-col align-center w-[40%]">
                            <div className="flex ml-6 align-center my-4">
                                <Image src={natural} alt="100% natural" width={100} height={100} className="h-6 w-6"/>
                                <p className="flex text-xs ml-4 font-thin h-6 align-center">100% natural</p>
                            </div>
                            <div className="flex ml-6 align-center my-4">
                                <Image src={european} alt="European Union" width={100} height={100} className="h-6 w-6"/>
                                <p className="flex text-xs ml-4 font-thin h-6 align-center">European Union</p>
                            </div>
                            <div className="flex ml-6 align-center my-4">
                                <Image src={road} alt="Road Transport" width={100} height={100} className="h-6 w-6"/>
                                <p className="flex text-xs ml-4 font-thin h-6 align-center">Road Transport</p>
                            </div>
                        </div>
                        <div className="flex justify-center h-25 border-r pr-4"></div>
                        <div className="w-[60%] ml-6">
                            <p className="text-xs font-bold text-justify my-4">Care instructions to help you look after your pieces and keep them looking good for longer :</p>
                            <p className="text-xs font-thin mt-4">Wash at or below 30°C (synthetics cycle)</p>
                        </div>
                    </div>

                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    )  
}
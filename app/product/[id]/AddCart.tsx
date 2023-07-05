'use client'

import { useCartStore } from "@/store"
import { AddCartType } from "@/types/AddCartType"
import { useState } from "react"
import { motion } from "framer-motion"

export default function AddCart({name, id, image, unit_amount, quantity}: AddCartType) {
    const cartStore = useCartStore()
    const [added, setAdded] = useState(false)

    const handleAddToAcart = () => {
        cartStore.addProduct({id, name, image, unit_amount, quantity})
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 700)
    }

    return (
        <>
            <motion.button
                onClick={handleAddToAcart}
                disabled={added}
                className="py-2 mt-4 bg-black text-white w-full mb-4"
            >
                {!added &&  <span>Add to cart</span>}
                {added &&  <span>Adding to cart 😃</span>}
            </motion.button>
        </>
    )
}
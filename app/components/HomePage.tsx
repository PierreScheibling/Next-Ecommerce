'use client'
import { useState } from 'react'
import { Navigation } from './Navigation'
import Product from './Product'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

export const HomePage = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <AnimatePresence>
        <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
        >
            <Navigation
                products={products}
                setSelectedCategory={setSelectedCategory}
            />
            <AnimatePresence mode="wait">
                <main className="md:grid md:items-center md:grid-cols-4 md:gap-10 flex-col w-[100%]">
                    {products.map((product) => {
                    if (selectedCategory === product.category) {
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ when: "beforeChildren", staggerChildren: 1, }}>
                                    <Product {...product} key={product.id} />
                            </motion.div>
                    )} else if (selectedCategory === 'All') {
                        return (
                            <motion.div
                            key={product.id}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ when: "beforeChildren", staggerChildren: 1, }}>
                                <Product {...product} key={product.id} />
                            </motion.div>
                    )}
                    })}
                </main>
            </AnimatePresence>
        </motion.div>
    </AnimatePresence>
  )
}
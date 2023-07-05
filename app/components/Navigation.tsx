'use client'
import { useState } from 'react'

export const Navigation = ({ products, setSelectedCategory }: any) => {
  const categories = Array.from(
    new Set(products.map((product: any) => product.category))
  )

  return (
    <nav className="grid justify-center grid-cols-3 gap-4 mb-4 md:grid-cols-7">
      <button
        onClick={() => setSelectedCategory('All')}
        className="px-4 py-2 mr-2 text-xs bg-gray-100 md:mb-8 dark:text-black"
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 mr-2 text-xs bg-gray-100 md:mb-8 dark:text-black"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  )
}
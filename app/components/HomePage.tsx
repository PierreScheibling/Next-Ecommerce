'use client'
import { useState } from 'react'
import { Navigation } from './Navigation'
import Product from './Product'

export const HomePage = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div>
      <Navigation
        products={products}
        setSelectedCategory={setSelectedCategory}
      />

      <main className="md:grid md:items-center md:grid-cols-4 md:gap-10 flex-col w-[100%]">
        {products.map((product) => {
          if (selectedCategory === product.category) {
            return <Product {...product} key={product.id} />
          } else if (selectedCategory === 'All') {
            return <Product {...product} key={product.id} />
          }
        })}
      </main>
    </div>
  )
}
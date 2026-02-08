'use client'

import ProductCard from "./ProductCard"

const glasses = [
  {
    id: 1,
    name: 'LONDON BLUE CATECAT',
    price: '£99',
  },
  {
    id: 2,
    name: 'TIFFANY & Co. TRIANGL',
    price: '£149',
  },
  {
    id: 3,
    name: 'Ray-Ban BROWLINE',
    price: '£125',
  },
  {
    id: 4,
    name: 'Prada BROWLINE',
    price: '£189',
  },
]

export default function PopularGlasses() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Best-Selling Frames</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {glasses.map((item) => (
          <div key={item.id} className="text-center">
            <ProductCard />
          </div>
        ))}
      </div>
    </section>
  )
}

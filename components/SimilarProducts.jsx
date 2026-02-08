'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Elegance TF2245',
    price: '£329',
    originalPrice: '£449',
    image: '/api/placeholder/180/150',
  },
  {
    id: 2,
    name: 'Luxury BG2467',
    price: '£349',
    originalPrice: '£469',
    image: '/api/placeholder/180/150',
  },
  {
    id: 3,
    name: 'Elegance TF2260',
    price: '£299',
    originalPrice: '£399',
    image: '/api/placeholder/180/150',
  },
  {
    id: 4,
    name: 'Premium BG2370',
    price: '£379',
    originalPrice: '£499',
    image: '/api/placeholder/180/150',
  },
  {
    id: 5,
    name: 'Elegance TF2265',
    price: '£319',
    originalPrice: '£429',
    image: '/api/placeholder/180/150',
  },
]

export default function SimilarProducts() {
  const [scrollPos, setScrollPos] = useState(0)

  const scroll = (direction) => {
    const newPos = direction === 'left' ? scrollPos - 300 : scrollPos + 300
    setScrollPos(Math.max(0, newPos))
  }

  return (
    <section className="my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
        Similar Luxury Frames
      </h2>

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Products Grid */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4 px-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-48 group cursor-pointer"
              >
                <div className="bg-gray-100 rounded-lg aspect-square mb-4 overflow-hidden group-hover:shadow-lg transition">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-yellow-600 transition">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-yellow-600 font-bold">{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

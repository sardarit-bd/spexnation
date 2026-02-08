'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    '/api/placeholder/500/600',
    '/api/placeholder/500/600',
    '/api/placeholder/500/600',
    '/api/placeholder/500/600',
  ]

  const thumbnails = [
    '/api/placeholder/80/80',
    '/api/placeholder/80/80',
    '/api/placeholder/80/80',
    '/api/placeholder/80/80',
  ]

  return (
    <div className="flex flex-col gap-0 border border-gray-100">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0,
          ease: "easeOut"
        }}
        className="bg-white border border-gray-100 rounded-lg aspect-square flex items-center justify-center relative overflow-hidden group">
        <Image
          width={1000}
          height={1000}
          src={'https://spexnation.co.uk/wp-content/uploads/2026/01/V4671-C60.jpg'}
          alt="Product"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100">
          <ChevronRight size={24} />
        </button>
      </motion.div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto p-4 border border-gray-100">
        {thumbnails.map((thumb, idx) => (
          <motion.button
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: .1,
              delay: .5 * idx,
              ease: "easeOut"
            }}
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition ${selectedImage === idx ? 'border-4 border-yellow-500' : 'border-2 border-gray-300'
              }`}
          >
            <Image src={"https://spexnation.co.uk/wp-content/uploads/2026/01/V4671-C60.jpg"} width={1000} height={1000} alt={`View ${idx + 1}`} className="w-full h-full object-contain" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}

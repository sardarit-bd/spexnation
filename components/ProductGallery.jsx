'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import defaultImage from "../public/defaultImage.png"

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)



  return (
    <div className="flex flex-col justify-between h-full gap-0 border border-gray-200 bg-white w-full">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0,
          ease: "easeOut"
        }}
        className="bg-white rounded-lg flex items-center justify-center relative overflow-hidden group h-full">
        <Image
          width={1000}
          height={1000}
          src={product?.product_thamnail ? product?.product_thamnail : defaultImage}
          alt="Product"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </motion.div>

      {/* Thumbnails */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: .1,
          delay: .5,
          ease: "easeOut",
          softness: "Soft"
        }}
        className="flex gap-3 overflow-x-auto pb-8 pl-3 bg-white h-fit overflow-y-hidden">
        {product?.product_Images?.map((thumb, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`flex-shrink-0 w-20 h-20 bg-white rounded-lg overflow-hidden transition ${selectedImage === idx ? 'border-4 border-yellow-500' : 'border-2 border-gray-10'
              }`}
          >
            <Image src={thumb ? thumb : defaultImage} width={1000} height={1000} alt={`View ${idx + 1}`} className="w-full h-full object-contain rounded-lg" />
          </button>
        ))}
      </motion.div>
    </div>
  )
}

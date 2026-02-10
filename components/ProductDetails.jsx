'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'
import Loading from "../components/Loading"
import useLenseStore from '../store/useLenseStore'
import useStepStore from '../store/useStepStore'

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState('black')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { step, setStep } = useStepStore();
  const { lens, setLens } = useLenseStore();
  const [isLoading, setisLoading] = useState(false);

  const colors = [
    { name: 'Black', value: 'black', hex: '#000000' },
    { name: 'Gold', value: 'gold', hex: '#D4AF37' },
    { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
  ]



  // handle wishlist
  const hanldleSelete = (e) => {
    e.preventDefault();
    setisLoading(true);

    setLens({ ...lens, LenseName: "Elegance TF2249" })

    setTimeout(() => {
      setisLoading(false);
      setStep(1);
    }, 700);
  }




  console.log(lens);





  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: .7,
        delay: 0,
        ease: "easeOut"
      }}
      className="space-y-6 bg-white border border-gray-200 p-4 h-full">
      {/* Product Title */}
      <div>
        <p className="text-yellow-600 font-bold text-sm mb-1">LUXURY COLLECTION</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Elegance TF2249</h1>
        <p className="text-gray-600">Premium Black Butterfly Frames</p>
      </div>




      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-6 h-6 ${i < Math.floor(4.5)
              ? 'fill-yellow-400 text-yellow-500'
              : 'text-gray-300'
              }`}
          />
        ))}
      </div>



      {/* Color Selection */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Available Colors</p>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              className={`w-8 h-8 rounded-full border-2 transition ${selectedColor === color.value ? 'border-yellow-500 ring-2 ring-yellow-300' : 'border-gray-300'
                }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Badge */}
      <div className="bg-green-100 text-green-800 inline-block px-3 py-1 rounded text-sm font-semibold">
        Case & Cloth Included
      </div>

      {/* Price */}
      <div className="border-b border-gray-200 pb-4">
        <p className="text-gray-600 text-sm mb-2">Includes prescription lenses</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-900">£449</span>
          <span className="text-lg text-gray-500 line-through">£599</span>
        </div>
        <p className="text-red-600 font-semibold text-sm mt-3">Only 12 frames left in stock</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button type="button" onClick={(e) => { hanldleSelete(e) }} className="w-full pBg text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2">
          {
            isLoading ? <Loading /> : "SELECT LENSES"
          }
        </button>
      </div>

    </motion.div>
  )
}

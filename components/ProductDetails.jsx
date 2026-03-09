'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Loading from "../components/Loading"
import useLenseStore from '../store/useLenseStore'
import useStepStore from '../store/useStepStore'

export default function ProductDetails({ product, activeIndex, setactiveIndex }) {
  const [selectedColor, setSelectedColor] = useState('black')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { step, setStep } = useStepStore();
  const { lens, setLens } = useLenseStore();
  const [isLoading, setisLoading] = useState(false);


  useEffect(() => {
    setLens({
      ProductDetails: product,
      LenseName: product?.ProductTitle,
      LenseBrand: product?.brand,
      LenColor: product?.product_Images[activeIndex]?.color,
      LenseUseCase: "",
      LenseThickness: "",
      pdType: "1",
      singlePD: "0",
      dualPD: {
        leftPD: "0",
        rightPD: "0",
      },
      sph: {
        leftSph: "0",
        rightSph: "0",
      },
      cyl: {
        leftCyl: "0",
        rightCyl: "0",
      },
      axis: {
        leftAxis: "0",
        rightAxis: "0",
      },
      add: {
        leftAdd: "0",
        rightAdd: "0",
      },

      addPrism: false,
      leftPrism: {
        vertical: "0",
        vBaseDirection: "N/A",
        horizontal: "0",
        hBaseDirection: "N/A",
      },
      rightPrism: {
        vertical: "0",
        vBaseDirection: "N/A",
        horizontal: "0",
        hBaseDirection: "N/A",
      },

      ProtectiveCoatings: [],
      Transition: "",
      color: "gray",
      darkness: "light",
      prescriptionImage: '',
      quantity: 1,
      total: []
    });
  }, [product])



  // handle wishlist
  const hanldleSelete = (e) => {
    e.preventDefault();
    setisLoading(true);

    setLens({ ...lens, LenseBrand: product?.brand, selectedProductIndex: activeIndex, LenseName: product?.ProductTitle, total: [...lens.total, { target: "Frame", id: product?.ProductTitle, name: product?.ProductTitle, price: product?.product_price }] })

    setTimeout(() => {
      setisLoading(false);
      setStep(1);
      window.scrollTo(0, 0);
    }, 700);
  }





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
        <p className="text-yellow-600 font-bold text-sm mb-1 uppercase">{product?.brand}</p>
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">{product?.ProductTitle}</h1>
        <p className="text-gray-600 font-light">{product?.shortdes}</p>
      </div>




      {/* <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-6 h-6 ${i < Math.floor(4.5)
              ? 'fill-yellow-400 text-yellow-500'
              : 'text-gray-300'
              }`}
          />
        ))}
      </div> */}



      {/* color */}
      <div className="flex items-center gap-3">
        {
          product?.product_Images?.map((cl, index) => {
            return (
              <div key={index} onClick={() => setactiveIndex(index)} className={`p-0.5 h-fit w-fit rounded-full cursor-pointer  ${activeIndex == index ? "border-2 border-yellow-500" : "border-gray-200"}`}>
                <div style={{ backgroundColor: cl?.color?.[0]?.value }} key={index} className="w-8 h-8 rounded-full border">

                </div>
              </div>
            )
          })
        }
      </div>





      {/* Price */}
      <div className="border-b border-gray-200 pb-4">
        <p className="text-gray-600 text-sm mb-2">Includes prescription lenses</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-light text-gray-900">£{product?.product_price}</span>
          {/* <span className="text-lg text-gray-500 line-through font-light">£599</span> */}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button type="button" onClick={(e) => { hanldleSelete(e) }} className="w-full pBg text-white font-light py-4 rounded-lg transition flex items-center justify-center gap-2">
          {
            isLoading ? <Loading /> : "Select this Frame"
          }
        </button>
      </div>

    </motion.div>
  )
}

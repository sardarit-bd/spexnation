'use client'

import { ArrowRight } from 'lucide-react'

export default function PromoTiles() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buy 2 Get 1 Tile */}
        <div className="forMan">
          <div className="relative h-64 md:h-72 flex flex-col justify-end p-6">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-100">
                For<span className="ml-2">Men</span>
              </h3>
              <p className="text-sm md:text-base mb-4">CRYSTAL CLARITY & UV PROTECTION</p>
              <button className="pBg text-white px-4 py-2 rounded font-bold text-sm hover:bg-yellow-600 transition flex items-center gap-2 w-fit">
                SHOP NOW <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Premium Lenses Tile */}
        <div className="forwoman">
          <div className="relative h-64 md:h-72 flex flex-col justify-end p-6">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-100">
                For<span className="ml-2">women</span>
              </h3>
              <p className="text-sm md:text-base mb-4">CRYSTAL CLARITY & UV PROTECTION</p>
              <button className="pBg text-white px-4 py-2 rounded font-bold text-sm hover:bg-yellow-600 transition flex items-center gap-2 w-fit">
                SHOP NOW <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Buttons */}
      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button className="border-2 border-yellow-500 text-yellow-600 px-6 py-3 rounded font-bold hover:bg-yellow-50 transition">
          SHOP FRAMES
        </button>
        <button className="border-2 border-yellow-500 text-yellow-600 px-6 py-3 rounded font-bold hover:bg-yellow-50 transition">
          SHOP SUNGLASSES
        </button>
      </div> */}
    </section>
  )
}

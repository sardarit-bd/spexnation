'use client'

import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="text-white h-[55vh] heroBG">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Images */}

          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              Stylish Glasses Made for
              <br />
              Everyday Life
            </h2>
            <p className="text-xl md:text-2xl mb-6 font-semibold text-gray-300">
              Quality frames, clear lenses, and simple pricing — delivered straight to your door across the UK.
            </p>


            {/* Brand Logos */}
            <div className="mt-8 flex flex-col flex-wrap gap-2 mb-8 justify-center md:justify-start opacity-90">
              <div className="text-md">

                <span>Secure Card & PayPal Payments</span>
              </div>
              <div className="text-md">UK-Wide Delivery</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="text-white font-bold px-6 py-3 rounded transition flex items-center justify-center gap-2 pBg">
                SHOP NOW <ArrowRight size={18} />
              </button>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

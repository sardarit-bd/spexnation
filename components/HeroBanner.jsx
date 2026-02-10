'use client'

import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="text-white h-fit md:h-[60vh] heroBG">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Images */}

          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: 0,
                ease: "easeOut"
              }}
              className="text-4xl md:text-5xl font-light mb-4 text-gray-100">
              Stylish Glasses Made for
              <br />
              Everyday Life
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="text-xl md:text-2xl mb-6 font-light text-gray-300">
              Quality frames, clear lenses, and simple pricing — delivered straight to your door across the UK.
            </motion.p>


            {/* Brand Logos */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.3,
                ease: "easeOut"
              }}
              className="mt-8 flex flex-col flex-wrap gap-2 mb-8 justify-center md:justify-start opacity-90">
              <div className="text-md">

                <span className='font-light'>Secure Card & PayPal Payments</span>
              </div>
              <div className="text-md font-light">UK-Wide Delivery</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <Link href={'/shop'} className="text-white font-light px-6 py-3 rounded transition flex items-center justify-center gap-2 pBg w-fit">
                SHOP NOW <ArrowRight size={18} />
              </Link>
            </motion.div>

          </div>


        </div>
      </div>
    </section>
  )
}

'use client'

import { Menu, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      {/* <div className="bg-amber-900 text-white text-center py-2 text-xs md:text-sm">
        <span>EXCLUSIVE OFFER | UP TO 60% OFF | LUXURY FRAMES</span>
        <span className="ml-2">→ SHOP NOW</span>
      </div> */}

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="Spex Nation" className="h-10 md:h-12" />
          </Link>

          <div className='flex gap-12'>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
                Home
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
                Shop
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
                Contact Us
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link href="/basket" className="text-gray-600 hover:text-yellow-700">
                <ShoppingBag size={26} />
              </Link>
              <button className="hidden sm:block text-gray-600 hover:text-yellow-700">
                <User size={26} />
              </button>
              <button
                className="md:hidden text-gray-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="flex flex-col md:hidden bg-gray-900 border-t border-yellow-600 py-4 px-4 space-y-2">
            <Link href="/" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
              Shop
            </Link>
            <Link href="/basket" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
              Our Basket
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
              Contact Us
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}

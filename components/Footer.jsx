'use client'

import { Facebook, Instagram, Link as LinkIcon, Music, Twitter } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="bg-gray-900 py-6 border-b border-yellow-900/70">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <p className="text-lg text-center">
            Be the first to hear about exclusive offers and new collections from Spex Nation.
          </p>

          {/* <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 sm:w-48 px-4 py-2 rounded text-gray-900 text-sm"
            />
            <button className="pBg text-white px-4 py-2 rounded font-bold transition text-sm">
              SUBSCRIBE
            </button>
          </div> */}

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold mb-4 sCl">FRAMES</h4>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:text-yellow-300 transition">Men's Frames</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Women's Frames</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Kids' Frames</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Sunglasses</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-4 sCl">LENSES</h4>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:text-yellow-300 transition">Single Vision</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Progressive</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Premium Optics</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Specialty Lenses</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-4 sCl">COMPANY</h4>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:text-yellow-300 transition">About Spex Nation</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Help & Contact</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Store Locator</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Careers</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold mb-4 sCl">SUPPORT</h4>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:text-yellow-300 transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Track Order</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition ">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t pt-8 border-yellow-900/70 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Website"
              >
                <LinkIcon size={20} />
              </a>
            </div>
          </div>

          <p className="text-md font-light text-gray-400">
            © 2024 Spex Nation. All rights reserved. Premium eyewear for the discerning eye.
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { Menu, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeaderCartIcon from "../components/HeaderCartIcon";
import getTookn from "../lib/getTookn";
import verifyJWT from "../lib/verifyJWT";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [role, setrole] = useState('');
  const [isLogedIn, setIsLogedIn] = useState(false);











  useEffect(() => {

    let isMounted = true;

    const loadUser = async () => {
      try {
        const token = getTookn();
        if (!token) return;

        const decoded = await verifyJWT(token);

        if (isMounted && decoded) {
          setname(decoded?.name);
          setemail(decoded?.email);
          setrole(decoded?.role);
          setIsLogedIn(true);
        }

      } catch (err) {
        console.error("User load failed:", err);
        setIsLogedIn(false);
      }
    };

    loadUser();

    return () => {
      isMounted = false; // cleanup
    };

  }, []);













  return (
    <>
      {/* Top Banner */}

      {
        pathName === '/' && (
          <div className="sBg text-white text-center py-1 text-xs md:text-sm">
            <span>EXCLUSIVE OFFER | UP TO 60% OFF | LUXURY FRAMES</span>
            <Link href="/shop" className="ml-2 underline">→ SHOP NOW</Link>
          </div>
        )
      }

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
              <Link href="/" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
                Home
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
                Shop
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
                Mens
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
                Womens
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
                Contact Us
              </Link>
            </nav>




            {/* Icons */}
            <div className="flex items-center gap-3">


              {
                isLogedIn ? (
                  <Link href="/dashboard" className="text-gray-600 hover:text-yellow-700">
                    <User size={26} />
                  </Link>
                ) : (
                  <Link href="/signin" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
                    Sign In
                  </Link>
                )
              }

              <HeaderCartIcon />
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
          <nav className="flex flex-col md:hidden bg-gray-100 border-t border-yellow-600/20 py-6 px-4 space-y-2">
            <Link onClick={() => setIsOpen(!isOpen)} href="/" className="text-gray-600 hover:text-yellow-700 text-lg font-semibold">
              Home
            </Link>
            <Link onClick={() => setIsOpen(!isOpen)} href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
              Shop
            </Link>

            <Link onClick={() => setIsOpen(!isOpen)} href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
              Mens
            </Link>

            <Link onClick={() => setIsOpen(!isOpen)} href="/shop" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
              Womens
            </Link>


            <Link onClick={() => setIsOpen(!isOpen)} href="/contact" className="text-gray-600 hover:text-yellow-700 text-lg font-light">
              Contact Us
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}

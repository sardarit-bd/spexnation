'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BestSellingProductSkalaton from "../components/skalaton/BestSellingProductSkalaton";
import ProductCard from "./ProductCard";



export default function PopularGlasses() {


  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      // Make API call to get all the product
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allproducts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json();
      setAllProducts(res?.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, [])




  return (
    <section className="bg-gray-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-5xl font-light text-gray-900 text-center mb-12 text-gray-900">Best-Selling Frames</h2>

        {
          loading ? (
            <BestSellingProductSkalaton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              {allProducts.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut"
                  }}
                  key={index} className="text-center">
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </div>
          )
        }

      </section>
    </section >
  )
}

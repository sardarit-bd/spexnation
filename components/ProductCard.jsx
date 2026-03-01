'use client'

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Loading from "./Loading";

export default function ProductCard({ item }) {

    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [selectedSize, setSelectedSize] = useState('M');
    const [activeIndex, setactiveIndex] = useState(0);

    const router = useRouter();

    const product = {
        name: 'Premium Wireless Headphones',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.5,
        reviews: 128,
        image: 'https://spexnation.co.uk/wp-content/uploads/2026/01/V4671-C60.jpg',
        badge: 'Best Seller',
        inStock: true,
    };





    // handle view function is here
    const handleView = (e, item) => {

        e.preventDefault();

        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            router?.push(`/shop/${item?._id}`);
        }, 700);
    }







    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-white">
                <Image
                    src={item?.product_Images[activeIndex]?.img}
                    alt={item?.ProductTitle}
                    width={1000}
                    height={1000}
                    className="w-full h-[190px] object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* Quick View on Hover */}

            </div>

            {/* Content */}
            <div className="p-4 border-t border-gray-200 bg-yellow-200/10">
                {/* Rating */}
                {/* <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                    </span>
                </div> */}

                {/* Product Name */}
                <h3 className="text-left text-xl font-light text-gray-900/80 mb-2 line-clamp-2 transition-colors cursor-pointer">
                    {item?.ProductTitle}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between gap-3 my-4 mt-6">
                    <span className="text-2xl font-light text-gray-700/60">
                        £{item?.product_price}
                    </span>

                    {/* color */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1">
                            {
                                item?.product_Images?.map((cl, index) => {
                                    return (
                                        <div key={index} onMouseOver={() => setactiveIndex(index)} className={`p-0.5 h-fit w-fit rounded-full cursor-pointer  ${activeIndex == index ? "border-2 border-yellow-500" : ""}`}>
                                            <div style={{ backgroundColor: cl?.color?.[0]?.value }} key={index} className="w-5 h-5 rounded-full">
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Add to Cart Button */}
                <div
                >
                    <button
                        onClick={(e) => { handleView(e, item) }}
                        disabled={!product.inStock}
                        className="pBg text-white font-light px-6 py-3 transition flex items-center justify-center gap-2 w-full"
                    >


                        {
                            isLoading ? (
                                <Loading />
                            ) : (
                                <>
                                    Explore < ArrowRight className="" size={18} />
                                </>
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
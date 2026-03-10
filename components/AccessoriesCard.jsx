'use client'

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Loading from "./Loading";

export default function AccessoriesCard({ item }) {

    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [selectedSize, setSelectedSize] = useState('M');
    const [activeIndex, setactiveIndex] = useState(0);

    const router = useRouter();



    console.log(item);



    // handle view function is here
    const handleaddtoBasket = (e, item) => {

        e.preventDefault();
        setisLoading(true);



        const hasData = JSON.parse(localStorage.getItem("lensData"));

        if (hasData === null) {
            const finalData = [item];
            localStorage.setItem("lensData", JSON.stringify(finalData));
        } else if (hasData.length === 0) {
            const finalData = [item];
            localStorage.setItem("lensData", JSON.stringify(finalData));
        } else {
            const finalData = [...hasData, item];
            localStorage.setItem("lensData", JSON.stringify(finalData));
        }


        setTimeout(() => {
            setisLoading(false);
        }, 700);
    }







    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-white p-4">
                <Image
                    src={item?.img}
                    alt={item?.productType + " " + item?.name}
                    width={1000}
                    height={1000}
                    className="w-full h-[190px] object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* Quick View on Hover */}

            </div>

            {/* Content */}
            <div className="p-4 border-t border-gray-200 bg-yellow-200/10">

                {/* Product Name */}
                <h3 className="text-left text-xl font-light text-gray-900/80 mb-2 line-clamp-1 transition-colors cursor-pointer">
                    {item?.name}
                </h3>

                <p className="text-left text-sm font-light text-gray-900/80 mb-2 line-clamp-2">
                    {item?.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between gap-3 my-4 mt-6">
                    <span className="text-2xl font-light text-gray-700/90">
                        £{item?.price}
                    </span>
                </div>

                {/* Add to Cart Button */}
                <div
                >
                    <button
                        onClick={(e) => { handleaddtoBasket(e, item) }}
                        className="pBg text-white font-light px-6 py-3 transition flex items-center justify-center gap-2 w-full"
                    >


                        {
                            isLoading ? (
                                <Loading />
                            ) : (
                                <>
                                    Add to Basket < ArrowRight className="" size={18} />
                                </>
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
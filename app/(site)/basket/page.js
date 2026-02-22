"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import defaultImage from "../../../public/defaultImage.png";
import useLenseStore from "../../../store/useLenseStore";
import useStepStore from "../../../store/useStepStore";

export default function CartPage() {


    const { setStep } = useStepStore();
    const { setLens } = useLenseStore();
    const [hasData, sethasData] = useState([]);



    useEffect(() => {


        setStep(0);


        setLens({
            ProductDetails: {},
            LenseName: "",
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
            total: []
        });



        sethasData(JSON.parse(localStorage.getItem("lensData")));
        // Trigger header update
        window.dispatchEvent(new Event("lensUpdated"));
        window.scrollTo(0, 0);
    }, []);





    // handle remove function is here
    function handleRemoveItem(e, id) {

        e.preventDefault();


        const filteredData = hasData?.filter((item) => item.ProductDetails?._id !== id);
        localStorage.setItem("lensData", JSON.stringify(filteredData));
        window.location.reload();

    }


    return (
        <section className="h-fit bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-5">

                {/* CART ITEMS */}
                <div className="lg:col-span-2 space-y-5">
                    <h1 className="text-2xl font-light text-gray-800 bg-white border p-3">
                        Your Basket ({hasData?.length})
                    </h1>

                    {hasData?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border p-6 flex gap-6"
                        >
                            {/* IMAGE */}
                            <div className="w-40 shrink-0">
                                <Image
                                    src={item.ProductDetails?.product_thamnail ? item.ProductDetails?.product_thamnail : defaultImage}
                                    alt={item.LenseName}
                                    width={160}
                                    height={100}
                                    className="object-contain border border-gray-200 h-full w-full"
                                />
                            </div>

                            {/* DETAILS */}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="text-sm text-yellow-600">{item?.ProductDetails?.collection}</span>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.LenseName} (£350)
                                        </h3>
                                        <p className="text-sm text-gray-600">{item?.ProductDetails?.shortdes}</p>
                                    </div>
                                    <button onClick={(e) => {
                                        handleRemoveItem(e, item?.ProductDetails?._id)
                                    }} className="h-7 w-7 flex items-center justify-center text-gray-400 hover:bg-gray-200">
                                        <RxCross2 className="text-2xl" />
                                    </button>
                                </div>

                                <div className="mt-2 flex justify-between w-full">
                                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                                        <p> <b>Color:</b> {item.ProductDetails?.color}</p>
                                        <p> <b>Size:</b> {item.ProductDetails?.size}</p>
                                    </div>

                                    {/* <div className="mt-4 space-y-2 text-sm">
                                        <div className="flex items-center gap-1">
                                            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center cursor-pointer">
                                                <FaMinus />
                                            </div>
                                            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                                                5
                                            </div>
                                            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center cursor-pointer">
                                                <FiPlus />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* SUMMARY */}
                <div className="bg-white border p-6 h-full sticky top-28">

                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-xl font-light mb-4">Summary</h2>

                            <p className="text-sm text-teal-600 mb-4">
                                Enjoy free shipping
                            </p>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span>Items:</span>
                                    <span>{hasData?.length}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>£{900}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <hr />
                            <div className="flex justify-between font-semibold text-lg mt-4">
                                <span>Order Total</span>
                                <span>£{900}</span>
                            </div>

                            <button className="w-full mt-6 bg-yellow-700 text-lg text-white py-3 rounded-lg font-light transition">
                                Proceed to checkout
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

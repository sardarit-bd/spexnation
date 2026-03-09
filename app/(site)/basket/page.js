"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Loading from "../../../components/Loading";
import ProductBreadcrumb from "../../../components/ProductBreadcrumb";
import getTookn from "../../../lib/getTookn";
import getTotalPrice from "../../../lib/getTotalPrice";
import verifyJWT from "../../../lib/verifyJWT";
import defaultImage from "../../../public/defaultImage.png";
import useLenseStore from "../../../store/useLenseStore";
import useStepStore from "../../../store/useStepStore";


const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Basket ', href: '/basket' }
]


export default function CartPage() {


    const { setStep } = useStepStore();
    const { setLens } = useLenseStore();
    const [isLoading, setIsLoading] = useState(false);
    const [hasData, sethasData] = useState([]);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const router = useRouter();



    useEffect(() => {


        setStep(0);


        setLens({
            ProductDetails: {},
            LenseName: "",
            LenColor: {},
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
            quantity: 1,
            total: []
        });



        const loadUser = async () => {
            try {
                const token = getTookn();
                if (!token) return;

                const decoded = await verifyJWT(token);

                if (decoded) {
                    setIsLogedIn(true);
                }

            } catch (err) {
                console.error("User load failed:", err);
                setIsLogedIn(false);
            }
        };

        loadUser();

        sethasData(JSON.parse(localStorage.getItem("lensData")) || []);
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








    // hanlde procced to checkout function is here
    function handleProccedToCheckout(e) {

        e.preventDefault();



        if (!hasData?.length) {
            toast.error("Please Add Product First");
            return;
        }

        if (hasData?.length > 1) {
            toast.error("You can Perchase Only One Product at a time");
            return;
        }



        if (!isLogedIn) {
            toast.error("You Must Login First to Checkout");
            return;
        }




        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router?.push('/basket/checkout');
        }, 700);

    }





    console.log(hasData);





    const TotalCalculation = (quantity) => {
        let priceTotal = 0;
        hasData?.forEach((item) => {
            const thisQuantity = item.quantity;
            const thisGetTotal = getTotalPrice(item.total);
            priceTotal += thisGetTotal * thisQuantity;
        });

        return priceTotal;
    };



    // handle quantity increase function is here
    function handleIncrease(e, index) {

        e.preventDefault();
        const filteredData = hasData?.map((item, idx) => {
            if (idx === index) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        localStorage.setItem("lensData", JSON.stringify(filteredData));
        window.location.reload();
    }




    // handle quantity decrease function is here
    function handleDecrease(e, index) {

        e.preventDefault();
        const filteredData = hasData?.map((item, idx) => {
            if (idx === index) {

                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        localStorage.setItem("lensData", JSON.stringify(filteredData));
        window.location.reload();
    }






    console.log(hasData);



    return (
        <section className="h-fit bg-gray-50 pt-3 pb-10">

            <div className="max-w-7xl mx-auto px-4">
                <ProductBreadcrumb breadcrumbs={breadcrumbs} />
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-5 ">

                {/* CART ITEMS */}
                <div className="lg:col-span-2 space-y-5 bg-white border border-gray-200">
                    <h1 className="text-2xl font-light text-gray-800 bg-white border-b p-3">
                        Your Basket ({hasData?.length})
                    </h1>

                    {hasData?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 m-3 md:m-6 border p-3 md:p-6 flex flex-col md:flex-row gap-6"
                        >
                            {/* IMAGE */}
                            <div className="w-20 md:w-40 shrink-0">
                                <Image
                                    src={item.ProductDetails?.product_Images[item?.selectedProductIndex
                                    ] ? item.ProductDetails?.product_Images[item?.selectedProductIndex
                                    ]?.img[0] : defaultImage}
                                    alt={item.LenseName}
                                    width={160}
                                    height={100}
                                    className="object-contain border border-gray-200 h-full w-full bg-white"
                                />
                            </div>

                            {/* DETAILS */}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="text-sm text-yellow-600">{item?.ProductDetails?.collection}</span>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item?.LenseName} (£350)
                                        </h3>
                                        <p className="text-sm text-gray-600">{item?.ProductDetails?.shortdes}</p>
                                    </div>
                                    <button onClick={(e) => {
                                        handleRemoveItem(e, item?.ProductDetails?._id)
                                    }} className="h-7 w-7 flex items-center justify-center text-gray-400 bg-white border border-gray-100 hover:scale-110 transform duration-200">
                                        <RxCross2 className="text-2xl" />
                                    </button>
                                </div>

                                <div className="mt-2 flex justify-between w-full">
                                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                                        <p>
                                            <b>Frame Color : </b>
                                            {item?.LenColor?.[0]?.name}</p>
                                    </div>

                                    <div className="mt-4 space-y-2 text-sm">
                                        <div className="flex items-center gap-1">
                                            <div onClick={(e) => handleDecrease(e, index)} className="w-8 h-8 bg-gray-200 flex items-center justify-center cursor-pointer">
                                                <FaMinus />
                                            </div>
                                            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                                                {item?.quantity}
                                            </div>
                                            <div onClick={(e) => handleIncrease(e, index)} className="w-8 h-8 bg-gray-200 flex items-center justify-center cursor-pointer">
                                                <FiPlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                    <div className="w-full px-6 pb-6 pt-0 flex items-center justify-end">
                        <Link href="/shop" className="text-gray-600 text-md underline">Continue Shopping</Link>
                    </div>
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
                                    <span>£{TotalCalculation()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <hr />
                            <div className="flex justify-between font-semibold text-lg mt-4">
                                <span>Order Total</span>
                                <span>£{TotalCalculation()}</span>
                            </div>

                            <button onClick={(e) => { handleProccedToCheckout(e) }} className="w-full mt-6 bg-yellow-700 text-white py-3 rounded-lg font-light transition flex items-center justify-center">
                                {
                                    isLoading ? (
                                        <div className="py-0.5">
                                            <Loading />
                                        </div>
                                    ) : (
                                        <span className="text-lg">Proceed to checkout</span>
                                    )
                                }
                            </button>

                        </div>
                    </div>

                </div>
            </div>
            <Toaster position="top-center" />
        </section >
    );
}

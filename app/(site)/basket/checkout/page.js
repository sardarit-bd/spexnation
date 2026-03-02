"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../../components/Loading";
import ProductBreadcrumb from "../../../../components/ProductBreadcrumb";
import getTookn from "../../../../lib/getTookn";
import getTotalPrice from "../../../../lib/getTotalPrice";
import verifyJWT from "../../../../lib/verifyJWT";




const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Basket ', href: '/basket' },
    { label: 'Checkout', href: '/basket/checkout' },
]


export default function Checkout() {


    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [hasData, sethasData] = useState([]);
    const [IsLogedIn, setIsLogedIn] = useState(false);

    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [address1, setaddress1] = useState('');
    const [address2, setaddress2] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zipcode, setzipcode] = useState('');
    const [country, setcountry] = useState('');




    useEffect(() => {


        const loadUser = async () => {
            try {
                const token = getTookn();
                if (!token) {
                    router.push('/basket');
                    return;
                };

                const decoded = await verifyJWT(token);

                if (decoded) {
                    setfullname(decoded?.name);
                    setemail(decoded?.email);
                    setIsLogedIn(true);
                }

            } catch (err) {
                console.error("User load failed:", err);
                setIsLogedIn(false);
            }
        };

        loadUser();


        const localData = JSON.parse(localStorage.getItem("lensData")) || [];

        if (localData.length === 0) {
            router.push('/basket');
            return;
        }

        sethasData(localData);
        window.scrollTo(0, 0);
    }, []);




    // hanlde procced to checkout function is here
    async function handleProccedToCheckout(e) {

        e.preventDefault();




        if (!fullname || !email || !address1 || !address2 || !city || !state || !zipcode || !country) {
            toast.error("Please fill all the fields.");
            return;
        }

        setIsLoading(true);

        const data = {
            fullname,
            email,
            address1,
            address2,
            city,
            state,
            country,
            zipcode,
            country,
            hasData,
        };

        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createorder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setfullname('');
            setemail('');
            setaddress1('');
            setaddress2('');
            setcity('');
            setstate('');
            setzipcode('');
            setcountry('');
        } else {
            toast.error(res.message);
        }

        setIsLoading(false);

    }


    const TotalCalculation = () => {
        let priceTotal = 0;
        hasData?.forEach((item) => {
            priceTotal += getTotalPrice(item.total);
        });
        return priceTotal;
    };




    return (
        <section className="h-fit bg-gray-50 pt-3 pb-10">

            <div className="max-w-7xl mx-auto px-4">
                <ProductBreadcrumb breadcrumbs={breadcrumbs} />
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-5">

                {/* CART ITEMS */}
                <div className="lg:col-span-2 space-y-5">
                    <div className="space-y-3 bg-white border border-gray-200 p-5">
                        <div className="">
                            <h1 className="text-2xl font-semibold text-gray-800">
                                Checkout Page
                            </h1>
                            <p className="text-md text-gray-400">Fill in your billing & shipping details.</p>
                        </div>
                        <div className="pt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        Full Name <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input value={fullname} onChange={(e) => setfullname(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>


                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        Email Address <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input disabled value={email} onChange={(e) => setemail(e.target.value)} type="email" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>


                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        Address Line 1 <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input value={address1} onChange={(e) => setaddress1(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                    <span className="text-xs text-gray-400">Street address, P.O. box, company name, c/o</span>
                                </div>

                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        Address Line 2 <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input value={address2} onChange={(e) => setaddress2(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                    <span className="text-xs text-gray-400">Apartment, suite, unit, building, floor, etc.</span>
                                </div>


                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        City <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input value={city} onChange={(e) => setcity(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>



                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        State/Province/Region <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input value={state} onChange={(e) => setstate(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>

                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        ZIP /  Postal Code <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input value={zipcode} onChange={(e) => setzipcode(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>


                                <div>
                                    <label className="text-gray-400 flex items-start gap-2">
                                        Country <span className="text-xs text-red-600">*</span>
                                    </label>
                                    <input value={country} onChange={(e) => setcountry(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>

                            </div>
                            {/* <div className="pt-5">



                                <textarea value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Shipping Address" className="w-full h-[150px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
                            </div> */}
                        </div>

                    </div>
                </div>

                {/* SUMMARY */}
                <div className="bg-white border p-6 h-full sticky top-28">

                    <div className="flex flex-col justify-between h-full">
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

                            <div>
                                <div className="flex items-center border border-gray-200 border-dashed p-2 justify-between font-semibold mt-4 gap-5">
                                    <span>Coupon</span>
                                    <div className="flex items-center gap-2">
                                        <input type="text" className="w-[130px] border border-gray-300 p-1 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                        <button className="bg-yellow-700 text-white text-md py-1 px-2">Apply</button>
                                    </div>
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
                                        <span className="text-lg">Proceed to Payment</span>
                                    )
                                }
                            </button>

                        </div>
                    </div>

                </div>
            </div>
            <Toaster position="top-center" />
        </section>
    );
}

"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../../components/Loading";
import ProductBreadcrumb from "../../../../components/ProductBreadcrumb";
import getTotalPrice from "../../../../lib/getTotalPrice";




const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Basket ', href: '/basket' },
    { label: 'Checkout', href: '/basket/checkout' },
]


export default function Checkout() {


    const [isLoading, setIsLoading] = useState(false);
    const [hasData, sethasData] = useState([]);

    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [zipcode, setzipcode] = useState('');
    const [city, setcity] = useState('');
    const [address, setaddress] = useState('');



    useEffect(() => {
        sethasData(JSON.parse(localStorage.getItem("lensData")));
        window.scrollTo(0, 0);
    }, []);




    console.log(hasData);







    // hanlde procced to checkout function is here
    async function handleProccedToCheckout(e) {

        e.preventDefault();




        if (!fullname || !email || !phone || !zipcode || !city || !address) {
            toast.error("Please fill all the fields.");
            return;
        }

        setIsLoading(true);

        const data = {
            fullname,
            email,
            phone,
            zipcode,
            city,
            address,
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
            setphone('');
            setzipcode('');
            setcity('');
            setaddress('');
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

                                <input value={fullname} onChange={(e) => setfullname(e.target.value)} type="text" placeholder="Full Name" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email Address" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                                <input value={phone} onChange={(e) => setphone(e.target.value)} type="tel" placeholder="Phone Number" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                                <input value={zipcode} onChange={(e) => setzipcode(e.target.value)} type="number" placeholder="Zip Code" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                            </div>
                            <div className="pt-5">

                                <input value={city} onChange={(e) => setcity(e.target.value)} type="text" placeholder="City" className="w-full mb-5 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                                <textarea value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Shipping Address" className="w-full h-[150px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
                            </div>
                        </div>

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

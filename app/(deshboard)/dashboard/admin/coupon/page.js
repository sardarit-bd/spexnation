'use client';

import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../../../components/Loading";
import getTookn from "../../../../../lib/getTookn";


const CouponPage = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [token, settoken] = useState(null);
    const [cName, setcName] = useState('');
    const [cCode, setcCode] = useState('');
    const [cDiscount, setcDiscount] = useState(0);
    const [allCoupons, setallCoupons] = useState([]);


    const fetchCoupons = async () => {
        setIsLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allcoupon`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallCoupons(res?.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        const tkn = getTookn();
        settoken(tkn);
        fetchCoupons();
    }, [])



    // handle add product form submission is here
    const handleAddCoupons = async (e) => {
        e.preventDefault();


        if (!cName || !cCode || !cDiscount) {
            toast.error('Please fill in all the required fields.');
            return;
        }

        setIsLoading(true);

        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/addcoupon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ cName, cCode, cDiscount }),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setcCode('');
            setcDiscount('');
            setcName('');
            setIsLoading(false);
            fetchCoupons();
        } else {
            setIsLoading(false);
            toast.error(res.message);
        }


    }






    // handle delect coupon function is here
    const handleDeleteCoupon = async (e, id) => {

        e.preventDefault();


        setIsLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/deletecoupon/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                }
            });

            const res = await response.json();
            fetchCoupons();
            toast.success(res.message);
        } catch (error) {
            console.error('Error fetching products:', error);
        }

        setIsLoading(false);

    }





    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="bg-yellow-700 px-5 py-2 w-fit">
                    <Loading />
                </div>
            </div>
        )
    }





    return (
        <div className=" bg-white py-4 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Coupon Code</h1>

            <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div>
                    <label className="text-gray-400 flex items-start gap-1">
                        Coupon Name <span className="text-md text-red-600">*</span>
                    </label>
                    <input value={cName} onChange={(e) => setcName(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                </div>

                <div>
                    <label className="text-gray-400 flex items-start gap-1">
                        Coupon Code <span className="text-md text-red-600">*</span>
                    </label>
                    <input type="text" value={cCode} onChange={(e) => setcCode(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                </div>


                <div>
                    <label className="text-gray-400 flex items-start gap-1">
                        Coupon Discount (%) <span className="text-md text-red-600">*</span>
                    </label>
                    <input type="number" value={cDiscount} onChange={(e) => setcDiscount(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                </div>

            </div>


            <div className="flex justify-end">
                <button onClick={(e) => { handleAddCoupons(e) }} className="mt-4 bg-yellow-700 flex items-center  justify-center text-white px-4 py-2 hover:bg-yellow-800">
                    {
                        isLoading ? <Loading /> : 'Add Coupon'
                    }
                </button>
            </div>










            <div className="mt-8">
                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-medium text-gray-600">All Coupon</h1>
                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 ">
                                <tr className="text-center">
                                    <th className="p-3 border">Sl</th>
                                    <th className="p-3 border">Coupon Name</th>
                                    <th className="p-3 border">Coupon Code</th>
                                    <th className="p-3 border">Coupon Discount</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                {allCoupons?.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50">

                                        <td className="p-2 border text-center text-gray-500">
                                            {index + 1}
                                        </td>


                                        <td className="p-2 border text-center text-gray-500">
                                            {row?.cName}
                                        </td>

                                        <td className="p-2 border text-center text-gray-500">
                                            {row?.cCode}
                                        </td>

                                        <td className="p-2 border text-center text-gray-500">
                                            {row?.cDiscount} %
                                        </td>

                                        <td className="p-2 border text-center text-gray-500">
                                            <button onClick={(e) => handleDeleteCoupon(e, row?._id)} className="bg-red-400 cursor-pointer text-white px-1 py-1">
                                                <Trash size={17} />
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div >
            </div>

            <Toaster />
        </div>
    );
};

export default CouponPage;
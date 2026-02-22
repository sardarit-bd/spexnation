'use client'

import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Loading from "../../../../components/Loading";
import generateOrderReport from "../../../../lib/generateOrderReport";

const OrderPage = () => {





    const [loading, setLoading] = useState(false);
    const [allOrders, setallOrders] = useState([]);


    const fetchOrders = async () => {
        setLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allorders`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallOrders(res?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchOrders();
    }, [])



    console.log(allOrders);



    const handleFileGenarate = () => {
        generateOrderReport();
    }



    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="bg-yellow-700 px-5 py-2 w-fit">
                    <Loading />
                </div>
            </div>
        )
    }


    return (
        <div className=" bg-white py-5 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Orders</h1>


            <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="p-3 border">Sl</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Payment Status</th>
                            <th className="p-3 border">Dalivary Status</th>
                            <th className="p-3 border flex justify-center">Download Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allOrders?.map((row, index) => (
                            <tr key={row} className="hover:bg-gray-50">

                                <td className="p-2 border">
                                    {index + 1}
                                </td>

                                <td className="p-2 border">
                                    Md Emon Hossain
                                </td>

                                <td className="p-2 border">
                                    example@gmail.com
                                </td>

                                <td className="p-2 border">Payment Status</td>

                                <td className="p-2 border">Dalivary Status</td>

                                <td className="p-2 border flex justify-center">
                                    <button onClick={handleFileGenarate} className="px-3 py-2 bg-yellow-700 text-white rounded-md">
                                        <FaDownload />
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default OrderPage;
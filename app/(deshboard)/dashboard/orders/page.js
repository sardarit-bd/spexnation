'use client'

import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import StatusBadge from "../../../../components/Deshboard/StatusBadge";
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
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium text-gray-600">All Orders</h1>
                <input placeholder="Search By Order ID" text="text" className="border border-gray-200 px-3 py-1 text-sm text-gray-400 cursor-pointer focus:outline-none" />
            </div>
            <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="p-3 border">Sl</th>
                            <th className="p-3 border">Order ID</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Phone</th>
                            <th className="p-3 border">Payment Status</th>
                            <th className="p-3 border">Dalivary Status</th>
                            <th className="p-3 border flex justify-center">Download Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allOrders?.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">

                                <td className="p-2 border text-center text-gray-500">
                                    {index + 1}
                                </td>


                                <td className="p-2 border text-center text-gray-500">
                                    OID-00{index}
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    {row?.fullname}
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    {row?.email}
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    {row?.phone}
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    <StatusBadge type="payment" value={"paid"} />
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    <StatusBadge type="delivery" value={"processing"} />
                                </td>

                                <td className="p-2 border flex justify-center text-gray-500">
                                    <button onClick={handleFileGenarate} className="px-2 py-1 bg-yellow-700 text-white rounded-md">
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
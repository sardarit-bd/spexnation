'use client'

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import StatusBadge from "../../../../components/Deshboard/StatusBadge";
import Loading from "../../../../components/Loading";
import generateOrderReport from "../../../../lib/generateOrderReport";

const MyOrderPage = () => {





    const [loading, setLoading] = useState(false);
    const [allOrders, setallOrders] = useState([]);
    const [search, setsearch] = useState('');
    const [updateStatus, setupdateStatus] = useState(false);

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






    // update status function is here
    async function handleUpdateStatus(e, id, updateStatus) {

        e.preventDefault();

        if (!updateStatus) {
            toast.error("Please select status");
            return;
        }


        setLoading(true);


        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/updateorder/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, deliveryStatus: updateStatus })
            });

            const res = await response.json();
            fetchOrders();
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }


    }





    const filterData = allOrders?.filter((item) => {

        if (!search) {
            return item;
        }

        return item?.orderId
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase());
    });









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
                <input onChange={(e) => setsearch(e.target.value)} placeholder="Search By Order ID" text="text" className="border border-gray-200 px-3 py-1 text-sm text-gray-400 cursor-pointer focus:outline-none" />
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
                            <th className="p-3 border flex justify-center">Download</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filterData?.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">

                                <td className="p-2 border text-center text-gray-500">
                                    {index + 1}
                                </td>


                                <td className="p-2 border text-center text-gray-500">
                                    {row?.orderId}
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
                                    <StatusBadge type="payment" value={row?.paymentStatus} />
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    <div className="flex items-center justify-center gap-2">
                                        <StatusBadge type="delivery" value={row?.deliveryStatus} />
                                    </div>
                                </td>

                                <td className="p-2 border flex justify-center text-gray-500 flex-col">
                                    <a target="_blank" download href={row?.pdf} className="text-center underline text-blue-600">
                                        PDF
                                    </a>

                                    <a target="_blank" download href={row?.PrescriptionImage} className="text-center underline text-blue-600">
                                        Prescription
                                    </a>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Toaster />
        </div >
    );
};

export default MyOrderPage;
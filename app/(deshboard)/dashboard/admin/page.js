'use client'

import { useEffect, useState } from "react";
import Chart from "../../../../components/Deshboard/Chart";
import Loading from "../../../../components/Loading";

const DashboardPage = () => {



    const [loading, setLoading] = useState(false);
    const [dashbaord, setdashbaord] = useState([]);


    const fetchDeshbaordData = async () => {
        setLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/deshboard`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setdashbaord(res?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchDeshbaordData();
    }, [])









    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-yellow-700">
                    <Loading />
                </div>
            </div>
        )
    }



    return (
        <div className="h-fit md:min-h-[85vh]">
            {/* Top Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-4">



                <div className="bg-white p-4 border border-gray-200 h-[100px] ">
                    <p className="text-gray-500 text-sm">Total Products</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.totalproduct}</h2>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[100px]">
                    <p className="text-gray-500 text-sm">Total Orders</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.totalOrder}</h2>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[100px] ">
                    <p className="text-gray-500 text-sm">Pending Orders</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.totalPending}</h2>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[100px] ">
                    <p className="text-gray-500 text-sm">Paid Orders</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.totalPaid}</h2>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[100px]">
                    <p className="text-gray-500 text-sm">Total Deliveries</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.totalDelivered}</h2>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[100px] ">
                    <p className="text-gray-500 text-sm">Revenue</p>
                    <h2 className="text-3xl font-bold mt-2">£{dashbaord?.totalRevenue}</h2>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">

                <Chart dashbaord={dashbaord} />

            </div>
        </div>

    );
};

export default DashboardPage;
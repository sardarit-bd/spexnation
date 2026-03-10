'use client'

import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import getTookn from "../../../../lib/getTookn";
import verifyJWT from "../../../../lib/verifyJWT";

const DashboardPage = () => {



    const [loading, setLoading] = useState(false);
    const [dashbaord, setdashbaord] = useState([]);
    const [id, setid] = useState('');



    const fetchMyDashboardInfo = async (myID, tokens) => {


        setLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/deshboard/${myID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${tokens}`,
                }
            });

            const res = await response.json();
            setdashbaord(res?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }

    };




    useEffect(() => {

        const tokens = getTookn();

        const loadUserandFetchData = async (tokens) => {
            const decoded = await verifyJWT(tokens);
            const myID = decoded?.id;
            fetchMyDashboardInfo(myID, tokens);
        }

        loadUserandFetchData(tokens);


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


                <div className="bg-white p-4 border flex items-center justify-center flex-col border-gray-200 h-[250px]">
                    <p className="text-gray-500 text-md">My Total Orders</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.myTotalOrder}</h2>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[250px] flex items-center justify-center flex-col">
                    <p className="text-gray-500 text-md">My Pending Orders</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.myPendingOrder}</h2>
                </div>


                <div className="bg-white p-4 border border-gray-200 h-[250px] flex items-center justify-center flex-col">
                    <p className="text-gray-500 text-md">My Total Expenses</p>
                    <h2 className="text-3xl font-bold mt-2">{dashbaord?.Mytotalexpenses}</h2>
                </div>

            </div>
        </div>

    );
};

export default DashboardPage;
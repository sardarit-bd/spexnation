'use client'

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "../../../../components/Loading";
import dateAndTimeFormate from "../../../../lib/dateAndTimeFormate";
import getTookn from "../../../../lib/getTookn";

const UserPage = () => {





    const [loading, setLoading] = useState(false);
    const [allUsers, setallUsers] = useState([]);
    const [search, setsearch] = useState('');
    const [updateStatus, setupdateStatus] = useState(false);

    const fetchUsers = async (token) => {
        setLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allusers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                }
            });

            const res = await response.json();
            setallUsers(res?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        const token = getTookn();
        fetchUsers(token);
    }, [])



    const filterData = allUsers?.filter((item) => {

        if (!search) {
            return item;
        }

        return item?.email
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
                <h1 className="text-xl font-medium text-gray-600">All Users</h1>
                <input onChange={(e) => setsearch(e.target.value)} placeholder="Search By Email" text="text" className="border border-gray-200 px-3 py-1 text-sm text-gray-400 cursor-pointer focus:outline-none" />
            </div>
            <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 ">
                        <tr className="text-center">
                            <th className="p-3 border">Sl</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Role</th>
                            <th className="p-3 border">createdAt</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        {filterData?.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">

                                <td className="p-2 border text-center text-gray-500">
                                    {index + 1}
                                </td>


                                <td className="p-2 border text-center text-gray-500">
                                    {row?.name}
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    {row?.email}
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    {row?.role}
                                </td>

                                <td className="p-2 border text-center text-gray-500">
                                    {dateAndTimeFormate(row?.createdAt)}
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

export default UserPage;
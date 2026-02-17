import { FaDownload } from "react-icons/fa";

const OrderPage = () => {
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
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, index) => (
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
                                    <button className="px-3 py-2 bg-yellow-700 text-white rounded-md">
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
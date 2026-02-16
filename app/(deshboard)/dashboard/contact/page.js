const ContactPage = () => {
    return (
        <div className=" bg-white py-5 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Contact</h1>




            <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="p-3 border">Sl</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Message</th>
                            <th className="p-3 border">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[1, 2, 3].map((row, index) => (
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

                                <td className="p-2 border">
                                    fsdf
                                </td>

                                <td className="p-2 border">
                                    <button className="px-3 py-1 bg-red-700 text-white rounded-md hover:bg-red-600">
                                        Delete
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

export default ContactPage;
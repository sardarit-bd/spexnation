'use client';

import { useState } from "react";
import Loading from "../../../../components/Loading";

const AddproductPage = () => {


    const [isLoading, setIsLoading] = useState(false);

    // handle add product form submission is here
    const handleAddProduct = (e) => {
        e.preventDefault();

        setIsLoading(true);

        // Simulate an API call to add the product
        setTimeout(() => {
            setIsLoading(false);
            // Reset form fields or show success message here
        }, 2000);
    }


    return (
        <div className=" bg-white py-4 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Add Product</h1>

            <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <input type="text" placeholder="Enter product title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                <input type="text" placeholder="Enter product title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                <input type="text" placeholder="Enter product title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                <input type="text" placeholder="Enter product title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                <input type="text" placeholder="Enter product title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                <input type="text" placeholder="Enter product title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            </div>


            <div className="mt-4  grid grid-cols-1">
                <textarea placeholder="Enter product description" className="w-full h-[150px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
            </div>


            <div className="flex justify-end">
                <button onClick={(e) => { handleAddProduct(e) }} className="mt-4 bg-yellow-700 flex items-center  justify-center text-white px-4 py-2 hover:bg-yellow-800">
                    {
                        isLoading ? <Loading /> : 'Add Product'
                    }
                </button>
            </div>


        </div>
    );
};

export default AddproductPage;
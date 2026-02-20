'use client'

import { useEffect, useState } from "react";
import DashboardProductCard from "../../../../components/Deshboard/DashboardProductCard";
import Loading from "../../../../components/Loading";


const glasses = [
    {
        id: 1,
        name: 'LONDON BLUE CATECAT',
        price: '£99',
    },
    {
        id: 2,
        name: 'TIFFANY & Co. TRIANGL',
        price: '£149',
    },
    {
        id: 3,
        name: 'Ray-Ban BROWLINE',
        price: '£125',
    },
    {
        id: 4,
        name: 'Prada BROWLINE',
        price: '£189',
    },
    {
        id: 1,
        name: 'LONDON BLUE CATECAT',
        price: '£99',
    },
    {
        id: 2,
        name: 'TIFFANY & Co. TRIANGL',
        price: '£149',
    },
    {
        id: 3,
        name: 'Ray-Ban BROWLINE',
        price: '£125',
    },
    {
        id: 4,
        name: 'Prada BROWLINE',
        price: '£189',
    },
    {
        id: 1,
        name: 'LONDON BLUE CATECAT',
        price: '£99',
    },
    {
        id: 2,
        name: 'TIFFANY & Co. TRIANGL',
        price: '£149',
    },
    {
        id: 3,
        name: 'Ray-Ban BROWLINE',
        price: '£125',
    },
    {
        id: 4,
        name: 'Prada BROWLINE',
        price: '£189',
    }
]


const AllproductPage = () => {


    const [loading, setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);


    const fetchProducts = async () => {
        setLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allproducts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setAllProducts(res?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts();
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
        <div className=" bg-white py-5 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">All Products</h1>

            <div className="mt-6 overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                    {allProducts.map((item, index) => (
                        <div key={index} className="text-center">
                            <DashboardProductCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </div >
    );
};

export default AllproductPage;
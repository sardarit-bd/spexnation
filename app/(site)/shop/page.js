'use client'

import { useEffect, useState } from "react";
import Container from "../../../components//Container";
import ProductBreadcrumb from "../../../components/ProductBreadcrumb";
import ProductCard from "../../../components/ProductCard";
import ProductGridSkeleton from '../../../components/skalaton/ProductGridSkeleton';


const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
]


export default function ProductPage() {


    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);


    const fetchProducts = async () => {
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
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts();
    }, [])




    if (loading) {
        return <ProductGridSkeleton />
    }




    return (
        <main className="h-fit bg-gray-100">

            <Container>

                <ProductBreadcrumb breadcrumbs={breadcrumbs} />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                    {allProducts.map((item, index) => (
                        <div key={index} className="text-center">
                            <ProductCard item={item} />
                        </div>
                    ))}
                </div>



            </Container>
        </main>
    )
}

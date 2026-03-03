'use client'

import { useEffect, useState } from "react";
import Container from "../../../components//Container";
import ProductBreadcrumb from "../../../components/ProductBreadcrumb";
import ProductCard from "../../../components/ProductCard";
import ShopFilter from "../../../components/ShopFilter";
import ProductGridSkeleton from '../../../components/skalaton/ProductGridSkeleton';


const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
]


export default function ProductPage() {


    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);



    const [fopen, setfOpen] = useState(false);
    const [selectedBrand, setslectedBrand] = useState([]);
    const [selectedGender, setselectedGender] = useState([]);
    const [selectedMatarial, setselectedMatarial] = useState([]);




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

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <div className={`lg:col-span-1 p-4 border border-gray-200 bg-white max-h-[500px] lg:max-h-[700px] w-full z-40 ${fopen ? 'sticky top-[75px]' : 'lg:sticky lg:top-[75px]'}`}>
                        <ShopFilter fopen={fopen} setfOpen={setfOpen} selectedBrand={selectedBrand} setslectedBrand={setslectedBrand} selectedGender={selectedGender} setselectedGender={setselectedGender} selectedMatarial={selectedMatarial} setselectedMatarial={setselectedMatarial} />
                    </div>
                    <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
                        {allProducts.map((item, index) => (
                            <div key={index} className="text-center">
                                <ProductCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>



            </Container>
        </main>
    )
}

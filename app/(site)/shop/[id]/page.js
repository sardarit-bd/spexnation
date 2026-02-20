'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Container from '../../../../components/Container'
import ProductBreadcrumb from '../../../../components/ProductBreadcrumb'
import ProductTabs from '../../../../components/ProductTabs'
import SingleProductSkalaton from "../../../../components/skalaton/SingleProductSkalaton"
import ProductMainFeature from '../../../../components/step/ProductMainFeature'


const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Elegance TF2249', href: '/shop/elegance-tF2249' },
]

export default function ProductPage() {



    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [singleProducts, setsingleProducts] = useState([]);



    const fetchProducts = async (id) => {
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/singleProduct/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setsingleProducts(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts(id);
        window.scrollTo(0, 0);
    }, [id])




    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: singleProducts?.ProductTitle, href: `/shop/${singleProducts?._id}` },
    ]



    if (loading) {
        return <SingleProductSkalaton />
    }




    return (
        <main className="min-h-screen bg-gray-50">

            <Container>
                <ProductBreadcrumb breadcrumbs={breadcrumbs} />
                <ProductMainFeature product={singleProducts} />
                <ProductTabs product={singleProducts} />
            </Container>

        </main>
    )
}
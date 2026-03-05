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



    const [searchLoading, setsearchLoading] = useState(false);
    const [fopen, setfOpen] = useState(false);
    const [selectedBrand, setslectedBrand] = useState([]);
    const [selectedGender, setselectedGender] = useState([]);
    const [selectedMatarial, setselectedMatarial] = useState([]);
    const [selectedPrice, setselectedPrice] = useState({ min: 10, max: 500 });
    const [selectedLenWidth, setselectedLenWidth] = useState({ min: 20, max: 50 });
    const [selectedBrideWidth, setselectedBrideWidth] = useState({ min: 10, max: 90 });
    const [filteredProducts, setfilteredProducts] = useState([]);






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
            setfilteredProducts(res?.data);
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




    // handle search function is here
    const handleSearchFunction = () => {

        // brand filter
        const brandFilter = allProducts?.filter((item) => {
            if (selectedBrand?.length > 0) {
                return selectedBrand?.includes(item?.brand);
            } else {
                return item;
            }
        })

        // gender filter
        const gFilter = brandFilter?.filter((item) => {
            if (selectedGender?.length > 0) {
                return selectedGender?.includes(item?.gender);
            } else {
                return item;
            }
        })


        // material filter
        const mFilter = gFilter?.filter((item) => {
            if (selectedMatarial?.length > 0) {
                return selectedMatarial?.includes(item?.meterial);
            } else {
                return item;
            }
        })



        // price filter is here
        const pFilter = mFilter?.filter((item) => {
            return item?.product_price >= selectedPrice?.min && item?.product_price <= selectedPrice?.max;
        })


        // lens width filter is here
        const lFilter = pFilter?.filter((item) => {

            if (item?.lensWidth) {
                return item?.lensWidth >= selectedLenWidth?.min && item?.lensWidth <= selectedLenWidth?.max;
            } else {
                return item;
            }

        })


        // bride width filter is here
        const bFilter = lFilter?.filter((item) => {

            if (item?.brideWidth) {
                return item?.brideWidth >= selectedBrideWidth?.min && item?.brideWidth <= selectedBrideWidth?.max;
            } else {
                return item;
            }
        })









        // update the filtered products state
        setfilteredProducts(bFilter);
    }


    useEffect(() => {
        handleSearchFunction();
    }, [selectedBrand, selectedGender, selectedMatarial, selectedPrice, selectedLenWidth, selectedBrideWidth])






    // handle filter clear function is here
    const handleClearFilter = (e) => {
        e.preventDefault();
        setslectedBrand([]);
        setselectedGender([]);
        setselectedMatarial([]);
        setselectedPrice({ min: 10, max: 500 });
        setselectedLenWidth({ min: 20, max: 50 });
        setselectedBrideWidth({ min: 10, max: 90 });
    }




    if (loading) {
        return <ProductGridSkeleton />
    }



    return (
        <main className="h-fit bg-gray-100">

            <Container>

                <ProductBreadcrumb breadcrumbs={breadcrumbs} />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <div className={`lg:col-span-1 p-4 border border-gray-200 bg-white max-h-[500px] lg:max-h-[700px] w-full z-40 ${fopen ? 'sticky top-[75px]' : 'lg:sticky lg:top-[75px]'}`}>
                        <ShopFilter fopen={fopen} setfOpen={setfOpen} selectedBrand={selectedBrand} setslectedBrand={setslectedBrand} selectedGender={selectedGender} setselectedGender={setselectedGender} selectedMatarial={selectedMatarial} setselectedMatarial={setselectedMatarial} selectedPrice={selectedPrice} setselectedPrice={setselectedPrice} selectedLenWidth={selectedLenWidth} setselectedLenWidth={setselectedLenWidth} selectedBrideWidth={selectedBrideWidth} setselectedBrideWidth={setselectedBrideWidth} handleClearFilter={handleClearFilter} filterLength={filteredProducts?.length} />
                    </div>
                    <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
                        {filteredProducts?.map((item, index) => (
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

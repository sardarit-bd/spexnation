
import Container from "../../../components//Container";
import ProductBreadcrumb from "../../../components/ProductBreadcrumb";
import ProductCard from "../../../components/ProductCard";


const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
]


export default function ProductPage() {



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



    return (
        <main className="min-h-screen bg-gray-100">

            <Container>

                <ProductBreadcrumb breadcrumbs={breadcrumbs} />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                    {glasses.map((item, index) => (
                        <div key={index} className="text-center">
                            <ProductCard />
                        </div>
                    ))}
                </div>



            </Container>



        </main>
    )
}

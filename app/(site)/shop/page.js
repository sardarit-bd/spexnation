
import Container from "@/components//Container";
import ProductBreadcrumb from "../../../components/ProductBreadcrumb";
import ProductCard from "../../../components/ProductCard";

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
    ]



    return (
        <main className="min-h-screen bg-white">

            <Container>

                <ProductBreadcrumb />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {glasses.map((item) => (
                        <div key={item.id} className="text-center">
                            <ProductCard />
                        </div>
                    ))}
                </div>



            </Container>



        </main>
    )
}

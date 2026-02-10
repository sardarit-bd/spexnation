import Container from '../../../../components/Container'
import ProductBreadcrumb from '../../../../components/ProductBreadcrumb'
import ProductTabs from '../../../../components/ProductTabs'
import ProductMainFeature from '../../../../components/step/ProductMainFeature'

const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Elegance TF2249', href: '/shop/elegance-tF2249' },

]

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-gray-50">

            <Container>
                <ProductBreadcrumb breadcrumbs={breadcrumbs} />
                <ProductMainFeature />
                <ProductTabs />
            </Container>

        </main>
    )
}
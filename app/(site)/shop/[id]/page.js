import ProductBreadcrumb from '@/components/ProductBreadcrumb'
import ProductTabs from '@/components/ProductTabs'
import Container from '../../../../components/Container'
import ProductMainFeature from '../../../../components/step/ProductMainFeature'

const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Elegance TF2249', href: '/shop/elegance-tF2249' },

]

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-gray-100">


            {/* Product Section */}
            <Container>
                {/* Breadcrumb */}
                <ProductBreadcrumb breadcrumbs={breadcrumbs} />

                {/* Product Main */}
                <ProductMainFeature />

                {/* Tabs */}
                <ProductTabs />

                {/* Brand Story */}
                {/* <BrandStory /> */}

                {/* Similar Products */}
                {/* <SimilarProducts /> */}

                {/* After Viewing */}
                {/* <AfterViewing /> */}
            </Container>

        </main>
    )
}
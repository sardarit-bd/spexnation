import ProductBreadcrumb from '@/components/ProductBreadcrumb'
import ProductTabs from '@/components/ProductTabs'
import Container from '../../../../components/Container'
import ProductMainFeature from '../../../../components/step/ProductMainFeature'

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-white">


            {/* Product Section */}
            <Container>
                {/* Breadcrumb */}
                <ProductBreadcrumb />

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
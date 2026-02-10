import AfterViewing from '../../../components/AfterViewing'
import BrandStory from '../../../components/BrandStory'
import Container from '../../../components/Container'
import ProductBreadcrumb from '../../../components/ProductBreadcrumb'
import ProductDetails from '../../../components/ProductDetails'
import ProductGallery from '../../../components/ProductGallery'
import ProductTabs from '../../../components/ProductTabs'
import SimilarProducts from '../../../components/SimilarProducts'

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">


      {/* Product Section */}
      <Container>
        {/* Breadcrumb */}
        <ProductBreadcrumb />

        {/* Product Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Gallery */}
          <ProductGallery />

          {/* Details */}
          <ProductDetails />
        </div>

        {/* Tabs */}
        <ProductTabs />

        {/* Brand Story */}
        <BrandStory />

        {/* Similar Products */}
        <SimilarProducts />

        {/* After Viewing */}
        <AfterViewing />
      </Container>

    </main>
  )
}

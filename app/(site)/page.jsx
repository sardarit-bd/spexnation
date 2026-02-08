import HeroBanner from '@/components/HeroBanner'
import PopularGlasses from '@/components/PopularGlasses'
import PromoTiles from '@/components/PromoTiles'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">

      <HeroBanner />
      <PromoTiles />
      <PopularGlasses />
      {/* <TrendingSection />
      <ReviewsSection />
      <BestFitMachine />
      <OrderingSection />
      <BuyOneGiveOne /> */}

    </main>
  )
}

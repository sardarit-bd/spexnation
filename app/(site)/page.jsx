import GlassesShowcase from '../../components/Glassesshowcase';
import HeroBanner from '../../components/HeroBanner';
import PopularGlasses from '../../components/PopularGlasses';
import PromoTiles from '../../components/PromoTiles';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">

      <HeroBanner />
      <PopularGlasses />
      <PromoTiles />
      <GlassesShowcase />
    </main>
  )
}

export default function BrandStory() {
  return (
    <section className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg h-64 md:h-80 flex items-center justify-center order-2 md:order-1">
          <span className="text-8xl">👓</span>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Luxury Eyewear</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Timeless Elegance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Discover frames that transcend trends. Crafted with meticulous attention to detail, each pair from our luxury collection represents a commitment to quality and sophisticated design.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Experience the perfect balance of style and comfort. Our frames are designed for those who refuse to compromise on quality or aesthetics.
          </p>
        </div>
      </div>
    </section>
  )
}

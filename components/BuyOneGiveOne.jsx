'use client'

export default function BuyOneGiveOne() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 bg-gray-50 p-8 rounded-lg">
        {/* Left - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            BUY ONE GIVE ONE
          </h2>
          <p className="text-yellow-600 text-lg font-bold mb-6">
            TRANSFORMING VISION, CHANGING LIVES
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            For every pair purchased, we donate a pair to someone in need. We believe everyone deserves quality eyewear. Join our mission to improve lives through better vision.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition">
              LEARN MORE
            </button>
            <button className="text-yellow-600 font-bold flex items-center gap-2 hover:text-yellow-700 transition">
              HELP NOW →
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg h-80 md:h-96 flex items-center justify-center border-4 border-yellow-600 shadow-xl">
          <span className="text-6xl">👨‍👩‍👧</span>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">Customer Showcase</h3>
        <p className="text-gray-600 text-center mb-8">
          Discover how our customers style their frames. Real people, real glasses.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-square flex items-center justify-center hover:opacity-80 transition border-2 border-yellow-400 shadow-md"
            >
              <span className="text-3xl">👓</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

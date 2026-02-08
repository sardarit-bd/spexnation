'use client'

const trendingCards = [
  {
    id: 1,
    title: 'VIP',
    subtitle: 'COLLECTION',
    desc: 'Exclusive styles for discerning tastes',
    bgColor: 'bg-gradient-to-br from-yellow-600 to-yellow-700',
  },
  {
    id: 2,
    title: 'FLASH',
    subtitle: 'SALE 60% OFF',
    desc: 'Limited time offer on selected frames',
    bgColor: 'bg-gradient-to-br from-gray-900 to-black',
  },
  {
    id: 3,
    title: 'LUXURY',
    subtitle: 'BRANDS',
    desc: 'Handpicked designer frames worldwide',
    bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
  },
]

export default function TrendingSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trending now</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Looking for your next favourite pair? Please see the frames our customers are loving right now – fresh, versatile and made for your style and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {trendingCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-lg overflow-hidden shadow-xl h-64 md:h-72 p-6 flex flex-col justify-end text-white border border-yellow-500`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">{card.title}</h3>
            <p className="text-lg md:text-xl font-semibold mb-2 text-gray-100">{card.subtitle}</p>
            <p className="text-sm text-gray-300">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Additional Promo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg h-40 md:h-48 p-4 flex flex-col justify-center items-center text-center text-black font-bold border border-yellow-400">
          <p className="text-sm">2025 COLLECTION</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg h-40 md:h-48 p-4 flex flex-col justify-center items-center text-center text-white font-bold border border-yellow-500">
          <p className="text-sm">DESIGNER ICONS</p>
        </div>
        <div className="bg-black border-2 border-yellow-500 rounded-lg h-40 md:h-48 p-4 flex flex-col justify-center items-center text-center text-yellow-400 font-bold">
          <p className="text-sm">EXPLORE STYLES</p>
        </div>
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg h-40 md:h-48 p-4 flex flex-col justify-center items-center text-center text-white font-bold border border-yellow-500">
          <p className="text-sm">PREMIUM OPTICS</p>
        </div>
      </div>
    </section>
  )
}

'use client'

const reviews = [
  {
    id: 1,
    rating: '4.8 out of 5',
    count: '1,234 reviews',
    text: 'Excellent delivery and great quality glasses',
  },
  {
    id: 2,
    rating: '4.9 out of 5',
    count: '2,156 reviews',
    text: 'Fast shipping and fantastic customer service',
  },
  {
    id: 3,
    rating: '4.8 out of 5',
    count: '1,890 reviews',
    text: 'Easy to order and glasses arrived as described',
  },
  {
    id: 4,
    rating: '4.7 out of 5',
    count: '956 reviews',
    text: 'Great value for money, highly recommend',
  },
]

export default function ReviewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="text-center p-6 border-2 border-yellow-400 rounded-lg shadow-md">
            <div className="flex justify-center mb-3">
              <span className="text-yellow-500 font-bold text-lg">★★★★★</span>
            </div>
            <p className="text-yellow-600 font-bold text-sm mb-1">{review.rating}</p>
            <p className="text-gray-600 text-xs mb-3">{review.count}</p>
            <p className="text-gray-700 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

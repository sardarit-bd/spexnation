'use client'

export default function BestFitMachine() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg h-80 md:h-96 flex items-center justify-center border-4 border-yellow-600 shadow-xl">
          <span className="text-6xl">👓</span>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Perfect Fit Technology</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our advanced fitting technology helps you discover frames perfectly tailored to your face shape and features. Get personalized recommendations based on your unique measurements and style preferences.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 border-2 border-yellow-600 text-black px-6 py-3 rounded font-bold transition">
            TRY NOW
          </button>
        </div>
      </div>
    </section>
  )
}

'use client'

export default function OrderingSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ordering glasses online made easy</h2>
        
        <div className="bg-white rounded-lg p-8 md:p-12 mb-12">
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
            Spex Nation is the leading online glasses store offering premium quality, affordable frames to millions of customers worldwide. We provide same-day processing, competitive pricing with free prescription lenses, and exceptional value for money. Featuring top designer styles at affordable prices with quick turnaround on quality eyewear for you and your family. We are also stockists of stylish affordable frames with a wide range of choice. Our customers are the judges, and when shopping online with us, comparing glasses we know how easy it is to find exactly what you need.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Have glasses questions?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 border-2 border-yellow-400 rounded-lg bg-white">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h4 className="font-bold mb-2 text-gray-900">EXPERT CONSULTATION</h4>
              <p className="text-sm text-gray-700">Call our specialists for personalized advice</p>
            </div>
            
            <div className="text-center p-6 border-2 border-yellow-400 rounded-lg bg-white">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="font-bold mb-2 text-gray-900">LIVE CHAT SUPPORT</h4>
              <p className="text-sm text-gray-700">Available 7 days a week during office hours</p>
            </div>
            
            <div className="text-center p-6 border-2 border-yellow-400 rounded-lg bg-white">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-bold mb-2 text-gray-900">EMAIL SUPPORT</h4>
              <p className="text-sm text-gray-700">We reply to all emails within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

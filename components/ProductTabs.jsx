'use client'

import { useState } from 'react'

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('frame-info')

  const tabs = [
    { id: 'frame-info', label: 'Frame Info' },
    { id: 'description', label: 'Description' },
    { id: 'lens-recommend', label: 'Lens Recommendation' },
  ]

  return (
    <div className="space-y-8 mt-12">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 font-semibold text-sm md:text-base transition relative ${
                activeTab === tab.id
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'frame-info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specifications */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Frame Specifications</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-xs text-gray-600 uppercase mb-1">Size</p>
                  <p className="font-semibold text-gray-900">Small (54-16-140)</p>
                </li>
                <li>
                  <p className="text-xs text-gray-600 uppercase mb-1">Color</p>
                  <p className="font-semibold text-gray-900">Black</p>
                </li>
                <li>
                  <p className="text-xs text-gray-600 uppercase mb-1">Weight</p>
                  <p className="font-semibold text-gray-900">15g</p>
                </li>
                <li>
                  <p className="text-xs text-gray-600 uppercase mb-1">Material</p>
                  <p className="font-semibold text-gray-900">Premium Acetate</p>
                </li>
                <li>
                  <p className="text-xs text-gray-600 uppercase mb-1">Shape</p>
                  <p className="font-semibold text-gray-900">Butterfly</p>
                </li>
                <li>
                  <p className="text-xs text-gray-600 uppercase mb-1">Style</p>
                  <p className="font-semibold text-gray-900">Full-Rim</p>
                </li>
              </ul>
              <button className="text-yellow-600 font-semibold text-sm mt-6 hover:text-yellow-700">
                Need Help With Sizing?
              </button>
            </div>

            {/* Dimension Diagram */}
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center">
              <p className="text-sm text-gray-600 mb-4">Frame Dimensions</p>
              <svg className="w-full max-w-xs h-auto" viewBox="0 0 300 200">
                <rect x="50" y="40" width="200" height="120" fill="none" stroke="#333" strokeWidth="2" rx="10" />
                <line x1="50" y1="30" x2="50" y2="10" stroke="#666" strokeWidth="1" />
                <line x1="250" y1="30" x2="250" y2="10" stroke="#666" strokeWidth="1" />
                <line x1="48" y1="20" x2="252" y2="20" stroke="#666" strokeWidth="1" />
                <text x="150" y="18" textAnchor="middle" fontSize="12" fill="#333">
                  54 mm
                </text>

                <line x1="260" y1="40" x2="280" y2="40" stroke="#666" strokeWidth="1" />
                <line x1="270" y1="38" x2="270" y2="160" stroke="#666" strokeWidth="1" />
                <line x1="260" y1="160" x2="280" y2="160" stroke="#666" strokeWidth="1" />
                <text x="290" y="105" fontSize="12" fill="#333">
                  120 mm
                </text>
              </svg>
              <p className="text-xs text-gray-600 mt-4">Show in Inches</p>
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Product Description</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These elegant butterfly-shaped frames represent the pinnacle of luxury eyewear design. Crafted from premium acetate materials, they combine timeless sophistication with contemporary style.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Perfect for those who appreciate fine details and quality craftsmanship. The frames feature reinforced hinges and a secure fit, ensuring comfort throughout the day while maintaining their stunning appearance.
            </p>
          </div>
        )}

        {activeTab === 'lens-recommend' && (
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Lens Recommendations</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700">
                We recommend <strong>Premium Single Vision Lenses</strong> with anti-glare coating for optimal clarity and protection. Our specialists can help you choose the perfect prescription lenses for your needs.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

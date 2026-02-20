'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('frame-info')

  const tabs = [
    { id: 'frame-info', label: 'Frame Info' },
    { id: 'description', label: 'Description' },
    { id: 'lens-recommend', label: 'Lens Recommendation' },
  ]

  return (
    <div className="space-y-8 mt-6 bg-white p-4 border border-gray-200">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 font-semibold text-sm md:text-base transition relative ${activeTab === tab.id
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
                  <p className="font-semibold text-gray-900">{product?.product_size}</p>
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
              <div className="mt-6">
                <Link href={'/contact'} className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                  Need Help? Contact Us
                </Link>
              </div>
            </div>

            {/* Dimension Diagram */}
            <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center">
              <Image src={product?.product_thamnail} alt="Dimension Diagram" width={1000} height={1000} />
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Product Description</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {
                product?.product_Discription
              }
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

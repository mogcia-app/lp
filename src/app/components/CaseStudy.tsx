'use client'

import { useState } from 'react'

interface CaseStudyProps {
  company: string
  industry: string
  size: string
  logo: string
  challenge: string
  solution: string
  results: string[]
  metrics: { label: string; value: string; improvement: string }[]
}

export default function CaseStudy({
  company,
  industry,
  size,
  logo,
  challenge,
  solution,
  results,
  metrics
}: CaseStudyProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* ヘッダー */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              {logo}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{industry}</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">{size}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg 
              className={`w-6 h-6 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 基本情報 */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">課題</h4>
            <p className="text-gray-600 text-sm">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">解決策</h4>
            <p className="text-gray-600 text-sm">{solution}</p>
          </div>
        </div>

        {/* 成果 */}
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">成果</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* メトリクス */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
              <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 詳細情報（展開時） */}
      {isExpanded && (
        <div className="border-t border-gray-100 p-6 bg-gray-50">
          <h4 className="font-semibold text-gray-900 mb-4">導入プロセスの詳細</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">導入期間</h5>
              <p className="text-gray-600">2週間</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">初期投資</h5>
              <p className="text-gray-600">月額50万円</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">ROI</h5>
              <p className="text-gray-600">6ヶ月で回収</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

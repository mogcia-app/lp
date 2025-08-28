'use client'

import { useState } from 'react'

export default function SolutionsDetailPage() {
  const [activeCategory, setActiveCategory] = useState<'document' | 'sales' | 'hr' | 'analysis'>('document')

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-navy-100">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">
            AIソリューションで
            <span className="bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent">
              業務を変革
            </span>
          </h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            企業のあらゆる業務領域でAIを活用し、効率化と価値創造を実現します
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-navy-100">
            {[
              { id: 'document', label: '文書作成' },
              { id: 'sales', label: '営業支援' },
              { id: 'hr', label: '人材教育' },
              { id: 'analysis', label: 'データ分析' },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-navy-600 text-white shadow-lg'
                    : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Solution Content */}
        <div className="animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                {activeCategory === 'document' && '文書作成・編集'}
                {activeCategory === 'sales' && '営業・マーケティング支援'}
                {activeCategory === 'hr' && '人材・教育'}
                {activeCategory === 'analysis' && 'データ分析・業務改善'}
              </h2>
              <p className="text-xl text-navy-600">
                AIが業務を支援し、品質と効率を大幅に向上させます
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">主な機能</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    自動生成・編集
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    品質向上
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    効率化
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">期待される効果</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    時間短縮
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    品質向上
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    コスト削減
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">ソリューションを体験してみませんか？</h3>
          <a
            href="/tool/home"
            className="inline-block bg-navy-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            今すぐ体験する
          </a>
        </div>
      </div>
    </div>
  )
}
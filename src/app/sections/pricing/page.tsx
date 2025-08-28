'use client'

import { useState } from 'react'

export default function PricingDetailPage() {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'business' | 'enterprise'>('business')

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-navy-100">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">
            5,000円からの
            <span className="bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent">
              手頃な価格
            </span>
          </h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            企業規模やニーズに応じて、柔軟な価格設定をご提供しています。
            初期費用を抑えて、段階的にスケールアップできるプラン設計です。
          </p>
        </div>

        {/* Plan Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-navy-100">
            {[
              { id: 'starter', label: 'スターター' },
              { id: 'business', label: 'ビジネス' },
              { id: 'enterprise', label: 'エンタープライズ' },
            ].map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-navy-600 text-white shadow-lg'
                    : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                {plan.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Details */}
        <div className="animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                {selectedPlan === 'starter' && 'スタータープラン'}
                {selectedPlan === 'business' && 'ビジネスプラン'}
                {selectedPlan === 'enterprise' && 'エンタープライズプラン'}
              </h2>
              <div className="text-4xl font-bold text-navy-600 mb-2">
                {selectedPlan === 'starter' && '¥5,000'}
                {selectedPlan === 'business' && '¥15,000'}
                {selectedPlan === 'enterprise' && '¥50,000'}
              </div>
              <p className="text-navy-500">月額</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">含まれる機能</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    基本AI機能
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    サポート
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    レポート
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">プランの特徴</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    初期費用0円
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    30日間無料
                  </li>
                  <li className="flex items-center text-navy-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    いつでも解約
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">今すぐ始めませんか？</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tool/home"
              className="inline-block bg-navy-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              無料で体験する
            </a>
            <a
              href="/"
              className="inline-block border-2 border-navy-600 text-navy-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-navy-600 hover:text-white transition-all duration-300"
            >
              詳細を確認する
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
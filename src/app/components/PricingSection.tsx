'use client'

import { useState } from 'react'

interface PricingTierProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  color: string
}

function PricingTier({ name, price, description, features, popular, color }: PricingTierProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border-2 ${popular ? 'border-navy-500' : 'border-gray-100'} overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
      {popular && (
        <div className="bg-navy-500 text-white text-center py-2 text-sm font-medium">
          人気プラン
        </div>
      )}
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-navy-900 mb-2">{name}</h3>
          <p className="text-navy-600 text-sm mb-4">{description}</p>
          <div className="text-3xl font-bold text-navy-600 mb-1">{price}</div>
          <div className="text-sm text-navy-500">月額</div>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-navy-600">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
          popular 
            ? 'bg-navy-600 text-white hover:bg-navy-700' 
            : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
        }`}>
          {popular ? '今すぐ始める' : '詳細を見る'}
        </button>
      </div>
    </div>
  )
}

export default function PricingSection() {
  return (
    <div className="space-y-16">
      {/* 料金体系の概要 */}
      <div>
        <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">5000円からの手頃な価格体系</h2>
        <p className="text-xl text-navy-600 text-center mb-12 max-w-4xl mx-auto">
          企業規模やニーズに応じて、柔軟な価格設定をご提供しています。
          初期費用を抑えて、段階的にスケールアップできるプラン設計です。
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <PricingTier
            name="スタータープラン"
            price="¥5,000"
            description="小規模チーム向けの基本機能"
            features={[
              "基本AI機能（文書作成・編集）",
              "最大10ユーザー",
              "基本的なサポート",
              "月次レポート",
              "基本的なカスタマイズ"
            ]}
            color="bg-navy-500"
          />

          <PricingTier
            name="ビジネスプラン"
            price="¥15,000"
            description="中規模企業向けの標準機能"
            popular={true}
            features={[
              "全AI機能（文書・営業・分析）",
              "最大50ユーザー",
              "優先サポート",
              "週次レポート",
              "カスタマイズ対応",
              "API利用"
            ]}
            color="bg-navy-600"
          />

          <PricingTier
            name="エンタープライズプラン"
            price="¥50,000"
            description="大規模企業向けの包括機能"
            features={[
              "全機能 + 高度な分析",
              "無制限ユーザー",
              "24/7専任サポート",
              "リアルタイムレポート",
              "フルカスタマイズ",
              "専用サーバー"
            ]}
            color="bg-navy-700"
          />
        </div>

        {/* カスタムプラン */}
        <div className="mt-12 bg-gradient-to-r from-navy-50 to-white rounded-2xl p-8 border border-navy-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">カスタムプラン</h3>
            <p className="text-navy-600 mb-6">
              特定の要件や大規模な導入をご検討の場合は、カスタムプランをご提案いたします
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-600 mb-2">OEM対応</div>
                <div className="text-sm text-navy-600">ブランドカスタマイズ</div>
                <div className="text-lg font-bold text-navy-600 mt-2">お問い合わせください</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-600 mb-2">大規模導入</div>
                <div className="text-sm text-navy-600">1000名以上対応</div>
                <div className="text-lg font-bold text-navy-600 mt-2">お問い合わせください</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-600 mb-2">専用開発</div>
                <div className="text-sm text-navy-600">独自機能の開発</div>
                <div className="text-lg font-bold text-navy-600 mt-2">お問い合わせください</div>
              </div>
            </div>
            <button className="bg-navy-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-colors">
              カスタムプランのお問い合わせ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

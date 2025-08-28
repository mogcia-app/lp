'use client'

import { useState } from 'react'

interface OEMFeatureProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  benefits: string[]
  requirements: string[]
}

function OEMFeature({ title, description, icon, color, benefits, requirements }: OEMFeatureProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mr-4`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg 
              className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">提供されるメリット</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">必要な要件</h4>
              <ul className="space-y-2">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

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
    <div className={`bg-white rounded-2xl shadow-lg border-2 ${popular ? 'border-blue-500' : 'border-gray-100'} overflow-hidden hover:shadow-xl transition-all duration-300`}>
      {popular && (
        <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
          人気プラン
        </div>
      )}
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
          <div className="text-sm text-gray-500">月額</div>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}>
          {popular ? '今すぐ始める' : '詳細を見る'}
        </button>
      </div>
    </div>
  )
}

export default function OEMBusiness() {
  return (
    <div className="space-y-16">
      {/* OEM事業の概要 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">OEM事業でAIツールを卸販売</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          自社ブランドでAIツールを販売したい企業様向けに、OEMサービスを提供しています。
                     技術的なサポートから、ブランディング、カスタマイズまで、サポートいたします。
          価格は個別にお見積もりいたします。
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <OEMFeature
            title="ブランドカスタマイズ"
            description="あなたの企業ブランドに合わせたカスタマイズ"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01M9 15h.01" />
              </svg>
            }
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
            benefits={[
              "独自のロゴ・カラーテーマの適用",
              "カスタムドメインでのサービス提供",
              "企業独自のUI/UXデザイン",
              "ブランドガイドラインに準拠したデザイン"
            ]}
            requirements={[
              "企業ロゴ（高解像度）",
              "ブランドカラーパレット",
              "デザインガイドライン",
              "カスタムドメイン"
            ]}
          />

          <OEMFeature
            title="機能カスタマイズ"
            description="業務に特化した機能の追加・変更"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-green-500 to-emerald-500"
            benefits={[
              "業界特化型の機能追加",
              "既存システムとの連携強化",
              "独自のワークフロー構築",
              "APIのカスタマイズ"
            ]}
            requirements={[
              "業務要件の詳細仕様書",
              "既存システムの仕様書",
              "連携要件の定義",
              "テスト環境の提供"
            ]}
          />

          <OEMFeature
            title="技術サポート"
            description="導入から運用まで技術サポート"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            benefits={[
              "専任エンジニアのアサイン",
              "24/7技術サポート",
              "定期的なシステム監視",
              "アップデート・メンテナンス"
            ]}
            requirements={[
              "サポートレベル契約の締結",
              "連絡先担当者の指定",
              "緊急時対応体制の構築",
              "定期的なレビュー会議"
            ]}
          />

          <OEMFeature
            title="販売サポート"
            description="販売・マーケティング活動のサポート"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            color="bg-gradient-to-r from-orange-500 to-red-500"
            benefits={[
              "販売資料の作成サポート",
              "デモ環境の提供",
              "営業トレーニングの実施",
              "成功事例の共有"
            ]}
            requirements={[
              "販売戦略の明確化",
              "ターゲット顧客の定義",
              "営業チームの教育計画",
              "マーケティング素材の準備"
            ]}
          />
        </div>
      </div>

      {/* OEM導入事例 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">OEM導入事例</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">ITコンサルティング会社A社</h4>
                <p className="text-sm text-gray-600">従業員100名</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              自社のコンサルティングサービスに組み込むAIツールとしてOEM導入。
              顧客向けの提案書作成支援ツールとして活用し、営業効率を3倍向上。
            </p>
            <div className="text-sm text-blue-600 font-medium">
              導入効果：営業効率3倍向上、顧客満足度95%
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">製造業B社</h4>
                <p className="text-sm text-gray-600">従業員500名</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              製造現場の品質管理に特化したAIツールとしてOEM導入。
              独自の品質基準に合わせたカスタマイズで、不良品率を50%削減。
            </p>
            <div className="text-sm text-green-600 font-medium">
              導入効果：不良品率50%削減、生産効率30%向上
            </div>
          </div>
        </div>
      </div>

      {/* 導入メリット */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">OEM導入のメリット</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">0円</div>
            <div className="text-gray-600">初期開発費用</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1ヶ月</div>
            <div className="text-gray-600">導入期間</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">技術サポート</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">サポート体制</div>
          </div>
        </div>
      </div>
    </div>
  )
}

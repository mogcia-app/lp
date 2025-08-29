'use client'

import { useState } from 'react'

interface ComparisonTableProps {
  features: string[]
  ourService: (string | boolean)[]
  competitorA: (string | boolean)[]
  competitorB: (string | boolean)[]
  competitorC: (string | boolean)[]
}

function ComparisonTable({ features, ourService, competitorA, competitorB, competitorC }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left p-4 font-semibold text-gray-900">機能・特徴</th>
            <th className="text-center p-4 font-semibold text-blue-600">AI Business Solutions</th>
            <th className="text-center p-4 font-semibold text-gray-600">競合A</th>
            <th className="text-center p-4 font-semibold text-gray-600">競合B</th>
            <th className="text-center p-4 font-semibold text-gray-600">競合C</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="p-4 font-medium text-gray-900">{feature}</td>
              <td className="text-center p-4">
                {typeof ourService[index] === 'boolean' ? (
                  ourService[index] ? (
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )
                ) : (
                  <span className="text-blue-600 font-medium">{ourService[index]}</span>
                )}
              </td>
              <td className="text-center p-4">
                {typeof competitorA[index] === 'boolean' ? (
                  competitorA[index] ? (
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )
                ) : (
                  <span className="text-gray-600">{competitorA[index]}</span>
                )}
              </td>
              <td className="text-center p-4">
                {typeof competitorB[index] === 'boolean' ? (
                  competitorB[index] ? (
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )
                ) : (
                  <span className="text-gray-600">{competitorB[index]}</span>
                )}
              </td>
              <td className="text-center p-4">
                {typeof competitorC[index] === 'boolean' ? (
                  competitorC[index] ? (
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )
                ) : (
                  <span className="text-gray-600">{competitorC[index]}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface CostBreakdownProps {
  category: string
  items: { name: string; cost: string; description: string }[]
}

function CostBreakdown({ category, items }: CostBreakdownProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="font-medium text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
            <div className="text-lg font-bold text-blue-600 ml-4">{item.cost}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ComparisonAnalysis() {
  const [activeTab, setActiveTab] = useState('comparison')

  const comparisonFeatures = [
    "GPT-4対応",
    "Claude 3対応",
    "日本語対応",
    "カスタマイズ可能",
    "API提供",
    "24時間365日サポート",
    "導入サポート",
    "トレーニング提供",
    "データ暗号化",
    "GDPR準拠",
    "既存システム連携",
    "モバイル対応"
  ]

  const ourService = [
    true, true, true, true, true, true, true, true, true, true, true, true
  ]

  const competitorA = [
    true, false, true, false, true, false, false, false, true, false, false, false
  ]

  const competitorB = [
    false, true, true, true, true, true, false, false, true, true, false, true
  ]

  const competitorC = [
    true, false, true, false, false, false, true, true, false, false, true, false
  ]

  const smallCompanyCosts = [
    { name: "基本ライセンス", cost: "¥50,000/月", description: "10名までの基本機能" },
    { name: "追加ユーザー", cost: "¥5,000/月", description: "11名目以降の追加料金" },
    { name: "初期設定費", cost: "¥100,000", description: "初回導入時の設定費用" },
    { name: "サポート費", cost: "¥20,000/月", description: "基本的なサポートサービス" }
  ]

  const mediumCompanyCosts = [
    { name: "基本ライセンス", cost: "¥150,000/月", description: "50名までの基本機能" },
    { name: "追加ユーザー", cost: "¥3,000/月", description: "51名目以降の追加料金" },
    { name: "初期設定費", cost: "¥300,000", description: "初回導入時の設定費用" },
    { name: "サポート費", cost: "¥50,000/月", description: "専任サポートサービス" },
    { name: "カスタマイズ費", cost: "¥200,000", description: "業務に合わせたカスタマイズ" }
  ]

  const largeCompanyCosts = [
    { name: "基本ライセンス", cost: "¥400,000/月", description: "200名までの基本機能" },
    { name: "追加ユーザー", cost: "¥2,000/月", description: "201名目以降の追加料金" },
    { name: "初期設定費", cost: "¥800,000", description: "初回導入時の設定費用" },
    { name: "サポート費", cost: "¥100,000/月", description: "24時間365日専任サポートサービス" },
    { name: "カスタマイズ費", cost: "¥500,000", description: "業務に合わせたカスタマイズ" },
    { name: "統合費", cost: "¥300,000", description: "既存システムとの統合" }
  ]

  return (
    <div className="space-y-12">
      {/* タブナビゲーション */}
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-lg p-1">
          {[
            { id: 'comparison', label: '他社比較' },
            { id: 'deployment', label: '導入方式比較' },
            { id: 'costs', label: 'コスト内訳' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 他社比較 */}
      {activeTab === 'comparison' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">他社サービスとの比較</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <ComparisonTable
              features={comparisonFeatures}
              ourService={ourService}
              competitorA={competitorA}
              competitorB={competitorB}
              competitorC={competitorC}
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ※ 競合他社の情報は2024年時点での調査結果です。最新の情報については各社にお問い合わせください。
            </p>
          </div>
        </div>
      )}

      {/* 導入方式比較 */}
      {activeTab === 'deployment' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">オンプレミス vs クラウド 比較</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">クラウド型</h4>
                <p className="text-gray-600">推奨</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  初期投資が少ない
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  迅速な導入・展開
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  自動アップデート
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  スケーラビリティ
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  専門チームによる運用
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">オンプレミス型</h4>
                <p className="text-gray-600">カスタマイズ重視</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  初期投資が大きい
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  導入・展開に時間がかかる
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  手動アップデートが必要
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  スケーリングが困難
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  自社での運用・保守が必要
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* コスト内訳 */}
      {activeTab === 'costs' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">導入コストの詳細内訳</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <CostBreakdown category="小企業（10-50名）" items={smallCompanyCosts} />
            <CostBreakdown category="中企業（51-200名）" items={mediumCompanyCosts} />
            <CostBreakdown category="大企業（201名以上）" items={largeCompanyCosts} />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ※ 料金は税抜き表示です。実際の料金については、お見積もり時に詳細をご案内いたします。
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              詳細な見積もりを依頼する
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

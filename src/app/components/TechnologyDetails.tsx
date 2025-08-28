'use client'

import { useState } from 'react'

interface TechnologyCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  color: string
  details?: string
}

function TechnologyCard({ title, description, features, icon, color, details }: TechnologyCardProps) {
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
          {details && (
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
          )}
        </div>

        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {details && isExpanded && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">{details}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TechnologyDetails() {
  return (
    <div className="space-y-12">
      {/* AI技術の説明 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI技術の詳細</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard
            title="GPT-4"
            description="最新の大規模言語モデル"
            features={[
              "高度な自然言語理解",
              "複雑な文脈の把握",
              "創造的なコンテンツ生成"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
            details="GPT-4は1750億個のパラメータを持つ大規模言語モデルで、人間のような自然な会話と高度な文章生成が可能です。"
          />

          <TechnologyCard
            title="Claude 3"
            description="安全性重視のAIモデル"
            features={[
              "高い安全性と信頼性",
              "詳細な分析能力",
              "倫理的な判断"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-green-500 to-emerald-500"
            details="Claude 3は安全性と信頼性を重視したAIモデルで、企業の機密情報を扱う際に適しています。"
          />

          <TechnologyCard
            title="Gemini Pro"
            description="マルチモーダルAI"
            features={[
              "テキスト・画像・音声対応",
              "リアルタイム学習",
              "高度な推論能力"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            details="Gemini Proはテキスト、画像、音声を統合的に処理できるマルチモーダルAIで、多様な業務に対応できます。"
          />
        </div>
      </div>

      {/* セキュリティ対策 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">セキュリティ・プライバシー対策</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TechnologyCard
            title="データ暗号化"
            description="エンドツーエンド暗号化"
            features={[
              "AES-256暗号化",
              "転送時・保存時の暗号化",
              "暗号化キーの安全な管理"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            color="bg-gradient-to-r from-red-500 to-pink-500"
            details="すべてのデータはAES-256暗号化で保護され、転送時と保存時の両方でセキュリティを確保しています。"
          />

          <TechnologyCard
            title="アクセス制御"
            description="細かな権限管理"
            features={[
              "ロールベースアクセス制御",
              "多要素認証（MFA）",
              "セッション管理・監査ログ"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-orange-500 to-red-500"
            details="従業員の役職や部署に応じた細かな権限設定により、必要最小限のアクセスのみを許可します。"
          />

          <TechnologyCard
            title="コンプライアンス対応"
            description="国際規格準拠"
            features={[
              "ISO 27001認証",
              "GDPR準拠",
              "SOC 2 Type II認証"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            color="bg-gradient-to-r from-teal-500 to-cyan-500"
            details="国際的なセキュリティ規格に準拠し、定期的な監査と改善により、最高水準のセキュリティを維持しています。"
          />

          <TechnologyCard
            title="データプライバシー"
            description="個人情報保護"
            features={[
              "データ最小化原則",
              "同意管理システム",
              "データ削除・匿名化"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-indigo-500 to-blue-500"
            details="個人情報の収集・利用・保存を最小限に抑え、ユーザーの同意に基づく透明性の高いデータ処理を実現します。"
          />
        </div>
      </div>

      {/* 統合方法 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">既存システムとの統合</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TechnologyCard
            title="API統合"
            description="RESTful APIによる連携"
            features={[
              "標準的なREST API",
              "JSON形式でのデータ交換",
              "OAuth 2.0認証対応"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
            details="標準的なREST APIにより、既存のERP、CRM、SFAシステムとシームレスに連携できます。"
          />

          <TechnologyCard
            title="データベース連携"
            description="既存DBとの直接接続"
            features={[
              "MySQL、PostgreSQL対応",
              "Oracle、SQL Server対応",
              "データ同期・変換機能"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            }
            color="bg-gradient-to-r from-green-500 to-emerald-500"
            details="既存のデータベースに直接接続し、データの同期や変換を自動化できます。"
          />

          <TechnologyCard
            title="ファイル連携"
            description="各種ファイル形式対応"
            features={[
              "Excel、CSV、PDF対応",
              "Word、PowerPoint対応",
              "自動ファイル処理"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            details="日常業務で使用する各種ファイル形式に対応し、自動的な処理と変換が可能です。"
          />

          <TechnologyCard
            title="クラウド連携"
            description="主要クラウドサービス対応"
            features={[
              "AWS、Azure、GCP対応",
              "SaaSサービス連携",
              "ハイブリッド環境対応"
            ]}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
            color="bg-gradient-to-r from-orange-500 to-red-500"
            details="主要なクラウドサービスとの連携により、オンプレミスとクラウドのハイブリッド環境にも対応できます。"
          />
        </div>
      </div>

      {/* 技術仕様 */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">技術仕様</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">可用性</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">&lt;100ms</div>
            <div className="text-gray-600">レスポンス時間</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">サポート体制</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">1週間</div>
            <div className="text-gray-600">導入期間</div>
          </div>
        </div>
      </div>
    </div>
  )
}

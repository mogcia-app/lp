'use client'

import { useState } from 'react'

interface ProcessStepProps {
  step: number
  title: string
  description: string
  duration: string
  icon: React.ReactNode
  details: string[]
  color: string
}

function ProcessStep({ step, title, description, duration, icon, details, color }: ProcessStepProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mr-4`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-500 mr-3">ステップ {step}</span>
              <span className="text-sm font-medium text-blue-600">{duration}</span>
            </div>
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
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

interface SupportFeatureProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
}

function SupportFeature({ title, description, icon, color, features }: SupportFeatureProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ImplementationProcess() {
  return (
    <div className="space-y-16">
      {/* 導入プロセス */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">1週間で完了する導入プロセス</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProcessStep
            step={1}
            title="要件定義・設計"
            description="業務フロー分析とAI導入計画の策定"
            duration="1-2日"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
            details={[
              "現状の業務フローを詳細に分析",
              "AI導入による改善ポイントを特定",
              "カスタマイズ要件の整理",
              "導入スケジュールの策定"
            ]}
          />

          <ProcessStep
            step={2}
            title="システム構築・設定"
            description="AIシステムの構築と基本設定"
            duration="2-3日"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            color="bg-gradient-to-r from-green-500 to-emerald-500"
            details={[
              "AIモデルの選択・設定",
              "既存システムとの連携設定",
              "ユーザー権限の設定",
              "セキュリティ設定の適用"
            ]}
          />

          <ProcessStep
            step={3}
            title="データ連携・テスト"
            description="既存データとの連携と動作確認"
            duration="1-2日"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            }
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            details={[
              "既存データベースとの連携",
              "データ変換・マッピングの確認",
              "動作テストの実施",
              "パフォーマンステストの実行"
            ]}
          />

          <ProcessStep
            step={4}
            title="ユーザートレーニング・本格運用"
            description="従業員向け研修と本格運用開始"
            duration="1日"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            color="bg-gradient-to-r from-orange-500 to-red-500"
            details={[
              "管理者向け研修の実施",
              "一般ユーザー向け研修の実施",
              "運用マニュアルの配布",
              "本格運用の開始"
            ]}
          />
        </div>
      </div>

      {/* サポート体制 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">24/7 サポート体制</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SupportFeature
            title="24/7 テクニカルサポート"
            description="いつでも技術的な問題を解決"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
            features={[
              "24時間365日のサポート対応",
              "チャット・メール・電話での問い合わせ受付",
              "平均応答時間：15分以内",
              "技術的な問題の迅速な解決"
            ]}
          />

          <SupportFeature
            title="専任担当者制度"
            description="あなたの企業専用の担当者"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-green-500 to-emerald-500"
            features={[
              "導入から運用まで一貫したサポート",
              "定期的な進捗確認・改善提案",
              "業務に精通した専門スタッフ",
              "緊急時の迅速な対応"
            ]}
          />

          <SupportFeature
            title="オンサイトサポート"
            description="必要に応じて現地でのサポート"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            features={[
              "導入時の現地サポート",
              "緊急時の現地対応",
              "定期的な現地訪問",
              "ハンズオンでの研修実施"
            ]}
          />
        </div>
      </div>

      {/* トレーニングプログラム */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">トレーニングプログラム</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">管理者向け研修</h3>
              <p className="text-gray-600">システム管理・運用管理の研修</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• システム設定・管理方法</li>
              <li>• ユーザー権限の管理</li>
              <li>• セキュリティ設定</li>
              <li>• 運用監視・レポート作成</li>
              <li>• トラブルシューティング</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">一般ユーザー向け研修</h3>
              <p className="text-gray-600">日常業務でのAI活用方法</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• 基本的な操作方法</li>
              <li>• 効率的な入力方法</li>
              <li>• よくある質問と回答</li>
              <li>• トラブル時の対処法</li>
              <li>• ベストプラクティス</li>
            </ul>
          </div>
        </div>

        {/* トレーニングスケジュール */}
        <div className="mt-8 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">トレーニングスケジュール例</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-lg font-bold text-blue-600 mb-2">1日目</div>
              <div className="text-sm text-gray-600">管理者研修<br/>システム設定・管理</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-lg font-bold text-green-600 mb-2">2日目</div>
              <div className="text-sm text-gray-600">一般ユーザー研修<br/>基本操作・活用方法</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-lg font-bold text-purple-600 mb-2">3日目</div>
              <div className="text-sm text-gray-600">実践演習<br/>実際の業務での活用</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-lg font-bold text-orange-600 mb-2">4日目</div>
              <div className="text-sm text-gray-600">フォローアップ<br/>質問対応・改善提案</div>
            </div>
          </div>
        </div>
      </div>

      {/* 成功事例 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">導入成功事例</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">導入成功率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1週間</div>
            <div className="text-gray-600">平均導入期間</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">顧客満足度</div>
          </div>
        </div>
      </div>
    </div>
  )
}

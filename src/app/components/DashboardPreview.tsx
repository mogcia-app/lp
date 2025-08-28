'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DashboardPreviewProps {
  title: string
  description: string
  features: string[]
  previewImage?: string
  isInteractive?: boolean
}

export default function DashboardPreview({ 
  title, 
  description, 
  features, 
  previewImage, 
  isInteractive = false 
}: DashboardPreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          {isInteractive && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              {isExpanded ? '閉じる' : '実際の画面を見る'}
            </button>
          )}
        </div>

        {/* ダッシュボードプレビュー */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500">AI Business Dashboard</div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-xs text-blue-600">効率向上</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">2.5h</div>
                <div className="text-xs text-green-600">時間短縮</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <div className="text-xs text-purple-600">自動化タスク</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">文書作成</span>
                <span className="text-green-600 font-medium">完了</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">データ分析</span>
                <span className="text-blue-600 font-medium">処理中</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">レポート生成</span>
                <span className="text-gray-400">待機中</span>
              </div>
            </div>
          </div>
        </div>

        {/* 機能一覧 */}
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {isExpanded && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-blue-800 mb-3">
                実際のダッシュボードで体験してみませんか？
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                デモを開始
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// メインのダッシュボードセクション
export function DashboardSection() {
  const router = useRouter()
  
  const dashboards = [
    {
      title: "文書作成・編集",
      description: "AIが提案書や報告書を自動生成",
      features: ["テンプレート自動選択", "内容の最適化提案", "複数言語対応"]
    },
    {
      title: "情報整理・検索",
      description: "社内ナレッジを瞬時に検索・整理",
      features: ["自然言語検索", "関連情報の自動関連付け", "要約生成"]
    },
    {
      title: "営業・マーケティング",
      description: "顧客データを活用した営業支援",
      features: ["顧客分析レポート", "提案書自動生成", "営業活動の最適化"]
    },
    {
      title: "データ分析・改善",
      description: "業務データから改善点を自動発見",
      features: ["KPI自動分析", "異常検知", "改善提案の自動生成"]
    }
  ]

  const handleViewFullDashboard = () => {
    router.push('/tool/home')
  }

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            実際の画面で体験
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            機能の説明だけでなく、実際のダッシュボードでAIツールの使いやすさを体感してください。
            明日から使える、シンプルで直感的なインターフェースです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {dashboards.map((dashboard, index) => (
            <DashboardPreview
              key={index}
              title={dashboard.title}
              description={dashboard.description}
              features={dashboard.features}
              isInteractive={true}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewFullDashboard}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            全機能を体験する
          </button>
        </div>
      </div>
    </section>
  )
}

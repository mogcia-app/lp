'use client'

import { useState } from 'react'

export default function VisionDetailPage() {
  const [activeTab, setActiveTab] = useState<'future' | 'transformation' | 'innovation' | 'sustainability'>('future')

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-navy-100">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">
            企業の未来を
            <span className="bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent">
              AIで創造
            </span>
            する
          </h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            AI技術の進歩により、企業の働き方と競争力が根本から変革される時代が到来しています。
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-navy-100">
            {[
              { id: 'future', label: '未来の働き方' },
              { id: 'transformation', label: 'デジタル変革' },
              { id: 'innovation', label: 'イノベーション' },
              { id: 'sustainability', label: '持続可能性' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-navy-600 text-white shadow-lg'
                    : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {activeTab === 'future' && (
            <section>
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">未来の働き方</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">時間の価値最大化</h3>
                  <p className="text-navy-600 mb-4">
                    AIが日常的な業務を自動化し、人間は創造性と戦略的思考に集中できるようになります。
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">人材の多様性活用</h3>
                  <p className="text-navy-600 mb-4">
                    AIによる業務の標準化により、多様なバックグラウンドを持つ人材が活躍できる環境を実現します。
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'transformation' && (
            <section>
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">デジタル変革</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-navy-100 text-center">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">ペーパーレス化</h3>
                  <p className="text-sm text-navy-600">
                    文書のデジタル化により、検索・共有・管理が効率化されます。
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-navy-100 text-center">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">業務自動化</h3>
                  <p className="text-sm text-navy-600">
                    繰り返し作業をAIが自動化し、業務効率を大幅に向上させます。
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-navy-100 text-center">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">データ活用</h3>
                  <p className="text-sm text-navy-600">
                    蓄積されたデータをAIが分析し、意思決定を支援します。
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'innovation' && (
            <section>
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">イノベーション創出</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">新製品・サービス開発</h3>
                    <p className="text-navy-600">
                      AIによる市場分析と顧客ニーズの深い理解により、革新的な製品・サービスの開発が加速します。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">業務プロセス革新</h3>
                    <p className="text-navy-600">
                      既存の業務プロセスをAIが分析し、最適化の提案や新たなアプローチを提示します。
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'sustainability' && (
            <section>
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">持続可能性の実現</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">環境への配慮</h3>
                  <p className="text-navy-600">
                    ペーパーレス化、通勤削減、エネルギー効率の最適化により環境負荷を軽減します。
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">社会的価値の創造</h3>
                  <p className="text-navy-600">
                    働き方改革、多様性の促進、地域社会への貢献を実現します。
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">未来を一緒に創造しませんか？</h3>
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
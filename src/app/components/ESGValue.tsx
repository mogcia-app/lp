'use client'

import { useState } from 'react'

interface ESGFeatureProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  benefits: string[]
  metrics: { label: string; value: string; unit: string; improvement: string }[]
}

function ESGFeature({ title, description, icon, color, benefits, metrics }: ESGFeatureProps) {
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

        {/* メトリクス表示 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600 mb-1">{metric.value}</div>
              <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
              <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
            </div>
          ))}
        </div>

        {/* 詳細情報（展開時） */}
        {isExpanded && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">具体的な効果</h4>
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
        )}
      </div>
    </div>
  )
}

interface SustainabilityMetricProps {
  category: string
  current: string
  target: string
  improvement: string
  icon: React.ReactNode
  color: string
}

function SustainabilityMetric({ category, current, target, improvement, icon, color }: SustainabilityMetricProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">{category}</h4>
      <div className="space-y-2">
        <div className="text-sm text-gray-600">
          <span className="font-medium">現在:</span> {current}
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">目標:</span> {target}
        </div>
        <div className="text-sm text-green-600 font-medium">
          {improvement}
        </div>
      </div>
    </div>
  )
}

export default function ESGValue() {
  return (
    <div className="space-y-16">
      {/* 環境への配慮 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">環境への配慮</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ESGFeature
            title="ペーパーレス化の推進"
            description="AI活用による文書のデジタル化とペーパーレス化"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            color="bg-gradient-to-r from-green-500 to-emerald-500"
            benefits={[
              "年間用紙使用量を70%削減",
              "印刷・配送コストの大幅削減",
              "森林資源の保護に貢献",
              "CO2排出量の削減"
            ]}
            metrics={[
              { label: "用紙削減", value: "70%", unit: "削減", improvement: "大幅改善" },
              { label: "コスト削減", value: "50%", unit: "削減", improvement: "効率化" },
              { label: "CO2削減", value: "30%", unit: "削減", improvement: "環境配慮" }
            ]}
          />

          <ESGFeature
            title="エネルギー効率の最適化"
            description="AIによる業務プロセスの最適化でエネルギー消費を削減"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
            benefits={[
              "サーバー稼働時間の最適化",
              "不要な処理の自動停止",
              "効率的なリソース配分",
              "グリーンITの実現"
            ]}
            metrics={[
              { label: "エネルギー削減", value: "25%", unit: "削減", improvement: "効率化" },
              { label: "処理時間", value: "40%", unit: "短縮", improvement: "高速化" },
              { label: "リソース効率", value: "35%", unit: "向上", improvement: "最適化" }
            ]}
          />
        </div>

        {/* サステナビリティメトリクス */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">サステナビリティ目標</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <SustainabilityMetric
              category="カーボンフットプリント"
              current="100%"
              target="70%"
              improvement="30%削減"
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
              color="bg-green-500"
            />
            <SustainabilityMetric
              category="再生可能エネルギー"
              current="20%"
              target="80%"
              improvement="60%向上"
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              color="bg-blue-500"
            />
            <SustainabilityMetric
              category="廃棄物削減"
              current="100%"
              target="30%"
              improvement="70%削減"
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              }
              color="bg-purple-500"
            />
            <SustainabilityMetric
              category="水資源保護"
              current="100%"
              target="50%"
              improvement="50%削減"
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              color="bg-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* 働き方改革 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">働き方改革の実現</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ESGFeature
            title="ワークライフバランスの向上"
            description="AIによる業務効率化で従業員の時間を創出"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            benefits={[
              "残業時間を平均3時間/日削減",
              "有給休暇取得率を20%向上",
              "リモートワークの効率化",
              "ストレスレベルの低下"
            ]}
            metrics={[
              { label: "残業時間", value: "3時間", unit: "/日削減", improvement: "大幅改善" },
              { label: "有給取得率", value: "20%", unit: "向上", improvement: "バランス向上" },
              { label: "満足度", value: "85%", unit: "向上", improvement: "従業員満足" }
            ]}
          />

          <ESGFeature
            title="柔軟な働き方の支援"
            description="場所や時間に縛られない働き方を実現"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
            color="bg-gradient-to-r from-orange-500 to-red-500"
            benefits={[
              "リモートワーク環境の最適化",
              "フレックスタイム制の導入支援",
              "子育て・介護との両立支援",
              "多様な働き方の選択肢提供"
            ]}
            metrics={[
              { label: "リモート率", value: "80%", unit: "実現", improvement: "柔軟性向上" },
              { label: "満足度", value: "90%", unit: "向上", improvement: "従業員満足" },
              { label: "定着率", value: "15%", unit: "向上", improvement: "人材確保" }
            ]}
          />
        </div>

        {/* 働き方改革の効果 */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">働き方改革による効果</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">業務効率向上</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3時間</div>
              <div className="text-gray-600">1日あたりの時間創出</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">従業員満足度向上</div>
            </div>
          </div>
        </div>
      </div>

      {/* ダイバーシティ・インクルージョン */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ダイバーシティ・インクルージョン</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ESGFeature
            title="多様な人材の活躍支援"
            description="AIによる業務の標準化で多様なバックグラウンドの従業員を支援"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-teal-500 to-cyan-500"
            benefits={[
              "言語・文化の壁を越えた業務支援",
              "障がいのある従業員の業務参加支援",
              "年齢に関係ないスキル習得機会",
              "多様な視点によるイノベーション創出"
            ]}
            metrics={[
              { label: "多様性指数", value: "75%", unit: "向上", improvement: "包括性向上" },
              { label: "参加率", value: "90%", unit: "向上", improvement: "全員参加" },
              { label: "満足度", value: "88%", unit: "向上", improvement: "従業員満足" }
            ]}
          />

          <ESGFeature
            title="公平な機会の提供"
            description="AIによる客観的な評価と機会の均等化"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            color="bg-gradient-to-r from-indigo-500 to-blue-500"
            benefits={[
              "バイアスのない客観的評価",
              "能力に基づく公平な機会提供",
              "透明性の高い人事評価システム",
              "多様なキャリアパスの支援"
            ]}
            metrics={[
              { label: "公平性", value: "95%", unit: "向上", improvement: "客観性向上" },
              { label: "透明性", value: "90%", unit: "向上", improvement: "信頼性向上" },
              { label: "満足度", value: "92%", unit: "向上", improvement: "従業員満足" }
            ]}
          />
        </div>

        {/* ダイバーシティ指標 */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ダイバーシティ指標</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
              <div className="text-gray-600">女性管理職比率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">30%</div>
              <div className="text-gray-600">外国籍従業員比率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">25%</div>
              <div className="text-gray-600">障がい者雇用比率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">多様性満足度</div>
            </div>
          </div>
        </div>
      </div>

      {/* ESG総合評価 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ESG総合評価</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">A+</div>
            <div className="text-gray-600 mb-2">環境（Environment）</div>
            <div className="text-sm text-green-600">優秀な環境配慮</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">A</div>
            <div className="text-gray-600 mb-2">社会（Social）</div>
            <div className="text-sm text-blue-600">高い社会的価値</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">A</div>
            <div className="text-gray-600 mb-2">ガバナンス（Governance）</div>
            <div className="text-sm text-purple-600">優れた企業統治</div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            AI活用による包括的なESG対応で、持続可能な社会の実現に貢献しています
          </p>
        </div>
      </div>
    </div>
  )
}

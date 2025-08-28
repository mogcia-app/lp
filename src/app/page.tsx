'use client'

import AIChatbot from './components/AIChatbot'
import AnimatedCounter from './components/AnimatedCounter'
import HoverCard from './components/HoverCard'
import CaseStudy from './components/CaseStudy'
import ROICalculator from './components/ROICalculator'
import TechnologyDetails from './components/TechnologyDetails'
import ComparisonAnalysis from './components/ComparisonAnalysis'
import ImplementationProcess from './components/ImplementationProcess'
import ESGValue from './components/ESGValue'
import OEMBusiness from './components/OEMBusiness'
import { DashboardSection } from './components/DashboardPreview'
import HeroDashboard from './components/HeroDashboard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/98 backdrop-blur-sm shadow-sm border-b border-navy-50 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo & Brand */}
            <div className="flex items-center group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-navy-600 to-navy-800 rounded-lg mr-3 flex items-center justify-center group-hover:from-navy-700 group-hover:to-navy-900 transition-all duration-300 shadow-md group-hover:shadow-lg">
                <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h1 className="text-lg font-semibold text-navy-900 group-hover:text-navy-700 transition-colors duration-300">AI Business Solutions</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { href: '#home', label: 'ホーム' },
                { href: '#vision', label: 'ビジョン' },
                { href: '#solutions', label: 'ソリューション' },
                { href: '#dashboard', label: 'デモ' },
                { href: '#cases', label: '事例' },
                { href: '#technology', label: '技術' },
                { href: '#comparison', label: '比較' },
                { href: '#implementation', label: '導入' },
                { href: '#esg', label: 'ESG' },
                { href: '#oem', label: 'OEM' },
                { href: '#contact', label: 'お問い合わせ' }
              ].map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="px-3 py-2 text-sm text-navy-600 hover:text-navy-900 transition-all duration-200 font-medium rounded-md hover:bg-navy-50 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-navy-600 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 rounded-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => window.location.href = '/tool/home'}
              className="group bg-gradient-to-r from-navy-600 to-navy-800 text-white px-4 py-2 rounded-lg hover:from-navy-700 hover:to-navy-900 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm transform hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="flex items-center">
                体験してみる
                <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-50 via-white to-navy-100 relative overflow-hidden">
        {/* 背景の装飾要素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-navy-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-medium mb-6 hover:bg-navy-200 transition-all duration-300 cursor-pointer group">
                <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                次世代AIソリューション
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight animate-slide-up">
                企業の未来を
                <span className="bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent hover:from-navy-700 hover:to-navy-900 transition-all duration-500">AIで創造</span>
                する
              </h1>
              <p className="text-xl text-navy-700 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                従業員の創造性を最大限に引き出し、企業の競争力を根本から変革します。
                AIが日常業務を自動化し、人間はより価値のある仕事に集中できる未来を実現します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <button 
                  onClick={() => window.location.href = '/tool/home'}
                  className="group bg-gradient-to-r from-navy-600 to-navy-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-navy-700 hover:to-navy-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 animate-glow"
                >
                  <span className="flex items-center justify-center">
                    未来を体験する
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-navy-300 text-navy-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-navy-600 hover:text-navy-800 hover:bg-navy-50 transition-all duration-300 bg-white/90 backdrop-blur-sm transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    導入事例を見る
                    <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </button>
              </div>
              
              {/* Stats with Animated Counter */}
              <div className="grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter 
                    end={500} 
                    suffix="+" 
                    className="text-2xl font-bold text-navy-600 mb-1 group-hover:text-navy-700 transition-colors duration-300"
                  />
                  <div className="text-sm text-navy-600 group-hover:text-navy-700 transition-colors duration-300">導入企業</div>
                </div>
                <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter 
                    end={40} 
                    suffix="%" 
                    className="text-2xl font-bold text-navy-600 mb-1 group-hover:text-navy-700 transition-colors duration-300"
                  />
                  <div className="text-sm text-navy-600 group-hover:text-navy-700 transition-colors duration-300">効率向上</div>
                </div>
                <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-navy-600 mb-1 group-hover:text-navy-700 transition-colors duration-300">24/7</div>
                  <div className="text-sm text-navy-600 group-hover:text-navy-700 transition-colors duration-300">サポート</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI導入後の企業の未来</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              従業員は創造的な仕事に集中し、AIが日常業務を自動化する。
              そんな理想的な企業の姿を、今すぐ実現できます。
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">従業員の働き方が根本から変わる</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">ルーチン作業から解放</h4>
                    <p className="text-gray-600">文書作成、データ入力、定型レポート作成などの単調な作業をAIが自動化。従業員は本来の専門性を活かした創造的な業務に集中できます。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">意思決定の質が向上</h4>
                    <p className="text-gray-600">AIが大量のデータを分析し、洞察を提供。従業員はより的確で迅速な意思決定を行い、企業の競争力を向上させます。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">顧客満足度の向上</h4>
                    <p className="text-gray-600">AIが顧客のニーズを分析し、パーソナライズされた提案を自動生成。営業担当者はより深い顧客関係の構築に集中できます。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">1日の業務の変化</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm text-gray-700">AI導入前</span>
                    <span className="text-sm font-medium text-red-600">8時間</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm text-gray-700">AI導入後</span>
                    <span className="text-sm font-medium text-green-600">3時間</span>
                  </div>
                  <div className="text-center pt-4">
                    <AnimatedCounter 
                      end={62.5} 
                      suffix="%" 
                      className="text-2xl font-bold text-blue-600 mb-1"
                    />
                    <div className="text-sm text-gray-600">時間短縮</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section with Hover Cards */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AIが変える企業の業務効率</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6つの主要カテゴリで、企業のあらゆる業務をAIで最適化します
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 文書作成・編集 */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="文書作成・編集"
              description="AIが文書作成を自動化し、品質と効率を大幅に向上させます"
              features={[
                "報告書・提案書のドラフト作成",
                "メール文面の生成・営業・問い合わせ"
              ]}
              effect="時間短縮: 70%"
              color="bg-gradient-to-r from-blue-500 to-indigo-500"
            >
              文書作成AIは、過去の文書パターンを学習し、業界特有の表現やフォーマットを自動適用します。
              品質チェックも自動化され、ミスのない文書を短時間で作成できます。
            </HoverCard>

            {/* 情報整理・検索支援 */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              title="情報整理・検索支援"
              description="社内の膨大な情報をAIが整理し、必要な情報を瞬時に見つけ出します"
              features={[
                "長文の要約・社内資料・契約書など",
                "社内ナレッジの検索補助"
              ]}
              effect="検索効率: 3倍向上"
              color="bg-gradient-to-r from-green-500 to-emerald-500"
            >
              自然言語での検索が可能で、「去年の売上データ」のような曖昧な表現でも正確に情報を特定できます。
              関連情報の自動提案機能により、思わぬ発見も期待できます。
            </HoverCard>

            {/* 企画立案・アイデア出し */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="企画立案・アイデア出し"
              description="AIが市場トレンドを分析し、革新的なアイデアを提案します"
              features={[
                "新商品・サービスの企画立案",
                "マーケティング戦略のアイデア"
              ]}
              effect="アイデア生成: 5倍増加"
              color="bg-gradient-to-r from-purple-500 to-pink-500"
            >
              市場データ、競合分析、消費者行動パターンをAIが統合分析し、
              成功確率の高い企画案を自動生成します。ブレインストーミングの効率も大幅に向上します。
            </HoverCard>

            {/* 営業・マーケティング支援 */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="営業・マーケティング支援"
              description="顧客データをAIが分析し、最適な営業戦略を提案します"
              features={[
                "顧客ごとの提案書カスタマイズ",
                "SNS・Web広告のキャッチコピー生成"
              ]}
              effect="営業効率: 2.5倍向上"
              color="bg-gradient-to-r from-orange-500 to-red-500"
            >
              顧客の購買履歴、行動パターン、興味関心をAIが分析し、
              パーソナライズされた提案書やマーケティング素材を自動生成します。
            </HoverCard>

            {/* 人材・教育 */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="人材・教育"
              description="従業員のスキル向上をAIがサポートし、組織全体の能力を向上させます"
              features={[
                "社内研修資料の作成・要約",
                "社員FAQチャットボット"
              ]}
              effect="学習効率: 3倍向上"
              color="bg-gradient-to-r from-teal-500 to-cyan-500"
            >
              個々の従業員のスキルレベルや学習スタイルをAIが分析し、
              最適な学習コンテンツとペースを提案します。24時間いつでも学習サポートが受けられます。
            </HoverCard>

            {/* データ分析・業務改善 */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="データ分析・業務改善"
              description="ビッグデータをAIが分析し、業務改善のための洞察を提供します"
              features={[
                "定型レポートの自動生成",
                "過去案件データからの予測分析"
              ]}
              effect="分析精度: 85%向上"
              color="bg-gradient-to-r from-indigo-500 to-blue-500"
            >
              複雑なデータセットをAIが自動分析し、人間では見つけられないパターンや
              トレンドを発見します。予測分析により、将来のリスクや機会を事前に把握できます。
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">導入企業が実感する効果</h2>
            <p className="text-xl text-gray-600">AI活用で業務効率が劇的に向上します</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">業務効率 <AnimatedCounter end={40} suffix="%" className="inline" /> 向上</h3>
              <p className="text-gray-600">文書作成や情報検索の時間を大幅に短縮し、より創造的な業務に集中できます</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">コスト削減 <AnimatedCounter end={30} suffix="%" /></h3>
              <p className="text-gray-600">人件費や時間コストを削減し、投資対効果を最大化します</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl border border-purple-200">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">従業員満足度向上</h3>
              <p className="text-gray-600">ルーチン作業をAIに任せることで、従業員はやりがいのある業務に集中できます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <DashboardSection />

      {/* Case Studies Section */}
      <section id="cases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">導入事例</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              業界・企業規模を問わず、AI活用で成果を上げている企業の事例をご紹介します
            </p>
          </div>

          {/* 業界別フィルター */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['全業界', '製造業', 'IT・通信', '金融', '小売・流通', '医療・ヘルスケア', '建設・不動産'].map((industry) => (
              <button
                key={industry}
                className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                {industry}
              </button>
            ))}
          </div>

          {/* 導入事例グリッド */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <CaseStudy
              company="テクノロジーソリューションズ"
              industry="IT・通信"
              size="中企業"
              logo="T"
              challenge="開発チームの文書作成に時間がかかり、プロジェクトの進行が遅れていた。また、社内の技術文書の検索が困難で、知識の共有ができていなかった。"
              solution="AI文書作成ツールと社内ナレッジ検索システムを導入。開発ドキュメントの自動生成と、技術文書のインデックス化を実現。"
              results={[
                "開発ドキュメント作成時間を75%短縮",
                "技術文書の検索効率を4倍向上",
                "プロジェクト完了率が30%向上"
              ]}
              metrics={[
                { label: "文書作成時間", value: "75%短縮", improvement: "大幅改善" },
                { label: "検索効率", value: "4倍向上", improvement: "効率化" },
                { label: "プロジェクト完了率", value: "30%向上", improvement: "生産性向上" }
              ]}
            />

            <CaseStudy
              company="グローバル製造株式会社"
              industry="製造業"
              size="大企業"
              logo="G"
              challenge="工場での品質管理レポート作成に膨大な時間がかかり、品質問題の早期発見ができていなかった。また、従業員の研修資料作成も手作業で非効率だった。"
              solution="AI品質管理システムと自動レポート生成ツールを導入。センサーデータの自動分析と、品質レポートの自動生成を実現。"
              results={[
                "品質レポート作成時間を80%短縮",
                "品質問題の早期発見率を3倍向上",
                "研修資料作成効率を5倍向上"
              ]}
              metrics={[
                { label: "レポート作成時間", value: "80%短縮", improvement: "大幅改善" },
                { label: "問題発見率", value: "3倍向上", improvement: "品質向上" },
                { label: "研修効率", value: "5倍向上", improvement: "教育改善" }
              ]}
            />

            <CaseStudy
              company="フィナンシャルサービス"
              industry="金融"
              size="大企業"
              logo="F"
              challenge="顧客向け提案書の作成に時間がかかり、営業効率が低下していた。また、市場分析レポートの作成も手作業で、迅速な意思決定ができていなかった。"
              solution="AI営業支援ツールと市場分析システムを導入。顧客データに基づく提案書の自動生成と、市場トレンドの自動分析を実現。"
              results={[
                "提案書作成時間を70%短縮",
                "営業効率を2.5倍向上",
                "市場分析レポート作成を90%自動化"
              ]}
              metrics={[
                { label: "提案書作成", value: "70%短縮", improvement: "効率化" },
                { label: "営業効率", value: "2.5倍向上", improvement: "生産性向上" },
                { label: "レポート自動化", value: "90%", improvement: "大幅改善" }
              ]}
            />

            <CaseStudy
              company="リテールチェーン"
              industry="小売・流通"
              size="中企業"
              logo="R"
              challenge="店舗での在庫管理と売上分析が手作業で、リアルタイムな意思決定ができていなかった。また、顧客へのマーケティング施策も効果測定が困難だった。"
              solution="AI在庫管理システムとマーケティング分析ツールを導入。在庫の自動最適化と、顧客行動分析による効果的なマーケティングを実現。"
              results={[
                "在庫管理効率を3倍向上",
                "売上予測精度を85%向上",
                "マーケティング効果を2倍向上"
              ]}
              metrics={[
                { label: "在庫管理効率", value: "3倍向上", improvement: "大幅改善" },
                { label: "売上予測精度", value: "85%向上", improvement: "精度向上" },
                { label: "マーケティング効果", value: "2倍向上", improvement: "効果向上" }
              ]}
            />
          </div>

          {/* 企業規模別導入パターン */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">企業規模別導入パターン</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">小企業（10-50名）</h4>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• 文書作成・編集ツール</li>
                  <li>• 基本的な情報検索支援</li>
                  <li>• 導入期間：1週間</li>
                  <li>• 初期投資：月額5,000円</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">中企業（51-200名）</h4>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• 包括的なAIソリューション</li>
                  <li>• 営業・マーケティング支援</li>
                  <li>• 導入期間：2-3週間</li>
                  <li>• 初期投資：月額15,000円</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">大企業（201名以上）</h4>
                <ul className="text-left">
                  <li>• エンタープライズAIプラットフォーム</li>
                  <li>• 全社横断的な業務最適化</li>
                  <li>• 導入期間：1-2ヶ月</li>
                  <li>• 初期投資：月額50,000円</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ROI計算ツール */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">あなたの企業のROIを計算してみませんか？</h3>
            <p className="text-xl text-gray-600">企業規模と従業員数を入力するだけで、AI導入による投資対効果を簡単に計算できます</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Technology Details Section */}
      <section id="technology" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">技術的な詳細</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最新のAI技術、セキュリティ対策、既存システムとの統合方法について詳しくご説明します
            </p>
          </div>
          
          <TechnologyDetails />
        </div>
      </section>

      {/* Comparison Analysis Section */}
      <section id="comparison" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">比較・競合分析</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              他社サービスとの違い、導入方式の比較、コストの詳細内訳を分かりやすくご説明します
            </p>
          </div>
          
          <ComparisonAnalysis />
        </div>
      </section>

      {/* Implementation Process Section */}
      <section id="implementation" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">導入プロセス</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              導入プロセスを段階的に説明し、スムーズな導入を実現します
            </p>
          </div>
          
          <ImplementationProcess />
        </div>
      </section>

      {/* ESG Value Section */}
      <section id="esg" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">社会的価値・ESG対応</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI活用による環境配慮、働き方改革、ダイバーシティ対応で持続可能な社会の実現に貢献します
            </p>
          </div>
          
          <ESGValue />
        </div>
      </section>

      {/* OEM Business Section */}
      <section id="oem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">OEM事業・卸販売</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              自社ブランドでAIツールを販売したい企業様向けに、5000円からの手頃な価格でOEMサービスを提供しています
            </p>
          </div>
          
          <OEMBusiness />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">今すぐAI活用を始めませんか？</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            <AnimatedCounter end={500} suffix="+" className="font-bold" />社以上の企業が既に導入し、業務効率の向上を実感しています。
            無料相談で、AIがもたらす変化を体験してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              無料相談を申し込む
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              導入事例を見る
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mr-3"></div>
                <h3 className="text-xl font-bold">AI Business Solutions</h3>
              </div>
              <p className="text-gray-400">企業のAI活用を加速させ、業務効率の向上を実現します。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ソリューション</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">文書作成・編集</a></li>
                <li><a href="#" className="hover:text-white transition-colors">営業・マーケティング</a></li>
                <li><a href="#" className="hover:text-white transition-colors">人材・教育</a></li>
                <li><a href="#" className="hover:text-white transition-colors">データ分析</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入事例</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ブログ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ヘルプセンター</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入サポート</a></li>
                <li><a href="#" className="hover:text-white transition-colors">トレーニング</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Business Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  )
}

'use client'

import Header from './components/Header'
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
import PricingSection from './components/PricingSection'


export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section - Video Only */}
      <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* フォールバック背景（動画の背後） */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-navy-50 via-white to-navy-100 z-0"></div>
          
          {/* デスクトップ用動画 */}
          <video 
            className="absolute inset-0 w-full h-full object-cover object-bottom z-10 hidden md:block"
            autoPlay 
            muted 
            playsInline
            preload="auto"
          >
            <source src="/upmo.mp4" type="video/mp4" />
          </video>
          
          {/* モバイル用動画 */}
          <video 
            className="absolute inset-0 w-full h-full object-cover object-bottom z-10 block md:hidden"
            autoPlay 
            muted 
            playsInline
            preload="auto"
          >
            <source src="/upmo1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* 動画の上にコンテンツを配置する場合（オプション） */}
        <div className="relative z-20 h-full flex items-center justify-center">
          {/* 必要に応じて動画の上にテキストやボタンを配置 */}
        </div>
      </section>

      {/* What is Upmo Section */}
      <section id="vision" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">小規模ビジネス向けの最適化ダッシュボード</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              業種別に最適化された機能で、在庫管理・売上分析・顧客管理を一元化。
              すぐに使えるテンプレートで、手作業を一切不要にする即戦力設計です。
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">製造業</h3>
              <p className="text-gray-600">生産スケジュール、検査記録、在庫一覧を一元管理</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">小売業</h3>
              <p className="text-gray-600">売上データ、顧客一覧、商品カタログで在庫最適化</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">サービス業</h3>
              <p className="text-gray-600">予約カレンダー、スタッフ管理、フィードバック収集</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">建設業</h3>
              <p className="text-gray-600">プロジェクト管理、資材調達、安全記録</p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">医療業</h3>
              <p className="text-gray-600">患者管理、診療予約、医療機器管理</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">その他</h3>
              <p className="text-gray-600">業種別にカスタマイズ可能、複数業種の同時選択対応</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">今すぐ使える機能（ベース ¥25,000/月）</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🏭 業種別カスタマイズ</h4>
                <p className="text-sm text-gray-600">複数業種の同時選択が可能。テンプレートを自動生成</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🔨 カスタムページビルダー</h4>
                <p className="text-sm text-gray-600">デフォルトコンポーネント配置済み、即戦力設計</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">💾自動保存</h4>
                <p className="text-sm text-gray-600">リアルタイム保存、多デバイス同期</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section with Hover Cards */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">拡張パック（追加機能）</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              必要に応じて追加できる機能パック。あなたのビジネスに合わせて選べます
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 在庫・原価アラート */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              }
              title="在庫・原価アラート（¥5,000/月）"
              description="原材料の使用量を自動追跡し、AIが在庫切れや発注タイミングを通知"
              features={[
                "原材料ごとの在庫量登録",
                "日々の販売数から消費量を予測",
                "在庫が閾値以下になると自動通知"
              ]}
              effect="発注忘れ: 100%防止"
              color="bg-gradient-to-r from-orange-500 to-red-500"
            >
              パン屋・飲食店の食材在庫、製造業の資材発注を自動化。原材料が少なくなるとSlack・LINE・メールで自動通知し、発注リストを自動生成します。
            </HoverCard>

            {/* 売上分析 */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="売上分析（¥5,000/月）"
              description="レシート写メだけで自動入力。人気商品を自動で見える化"
              features={[
                "レシート写メで売上自動記録",
                "人気商品ランキング生成",
                "SNSマーケティング用データ"
              ]}
              effect="集客: 2倍向上"
              color="bg-gradient-to-r from-green-500 to-emerald-500"
            >
              外部API不要！レシート写メだけで完結する売上管理。何が売れたか自動で見える化し、顧客分析でリピート率向上を実現します。
            </HoverCard>

            {/* ワークフロー・自動発注 */}
            <HoverCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="ワークフロー・自動発注（¥8,000/月）"
              description="人が押していたボタンをAIが押す。自動発注で完全自動化"
              features={[
                "原材料在庫が閾値以下で発注メール自動送信",
                "店舗間在庫移動リクエスト自動作成",
                "承認ワークフロー自動化"
              ]}
              effect="作業時間: 90%削減"
              color="bg-gradient-to-r from-blue-500 to-indigo-500"
            >
              原材料在庫が少なくなったら自動で発注メールを送信。店舗間の在庫移動も自動リクエスト作成し、管理者承認をSlack通知。ワークフローを完全自動化します。
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upmoで実現する効果</h2>
            <p className="text-lg text-gray-600">小規模ビジネスに特化した機能で、業務効率を劇的に向上させます</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                時間削減 <span className="inline-block"><AnimatedCounter end={90} suffix="%" className="inline" /></span>
              </h3>
              <p className="text-gray-600">在庫管理の手作業を90%削減。発注リマインダーで忘れ防止。レシート写メで売上記録が自動化されます。</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">売上向上</h3>
              <p className="text-gray-600">人気商品の把握で無駄な仕入れを防止。顧客分析でリピート率向上。SNSマーケティング用データで集客向上。</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl border border-purple-200">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">コスト削減</h3>
              <p className="text-gray-600">外部POSシステム不要。API連携なしで即開始。必要な機能だけを選べるので、初期投資を抑えられます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <DashboardSection />

      {/* Case Studies Section */}
      <section id="cases" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">導入事例</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              小規模ビジネスで成果を上げている企業の事例をご紹介します
            </p>
          </div>

          {/* 導入事例グリッド */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <CaseStudy
              company="パン屋「山田ベーカリー」"
              industry="小売業"
              size="5-10名"
              logo="🍞"
              challenge="食材の在庫管理が手作業で、発注忘れで材料が切れることが頻発。売上記録も手作業で集計に時間がかかっていた。"
              solution="Upmoを導入。製造業テンプレートで生産スケジュール、在庫アラート機能で発注忘れを防止。レシート写メで売上自動記録を実現。"
              results={[
                "在庫管理の手作業を90%削減",
                "発注忘れを完全に防止",
                "売上記録時間を80%短縮"
              ]}
              metrics={[
                { label: "在庫管理削減", value: "90%", improvement: "大幅改善" },
                { label: "発注忘れ", value: "0%", improvement: "完全防止" },
                { label: "記録時間短縮", value: "80%", improvement: "効率化" }
              ]}
            />

            <CaseStudy
              company="飲食店「カフェ・リベラル」"
              industry="サービス業"
              size="10-15名"
              logo="☕"
              challenge="人気メニューの把握ができず、仕入れの無駄が発生。スタッフシフトの管理もExcelで非効率だった。"
              solution="サービス業テンプレートで予約カレンダーと売上分析を導入。人気メニューの可視化と、スタッフ管理を一元化。"
              results={[
                "仕入れの無駄を60%削減",
                "人気メニュー把握で売上15%向上",
                "シフト管理時間を70%削減"
              ]}
              metrics={[
                { label: "無駄削減", value: "60%", improvement: "コスト削減" },
                { label: "売上向上", value: "15%", improvement: "収益向上" },
                { label: "管理時間短縮", value: "70%", improvement: "効率化" }
              ]}
            />

            <CaseStudy
              company="製造業「田中メタル工業」"
              industry="製造業"
              size="20-30名"
              logo="⚙️"
              challenge="資材の発注タイミングを逃し、生産ラインが停止。品質記録も紙ベースで検索が困難だった。"
              solution="製造業テンプレートとワークフロー自動発注パックを導入。資材在庫が閾値以下になると自動発注メール送信を実現。"
              results={[
                "生産ライン停止率を90%削減",
                "発注作業時間を80%削減",
                "品質記録検索時間を85%短縮"
              ]}
              metrics={[
                { label: "停止率削減", value: "90%", improvement: "生産性向上" },
                { label: "作業時間削減", value: "80%", improvement: "効率化" },
                { label: "検索時間短縮", value: "85%", improvement: "時間短縮" }
              ]}
            />

            <CaseStudy
              company="小売店「グリーンショップ」"
              industry="小売業"
              size="15-20名"
              logo="🛍️"
              challenge="在庫管理が手作業で、売れ筋商品の把握ができなかった。レシート管理もバラバラで統合分析ができなかった。"
              solution="小売業テンプレートに売上分析パックを追加。レシート写メで自動記録、人気商品ランキングを自動生成。"
              results={[
                "在庫管理効率を3倍向上",
                "売れ筋商品把握で売上20%向上",
                "レシート集計時間を95%削減"
              ]}
              metrics={[
                { label: "管理効率", value: "3倍向上", improvement: "大幅改善" },
                { label: "売上向上", value: "20%", improvement: "収益向上" },
                { label: "集計削減", value: "95%", improvement: "時間削減" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technology Details Section */}
      <section id="technology" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">技術的な詳細</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Firebase、Firestore、AI技術を使った安全で効率的なプラットフォーム
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💾 Firestore自動保存</h3>
              <p className="text-gray-600">すべての変更がリアルタイムで自動保存。複数デバイス間で同期。データ紛失の心配なし。</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 セキュリティ</h3>
              <p className="text-gray-600">Firebase Authenticationで安全な認証。データは暗号化され、ユーザーごとにアクセス制御。</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 簡単導入</h3>
              <p className="text-gray-600">外部API不要。初期設定サポート付きで、すぐに使い始められます。設定も直感的。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Analysis Section */}
      <section id="comparison" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">他ツールとの違い</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Upmoが選ばれる理由
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❌ 一般的なBIツール</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 複雑で設定が難しい</li>
                <li>• 小規模店には過剰機能が多い</li>
                <li>• 専門知識が必要</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Excelでの管理</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 手作業が多くミスが発生</li>
                <li>• データが散らばる</li>
                <li>• リアルタイム更新ができない</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Upmo</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 業種別に最適化で即戦力</li>
                <li>• デフォルトコンポーネント配置済み</li>
                <li>• Firestoreで自動保存・同期</li>
                <li>• 小規模店に特化した機能だけ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section id="implementation" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">導入ステップ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              簡単4ステップで始められる
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">アカウント作成</h3>
              <p className="text-sm text-gray-600">会社情報、チーム規模を入力</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">業種選択</h3>
              <p className="text-sm text-gray-600">製造業 + 小売業など複数業種を選択</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">すぐ使える</h3>
              <p className="text-sm text-gray-600">デフォルトコンポーネントが自動配置済み</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">カスタマイズ</h3>
              <p className="text-sm text-gray-600">必要に応じて編集・追加</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">料金プラン</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              必要な機能だけを選べる柔軟な価格設定
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">ベースプラン</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">¥25,000<span className="text-lg">/月</span></p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ カスタムページビルダー</li>
                <li>✓ 業種別テンプレート</li>
                <li>✓ デフォルトコンポーネント</li>
                <li>✓ Firestore自動保存</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">セットアップパック</h3>
              <p className="text-4xl font-bold text-green-600 mb-4">¥30,000<span className="text-lg">/月</span></p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ ベースプランの全機能</li>
                <li>✓ 在庫管理</li>
                <li>✓ 売上記録</li>
                <li>✓ 人気商品分析</li>
                <li>✓ 発注通知</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">追加機能も後から選べます</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">拡張パック（追加）</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">在庫アラート</p>
                <p className="text-blue-600 font-bold">¥5,000/月</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">売上分析</p>
                <p className="text-green-600 font-bold">¥5,000/月</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">ワークフロー自動化</p>
                <p className="text-purple-600 font-bold">¥8,000/月</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">初期設定費（業種別調整）: ¥50,000〜¥100,000</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">今すぐUpmoを始めませんか？</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            14日間無料トライアル + 初期設定サポート付き
            <br />
            まずは無料トライアルから、Upmoの便利さを体験してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'https://upmo-demo.vercel.app/'}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              無料トライアルを開始
            </button>
            <button 
              onClick={() => window.location.href = '/sections/contact'}
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </section>



      {/* AI Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-[#005eb2]">Upmo</h3>
              </div>
              <p className="text-gray-400">小規模ビジネス向けの最適化ダッシュボード。業種別にカスタマイズされた機能で業務効率を向上させます。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">機能</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#solutions" className="hover:text-white transition-colors">業種別カスタマイズ</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">カスタムページビルダー</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">在庫アラート</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">売上分析</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#cases" className="hover:text-white transition-colors">導入事例</a></li>
                <li><a href="#vision" className="hover:text-white transition-colors">Upmoとは</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="#implementation" className="hover:text-white transition-colors">導入サポート</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://upmo-demo.vercel.app/" className="hover:text-white transition-colors">無料トライアル</a></li>
                <li><a href="/sections/contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="https://upmo-demo.vercel.app/" className="hover:text-white transition-colors">体験してみる</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Upmo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

'use client'

import Header from './components/Header'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/upmo11.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-blue-400 text-5xl md:text-6xl font-bold mb-2">upmo</span>
            <span className="text-white text-xl md:text-2xl font-semibold">
              AIを社内のもう1人のアシスタントに
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: 課題 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-blue-300/40 -rotate-1"></span>
                <span className="relative">こんなお悩み</span>
              </span>
              <span className="font-normal text-slate-900">ありませんか？</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* お悩み1: 情報が分散している */}
            <div className="overflow-hidden border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 flex justify-center items-center min-h-[200px]">
                <img src="/15642_color.png" alt="情報が分散している" className="h-48 w-auto object-contain" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="relative inline-block text-sm font-semibold text-slate-900 px-3 py-1">
                    <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                    <span className="relative">お悩み1</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">情報が分散している</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>顧客情報はExcel、営業案件は別システム、タスクはメール...</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>必要な情報を探すのに時間がかかる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>情報共有がうまくいかない</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* お悩み2: 業務効率が悪い */}
            <div className="overflow-hidden border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 flex justify-center items-center min-h-[200px]">
                <img src="/15666_color.png" alt="業務効率が悪い" className="h-48 w-auto object-contain" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="relative inline-block text-sm font-semibold text-slate-900 px-3 py-1">
                    <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                    <span className="relative">お悩み2</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">業務効率が悪い</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>議事録の作成に時間がかかる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>タスクの進捗管理が手作業</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>レポート作成が大変</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* お悩み3: チーム連携が難しい */}
            <div className="overflow-hidden border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 flex justify-center items-center min-h-[200px]">
                <img src="/18158_color.png" alt="チーム連携が難しい" className="h-48 w-auto object-contain" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="relative inline-block text-sm font-semibold text-slate-900 px-3 py-1">
                    <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                    <span className="relative">お悩み3</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">チーム連携が難しい</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>誰が何をしているかわからない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>情報共有がリアルタイムでできない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>プロジェクトの全体像が見えない</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* お悩み4: コストが高い */}
            <div className="overflow-hidden border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 flex justify-center items-center min-h-[200px]">
                <img src="/17029_color.png" alt="コストが高い" className="h-48 w-auto object-contain" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="relative inline-block text-sm font-semibold text-slate-900 px-3 py-1">
                    <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                    <span className="relative">お悩み4</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">コストが高い</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>複数のツールを使い分ける必要がある</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>それぞれにライセンス費用がかかる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>統合のための開発コストが発生</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* Section 2: 解決策 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">
              そのお悩み、<span className="text-blue-600 text-4xl md:text-5xl">upmo</span>が解決します
            </h2>
          </div>

          <div className="space-y-6">
            {/* 解決①: 情報が分散している → すべてを一元管理 */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    情報が分散している → <span className="text-blue-600">すべてを一元管理</span>
                  </h3>
                  <ul className="space-y-2 text-slate-600 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">顧客情報・案件・タスク・メモを1つの場所に集約</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">必要な情報は検索ですぐ見つかる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">属人化せず、誰でも同じ情報を見られる</span>
                    </li>
                  </ul>
                  <p className="text-sm text-blue-600 font-medium">「探す時間」がなくなります</p>
                </div>
              </div>
            </div>

            {/* 解決②: 業務効率が悪い → AIで"作る・まとめる"を自動化 */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    業務効率が悪い → <span className="text-blue-600">AIで"作る・まとめる"を自動化</span>
                  </h3>
                  <ul className="space-y-2 text-slate-600 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">議事録・要約・レポートをAIが自動作成</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">タスクは会話やメモから自動で整理・可視化</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">ルーティン作業を減らし、考える時間に集中</span>
                    </li>
                  </ul>
                  <p className="text-sm text-blue-600 font-medium">「作業時間」を一気に短縮</p>
                </div>
              </div>
            </div>

            {/* 解決③: チーム連携が難しい → 今、何が進んでいるか一目でわかる */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    チーム連携が難しい → <span className="text-blue-600">今、何が進んでいるか一目でわかる</span>
                  </h3>
                  <ul className="space-y-2 text-slate-600 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">誰が・何を・どこまでやっているかがリアルタイムで見える</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">情報共有は自動反映、確認のための連絡が不要</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">プロジェクト全体の流れが常に把握できる</span>
                    </li>
                  </ul>
                  <p className="text-sm text-blue-600 font-medium">「聞かなくてもわかる」状態に</p>
                </div>
              </div>
            </div>

            {/* 解決④: コストが高い → ツールをまとめてコスト削減 */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    コストが高い → <span className="text-blue-600">ツールをまとめてコスト削減</span>
                  </h3>
                  <ul className="space-y-2 text-slate-600 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">バラバラだったツールをこれ1つに集約</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">ライセンス費用・管理コストを削減</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm">追加開発なしですぐ使える</span>
                    </li>
                  </ul>
                  <p className="text-sm text-blue-600 font-medium">「管理コスト」と「ムダな出費」をカット</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 機能 */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="text-6xl md:text-7xl font-normal text-blue-600">upmo</span>の主な機能
            </h2>
          </div>

          {/* 基本機能 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">基本機能</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* TODO管理 */}
              <div className="group relative bg-gradient-to-br from-blue-50/50 to-white p-6 border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">TODO管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>タスクの作成・管理、カンバンボード形式での可視化</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>AIタスク生成: 自然言語でタスクを作成</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>タスクの共有機能、完了時のメモ機能</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* カレンダー・スケジュール管理 */}
              <div className="group relative bg-gradient-to-br from-cyan-50/50 to-white p-6 border border-cyan-100 rounded-lg hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">カレンダー・スケジュール管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>チーム全体のスケジュール共有</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>イベントの作成・管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>日付クリックでその日の全イベントを表示</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 進捗メモ */}
              <div className="group relative bg-gradient-to-br from-indigo-50/50 to-white p-6 border border-indigo-100 rounded-lg hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">進捗メモ</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>営業活動や商談の進捗を記録</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>検索機能で素早く目的のメモを発見</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>優先度管理</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AIチャットアシスタント */}
              <div className="group relative bg-gradient-to-br from-purple-50/50 to-white p-6 border border-purple-100 rounded-lg hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">AIチャットアシスタント</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>自然言語で情報を検索（「顧客一覧を見たい」「今日のタスクは？」など）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>入力補助機能</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>リアルタイムで情報を取得</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AIタスク生成 */}
              <div className="group relative bg-gradient-to-br from-pink-50/50 to-white p-6 border border-pink-100 rounded-lg hover:border-pink-300 hover:shadow-lg transition-all duration-300 md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">AIタスク生成</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>目標から作業手順を自動分解（例：「会員サイトを作る」→ 要件定義、設計、実装、テスト、デプロイなど）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>期限がある場合は自動でスケジュール調整</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* チーム機能 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">チーム機能</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* ユーザー管理 */}
              <div className="group relative bg-gradient-to-br from-blue-50/50 to-white p-6 border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">ユーザー管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>ユーザーの追加・管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>権限管理（管理者・一般ユーザー）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>会社単位での情報共有</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 情報共有 */}
              <div className="group relative bg-gradient-to-br from-cyan-50/50 to-white p-6 border border-cyan-100 rounded-lg hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">情報共有</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>チーム全体での情報共有</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>リアルタイムでの更新</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>会社単位でのデータ分離</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* カスタマイズ機能 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">カスタマイズ機能</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 顧客管理 */}
              <div className="group relative bg-gradient-to-br from-green-50/50 to-white p-6 border border-green-100 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">顧客管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>顧客情報の一元管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>顧客ごとの営業履歴・メモ管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>顧客ステータスの可視化</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 営業案件管理 */}
              <div className="group relative bg-gradient-to-br from-orange-50/50 to-white p-6 border border-orange-100 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">営業案件管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>営業案件の作成・管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>成約確率・見積金額の管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>案件ステータスの追跡、営業進捗の可視化</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 財務管理 */}
              <div className="group relative bg-gradient-to-br from-emerald-50/50 to-white p-6 border border-emerald-100 rounded-lg hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">財務管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>見積管理: 見積書の作成と管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>受注管理、請求管理、経費管理</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 在庫・発注管理 */}
              <div className="group relative bg-gradient-to-br from-teal-50/50 to-white p-6 border border-teal-100 rounded-lg hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">在庫・発注管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>在庫の管理と追跡</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>発注情報の管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>在庫状況の可視化</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 議事録管理 */}
              <div className="group relative bg-gradient-to-br from-rose-50/50 to-white p-6 border border-rose-100 rounded-lg hover:border-rose-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">議事録管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span>会議議事録の作成・管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span>AI自動要約機能: 議事録を自動で要約</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span>アクション項目の自動抽出、アクション項目から自動でTODO・カレンダーに登録</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PDCA管理 - Plan */}
              <div className="group relative bg-gradient-to-br from-blue-50/50 to-white p-6 border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">計画管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>営業計画・目標設定</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>目標の可視化</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PDCA管理 - Do */}
              <div className="group relative bg-gradient-to-br from-green-50/50 to-white p-6 border border-green-100 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">D</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">実行管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>活動記録・タスク管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>実行状況の追跡</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PDCA管理 - Check */}
              <div className="group relative bg-gradient-to-br from-yellow-50/50 to-white p-6 border border-yellow-100 rounded-lg hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">評価管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>実績分析・KPI管理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>目標達成状況の確認</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PDCA管理 - Action */}
              <div className="group relative bg-gradient-to-br from-red-50/50 to-white p-6 border border-red-100 rounded-lg hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">改善管理</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>改善アクション・次期計画</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>継続的な改善サイクル</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI要約機能 */}
              <div className="group relative bg-gradient-to-br from-violet-50/50 to-white p-6 border border-violet-100 rounded-lg hover:border-violet-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">AI要約機能</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-500 mt-1">•</span>
                        <span>議事録の内容を自動で要約</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-500 mt-1">•</span>
                        <span>重要なポイントを抽出</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-500 mt-1">•</span>
                        <span>アクション項目を自動識別</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* Section 5: 料金 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">料金プラン</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* スタンダードプラン */}
            <div className="bg-white p-10 border-2 border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">スタンダードプラン</h3>
                <div className="mb-2">
                  <span className="text-4xl font-light text-slate-900">2,500</span>
                  <span className="text-xl text-slate-600 ml-2">円</span>
                </div>
                <p className="text-sm text-slate-500 mb-1">/月</p>
                <p className="text-xs text-slate-400">最低10IDから</p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <ul className="text-left space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>基本機能が使用可能</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="/sections/contact"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                お問い合わせ
              </a>
            </div>

            {/* プロフェッショナルプラン */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">おすすめ</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">プロフェッショナルプラン</h3>
                <div className="mb-2">
                  <span className="text-4xl font-light text-slate-900">5,000</span>
                  <span className="text-xl text-slate-600 ml-2">円</span>
                </div>
                <p className="text-sm text-slate-500 mb-1">/月</p>
                <p className="text-xs text-slate-400">最低10IDから</p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <ul className="text-left space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>基本機能が使用可能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>カスタマイズ機能が使用可能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>サポートも充実</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="/sections/contact"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          
          
        </div>
      </section>

      {/* Section 6: 導入の流れ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">導入の流れ</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">シンプルな5ステップで導入完了</p>
          </div>

          <div className="relative">
            {/* 接続線（デスクトップのみ表示） */}
            <div className="hidden lg:block absolute top-32 left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
              {/* Step 1: 問い合わせ */}
              <div className="relative group">
                <div className="bg-white p-6 lg:p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">STEP 1</span>
                    </div>
                    <h3 className="text-lg lg:text-base font-semibold text-slate-900 mb-3">問い合わせ</h3>
                    <p className="text-slate-600 leading-relaxed text-xs lg:text-[11px]">
                      お問い合わせフォームまたはメールでご連絡
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: ヒアリング */}
              <div className="relative group">
                <div className="bg-white p-6 lg:p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">STEP 2</span>
                    </div>
                    <h3 className="text-lg lg:text-base font-semibold text-slate-900 mb-3">ヒアリング</h3>
                    <p className="text-slate-600 leading-relaxed text-xs lg:text-[11px]">
                      お客様の課題や要望をお聞かせください
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: 契約 */}
              <div className="relative group">
                <div className="bg-white p-6 lg:p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">STEP 3</span>
                    </div>
                    <h3 className="text-lg lg:text-base font-semibold text-slate-900 mb-3">契約</h3>
                    <p className="text-slate-600 leading-relaxed text-xs lg:text-[11px]">
                      プランを選択し、契約を締結
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: 導入開始 */}
              <div className="relative group">
                <div className="bg-white p-6 lg:p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">STEP 4</span>
                    </div>
                    <h3 className="text-lg lg:text-base font-semibold text-slate-900 mb-3">導入開始</h3>
                    <p className="text-slate-600 leading-relaxed text-xs lg:text-[11px]">
                      初期設定を実施し、システムの運用開始
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5: サポート */}
              <div className="relative group">
                <div className="bg-white p-6 lg:p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">STEP 5</span>
                    </div>
                    <h3 className="text-lg lg:text-base font-semibold text-slate-900 mb-3">サポート</h3>
                    <p className="text-slate-600 leading-relaxed text-xs lg:text-[11px]">
                      定期的なサポート・アップデート、必要に応じてカスタマイズ対応
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6">upmo</h3>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                AIを社内のもう1人のアシスタントに<br />
                探すより、見つかる環境を
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-6 text-slate-200 uppercase tracking-wider">サポート</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/sections/contact" className="text-slate-400 hover:text-white transition-colors font-light text-base">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-6 text-slate-200 uppercase tracking-wider">運営会社</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.mogcia.net/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-light text-base">
                    会社情報
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-slate-500 text-sm font-light">
                &copy; 2025 upmo. All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-sm text-slate-500">
                <a href="/sections/privacy" className="hover:text-white transition-colors font-light">プライバシーポリシー</a>
                <a href="/sections/terms" className="hover:text-white transition-colors font-light">利用規約</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

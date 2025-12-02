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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5">
                  <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                  <span className="relative">お悩み1</span>
                </span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
              <div className="mb-4 h-32 flex items-center justify-center">
                <img src="/18158_color.png" alt="どこに保存したか分からない" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-base font-medium text-slate-900">どこに保存したか分からない</h3>
            </div>
            
            <div className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5">
                  <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                  <span className="relative">お悩み2</span>
                </span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
              <div className="mb-4 h-32 flex items-center justify-center">
                <img src="/15666_color.png" alt="進捗メモの書き方がバラバラ" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-base font-medium text-slate-900">進捗メモの書き方がバラバラ</h3>
            </div>
            
            <div className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5">
                  <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                  <span className="relative">お悩み3</span>
                </span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
              <div className="mb-4 h-32 flex items-center justify-center">
                <img src="/17029_color.png" alt="引き継ぎ情報が抜けやすい" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-base font-medium text-slate-900">引き継ぎ情報が抜けやすい</h3>
            </div>
            
            <div className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5">
                  <span className="absolute inset-0 bg-blue-300/70 -rotate-1 rounded-sm"></span>
                  <span className="relative">お悩み4</span>
                </span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
              <div className="mb-4 h-32 flex items-center justify-center">
                <img src="/15642_color.png" alt="新人が立ち上がるまで時間がかかる" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-base font-medium text-slate-900">新人が立ち上がるまで時間がかかる</h3>
            </div>
          </div>

         
        </div>
      </section>

      {/* Section 2: 解決策 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight leading-relaxed">
              <span className="block mb-2 text-2xl md:text-3xl font-semibold">そのお悩み</span>
              <span className="font-normal text-blue-600">upmo</span>が解決します
            </h2>
          </div>

          <div className="space-y-8">
            {/* 解決策1 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-medium text-blue-600">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5 inline-block">
                      <span className="absolute inset-0 bg-blue-300/70 -rotate-1"></span>
                      <span className="relative">お悩み1</span>
                    </span>
                    <span className="text-slate-600 ml-3">どこに保存したか分からない</span>
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-3">AIチャットで質問するだけ</h3>
                  <p className="text-slate-600">
                    ファイル名が曖昧でも、内容を質問すればAIが社内のドキュメントを横断検索。<br />参照元も表示されるので、すぐに目的の情報にたどり着けます。
                  </p>
                </div>
              </div>
            </div>

            {/* 解決策2 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-cyan-50 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-medium text-cyan-600">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5 inline-block">
                      <span className="absolute inset-0 bg-blue-300/70 -rotate-1"></span>
                      <span className="relative">お悩み2</span>
                    </span>
                    <span className="text-slate-600 ml-3">進捗メモの書き方がバラバラ</span>
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-3">営業進捗メモを自動で統一化</h3>
                  <p className="text-slate-600">
                    案件ごとの情報をAIが自動で整理。<br />誰が書いても統一されたフォーマットで管理できます。
                  </p>
                </div>
              </div>
            </div>

            {/* 解決策3 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-medium text-indigo-600">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5 inline-block">
                      <span className="absolute inset-0 bg-blue-300/70 -rotate-1"></span>
                      <span className="relative">お悩み3</span>
                    </span>
                    <span className="text-slate-600 ml-3">引き継ぎ情報が抜けやすい</span>
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-3">ナレッジを自動で分類・構築</h3>
                  <p className="text-slate-600">
                    契約書・マニュアル・プロジェクト資料をAIが自動整理。<br />チーム全員が最新の情報にアクセスでき、引き継ぎ漏れを防止します。
                  </p>
                </div>
              </div>
            </div>

            {/* 解決策4 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-medium text-slate-600">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="relative text-sm font-semibold text-slate-900 px-2 py-0.5 inline-block">
                      <span className="absolute inset-0 bg-blue-300/70 -rotate-1"></span>
                      <span className="relative">お悩み4</span>
                    </span>
                    <span className="text-slate-600 ml-3">新人が立ち上がるまで時間がかかる</span>
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-3">AIが要約・整理して即座にアクセス可能に</h3>
                  <p className="text-slate-600">
                    長文の議事録やチャットログをAIが自動で要約。<br />ロール別（営業向け/経営向け）の要約も可能で、新人もすぐに必要な情報を把握できます。
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">upmoの主な機能</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 機能1 */}
            <div className="group relative bg-gradient-to-br from-blue-50/50 to-white p-8 border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">AIチャットで社内なんでも相談</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>ファイル名が曖昧でもOK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>「前回の商談内容は？」「契約内容のリスクまとめて」など質問するだけ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>参照元が表示されるので安心</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 機能2 */}
            <div className="group relative bg-gradient-to-br from-cyan-50/50 to-white p-8 border border-cyan-100 rounded-lg hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">契約書・議事録・チャットログを要約</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>長文の読み込みが不要</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>重要箇所だけハイライト</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>ロール別（営業向け / 経営向け）の要約も可能</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 機能3 */}
            <div className="group relative bg-gradient-to-br from-indigo-50/50 to-white p-8 border border-indigo-100 rounded-lg hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">営業進捗メモの統一化</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>案件ごとの情報を自動で整理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>過去の会話を要点化</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>次アクションもAIが提案</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 機能4 */}
            <div className="group relative bg-gradient-to-br from-slate-50/50 to-white p-8 border border-slate-100 rounded-lg hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">ナレッジを自動で分類・構築</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>契約書 / マニュアル / プロジェクト資料 をAIが自動整理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>重複ファイルや古い情報も検知</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>チーム全員が最新の情報にアクセス可能</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section X: 御社専用に最適化されたAIワークフロー */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              御社専用に最適化された<span className="font-normal text-blue-600">AIワークフロー</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              どの会社も、部署ごとに「必要な改善サイクル」が違います。<br />
              だから本ツールは、営業・CS・採用・開発・コーポレート…それぞれに最適化したAI機能を"御社専用"にカスタムできます。
            </p>
          </div>

          {/* 部署別カスタム機能 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">
                部署別にカスタムできるAI機能
              </h3>
              <p className="text-slate-500 font-light">
                必要なものを選ぶだけで導入可能。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 営業向け */}
              <div className="group relative bg-gradient-to-br from-blue-50/50 to-white p-8 border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">営業向け：PDCA自動化モデル</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>商談ログから次アクションを提案</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>振り返りを自動生成</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>案件ごとのリスク・チャンスを分析</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 会議・経営向け */}
              <div className="group relative bg-gradient-to-br from-cyan-50/50 to-white p-8 border border-cyan-100 rounded-lg hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">会議・経営向け：議事録インサイトAI</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>会議議事録を自動で要点化</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>決定事項・TODO・リスクだけを抽出</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>経営層向けのサマリーも自動生成</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 人事・採用向け */}
              <div className="group relative bg-gradient-to-br from-indigo-50/50 to-white p-8 border border-indigo-100 rounded-lg hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">人事・採用向け：応募者サマリーAI</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>面談ログを整理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>候補者ごとの強み/懸念点を抽出</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>"合否の判断材料" だけをまとめる</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CS向け */}
              <div className="group relative bg-gradient-to-br from-slate-50/50 to-white p-8 border border-slate-100 rounded-lg hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">CS向け：問い合わせ改善AI</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        <span>問い合わせログから再発ポイントを特定</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        <span>ナレッジ化も自動</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        <span>チーム全体の対応品質を統一</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* マーケ向け */}
              <div className="group relative bg-gradient-to-br from-blue-50/50 to-white p-8 border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 md:col-span-2">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">マーケ向け：施策レポート自動化</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>過去施策の反応・数字を解析</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>次の施策アイデアを提案</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 御社ごとに必要なだけ構築 */}
          <div className="bg-white p-10 border border-slate-200 rounded-lg mb-12">
            <h3 className="text-2xl font-normal text-slate-900 mb-8 text-center">
              御社ごとに"必要なだけ"構築できます
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 text-xs font-semibold">✓</span>
                  </div>
                  <span className="text-base">必要な部署だけ導入</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 text-xs font-semibold">✓</span>
                  </div>
                  <span className="text-base">不要なら非表示にできる</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 text-xs font-semibold">✓</span>
                  </div>
                  <span className="text-base">御社のルールに合わせてAIの回答方針を調整</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 text-xs font-semibold">✓</span>
                  </div>
                  <span className="text-base">社内テンプレート（報告書・議事録・営業メモなど）も学習</span>
                </li>
              </ul>
            </div>
            <p className="text-center text-lg font-normal text-blue-600">
              「AIが御社仕様の判断をしてくれる」環境がすぐ作れます。
            </p>
          </div>

        </div>
      </section>

      {/* Section 5: 料金 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">料金</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ビジネスプラン */}
            <div className="bg-white p-10 border-2 border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">ビジネスプラン</h3>
                <div className="mb-2">
                  <span className="text-5xl font-light text-slate-900">25,000</span>
                  <span className="text-2xl text-slate-600 ml-2">円</span>
                </div>
                <p className="text-sm text-slate-500">/月</p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-base text-slate-600">10ID</p>
                </div>
              </div>
              <a
                href="#contact"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                お問い合わせ
              </a>
            </div>

            {/* プロプラン */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-10 border-2 border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">プロプラン</h3>
                <div className="mb-2">
                  <span className="text-3xl font-light text-slate-600">要お問い合わせ</span>
                </div>
                <p className="text-sm text-slate-500 mt-4">カスタマイズ対応</p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-base text-slate-600">御社専用のプランをご提案</p>
                </div>
              </div>
              <a
                href="#contact"
                className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 導入の流れ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">導入の流れ</h2>
          </div>

          <div className="relative">
            {/* 接続線（デスクトップのみ表示） */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 z-0"></div>

            <div className="grid md:grid-cols-5 gap-6 relative z-10">
              {/* Step 1: お問い合わせ */}
              <div className="relative">
                <div className="bg-white p-6 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-600">STEP 1</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">お問い合わせ</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    まずはお気軽にお問い合わせください
                  </p>
                </div>
              </div>

              {/* Step 2: ヒアリング */}
              <div className="relative">
                <div className="bg-white p-6 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-600">STEP 2</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">ヒアリング</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    御社の課題や要望を詳しくお聞きします
                  </p>
                </div>
              </div>

              {/* Step 3: カスタマイズ */}
              <div className="relative">
                <div className="bg-white p-6 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-600">STEP 3</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">カスタマイズ</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    御社専用のAIワークフローを構築します
                  </p>
                </div>
              </div>

              {/* Step 4: 引き渡し */}
              <div className="relative">
                <div className="bg-white p-6 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-600">STEP 4</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">引き渡し</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    システムをお引き渡しし、使い方をご案内します
                  </p>
                </div>
              </div>

              {/* Step 5: 継続的なサポート */}
              <div className="relative">
                <div className="bg-white p-6 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-600">STEP 5</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">継続的なサポート</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    運用をサポートし、改善を続けます
                  </p>
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
                <a href="#" className="hover:text-white transition-colors font-light">プライバシーポリシー</a>
                <a href="#" className="hover:text-white transition-colors font-light">利用規約</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

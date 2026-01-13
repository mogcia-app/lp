import Header from '@/app/components/Header'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">プライバシーポリシー</h1>
              <p className="text-slate-600 leading-relaxed font-light">
                最終更新日: 2025年11月1日
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-8 text-slate-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. はじめに</h2>
                  <p className="mb-4">
                    株式会社MOGCIA（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考えております。本プライバシーポリシーは、当社が提供するサービス（以下「本サービス」といいます）において、お客様の個人情報をどのように取り扱うかについて説明するものです。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. 収集する個人情報</h2>
                  <p className="mb-4">当社は、本サービスの提供にあたり、以下の個人情報を収集する場合があります：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>氏名、会社名、部署名</li>
                    <li>メールアドレス、電話番号</li>
                    <li>お問い合わせ内容</li>
                    <li>サービス利用に関する情報（ログ情報、利用状況など）</li>
                    <li>その他、サービス提供に必要な情報</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. 個人情報の利用目的</h2>
                  <p className="mb-4">当社は、収集した個人情報を以下の目的で利用します：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>本サービスの提供、運営、改善</li>
                    <li>お客様への連絡、サポートの提供</li>
                    <li>お客様からのお問い合わせへの対応</li>
                    <li>利用規約や法令等に違反する行為への対応</li>
                    <li>その他、上記利用目的に付随する目的</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. 個人情報の管理</h2>
                  <p className="mb-4">
                    当社は、お客様の個人情報を適切に管理し、漏洩、滅失、毀損の防止その他の安全管理のため、必要かつ適切な措置を講じます。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. 個人情報の第三者提供</h2>
                  <p className="mb-4">
                    当社は、法令に基づく場合を除き、お客様の同意なく、個人情報を第三者に提供することはありません。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. 個人情報の開示・訂正・削除</h2>
                  <p className="mb-4">
                    お客様は、当社が保有する個人情報について、開示、訂正、削除を求めることができます。これらのご請求については、下記のお問い合わせ先までご連絡ください。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Cookie（クッキー）の使用</h2>
                  <p className="mb-4">
                    当社は、本サービスの提供にあたり、Cookieを使用する場合があります。Cookieは、お客様のブラウザに保存される小さなテキストファイルです。お客様は、ブラウザの設定によりCookieの使用を拒否することができますが、その場合、本サービスの一部機能が利用できなくなる可能性があります。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. プライバシーポリシーの変更</h2>
                  <p className="mb-4">
                    当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. お問い合わせ</h2>
                  <p className="mb-4">
                    個人情報の取り扱いに関するお問い合わせは、<a href="/sections/contact" className="text-blue-600 hover:text-blue-700 underline">お問い合わせフォーム</a>よりご連絡ください。
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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


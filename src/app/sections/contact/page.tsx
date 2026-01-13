'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Header from '@/app/components/Header'

export default function ContactPage() {
  useEffect(() => {
    // formrunスクリプトが読み込まれた後に初期化
    if (typeof window !== 'undefined' && (window as any).Formrun) {
      // フォームの初期化は自動で行われる
    }
  }, [])

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">お問い合わせ</h1>
            <p className="text-slate-600 leading-relaxed font-light">
              ご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

            <form className="formrun" action="https://form.run/api/v1/r/5ca009fk7ws1jw8zjazsph8v" method="post">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">会社名</label>
                  <input
                    name="会社名"
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">名前</label>
                  <input
                    name="名前"
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    メールアドレス <span className="text-red-500">[必須]</span>
                  </label>
                  <input
                    name="メールアドレス"
                    type="text"
                    data-formrun-type="email"
                    data-formrun-required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div data-formrun-show-if-error="メールアドレス" className="mt-2 text-sm text-red-600">
                    メールアドレスを正しく入力してください
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">電話番号</label>
                  <input
                    name="電話番号"
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    お問い合わせ内容 <span className="text-red-500">[必須]</span>
                  </label>
                  <textarea
                    name="お問い合わせ内容"
                    data-formrun-required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  ></textarea>
                  <div data-formrun-show-if-error="お問い合わせ内容" className="mt-2 text-sm text-red-600">
                    お問い合わせ内容を入力してください
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="個人情報利用同意"
                      data-formrun-required
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-900">
                      個人情報利用同意 <span className="text-red-500">[必須]</span>
                    </span>
                  </label>
                  <div data-formrun-show-if-error="個人情報利用同意" className="mt-2 text-sm text-red-600">
                    同意してください
                  </div>
                </div>

                {/* "ボット投稿をブロックするためのタグ" */}
                <div className="_formrun_gotcha">
                  <style jsx>{`
                    ._formrun_gotcha {
                      position: absolute !important;
                      height: 1px;
                      width: 1px;
                      overflow: hidden;
                    }
                  `}</style>
                  <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                  <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    data-formrun-error-text="未入力の項目があります"
                    data-formrun-submitting-text="送信中..."
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
                  >
                    送信
                  </button>
                </div>
              </div>
            </form>
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
      
      <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
    </>
  )
}

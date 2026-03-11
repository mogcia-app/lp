'use client'

import Script from 'next/script'

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="/" className="text-2xl font-black text-[#004aad]">
              upmo
            </a>
            <a href="/" className="text-sm font-semibold text-slate-600 hover:text-[#004aad]">
              トップへ戻る
            </a>
          </div>
        </header>

        <section className="border-b border-slate-200 bg-[#f8fbff] py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold tracking-[0.16em] text-[#004aad]">CONTACT</p>
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">お問い合わせ</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              ご質問やご相談がございましたらお気軽にお問い合わせください
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <form className="formrun" action="https://form.run/api/v1/r/5ca009fk7ws1jw8zjazsph8v" method="post">
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-900">会社名</label>
                    <input
                      name="会社名"
                      type="text"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#004aad] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-900">名前</label>
                    <input
                      name="名前"
                      type="text"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#004aad] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-900">
                      メールアドレス <span className="text-red-500">[必須]</span>
                    </label>
                    <input
                      name="メールアドレス"
                      type="text"
                      data-formrun-type="email"
                      data-formrun-required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#004aad] focus:outline-none"
                    />
                    <div data-formrun-show-if-error="メールアドレス" className="mt-2 text-sm text-red-600">
                      メールアドレスを正しく入力してください
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-900">電話番号</label>
                    <input
                      name="電話番号"
                      type="tel"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#004aad] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-900">
                      お問い合わせ内容 <span className="text-red-500">[必須]</span>
                    </label>
                    <textarea
                      name="お問い合わせ内容"
                      data-formrun-required
                      rows={6}
                      className="w-full resize-vertical rounded-lg border border-slate-300 px-4 py-3 focus:border-[#004aad] focus:outline-none"
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
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#004aad]"
                      />
                      <span className="text-sm text-slate-900">
                        個人情報利用同意 <span className="text-red-500">[必須]</span>
                      </span>
                    </label>
                    <div data-formrun-show-if-error="個人情報利用同意" className="mt-2 text-sm text-red-600">
                      同意してください
                    </div>
                  </div>

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

                  <div className="pt-2">
                    <button
                      type="submit"
                      data-formrun-error-text="未入力の項目があります"
                      data-formrun-submitting-text="送信中..."
                      className="w-full rounded-lg bg-[#004aad] px-8 py-4 text-base font-semibold text-white hover:bg-[#003b8a]"
                    >
                      送信
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
    </>
  )
}

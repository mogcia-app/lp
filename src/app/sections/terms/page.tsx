export default function TermsPage() {
  return (
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
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#004aad]">TERMS</p>
          <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">利用規約</h1>
          <p className="mt-3 text-sm text-slate-600">最終更新日: 2025年11月1日</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第1条（適用）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                本規約は、株式会社MOGCIA（以下「当社」）が提供するupmo（以下「本サービス」）の利用条件を定めるものです。
                本サービスを利用する法人・個人（以下「ユーザー」）は、本規約に同意のうえ利用するものとします。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第2条（利用登録）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                ユーザーは当社所定の方法で申込みを行い、当社が承認した時点で利用契約が成立します。
                当社は申込み内容に虚偽がある場合など、合理的理由があるときは承認しないことがあります。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第3条（アカウント管理）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                ユーザーはアカウント情報を自己の責任で管理し、第三者に利用させないものとします。
                不正利用が判明した場合、速やかに当社へ通知してください。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第4条（利用料金）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                利用料金、支払方法、支払期日は、当社が別途提示する申込書または契約条件に従うものとします。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第5条（禁止事項）</h2>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li>・法令または公序良俗に反する行為</li>
                <li>・当社または第三者の権利を侵害する行為</li>
                <li>・本サービスの運営を妨害する行為</li>
                <li>・不正アクセスまたはその試行</li>
                <li>・虚偽情報の登録その他当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第6条（サービス変更・停止）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                当社は、保守、障害対応、法令対応その他必要がある場合、事前通知のうえまたは緊急時には通知なく
                本サービスの全部または一部を変更、停止、中断することがあります。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第7条（知的財産権）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                本サービスに関する知的財産権は当社または正当な権利者に帰属します。
                本規約に基づく利用許諾は、これらの権利移転を意味しません。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第8条（免責）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                当社は、本サービスの利用により生じた損害について、当社に故意または重過失がある場合を除き、
                一切の責任を負いません。なお、当社の責任が認められる場合でも、当社の賠償範囲は、
                直接かつ通常の損害に限られます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第9条（規約変更）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                当社は、必要に応じて本規約を変更することがあります。変更後の規約は本ページに掲載した時点で効力を生じます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">第10条（準拠法・合意管轄）</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                本規約は日本法に準拠し、本サービスに関して紛争が生じた場合は、当社本店所在地を管轄する裁判所を
                第一審の専属的合意管轄裁判所とします。
              </p>
            </section>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="/sections/privacy" className="text-[#004aad] underline underline-offset-2">
              プライバシーポリシーを見る
            </a>
            <a href="/sections/contact" className="text-[#004aad] underline underline-offset-2">
              お問い合わせ
            </a>
            <a href="https://www.mogcia.net/" target="_blank" rel="noopener noreferrer" className="text-[#004aad] underline underline-offset-2">
              運営会社
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

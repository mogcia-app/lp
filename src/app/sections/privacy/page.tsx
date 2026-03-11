export default function PrivacyPage() {
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
          <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#004aad]">PRIVACY POLICY</p>
          <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">プライバシーポリシー</h1>
          <p className="mt-3 text-sm text-slate-600">最終更新日: 2025年11月1日</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">1. 基本方針</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                株式会社MOGCIA（以下「当社」）は、upmoの提供にあたり、個人情報の保護を重要な責務と考え、
                個人情報保護法その他の関連法令を遵守し、適切に取り扱います。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">2. 取得する情報</h2>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li>・会社名、氏名、メールアドレス、電話番号などのお問い合わせ情報</li>
                <li>・お問い合わせ内容、資料請求内容、商談時に提供いただく情報</li>
                <li>・サービス利用状況、ログ情報、アクセス情報（Cookie等を含む）</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">3. 利用目的</h2>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li>・サービス提供、本人確認、運用サポート</li>
                <li>・お問い合わせ対応、資料送付、連絡</li>
                <li>・サービス改善、品質向上、障害対応</li>
                <li>・不正利用防止およびセキュリティ確保</li>
                <li>・法令に基づく対応</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">4. 第三者提供</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">5. 委託先管理</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                業務遂行に必要な範囲で外部事業者に委託する場合、当社は委託先を適切に選定し、必要な監督を行います。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">6. 安全管理措置</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                当社は、個人情報への不正アクセス、漏えい、滅失、毀損を防止するため、アクセス制御、権限管理、
                技術的・組織的安全管理措置を講じます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">7. 開示・訂正・削除等の請求</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                ご本人からの開示・訂正・利用停止・削除等のご請求は、合理的な範囲で速やかに対応します。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">8. 改定</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                本ポリシーは必要に応じて改定することがあります。改定後は本ページに掲載した時点で効力を生じます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">9. お問い合わせ窓口</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                個人情報の取り扱いに関するお問い合わせは
                <a href="/sections/contact" className="ml-1 font-semibold text-[#004aad] underline underline-offset-2">
                  お問い合わせページ
                </a>
                よりご連絡ください。
              </p>
            </section>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="/sections/terms" className="text-[#004aad] underline underline-offset-2">
              利用規約を見る
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

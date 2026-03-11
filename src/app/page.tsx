const challenges = [
  {
    title: '社内資料がバラバラに保存されている',
    scene: '必要な資料の場所が部門や担当者ごとに違う',
    image: '/problem-01.png',
    alt: '社内資料がバラバラに保存されている課題イメージ',
  },
  {
    title: '必要な情報を探すのに時間がかかる',
    scene: '同じ確認がチャットやメールで何度も発生する',
    image: '/problem-02.png',
    alt: '必要な情報を探すのに時間がかかる課題イメージ',
  },
  {
    title: '担当者しか分からない業務がある',
    scene: '不在時に業務が止まり引き継ぎが進まない',
    image: '/problem-03.png',
    alt: '担当者しか分からない業務がある課題イメージ',
  },
  {
    title: '新人教育に時間がかかる',
    scene: '質問対応が特定メンバーに集中しやすい',
    image: '/problem-04.png',
    alt: '新人教育に時間がかかる課題イメージ',
  },
  {
    title: '過去の資料が活用できていない',
    scene: '前例が見つからず毎回ゼロから作業してしまう',
    image: '/problem-05.png',
    alt: '過去の資料が活用できていない課題イメージ',
  },
  {
    title: '情報はあるのに、使える形になっていない',
    scene: '資料を読まないと要点が分からず、実務で使いにくい',
    image: '/problem-06.png',
    alt: '情報はあるのに使える形になっていない課題イメージ',
  },
]

const reasons = [
  {
    title: '社内ナレッジを一元管理',
    text: '部門ごとに分散した情報をupmoに統合',
    image: '/reason-01.png',
    alt: '社内ナレッジを一元管理のイメージ',
  },
  {
    title: 'チャットで横断検索',
    text: '複数資料を横断して必要情報を短時間で取得',
    image: '/reason-02.png',
    alt: 'チャットで横断検索のイメージ',
  },
  {
    title: '導入がシンプル',
    text: 'アップロード中心で運用開始までが速い',
    image: '/reason-03.png',
    alt: '導入がシンプルのイメージ',
  },
]

const pricingPlans = [
  {
    name: '5ID',
    price: '3,000円 / 1ID',
    desc: '少人数チーム向けの基本プラン',
    items: ['最小5IDから利用可能', '社内資料の検索・活用', '標準サポート'],
  },
  {
    name: '10ID',
    price: '2,700円 / 1ID',
    desc: 'チーム運用に適したプラン',
    items: ['10IDでの導入', '部署内ナレッジ共有', '標準サポート'],
  },
  {
    name: '11ID〜',
    price: 'お問い合わせください',
    desc: 'ID数が多い企業向けの個別見積もり',
    items: ['利用規模に応じて最適化', '個別見積もり対応', '導入支援サポート'],
  },
]

const uploadSources = ['PDF', 'マニュアル', '議事録', '社内資料']

const steps = [
  { title: 'お問い合わせ', text: 'まずは気になることをご相談ください' },
  { title: 'ヒアリング', text: '業務内容やお悩みを一緒に整理します' },
  { title: '導入', text: '準備ができたらスムーズに利用開始できます' },
  { title: 'サポート', text: '導入後も活用できるまでしっかり支援します' },
]

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8 text-center">
      <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#004aad]">{label}</p>
      <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{title}</h2>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-2xl font-black text-[#004aad]">
            upmo
          </a>
          <div className="ml-auto">
            <a href="/sections/contact" className="rounded-md bg-[#004aad] px-4 py-2 text-sm font-bold text-white hover:bg-[#003b8a]">
              お問い合わせ
            </a>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-16">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-[#eff5ff] px-3 py-1 text-xs font-bold text-[#004aad]">
              企業向け社内AIナレッジプラットフォーム
            </p>
            <h1 className="leading-[1.15] text-slate-900">
              <span className="text-5xl font-black tracking-tight text-[#004aad] sm:text-6xl lg:text-7xl">upmo</span>
              <br />
              <span className="mt-2 block text-2xl font-bold sm:text-3xl lg:text-4xl">社内の情報をAIで一元化</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              PDFやマニュアルなど社内情報をAIが理解し
              <br />
              チャットで必要な答えをすぐ引き出せる企業向けAIです
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/sections/contact" className="inline-flex h-11 items-center rounded-md bg-[#004aad] px-6 text-sm font-bold text-white hover:bg-[#003b8a]">
                無料で相談する
              </a>
              <a
                href="#pricing"
                className="inline-flex h-11 items-center rounded-md border border-slate-300 bg-white px-6 text-sm font-bold text-slate-700 hover:border-[#004aad] hover:text-[#004aad]"
              >
                料金を見る
              </a>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-none border border-slate-200 bg-black">
            <video className="h-full w-full object-cover" src="/upmoo1.mp4" poster="/upmoo1-thumb.jpg" muted loop playsInline controls />
          </div>
        </div>
      </section>

      <section id="problem" className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="PROBLEM" title="社内にこんな課題はありませんか？" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="mb-3 inline-flex rounded-full bg-[#eff5ff] px-2.5 py-1 text-xs font-black text-[#004aad]">
                  CHECK {String(index + 1).padStart(2, '0')}
                </p>
                <div className="mb-3">
                  <div className="mx-auto aspect-square w-full max-w-[170px] overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full object-cover ${item.image === '/problem-02.png' || item.image === '/problem-03.png' ? 'scale-125' : ''}`}
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.scene}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8fbff] py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#004aad]">SOLUTION</p>
            <h2 className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">upmoが解決します</h2>
            <p className="leading-relaxed text-slate-700">
              PDFやマニュアルや議事録や社内資料をアップロードするだけでAIが内容を理解し
              <br />
              必要な情報をチャットで引き出せる状態を作ります
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="OVERVIEW" title="アップロードするだけで、社内AIが使える状態に" />
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-700 sm:text-lg">
            PDFやマニュアル、議事録、社内資料などをアップロードするだけ
            <br />
            AIが内容を理解し、社内の情報を検索できるようになります
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {uploadSources.map((source, index) => (
              <article key={source} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mx-auto aspect-square w-full max-w-[170px] overflow-hidden rounded-xl">
                  <img src={`/upload-${index + 1}.png`} alt={`${source}のイメージ`} className="h-full w-full object-cover" />
                </div>
                <p className="mt-3 text-center text-sm font-bold text-slate-900">{source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reason" className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="REASON" title="upmoが選ばれる3つの理由" />
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <div className="mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-xl">
                    <img src={reason.image} alt={reason.alt} className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{reason.title}</h3>
                <p className="text-sm text-slate-700">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-slate-200 bg-[#f8fbff] py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="PRICE" title="料金プラン" />
          <div className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-bold text-[#004aad]">{plan.name}</p>
                <p className="mt-2 text-2xl font-black text-slate-900">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  {plan.items.map((item) => (
                    <li key={item}>・{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="step" className="border-y border-slate-200 bg-[#f8fbff] py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="STEP" title="導入ステップ" />
          <div className="space-y-4">
            {steps.map((step, index) => (
              <article key={step.title} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[120px_1fr] md:items-center">
                <p className="text-sm font-black text-[#004aad]">STEP {index + 1}</p>
                <div>
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-700">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#004aad] px-6 py-12 text-center text-white sm:px-10">
            <p className="mb-2 text-xs font-bold tracking-[0.16em] text-blue-100">CONTACT</p>
            <h2 className="mb-4 text-3xl font-black sm:text-4xl">あなたの会社専用AIを作りませんか</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">upmoの導入についてお気軽にご相談ください</p>
            <a href="/sections/contact" className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#004aad] hover:bg-blue-50">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xl font-black text-[#004aad]">upmo</p>
              <p className="mt-2 text-sm text-slate-700">社内の情報をAIで一元化</p>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-[#004aad]">CONTACT</p>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p className="font-semibold">お問い合わせ</p>
                <p>平日 10:00〜17:00</p>
                <p>翌営業日にご連絡いたします。</p>
                <p>TEL: 092-517-9804</p>
                <p>
                  <a href="mailto:info@mogcia.jp" className="hover:text-[#004aad]">
                    info@mogcia.jp
                  </a>
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <a href="https://www.mogcia.net/" target="_blank" rel="noopener noreferrer" className="hover:text-[#004aad]">
                    運営会社
                  </a>
                </p>
                <p>
                  <a href="/sections/privacy" className="hover:text-[#004aad]">
                    プライバシーポリシー
                  </a>
                </p>
                <p>
                  <a href="/sections/terms" className="hover:text-[#004aad]">
                    利用規約
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-xs text-slate-500">© 2025 upmo All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

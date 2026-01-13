import Header from '@/app/components/Header'

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">利用規約</h1>
              <p className="text-slate-600 leading-relaxed font-light">
                最終更新日: 2025年11月1日
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-8 text-slate-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第1条（適用）</h2>
                  <p className="mb-4">
                    本利用規約（以下「本規約」といいます）は、株式会社MOGCIA（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って、本サービスをご利用いただきます。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第2条（利用登録）</h2>
                  <p className="mb-4">本サービスの利用を希望する者（以下「登録希望者」といいます）は、本規約に同意の上、当社の定める方法によって利用登録を申請するものとします。</p>
                  <p className="mb-4">当社は、登録希望者が以下のいずれかの事由に該当する場合、利用登録を承認しないことがあります：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>その他、当社が利用登録を相当でないと判断した場合</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第3条（ユーザーIDおよびパスワードの管理）</h2>
                  <p className="mb-4">ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</p>
                  <p className="mb-4">ユーザーIDまたはパスワードが第三者に使用されたことによって生じた損害は、当社に故意または重大な過失がある場合を除き、当社は一切の責任を負わないものとします。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第4条（利用料金および支払方法）</h2>
                  <p className="mb-4">本サービスの利用料金は、別途当社が定め、本ウェブサイトに表示するとおりとします。</p>
                  <p className="mb-4">ユーザーは、当社が指定する方法により、利用料金を支払うものとします。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第5条（禁止事項）</h2>
                  <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                    <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                    <li>本サービスによって得られた情報を商業的に利用する行為</li>
                    <li>当社のサービスの運営を妨害するおそれのある行為</li>
                    <li>不正アクセスをし、またはこれを試みる行為</li>
                    <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                    <li>不正な目的を持って本サービスを利用する行為</li>
                    <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
                    <li>その他、当社が不適切と判断する行為</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第6条（本サービスの提供の停止等）</h2>
                  <p className="mb-4">当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                  <p className="mb-4">当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第7条（保証の否認および免責）</h2>
                  <p className="mb-4">当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</p>
                  <p className="mb-4">当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第8条（サービス内容の変更等）</h2>
                  <p className="mb-4">当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第9条（利用規約の変更）</h2>
                  <p className="mb-4">当社は以下の場合には、ユーザーの個別の同意を待たず、本規約を変更することができるものとします：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>本規約の変更がユーザーの一般の利益に適合するとき</li>
                    <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第10条（個人情報の取扱い）</h2>
                  <p className="mb-4">当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第11条（通知または連絡）</h2>
                  <p className="mb-4">ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第12条（権利義務の譲渡の禁止）</h2>
                  <p className="mb-4">ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">第13条（準拠法・裁判管轄）</h2>
                  <p className="mb-4">本規約の解釈にあたっては、日本法を準拠法とします。</p>
                  <p className="mb-4">本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
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


'use client'

import { useRouter } from 'next/navigation'

interface SectionsLayoutProps {
  children: React.ReactNode
}

export default function SectionsLayout({ children }: SectionsLayoutProps) {
  const router = useRouter()

  return (
    <>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-navy-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group cursor-pointer" onClick={() => router.push('/')}>
              <div className="w-8 h-8 bg-gradient-to-r from-navy-600 to-navy-800 rounded-lg mr-3 flex items-center justify-center group-hover:from-navy-700 group-hover:to-navy-900 transition-all duration-300 shadow-md group-hover:shadow-lg">
                <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-navy-900 group-hover:text-navy-700 transition-colors duration-300">AI Business Solutions</h1>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { href: '/sections/vision', label: 'ビジョン' },
                { href: '/sections/solutions', label: 'ソリューション' },
                { href: '/sections/pricing', label: '料金' },
                { href: '/', label: 'デモ' },
                { href: '/', label: '事例' },
                { href: '/', label: '技術' },
                { href: '/', label: '比較' },
                { href: '/', label: '導入' },
                { href: '/', label: 'ESG' },
                { href: '/', label: 'OEM' }
              ].map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="px-3 py-2 text-sm text-navy-600 hover:text-navy-900 transition-all duration-200 font-medium rounded-md hover:bg-navy-50 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-navy-600 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 rounded-full"></span>
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push('/tool/home')}
                className="group bg-gradient-to-r from-navy-600 to-navy-800 text-white px-4 py-2 rounded-lg hover:from-navy-700 hover:to-navy-900 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm transform hover:-translate-y-0.5 hover:scale-105"
              >
                <span className="flex items-center">
                  体験してみる
                  <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => router.push('/sections/contact')}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm transform hover:-translate-y-0.5 hover:scale-105"
              >
                <span className="flex items-center">
                  お問い合わせ
                  <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8l-5.5 5.5-1.96-1.96a3 3 0 00-4.24 0L4 16.59V20h3.41l5.5-5.5 1.96 1.96a3 3 0 004.24 0L20 16.59V20h3.41l-5.5-5.5 1.96-1.96a3 3 0 000-4.24L20 8z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-navy-600 to-navy-800 rounded-lg mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Business Solutions</h3>
              </div>
              <p className="text-gray-400">企業のAI活用を加速させ、業務効率の向上を実現します。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ソリューション</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/sections/solutions" className="hover:text-white transition-colors">文書作成・編集</a></li>
                <li><a href="/sections/solutions" className="hover:text-white transition-colors">営業・マーケティング</a></li>
                <li><a href="/sections/solutions" className="hover:text-white transition-colors">人材・教育</a></li>
                <li><a href="/sections/solutions" className="hover:text-white transition-colors">データ分析</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">導入事例</a></li>
                <li><a href="/sections/vision" className="hover:text-white transition-colors">未来ビジョン</a></li>
                <li><a href="/" className="hover:text-white transition-colors">ESG対応</a></li>
                <li><a href="/" className="hover:text-white transition-colors">OEM事業</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">導入サポート</a></li>
                <li><a href="/" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="/sections/pricing" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="/tool/home" className="hover:text-white transition-colors">デモ体験</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Business Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

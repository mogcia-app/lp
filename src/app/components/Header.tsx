'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/sections/pricing', label: '料金' },
    { href: '#cases', label: '事例' },
    { href: '#implementation', label: '導入' },
    { href: '#oem', label: 'OEM' }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-navy-100 sticky top-0 z-50">
      <div className="w-full px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center group cursor-pointer">
            <h1 className="text-2xl font-semibold text-[#005eb2] group-hover:text-[#004a8f] transition-colors duration-300">Upmo</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
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
                onClick={() => window.location.href = 'https://upmo-demo.vercel.app/'}
                className="group bg-gradient-to-r from-navy-600 to-navy-800 text-white px-4 py-2 rounded hover:from-navy-700 hover:to-navy-900 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm transform hover:-translate-y-0.5 hover:scale-105"
              >
                <span className="flex items-center">
                  体験してみる
                  <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => window.location.href = '/sections/contact'}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm transform hover:-translate-y-0.5 hover:scale-105"
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 ml-auto">
            <button
              onClick={() => window.location.href = 'https://upmo-demo.vercel.app/'}
              className="bg-gradient-to-r from-navy-600 to-navy-800 text-white px-3 py-2 rounded text-sm font-medium"
            >
              体験
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-navy-600 hover:bg-navy-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-navy-100 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-md transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  window.location.href = '/sections/contact'
                }}
                className="mx-4 mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded font-medium text-sm"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}


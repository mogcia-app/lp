'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="w-full px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center group cursor-pointer">
            <h1 className="text-2xl font-semibold text-[#005eb2] group-hover:text-[#004a8f] transition-colors duration-300">upmo</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-3">
             
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-50 transition-colors"
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
          <div className="lg:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-2">
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


'use client'

import { useState } from 'react'

interface HoverCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  effect: string
  color: string
  children?: React.ReactNode
}

export default function HoverCard({ 
  icon, 
  title, 
  description, 
  features, 
  effect, 
  color, 
  children 
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative bg-white p-8 rounded-2xl transition-all duration-500 border border-gray-100 group overflow-hidden ${
        isHovered ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 背景グラデーション */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${color}`}
      />
      
      {/* アイコン */}
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>

      {/* タイトル */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

      {/* 説明 */}
      <p className="text-gray-600 mb-6">{description}</p>

      {/* 機能リスト */}
      <ul className="space-y-3 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* 効果表示 */}
      <div className={`text-sm font-medium ${color.replace('bg-', 'text-')}`}>
        {effect}
      </div>

      {/* ホバー時の詳細情報 */}
      {isHovered && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center transition-all duration-300">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">詳細情報</h4>
            <p className="text-gray-600 mb-4">
              {children || `${title}の詳細な機能と導入メリットについて詳しく説明します。`}
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              詳しく見る
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

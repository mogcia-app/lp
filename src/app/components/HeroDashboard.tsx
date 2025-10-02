'use client'

import { useState, useEffect } from 'react'

export default function HeroDashboard() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const chatMessages = [
    { 
      type: 'user', 
      text: '来月の営業戦略を考えたいのですが、どのようなアプローチが効果的でしょうか？',
      time: '14:32'
    },
    { 
      type: 'ai', 
      text: '営業戦略の立案についてお手伝いします。まず、過去3ヶ月の売上データと顧客の行動パターンを分析して、最適なアプローチを提案させていただきます。',
      time: '14:32'
    },
    { 
      type: 'user', 
      text: '特に新規開拓に力を入れたいです',
      time: '14:33'
    },
    { 
      type: 'ai', 
      text: '承知いたしました。新規開拓のための戦略を以下のように提案します：\n\n1. ターゲット企業の選定\n2. パーソナライズされたアプローチ\n3. 効果的なフォローアップ戦略\n\n詳細な分析レポートを作成いたします。',
      time: '14:33'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % chatMessages.length)
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 1500)
    }, 4000)

    return () => clearInterval(interval)
  }, [chatMessages.length])

  return (
    <div className="relative">
      {/* チャットアプリ風のフレーム */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* チャットヘッダー */}
        <div className="bg-gradient-to-r from-navy-600 to-navy-800 px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">AI Business Assistant</h3>
              <p className="text-white/80 text-sm">オンライン</p>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm">応答中</span>
            </div>
          </div>
        </div>

        {/* チャットメッセージエリア */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {chatMessages.slice(0, currentMessage + 1).map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-sm ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                {message.type === 'ai' && (
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-navy-600 to-navy-800 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500">AI Assistant</span>
                  </div>
                )}
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-navy-600 to-navy-800 text-white' 
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-white/70' : 'text-gray-400'
                  }`}>
                    {message.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* タイピングインジケーター */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 入力エリア */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="メッセージを入力..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm"
                disabled
              />
            </div>
            <button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white p-2 rounded-full hover:from-navy-700 hover:to-navy-900 transition-all duration-300 disabled:opacity-50" disabled>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-navy-400 to-navy-600 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-navy-300 to-navy-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  )
}

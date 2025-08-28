'use client'

import { useState, useEffect } from 'react'

export default function HeroDashboard() {
  const [currentTask, setCurrentTask] = useState(0)
  const [isProcessing, setIsProcessing] = useState(true)

  const tasks = [
    { name: '営業提案書作成', status: '完了', color: 'green', time: '2分前' },
    { name: '顧客データ分析', status: '処理中', color: 'blue', time: '現在' },
    { name: '月次レポート生成', status: '待機中', color: 'yellow', time: '次の予定' },
    { name: '社内ナレッジ検索', status: '完了', color: 'green', time: '5分前' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTask((prev) => (prev + 1) % tasks.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [tasks.length])

  useEffect(() => {
    const processingInterval = setInterval(() => {
      setIsProcessing(prev => !prev)
    }, 2000)

    return () => clearInterval(processingInterval)
  }, [])

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-500'
      case 'blue': return 'bg-blue-500'
      case 'yellow': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="relative">
      {/* ブラウザウィンドウ風のフレーム */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* ブラウザヘッダー */}
        <div className="bg-navy-100 px-4 py-3 border-b border-navy-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="ml-4 text-sm text-navy-700 font-medium">AI Business Dashboard</div>
          </div>
        </div>

        {/* ダッシュボードコンテンツ */}
        <div className="p-6">
          {/* ヘッダー部分 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-navy-600 to-navy-800 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">AIアシスタント</h3>
                <p className="text-sm text-navy-600">業務効率化中...</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-navy-600">85%</div>
              <div className="text-xs text-navy-500">効率向上</div>
            </div>
          </div>

          {/* 主要指標 */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-600">2.5h</div>
              <div className="text-xs text-blue-600">時間短縮</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-600">12</div>
              <div className="text-xs text-green-600">自動化タスク</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-purple-600">98.5%</div>
              <div className="text-xs text-purple-600">精度</div>
            </div>
          </div>

          {/* タスク状況 */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 mb-3">現在のタスク状況</h4>
            {tasks.map((task, index) => (
              <div 
                key={index}
                className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                  index === currentTask ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                }`}
              >
                <div className={`w-2 h-2 ${getStatusColor(task.color)} rounded-full mr-3`}></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700">{task.name}</div>
                  <div className="text-xs text-gray-500">{task.time}</div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {task.status}
                </div>
              </div>
            ))}
          </div>

          {/* リアルタイム処理インジケーター */}
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-700">AI処理中</span>
              <div className="flex space-x-1">
                <div className={`w-2 h-2 bg-blue-500 rounded-full animate-bounce ${isProcessing ? 'opacity-100' : 'opacity-30'}`}></div>
                <div className={`w-2 h-2 bg-blue-500 rounded-full animate-bounce ${!isProcessing ? 'opacity-100' : 'opacity-30'}`} style={{ animationDelay: '0.1s' }}></div>
                <div className={`w-2 h-2 bg-blue-500 rounded-full animate-bounce ${isProcessing ? 'opacity-100' : 'opacity-30'}`} style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-navy-400 to-navy-600 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-navy-300 to-navy-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  )
}

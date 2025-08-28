'use client'

import { useState } from 'react'

interface ROICalculation {
  companySize: string
  employeeCount: number
  monthlyCost: number
  timeSavings: number
  costSavings: number
  productivityGain: number
  totalAnnualSavings: number
  paybackPeriod: number
  annualROI: number
}

export default function ROICalculator() {
  const [companySize, setCompanySize] = useState('medium')
  const [employeeCount, setEmployeeCount] = useState(100)
  const [isCalculated, setIsCalculated] = useState(false)
  const [calculation, setCalculation] = useState<ROICalculation | null>(null)

  const calculateROI = () => {
    // 企業規模に応じた基本設定
    const sizeConfig = {
      small: { baseCost: 100000, timeSavings: 0.3, costSavings: 0.25, productivityGain: 0.2 },
      medium: { baseCost: 300000, timeSavings: 0.4, costSavings: 0.3, productivityGain: 0.25 },
      large: { baseCost: 800000, timeSavings: 0.5, costSavings: 0.35, productivityGain: 0.3 }
    }

    const config = sizeConfig[companySize as keyof typeof sizeConfig]
    
    // 月額コスト計算
    const monthlyCost = config.baseCost + (employeeCount * 5000)
    
    // 時間短縮による節約（従業員1人あたり月額30万円と仮定）
    const timeSavings = employeeCount * 300000 * config.timeSavings * 0.4
    
    // コスト削減
    const costSavings = employeeCount * 50000 * config.costSavings
    
    // 生産性向上による収益増加
    const productivityGain = employeeCount * 100000 * config.productivityGain
    
    // 年間総節約額
    const totalAnnualSavings = (timeSavings + costSavings + productivityGain) * 12
    
    // 投資回収期間（月）
    const paybackPeriod = (monthlyCost * 12) / totalAnnualSavings * 12
    
    // 年間ROI
    const annualROI = (totalAnnualSavings - (monthlyCost * 12)) / (monthlyCost * 12) * 100

    setCalculation({
      companySize,
      employeeCount,
      monthlyCost,
      timeSavings,
      costSavings,
      productivityGain,
      totalAnnualSavings,
      paybackPeriod,
      annualROI
    })
    
    setIsCalculated(true)
  }

  const resetCalculation = () => {
    setIsCalculated(false)
    setCalculation(null)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ROI計算ツール</h3>
      
      {!isCalculated ? (
        <div className="space-y-6">
          {/* 企業規模選択 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">企業規模</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'small', label: '小企業', desc: '10-50名' },
                { value: 'medium', label: '中企業', desc: '51-200名' },
                { value: 'large', label: '大企業', desc: '201名以上' }
              ].map((size) => (
                <button
                  key={size.value}
                  onClick={() => setCompanySize(size.value)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    companySize === size.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{size.label}</div>
                  <div className="text-sm text-gray-500">{size.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 従業員数入力 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              従業員数: {employeeCount}名
            </label>
            <input
              type="range"
              min="10"
              max="1000"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10名</span>
              <span>1000名</span>
            </div>
          </div>

          {/* 計算ボタン */}
          <button
            onClick={calculateROI}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ROIを計算する
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 結果表示 */}
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {calculation?.annualROI.toFixed(1)}%
            </div>
            <div className="text-gray-600">年間ROI</div>
          </div>

          {/* 詳細結果 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                ¥{Math.round(calculation?.monthlyCost || 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">月額コスト</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                ¥{Math.round(calculation?.totalAnnualSavings || 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">年間節約額</div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {calculation?.paybackPeriod.toFixed(1)}ヶ月
              </div>
              <div className="text-sm text-gray-600">投資回収期間</div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {calculation?.employeeCount}名
              </div>
              <div className="text-sm text-gray-600">対象従業員数</div>
            </div>
          </div>

          {/* 内訳 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">節約内訳</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>時間短縮による節約:</span>
                <span className="font-medium">¥{Math.round(calculation?.timeSavings || 0).toLocaleString()}/月</span>
              </div>
              <div className="flex justify-between">
                <span>コスト削減:</span>
                <span className="font-medium">¥{Math.round(calculation?.costSavings || 0).toLocaleString()}/月</span>
              </div>
              <div className="flex justify-between">
                <span>生産性向上による収益増加:</span>
                <span className="font-medium">¥{Math.round(calculation?.productivityGain || 0).toLocaleString()}/月</span>
              </div>
            </div>
          </div>

          {/* リセットボタン */}
          <button
            onClick={resetCalculation}
            className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            再計算する
          </button>
        </div>
      )}
    </div>
  )
}

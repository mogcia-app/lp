import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '株式会社MOGCIA - 革新的なAIビジネスソリューション',
  description: '最先端のテクノロジーを活用して、お客様のビジネスを次のレベルへと導きます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

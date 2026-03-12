import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'upmo',
  description: 'AIを社内のもう1人のアシスタントに',
  icons: {
    icon: '/upmologo.png',
    apple: '/upmologo.png',
  },
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

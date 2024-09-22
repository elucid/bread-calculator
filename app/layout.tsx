import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bread Math',
  description: 'Calculate ingredients for bread making',
  icons: {
    icon: [
      { url: '/icon/favicon.ico' },
      { url: '/icon/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Antdle - Learn Bitcoin DeFi the Easy Way",
  description:
    "Learn Bitcoin DeFi through simple lessons and fun challenges. No confusing tech speak - just clear explanations anyone can understand.",
  generator: 'BTCFi Station',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/antdle_btc.png', sizes: '512x512', type: 'image/png' },
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
      <body>{children}</body>
    </html>
  )
}

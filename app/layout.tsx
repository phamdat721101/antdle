import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Antdle - Learn Bitcoin DeFi the Easy Way",
  description:
    "Learn Bitcoin DeFi through simple lessons and fun challenges. No confusing tech speak - just clear explanations anyone can understand.",
    generator: 'v0.app'
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

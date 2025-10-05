import type React from "react"
import type { Metadata, Viewport } from "next"
import { BaseProviders } from "@/providers/base-providers"
import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  return{
    title: "ANTDLE - Learn Bitcoin DeFi on Base",
    description:
      "Learn Bitcoin DeFi through simple lessons and fun challenges. Built as a Base Mini-App for seamless onchain experiences.",
    generator: 'Base Mini-App',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        { url: '/antdle_btc.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    // Base Mini-App specific metadata
    other: {
      'fc:frame': 'vNext',
      'fc:frame:image': 'https://antdle.xyz/antdle_btc.png',
      'fc:frame:button:1': 'Learn Bitcoin DeFi',
      'fc:frame:button:1:action': 'link',
      'fc:frame:button:1:target': 'https://antdle.xyz',
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BaseProviders>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </BaseProviders>
      </body>
    </html>
  )
}

// Simple error boundary for SDK errors
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

'use client'

import { OnchainKitProvider } from '@coinbase/onchainkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { base } from 'viem/chains'
import { WagmiProvider } from 'wagmi'
import { createConfig, http } from 'wagmi'
import { coinbaseWallet } from 'wagmi/connectors'
import { sdk } from "@farcaster/miniapp-sdk";
import { useState, useEffect } from "react"

const config = createConfig({
  chains: [base],
  connectors: [
    coinbaseWallet({
      appName: 'ANTDLE - Bitcoin DeFi Learning',
      preference: 'smartWalletOnly',
    }),
  ],
  transports: {
    [base.id]: http(),
  },
})

const queryClient = new QueryClient()

export function BaseProviders({ children }: { children: React.ReactNode }) {
  return (    
    <QueryClientProvider client={queryClient}>
      <OnchainKitProvider
        apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
        chain={base}
        config={{
          appearance: {
            mode: 'auto',
            theme: 'base',
          },
        }}
          miniKit={{
              enabled: true,
              autoConnect: true,
              notificationProxyUrl: undefined,
          }}
      >
        {children}
      </OnchainKitProvider>
    </QueryClientProvider>
  )
}
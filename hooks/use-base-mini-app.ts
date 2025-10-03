'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useCallback, useEffect, useState } from 'react'

export function useBaseMiniApp() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [isInMiniApp, setIsInMiniApp] = useState(false)

  useEffect(() => {
    // Check if running inside Base Mini-App iframe
    const checkMiniAppEnvironment = () => {
      try {
        return window.self !== window.top
      } catch {
        return true
      }
    }
    
    setIsInMiniApp(checkMiniAppEnvironment())
  }, [])

  const connectWallet = useCallback(() => {
    const coinbaseWalletConnector = connectors.find(
      connector => connector.id === 'coinbaseWallet'
    )
    if (coinbaseWalletConnector) {
      connect({ connector: coinbaseWalletConnector })
    }
  }, [connect, connectors])

  return {
    address,
    isConnected,
    isInMiniApp,
    connectWallet,
    disconnect,
  }
}
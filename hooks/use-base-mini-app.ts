'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useCallback, useEffect, useState } from 'react'
import { sdk } from "@farcaster/miniapp-sdk"

export function useBaseMiniApp() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [isInMiniApp, setIsInMiniApp] = useState(false)
  const [context, setContext] = useState<any>(null)

  useEffect(() => {
    // Check if running inside Base Mini-App iframe
    const checkMiniAppEnvironment = () => {
      try {
        return window.self !== window.top
      } catch {
        return true
      }
    }
    
    const isInMiniAppEnv = checkMiniAppEnvironment()
    setIsInMiniApp(isInMiniAppEnv)

    // Get frame context if available
    if (isInMiniAppEnv) {
      try {
        const frameContext = sdk.context
        setContext(frameContext)
      } catch (error) {
        console.log('No frame context available:', error)
      }
    }
  }, [])

  const connectWallet = useCallback(() => {
    const coinbaseWalletConnector = connectors.find(
      connector => connector.id === 'coinbaseWallet'
    )
    if (coinbaseWalletConnector) {
      connect({ connector: coinbaseWalletConnector })
    }
  }, [connect, connectors])

  const openUrl = useCallback((url: string) => {
    if (isInMiniApp) {
      try {
        sdk.actions.openUrl(url)
      } catch (error) {
        console.error('Failed to open URL via SDK:', error)
        window.open(url, '_blank')
      }
    } else {
      window.open(url, '_blank')
    }
  }, [isInMiniApp])

  return {
    address,
    isConnected,
    isInMiniApp,
    context,
    connectWallet,
    disconnect,
    openUrl,
  }
}
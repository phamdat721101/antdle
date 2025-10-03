'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useCallback, useEffect, useState } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'

export function useBaseMiniApp() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [isInMiniApp, setIsInMiniApp] = useState(false)
  const [isSdkReady, setIsSdkReady] = useState(false)

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

    // Initialize SDK and signal ready state
    const initializeSdk = async () => {
      if (isInMiniAppEnv) {
        try {
          // Wait for SDK to be ready
          await sdk.init()
          
          // Signal that the app is ready
          await sdk.actions.ready()
          
          setIsSdkReady(true)
          console.log('Base Mini-App SDK initialized and ready signal sent')
        } catch (error) {
          console.error('Failed to initialize Base Mini-App SDK:', error)
          // Still set ready to true to prevent blocking the app
          setIsSdkReady(true)
        }
      } else {
        setIsSdkReady(true)
      }
    }

    initializeSdk()
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
    isSdkReady,
    connectWallet,
    disconnect,
    sdk: isInMiniApp ? sdk : null,
  }
}
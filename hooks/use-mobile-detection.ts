'use client'

import { useState, useEffect } from 'react'

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setScreenSize({ width, height })
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    // Initial check
    checkDevice()

    // Listen for resize events
    window.addEventListener('resize', checkDevice)
    window.addEventListener('orientationchange', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('orientationchange', checkDevice)
    }
  }, [])

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    screenSize,
    isPortrait: screenSize.height > screenSize.width,
    isLandscape: screenSize.width > screenSize.height,
  }
}
"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Dashboard from "@/components/dashboard"
import Learn from "@/components/learn"
import Events from "@/components/events"
import Premium from "@/components/premium"
import Portfolio from "@/components/portfolio"
import ProtocolModal from "@/components/protocol-modal"
import { useBaseMiniApp } from "@/hooks/use-base-mini-app"
import type { Protocol } from "@/lib/data"
import { sdk } from "@farcaster/miniapp-sdk"

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null)
  const [isSDKReady, setIsSDKReady] = useState(false)
  const [showHeaderFab, setShowHeaderFab] = useState(false)

  // Initialize the Farcaster SDK and call ready
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        // Check if we're in a frame environment
        if (typeof window !== 'undefined' && window.parent !== window) {
          // We're in an iframe, likely a frame
          await sdk.actions.ready()
          console.log('Frame SDK ready signal sent')
        }
        setIsSDKReady(true)
      } catch (error) {
        console.error('Failed to initialize Frame SDK:', error)
        // Still set ready to true to prevent blocking the app
        setIsSDKReady(true)
      }
    }

    initializeSDK()
  }, [])

  // Monitor scroll to show/hide FAB
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768
      const scrolled = window.scrollY > 200
      setShowHeaderFab(isMobile && scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleProtocolClick = (protocol: Protocol) => {
    setSelectedProtocol(protocol)
  }

  const handleCloseModal = () => {
    setSelectedProtocol(null)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show loading screen while SDK initializes
  if (!isSDKReady) {
    return (
      <div className="loading-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--pixel-bg-dark)',
        color: 'var(--pixel-text-white)',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div className="pixel-logo" style={{ fontSize: '48px' }}>🎮</div>
        <h2>Loading ANTDLE...</h2>
        <div className="loading-spinner">⚡</div>
      </div>
    )
  }

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="main">
        <section className={`section container ${activeSection === "dashboard" ? "active" : ""}`}>
          <Dashboard onProtocolClick={handleProtocolClick} onNavigate={setActiveSection} />
        </section>

        <section className={`section container ${activeSection === "learn" ? "active" : ""}`}>
          <Learn onProtocolClick={handleProtocolClick} />
        </section>

        <section className={`section container ${activeSection === "events" ? "active" : ""}`}>
          <Events />
        </section>

        <section className={`section container ${activeSection === "premium" ? "active" : ""}`}>
          <Premium />
        </section>

        <section className={`section container ${activeSection === "portfolio" ? "active" : ""}`}>
          <Portfolio />
        </section>
      </main>

      {selectedProtocol && <ProtocolModal protocol={selectedProtocol} onClose={handleCloseModal} />}

      {/* Optional: Floating Action Button to show header */}
      {showHeaderFab && (
        <button 
          className="header-toggle-fab"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  )
}

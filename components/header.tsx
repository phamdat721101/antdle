"use client"

import { useBaseMiniApp } from "@/hooks/use-base-mini-app"
import { useState, useEffect } from "react"

interface HeaderProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const { address, isConnected, connectWallet, disconnect, isInMiniApp } = useBaseMiniApp()
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const handleSectionChange = (section: string) => {
    onSectionChange(section)
    setIsMobileMenuOpen(false) // Close mobile menu after selection
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Hide/show header on scroll for mobile
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.innerWidth < 768
      
      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold - hide header
          setIsHeaderVisible(false)
          setIsMobileMenuOpen(false) // Close menu when hiding
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setIsHeaderVisible(true)
        }
      } else {
        // Always show on desktop
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)
    window.addEventListener('resize', controlHeader)

    return () => {
      window.removeEventListener('scroll', controlHeader)
      window.removeEventListener('resize', controlHeader)
    }
  }, [lastScrollY])

  return (
    <>
      <header className={`header ${isHeaderVisible ? 'header--visible' : 'header--hidden'} ${isMobileMenuOpen ? 'header--menu-open' : ''}`}>
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <div className="pixel-logo">
                <div className="logo-pixels">🎮</div>
              </div>
              <h1>
                ANTDLE 
                {isInMiniApp && <span className="text-blue-500">⚡</span>}
              </h1>
            </div>

            {/* Mobile menu toggle button */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            
            <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
              <button
                className={`nav-btn ${activeSection === "dashboard" ? "active" : ""}`}
                onClick={() => handleSectionChange("dashboard")}
              >
                <span className="nav-icon">🏠</span> HOME
              </button>
              <button
                className={`nav-btn ${activeSection === "learn" ? "active" : ""}`}
                onClick={() => handleSectionChange("learn")}
              >
                <span className="nav-icon">🎯</span> LEARN
              </button>
              <button
                className={`nav-btn ${activeSection === "events" ? "active" : ""}`}
                onClick={() => handleSectionChange("events")}
              >
                <span className="nav-icon">⚡</span> EVENTS
              </button>
            </nav>

            <div className={`header__wallet ${isMobileMenuOpen ? 'header__wallet--open' : ''}`}>
              {isConnected ? (
                <button 
                  className="btn-pixel btn-secondary"
                  onClick={() => disconnect()}
                >
                  <span className="wallet-address">{formatAddress(address!)}</span>
                </button>
              ) : (
                <button 
                  className="btn-pixel btn-primary"
                  onClick={connectWallet}
                >
                  <span className="connect-text">Connect Wallet</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

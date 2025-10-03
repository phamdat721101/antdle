"use client"

import { useBaseMiniApp } from "@/hooks/use-base-mini-app"

interface HeaderProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const { address, isConnected, connectWallet, disconnect, isInMiniApp } = useBaseMiniApp()

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <div className="pixel-logo">
              <div className="logo-pixels">🎮</div>
            </div>
            <h1>ANTDLE {isInMiniApp && <span className="text-blue-500">⚡</span>}</h1>
          </div>
          <nav className="header__nav">
            <button
              className={`nav-btn ${activeSection === "dashboard" ? "active" : ""}`}
              onClick={() => onSectionChange("dashboard")}
            >
              <span className="nav-icon">🏠</span> HOME
            </button>
            <button
              className={`nav-btn ${activeSection === "learn" ? "active" : ""}`}
              onClick={() => onSectionChange("learn")}
            >
              <span className="nav-icon">🎯</span> LEARN
            </button>
            <button
              className={`nav-btn ${activeSection === "events" ? "active" : ""}`}
              onClick={() => onSectionChange("events")}
            >
              <span className="nav-icon">⚡</span> EVENTS
            </button>
            <button
              className={`nav-btn ${activeSection === "premium" ? "active" : ""}`}
              onClick={() => onSectionChange("premium")}
            >
              <span className="nav-icon">💎</span> PREMIUM
            </button>
            <button
              className={`nav-btn ${activeSection === "portfolio" ? "active" : ""}`}
              onClick={() => onSectionChange("portfolio")}
            >
              <span className="nav-icon">👤</span> PROFILE
            </button>
          </nav>
          <div className="header__wallet">
            {isConnected ? (
              <button 
                className="btn-pixel btn-secondary"
                onClick={() => disconnect()}
              >
                {formatAddress(address!)}
              </button>
            ) : (
              <button 
                className="btn-pixel btn-primary"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

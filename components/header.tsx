"use client"

interface HeaderProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <div className="pixel-logo">
              <div className="logo-pixels">🎮</div>
            </div>
            <h1>ANTDLE</h1>
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
              <span className="nav-icon">👑</span> UPGRADE
            </button>
            <button
              className={`nav-btn ${activeSection === "portfolio" ? "active" : ""}`}
              onClick={() => onSectionChange("portfolio")}
            >
              <span className="nav-icon">👤</span> MY PROGRESS
            </button>
          </nav>
          <div className="header__actions">
            <a href="https://t.me/Coredevworkshop" target="_blank" rel="noopener noreferrer" className="btn-telegram">
              <span className="telegram-icon">💬</span>
              JOIN OUR COMMUNITY
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

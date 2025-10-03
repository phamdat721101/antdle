"use client"

import { protocols, liveUpdates, playerStats } from "@/lib/data"
import type { Protocol } from "@/lib/data"

interface DashboardProps {
  onProtocolClick: (protocol: Protocol) => void
  onNavigate: (section: string) => void
}

export default function Dashboard({ onProtocolClick, onNavigate }: DashboardProps) {
  const featuredProtocols = protocols.slice(0, 3)
  const recentUpdates = liveUpdates.slice(0, 4)

  return (
    <div className="dashboard">
      <div className="dashboard__hero">
        <div className="hero-content">
          <div className="hero-logo">
            <div className="pixel-hero-logo">🎮</div>
          </div>
          <h2>WELCOME TO ANTDLE</h2>
          <p>
            Learn Bitcoin DeFi through simple lessons and fun challenges. No confusing tech speak - just clear
            explanations anyone can understand.
          </p>
        </div>
        <div className="player-stats">
          <div className="stat-block">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <div className="stat-value">Level {playerStats.level}</div>
              <div className="stat-label">Your Level</div>
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <div className="stat-value">{playerStats.xp}</div>
              <div className="stat-label">Experience Points</div>
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <div className="stat-value">{playerStats.completedLessons}</div>
              <div className="stat-label">Completed Lessons</div>
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-icon">💎</div>
            <div className="stat-info">
              <div className="stat-value">{playerStats.achievements}</div>
              <div className="stat-label">Achievements</div>
            </div>
          </div>
        </div>
        <div className="xp-bar">
          <div className="xp-bar-label">Progress to Next Level</div>
          <div className="xp-bar-container">
            <div className="xp-bar-fill" style={{ width: "60%" }}></div>
            <div className="xp-bar-text">
              {playerStats.xp} / {playerStats.xp + playerStats.xpToNext} XP
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard__content">
        <div className="content-grid">
          <div className="content-panel">
            <div className="panel-header">
              <span className="panel-icon">🔥</span>
              <h3>POPULAR BITCOIN APPS</h3>
            </div>
            <div className="protocol-preview">
              {featuredProtocols.map((protocol) => (
                <div
                  key={protocol.name}
                  className="protocol-card"
                  onClick={() => onProtocolClick(protocol)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      onProtocolClick(protocol)
                    }
                  }}
                >
                  <div className="protocol-info">
                    <h4>
                      {protocol.pixelIcon} {protocol.name}
                    </h4>
                    <p>{protocol.type}</p>
                  </div>
                  <div className="protocol-stats">
                    <div className="protocol-apy">{protocol.apy}</div>
                    <div className="protocol-difficulty">{protocol.difficulty}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-pixel btn-primary" onClick={() => onNavigate("learn")}>
              SEE ALL LESSONS
            </button>
          </div>

          <div className="content-panel">
            <div className="panel-header">
              <span className="panel-icon">⚡</span>
              <h3>LATEST NEWS</h3>
            </div>
            <div className="updates-feed">
              {recentUpdates.map((update, index) => {
                const dateText = update.deadline || update.date || "Ongoing"
                const reward = update.prize || update.reward || ""

                return (
                  <div key={index} className="update-item">
                    <div className="update-header">
                      <span className="update-type">{update.type}</span>
                      {reward && <span className="update-reward">{reward}</span>}
                    </div>
                    <div className="update-title">
                      {update.pixelIcon} {update.title}
                    </div>
                    <p className="update-description">{update.description}</p>
                    <div className="update-meta">
                      <span>{dateText}</span>
                      {update.status && <span className="status">{update.status}</span>}
                    </div>
                  </div>
                )
              })}
            </div>
            <button className="btn-pixel btn-secondary" onClick={() => onNavigate("events")}>
              VIEW ALL NEWS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

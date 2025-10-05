"use client"

import { protocols, liveUpdates, playerStats } from "@/lib/data"
import { useBaseMiniApp } from "@/hooks/use-base-mini-app"
import { useMobileDetection } from "@/hooks/use-mobile-detection"
import type { Protocol } from "@/lib/data"

interface DashboardProps {
  onProtocolClick: (protocol: Protocol) => void
  onNavigate: (section: string) => void
}

export default function Dashboard({ onProtocolClick, onNavigate }: DashboardProps) {
  const { isConnected, isInMiniApp } = useBaseMiniApp()
  const { isMobile } = useMobileDetection()
  
  // Show fewer items on mobile
  const featuredProtocols = protocols.slice(0, isMobile ? 2 : 3)
  const recentUpdates = liveUpdates.slice(0, isMobile ? 3 : 4)

  return (
    <div className="dashboard">
      <div className="content-grid">
        <div className="content-panel">
          <div className="panel-header">
            <span className="panel-icon">🔥</span>
            <h3>POPULAR BITCOIN APPS</h3>
          </div>
          <div className="protocols-grid">
            {featuredProtocols.map((protocol, index) => (
              <div
                key={index}
                className="protocol-card"
                onClick={() => onProtocolClick(protocol)}
              >
                <div className="protocol-icon">{protocol.pixelIcon}</div>
                <div className="protocol-info">
                  <h4>{protocol.name}</h4>
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
            {isMobile ? "SEE MORE" : "SEE ALL LESSONS"}
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
            {isMobile ? "VIEW MORE" : "VIEW ALL NEWS"}
          </button>
        </div>
      </div>
    </div>
  )
}

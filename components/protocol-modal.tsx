"use client"

import type { Protocol } from "@/lib/data"
import { useBaseMiniApp } from "@/hooks/use-base-mini-app"

interface ProtocolModalProps {
  protocol: Protocol
  onClose: () => void
}

export default function ProtocolModal({ protocol, onClose }: ProtocolModalProps) {
  const { openUrl } = useBaseMiniApp()

  const handleLearnMore = () => {
    openUrl(protocol.learnMoreUrl)
  }

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <div className="modal__header">
          <h3>
            {protocol.pixelIcon} {protocol.name}
          </h3>
          <button className="btn-pixel btn-secondary" onClick={onClose}>
            ✕
          </button>
        </div>

        <div style={{ padding: "32px" }}>
          <div className="protocol-details">
            <div className="detail-section">
              <h4>What is {protocol.name}?</h4>
              <p>{protocol.simpleDescription}</p>
            </div>

            <div className="detail-section">
              <h4>Key Benefits</h4>
              <ul>
                {protocol.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-label">Returns</div>
                <div className="stat-value">{protocol.apy}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Difficulty</div>
                <div className="stat-value">{protocol.difficulty}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Status</div>
                <div className="stat-value">{protocol.status}</div>
              </div>
            </div>

            <div className="learning-modules">
              <h4>Learning Path</h4>
              <div className="modules-list">
                <div
                  className="module-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px",
                    background: "var(--pixel-bg-darker)",
                    border: "3px solid var(--pixel-orange-primary)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "var(--pixel-text-white)", fontSize: "14px" }}>📖 Basic Concepts</span>
                  <span style={{ color: "var(--pixel-text-gray)", fontSize: "12px" }}>+50 XP</span>
                </div>
                <div
                  className="module-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px",
                    background: "var(--pixel-bg-darker)",
                    border: "3px solid var(--pixel-orange-primary)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "var(--pixel-text-white)", fontSize: "14px" }}>⚙️ How It Works</span>
                  <span style={{ color: "var(--pixel-text-gray)", fontSize: "12px" }}>+75 XP</span>
                </div>
                <div
                  className="module-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px",
                    background: "var(--pixel-bg-darker)",
                    border: "3px solid var(--pixel-orange-primary)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  }}
                >
                  <span style={{ color: "var(--pixel-text-white)", fontSize: "14px" }}>🏆 Hands-On Practice</span>
                  <span style={{ color: "var(--pixel-text-gray)", fontSize: "12px" }}>+100 XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <button className="btn-pixel btn-secondary" onClick={onClose}>
            CLOSE
          </button>
          <button className="btn-pixel btn-primary" onClick={handleLearnMore}>
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  )
}

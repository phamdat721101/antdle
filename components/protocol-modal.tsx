"use client"

import type { Protocol } from "@/lib/data"

interface ProtocolModalProps {
  protocol: Protocol | null
  onClose: () => void
}

export default function ProtocolModal({ protocol, onClose }: ProtocolModalProps) {
  if (!protocol) return null

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <div className="modal__header">
          <h3>
            {protocol.pixelIcon} {protocol.name}
          </h3>
          <button className="modal__close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal__body">
          <div className="protocol-modal-content">
            <div className="protocol-modal-header" style={{ marginBottom: "24px" }}>
              <span
                className="status"
                style={{ background: "var(--pixel-orange-primary)", color: "var(--pixel-bg-dark)" }}
              >
                {protocol.type}
              </span>
              <span className="status" style={{ marginLeft: "12px" }}>
                {protocol.status}
              </span>
            </div>

            <p style={{ margin: "24px 0", color: "var(--pixel-text-gray)", lineHeight: "1.8", fontSize: "16px" }}>
              {protocol.simpleDescription}
            </p>

            <div className="protocol-modal-metrics" style={{ margin: "32px 0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: "2px solid var(--pixel-orange-primary)",
                }}
              >
                <span style={{ color: "var(--pixel-text-gray)", fontSize: "14px" }}>Potential Returns:</span>
                <span
                  style={{
                    color: "var(--pixel-orange-secondary)",
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: "14px",
                  }}
                >
                  {protocol.apy}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
                <span style={{ color: "var(--pixel-text-gray)", fontSize: "14px" }}>Difficulty Level:</span>
                <span
                  style={{
                    color: "var(--pixel-orange-secondary)",
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: "14px",
                  }}
                >
                  {protocol.difficulty}
                </span>
              </div>
            </div>

            <div className="protocol-modal-features" style={{ margin: "32px 0" }}>
              <h4
                style={{
                  color: "var(--pixel-orange-primary)",
                  marginBottom: "16px",
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "16px",
                }}
              >
                What You'll Learn:
              </h4>
              <ul style={{ color: "var(--pixel-text-gray)", lineHeight: "1.8", listStyle: "none", padding: 0 }}>
                {protocol.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: "12px", position: "relative", paddingLeft: "24px", fontSize: "14px" }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--pixel-orange-secondary)",
                        fontSize: "16px",
                      }}
                    >
                      ▶
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lesson-modules" style={{ margin: "32px 0" }}>
              <h4
                style={{
                  color: "var(--pixel-orange-primary)",
                  marginBottom: "20px",
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "16px",
                }}
              >
                Available Lessons:
              </h4>
              <div className="modules-list" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                  <span style={{ color: "var(--pixel-text-white)", fontSize: "14px" }}>
                    🎯 Getting Started with {protocol.name}
                  </span>
                  <span style={{ color: "var(--pixel-text-gray)", fontSize: "12px" }}>+25 XP</span>
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
                  <span style={{ color: "var(--pixel-text-white)", fontSize: "14px" }}>
                    ⚔️ Advanced Features & Benefits
                  </span>
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
          <button className="btn-pixel btn-primary" onClick={() => window.open(protocol.learnMoreUrl, "_blank")}>
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  )
}

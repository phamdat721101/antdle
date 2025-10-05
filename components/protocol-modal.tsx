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
    if (protocol.learnMoreUrl) {
      openUrl(protocol.learnMoreUrl)
    }
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

        <div className="modal__body">
          <div className="protocol-details">
            <div className="protocol-modal-header">
              <span className="status">{protocol.type}</span>
              <span className="status" style={{ marginLeft: '12px' }}>{protocol.status}</span>
            </div>

            <div className="detail-section">
              <h4>What is {protocol.name}?</h4>
              <p>{protocol.simpleDescription}</p>
            </div>

            <div className="protocol-modal-metrics">
              <div className="metric-row">
                <span>Potential Returns:</span>
                <span className="metric-value">{protocol.apy}</span>
              </div>
              <div className="metric-row">
                <span>Current Status:</span>
                <span className="metric-value">{protocol.status}</span>
              </div>
              {protocol.tvl && (
                <div className="metric-row">
                  <span>TVL/Funding:</span>
                  <span className="metric-value">{protocol.tvl}</span>
                </div>
              )}
              {protocol.funding && (
                <div className="metric-row">
                  <span>Recent Funding:</span>
                  <span className="metric-value">{protocol.funding}</span>
                </div>
              )}
            </div>

            <div className="detail-section">
              <h4>Key Benefits</h4>
              <ul>
                {protocol.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Latest News Section */}
            <div className="latest-news-section">
              <h4>🚨 Latest News</h4>
              <div className="latest-news-item">
                <p>{protocol.latestNews}</p>
              </div>
            </div>

            <div className="learning-modules">
              <h4>Ready to Start</h4>
              <div className="modules-list">
                <div className="module-item">
                  <span>📚 Read Official Documentation</span>
                  <span>Start Here</span>
                </div>
                <div className="module-item">
                  <span>🛠️ Join Developer Community</span>
                  <span>Builders</span>
                </div>
                <div className="module-item">
                  <span>💰 Explore Funding Opportunities</span>
                  <span>Earn</span>
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
            VISIT PROTOCOL
          </button>
        </div>
      </div>
    </div>
  )
}

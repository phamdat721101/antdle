"use client"

import { useState } from "react"
import { protocols } from "@/lib/data"
import type { Protocol } from "@/lib/data"

interface LearnProps {
  onProtocolClick: (protocol: Protocol) => void
}

export default function Learn({ onProtocolClick }: LearnProps) {
  const [filter, setFilter] = useState<string>("all")

  const filteredProtocols = filter === "all" ? protocols : protocols.filter((p) => p.difficulty === filter)

  return (
    <>
      <div className="section-header">
        <h2>
          <span className="section-icon">🎯</span>LEARN BITCOIN DEFI
        </h2>
        <p>
          Simple lessons about different Bitcoin apps and services. Each lesson teaches you something new in plain
          English.
        </p>
      </div>

      <div className="filter-bar">
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          ALL LEVELS
        </button>
        <button className={`filter-btn ${filter === "Beginner" ? "active" : ""}`} onClick={() => setFilter("Beginner")}>
          BEGINNER FRIENDLY
        </button>
        <button
          className={`filter-btn ${filter === "Intermediate" ? "active" : ""}`}
          onClick={() => setFilter("Intermediate")}
        >
          MEDIUM LEVEL
        </button>
        <button className={`filter-btn ${filter === "Advanced" ? "active" : ""}`} onClick={() => setFilter("Advanced")}>
          ADVANCED
        </button>
      </div>

      <div className="protocols-grid">
        {filteredProtocols.map((protocol) => (
          <div
            key={protocol.name}
            className="protocol-card-full"
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
            <div className="protocol-header">
              <div className="protocol-title">
                <h4>
                  {protocol.pixelIcon} {protocol.name}
                </h4>
                <p className="protocol-type">{protocol.type}</p>
              </div>
              <div className="protocol-difficulty">{protocol.difficulty}</div>
            </div>

            <div className="protocol-metrics">
              <div className="metric">
                <div className="metric-value">{protocol.apy}</div>
                <div className="metric-label">Potential Returns</div>
              </div>
              <div className="metric">
                <div className="metric-value">{protocol.status}</div>
                <div className="metric-label">Status</div>
              </div>
            </div>

            <div className="protocol-features">
              <p>
                <strong>What You Get:</strong>
              </p>
              <div className="features-list">
                {protocol.benefits.map((benefit, index) => (
                  <span key={index} className="feature-tag">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <p className="protocol-description">{protocol.simpleDescription}</p>

            <button
              className="btn-pixel btn-primary"
              style={{ width: "100%" }}
              onClick={(e) => {
                e.stopPropagation()
                onProtocolClick(protocol)
              }}
            >
              START LEARNING
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

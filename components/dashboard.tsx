"use client"

import { useState } from "react"
import { protocols, liveUpdates, playerStats, marketData } from "@/lib/data"
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
  const [activeTab, setActiveTab] = useState<'news' | 'protocols'>('news')
  
  // Show fewer items on mobile
  const featuredProtocols = [
    protocols.find(p => p.name === 'Babylon Labs'),
    protocols.find(p => p.name === 'GOAT Network'),
    protocols.find(p => p.name === 'Arch Network')
  ].filter(Boolean) as Protocol[]
  
  const breakingNews = liveUpdates.filter(update => 
    update.type === 'major_news' || update.type === 'token_launch' || update.type === 'protocol_update'
  ).slice(0, isMobile ? 3 : 4)

  return (
    <div className="dashboard">    
      <div className="content-grid">
        {/* News/Protocols Tabbed Panel */}
        <div className="content-panel">
          <div className="panel-header">
            <div className="panel-tabs">
              <button
                className={`panel-tab ${activeTab === 'news' ? 'active' : ''}`}
                onClick={() => setActiveTab('news')}
              >
                <span className="panel-icon">🚨</span>
                <span>BREAKING NEWS</span>
              </button>
              <button
                className={`panel-tab ${activeTab === 'protocols' ? 'active' : ''}`}
                onClick={() => setActiveTab('protocols')}
              >
                <span className="panel-icon">🔥</span>
                <span>TRENDING PROTOCOLS</span>
              </button>
            </div>
          </div>

          {/* Breaking News Tab */}
          {activeTab === 'news' && (
            <div className="tab-content">
              <div className="breaking-news">
                {breakingNews.map((news, index) => (
                  <div key={index} className="breaking-news-item">
                    <div className="breaking-news-header">
                      <span className="update-type">{news.type.replace('_', ' ')}</span>
                      {news.impact && <span className="news-impact">{news.impact}</span>}
                    </div>
                    <div className="breaking-news-title">
                      {news.pixelIcon} {news.title}
                    </div>
                    <p className="breaking-news-desc">{news.description}</p>
                    <div className="news-meta">
                      <span>{news.date}</span>
                      {news.link && (
                        <button 
                          className="btn-pixel btn-mini"
                          onClick={() => window.open(news.link, '_blank')}
                        >
                          READ MORE
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-pixel btn-primary" onClick={() => onNavigate("events")}>
                {isMobile ? "VIEW MORE" : "VIEW ALL NEWS"}
              </button>
            </div>
          )}

          {/* Trending Protocols Tab */}
          {activeTab === 'protocols' && (
            <div className="tab-content">
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
                      <div className="protocol-apy">{protocol.tvl || protocol.funding}</div>
                      <div className="protocol-difficulty">{protocol.status}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-pixel btn-secondary" onClick={() => onNavigate("learn")}>
                {isMobile ? "SEE MORE" : "EXPLORE ALL PROTOCOLS"}
              </button>
            </div>
          )}
        </div>

        {/* Market Overview Panel */}
        <div className="content-panel">
          <div className="panel-header">
            <span className="panel-icon">📊</span>
            <h3>MARKET SNAPSHOT</h3>
          </div>
          <div className="market-stats">
            <div className="market-stat-card">
              <div className="market-stat-value">{marketData.totalTVL}</div>
              <div className="market-stat-label">Total Value Locked</div>
            </div>
            <div className="market-stat-card">
              <div className="market-stat-value">{marketData.activeFunding}</div>
              <div className="market-stat-label">Active Funding Rounds</div>
            </div>
            <div className="market-stat-card">
              <div className="market-stat-value">{marketData.liveHackathons}</div>
              <div className="market-stat-label">Live Hackathons</div>
            </div>
            <div className="market-stat-card">
              <div className="market-stat-value">{marketData.newProtocols}</div>
              <div className="market-stat-label">New Protocols</div>
            </div>
          </div>
          
          {/* Latest News Section */}
          <div className="latest-updates">
            <h4>Latest Updates</h4>
            <div className="updates-feed">
              {liveUpdates.slice(0, 3).map((update, index) => {
                const dateText = update.deadline || update.date || "Ongoing"
                const reward = update.prize || update.reward || ""

                return (
                  <div key={index} className="update-item">
                    <div className="update-header">
                      <span className="update-type">{update.type.replace('_', ' ')}</span>
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
          </div>
        </div>
      </div>
    </div>
  )
}

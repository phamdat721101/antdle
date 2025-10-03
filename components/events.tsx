"use client"

import { useState } from "react"
import { liveUpdates } from "@/lib/data"

export default function Events() {
  const [filter, setFilter] = useState<string>("all")

  const filteredEvents = filter === "all" ? liveUpdates : liveUpdates.filter((e) => e.type === filter)

  return (
    <>
      <div className="section-header">
        <h2>
          <span className="section-icon">⚡</span>CONTESTS & NEWS
        </h2>
        <p>Join competitions, find opportunities to earn money, and stay updated with the latest Bitcoin news.</p>
      </div>

      <div className="filter-bar">
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          ALL UPDATES
        </button>
        <button className={`filter-btn ${filter === "contest" ? "active" : ""}`} onClick={() => setFilter("contest")}>
          CONTESTS
        </button>
        <button className={`filter-btn ${filter === "reward" ? "active" : ""}`} onClick={() => setFilter("reward")}>
          EARN MONEY
        </button>
        <button className={`filter-btn ${filter === "news" ? "active" : ""}`} onClick={() => setFilter("news")}>
          NEWS
        </button>
        <button className={`filter-btn ${filter === "event" ? "active" : ""}`} onClick={() => setFilter("event")}>
          EVENTS
        </button>
      </div>

      <div className="events-grid">
        {filteredEvents.map((event, index) => {
          const dateText = event.deadline || event.date || "Ongoing"
          const reward = event.prize || event.reward || ""

          return (
            <div key={index} className="event-card">
              <div className="event-card-header">
                <span className="update-type">{event.type}</span>
                {reward && <span className="event-reward">{reward}</span>}
              </div>

              <h4 className="event-title">
                {event.pixelIcon} {event.title}
              </h4>
              <p className="event-description">{event.description}</p>

              <div className="event-meta">
                <span>{dateText}</span>
                {event.status && <span className="status">{event.status}</span>}
              </div>

              {event.link ? (
                <button
                  className="btn-pixel btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => window.open(event.link, "_blank")}
                >
                  {event.type === "contest"
                    ? "JOIN CONTEST"
                    : event.type === "reward"
                      ? "VIEW OPPORTUNITY"
                      : "LEARN MORE"}
                </button>
              ) : (
                <button className="btn-pixel btn-secondary" style={{ width: "100%" }}>
                  LEARN MORE
                </button>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

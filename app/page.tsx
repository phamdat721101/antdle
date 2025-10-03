"use client"

import { useState } from "react"
import Header from "@/components/header"
import Dashboard from "@/components/dashboard"
import Learn from "@/components/learn"
import Events from "@/components/events"
import Premium from "@/components/premium"
import Portfolio from "@/components/portfolio"
import ProtocolModal from "@/components/protocol-modal"
import type { Protocol } from "@/lib/data"

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null)

  const handleProtocolClick = (protocol: Protocol) => {
    setSelectedProtocol(protocol)
  }

  const handleCloseModal = () => {
    setSelectedProtocol(null)
  }

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="main">
        <section className={`section container ${activeSection === "dashboard" ? "active" : ""}`}>
          <Dashboard onProtocolClick={handleProtocolClick} onNavigate={setActiveSection} />
        </section>

        <section className={`section container ${activeSection === "learn" ? "active" : ""}`}>
          <Learn onProtocolClick={handleProtocolClick} />
        </section>

        <section className={`section container ${activeSection === "events" ? "active" : ""}`}>
          <Events />
        </section>

        <section className={`section container ${activeSection === "premium" ? "active" : ""}`}>
          <Premium />
        </section>

        <section className={`section container ${activeSection === "portfolio" ? "active" : ""}`}>
          <Portfolio />
        </section>
      </main>

      {selectedProtocol && <ProtocolModal protocol={selectedProtocol} onClose={handleCloseModal} />}
    </>
  )
}

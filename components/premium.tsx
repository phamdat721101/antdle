import { premiumPackages } from "@/lib/data"

export default function Premium() {
  return (
    <>
      <div className="section-header">
        <h2>
          <span className="section-icon">👑</span>PREMIUM PLANS
        </h2>
        <p>Get extra help, advanced tools, and personal support to learn faster and earn more with Bitcoin.</p>
      </div>

      <div className="upgrade-grid">
        {premiumPackages.map((pkg) => (
          <div key={pkg.name} className={`upgrade-card ${pkg.popular ? "popular" : ""}`}>
            {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}

            <div className="upgrade-title">
              {pkg.pixelIcon} {pkg.name}
            </div>
            <div className="upgrade-level">{pkg.level}</div>
            <div className="upgrade-price">{pkg.price}</div>
            <p style={{ color: "var(--pixel-text-gray)", fontSize: "14px", marginBottom: "24px" }}>
              {pkg.simpleDescription}
            </p>

            <ul className="upgrade-features">
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <button className={`btn-pixel ${pkg.popular ? "btn-primary" : "btn-secondary"}`} style={{ width: "100%" }}>
              CHOOSE PLAN
            </button>
          </div>
        ))}
      </div>

      <div className="premium-features">
        <h3>What You Get With Premium</h3>
        <div className="features-grid">
          <div className="feature-block">
            <div className="feature-icon">🤖</div>
            <h4>AI Helper</h4>
            <p>
              Get instant answers to your Bitcoin questions from our smart AI assistant that explains things in simple
              terms.
            </p>
          </div>
          <div className="feature-block">
            <div className="feature-icon">🎓</div>
            <h4>Expert Help</h4>
            <p>
              Talk one-on-one with Bitcoin experts who can help you understand complex topics and answer your specific
              questions.
            </p>
          </div>
          <div className="feature-block">
            <div className="feature-icon">📊</div>
            <h4>Advanced Tools</h4>
            <p>
              Access special tools and reports that help you track your progress and find the best opportunities to grow
              your Bitcoin.
            </p>
          </div>
          <div className="feature-block">
            <div className="feature-icon">🏆</div>
            <h4>Digital Certificates</h4>
            <p>
              Get official certificates you can share online to show employers and friends what you've learned about
              Bitcoin.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

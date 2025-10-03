import { achievements } from "@/lib/data"

export default function Portfolio() {
  return (
    <>
      <div className="section-header">
        <h2>
          <span className="section-icon">👤</span>MY LEARNING PROGRESS
        </h2>
        <p>See how much you've learned, track your achievements, and celebrate your Bitcoin education journey.</p>
      </div>

      <div className="profile-content">
        <div className="progress-blocks">
          <div className="progress-block">
            <div className="block-header">
              <span className="block-icon">📈</span>
              <h3>LESSONS COMPLETED</h3>
            </div>
            <div className="pixel-progress-bar">
              <div className="pixel-progress-fill" style={{ width: "35%" }}></div>
            </div>
            <p>You've finished 3 out of 8 main lessons</p>
          </div>

          <div className="progress-block">
            <div className="block-header">
              <span className="block-icon">⭐</span>
              <h3>YOUR EXPERIENCE</h3>
            </div>
            <div className="xp-display">
              <span className="xp-amount">150</span>
              <span className="xp-suffix">XP</span>
            </div>
            <p>Level 3 - Keep learning to reach Level 4!</p>
          </div>
        </div>

        <div className="achievements-section">
          <div className="section-title">
            <span className="section-icon">🏆</span>
            <h3>YOUR ACHIEVEMENTS</h3>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.name} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h4 className="achievement-name">{achievement.name}</h4>
                <p className="achievement-description">{achievement.description}</p>
                <span className="achievement-rarity">{achievement.rarity}</span>
                <div className="achievement-xp">+{achievement.xp} XP</div>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-log">
          <div className="section-title">
            <span className="section-icon">📝</span>
            <h3>RECENT ACTIVITY</h3>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">🎯</span>
              <div>
                <p>
                  <strong>Completed:</strong> Bitcoin Security Lesson
                </p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">🏆</span>
              <div>
                <p>
                  <strong>Earned:</strong> Explorer Achievement Badge
                </p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">💬</span>
              <div>
                <p>
                  <strong>Helped:</strong> Someone learn about Bitcoin staking
                </p>
                <span className="activity-time">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

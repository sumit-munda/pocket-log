import "./App.css";

const journalEntries = [
  {
    title: "A fresh start",
    preview: "Taking a moment to reflect on the day ahead...",
    time: "9:30 AM",
    category: "Reflection",
  },
  {
    title: "Morning routine",
    preview: "A quiet morning, a cup of coffee, and a little planning.",
    time: "8:15 AM",
    category: "Daily life",
  },
];

const activities = [
  {
    name: "Morning walk",
    time: "30 minutes",
    icon: "🚶🏾‍♂️",
  },
  {
    name: "Reading",
    time: "45 minutes",
    icon: "📙",
  },
];

const App = () => {
  const today = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <a href="#overview" className="brand">
          <span className="brand-icon">P</span>
          <span>PocketLog</span>
        </a>

        <div className="sidebar-label">WORKSPACE</div>

        {/* Navbar */}
        <nav className="navigation" aria-label="Main navigation">
          <a href="#overview" className="nav-link active">
            <span className="nav-icon">⌂</span> Overview
          </a>

          <a href="#journal" className="nav-link">
            <span className="nav-icon">▤</span> Journal
          </a>

          <a href="#activities" className="nav-link">
            <span className="nav-icon">◷</span> Activities
          </a>

          <a href="#calendar" className="nav-link">
            <span className="nav-icon">▦</span> Calendar
          </a>
        </nav>

        <div className="siderbar-bottom">
          <div className="offline-indicator">
            <span className="status-dot" />
            <div>
              <strong>Offline ready</strong>
              <span>Your space, always available.</span>
            </div>
          </div>

          <a href="#settings" className="nav-link settings-link">
            <span className="nav-icon">⚙</span> Settings
          </a>

          <div className="profile">
            <div className="avatar">Y</div>
            <div className="profile-info">
              <strong>Your space</strong>
              <span>Personal workspace</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main id="overview" className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            My workspace <span>/</span> Overview
          </div>

          <div className="topbar-status">
            <span className="status-dot" />
            <span>Ready for today</span>
          </div>
        </header>

        <div className="dashboard">
          {/* Welcome Section */}
          <section className="welcome-section">
            <div>
              <p className="eyebrow">{today}</p>
              <h1>A little space for your day.</h1>
              <p className="welcome-description">
                Capture your thoughts, track your activities, and make sense of
                the littel things that make up your life.
              </p>
            </div>

            <div className="welcome-decoration" aria-hidden="true">
              <div className="decoration-circle">
                <span>✳</span>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions" aria-label="Quick actions">
            <a href="#journal" className="action-card journal-action">
              <span className="action-text">✎</span>
              <span className="action-text">
                <strong>Write a journal entry</strong>
                <span>Put your thoughts into words.</span>
              </span>
              <span className="action-arrow">↗</span>
            </a>

            <a href="#activities" className="action-card activity-action">
              <span className="action-icon">◷</span>
              <span className="action-text">
                <strong>Log an activity</strong>
                <span>Keep track of how you spend your time.</span>
              </span>
              <span className="action-arrow">↗</span>
            </a>
          </section>

          {/* Daily Overview */}
          <section className="stats-grid" aria-label="Today's overview">
            <article className="stat-card">
              <div className="stat-heading">
                <span>Journal entries</span>
                <span className="stat-icon">✎</span>
              </div>
              <strong className="stat-number">02</strong>
              <span className="stat-caption">Moments captured today</span>
            </article>

            <article className="stat-card">
              <div className="stat-heading">
                <span>Activities logged</span>
                <span className="stat-icon">◷</span>
              </div>
              <strong className="stat-number">02</strong>
              <span className="stat-caption">Things you've been doing</span>
            </article>

            <article className="stat-card">
              <div className="stat-heading">
                <span>Time tracked</span>
                <span className="stat-icon">◷</span>
              </div>
              <strong className="stat-number">1h 15m</strong>
              <span className="stat-caption">Across your activities</span>
            </article>
          </section>

          {/* Recent Activity */}
          <div className="content-grid">
            <section className="content-panel" id="journal">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">YOUR THOUGHTS</p>
                  <h2>Recent journal entries</h2>
                </div>
                <a href="#journal" className="text-link">
                  View all <span>→</span>
                </a>
              </div>

              <div className="entry-list">
                {journalEntries.map((entry) => (
                  <article className="entry-item" key={entry.title}>
                    <div className="entry-marker" />

                    <div className="entry-content">
                      <div className="entry-meta">
                        <span>{entry.category}</span>
                        <span>{entry.time}</span>
                      </div>

                      <h3>{entry.title}</h3>
                      <p>{entry.preview}</p>
                    </div>

                    <span className="entry-arrow">↗</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-panel" id="activities">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">YOUR DAY</p>
                  <h2>Recent activities</h2>
                </div>
                <a href="#activities" className="text-link">
                  View all <span>→</span>
                </a>
              </div>

              <div className="activity-list">
                {activities.map((activity) => (
                  <article className="activity-item" key={activity.name}>
                    <div className="activity-icon">{activity.icon}</div>

                    <div className="activity-details">
                      <h3>{activity.name}</h3>
                      <span>Today</span>
                    </div>

                    <strong className="activity-duration">
                      {activity.time}
                    </strong>
                  </article>
                ))}
              </div>

              <div className="activity-note">
                <span>✳</span>
                Every small step is worth remembering.
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="dashboard-footer">
            <span>Made for your everyday moments.</span>
            <span>
              <span className="status-dot" />
              Your personal space, designed for offline use.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-layout">
        <div>
          <span className="section-tag">What It Does</span>
          <h2 className="section-title">
            Stop Chasing.<br /><em>Start Closing.</em>
          </h2>
          <p className="section-sub">
            Jack Ryan AI handles the outreach grind so you can focus exclusively on what only you can do — building relationships and sealing deals.
          </p>
          <div className="feat-list">
            <div className="feat-item">
              <div className="feat-icon">📅</div>
              <div>
                <h4>Hands-Free Appointment Setting</h4>
                <p>The AI calls prospects and locks listing appointments directly into your calendar — and theirs — with zero double-bookings.</p>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-icon">⚡</div>
              <div>
                <h4>Instant Lead Response</h4>
                <p>Every new lead receives a reply within seconds. Stop losing deals to the first agent who picked up the phone.</p>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-icon">📊</div>
              <div>
                <h4>Real-Time Lead Intelligence</h4>
                <p>Get instant insight into lead quality, engagement levels, and buying readiness — before you ever dial.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="call-card">
            <div className="call-card-glow" />
            <div className="call-top">
              <div className="c-avatar">JR</div>
              <div className="c-info">
                <h5>Jack Ryan AI</h5>
                <span>Calling: Sarah Mitchell</span>
              </div>
              <div className="live-dot">Live</div>
            </div>
            <div className="chat">
              <p className="bubble-label">Jack Ryan AI</p>
              <div className="bubble bubble-ai">
                "Hi Sarah, this is Jack calling on behalf of Premier Realty. I noticed you've been exploring homes in Buckhead — do you have a couple of minutes?"
              </div>
              <p className="bubble-label" style={{ textAlign: 'right' }}>Prospect</p>
              <div className="bubble bubble-client">
                "Sure, yeah — we've been thinking about it."
              </div>
              <div className="bubble bubble-ai">
                "Are you hoping to move before end of year, or is this more of an early-stage exploration?"
              </div>
              <div className="bubble bubble-client">
                "We'd really like to be in by Q1."
              </div>
              <div className="bubble bubble-ai">
                "Perfect. I have Thursday at 2pm or Friday at 10am — which works best for a quick call with our team?"
              </div>
            </div>
            <div className="call-foot">
              <span>Appointment captured automatically</span>
              <span className="booked-badge">✓ Booked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

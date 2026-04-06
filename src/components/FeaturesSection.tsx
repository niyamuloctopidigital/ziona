import { MicOff, PhoneOff, PauseCircle, Volume2, Mic, Signal, CalendarCheck, Zap, BarChart2 } from 'lucide-react';
import PulseIcon from './PulseIcon';

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
              <div className="feat-icon"><PulseIcon icon={CalendarCheck} size={18} /></div>
              <div>
                <h4>Hands-Free Appointment Setting</h4>
                <p>The AI calls prospects and locks listing appointments directly into your calendar — and theirs — with zero double-bookings.</p>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-icon"><PulseIcon icon={Zap} size={18} /></div>
              <div>
                <h4>Instant Lead Response</h4>
                <p>Every new lead receives a reply within seconds. Stop losing deals to the first agent who picked up the phone.</p>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-icon"><PulseIcon icon={BarChart2} size={18} /></div>
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
                <h5>Ziona</h5>
                <span>Outbound Call Active</span>
              </div>
              <div className="live-dot">Live</div>
            </div>

            <div className="phone-ui">
              <div className="phone-contact-block">
                <div className="phone-contact-avatar">SM</div>
                <div className="phone-contact-name">Sarah Mitchell</div>
                <div className="phone-contact-meta">Buyer Lead · Atlanta, GA</div>
                <div className="phone-duration-row">
                  <Signal size={11} className="phone-signal-icon" />
                  <span className="phone-duration">02:34</span>
                  <span className="phone-status-dot" />
                  <span className="phone-status-text">Connected</span>
                </div>
              </div>

              <div className="phone-waveform">
                {[3,6,9,13,8,11,15,10,7,12,9,14,6,10,8,13,5,9,11,7].map((h, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{ '--bar-h': `${h}px`, animationDelay: `${i * 0.07}s` } as React.CSSProperties}
                  />
                ))}
              </div>

              <div className="phone-transcript-pill">
                <span className="transcript-dot" />
                <span>"Are you hoping to move before end of year?"</span>
              </div>

              <div className="phone-controls">
                <button className="ctrl-btn" title="Mute">
                  <MicOff size={18} />
                  <span>Mute</span>
                </button>
                <button className="ctrl-btn ctrl-end" title="End Call">
                  <PhoneOff size={20} />
                </button>
                <button className="ctrl-btn" title="Hold">
                  <PauseCircle size={18} />
                  <span>Hold</span>
                </button>
              </div>

              <div className="phone-meta-row">
                <div className="phone-meta-item">
                  <Volume2 size={12} />
                  <span>AI Speaking</span>
                </div>
                <div className="phone-meta-item">
                  <Mic size={12} />
                  <span>Lead Active</span>
                </div>
              </div>
            </div>

            <div className="call-foot">
              <span>Appointment captured automatically</span>
              <span className="booked-badge">&#10003; Booked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CalendarCheck, Zap, BarChart2 } from 'lucide-react';
import PulseIcon from './PulseIcon';
import ZionaDialpad from './ZionaDialpad';

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
            ZIONA AI handles the outreach grind so you can focus exclusively on what only you can do — building relationships and sealing deals.
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

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ZionaDialpad />
        </div>
      </div>
    </section>
  );
}

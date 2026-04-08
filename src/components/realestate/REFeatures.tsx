import { CalendarCheck, Zap, BarChart2 } from 'lucide-react';
import PulseIcon from '../PulseIcon';
import { type LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: CalendarCheck,
    title: 'Listing Appointments on Autopilot',
    desc: 'ZIONA AI calls your seller leads, qualifies motivation and timeline, and books listing appointments directly into your calendar — without you lifting a finger.',
  },
  {
    icon: Zap,
    title: 'Instant Speed-to-Lead',
    desc: 'Every new lead is contacted within seconds of enquiring. In real estate, speed wins listings — and ZIONA AI never lets a hot lead cool down.',
  },
  {
    icon: BarChart2,
    title: 'Real-Time Pipeline Intelligence',
    desc: 'Know exactly where each lead stands — their motivation, timeframe, and engagement level — so your conversations are always informed and targeted.',
  },
];

interface REFeaturesProps {
  onBook: () => void;
}

export default function REFeatures({ onBook }: REFeaturesProps) {
  return (
    <section className="re-features-section" id="re-features">
      <div className="re-features-layout">
        <div className="re-features-image">
          <img
            src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Real estate agent on phone"
          />
          <div className="re-features-image-badge">
            <strong>Stop chasing. Start closing.</strong>
            <span>Let AI do the prospecting work.</span>
          </div>
        </div>

        <div className="re-features-content">
          <span className="section-tag">Why It Works</span>
          <h2 className="section-title">
            Stop Chasing Leads.<br /><em>Start Closing Deals.</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
            ZIONA AI is your always-on inside sales agent — making calls, qualifying prospects, and filling your schedule while you're out on showings.
          </p>

          <div className="re-features-list">
            {features.map((f, i) => (
              <div key={i} className="re-feature-item">
                <div className="re-feature-ico">
                  <PulseIcon icon={f.icon} size={20} />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={onBook}>
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}

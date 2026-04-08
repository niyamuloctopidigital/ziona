import { PhoneCall, Database, Zap, Users, MessageCircle, type LucideIcon } from 'lucide-react';
import PulseIcon from '../PulseIcon';

const reasons: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: PhoneCall,
    title: 'More Leads. Less Manual Work.',
    desc: 'ZIONA AI runs 24/7 through your lead lists — outbound prospecting and inbound answering — without you needing to dial a single number.',
  },
  {
    icon: Database,
    title: 'Your Database Gets Smarter Over Time',
    desc: 'Every call ZIONA AI makes enriches your CRM with validated contact data. Over time, your number accuracy compounds and your list quality grows automatically.',
  },
  {
    icon: Zap,
    title: 'Zero Leads Fall Through the Cracks',
    desc: 'Every inbound enquiry gets an instant response. Every outbound lead gets followed up consistently. No voicemail. No dropped opportunities.',
  },
  {
    icon: Users,
    title: 'Scale Without Growing Your Payroll',
    desc: 'A top-performing ISA costs $40K–$70K a year and can only call so many leads. ZIONA AI gives you the output of a full inside-sales team for a fraction of the cost.',
  },
  {
    icon: MessageCircle,
    title: 'Conversations That Sound Human',
    desc: 'ZIONA AI is trained on real estate scripts and conversational best practices — so every call sounds natural, professional, and on-brand for your business.',
  },
];

interface REWhyProps {
  onTry: () => void;
}

export default function REWhy({ onTry }: REWhyProps) {
  return (
    <section className="why-section re-why-section">
      <div className="re-why-layout">
        <div className="re-why-content">
          <span className="section-tag">The Advantages</span>
          <h2 className="section-title">
            Why Top-Producing Agents<br /><em>Choose ZIONA AI</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
            Whether you're a solo agent or running a team, ZIONA AI handles the prospecting volume that no human team can match — at a price that makes sense.
          </p>

          <div className="re-why-list">
            {reasons.map((r, i) => (
              <div key={i} className="re-why-item">
                <div className="re-why-ico">
                  <PulseIcon icon={r.icon} size={18} />
                </div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={onTry}>
            TRY AI FOR REAL ESTATE
          </button>
        </div>

        <div className="re-why-image">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Real estate team celebrating results"
          />
          <div className="re-why-stat-card">
            <strong>$40K–$70K/yr</strong>
            <span>Cost of one ISA</span>
            <div className="re-why-vs">vs</div>
            <strong className="re-why-ai-price">ZIONA AI</strong>
            <span>A fraction of the cost</span>
          </div>
        </div>
      </div>
    </section>
  );
}

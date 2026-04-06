import { PhoneOutgoing, PhoneIncoming, MessageSquare, BarChart2 } from 'lucide-react';
import PulseIcon from './PulseIcon';
import ZionaDialpad from './ZionaDialpad';

const features = [
  {
    icon: PhoneOutgoing,
    title: 'Outbound AI Calling at Scale',
    desc: 'The AI proactively reaches out to your lead list, holds natural conversations, qualifies prospects, and books meetings — all without a human dialing a single number.',
  },
  {
    icon: PhoneIncoming,
    title: 'Inbound AI Receptionist',
    desc: 'Every incoming call is answered instantly — 24/7 — with a natural, human-sounding voice that handles enquiries, books appointments, and transfers urgent calls to your team.',
  },
  {
    icon: MessageSquare,
    title: 'Automated SMS & Follow-Up',
    desc: 'ZIONA AI keeps every lead warm with personalised text follow-ups, reminders, and re-engagement messages — automatically triggered based on conversation outcomes.',
  },
  {
    icon: BarChart2,
    title: 'Real-Time Lead Intelligence',
    desc: 'Get instant insight into lead quality, engagement levels, and intent signals — across every channel and industry your team operates in.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-layout">
        <div>
          <span className="section-tag">What It Does</span>
          <h2 className="section-title">
            One AI Agent.<br /><em>Inbound & Outbound.</em>
          </h2>
          <p className="section-sub">
            ZIONA AI doesn't just make calls — it answers them too. A single platform that handles your full communication workflow, from first contact to booked appointment.
          </p>
          <div className="feat-list">
            {features.map((f, i) => (
              <div key={i} className="feat-item">
                <div className="feat-icon"><PulseIcon icon={f.icon} size={18} /></div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ZionaDialpad />
        </div>
      </div>
    </section>
  );
}

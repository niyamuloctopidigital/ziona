import { PhoneCall, Briefcase, ShieldCheck, TrendingUp, MessageCircle, type LucideIcon } from 'lucide-react';
import PulseIcon from './PulseIcon';

const reasons: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: PhoneCall,
    title: 'Always On — Inbound & Outbound',
    desc: 'ZIONA AI answers every call coming in and makes every call going out — 24/7, with no breaks, no sick days, and no missed leads.',
  },
  {
    icon: Briefcase,
    title: 'Works in Any Industry',
    desc: 'From medical clinics to law firms, from real estate teams to home service companies — ZIONA AI adapts to your scripts, your tone, and your workflow.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Leads Left Behind',
    desc: 'Every inbound enquiry is answered instantly. Every outbound lead is followed up relentlessly. No voicemail. No dropped opportunities.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Without the Overhead',
    desc: 'Replace the cost of multiple receptionists and sales reps with a single AI platform that does it all — for a fraction of the price.',
  },
  {
    icon: MessageCircle,
    title: 'Tailored Conversations, Every Time',
    desc: "ZIONA AI speaks your brand's language — personalised scripts, industry-specific knowledge, and natural dialogue that feels human to every caller.",
  },
];

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="text-center">
        <span className="section-tag">The Advantages</span>
        <h2 className="section-title">
          Why Businesses Across Every Industry <em>Choose ZIONA</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Whether you're in real estate, healthcare, legal, or home services — the results are the same: more conversations, more bookings, less cost.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <div key={i} className="why-card">
            <div className="why-ico">
              <PulseIcon icon={r.icon} />
            </div>
            <h4>{r.title}</h4>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

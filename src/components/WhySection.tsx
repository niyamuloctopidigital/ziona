import { PhoneCall, Briefcase, ShieldCheck, TrendingUp, MessageCircle, type LucideIcon } from 'lucide-react';
import PulseIcon from './PulseIcon';

const reasons: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: PhoneCall,
    title: 'Never Let a Hot Lead Go Cold',
    desc: 'AI responds to every inquiry within 60 seconds. That lead who filled out your form at 9pm? Called by 9:01pm. No more slow follow-ups losing deals.',
  },
  {
    icon: Briefcase,
    title: 'Stop Paying for Multiple Sales Reps',
    desc: 'Get the output of 3–5 inside sales agents for a fraction of the cost. No hiring, no training, no managing — just results.',
  },
  {
    icon: ShieldCheck,
    title: 'Your Database Actually Gets Called',
    desc: "Those contacts sitting in your CRM? AI works through them systematically. Every lead, every past client, every cold contact — finally gets touched.",
  },
  {
    icon: TrendingUp,
    title: 'Perfect Follow-Up Every Time',
    desc: 'AI never forgets to call back. That prospect who said "maybe in 90 days"? AI calls them in exactly 90 days. Zero leads fall through the cracks.',
  },
  {
    icon: MessageCircle,
    title: 'Only Talk to Ready Prospects',
    desc: 'AI qualifies motivation, timeline, and budget before they hit your calendar. Stop wasting time on tire-kickers — only speak to people ready to move.',
  },
];

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="text-center">
        <span className="section-tag">The Advantages</span>
        <h2 className="section-title">
          More Leads. Less Grinding. <em>More Closings.</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          ZIONA AI works your database while you close deals — calling, qualifying, and following up automatically across every industry.
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

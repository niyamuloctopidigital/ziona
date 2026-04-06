import { PhoneOutgoing, Filter, RefreshCw, CalendarCheck, type LucideIcon } from 'lucide-react';
import PulseIcon from './PulseIcon';

const steps: { n: string; icon: LucideIcon; title: string; desc: string }[] = [
  {
    n: '01',
    icon: PhoneOutgoing,
    title: 'Outbound or Inbound Trigger',
    desc: 'ZIONA AI either proactively calls your lead list at scale, or instantly picks up every incoming call to your business — 24 hours a day.',
  },
  {
    n: '02',
    icon: Filter,
    title: 'Smart Qualification',
    desc: "The AI holds a natural two-way conversation, identifying each prospect's needs, budget, and timeline — so only high-intent leads advance.",
  },
  {
    n: '03',
    icon: RefreshCw,
    title: 'Automated Follow-Up',
    desc: 'Leads not yet ready are nurtured automatically with timely calls and personalised SMS until they\'re prepared to take the next step.',
  },
  {
    n: '04',
    icon: CalendarCheck,
    title: 'Instant Scheduling',
    desc: 'Qualified leads are booked straight into your calendar with instant SMS confirmation. You show up — the AI handles everything before it.',
  },
];

export default function HowItWorks() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="how-section" id="how-it-works">
      <div className="text-center">
        <span className="section-tag">The Process</span>
        <h2 className="section-title">
          From First Contact to <em>Booked Appointment</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Whether a lead calls you or you call them — ZIONA AI handles every step automatically.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.n} className="step-card" data-n={step.n}>
            <div className="step-ico">
              <PulseIcon icon={step.icon} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="how-cta">
        <button className="btn-primary" onClick={() => scrollTo('contact')}>
          Start Using AI Today
        </button>
      </div>
    </section>
  );
}

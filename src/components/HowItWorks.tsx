import { PhoneOutgoing, Filter, RefreshCw, CalendarCheck, type LucideIcon } from 'lucide-react';
import PulseIcon from './PulseIcon';

const steps: { n: string; icon: LucideIcon; title: string; desc: string }[] = [
  {
    n: '01',
    icon: PhoneOutgoing,
    title: 'AI Calls Your Database',
    desc: 'The AI works through your lead list — making hundreds of calls while you\'re busy with clients. Your database finally gets worked, systematically and consistently.',
  },
  {
    n: '02',
    icon: Filter,
    title: 'Qualifies Motivation and Timeline',
    desc: "AI asks the right questions: What's your timeline? What are you looking for? Only motivated leads move forward. No more tire-kickers wasting your time.",
  },
  {
    n: '03',
    icon: RefreshCw,
    title: 'Nurtures Until They\'re Ready',
    desc: 'Not ready today? AI follows up automatically in 30 days, 60 days, or whenever you set. That lead who said "call me in 6 months"? AI actually does. Nothing falls through the cracks.',
  },
  {
    n: '04',
    icon: CalendarCheck,
    title: 'Books the Appointment',
    desc: 'When a prospect is qualified and ready, AI books directly into your calendar. Hot leads are transferred to you immediately with full context — so you\'re always prepared to close.',
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
          From Lead to <em>Booked Appointment in 4 Steps</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          ZIONA AI works through your database automatically — from the first call to a confirmed meeting on your calendar.
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
          START BOOKING THIS WEEK
        </button>
      </div>
    </section>
  );
}

import { PhoneOutgoing, Filter, RefreshCw, CalendarCheck, type LucideIcon } from 'lucide-react';
import PulseIcon from '../PulseIcon';

const steps: { n: string; icon: LucideIcon; title: string; desc: string }[] = [
  {
    n: '01',
    icon: PhoneOutgoing,
    title: 'AI Works Through Your Lead List',
    desc: 'ZIONA AI contacts over 1,000 leads per hour — speaking with more than 100 homeowners in that same window — far beyond what any human team could achieve.',
  },
  {
    n: '02',
    icon: Filter,
    title: 'Smart Buyer & Seller Qualification',
    desc: "The AI assesses each lead's motivation, timeframe, and financial readiness through natural conversation — only the serious prospects move forward to you.",
  },
  {
    n: '03',
    icon: RefreshCw,
    title: 'Persistent Follow-Up & Nurturing',
    desc: 'Leads who aren\'t ready today are kept warm with scheduled calls and personalised SMS — so when they\'re ready to list or buy, you\'re the agent they call.',
  },
  {
    n: '04',
    icon: CalendarCheck,
    title: 'Appointment Booked & Handed Off',
    desc: 'Once qualified, ZIONA AI books the listing appointment or buyer consultation directly in your calendar — complete with confirmation SMS to both parties.',
  },
];

interface REHowItWorksProps {
  onBook: () => void;
}

export default function REHowItWorks({ onBook }: REHowItWorksProps) {
  return (
    <section className="how-section" id="re-how-it-works">
      <div className="text-center">
        <span className="section-tag">The Process</span>
        <h2 className="section-title">
          AI-Powered Lead Conversion <em>in 4 Steps</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          From first contact to signed listing agreement — ZIONA AI manages every touchpoint so you can stay focused on what you do best.
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
        <button className="btn-primary" onClick={onBook}>
          SCHEDULE A CALL
        </button>
      </div>
    </section>
  );
}

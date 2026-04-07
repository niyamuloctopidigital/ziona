import { Phone } from 'lucide-react';

type DemoMode = 'outbound' | 'inbound';

const demos: { mode: DemoMode; industry: string; name: string; desc: string; number: string }[] = [
  {
    mode: 'inbound',
    industry: 'Healthcare',
    name: 'Clinic Appointment Booking',
    desc: 'Call in as a patient. ZIONA AI collects your details, checks availability, and books your consultation — instantly.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    industry: 'Legal Services',
    name: 'Legal Consultation Outreach',
    desc: 'Hear how ZIONA AI reaches out to a warm enquiry, qualifies their legal need, and books a solicitor call.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'inbound',
    industry: 'Home Services',
    name: 'Service Quote & Scheduling',
    desc: 'Call in requesting a quote. ZIONA AI gathers your job details, provides a rough estimate, and locks in a visit.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    industry: 'Automotive',
    name: 'Test Drive Booking Outreach',
    desc: 'Hear ZIONA AI follow up with a showroom enquiry, handle questions about a vehicle, and book a test drive.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'inbound',
    industry: 'Fitness & Gyms',
    name: 'Membership Enquiry & Sign-Up',
    desc: 'Call in asking about gym plans. ZIONA AI walks you through options, answers questions, and signs you up for a trial.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    industry: 'Insurance',
    name: 'Policy Renewal Follow-Up',
    desc: 'Listen as ZIONA AI contacts a policyholder nearing renewal, answers coverage questions, and secures the renewal.',
    number: '+1 111 222 3334',
  },
];

const modeConfig = {
  outbound: { label: 'Outbound', className: 'demo-badge-out' },
  inbound:  { label: 'Inbound',  className: 'demo-badge-in'  },
};

export default function DemosSection() {
  return (
    <section className="demos-section" id="demos">
      <div className="demo-intro text-center">
        <span className="section-tag">Live Demo Lines</span>
        <h2 className="section-title">Hear It for <em>Yourself</em></h2>
        <p className="section-sub">
          Dial any number below from your phone. Ask it anything. Experience exactly how ZIONA AI qualifies a real lead — in real time.
        </p>
      </div>

      <div className="demo-grid-6">
        {demos.map((demo, i) => (
          <a
            key={i}
            className="demo-card-new"
            href={`tel:${demo.number.replace(/\s/g, '')}`}
          >
            <div className="demo-card-header">
              <span className={`demo-badge ${modeConfig[demo.mode].className}`}>
                <span className="demo-badge-dot" />
                {modeConfig[demo.mode].label}
              </span>
              <span className="demo-industry">{demo.industry}</span>
            </div>
            <span className="demo-card-name">{demo.name}</span>
            <span className="demo-card-desc">{demo.desc}</span>
            <span className="demo-card-num">
              <Phone size={13} />
              {demo.number}
            </span>
          </a>
        ))}
      </div>

      <p className="demo-hint">
        <span className="demo-hint-arrow">→</span> Dial from your phone
        <span className="demo-hint-arrow">→</span> Hear the AI answer
        <span className="demo-hint-arrow">→</span> Ask it anything
      </p>
    </section>
  );
}

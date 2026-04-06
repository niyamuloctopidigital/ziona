import { Phone, MessageSquare } from 'lucide-react';

type DemoMode = 'outbound' | 'inbound' | 'sms';

const demos: { mode: DemoMode; name: string; desc: string; number: string }[] = [
  {
    mode: 'outbound',
    name: 'Cold Lead Qualification',
    desc: 'Hear how ZIONA AI opens a cold call, qualifies intent, and moves a prospect toward booking.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'inbound',
    name: 'Appointment Booking',
    desc: 'Call in as a customer. ZIONA AI answers, understands your request, and schedules a slot instantly.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    name: 'Follow-Up & Nurturing',
    desc: 'See how ZIONA AI re-engages a warm lead, handles objections, and keeps the conversation moving.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'inbound',
    name: 'Customer Support & FAQs',
    desc: 'Ask any common question. ZIONA AI handles it naturally — no hold music, no transfers, no wait.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    name: 'Dormant Lead Reactivation',
    desc: 'Listen to how ZIONA AI wins back a lapsed contact with a natural, non-pushy conversation.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'sms',
    name: 'Automated Text Follow-Up',
    desc: 'Text the number and see how ZIONA AI continues the conversation over SMS — qualifying and booking via text.',
    number: '+1 111 222 3334',
  },
];

const modeConfig = {
  outbound: { label: 'Outbound', className: 'demo-badge-out' },
  inbound:  { label: 'Inbound',  className: 'demo-badge-in'  },
  sms:      { label: 'SMS & Text', className: 'demo-badge-sms' },
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
            <span className={`demo-badge ${modeConfig[demo.mode].className}`}>
              <span className="demo-badge-dot" />
              {modeConfig[demo.mode].label}
            </span>
            <span className="demo-card-name">{demo.name}</span>
            <span className="demo-card-desc">{demo.desc}</span>
            <span className={`demo-card-num${demo.mode === 'sms' ? ' demo-card-num-sms' : ''}`}>
              {demo.mode === 'sms'
                ? <MessageSquare size={13} />
                : <Phone size={13} />
              }
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

import { Phone } from 'lucide-react';

type DemoMode = 'outbound' | 'inbound';

const demos: { mode: DemoMode; label: string; name: string; desc: string; number: string }[] = [
  {
    mode: 'outbound',
    label: 'Seller Leads',
    name: 'Seller Lead Qualification',
    desc: 'Call in as a homeowner. Hear how ZIONA AI opens the conversation, qualifies motivation, and locks in a listing appointment.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'inbound',
    label: 'Buyer Leads',
    name: 'Buyer Lead Intake',
    desc: 'Experience ZIONA AI handling an inbound buyer enquiry — capturing search criteria, pre-qualification details, and booking a showing.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    label: 'Mortgage',
    name: 'Mortgage Lender Outreach',
    desc: 'Listen to ZIONA AI partner with your preferred lender, qualify a buyer\'s financial readiness, and set a consultation call.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    label: 'Neighbourhood Farming',
    name: 'Neighbourhood Farming Campaign',
    desc: 'Hear how ZIONA AI works a geo-farm, introduces your brand to homeowners, and identifies off-market listing opportunities.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'inbound',
    label: 'Open House',
    name: 'Open House Follow-Up',
    desc: 'See ZIONA AI re-engage every open house visitor — qualifying interest, answering objections, and booking the next showing.',
    number: '+1 111 222 3334',
  },
  {
    mode: 'outbound',
    label: 'Dormant Database',
    name: 'Past-Client Reactivation',
    desc: 'Watch ZIONA AI re-open conversations with cold contacts and past clients — bringing opportunities back to the surface.',
    number: '+1 111 222 3334',
  },
];

const modeConfig = {
  outbound: { label: 'Outbound', className: 'demo-badge-out' },
  inbound:  { label: 'Inbound',  className: 'demo-badge-in'  },
};

export default function REDemos() {
  return (
    <section className="demos-section" id="re-demos">
      <div className="demo-intro text-center">
        <span className="section-tag">Live Demo Lines</span>
        <h2 className="section-title">Try the AI <em>Right Now</em></h2>
        <p className="section-sub">
          Pick any line below, dial from your phone, and have a real conversation. No scripts on your end — just talk naturally and experience how ZIONA AI handles real estate leads.
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
              <span className="demo-industry">{demo.label}</span>
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

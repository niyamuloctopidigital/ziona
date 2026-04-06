import { Phone } from 'lucide-react';

const demos = [
  { type: 'Real Estate', name: 'Seller Lead Script', number: '+1 111 222 3334' },
  { type: 'Real Estate', name: 'Buyer Lead Script', number: '+1 111 222 3334' },
  { type: 'Mortgage', name: 'Lender Script', number: '+1 111 222 3334' },
  { type: 'Farming', name: 'Neighborhood Campaign', number: '+1 111 222 3334' },
  { type: 'Event', name: 'Open House Follow-Up', number: '+1 111 222 3334' },
];

export default function DemosSection() {
  return (
    <section className="demos-section" id="demos">
      <div className="demo-intro text-center">
        <span className="section-tag">Live Demo Lines</span>
        <h2 className="section-title">Hear It for <em>Yourself</em></h2>
        <p className="section-sub">
          Dial any number below from your phone. Ask it anything. Experience exactly how Jack Ryan AI qualifies a real lead — in real time.
        </p>
      </div>

      <div className="demo-grid">
        {demos.map((demo, i) => (
          <a
            key={i}
            className="demo-card"
            href={`tel:+11112223334`}
          >
            <span className="demo-type">{demo.type}</span>
            <span className="demo-name">{demo.name}</span>
            <span className="demo-number">
              <Phone size={14} />
              {demo.number}
            </span>
          </a>
        ))}
      </div>

      <p className="demo-hint">Tap a number on your phone → hear the AI answer → ask it anything. It's that simple.</p>
    </section>
  );
}

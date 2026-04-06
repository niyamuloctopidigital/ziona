import { Phone } from 'lucide-react';

const demos = [
  { type: 'Real Estate', name: 'Seller Lead Script', number: '(470) 470-4504' },
  { type: 'Real Estate', name: 'Buyer Lead Script', number: '(470) 790-3257' },
  { type: 'Mortgage', name: 'Lender Script', number: '(470) 450-1893' },
  { type: 'Farming', name: 'Neighborhood Campaign', number: '(470) 649-3443' },
  { type: 'Event', name: 'Open House Follow-Up', number: '(470) 450-2622' },
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
            href={`tel:${demo.number.replace(/\D/g, '')}`}
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

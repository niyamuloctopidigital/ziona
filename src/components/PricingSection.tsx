const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    period: '10-Day Free Trial',
    tagline: 'Test it on your real leads. Experience the full power of ZIONA AI before spending a dollar.',
    setup: null,
    features: [
      '1 AI calling agent',
      '1 AI receptionist',
      '1 AI texting agent',
      'Test it on your real leads',
    ],
    bestFor: null,
    cta: 'START FREE TRIAL',
    popular: false,
  },
  {
    name: 'Growth Plan',
    price: '$500',
    period: '/ month',
    tagline: 'Best for solo operators or small teams (2–5 people) ready to scale outreach without extra staff.',
    setup: '$497 one-time setup (waived if paid annually)',
    features: [
      '1 AI outbound caller',
      'Unlimited AI texting',
      'Unlimited inbound call handling',
      '2,000 minutes included',
      '$0.29 / min after 2,000',
      'Industry-specific calling scripts',
      'Lifetime tech support',
      'Works with major CRMs',
    ],
    bestFor: 'Solo operators or small teams (2–5 people)',
    cta: 'GET STARTED',
    popular: true,
  },
  {
    name: 'Scale Plan',
    price: '$1,500',
    period: '/ month',
    tagline: 'Best for teams, brokerages, or high-volume operations running full-capacity AI outreach.',
    setup: '$0 setup fee',
    features: [
      'Unlimited AI outbound calling',
      'Unlimited AI receptionist',
      '2,000 minutes included',
      '$0.29 / min after 2,000',
      'Custom scripts included',
      'Dedicated tech support team',
      'BONUS: Meta ads management included',
      'BONUS: Transaction coordination included',
    ],
    bestFor: 'Teams, brokerages, or high-volume operations',
    cta: 'GET STARTED',
    popular: false,
  },
];

interface PricingSectionProps {
  onGetStarted: () => void;
}

export default function PricingSection({ onGetStarted }: PricingSectionProps) {
  return (
    <section className="pricing-section" id="pricing">
      <div className="text-center">
        <span className="section-tag">Pricing</span>
        <h2 className="section-title">
          Plans Built for <em>Every Business</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          One new client pays for 6–12 months. Everything after that is pure profit.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`plan${plan.popular ? ' popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <div className="plan-name">{plan.name}</div>
            {plan.setup && <p className="re-plan-startup">{plan.setup}</p>}
            <div className="plan-price-row">
              <big>{plan.price}</big>
              <span>{plan.period}</span>
            </div>
            <p className="plan-tagline">{plan.tagline}</p>
            <ul className="plan-list">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="plan-btn" onClick={onGetStarted}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-footnote">
        Average revenue per new client: $8,000–$12,000 &nbsp;·&nbsp; ZIONA AI cost: $500–$1,500/month<br />
        Close just ONE extra deal and you're profitable for the year &nbsp;·&nbsp; Cancel anytime with 30 days notice
      </p>
    </section>
  );
}

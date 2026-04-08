const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    period: '/ 10-day trial',
    tagline: 'Experience the full power of ZIONA AI before committing a single dollar.',
    features: [
      '1 AI Outbound Calling Agent',
      '1 AI Receptionist (Inbound)',
      '1 AI Texting Agent',
      'Full platform access during trial',
    ],
    popular: false,
  },
  {
    name: 'Growth Plan',
    price: '$500',
    period: '/ month',
    tagline: 'For solo agents and small teams ready to scale their outreach intelligently.',
    features: [
      'Unlimited AI text messaging',
      'Unlimited AI inbound agents',
      '1 AI outbound caller',
      'Unlimited workflow automations',
      'Real estate conversion scripts',
      'Lifetime technical support',
      '2,000 minutes included',
      '$0.29 / min beyond 2,000',
    ],
    popular: false,
  },
  {
    name: 'Scale Plan',
    price: '$1,500',
    period: '/ month',
    tagline: 'For high-producing agents and teams who want AI running at full capacity.',
    features: [
      'Unlimited AI outbound calling',
      'Unlimited AI receptionists',
      'Unlimited workflow automations',
      'Real estate conversion scripts',
      'Dedicated tech development team',
      '2,000 minutes included',
      'Guaranteed 25 monthly leads',
      'Meta Ads management — free',
      'Transaction coordinator included',
    ],
    popular: true,
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
          Flexible Plans for <em>Every Stage</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          No hidden charges. No long-term lock-ins. Just results.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`plan${plan.popular ? ' popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <div className="plan-name">{plan.name}</div>
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
              GET STARTED
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-footnote">
        One-time setup fee applies to paid plans &nbsp;·&nbsp; Cancel anytime with 30 days notice<br />
        Compare: a full-time ISA costs $40K–$70K/year &nbsp;·&nbsp; ZIONA AI Scale: $18,000/year
      </p>
    </section>
  );
}

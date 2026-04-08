const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '10-day trial',
    startup: null,
    tagline: 'Get full access to ZIONA AI and experience real estate lead conversion before spending a dollar.',
    features: [
      '1 AI Outbound Calling Agent',
      '1 AI Receptionist (Inbound)',
      '1 AI Texting Agent',
      'Full platform access during trial',
    ],
    cta: 'GET STARTED',
    popular: false,
  },
  {
    name: 'Scaling Agent',
    price: '$490',
    period: '/ month',
    startup: 'One-time setup fee applies',
    tagline: 'Built for the solo agent who wants to run a high-volume prospecting operation without extra staff.',
    features: [
      'Speed-to-lead automations',
      'Human behavioural follow-up sequences',
      'Dormant lead reactivation campaigns',
      'Unlimited prospecting data sources',
      'Data accuracy scrubbing',
      'Lifetime technical support',
      'Unlimited calls & texts',
      'Minutes included monthly',
    ],
    cta: 'GET STARTED',
    popular: false,
  },
  {
    name: 'Scaling Team',
    price: '$2,200',
    period: '/ month',
    startup: 'One-time setup fee • Based on team size',
    tagline: 'Everything a growing real estate team needs to dominate their market with AI-powered outreach.',
    features: [
      'Everything in Scaling Agent',
      'AI agents for every team member',
      'Agent attraction campaign included',
      'Revenue share opportunities',
      'Market exclusivity — one per MLS',
      'IDX website build & hosting',
      'META ad campaign build & management',
      'Ad spend included',
    ],
    cta: 'GET STARTED',
    popular: true,
  },
];

interface REPricingProps {
  onGetStarted: () => void;
}

export default function REPricing({ onGetStarted }: REPricingProps) {
  return (
    <section className="pricing-section" id="re-pricing">
      <div className="text-center">
        <span className="section-tag">Pricing</span>
        <h2 className="section-title">
          Flexible Plans for <em>Every Agent</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          No hidden fees. No long-term lock-ins. Just more listings and more closings.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`plan${plan.popular ? ' popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <div className="plan-name">{plan.name}</div>
            {plan.startup && <p className="re-plan-startup">{plan.startup}</p>}
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
        Compare: a full-time ISA costs $40K–$70K/year &nbsp;·&nbsp; ZIONA AI Scaling Agent: under $6,000/year<br />
        Cancel anytime with 30 days notice &nbsp;·&nbsp; Setup fee varies by plan
      </p>
    </section>
  );
}

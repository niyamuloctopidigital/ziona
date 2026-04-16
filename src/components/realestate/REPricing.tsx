const plans = [
  {
    name: 'FREE Plan',
    price: '$0',
    period: '10-Day Free Trial',
    startup: null,
    tagline: 'Test it on your real leads — expired listings, FSBOs, past clients. No credit card required.',
    features: [
      '1 AI calling agent',
      '1 AI receptionist',
      '1 AI texting agent',
      'Test it on your real leads — expired listings, FSBOs, past clients',
    ],
    cta: 'START FREE TRIAL',
    popular: false,
  },
  {
    name: 'Growth Plan',
    price: '$500',
    period: '/ month',
    startup: '$497 one-time setup (waived if paid annually)',
    tagline: 'Best for solo agents or small teams (2–5 agents) ready to book more listing appointments.',
    features: [
      '1 AI outbound caller',
      'Unlimited AI texting',
      'Unlimited inbound call handling',
      '2,000 minutes included',
      '$0.29 / min after 2,000',
      'Real estate cold calling scripts included',
      'Lifetime tech support',
      'Works with your CRM (KVCore, Follow Up Boss, LionDesk)',
    ],
    cta: 'GET STARTED',
    popular: true,
  },
  {
    name: 'Scale Plan',
    price: '$1,500',
    period: '/ month',
    startup: '$0 setup fee',
    tagline: 'Best for teams, brokerages, or high-volume agents running full-capacity AI prospecting.',
    features: [
      'Unlimited AI outbound calling',
      'Unlimited AI receptionist',
      '2,000 minutes included',
      '$0.29 / min after 2,000',
      'Real estate scripts included',
      'Dedicated tech support team',
      'BONUS: Meta ads management included',
      'BONUS: Transaction coordination included',
    ],
    cta: 'GET STARTED',
    popular: false,
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
          Plans Built for <em>Real Estate Agents</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          One closed listing pays for 6–12 months. Everything after that is pure profit.
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
        ROI Reality Check: Average listing commission $8,000–$12,000 &nbsp;·&nbsp; ZIONA AI cost $500–$1,500/month<br />
        Close just ONE extra listing and you're profitable for the year &nbsp;·&nbsp; Cancel anytime with 30 days notice
      </p>
    </section>
  );
}

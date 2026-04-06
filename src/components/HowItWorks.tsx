const steps = [
  {
    n: '01',
    icon: '📞',
    title: 'High-Volume AI Outreach',
    desc: 'Jack Ryan AI reaches over 1,000 contacts and holds genuine conversations with 100+ homeowners — all within a single hour.',
  },
  {
    n: '02',
    icon: '🔍',
    title: 'Smart Lead Filtering',
    desc: "The AI evaluates each prospect's motivation, budget, and timeline — ensuring only serious buyers and sellers advance.",
  },
  {
    n: '03',
    icon: '🔁',
    title: 'Automated Nurturing',
    desc: 'For leads not quite ready, the AI maintains contact with timely, personalised follow-ups until they\'re ready to act.',
  },
  {
    n: '04',
    icon: '🗓️',
    title: 'Seamless Scheduling',
    desc: 'Qualified leads get booked straight into your calendar. You show up to the conversation — the AI handles everything before it.',
  },
];

export default function HowItWorks() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="how-section" id="how-it-works">
      <div className="text-center">
        <span className="section-tag">The Process</span>
        <h2 className="section-title">
          Cold Lead to <em>Booked Appointment</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Four fully automated steps working around the clock — even while you sleep or focus on closing.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.n} className="step-card" data-n={step.n}>
            <div className="step-ico">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="how-cta">
        <button className="btn-primary" onClick={() => scrollTo('contact')}>
          Start Using AI Today
        </button>
      </div>
    </section>
  );
}

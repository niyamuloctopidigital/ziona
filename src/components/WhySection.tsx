const reasons = [
  {
    icon: '🌙',
    title: 'Always On, Never Resting',
    desc: 'Jack Ryan AI operates around the clock — capturing every lead, even at midnight on a Sunday.',
  },
  {
    icon: '📱',
    title: 'A Self-Cleaning Number List',
    desc: 'The more calls the AI makes, the more accurate your database becomes — never waste time on bad numbers again.',
  },
  {
    icon: '🏃',
    title: 'Zero Leads Left Behind',
    desc: 'Every enquiry is acknowledged instantly. No voicemail, no delay, no lost commissions.',
  },
  {
    icon: '📈',
    title: 'Scale Without Overhead',
    desc: 'The output of a full inside-sales team at a fraction of the cost — no salaries, benefits, or management needed.',
  },
  {
    icon: '🎯',
    title: 'Conversations That Feel Personal',
    desc: "AI follow-ups are tailored to each lead's situation, keeping them engaged without feeling like a mass campaign.",
  },
];

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="text-center">
        <span className="section-tag">The Advantages</span>
        <h2 className="section-title">
          Why Top Agents <em>Choose AI Calling</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Immediate ROI. Zero management overhead. Results from day one.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <div key={i} className="why-card">
            <div className="why-ico">{r.icon}</div>
            <h4>{r.title}</h4>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

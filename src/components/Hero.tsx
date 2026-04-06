export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <svg className="hero-wave" viewBox="0 0 900 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100 Q50 40 100 100 Q150 160 200 100 Q250 40 300 100 Q350 160 400 100 Q450 40 500 100 Q550 160 600 100 Q650 40 700 100 Q750 160 800 100 Q850 40 900 100" stroke="#9B6FF4" strokeWidth="2" fill="none"/>
        <path d="M0 100 Q25 70 50 100 Q75 130 100 100 Q125 70 150 100 Q175 130 200 100 Q225 70 250 100 Q275 130 300 100 Q325 70 350 100 Q375 130 400 100 Q425 70 450 100 Q475 130 500 100 Q525 70 550 100 Q575 130 600 100 Q625 70 650 100 Q675 130 700 100 Q725 70 750 100 Q775 130 800 100 Q825 70 850 100 Q875 130 900 100" stroke="#7B4FE0" strokeWidth="1.5" fill="none" opacity="0.6"/>
      </svg>

      <div className="hero-pill">Live AI · Real Estate Sales Automation</div>

      <h1>
        Your AI Sales Agent.<br />
        <span>Calls. Qualifies. Closes.</span>
      </h1>

      <p className="hero-sub">
        The complete AI platform built for real estate professionals. It handles every call, qualifies every lead, and fills your calendar — 24 hours a day, at a fraction of the cost.
      </p>

      <div className="hero-btns">
        <button className="btn-primary" onClick={() => scrollTo('demos')}>See AI in Action</button>
        <button className="btn-ghost" onClick={() => scrollTo('contact')}>Try for Free</button>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <strong>1,000+</strong>
          <span>Leads per hour</span>
        </div>
        <div className="stat">
          <strong>100+</strong>
          <span>Live conversations/hr</span>
        </div>
        <div className="stat">
          <strong>24/7</strong>
          <span>Always on duty</span>
        </div>
        <div className="stat">
          <strong>90%</strong>
          <span>Lower cost vs. hiring</span>
        </div>
      </div>
    </section>
  );
}

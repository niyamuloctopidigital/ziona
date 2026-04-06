import { useRef, useEffect } from 'react';

export default function Hero() {
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.04);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.04);

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
    };
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
  };

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div ref={parallaxRef} className="hero-content">
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
      </div>
    </section>
  );
}

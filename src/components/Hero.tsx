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
        <div className="hero-pill">AI-Powered Outbound Sales Team</div>

        <h1>
          AI That Calls, Follows Up, and <span> Books Meetings So You Close </span> More Deals.
        </h1>

        <p className="hero-sub">
          Your AI-powered outbound sales team handles cold calling, lead qualification, and appointment setting — fully automated. Never miss a follow-up again.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('demos')}>SEE AI IN ACTION</button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>TRY FOR FREE</button>
        </div>

        <div className="hero-tags">
          <span className="hero-tag">Outbound AI Calling</span>
          <span className="hero-tag">Lead Qualification</span>
          <span className="hero-tag">Appointment Setting</span>
          <span className="hero-tag">AI SMS Follow-Up</span>
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

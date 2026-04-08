import { useRef, useEffect } from 'react';

interface REHeroProps {
  onCTA: () => void;
}

export default function REHero({ onCTA }: REHeroProps) {
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero re-hero" id="re-home" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div ref={parallaxRef} className="hero-content">
        <div className="hero-pill">Real Estate AI — Inbound & Outbound</div>

        <h1>
          Your AI Agent That Fills<br />
          <span>Your Calendar With Listings.</span>
        </h1>

        <p className="hero-sub">
          ZIONA AI calls your leads, qualifies buyers and sellers, books listing appointments, and follows up automatically — so you can focus entirely on closing deals, not chasing contacts.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('re-demos')}>See AI in Action</button>
          <button className="btn-ghost" onClick={onCTA}>Try for Free</button>
        </div>

        <div className="hero-tags">
          <span className="hero-tag">Seller Lead Outreach</span>
          <span className="hero-tag">Buyer Lead Qualification</span>
          <span className="hero-tag">Listing Appointment Booking</span>
          <span className="hero-tag">AI SMS Follow-Up</span>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <strong>1,000+</strong>
            <span>Leads called per hour</span>
          </div>
          <div className="stat">
            <strong>100+</strong>
            <span>Live conversations/hr</span>
          </div>
          <div className="stat">
            <strong>24/7</strong>
            <span>Never misses a lead</span>
          </div>
          <div className="stat">
            <strong>90%</strong>
            <span>Lower cost vs. ISA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

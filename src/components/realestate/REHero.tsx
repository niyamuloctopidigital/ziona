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
        <div className="hero-pill">Real Estate AI — Calls, Qualifies & Books Listings</div>

        <h1>
          AI that calls expired listings, <span> follows up FSBOs, and books</span> appointments. So you close <span> more deals.</span> 
        </h1>

        <p className="hero-sub">
          Your AI-powered sales team handles cold calling, lead qualification, and appointment setting for real estate agents, fully automated. Never let a lead go cold again.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('re-demos')}>SEE AI IN ACTION</button>
          <button className="btn-ghost" onClick={onCTA}>TRY FOR FREE</button>
        </div>

        <div className="hero-tags">
          <span className="hero-tag">Expired Listings</span>
          <span className="hero-tag">FSBO Follow-Up</span>
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

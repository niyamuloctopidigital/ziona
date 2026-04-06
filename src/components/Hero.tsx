import { useRef, useEffect } from 'react';

export default function Hero() {
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const svgRef = useRef<SVGSVGElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.045);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.045);

      if (svgRef.current) {
        svgRef.current.style.transform = `translate(calc(-50% + ${currentRef.current.x}px), calc(-50% + ${currentRef.current.y}px))`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 40,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    };
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
  };

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <svg
        ref={svgRef}
        className="hero-wave"
        viewBox="0 0 1000 200"
        fill="none"
      >
        <path
          d="M-100 100 Q5 20 110 100 Q215 180 330 100 Q435 20 550 100 Q655 180 770 100 Q875 20 990 100 Q1050 180 1100 100"
          stroke="#9B6FF4"
          strokeWidth="3.5"
          fill="none"
          strokeDasharray="1800"
          style={{ animation: 'waveFlow 9s linear infinite' }}
        />
        <path
          d="M-100 100 Q30 55 110 100 Q190 145 275 100 Q360 55 440 100 Q520 145 605 100 Q690 55 770 100 Q855 145 935 100 Q1020 55 1100 100"
          stroke="#7B4FE0"
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
          strokeDasharray="1800"
          style={{ animation: 'waveFlow 14s linear infinite' }}
        />
        <path
          d="M-100 95 Q70 15 195 95 Q320 175 440 95 Q560 15 680 95 Q800 175 920 95 Q1040 15 1100 95"
          stroke="#C4A8FF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.45"
          strokeDasharray="1800"
          style={{ animation: 'waveFlow 20s linear infinite reverse' }}
        />
      </svg>

      <div className="hero-content">
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

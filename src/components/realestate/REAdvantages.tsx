import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';

interface REAdvantagesProps {
  onTry: () => void;
}

function useCountUp(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const total = Math.ceil(duration / 16);
    const tick = () => {
      frame++;
      setVal(Math.round((frame / total) * target));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return val;
}

const CheckSVG = ({ d }: { d: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={d} stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    title: 'Never Let a Hot Lead Go Cold',
    desc: 'AI responds to every inquiry within 60 seconds. That FSBO who filled out your form at 9pm? Called by 9:01pm. Speed wins listings.',
    svg: () => <CheckSVG d="M3 8l3 3 7-7" />,
  },
  {
    title: 'Stop Paying ISAs $4,000/Month',
    desc: 'Get the output of 3–5 inside sales agents for a fraction of the cost. No hiring, no training, no managing people — just more appointments.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="6" width="3" height="7" rx="1" fill="#a78bfa" />
        <rect x="6.5" y="4" width="3" height="9" rx="1" fill="#a78bfa" />
        <rect x="11" y="2" width="3" height="11" rx="1" fill="#a78bfa" />
      </svg>
    ),
  },
  {
    title: 'Your Database Actually Gets Called',
    desc: 'Those 2,000 contacts sitting in your CRM? AI works through them systematically. Every expired listing, every past client, every sphere contact — finally gets touched.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="8" cy="8" r="2" stroke="#a78bfa" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'Perfect Follow-Up Every Time',
    desc: 'AI never forgets to call back. That seller who said "maybe in 90 days"? AI calls them in exactly 90 days. Zero leads fall through the cracks.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <ellipse cx="8" cy="8" rx="6" ry="6" stroke="#a78bfa" strokeWidth="1.3" />
        <path d="M8 5v3l2 2" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function REAdvantages({ onTry }: REAdvantagesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const calls = useCountUp(1284, 1800, visible);
  const appts = useCountUp(47, 1400, visible);

  return (
    <section ref={ref} className="rea-section">
      <div className="rea-grid">

        {/* LEFT */}
        <div className="rea-left">
          <p className="rea-eyebrow">The Advantages</p>
          <h2 className="rea-headline">
            More Listings,<br />
            <em className="rea-headline-em">Less Grinding.</em>
          </h2>
          <p className="rea-sub">
            ZIONA AI works your database while you close deals — calling expired listings, following up FSBOs, and never letting a lead go cold.
          </p>

          <div className="rea-feat-list">
            {features.map((f, i) => (
              <div key={i} className="rea-feat-row" style={{ animationDelay: `${0.05 + i * 0.09}s` }}>
                <div className="rea-feat-icon">
                  <f.svg />
                </div>
                <div>
                  <p className="rea-feat-title">{f.title}</p>
                  <p className="rea-feat-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rea-cta-row">
            <button className="rea-btn" onClick={onTry}>
              See How It Works for Real Estate
              <span className="rea-btn-icon"><ArrowUpRight size={12} /></span>
            </button>
            <span className="rea-cta-note">10-day free trial &nbsp;·&nbsp; No credit card required</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rea-right">
          {/* Cost Comparison */}
          <div className="rea-card rea-compare-card">
            <div className="rea-shimmer" />
            <p className="rea-card-label">Cost comparison</p>
            <div className="rea-vs-row">
              <div className="rea-vs-side rea-vs-isa">
                <span className="rea-vs-tag rea-tag-isa">Human ISA</span>
                <span className="rea-vs-price rea-price-isa">$40K–$70K</span>
                <span className="rea-vs-sub">per year + benefits</span>
                <div className="rea-check-list">
                  {['Limited hours', 'Sick days & turnover', 'Training time'].map((t) => (
                    <div key={t} className="rea-check-row">
                      <X size={10} color="rgba(248,113,113,.5)" />
                      <span className="rea-check-text rea-check-bad">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rea-vs-divider">VS</div>
              <div className="rea-vs-side rea-vs-ziona rea-border-glow">
                <span className="rea-vs-tag rea-tag-ai">ZIONA AI</span>
                <span className="rea-vs-price rea-price-ai">Fraction</span>
                <span className="rea-vs-sub rea-sub-ai">of that cost</span>
                <div className="rea-check-list">
                  {['Works 24/7', 'Never misses a lead', 'Instant deployment'].map((t) => (
                    <div key={t} className="rea-check-row">
                      <Check size={10} color="#a78bfa" />
                      <span className="rea-check-text rea-check-good">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stat Grid */}
          <div className="rea-stat-grid">
            {[
              { val: visible ? calls.toLocaleString() : '0', label: 'Calls made today', color: '#34d399' },
              { val: '3.66%', label: 'Avg. conversion rate', color: '#e0d6ff' },
              { val: visible ? String(appts) : '0', label: 'Appointments booked', color: '#fbbf24' },
              { val: '<5s', label: 'Speed to first contact', color: '#e0d6ff' },
            ].map((s, i) => (
              <div key={i} className="rea-stat-tile" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                <div className="rea-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="rea-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Live Card */}
          <div className="rea-live-card">
            <div className="rea-live-icon">
              <div className="rea-live-dot" />
            </div>
            <div>
              <p className="rea-live-title">ZIONA AI is running right now</p>
              <p className="rea-live-sub">Contacting leads, qualifying prospects, booking appointments — 24/7, no breaks.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .rea-section {
          background: #09071a;
          padding: 80px 5vw;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
        }
        .rea-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }
        .rea-left {
          min-height: 100%;
        }
        .rea-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #9b6dff;
          margin-bottom: 16px;
        }
        .rea-headline {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 800;
          line-height: 1.15;
          color: #eeeaff;
          margin-bottom: 18px;
        }
        .rea-headline-em {
          font-style: normal;
          color: #c084fc;
        }
        .rea-sub {
          font-size: 14px;
          color: rgba(255,255,255,.3);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 380px;
        }
        .rea-feat-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 40px;
        }
        .rea-feat-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,.05);
          animation: rea-fadein .5s ease both;
        }
        .rea-feat-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 11px;
          background: rgba(124,58,237,.14);
          border: 1px solid rgba(124,58,237,.28);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rea-feat-title {
          font-size: 13px;
          font-weight: 700;
          color: #ddd5f8;
          margin-bottom: 5px;
        }
        .rea-feat-desc {
          font-size: 12px;
          color: rgba(255,255,255,.25);
          line-height: 1.6;
        }
        .rea-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .rea-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: #7c3aed;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          letter-spacing: .08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background .2s, transform .15s;
        }
        .rea-btn:hover { background: #6d28d9; transform: translateY(-1px); }
        .rea-btn-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(255,255,255,.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rea-cta-note {
          font-size: 11px;
          color: rgba(255,255,255,.2);
        }
        /* Right column */
        .rea-right {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-top: 8px;
          position: sticky;
          top: 80px;
          align-self: start;
        }
        .rea-card {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03);
          padding: 22px;
          position: relative;
          overflow: hidden;
          animation: rea-fadein .6s ease both;
        }
        .rea-shimmer {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 35%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.025), transparent);
          pointer-events: none;
          animation: rea-shimmer 4s ease-in-out infinite;
        }
        .rea-card-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(255,255,255,.25);
          margin-bottom: 16px;
        }
        .rea-vs-row {
          display: flex;
          align-items: stretch;
          gap: 10px;
        }
        .rea-vs-side {
          flex: 1;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .rea-vs-isa {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
        }
        .rea-vs-ziona {
          background: rgba(124,58,237,.15);
          border: 1px solid rgba(124,58,237,.4);
        }
        .rea-border-glow {
          animation: rea-border-glow 3s ease-in-out infinite;
        }
        .rea-vs-tag {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .rea-tag-isa { color: rgba(255,255,255,.3); }
        .rea-tag-ai  { color: #a78bfa; }
        .rea-vs-price {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.1;
        }
        .rea-price-isa { color: rgba(255,255,255,.5); }
        .rea-price-ai  { color: #c084fc; }
        .rea-vs-sub {
          font-size: 11px;
          color: rgba(255,255,255,.22);
          margin-top: 2px;
        }
        .rea-sub-ai { color: rgba(124,58,237,.8); }
        .rea-vs-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,.18);
          flex-shrink: 0;
          padding: 0 2px;
        }
        .rea-check-list {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .rea-check-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rea-check-text { font-size: 11px; }
        .rea-check-bad  { color: rgba(255,255,255,.18); }
        .rea-check-good { color: rgba(124,58,237,.9); }
        /* Stat grid */
        .rea-stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          animation: rea-fadein .6s ease .2s both;
        }
        .rea-stat-tile {
          border-radius: 12px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          padding: 16px;
          animation: rea-fadein .5s ease both;
        }
        .rea-stat-val {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .rea-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,.25);
        }
        /* Live card */
        .rea-live-card {
          border-radius: 14px;
          border: 1px solid rgba(52,211,153,.2);
          background: rgba(52,211,153,.04);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          animation: rea-fadein .6s ease .36s both;
        }
        .rea-live-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 10px;
          background: rgba(52,211,153,.12);
          border: 1px solid rgba(52,211,153,.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rea-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          animation: rea-pulse 1.6s ease-in-out infinite;
        }
        .rea-live-title {
          font-size: 13px;
          font-weight: 700;
          color: #d1fae5;
          margin-bottom: 3px;
        }
        .rea-live-sub {
          font-size: 11px;
          color: rgba(52,211,153,.4);
        }
        /* Animations */
        @keyframes rea-fadein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rea-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes rea-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .3; transform: scale(1.5); }
        }
        @keyframes rea-border-glow {
          0%,100% { border-color: rgba(124,58,237,.4); }
          50%      { border-color: rgba(192,132,252,.75); }
        }
        @media (max-width: 860px) {
          .rea-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  );
}

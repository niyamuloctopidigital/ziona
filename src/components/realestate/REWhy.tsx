import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Calendar, Clock, TrendingUp, Phone } from 'lucide-react';

interface REWhyProps {
  onTry: () => void;
}

const ACTIVITY = [
  { name: 'Sarah M.', status: 'Qualified', time: '2m ago', tag: 'Booked', tagColor: '#34d399', dot: '#34d399' },
  { name: 'James R.', status: 'Outreach', time: '5m ago', tag: 'Calling', tagColor: '#a78bfa', dot: '#a78bfa' },
  { name: 'David K.', status: 'Follow-up', time: '11m ago', tag: 'Booked', tagColor: '#34d399', dot: '#6b7280' },
];

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

export default function REWhy({ onTry }: REWhyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const calls = useCountUp(1284, 1800, visible);
  const appts = useCountUp(47, 1400, visible);

  return (
    <section ref={ref} className="re-why-section">
      <div className="re-why-grid">

        {/* LEFT — Glass Dashboard */}
        <div className="re-why-left">
          {/* AI Calls Today */}
          <div className="re-glass-card re-card-calls">
            <div className="re-card-shimmer" />
            <div className="re-card-top-row">
              <div className="re-card-icon-wrap">
                <Phone size={14} color="#a78bfa" />
              </div>
              <span className="re-card-eyebrow">AI CALLS TODAY</span>
              <span className="re-badge re-badge-green">+18%</span>
            </div>
            <div className="re-calls-count">{calls.toLocaleString()}</div>
            <div className="re-progress-bar">
              <div className="re-progress-fill" style={{ width: visible ? '72%' : '0%' }} />
            </div>
            <div className="re-live-row">
              <span className="re-live-dot" />
              <span className="re-live-text">Running live — 47 calls in queue</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="re-glass-card re-card-activity">
            <div className="re-card-shimmer" />
            <span className="re-card-eyebrow" style={{ marginBottom: 14 }}>RECENT ACTIVITY</span>
            {ACTIVITY.map((a, i) => (
              <div key={i} className="re-activity-row" style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
                <span className="re-act-dot" style={{ background: a.dot }} />
                <span className="re-act-name">{a.name}</span>
                <span className="re-act-status">— {a.status}</span>
                <span className="re-act-time">{a.time}</span>
                <span className="re-act-tag" style={{ color: a.tagColor, borderColor: a.tagColor + '44', background: a.tagColor + '14' }}>
                  {a.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="re-bottom-row">
            {/* Appointments Booked */}
            <div className="re-glass-card re-card-appts">
              <div className="re-card-shimmer" />
              <div className="re-card-top-row">
                <div className="re-card-icon-wrap">
                  <Calendar size={13} color="#a78bfa" />
                </div>
                <span className="re-card-eyebrow">APPOINTMENTS BOOKED</span>
                <span className="re-badge re-badge-purple">Live</span>
              </div>
              <div className="re-appts-count">{appts} <span className="re-appts-sub">today</span></div>
            </div>

            {/* Conversion Rate */}
            <div className="re-glass-card re-card-conv">
              <div className="re-card-shimmer" />
              <div className="re-card-top-row">
                <div className="re-card-icon-wrap" style={{ background: 'rgba(251,191,36,.1)', border: '1px solid rgba(251,191,36,.25)' }}>
                  <TrendingUp size={13} color="#fbbf24" />
                </div>
                <span className="re-card-eyebrow">CONVERSION RATE</span>
                <span className="re-badge re-badge-amber">+0.8%</span>
              </div>
              <div className="re-conv-count">3.66%</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className="re-why-right">
          <p className="re-why-eyebrow">WHY IT WORKS</p>
          <h2 className="re-why-headline">
            Stop Chasing Leads.<br />
            <em className="re-why-em">Start Closing Deals.</em>
          </h2>
          <p className="re-why-sub">
            ZIONA AI is your always-on inside sales agent — making calls, qualifying prospects, and filling your schedule while you're out on showings.
          </p>

          <div className="re-feat-list">
            {features.map((f, i) => (
              <div key={i} className="re-feat-row" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="re-feat-icon">
                  <f.Icon size={15} color="#a78bfa" />
                </div>
                <div>
                  <p className="re-feat-title">{f.title}</p>
                  <p className="re-feat-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="re-why-cta-row">
            <button className="re-why-btn" onClick={onTry}>
              TRY AI FOR REAL ESTATE
              <span className="re-why-btn-icon"><ArrowUpRight size={13} /></span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .re-why-section {
          background: #0a0a12;
          padding: 80px 5vw;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
        }
        .re-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        /* ── Glass cards ── */
        .re-why-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .re-glass-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          padding: 20px 22px;
          animation: re-why-fadein 0.6s ease both;
        }
        .re-card-shimmer {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.025), transparent);
          pointer-events: none;
          animation: re-shimmer 5s ease-in-out infinite;
        }
        .re-card-top-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .re-card-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(124,58,237,0.14);
          border: 1px solid rgba(124,58,237,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .re-card-eyebrow {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .14em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          flex: 1;
        }
        .re-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 99px;
          letter-spacing: .04em;
        }
        .re-badge-green { background: rgba(52,211,153,.15); color: #34d399; border: 1px solid rgba(52,211,153,.3); }
        .re-badge-purple { background: rgba(124,58,237,.18); color: #a78bfa; border: 1px solid rgba(124,58,237,.35); }
        .re-badge-amber { background: rgba(251,191,36,.12); color: #fbbf24; border: 1px solid rgba(251,191,36,.3); }
        /* Calls */
        .re-calls-count {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin-bottom: 12px;
        }
        .re-progress-bar {
          height: 4px;
          background: rgba(255,255,255,0.07);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .re-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #7c3aed, #a78bfa);
          border-radius: 4px;
          transition: width 1.6s cubic-bezier(.4,0,.2,1);
        }
        .re-live-row {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .re-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          flex-shrink: 0;
          animation: re-pulse 1.6s ease-in-out infinite;
        }
        .re-live-text {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
        }
        /* Activity */
        .re-card-activity { padding-bottom: 16px; }
        .re-activity-row {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          animation: re-why-fadein .5s ease both;
        }
        .re-activity-row:last-child { border-bottom: none; }
        .re-act-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .re-act-name { font-size: 12px; font-weight: 600; color: rgba(255,255,255,.75); }
        .re-act-status { font-size: 11px; color: rgba(255,255,255,.3); flex: 1; }
        .re-act-time { font-size: 10px; color: rgba(255,255,255,.2); margin-right: 4px; }
        .re-act-tag {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 9px;
          border-radius: 99px;
          border: 1px solid;
          letter-spacing: .04em;
          flex-shrink: 0;
        }
        /* Bottom row */
        .re-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .re-appts-count {
          font-size: 30px;
          font-weight: 800;
          color: #34d399;
        }
        .re-appts-sub {
          font-size: 14px;
          font-weight: 500;
          color: rgba(52,211,153,.6);
        }
        .re-conv-count {
          font-size: 30px;
          font-weight: 800;
          color: #fbbf24;
        }
        /* ── Right side ── */
        .re-why-right {}
        .re-why-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .16em;
          color: #9b6dff;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .re-why-headline {
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 800;
          line-height: 1.15;
          color: #f0ecff;
          margin-bottom: 18px;
        }
        .re-why-em {
          font-style: normal;
          color: #c084fc;
        }
        .re-why-sub {
          font-size: 14px;
          color: rgba(255,255,255,.35);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 400px;
        }
        .re-feat-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 36px;
        }
        .re-feat-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,.05);
          animation: re-why-fadein .5s ease both;
        }
        .re-feat-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 10px;
          background: rgba(124,58,237,.12);
          border: 1px solid rgba(124,58,237,.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .re-feat-title {
          font-size: 13px;
          font-weight: 700;
          color: #ddd5f8;
          margin-bottom: 4px;
        }
        .re-feat-desc {
          font-size: 12px;
          color: rgba(255,255,255,.28);
          line-height: 1.6;
        }
        .re-why-cta-row { display: flex; align-items: center; gap: 16px; }
        .re-why-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: #7c3aed;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          letter-spacing: .08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background .2s, transform .15s;
        }
        .re-why-btn:hover { background: #6d28d9; transform: translateY(-1px); }
        .re-why-btn-icon {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(255,255,255,.2);
          display: flex; align-items: center; justify-content: center;
        }
        /* ── Animations ── */
        @keyframes re-why-fadein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes re-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
        @keyframes re-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .3; transform: scale(1.6); }
        }
        .re-card-calls  { animation-delay: .05s; }
        .re-card-activity { animation-delay: .18s; }
        .re-card-appts  { animation-delay: .3s; }
        .re-card-conv   { animation-delay: .38s; }
        @media (max-width: 860px) {
          .re-why-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  );
}

const features = [
  {
    Icon: Calendar,
    title: 'Listing Appointments on Autopilot',
    desc: 'Calls seller leads, qualifies motivation and timeline, and books listing appointments directly into your calendar.',
  },
  {
    Icon: Clock,
    title: 'Instant Speed-to-Lead',
    desc: 'Every new lead is contacted within seconds of enquiring. ZIONA never lets a hot lead cool down.',
  },
  {
    Icon: TrendingUp,
    title: 'Real-Time Pipeline Intelligence',
    desc: 'Know exactly where each lead stands — motivation, timeframe, and engagement — so every conversation is informed.',
  },
];

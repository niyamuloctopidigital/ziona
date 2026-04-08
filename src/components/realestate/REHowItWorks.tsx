import { ArrowUpRight } from 'lucide-react';

interface REHowItWorksProps {
  onBook: () => void;
}

export default function REHowItWorks({ onBook }: REHowItWorksProps) {
  return (
    <section style={S.section} id="re-how-it-works">
      <div style={S.left}>
        <div style={S.bgOrb} />
        <div style={S.bgOrb2} />

        <div style={S.cardsWrap}>
          <div style={S.glassCard} className="re-how-gc re-how-gc1">
            <div style={S.shimmerLine} className="re-how-shimmer" />
            <div style={S.cardRow}>
              <div style={{ ...S.cardIcon, ...S.ciPurple }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2C5.79 2 4 3.79 4 6c0 1.48.81 2.77 2 3.46V11h4V9.46C11.19 8.77 12 7.48 12 6c0-2.21-1.79-4-4-4z" stroke="#a78bfa" strokeWidth="1.2" strokeLinejoin="round"/>
                  <path d="M6 13h4M6.5 11.5h3" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={S.cardLabel}>AI Calls Today</div>
                <div style={S.cardValue}>1,284</div>
              </div>
              <div style={{ ...S.cardBadge, ...S.badgeGreen }}>+18%</div>
            </div>
            <div style={S.progressBg}>
              <div style={S.progressFill} />
            </div>
            <div style={S.liveRow}>
              <div style={S.liveDot} className="re-how-live-dot" />
              <span style={S.liveText}>Running live — 47 calls in queue</span>
            </div>
          </div>

          <div style={S.glassCard} className="re-how-gc re-how-gc2">
            <div style={S.shimmerLine} className="re-how-shimmer" />
            <div style={{ ...S.cardLabel, marginBottom: 10 }}>Recent Activity</div>
            <div style={S.activityRows}>
              {[
                { dot: 'g', name: 'Sarah M. — Qualified', time: '2m ago', status: 'Booked', calling: false },
                { dot: 'p', name: 'James R. — Outreach',  time: '5m ago', status: 'Calling', calling: true },
                { dot: 'g', name: 'David K. — Follow-up', time: '11m ago', status: 'Booked', calling: false },
              ].map((r) => (
                <div key={r.name} style={S.actRow}>
                  <div style={{ ...S.actDot, background: r.dot === 'g' ? '#34d399' : '#a78bfa' }} />
                  <span style={S.actName}>{r.name}</span>
                  <span style={S.actTime}>{r.time}</span>
                  <span style={r.calling ? { ...S.actStatus, ...S.actStatusCalling } : S.actStatus}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={S.glassCard} className="re-how-gc re-how-gc3">
            <div style={S.shimmerLine} className="re-how-shimmer" />
            <div style={S.cardRow}>
              <div style={{ ...S.cardIcon, ...S.ciGreen }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="10" rx="2" stroke="#34d399" strokeWidth="1.2"/>
                  <path d="M5 1.5V4M11 1.5V4M2 6.5h12" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="5.5" cy="9.5" r="1" fill="#34d399"/>
                  <circle cx="8" cy="9.5" r="1" fill="#34d399"/>
                  <circle cx="10.5" cy="9.5" r="1" fill="#34d399"/>
                </svg>
              </div>
              <div>
                <div style={S.cardLabel}>Appointments Booked</div>
                <div style={{ ...S.cardValue, color: '#34d399' }}>47 today</div>
              </div>
              <div style={{ ...S.cardBadge, ...S.badgeBlue }}>Live</div>
            </div>
          </div>

          <div style={S.glassCard} className="re-how-gc re-how-gc4">
            <div style={S.shimmerLine} className="re-how-shimmer" />
            <div style={S.cardRow}>
              <div style={{ ...S.cardIcon, ...S.ciAmber }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 11.5L5.5 7.5L8.5 9.5L12 5" stroke="#fbbf24" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5h2v2" stroke="#fbbf24" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={S.cardLabel}>Conversion Rate</div>
                <div style={{ ...S.cardValue, color: '#fbbf24' }}>3.66%</div>
              </div>
              <div style={{ ...S.cardBadge, ...S.badgeGreen }}>+0.8%</div>
            </div>
          </div>
        </div>
      </div>

      <div style={S.right}>
        <p style={S.eyebrow}>Why it works</p>
        <h2 style={S.headline}>
          Stop Chasing Leads.<br />
          <span style={S.headlineSpan}>Start Closing Deals.</span>
        </h2>
        <p style={S.bodyText}>
          ZIONA AI is your always-on inside sales agent — making calls, qualifying prospects, and filling your schedule while you're out on showings.
        </p>

        <div style={S.features}>
          {feats.map((f, i) => (
            <div key={i} style={S.feat} className={`re-how-feat re-how-feat-${i + 1}`}>
              <div style={S.featIcon}>
                <f.svg />
              </div>
              <div>
                <p style={S.featTitle}>{f.title}</p>
                <p style={S.featBody}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button style={S.ctaBtn} onClick={onBook}>
          Try AI for Real Estate
          <span style={S.arrowBadge}><ArrowUpRight size={11} /></span>
        </button>
      </div>

      <style>{`
        @keyframes re-how-drop {
          0%   { opacity: 0; transform: translateY(-40px) scale(.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes re-how-fadein {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes re-how-pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.6); opacity: .4; }
        }
        @keyframes re-how-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .re-how-gc { opacity: 0; }
        .re-how-gc1 { animation: re-how-drop .55s cubic-bezier(.22,1,.36,1) .1s both; }
        .re-how-gc2 { animation: re-how-drop .55s cubic-bezier(.22,1,.36,1) .28s both; }
        .re-how-gc3 { animation: re-how-drop .55s cubic-bezier(.22,1,.36,1) .46s both; }
        .re-how-gc4 { animation: re-how-drop .55s cubic-bezier(.22,1,.36,1) .64s both; }
        .re-how-shimmer { animation: re-how-shimmer 3.5s ease-in-out infinite; }
        .re-how-live-dot { animation: re-how-pulse 1.6s ease-in-out infinite; }
        .re-how-feat { animation: re-how-fadein .5s ease both; }
        .re-how-feat-1 { animation-delay: .1s; }
        .re-how-feat-2 { animation-delay: .22s; }
        .re-how-feat-3 { animation-delay: .34s; }
      `}</style>
    </section>
  );
}

const feats = [
  {
    title: 'Listing Appointments on Autopilot',
    desc: 'Calls seller leads, qualifies motivation and timeline, and books listing appointments directly into your calendar.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke="#9b6dff" strokeWidth="1.3"/>
        <path d="M5 1.5V4M11 1.5V4M2 6.5h12" stroke="#9b6dff" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Instant Speed-to-Lead',
    desc: 'Every new lead is contacted within seconds of enquiring. ZIONA never lets a hot lead cool down.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v5l3 2" stroke="#9b6dff" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="6" stroke="#9b6dff" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    title: 'Real-Time Pipeline Intelligence',
    desc: 'Know exactly where each lead stands — motivation, timeframe, and engagement — so every conversation is informed.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 11.5L5.5 7.5L8.5 9.5L12 5" stroke="#9b6dff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5h2v2" stroke="#9b6dff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const S: Record<string, React.CSSProperties> = {
  section: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: 580,
    borderRadius: 18,
    overflow: 'hidden',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    margin: '0 5vw 5rem',
  },
  left: {
    background: '#080612',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '36px 28px',
    position: 'relative',
    overflow: 'hidden',
  },
  bgOrb: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124,58,237,.22) 0%, transparent 65%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    pointerEvents: 'none',
  },
  bgOrb2: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(192,132,252,.1) 0%, transparent 70%)',
    top: '20%',
    left: '10%',
    pointerEvents: 'none',
  },
  cardsWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    width: '100%',
    maxWidth: 270,
    position: 'relative',
    zIndex: 2,
  },
  glassCard: {
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,.1)',
    background: 'rgba(255,255,255,.04)',
    backdropFilter: 'blur(12px)',
    padding: '16px 18px',
    position: 'relative',
    overflow: 'hidden',
  },
  shimmerLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '40%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.04), transparent)',
    pointerEvents: 'none',
  },
  cardRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  cardIcon: {
    width: 36,
    height: 36,
    flexShrink: 0,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ciPurple: { background: 'rgba(124,58,237,.25)', border: '1px solid rgba(124,58,237,.4)' },
  ciGreen:  { background: 'rgba(52,211,153,.15)',  border: '1px solid rgba(52,211,153,.3)' },
  ciAmber:  { background: 'rgba(251,191,36,.12)',  border: '1px solid rgba(251,191,36,.25)' },
  cardLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,.4)',
    marginBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: '.08em',
  },
  cardValue: {
    fontSize: 17,
    fontWeight: 700,
    color: '#e8deff',
  },
  cardBadge: {
    marginLeft: 'auto',
    fontSize: 10,
    fontWeight: 600,
    padding: '3px 8px',
    borderRadius: 20,
  },
  badgeGreen: { background: 'rgba(52,211,153,.15)',  color: '#34d399', border: '1px solid rgba(52,211,153,.25)' },
  badgeBlue:  { background: 'rgba(96,165,250,.12)',  color: '#93c5fd', border: '1px solid rgba(96,165,250,.2)' },
  liveRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#34d399',
    flexShrink: 0,
  },
  liveText: {
    fontSize: 11,
    color: 'rgba(255,255,255,.3)',
  },
  progressBg: {
    height: 4,
    borderRadius: 4,
    background: 'rgba(255,255,255,.07)',
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    background: 'linear-gradient(90deg, #7c3aed, #c084fc)',
    width: '73%',
  },
  activityRows: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginTop: 4,
  },
  actRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  actDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    flexShrink: 0,
  },
  actName: {
    fontSize: 11,
    color: 'rgba(255,255,255,.55)',
    flex: 1,
  },
  actTime: {
    fontSize: 10,
    color: 'rgba(255,255,255,.22)',
  },
  actStatus: {
    fontSize: 10,
    padding: '2px 7px',
    borderRadius: 10,
    background: 'rgba(52,211,153,.12)',
    color: '#34d399',
  },
  actStatusCalling: {
    background: 'rgba(167,139,250,.12)',
    color: '#a78bfa',
  },
  right: {
    background: '#100d1e',
    padding: '48px 44px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '.15em',
    textTransform: 'uppercase',
    color: '#9b6dff',
    marginBottom: 16,
  },
  headline: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#eeeaff',
    marginBottom: 12,
  },
  headlineSpan: {
    color: '#bf7fff',
  },
  bodyText: {
    fontSize: 13,
    color: '#6a5f8a',
    lineHeight: 1.65,
    marginBottom: 32,
    maxWidth: 320,
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: 22,
    marginBottom: 36,
  },
  feat: {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
  },
  featIcon: {
    width: 38,
    height: 38,
    flexShrink: 0,
    borderRadius: 10,
    background: 'rgba(155,109,255,.1)',
    border: '1px solid rgba(155,109,255,.22)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: '#d8cffa',
    marginBottom: 4,
  },
  featBody: {
    fontSize: 12,
    color: '#574e73',
    lineHeight: 1.55,
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 26px',
    background: '#7c3aed',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    color: '#fff',
    letterSpacing: '.07em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    width: 'fit-content',
  },
  arrowBadge: {
    width: 18,
    height: 18,
    borderRadius: '50%',
    background: 'rgba(255,255,255,.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

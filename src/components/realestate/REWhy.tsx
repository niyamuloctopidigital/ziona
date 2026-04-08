import { Calendar, Clock, TrendingUp, ArrowUpRight, Lightbulb } from 'lucide-react';

interface REWhyProps {
  onTry: () => void;
}

const features = [
  {
    icon: Calendar,
    title: 'Listing Appointments on Autopilot',
    desc: 'Calls seller leads, qualifies motivation and timeline, and books listing appointments directly into your calendar.',
  },
  {
    icon: Clock,
    title: 'Instant Speed-to-Lead',
    desc: 'Every new lead is contacted within seconds of enquiring. ZIONA never lets a hot lead cool down.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Pipeline Intelligence',
    desc: 'Know exactly where each lead stands — motivation, timeframe, and engagement — so every conversation is informed.',
  },
];

export default function REWhy({ onTry }: REWhyProps) {
  return (
    <section style={S.section}>
      <div style={S.left}>
        <div style={S.orb1} />
        <div style={S.orb2} />

        <div style={S.cardsWrap}>
          <div style={{ ...S.card, animationDelay: '0.1s' }} className="re-why-card">
            <div style={S.cardShimmer} className="re-why-shimmer" />
            <div style={S.cardRow}>
              <div style={{ ...S.cardIcon, ...S.ciPurple }}>
                <Lightbulb size={15} color="#a78bfa" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={S.cardLabel}>AI Calls Today</div>
                <div style={S.cardValue}>1,284</div>
              </div>
              <span style={{ ...S.badge, ...S.badgeGreen }}>+18%</span>
            </div>
            <div style={S.progressBg}>
              <div style={S.progressFill} />
            </div>
            <div style={S.liveRow}>
              <div style={S.liveDot} className="re-why-live-dot" />
              <span style={S.liveText}>Running live — 47 calls in queue</span>
            </div>
          </div>

          <div style={{ ...S.card, animationDelay: '0.28s' }} className="re-why-card">
            <div style={S.cardShimmer} className="re-why-shimmer" />
            <div style={S.actLabel}>Recent Activity</div>
            <div style={S.actRows}>
              {[
                { dot: '#34d399', name: 'Sarah M. — Qualified', time: '2m ago', status: 'Booked', calling: false },
                { dot: '#a78bfa', name: 'James R. — Outreach', time: '5m ago', status: 'Calling', calling: true },
                { dot: '#34d399', name: 'David K. — Follow-up', time: '11m ago', status: 'Booked', calling: false },
              ].map((a, i) => (
                <div key={i} style={S.actRow}>
                  <div style={{ ...S.actDot, background: a.dot }} />
                  <span style={S.actName}>{a.name}</span>
                  <span style={S.actTime}>{a.time}</span>
                  <span style={a.calling ? { ...S.actStatus, ...S.actStatusCalling } : S.actStatus}>{a.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...S.card, animationDelay: '0.46s' }} className="re-why-card">
            <div style={S.cardShimmer} className="re-why-shimmer" />
            <div style={S.cardRow}>
              <div style={{ ...S.cardIcon, ...S.ciGreen }}>
                <Calendar size={15} color="#34d399" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={S.cardLabel}>Appointments Booked</div>
                <div style={{ ...S.cardValue, color: '#34d399' }}>47 today</div>
              </div>
              <span style={{ ...S.badge, ...S.badgeBlue }}>Live</span>
            </div>
          </div>

          <div style={{ ...S.card, animationDelay: '0.64s' }} className="re-why-card">
            <div style={S.cardShimmer} className="re-why-shimmer" />
            <div style={S.cardRow}>
              <div style={{ ...S.cardIcon, ...S.ciAmber }}>
                <TrendingUp size={15} color="#fbbf24" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={S.cardLabel}>Conversion Rate</div>
                <div style={{ ...S.cardValue, color: '#fbbf24' }}>3.66%</div>
              </div>
              <span style={{ ...S.badge, ...S.badgeGreen }}>+0.8%</span>
            </div>
          </div>
        </div>
      </div>

      <div style={S.right}>
        <p style={S.eyebrow}>Why it works</p>
        <h2 style={S.headline}>
          Stop Chasing Leads.<br />
          <span style={S.headlineAccent}>Start Closing Deals.</span>
        </h2>
        <p style={S.bodyText}>
          ZIONA AI is your always-on inside sales agent — making calls, qualifying prospects, and filling your schedule while you're out on showings.
        </p>

        <div style={S.features}>
          {features.map((f, i) => (
            <div key={i} style={S.feat} className="re-why-feat">
              <div style={S.featIcon}>
                <f.icon size={15} color="#9b6dff" />
              </div>
              <div>
                <p style={S.featTitle}>{f.title}</p>
                <p style={S.featBody}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button style={S.cta} onClick={onTry}>
          TRY AI FOR REAL ESTATE
          <span style={S.arrowBadge}><ArrowUpRight size={12} /></span>
        </button>
      </div>

      <style>{`
        @keyframes re-why-drop {
          from { opacity: 0; transform: translateY(-32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes re-why-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes re-why-pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.7); opacity: .35; }
        }
        @keyframes re-why-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .re-why-card {
          animation: re-why-drop .55s cubic-bezier(.22,1,.36,1) both;
        }
        .re-why-shimmer {
          animation: re-why-shimmer 3.5s ease-in-out infinite;
        }
        .re-why-live-dot {
          animation: re-why-pulse 1.6s ease-in-out infinite;
        }
        .re-why-feat {
          animation: re-why-fade .5s ease both;
        }
        .re-why-feat:nth-child(1) { animation-delay: .1s; }
        .re-why-feat:nth-child(2) { animation-delay: .22s; }
        .re-why-feat:nth-child(3) { animation-delay: .34s; }
      `}</style>
    </section>
  );
}

const S: Record<string, React.CSSProperties> = {
  section: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: 580,
    borderRadius: 18,
    overflow: 'hidden',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
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
  orb1: {
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
  orb2: {
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
  card: {
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,.1)',
    background: 'rgba(255,255,255,.04)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '16px 18px',
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties,
  cardShimmer: {
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
  ciGreen:  { background: 'rgba(52,211,153,.15)', border: '1px solid rgba(52,211,153,.3)' },
  ciBlue:   { background: 'rgba(96,165,250,.15)', border: '1px solid rgba(96,165,250,.3)' },
  ciAmber:  { background: 'rgba(251,191,36,.12)', border: '1px solid rgba(251,191,36,.25)' },
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
  badge: {
    fontSize: 10,
    fontWeight: 600,
    padding: '3px 8px',
    borderRadius: 20,
  },
  badgeGreen: { background: 'rgba(52,211,153,.15)', color: '#34d399', border: '1px solid rgba(52,211,153,.25)' },
  badgeBlue:  { background: 'rgba(96,165,250,.12)', color: '#93c5fd', border: '1px solid rgba(96,165,250,.2)' },
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
  actLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,.4)',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: '.08em',
  },
  actRows: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
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
  headlineAccent: {
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
  cta: {
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

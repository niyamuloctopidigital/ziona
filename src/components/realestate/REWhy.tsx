import { ArrowUpRight } from 'lucide-react';

interface REWhyProps {
  onTry: () => void;
}

export default function REWhy({ onTry }: REWhyProps) {
  return (
    <section style={S.section}>
      <div style={S.topGrid}>
        <div>
          <p style={S.eyebrow}>The Advantages</p>
          <h2 style={S.headline}>
            Why Top-Producing<br />Agents Choose<br />
            <em style={S.headlineEm}>ZIONA AI</em>
          </h2>
          <p style={S.subtext}>
            Whether you're a solo agent or running a team, ZIONA AI handles the prospecting volume that no human team can match — at a price that makes sense.
          </p>

          <div style={S.featList}>
            {features.map((f, i) => (
              <div key={i} style={S.featRow} className="re-why-feat-row">
                <div style={S.fi}>
                  <f.svg />
                </div>
                <div>
                  <p style={S.ft}>{f.title}</p>
                  <p style={S.fb}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={S.rightCol}>
          <div style={S.compareCard} className="re-why-compare-card">
            <div style={S.compareShimmer} className="re-why-shimmer" />
            <p style={S.ccLabel}>Cost comparison</p>
            <div style={S.vsRow}>
              <div style={{ ...S.vsSide, ...S.vsIsa }}>
                <span style={{ ...S.vsTag, ...S.vsTagIsa }}>Human ISA</span>
                <span style={{ ...S.vsPrice, ...S.vsPriceIsa }}>$40K–$70K</span>
                <span style={{ ...S.vsSub }}>per year + benefits</span>
                <div style={S.checkList}>
                  {['Limited hours', 'Sick days & turnover', 'Training time'].map((t) => (
                    <div key={t} style={S.checkRow}>
                      <span style={{ color: 'rgba(248,113,113,.5)' }}>✕</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,.2)' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={S.vsDivider}>VS</div>
              <div style={{ ...S.vsSide, ...S.vsZiona }} className="re-why-ziona-side">
                <span style={{ ...S.vsTag, ...S.vsTagAi }}>ZIONA AI</span>
                <span style={{ ...S.vsPrice, ...S.vsPriceAi }}>Fraction</span>
                <span style={{ ...S.vsSub, color: '#7c5cc4' }}>of that cost</span>
                <div style={S.checkList}>
                  {['Works 24/7', 'Never misses a lead', 'Instant deployment'].map((t) => (
                    <div key={t} style={S.checkRow}>
                      <span style={{ color: '#a78bfa' }}>✓</span>
                      <span style={{ fontSize: 11, color: '#7c5cc4' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={S.statGrid} className="re-why-stat-grid">
            {[
              { val: '1,284', label: 'Calls made today', green: true },
              { val: '3.66%', label: 'Avg. conversion rate', green: false },
              { val: '47', label: 'Appointments booked', amber: true },
              { val: '<5s', label: 'Speed to first contact', green: false },
            ].map((s, i) => (
              <div key={i} style={S.statTile} className="re-why-stat-tile">
                <div style={{ ...S.stVal, ...(s.green ? { color: '#34d399' } : s.amber ? { color: '#fbbf24' } : {}) }}>
                  {s.val}
                </div>
                <div style={S.stLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={S.liveCard} className="re-why-live-card">
            <div style={S.liveIcon}>
              <div style={S.liveDot} className="re-why-live-dot" />
            </div>
            <div>
              <p style={S.liveTitle}>ZIONA AI is running right now</p>
              <p style={S.liveSub}>Contacting leads, qualifying prospects, booking appointments — 24/7, no breaks.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={S.ctaRow}>
        <button style={S.ctaBtn} onClick={onTry}>
          Try AI for Real Estate
          <span style={S.ctaArrow}><ArrowUpRight size={12} /></span>
        </button>
        <span style={S.ctaNote}>No credit card required &nbsp;·&nbsp; Live in 24 hours</span>
      </div>

      <style>{`
        @keyframes re-why-fadein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes re-why-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
        @keyframes re-why-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .3; transform: scale(1.5); }
        }
        @keyframes re-why-border-glow {
          0%,100% { border-color: rgba(124,58,237,.4); }
          50%      { border-color: rgba(192,132,252,.75); }
        }
        .re-why-feat-row {
          animation: re-why-fadein .5s ease both;
        }
        .re-why-feat-row:nth-child(1) { animation-delay: .05s; }
        .re-why-feat-row:nth-child(2) { animation-delay: .14s; }
        .re-why-feat-row:nth-child(3) { animation-delay: .23s; }
        .re-why-feat-row:nth-child(4) { animation-delay: .32s; }
        .re-why-feat-row:nth-child(5) { animation-delay: .41s; }
        .re-why-shimmer {
          animation: re-why-shimmer 4s ease-in-out infinite;
        }
        .re-why-live-dot {
          animation: re-why-pulse 1.6s ease-in-out infinite;
        }
        .re-why-ziona-side {
          animation: re-why-border-glow 3s ease-in-out infinite;
        }
        .re-why-compare-card {
          animation: re-why-fadein .6s ease .2s both;
        }
        .re-why-stat-grid {
          animation: re-why-fadein .6s ease .36s both;
        }
        .re-why-live-card {
          animation: re-why-fadein .6s ease .5s both;
        }
      `}</style>
    </section>
  );
}

const CheckSVG = ({ d }: { d: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={d} stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    title: 'More Leads. Less Manual Work.',
    desc: 'ZIONA AI runs 24/7 through your lead lists — outbound prospecting and inbound answering — without you dialing a single number.',
    svg: () => <CheckSVG d="M3 8l3 3 7-7" />,
  },
  {
    title: 'Your Database Gets Smarter Over Time',
    desc: 'Every call enriches your CRM with validated contact data. Your number accuracy compounds and list quality grows automatically.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <ellipse cx="8" cy="8" rx="6" ry="6" stroke="#a78bfa" strokeWidth="1.3" />
        <path d="M8 5v3l2 2" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Zero Leads Fall Through the Cracks',
    desc: 'Every inbound enquiry gets an instant response. Every outbound lead is followed up consistently. No voicemail. No dropped opportunities.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="8" cy="8" r="2" stroke="#a78bfa" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'Scale Without Growing Your Payroll',
    desc: 'A top-performing ISA costs $40K–$70K a year. ZIONA AI gives you a full inside-sales team output for a fraction of the cost.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="6" width="3" height="7" rx="1" fill="#a78bfa" />
        <rect x="6.5" y="4" width="3" height="9" rx="1" fill="#a78bfa" />
        <rect x="11" y="2" width="3" height="11" rx="1" fill="#a78bfa" />
      </svg>
    ),
  },
  {
    title: 'Conversations That Sound Human',
    desc: 'Trained on real estate scripts and conversational best practices — every call sounds natural, professional, and on-brand.',
    svg: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 12.5C3 10 5 8.5 8 8.5s5 1.5 5 4" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="8" cy="5" r="2.5" stroke="#a78bfa" strokeWidth="1.3" />
      </svg>
    ),
  },
];

const S: Record<string, React.CSSProperties> = {
  section: {
    background: '#09071a',
    padding: '72px 56px',
    borderRadius: 18,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    margin: '0 5vw 5rem',
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64,
    alignItems: 'start',
    marginBottom: 64,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '.16em',
    textTransform: 'uppercase',
    color: '#9b6dff',
    marginBottom: 16,
  },
  headline: {
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1.15,
    color: '#eeeaff',
    marginBottom: 18,
  },
  headlineEm: {
    fontStyle: 'normal',
    color: '#c084fc',
  },
  subtext: {
    fontSize: 14,
    color: '#5a5175',
    lineHeight: 1.7,
    marginBottom: 40,
    maxWidth: 380,
  },
  featList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  featRow: {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start',
    padding: '18px 0',
    borderBottom: '1px solid rgba(255,255,255,.05)',
  },
  fi: {
    width: 40,
    height: 40,
    flexShrink: 0,
    borderRadius: 11,
    background: 'rgba(124,58,237,.14)',
    border: '1px solid rgba(124,58,237,.28)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ft: {
    fontSize: 13,
    fontWeight: 700,
    color: '#ddd5f8',
    marginBottom: 5,
  },
  fb: {
    fontSize: 12,
    color: '#4e4668',
    lineHeight: 1.6,
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingTop: 8,
  },
  compareCard: {
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,.08)',
    background: 'rgba(255,255,255,.03)',
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  compareShimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '35%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.03), transparent)',
    pointerEvents: 'none',
  },
  ccLabel: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.3)',
    marginBottom: 18,
  },
  vsRow: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 12,
  },
  vsSide: {
    flex: 1,
    borderRadius: 12,
    padding: 18,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  vsIsa: {
    background: 'rgba(255,255,255,.04)',
    border: '1px solid rgba(255,255,255,.08)',
  },
  vsZiona: {
    background: 'rgba(124,58,237,.15)',
    border: '1px solid rgba(124,58,237,.4)',
  },
  vsTag: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
  },
  vsTagIsa: { color: 'rgba(255,255,255,.3)' },
  vsTagAi: { color: '#a78bfa' },
  vsPrice: {
    fontSize: 22,
    fontWeight: 800,
    lineHeight: 1.1,
  },
  vsPriceIsa: { color: 'rgba(255,255,255,.5)' },
  vsPriceAi: { color: '#c084fc' },
  vsSub: {
    fontSize: 11,
    color: 'rgba(255,255,255,.25)',
    marginTop: 2,
  },
  vsDivider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 700,
    color: 'rgba(255,255,255,.2)',
    flexShrink: 0,
    padding: '0 2px',
  },
  checkList: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  checkRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  statGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
  },
  statTile: {
    borderRadius: 12,
    background: 'rgba(255,255,255,.03)',
    border: '1px solid rgba(255,255,255,.07)',
    padding: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  stVal: {
    fontSize: 24,
    fontWeight: 800,
    color: '#e0d6ff',
    marginBottom: 4,
  },
  stLabel: {
    fontSize: 11,
    color: '#433d5c',
  },
  liveCard: {
    borderRadius: 16,
    border: '1px solid rgba(52,211,153,.2)',
    background: 'rgba(52,211,153,.04)',
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  },
  liveIcon: {
    width: 38,
    height: 38,
    flexShrink: 0,
    borderRadius: 10,
    background: 'rgba(52,211,153,.12)',
    border: '1px solid rgba(52,211,153,.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#34d399',
  },
  liveTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#d1fae5',
    marginBottom: 3,
  },
  liveSub: {
    fontSize: 11,
    color: '#2d6b52',
  },
  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '13px 28px',
    background: '#7c3aed',
    borderRadius: 9,
    fontSize: 12,
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
  },
  ctaArrow: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: 'rgba(255,255,255,.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaNote: {
    fontSize: 11,
    color: '#3d3557',
  },
};

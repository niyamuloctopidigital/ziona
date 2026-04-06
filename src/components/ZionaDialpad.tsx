import { useState, useEffect, useRef, useCallback } from 'react';

const PHRASES = [
  '"Hi, this is ZIONA — thanks for trying our voice quality demo!"',
  '"Are you hoping to move before end of year, or exploring options?"',
  '"Great, I have Thursday at 2pm or Friday at 10am — which works?"',
  '"Perfect, I\'ll get that booked in for you right now."',
];

function fmt(raw: string): string {
  const d = raw.replace(/\D/g, '');
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
}

function getInitials(name: string): string {
  return name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

const DIAL_KEYS: { digit: string; sub: string }[] = [
  { digit: '1', sub: ' ' }, { digit: '2', sub: 'ABC' }, { digit: '3', sub: 'DEF' },
  { digit: '4', sub: 'GHI' }, { digit: '5', sub: 'JKL' }, { digit: '6', sub: 'MNO' },
  { digit: '7', sub: 'PQRS' }, { digit: '8', sub: 'TUV' }, { digit: '9', sub: 'WXYZ' },
  { digit: '*', sub: ' ' }, { digit: '0', sub: '+' }, { digit: '#', sub: ' ' },
];

const WAVE_HEIGHTS = [3, 6, 9, 13, 8, 11, 15, 10, 7, 12, 9, 14, 6, 10, 8, 13, 5, 9];

export default function ZionaDialpad() {
  const [num, setNum] = useState('');
  const [numFlash, setNumFlash] = useState(false);
  const [state, setState] = useState<'dial' | 'name' | 'calling'>('dial');
  const [nameVal, setNameVal] = useState('');
  const [callerName, setCallerName] = useState('');
  const [secs, setSecs] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [clock, setClock] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(`${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`);
    };
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (state !== 'calling') return;
    timerRef.current = setInterval(() => {
      setSecs(s => s + 1);
      setPhraseIdx(p => {
        return p;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [state]);

  useEffect(() => {
    if (state !== 'calling') return;
    const id = setInterval(() => {
      setPhraseIdx(p => (p + 1) % PHRASES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [state]);

  const pressKey = useCallback((k: string) => {
    setNum(prev => {
      if (prev.replace(/\D/g, '').length >= 10) return prev;
      return prev + k;
    });
  }, []);

  const backspace = useCallback(() => {
    setNum(prev => prev.slice(0, -1));
  }, []);

  const pressCall = useCallback(() => {
    if (num.replace(/\D/g, '').length < 7) {
      setNumFlash(true);
      setTimeout(() => setNumFlash(false), 700);
      return;
    }
    setState('name');
  }, [num]);

  const submitName = useCallback(async () => {
    const name = nameVal.trim();
    const phone = num.replace(/\D/g, '');
    setCallerName(name);
    setState('calling');
    setSecs(0);
    setPhraseIdx(0);
    try {
      const url = import.meta.env.VITE_WEBHOOK_URL;
      if (url) {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone }),
        });
      }
    } catch { }
  }, [nameVal, num]);

  const endCall = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setState('dial');
    setNum('');
    setNameVal('');
    setCallerName('');
    setSecs(0);
    setPhraseIdx(0);
  }, []);

  const timerStr = `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`;

  return (
    <div style={S.wrap}>
      <div style={S.shell}>
        <div style={S.statusBar}>
          <span style={S.clock}>{clock}</span>
          <div style={S.statusIcons}>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="white"><rect x="0" y="4" width="3" height="7" rx="1"/><rect x="4" y="2" width="3" height="9" rx="1"/><rect x="8" y="0" width="3" height="11" rx="1"/><rect x="12" y="1" width="3" height="8" rx="1" opacity=".35"/></svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="white"><path d="M7.5 2.5C9.9 2.5 12 3.5 13.4 5.2L14.8 3.8C13 1.8 10.4.5 7.5.5s-5.5 1.3-7.3 3.3l1.4 1.4C3 3.5 5.1 2.5 7.5 2.5z" opacity=".35"/><path d="M7.5 5.5c1.4 0 2.7.6 3.6 1.5L12.5 5.6C11.2 4.3 9.4 3.5 7.5 3.5S3.8 4.3 2.5 5.6l1.4 1.4c.9-.9 2.2-1.5 3.6-1.5z"/><circle cx="7.5" cy="10" r="1.5"/></svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x=".5" y=".5" width="21" height="11" rx="3.5" stroke="white" strokeOpacity=".35"/><rect x="1.5" y="1.5" width="17" height="9" rx="2.5" fill="white"/><path d="M23 4v4a2 2 0 000-4z" fill="white" opacity=".4"/></svg>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          {state !== 'calling' && (
            <div>
              <div style={S.dialHeader}>
                <div style={S.ziLabel}>ZIONA</div>
                <div style={S.ziTitle}>Test Our Voice Quality</div>
                <div style={S.ziSub}>Enter your number — we'll call you instantly</div>
              </div>

              <div style={{ ...S.numDisplay, color: numFlash ? '#ef4444' : '#fff' }}>
                <span>{fmt(num)}</span>
                <span style={S.cursor} />
              </div>

              <div style={S.dialGrid}>
                {DIAL_KEYS.map(({ digit, sub }) => (
                  <button key={digit} style={S.dialKey} onPointerDown={() => pressKey(digit)}>
                    <span style={S.dkNum}>{digit}</span>
                    <span style={S.dkSub}>{sub}</span>
                  </button>
                ))}
              </div>

              <div style={S.dialActions}>
                <div style={{ width: 44, height: 44 }} />
                <button style={S.callBtn} onClick={pressCall}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 16a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 5.25h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 12a16 16 0 006.11 6.11l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 19.42z"/></svg>
                </button>
                <button style={S.backBtn} onClick={backspace}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8888AA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
                </button>
              </div>
            </div>
          )}

          {state === 'name' && (
            <div style={S.modalOverlay}>
              <div style={S.modalSheet}>
                <div style={S.dragHandle} />
                <div style={S.modalTitle}>What's your name?</div>
                <div style={S.modalSub}>So our AI knows who it's calling</div>
                <input
                  style={S.nameInput}
                  type="text"
                  placeholder="Your full name"
                  value={nameVal}
                  onChange={e => setNameVal(e.target.value)}
                  autoFocus
                />
                <button
                  style={{ ...S.nameBtn, ...(nameVal.trim().length < 2 ? S.nameBtnDisabled : {}) }}
                  disabled={nameVal.trim().length < 2}
                  onClick={submitName}
                >
                  Get My Call
                </button>
              </div>
            </div>
          )}

          {state === 'calling' && (
            <div style={S.callingScreen}>
              <div style={S.callLabel}>Outbound Call Active</div>
              <div style={S.avatarWrap}>
                <div style={S.ring1} />
                <div style={S.ring2} />
                <div style={S.ring3} />
                <div style={S.avatar}>{getInitials(callerName)}</div>
              </div>
              <div style={S.callerName}>{callerName}</div>
              <div style={S.callerMeta}>{fmt(num)}</div>
              <div style={S.timerRow}>
                <span style={S.timerVal}>{timerStr}</span>
                <span style={S.connDot} />
                <span style={S.connText}>Connected</span>
              </div>
              <div style={S.waveform}>
                {WAVE_HEIGHTS.map((h, i) => (
                  <div key={i} style={{ ...S.waveBar, animationDelay: `${i * 0.07}s`, ['--bar-h' as string]: `${h}px` }} />
                ))}
              </div>
              <div style={S.transcript}>
                <div style={S.transcriptDot} />
                <span>{PHRASES[phraseIdx]}</span>
              </div>
              <div style={S.controls}>
                <div style={S.ctrl}>
                  <button style={S.ctrlBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8888AA" strokeWidth="1.8" strokeLinecap="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6"/><path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8"/></svg>
                  </button>
                  <span style={S.ctrlLabel}>Mute</span>
                </div>
                <div style={S.ctrl}>
                  <button style={S.endBtn} onClick={endCall}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 13 13 0 003.53.93 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-5.99-5.99 19.79 19.79 0 01-3.07-8.63A2 2 0 016.45 4h3a2 2 0 012 1.72 13 13 0 00.93 3.53 2 2 0 01-.45 2.11z" transform="rotate(135 12 12)"/></svg>
                  </button>
                  <span style={S.ctrlLabel}>End</span>
                </div>
                <div style={S.ctrl}>
                  <button style={S.ctrlBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8888AA" strokeWidth="1.8" strokeLinecap="round"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                  </button>
                  <span style={S.ctrlLabel}>Hold</span>
                </div>
              </div>
              <div style={S.indicators}>
                <div style={S.indItem}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#55556A" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/></svg>
                  <span>AI Speaking</span>
                </div>
                <div style={S.indItem}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#55556A" strokeWidth="2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                  <span>Lead Active</span>
                </div>
              </div>
              <div style={S.footer}>
                <span style={S.footerNote}>Appointment captured automatically</span>
                <span style={S.bookedBadge}>&#10003; Booked</span>
              </div>
            </div>
          )}
        </div>

        <div style={S.homeBar}><div style={S.homePill} /></div>
      </div>

      <style>{`
        @keyframes dialpad-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes dialpad-ring {
          0% { transform: scale(0.85); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes dialpad-wave {
          0%,100% { height: 4px; opacity: 0.3; }
          50% { height: var(--bar-h, 18px); opacity: 1; }
        }
        @keyframes dialpad-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .zd-cursor { animation: dialpad-blink 1s infinite; }
        .zd-ring1 { animation: dialpad-ring 2s ease-out infinite 0s; }
        .zd-ring2 { animation: dialpad-ring 2s ease-out infinite 0.7s; }
        .zd-ring3 { animation: dialpad-ring 2s ease-out infinite 1.4s; }
        .zd-conn-dot { animation: dialpad-pulse 2s infinite; }
        .zd-transcript-dot { animation: dialpad-blink 1.5s infinite; }
        .zd-wavebar { animation: dialpad-wave 1.2s ease-in-out infinite; }
        .zd-dialkey:active { background: #1E1E32 !important; }
        .zd-callbtn:active { background: #16a34a !important; transform: scale(0.95); }
      `}</style>
    </div>
  );
}

const S: Record<string, React.CSSProperties> = {
  wrap: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '2rem 1rem', background: '#07070D', borderRadius: 16,
  },
  shell: {
    width: 320,
    background: '#0D0D18',
    borderRadius: 40,
    border: '2px solid #1E1E32',
    boxShadow: '0 0 0 6px #111120, 0 32px 80px rgba(0,0,0,0.7)',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  statusBar: {
    background: '#07070D', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '10px 20px 6px',
  },
  clock: { fontSize: 11, fontWeight: 600, color: '#fff' },
  statusIcons: { display: 'flex', gap: 6, alignItems: 'center' },
  dialHeader: { textAlign: 'center', padding: '24px 20px 10px' },
  ziLabel: { fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9B6FF4', marginBottom: 5 },
  ziTitle: { fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 3 },
  ziSub: { fontSize: 11, color: '#55556A' },
  numDisplay: {
    textAlign: 'center', fontSize: 28, fontWeight: 300, letterSpacing: '0.06em',
    minHeight: 48, padding: '8px 20px 4px', display: 'flex', alignItems: 'center',
    justifyContent: 'center', gap: 3, transition: 'color 0.2s',
  },
  cursor: {
    display: 'inline-block', width: 2, height: 28, background: '#9B6FF4',
    borderRadius: 2, marginLeft: 2, verticalAlign: 'middle',
    animation: 'dialpad-blink 1s infinite',
  },
  dialGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, padding: '6px 14px' },
  dialKey: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    height: 58, borderRadius: 12, cursor: 'pointer', background: 'transparent',
    border: 'none', transition: 'background 0.12s', userSelect: 'none',
  },
  dkNum: { fontSize: 22, fontWeight: 300, color: '#fff', lineHeight: 1 },
  dkSub: { fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', color: '#55556A', marginTop: 2, textTransform: 'uppercase' },
  dialActions: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, padding: '6px 14px 22px' },
  callBtn: {
    width: 64, height: 64, borderRadius: '50%', background: '#22c55e',
    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
    justifyContent: 'center', transition: 'background 0.15s, transform 0.1s',
  },
  backBtn: {
    width: 44, height: 44, borderRadius: '50%', background: 'transparent',
    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  modalOverlay: {
    position: 'absolute', inset: 0, background: 'rgba(7,7,13,0.88)',
    zIndex: 10, display: 'flex', alignItems: 'flex-end',
  },
  modalSheet: {
    width: '100%', background: '#111120', borderRadius: '28px 28px 0 0',
    borderTop: '1px solid #1E1E32', padding: '18px 20px 28px',
  },
  dragHandle: { width: 36, height: 4, background: '#2a2a40', borderRadius: 2, margin: '0 auto 14px' },
  modalTitle: { fontSize: 16, fontWeight: 600, color: '#fff', textAlign: 'center', marginBottom: 4 },
  modalSub: { fontSize: 11, color: '#55556A', textAlign: 'center', marginBottom: 14 },
  nameInput: {
    width: '100%', background: '#1E1E32', border: '1px solid #2a2a40',
    borderRadius: 12, color: '#fff', fontSize: 15, padding: '11px 14px',
    outline: 'none', fontFamily: 'inherit', marginBottom: 10,
    boxSizing: 'border-box',
  },
  nameBtn: {
    width: '100%', background: '#7B4FE0', border: 'none', borderRadius: 12,
    color: '#fff', fontSize: 15, fontWeight: 600, padding: 13,
    cursor: 'pointer', fontFamily: 'inherit',
  },
  nameBtnDisabled: { background: '#2a2a40', color: '#55556A', cursor: 'not-allowed' },
  callingScreen: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '28px 20px 24px', minHeight: 540,
  },
  callLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#9B6FF4', marginBottom: 18,
  },
  avatarWrap: {
    width: 78, height: 78, position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
  },
  ring1: {
    position: 'absolute', width: 100, height: 100, borderRadius: '50%',
    border: '1px solid rgba(155,111,244,0.3)',
    animation: 'dialpad-ring 2s ease-out infinite 0s',
  },
  ring2: {
    position: 'absolute', width: 122, height: 122, borderRadius: '50%',
    border: '1px solid rgba(155,111,244,0.3)',
    animation: 'dialpad-ring 2s ease-out infinite 0.7s',
  },
  ring3: {
    position: 'absolute', width: 144, height: 144, borderRadius: '50%',
    border: '1px solid rgba(155,111,244,0.3)',
    animation: 'dialpad-ring 2s ease-out infinite 1.4s',
  },
  avatar: {
    width: 78, height: 78, borderRadius: '50%',
    background: 'linear-gradient(135deg, #4A2E9A, #7B4FE0)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 22, fontWeight: 700, color: '#fff', position: 'relative', zIndex: 1,
  },
  callerName: { fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 3 },
  callerMeta: { fontSize: 11, color: '#55556A', marginBottom: 5 },
  timerRow: { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 },
  timerVal: { fontSize: 14, fontWeight: 600, color: '#22c55e', letterSpacing: '0.08em' },
  connDot: { width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'dialpad-pulse 2s infinite' },
  connText: { fontSize: 11, color: '#55556A' },
  waveform: { display: 'flex', alignItems: 'center', gap: 3, margin: '16px 0 12px', height: 34 },
  waveBar: {
    width: 3, borderRadius: 3, background: '#7B4FE0',
    animation: 'dialpad-wave 1.2s ease-in-out infinite',
  },
  transcript: {
    background: 'rgba(123,79,224,0.12)', border: '1px solid rgba(123,79,224,0.2)',
    borderRadius: 12, padding: '10px 12px', fontSize: 11, color: '#E8E8F8',
    lineHeight: 1.5, width: '100%', marginBottom: 16,
    display: 'flex', gap: 7, alignItems: 'flex-start',
  },
  transcriptDot: {
    width: 7, height: 7, borderRadius: '50%', background: '#9B6FF4',
    flexShrink: 0, marginTop: 3, animation: 'dialpad-blink 1.5s infinite',
  },
  controls: { display: 'flex', gap: 20, alignItems: 'center', marginBottom: 14 },
  ctrl: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 },
  ctrlLabel: { fontSize: 10, color: '#55556A' },
  ctrlBtn: {
    width: 50, height: 50, borderRadius: 14, background: '#1E1E32',
    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  endBtn: {
    width: 62, height: 62, borderRadius: '50%', background: '#dc2626',
    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  indicators: { display: 'flex', gap: 18, fontSize: 10, color: '#55556A' },
  indItem: { display: 'flex', alignItems: 'center', gap: 4 },
  footer: {
    width: '100%', borderTop: '1px solid #1E1E32', marginTop: 14, paddingTop: 12,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  footerNote: { fontSize: 10, color: '#55556A' },
  bookedBadge: {
    background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)',
    color: '#4ade80', fontSize: 10, fontWeight: 600, padding: '3px 9px', borderRadius: 50,
  },
  homeBar: { height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#07070D' },
  homePill: { width: 100, height: 4, background: '#2a2a40', borderRadius: 2 },
};

import { useState, useRef, useEffect, useCallback } from 'react';

/* ── geometry helper ── */
const pt = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
};

const W   = '#dcdcdc';
const DIM = '#5a5a5a';
const RED = '#c0392b';

/* ── shared bezel + gradient + glass ── */
function Base({ id }: { id: string }) {
  return (
    <>
      <defs>
        <radialGradient id={`bg_${id}`} cx="42%" cy="38%" r="68%">
          <stop offset="0%"   stopColor="#202020" />
          <stop offset="100%" stopColor="#070707" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill={`url(#bg_${id})`} />
      <circle cx="100" cy="100" r="97"  fill="none" stroke="#3c3c3c" strokeWidth="2" />
      <circle cx="100" cy="100" r="91"  fill="none" stroke="#161616" strokeWidth="1" />
      <circle cx="100" cy="100" r="87"  fill="#0b0b0b" />
      {/* glass sheen */}
      <path d="M74,43 Q100,28 126,45 Q113,74 100,78 Q87,72 74,43Z"
        fill="rgba(255,255,255,0.036)" />
    </>
  );
}

/* ── animated seconds hand ── */
function Secs({ start = 130 }: { start?: number }) {
  return (
    <g>
      {/* @ts-expect-error – SMIL animateTransform */}
      <animateTransform attributeName="transform" type="rotate"
        from={`${start} 100 100`} to={`${start + 360} 100 100`}
        dur="60s" repeatCount="indefinite" />
      <line x1="100" y1="114" x2="100" y2="33"  stroke={RED} strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="100" cy="100" r="2.5" fill={RED} />
    </g>
  );
}

/* ── center jewel ── */
const Cap = () => (
  <>
    <circle cx="100" cy="100" r="3.5" fill={W} />
    <circle cx="100" cy="100" r="1.5" fill="#0b0b0b" />
  </>
);

/* ══════════════════════════════
       DIAL COMPONENTS
   ══════════════════════════════ */

function AnalogDial() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="analog" />
      {Array.from({ length: 60 }, (_, i) => {
        const major = i % 5 === 0;
        const p1 = pt(100, 100, 83, i * 6);
        const p2 = pt(100, 100, major ? 72 : 79, i * 6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={major ? W : DIM} strokeWidth={major ? 1.8 : 0.7} strokeLinecap="round" />;
      })}
      {(() => { const e = pt(100,100,52,300); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="4"   strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,65,60);  return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2.5" strokeLinecap="round" />; })()}
      <Secs start={130} />
      <Cap />
    </svg>
  );
}

function RomanDial() {
  const labels = ['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI'];
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="roman" />
      <circle cx="100" cy="100" r="74" fill="none" stroke="#252525" strokeWidth="0.6" />
      {labels.map((l, i) => {
        const p   = pt(100, 100, 66, i * 30);
        const maj = i % 3 === 0;
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill={maj ? W : '#999'} fontSize={maj ? '10' : '7.5'}
          fontFamily="Georgia,serif" fontWeight={maj ? 'bold' : 'normal'}>{l}</text>;
      })}
      {(() => { const e = pt(100,100,50,300); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,63,60);  return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <Cap />
    </svg>
  );
}

function StickDial() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="stick" />
      {Array.from({ length: 12 }, (_, i) => {
        const maj = i % 3 === 0;
        const p1  = pt(100, 100, 83, i * 30);
        const p2  = pt(100, 100, maj ? 64 : 74, i * 30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={W} strokeWidth={maj ? 3.5 : 1.8} strokeLinecap="butt" />;
      })}
      {(() => { const e = pt(100,100,52,300); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="5"   strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,66,60);  return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2.5" strokeLinecap="round" />; })()}
      <Secs start={200} />
      <Cap />
    </svg>
  );
}

function DigitalDial() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="digital" />
      <rect x="28" y="68" width="144" height="64" rx="6" fill="#040d04" stroke="#1a2a1a" strokeWidth="1" />
      <rect x="29" y="69" width="142" height="62" rx="5.5" fill="rgba(0,255,80,0.015)" />
      <text x="100" y="103" textAnchor="middle" dominantBaseline="central"
        fill="#6dff78" fontSize="32" fontFamily="'Courier New',monospace"
        fontWeight="bold" letterSpacing="3">10:10</text>
      <text x="100" y="151" textAnchor="middle"
        fill={DIM} fontSize="8.5" fontFamily="monospace" letterSpacing="3">SUN  20 APR</text>
      {[60,120,240,300].map((a,i) => {
        const p = pt(100,100,83,a);
        return <rect key={i} x={p.x-1.5} y={p.y-1.5} width="3" height="3" fill="#222" />;
      })}
    </svg>
  );
}

function ChronographDial() {
  const subs = [{ a: 270, l: '60s' }, { a: 150, l: '30m' }, { a: 30, l: '12h' }];
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="chrono" />
      {Array.from({ length: 60 }, (_, i) => {
        const maj = i % 5 === 0;
        const p1  = pt(100, 100, 85, i * 6);
        const p2  = pt(100, 100, maj ? 78 : 82, i * 6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={maj ? W : DIM} strokeWidth={maj ? 1.2 : 0.5} />;
      })}
      {subs.map(({ a, l }, idx) => {
        const c = pt(100, 100, 36, a);
        return (
          <g key={idx}>
            <circle cx={c.x} cy={c.y} r="18" fill="#0c0c0c" stroke="#282828" strokeWidth="1" />
            {Array.from({ length: 12 }, (_, j) => {
              const p1 = pt(c.x, c.y, 14, j*30), p2 = pt(c.x, c.y, 10, j*30);
              return <line key={j} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={DIM} strokeWidth="0.6" />;
            })}
            {(() => { const e = pt(c.x, c.y, 10, 90); return <line x1={c.x} y1={c.y} x2={e.x} y2={e.y} stroke={W} strokeWidth="1.2" strokeLinecap="round" />; })()}
            <text x={c.x} y={c.y+21} textAnchor="middle" fill={DIM} fontSize="5" fontFamily="sans-serif" letterSpacing="0.5">{l}</text>
          </g>
        );
      })}
      {(() => { const e = pt(100,100,50,300); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,63,60);  return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <Secs start={180} />
      <Cap />
    </svg>
  );
}

function AutomaticDial() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="auto" />
      {/* rotor sectors */}
      <path d="M100,100 L100,18 A82,82 0 0,1 182,100 Z" fill="#181818" stroke="#2a2a2a" strokeWidth="0.5" />
      <path d="M100,100 L182,100 A82,82 0 0,1 100,182 Z" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.5" />
      {/* gear teeth */}
      {Array.from({ length: 40 }, (_, i) => {
        const p1 = pt(100,100,78,i*9), p2 = pt(100,100,83,i*9);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#444" strokeWidth="1.5" />;
      })}
      {/* hub */}
      <circle cx="100" cy="100" r="26" fill="#111"    stroke="#2a2a2a" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="18" fill="#181818" stroke="#333"    strokeWidth="1"   />
      {/* hour markers */}
      {Array.from({ length: 12 }, (_, i) => {
        const p1 = pt(100,100,86,i*30), p2 = pt(100,100,i%3===0?76:81,i*30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={W} strokeWidth={i%3===0?2:1} />;
      })}
      {(() => { const e = pt(100,100,40,300); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,54,60);  return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <text x="100" y="148" textAnchor="middle" fill={DIM} fontSize="6"
        fontFamily="Georgia,serif" letterSpacing="2.5">AUTOMATIC</text>
      <Cap />
    </svg>
  );
}

function MoonPhaseDial() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="moon" />
      {Array.from({ length: 12 }, (_, i) => {
        const p1 = pt(100,100,83,i*30), p2 = pt(100,100,i%3===0?72:78,i*30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={W} strokeWidth={i%3===0?2:1} strokeLinecap="round" />;
      })}
      {/* aperture */}
      <ellipse cx="100" cy="148" rx="23" ry="15" fill="#050c1e" stroke="#162038" strokeWidth="1.5" />
      {[[84,142],[117,144],[92,155],[111,153],[100,140]].map(([sx,sy],i) => (
        <circle key={i} cx={sx} cy={sy} r="0.9" fill="rgba(255,255,255,0.65)" />
      ))}
      {/* crescent */}
      <circle cx="99"  cy="148" r="11" fill="#d4b056" />
      <circle cx="105" cy="148" r="10" fill="#050c1e" />
      <ellipse cx="100" cy="148" rx="23" ry="15" fill="none" stroke="#162038" strokeWidth="1.5" />
      {['XII','III','VI','IX'].map((l, i) => {
        const p = pt(100,100,58,i*90);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill={DIM} fontSize="8.5" fontFamily="Georgia,serif">{l}</text>;
      })}
      {(() => { const e = pt(100,100,50,300); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,63,60);  return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <Cap />
    </svg>
  );
}

/* ── registry ── */
const dialItems = [
  { label: 'Moon Phase Dial', Dial: MoonPhaseDial   },
  { label: 'Roman Dial',      Dial: RomanDial        },
  { label: 'Stick Dial',      Dial: StickDial        },
  { label: 'Analog Dial',     Dial: AnalogDial       },
  { label: 'Digital Dial',    Dial: DigitalDial      },
  { label: 'Chronograph',     Dial: ChronographDial  },
  { label: 'Automatic Dial',  Dial: AutomaticDial    },
];

interface PickPerfectDialProps {
  onNavigate: (path: string) => void;
}

export default function PickPerfectDial({ onNavigate }: PickPerfectDialProps) {
  const [current, setCurrent] = useState(2);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);
  const touchX    = useRef(0);

  const getW = (i: number, active: number) => (i === active ? 220 : 181);

  const applyOffset = useCallback((active: number) => {
    if (!sliderRef.current || !trackRef.current) return;
    const cw = sliderRef.current.offsetWidth;
    let offset = cw / 2;
    for (let i = 0; i < active; i++) offset -= getW(i, active);
    offset -= getW(active, active) / 2;
    trackRef.current.style.transform = `translateX(${offset}px)`;
  }, []);

  /* initial paint without transition flash */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = 'none';
    applyOffset(current);
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1)';
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { applyOffset(current); }, [current, applyOffset]);

  useEffect(() => {
    const onResize = () => applyOffset(current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current, applyOffset]);

  /* keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  setCurrent(c => Math.max(0, c - 1));
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(dialItems.length - 1, c + 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (dir: number) =>
    setCurrent(c => Math.max(0, Math.min(dialItems.length - 1, c + dir)));

  return (
    <section
      style={{ background: '#0b0b0b', fontFamily: "'Jost', sans-serif" }}
      className="text-white text-center overflow-hidden py-24 px-5"
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <span className="block text-xs uppercase tracking-[0.125rem] opacity-60 mb-2.5">
          Pick Perfect Dial
        </span>
        <h2 className="mt-2.5 text-[1.75rem] font-medium text-white">
          Dedicated To Style
        </h2>

        <div className="relative mt-[4.375rem]">
          {/* track */}
          <div ref={sliderRef} className="flex items-center overflow-hidden w-full">
            <div ref={trackRef} className="flex items-center" style={{ willChange: 'transform' }}>
              {dialItems.map(({ label, Dial }, i) => {
                const isActive = i === current;
                return (
                  <button
                    key={label}
                    onClick={() => isActive ? onNavigate('/products') : setCurrent(i)}
                    className="flex flex-col items-center outline-none flex-shrink-0 border-0 p-0 bg-transparent"
                    style={{
                      width: 220,
                      opacity: isActive ? 1 : 0.35,
                      transform: isActive ? 'scale(1)' : 'scale(0.82)',
                      transition: 'opacity 0.4s, transform 0.4s',
                    }}
                  >
                    {/* dial face + glow */}
                    <div style={{
                      width:    isActive ? '13.75rem' : '8.75rem',
                      height:   isActive ? '13.75rem' : '8.75rem',
                      filter:   isActive ? 'drop-shadow(0 0 20px rgba(255,255,255,0.09))' : 'none',
                      transition: 'width 0.4s, height 0.4s, filter 0.4s',
                    }}>
                      <Dial />
                    </div>

                    {/* label pill */}
                    <p
                      className="text-xs tracking-[0.06rem] inline-block"
                      style={{
                        marginTop:  isActive ? '1.125rem' : '1.825rem',
                        background: isActive ? '#fff' : 'transparent',
                        color:      isActive ? '#333' : '#fff',
                        padding:    isActive ? '0.5rem 0.75rem' : '0',
                        fontWeight: isActive ? 600 : 400,
                        transition: 'margin-top 0.4s, background 0.4s, color 0.4s, padding 0.4s',
                      }}
                    >
                      {label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* nav buttons */}
          <div className="flex justify-center gap-4 mt-10">
            {([{ d: -1, sym: '‹', a: 'Previous' }, { d: 1, sym: '›', a: 'Next' }] as const).map(({ d, sym, a }) => (
              <button
                key={a}
                onClick={() => go(d)}
                aria-label={a}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl leading-none"
                style={{ border: '1px solid rgba(255,255,255,0.35)', background: 'none', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor='#fff'; b.style.background='rgba(255,255,255,0.1)'; }}
                onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor='rgba(255,255,255,0.35)'; b.style.background='none'; }}
              >{sym}</button>
            ))}
          </div>

          {/* dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {dialItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to ${dialItems[i].label}`}
                style={{
                  width:      i === current ? 20 : 6,
                  height:     6,
                  borderRadius: 3,
                  background: i === current ? '#fff' : 'rgba(255,255,255,0.22)',
                  border:     'none',
                  padding:    0,
                  cursor:     'pointer',
                  transition: 'all 0.35s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

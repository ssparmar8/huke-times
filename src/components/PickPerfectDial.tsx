import { useState, useRef, useEffect, useCallback } from 'react';

/* ── SVG helpers ── */
const pt = (cx: number, cy: number, r: number, angleDeg: number) => {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
};

const BASE = '#111';
const RING = '#2a2a2a';
const W    = '#e8e8e8';
const DIM  = '#888';

/* ── Individual dial SVGs ── */
const AnalogDial = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="100" cy="100" r="100" fill={BASE} />
    <circle cx="100" cy="100" r="90" fill="none" stroke={RING} strokeWidth="1" />
    {Array.from({ length: 60 }, (_, i) => {
      const isMajor = i % 5 === 0;
      const p1 = pt(100, 100, 82, i * 6);
      const p2 = pt(100, 100, isMajor ? 70 : 78, i * 6);
      return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
               stroke={isMajor ? W : DIM} strokeWidth={isMajor ? 2 : 0.7} />;
    })}
    {/* 10:10 hands */}
    {(() => { const h = pt(100, 100, 48, 300); return <line x1="100" y1="100" x2={h.x} y2={h.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
    {(() => { const m = pt(100, 100, 62, 60);  return <line x1="100" y1="100" x2={m.x} y2={m.y} stroke={W} strokeWidth="2" strokeLinecap="round" />; })()}
    {(() => { const s = pt(100, 100, 68, 130); return <line x1="100" y1="100" x2={s.x} y2={s.y} stroke="#c0392b" strokeWidth="1" strokeLinecap="round" />; })()}
    <circle cx="100" cy="100" r="4" fill={W} />
    <circle cx="100" cy="100" r="1.5" fill={BASE} />
  </svg>
);

const RomanDial = () => {
  const romans = ['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI'];
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <circle cx="100" cy="100" r="100" fill={BASE} />
      <circle cx="100" cy="100" r="90" fill="none" stroke={RING} strokeWidth="1" />
      <circle cx="100" cy="100" r="78" fill="none" stroke={RING} strokeWidth="0.5" />
      {romans.map((label, i) => {
        const p = pt(100, 100, 68, i * 30);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
                 fill={W} fontSize={i % 3 === 0 ? '9' : '7'} fontFamily="serif"
                 fontWeight={i % 3 === 0 ? 'bold' : 'normal'}>{label}</text>;
      })}
      {(() => { const h = pt(100, 100, 44, 300); return <line x1="100" y1="100" x2={h.x} y2={h.y} stroke={W} strokeWidth="3" strokeLinecap="round" />; })()}
      {(() => { const m = pt(100, 100, 58, 60);  return <line x1="100" y1="100" x2={m.x} y2={m.y} stroke={W} strokeWidth="1.5" strokeLinecap="round" />; })()}
      <circle cx="100" cy="100" r="3.5" fill={W} />
    </svg>
  );
};

const StickDial = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="100" cy="100" r="100" fill={BASE} />
    <circle cx="100" cy="100" r="90" fill="none" stroke={RING} strokeWidth="1" />
    {Array.from({ length: 12 }, (_, i) => {
      const p1 = pt(100, 100, 82, i * 30);
      const p2 = pt(100, 100, i % 3 === 0 ? 64 : 72, i * 30);
      return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
               stroke={W} strokeWidth={i % 3 === 0 ? 3 : 1.5} strokeLinecap="round" />;
    })}
    {(() => { const h = pt(100, 100, 46, 300); return <line x1="100" y1="100" x2={h.x} y2={h.y} stroke={W} strokeWidth="4" strokeLinecap="round" />; })()}
    {(() => { const m = pt(100, 100, 62, 60);  return <line x1="100" y1="100" x2={m.x} y2={m.y} stroke={W} strokeWidth="2" strokeLinecap="round" />; })()}
    {(() => { const s = pt(100, 100, 70, 200); return (
      <>
        <line x1="100" y1="100" x2={s.x} y2={s.y} stroke="#c0392b" strokeWidth="1" strokeLinecap="round" />
        {(() => { const c = pt(100, 100, -14, 200); return <line x1="100" y1="100" x2={c.x} y2={c.y} stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />; })()}
      </>
    ); })()}
    <circle cx="100" cy="100" r="4" fill={W} />
    <circle cx="100" cy="100" r="1.5" fill={BASE} />
  </svg>
);

const DigitalDial = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="100" cy="100" r="100" fill={BASE} />
    <circle cx="100" cy="100" r="90" fill="none" stroke={RING} strokeWidth="1" />
    <rect x="34" y="72" width="132" height="56" rx="4" fill="#0a0a0a" stroke="#333" strokeWidth="1" />
    <text x="100" y="105" textAnchor="middle" dominantBaseline="central"
      fill={W} fontSize="30" fontFamily="'Courier New', monospace" fontWeight="bold"
      letterSpacing="2">10:08</text>
    <text x="100" y="152" textAnchor="middle" fill={DIM} fontSize="8" fontFamily="monospace"
      letterSpacing="3">SUN  20 APR</text>
    {[60, 120, 240, 300].map((a, i) => {
      const p = pt(100, 100, 84, a);
      return <circle key={i} cx={p.x} cy={p.y} r="2" fill={RING} />;
    })}
  </svg>
);

const ChronographDial = () => {
  const subDials = [
    { angle: 270, label: '60s' },
    { angle: 150, label: '30m' },
    { angle: 30,  label: '12h' },
  ];
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <circle cx="100" cy="100" r="100" fill={BASE} />
      <circle cx="100" cy="100" r="90" fill="none" stroke={RING} strokeWidth="1" />
      {Array.from({ length: 60 }, (_, i) => {
        const isMajor = i % 5 === 0;
        const p1 = pt(100, 100, 84, i * 6);
        const p2 = pt(100, 100, isMajor ? 76 : 80, i * 6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                 stroke={isMajor ? W : DIM} strokeWidth={isMajor ? 1.5 : 0.6} />;
      })}
      {subDials.map(({ angle, label }, i) => {
        const c = pt(100, 100, 38, angle);
        return (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r="18" fill="#0d0d0d" stroke={RING} strokeWidth="1" />
            {Array.from({ length: 12 }, (_, j) => {
              const p1 = pt(c.x, c.y, 14, j * 30);
              const p2 = pt(c.x, c.y, 10, j * 30);
              return <line key={j} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={DIM} strokeWidth="0.7" />;
            })}
            {(() => { const hp = pt(c.x, c.y, 10, 90); return <line x1={c.x} y1={c.y} x2={hp.x} y2={hp.y} stroke={W} strokeWidth="1.2" strokeLinecap="round" />; })()}
            <text x={c.x} y={c.y + 22} textAnchor="middle" fill={DIM} fontSize="5.5" fontFamily="sans-serif">{label}</text>
          </g>
        );
      })}
      {(() => { const h = pt(100, 100, 46, 300); return <line x1="100" y1="100" x2={h.x} y2={h.y} stroke={W} strokeWidth="3" strokeLinecap="round" />; })()}
      {(() => { const m = pt(100, 100, 60, 60);  return <line x1="100" y1="100" x2={m.x} y2={m.y} stroke={W} strokeWidth="2" strokeLinecap="round" />; })()}
      {(() => { const s = pt(100, 100, 68, 180); return <line x1="100" y1="100" x2={s.x} y2={s.y} stroke="#c0392b" strokeWidth="1" strokeLinecap="round" />; })()}
      <circle cx="100" cy="100" r="4" fill={W} />
      <circle cx="100" cy="100" r="1.5" fill={BASE} />
    </svg>
  );
};

const AutomaticDial = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="100" cy="100" r="100" fill={BASE} />
    <circle cx="100" cy="100" r="90" fill="none" stroke={RING} strokeWidth="1" />
    {/* Rotor cutout */}
    <clipPath id="rotorClip">
      <path d="M100,100 L100,28 A72,72 0 0,1 172,100 Z" />
    </clipPath>
    <circle cx="100" cy="100" r="72" fill="#0d0d0d" stroke="#1e1e1e" strokeWidth="1" />
    {/* Rotor */}
    <path d="M100,100 L100,28 A72,72 0 0,1 172,100 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
    <path d="M100,100 L172,100 A72,72 0 0,1 100,172 Z" fill="#222" stroke="#333" strokeWidth="1" />
    <circle cx="100" cy="100" r="22" fill="#111" stroke="#2d2d2d" strokeWidth="2" />
    <circle cx="100" cy="100" r="14" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
    {/* Gear teeth on rotor edge */}
    {Array.from({ length: 36 }, (_, i) => {
      const p1 = pt(100, 100, 70, i * 10);
      const p2 = pt(100, 100, 74, i * 10);
      return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#444" strokeWidth="1.5" />;
    })}
    {Array.from({ length: 12 }, (_, i) => {
      const p1 = pt(100, 100, 82, i * 30);
      const p2 = pt(100, 100, 76, i * 30);
      return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={W} strokeWidth={i % 3 === 0 ? 2 : 1} />;
    })}
    {(() => { const h = pt(100, 100, 36, 300); return <line x1="100" y1="100" x2={h.x} y2={h.y} stroke={W} strokeWidth="3" strokeLinecap="round" />; })()}
    {(() => { const m = pt(100, 100, 48, 60);  return <line x1="100" y1="100" x2={m.x} y2={m.y} stroke={W} strokeWidth="2" strokeLinecap="round" />; })()}
    <circle cx="100" cy="100" r="4" fill={W} />
    <text x="100" y="142" textAnchor="middle" fill={DIM} fontSize="6.5" fontFamily="serif" letterSpacing="2">AUTOMATIC</text>
  </svg>
);

const MoonPhaseDial = () => {
  const moonX = 100, moonY = 148;
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <circle cx="100" cy="100" r="100" fill={BASE} />
      <circle cx="100" cy="100" r="90" fill="none" stroke={RING} strokeWidth="1" />
      {Array.from({ length: 12 }, (_, i) => {
        const p1 = pt(100, 100, 82, i * 30);
        const p2 = pt(100, 100, i % 3 === 0 ? 70 : 76, i * 30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                 stroke={W} strokeWidth={i % 3 === 0 ? 2 : 1} />;
      })}
      {/* Moon phase aperture */}
      <clipPath id="moonAperture">
        <ellipse cx="100" cy="148" rx="22" ry="15" />
      </clipPath>
      <ellipse cx="100" cy="148" rx="22" ry="15" fill="#070d1f" stroke="#1a2440" strokeWidth="1.5" />
      {/* Stars */}
      {[[84,142],[116,143],[92,154],[110,153]].map(([sx, sy], i) => (
        <circle key={i} cx={sx} cy={sy} r="0.8" fill="rgba(255,255,255,0.6)" />
      ))}
      {/* Moon crescent */}
      <circle cx={moonX - 2} cy={moonY} r="10" fill="#d4b483" />
      <circle cx={moonX + 4} cy={moonY} r="9"  fill="#070d1f" />
      <ellipse cx="100" cy="148" rx="22" ry="15" fill="none" stroke="#1a2440" strokeWidth="1.5" />
      {(['XII','III','VI','IX'] as const).map((label, i) => {
        const p = pt(100, 100, 60, i * 90);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
                 fill={DIM} fontSize="8" fontFamily="serif">{label}</text>;
      })}
      {(() => { const h = pt(100, 100, 44, 300); return <line x1="100" y1="100" x2={h.x} y2={h.y} stroke={W} strokeWidth="3" strokeLinecap="round" />; })()}
      {(() => { const m = pt(100, 100, 58, 60);  return <line x1="100" y1="100" x2={m.x} y2={m.y} stroke={W} strokeWidth="1.5" strokeLinecap="round" />; })()}
      <circle cx="100" cy="100" r="3.5" fill={W} />
    </svg>
  );
};

/* ── Dial registry ── */
const dialItems = [
  { label: 'Moon Phase Dial', Dial: MoonPhaseDial },
  { label: 'Roman Dial',      Dial: RomanDial     },
  { label: 'Stick Dial',      Dial: StickDial     },
  { label: 'Analog Dial',     Dial: AnalogDial    },
  { label: 'Digital Dial',    Dial: DigitalDial   },
  { label: 'Chronograph',     Dial: ChronographDial },
  { label: 'Automatic Dial',  Dial: AutomaticDial },
];

interface PickPerfectDialProps {
  onNavigate: (path: string) => void;
}

export default function PickPerfectDial({ onNavigate }: PickPerfectDialProps) {
  const [current, setCurrent] = useState(2);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);

  const getSlideWidth = (index: number, active: number) => (index === active ? 220 : 181);

  const applyOffset = useCallback((active: number) => {
    if (!sliderRef.current || !trackRef.current) return;
    const containerWidth = sliderRef.current.offsetWidth;
    let offset = containerWidth / 2;
    for (let i = 0; i < active; i++) offset -= getSlideWidth(i, active);
    offset -= getSlideWidth(active, active) / 2;
    trackRef.current.style.transform = `translateX(${offset}px)`;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = 'none';
    applyOffset(current);
    requestAnimationFrame(() => { track.style.transition = 'transform 0.4s ease'; });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { applyOffset(current); }, [current, applyOffset]);

  useEffect(() => {
    const onResize = () => applyOffset(current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current, applyOffset]);

  const handleSlideClick = (index: number) => {
    if (index === current) onNavigate('/products');
    else setCurrent(index);
  };

  return (
    <section
      style={{ background: '#0b0b0b', fontFamily: "'Jost', sans-serif" }}
      className="text-white text-center overflow-hidden py-24 px-5"
    >
      <div className="max-w-[1400px] mx-auto">
        <span className="block text-xs uppercase tracking-[0.125rem] opacity-70 mb-2.5">
          Pick Perfect Dial
        </span>
        <h2 className="mt-2.5 text-[1.75rem] font-medium text-white">
          Dedicated To Style
        </h2>

        <div className="relative mt-[4.375rem]">
          <div ref={sliderRef} className="flex items-center overflow-hidden w-full">
            <div ref={trackRef} className="flex items-center"
              style={{ willChange: 'transform' }}>
              {dialItems.map(({ label, Dial }, i) => {
                const isActive = i === current;
                return (
                  <button
                    key={label}
                    onClick={() => handleSlideClick(i)}
                    className="flex flex-col items-center outline-none flex-shrink-0"
                    style={{
                      width: 220,
                      opacity: isActive ? 1 : 0.35,
                      transform: isActive ? 'scale(1)' : 'scale(0.82)',
                      transition: 'opacity 0.4s, transform 0.4s',
                    }}
                  >
                    <div
                      style={{
                        width: isActive ? '13.75rem' : '8.75rem',
                        height: isActive ? '13.75rem' : '8.75rem',
                        transition: 'width 0.4s, height 0.4s',
                      }}
                      className="flex items-center justify-center mx-auto"
                    >
                      <Dial />
                    </div>

                    {isActive ? (
                      <p className="text-xs tracking-[0.0625rem] font-semibold inline-block"
                        style={{ marginTop: '1.125rem', background: '#fff', color: '#333', padding: '0.5rem 0.75rem' }}>
                        {label}
                      </p>
                    ) : (
                      <p className="text-xs tracking-[0.0625rem] mt-[1.825rem]">{label}</p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            {[
              { label: '‹', dir: -1, aria: 'Previous' },
              { label: '›', dir:  1, aria: 'Next' },
            ].map(({ label, dir, aria }) => (
              <button
                key={aria}
                onClick={() => setCurrent(c => Math.max(0, Math.min(dialItems.length - 1, c + dir)))}
                aria-label={aria}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl leading-none cursor-pointer"
                style={{ border: '1px solid rgba(255,255,255,0.4)', background: 'none', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = '#fff'; b.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'rgba(255,255,255,0.4)'; b.style.background = 'none'; }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

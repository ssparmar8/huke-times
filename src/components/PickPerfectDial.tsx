'use client';
import { useState, useRef, useEffect, createContext, useContext } from 'react';

import { useRouter } from 'next/navigation';

/* ── geometry helper ── */
const r6 = (n: number) => Math.round(n * 1e6) / 1e6;
const pt = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg - 90) * (Math.PI / 180);
  return { x: r6(cx + r * Math.cos(a)), y: r6(cy + r * Math.sin(a)) };
};

/* ── live time ── */
interface TimeAngles { h: number; m: number; s: number; label: string }
const TimeCtx = createContext<TimeAngles>({ h: 0, m: 0, s: 0, label: '12:00' });

function useTime(): TimeAngles {
  const calc = () => {
    const now = new Date();
    const hr  = now.getHours(), mn = now.getMinutes(), sc = now.getSeconds();
    return {
      h:     (hr % 12 + mn / 60) * 30,
      m:     mn * 6 + sc * 0.1,
      s:     sc * 6,
      label: `${hr % 12 || 12}:${String(mn).padStart(2, '0')}`,
    };
  };
  const [t, setT] = useState<TimeAngles>({ h: 0, m: 0, s: 0, label: '12:00' });
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

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

/* ── live seconds hand (JS-driven, synced to wall clock) ── */
function Secs() {
  const { s } = useContext(TimeCtx);
  const tip  = pt(100, 100,  68, s);
  const tail = pt(100, 100, -15, s);
  return (
    <>
      <line x1={tail.x} y1={tail.y} x2={tip.x} y2={tip.y}
        stroke={RED} strokeWidth="1" strokeLinecap="round" />
      <circle cx="100" cy="100" r="2.5" fill={RED} />
    </>
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
  const { h, m } = useContext(TimeCtx);
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
      {(() => { const e = pt(100,100,52,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="4"   strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,65,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2.5" strokeLinecap="round" />; })()}
      <Secs />
      <Cap />
    </svg>
  );
}

function RomanDial() {
  const { h, m } = useContext(TimeCtx);
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
      {(() => { const e = pt(100,100,50,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,63,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <Cap />
    </svg>
  );
}

function StickDial() {
  const { h, m } = useContext(TimeCtx);
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
      {(() => { const e = pt(100,100,52,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="5"   strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,66,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2.5" strokeLinecap="round" />; })()}
      <Secs />
      <Cap />
    </svg>
  );
}

function DigitalDial() {
  const { label } = useContext(TimeCtx);
  const now  = new Date();
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const mons = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const dateLine = `${days[now.getDay()]}  ${now.getDate()} ${mons[now.getMonth()]}`;
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="digital" />
      <rect x="28" y="68" width="144" height="64" rx="6" fill="#040d04" stroke="#1a2a1a" strokeWidth="1" />
      <rect x="29" y="69" width="142" height="62" rx="5.5" fill="rgba(0,255,80,0.015)" />
      <text x="100" y="103" textAnchor="middle" dominantBaseline="central"
        fill="#6dff78" fontSize="32" fontFamily="'Courier New',monospace"
        fontWeight="bold" letterSpacing="3">{label}</text>
      <text x="100" y="151" textAnchor="middle"
        fill={DIM} fontSize="8.5" fontFamily="monospace" letterSpacing="3">{dateLine}</text>
      {[60,120,240,300].map((a,i) => {
        const p = pt(100,100,83,a);
        return <rect key={i} x={p.x-1.5} y={p.y-1.5} width="3" height="3" fill="#222" />;
      })}
    </svg>
  );
}

function ChronographDial() {
  const { h, m, s } = useContext(TimeCtx);
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
        /* sub-dial hand angles: 60s=seconds, 30m=minutes/2, 12h=hours*2 */
        const subAngle = idx === 0 ? s : idx === 1 ? (new Date().getMinutes() / 30) * 360 : h * 2;
        const se = pt(c.x, c.y, 10, subAngle);
        return (
          <g key={idx}>
            <circle cx={c.x} cy={c.y} r="18" fill="#0c0c0c" stroke="#282828" strokeWidth="1" />
            {Array.from({ length: 12 }, (_, j) => {
              const p1 = pt(c.x, c.y, 14, j*30), p2 = pt(c.x, c.y, 10, j*30);
              return <line key={j} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={DIM} strokeWidth="0.6" />;
            })}
            <line x1={c.x} y1={c.y} x2={se.x} y2={se.y} stroke={W} strokeWidth="1.2" strokeLinecap="round" />
            <text x={c.x} y={c.y+21} textAnchor="middle" fill={DIM} fontSize="5" fontFamily="sans-serif" letterSpacing="0.5">{l}</text>
          </g>
        );
      })}
      {(() => { const e = pt(100,100,50,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,63,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <Secs />
      <Cap />
    </svg>
  );
}

function AutomaticDial() {
  const { h, m } = useContext(TimeCtx);
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="auto" />
      <path d="M100,100 L100,18 A82,82 0 0,1 182,100 Z" fill="#181818" stroke="#2a2a2a" strokeWidth="0.5" />
      <path d="M100,100 L182,100 A82,82 0 0,1 100,182 Z" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.5" />
      {Array.from({ length: 40 }, (_, i) => {
        const p1 = pt(100,100,78,i*9), p2 = pt(100,100,83,i*9);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#444" strokeWidth="1.5" />;
      })}
      <circle cx="100" cy="100" r="26" fill="#111"    stroke="#2a2a2a" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="18" fill="#181818" stroke="#333"    strokeWidth="1"   />
      {Array.from({ length: 12 }, (_, i) => {
        const p1 = pt(100,100,86,i*30), p2 = pt(100,100,i%3===0?76:81,i*30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={W} strokeWidth={i%3===0?2:1} />;
      })}
      {(() => { const e = pt(100,100,40,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,54,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <text x="100" y="148" textAnchor="middle" fill={DIM} fontSize="6"
        fontFamily="Georgia,serif" letterSpacing="2.5">AUTOMATIC</text>
      <Cap />
    </svg>
  );
}

function MoonPhaseDial() {
  const { h, m } = useContext(TimeCtx);
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="moon" />
      {Array.from({ length: 12 }, (_, i) => {
        const p1 = pt(100,100,83,i*30), p2 = pt(100,100,i%3===0?72:78,i*30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={W} strokeWidth={i%3===0?2:1} strokeLinecap="round" />;
      })}
      <ellipse cx="100" cy="148" rx="23" ry="15" fill="#050c1e" stroke="#162038" strokeWidth="1.5" />
      {[[84,142],[117,144],[92,155],[111,153],[100,140]].map(([sx,sy],i) => (
        <circle key={i} cx={sx} cy={sy} r="0.9" fill="rgba(255,255,255,0.65)" />
      ))}
      <circle cx="99"  cy="148" r="11" fill="#d4b056" />
      <circle cx="105" cy="148" r="10" fill="#050c1e" />
      <ellipse cx="100" cy="148" rx="23" ry="15" fill="none" stroke="#162038" strokeWidth="1.5" />
      {['XII','III','VI','IX'].map((l, i) => {
        const p = pt(100,100,58,i*90);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill={DIM} fontSize="8.5" fontFamily="Georgia,serif">{l}</text>;
      })}
      {(() => { const e = pt(100,100,50,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round" />; })()}
      {(() => { const e = pt(100,100,63,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2"   strokeLinecap="round" />; })()}
      <Cap />
    </svg>
  );
}

/* ══════════════════════════════
     MODERN & SPORTS DIALS
   ══════════════════════════════ */

function DiverDial() {
  const { h, m } = useContext(TimeCtx);
  const hTip = pt(100,100,52,h), hTail = pt(100,100,-14,h);
  const mTip = pt(100,100,66,m);
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="bg_diver" cx="42%" cy="38%" r="68%">
          <stop offset="0%" stopColor="#0e2035"/><stop offset="100%" stopColor="#040c18"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#bg_diver)"/>
      {/* bezel */}
      <circle cx="100" cy="100" r="97" fill="#0c0c0c" stroke="#252525" strokeWidth="1"/>
      {Array.from({length:60},(_,i)=>{
        const maj=i%5===0, p1=pt(100,100,95,i*6), p2=pt(100,100,maj?88:92,i*6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={i===0?'#e74c3c':maj?'#aaa':'#444'} strokeWidth={maj?2:0.8}/>;
      })}
      <polygon points="100,2 95.5,12 104.5,12" fill="#e74c3c"/>
      {/* dial glass */}
      <circle cx="100" cy="100" r="84" fill="#04101e"/>
      <circle cx="100" cy="100" r="83" fill="none" stroke="#10243a" strokeWidth="0.5"/>
      {/* bold hour markers */}
      {Array.from({length:12},(_,i)=>{
        const c=pt(100,100,73,i*30);
        if(i===0){ const tp=pt(100,100,79,0),tl=pt(100,100,65,-4.5),tr=pt(100,100,65,4.5);
          return <polygon key={i} points={`${tp.x},${tp.y} ${tl.x},${tl.y} ${tr.x},${tr.y}`} fill={W}/>; }
        const isQ=i%3===0, l=isQ?14:10, w=isQ?5:3.5;
        return <rect key={i} x={c.x-w/2} y={c.y-l/2} width={w} height={l}
          fill={W} rx="0.8" transform={`rotate(${i*30},${c.x},${c.y})`}/>;
      })}
      <text x="100" y="140" textAnchor="middle" fill="#2a5a8a" fontSize="5.5"
        fontFamily="sans-serif" letterSpacing="3">DIVER 200M</text>
      {/* thick lume hands */}
      <line x1={hTail.x} y1={hTail.y} x2={hTip.x} y2={hTip.y} stroke={W} strokeWidth="7" strokeLinecap="round"/>
      <line x1={hTail.x} y1={hTail.y} x2={hTip.x} y2={hTip.y} stroke="#1a4a7a" strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="100" x2={mTip.x} y2={mTip.y} stroke={W} strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="100" y1="100" x2={mTip.x} y2={mTip.y} stroke="#1a4a7a" strokeWidth="1.5" strokeLinecap="round"/>
      <Secs/><Cap/>
    </svg>
  );
}

function GMTDial() {
  const { h, m } = useContext(TimeCtx);
  const gmtAngle  = 0; // updated after mount via TimeCtx — avoids SSR mismatch
  const gmtTip    = pt(100,100,62,gmtAngle), gmtTail = pt(100,100,-16,gmtAngle);
  const gmtAL     = pt(100,100,56,gmtAngle-6), gmtAR = pt(100,100,56,gmtAngle+6);
  const toRad     = (d: number) => d * Math.PI / 180;
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="gmt"/>
      {/* 24h bicolor ring */}
      {Array.from({length:24},(_,i)=>{
        const a1=(i/24)*360-90, a2=((i+1)/24)*360-90, r=75;
        const x1=r6(100+r*Math.cos(toRad(a1))), y1=r6(100+r*Math.sin(toRad(a1)));
        const x2=r6(100+r*Math.cos(toRad(a2))), y2=r6(100+r*Math.sin(toRad(a2)));
        return <path key={i} d={`M100,100 L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
          fill={(i>=6&&i<18)?'rgba(220,190,80,0.14)':'rgba(20,40,100,0.35)'}/>;
      })}
      <circle cx="100" cy="100" r="75" fill="none" stroke="#2e2e2e" strokeWidth="0.5"/>
      {([{v:'6',a:90},{v:'12',a:180},{v:'18',a:270},{v:'0',a:0}]).map(({v,a})=>{
        const p=pt(100,100,68,a);
        return <text key={v} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill="#666" fontSize="6" fontFamily="monospace">{v}</text>;
      })}
      {Array.from({length:12},(_,i)=>{
        const p1=pt(100,100,83,i*30), p2=pt(100,100,i%3===0?76:80,i*30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={W} strokeWidth={i%3===0?1.8:0.8}/>;
      })}
      <text x="100" y="63" textAnchor="middle" fill="#555" fontSize="6.5"
        fontFamily="sans-serif" letterSpacing="2">GMT</text>
      {/* GMT 24h arrow hand */}
      <line x1={gmtTail.x} y1={gmtTail.y} x2={gmtTip.x} y2={gmtTip.y}
        stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"/>
      <polygon points={`${gmtTip.x},${gmtTip.y} ${gmtAL.x},${gmtAL.y} ${gmtAR.x},${gmtAR.y}`}
        fill="#e74c3c"/>
      {(()=>{const e=pt(100,100,50,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="4" strokeLinecap="round"/>})()}
      {(()=>{const e=pt(100,100,64,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2" strokeLinecap="round"/>})()}
      <Secs/><Cap/>
    </svg>
  );
}

function PilotDial() {
  const { h, m } = useContext(TimeCtx);
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="bg_pilot" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#181818"/><stop offset="100%" stopColor="#060606"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#bg_pilot)"/>
      <circle cx="100" cy="100" r="97" fill="none" stroke="#333" strokeWidth="2"/>
      <circle cx="100" cy="100" r="90" fill="none" stroke="#1c1c1c" strokeWidth="0.5"/>
      {Array.from({length:60},(_,i)=>{
        const maj=i%5===0, p1=pt(100,100,88,i*6), p2=pt(100,100,maj?82:85,i*6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={maj?W:DIM} strokeWidth={maj?1.5:0.6}/>;
      })}
      <polygon points="100,20 95,31 105,31" fill={W}/>
      {[1,2,3,4,5,6,7,8,9,10,11].map((n,i)=>{
        const p=pt(100,100,65,(i+1)*30);
        return <text key={n} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill={W} fontSize="13" fontFamily="Arial,sans-serif" fontWeight="bold">{n}</text>;
      })}
      <text x="100" y="148" textAnchor="middle" fill="#3a3a3a" fontSize="6"
        fontFamily="sans-serif" letterSpacing="3">FLY-BACK</text>
      {(()=>{const e=pt(100,100,48,h),t=pt(100,100,-16,h); return <>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke={W} strokeWidth="6" strokeLinecap="round"/>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke="#222" strokeWidth="2" strokeLinecap="round"/>
      </>;})()}
      {(()=>{const e=pt(100,100,66,m),t=pt(100,100,-18,m); return <>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke={W} strokeWidth="3" strokeLinecap="round"/>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke="#222" strokeWidth="1" strokeLinecap="round"/>
      </>;})()}
      <Secs/><Cap/>
    </svg>
  );
}

function SkeletonDial() {
  const { h, m } = useContext(TimeCtx);
  const gear = (cx:number, cy:number, r:number, teeth:number) => (
    <g key={`g${cx}${cy}`}>
      <circle cx={cx} cy={cy} r={r} fill="#0f0f0f" stroke="#2e2e2e" strokeWidth="1.2"/>
      <circle cx={cx} cy={cy} r={r-4} fill="none" stroke="#222" strokeWidth="0.5"/>
      {Array.from({length:teeth},(_,i)=>{
        const p1=pt(cx,cy,r-1,i*(360/teeth));
        const p2=pt(cx,cy,r+2.5,i*(360/teeth)+1.5);
        const p3=pt(cx,cy,r+2.5,i*(360/teeth)-1.5);
        return <polygon key={i} points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`} fill="#333"/>;
      })}
      {Array.from({length:4},(_,i)=>{
        const p=pt(cx,cy,r-7,i*90);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#2a2a2a" strokeWidth="1.2"/>;
      })}
      <circle cx={cx} cy={cy} r="2.5" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.8"/>
    </g>
  );
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="skel"/>
      {/* structural bridges */}
      <path d="M55,45 Q38,62 40,86" fill="none" stroke="#2c2c2c" strokeWidth="7" strokeLinecap="round"/>
      <path d="M57,47 Q40,64 42,88" fill="none" stroke="#161616" strokeWidth="2" strokeLinecap="round"/>
      <path d="M145,54 Q163,80 155,112" fill="none" stroke="#2c2c2c" strokeWidth="6" strokeLinecap="round"/>
      <path d="M143,56 Q161,82 153,114" fill="none" stroke="#161616" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M58,146 Q68,163 92,166" fill="none" stroke="#2c2c2c" strokeWidth="5" strokeLinecap="round"/>
      {gear(66, 65, 15, 18)}
      {gear(136, 70, 11, 14)}
      {gear(78, 143, 10, 12)}
      {[0,90,180,270].map((a,i)=>{
        const p=pt(100,100,80,a);
        return <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={W}/>;
      })}
      <path d="M74,43 Q100,29 126,45 Q113,73 100,77 Q87,71 74,43Z" fill="rgba(255,255,255,0.03)"/>
      {(()=>{const e=pt(100,100,50,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2.5" strokeLinecap="round"/>})()}
      {(()=>{const e=pt(100,100,66,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="1.5" strokeLinecap="round"/>})()}
      <Secs/>
      <circle cx="100" cy="100" r="3.5" fill={W}/>
      <circle cx="100" cy="100" r="1.5" fill="#0b0b0b"/>
    </svg>
  );
}

function RacingDial() {
  const { h, m, s } = useContext(TimeCtx);
  const tachy = [{v:'500',t:7.2},{v:'300',t:12},{v:'200',t:18},{v:'150',t:24},{v:'120',t:30},{v:'100',t:36},{v:'80',t:45},{v:'60',t:60}];
  const sCx=62, sCy=100, sEnd=pt(sCx,sCy,10,s);
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="bg_racing" cx="42%" cy="38%" r="68%">
          <stop offset="0%" stopColor="#1a0e0e"/><stop offset="100%" stopColor="#070404"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#bg_racing)"/>
      <circle cx="100" cy="100" r="97" fill="none" stroke="#2a1010" strokeWidth="2"/>
      {/* tachymeter ring */}
      {Array.from({length:60},(_,i)=>{
        const p1=pt(100,100,94,i*6), p2=pt(100,100,i%5===0?89:92,i*6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke="#c0392b" strokeWidth={i%5===0?1.2:0.5}/>;
      })}
      {tachy.map(({v,t})=>{
        const a=(t/60)*360, p=pt(100,100,85,a);
        return <text key={v} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill="#c0392b" fontSize="5" fontFamily="Arial,sans-serif"
          transform={`rotate(${a},${p.x},${p.y})`}>{v}</text>;
      })}
      <text x="100" y="27" textAnchor="middle" fill="#c0392b" fontSize="4.5"
        fontFamily="sans-serif" letterSpacing="3">TACHYMETRE</text>
      {/* dial face */}
      <circle cx="100" cy="100" r="80" fill="#060202"/>
      {Array.from({length:60},(_,i)=>{
        const maj=i%5===0, p1=pt(100,100,78,i*6), p2=pt(100,100,maj?70:74,i*6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={maj?W:DIM} strokeWidth={maj?1.5:0.6}/>;
      })}
      {([{n:'12',a:0},{n:'3',a:90},{n:'6',a:180},{n:'9',a:270}]).map(({n,a})=>{
        const p=pt(100,100,60,a);
        return <text key={n} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill={W} fontSize="11" fontFamily="Arial Black,sans-serif" fontWeight="bold">{n}</text>;
      })}
      {/* 60s sub-dial at 9 */}
      <circle cx={sCx} cy={sCy} r="14" fill="#080202" stroke="#2a1010" strokeWidth="1"/>
      {Array.from({length:12},(_,i)=>{
        const p1=pt(sCx,sCy,12,i*30), p2=pt(sCx,sCy,9,i*30);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={DIM} strokeWidth="0.6"/>;
      })}
      <line x1={sCx} y1={sCy} x2={sEnd.x} y2={sEnd.y} stroke="#e74c3c" strokeWidth="1" strokeLinecap="round"/>
      <circle cx={sCx} cy={sCy} r="1.8" fill="#e74c3c"/>
      <text x={sCx} y={sCy+19} textAnchor="middle" fill={DIM} fontSize="4.5" fontFamily="sans-serif">60s</text>
      <text x="134" y="100" textAnchor="middle" dominantBaseline="central"
        fill="#2a1010" fontSize="6" fontFamily="Arial Black,sans-serif" letterSpacing="1">SPORT</text>
      {(()=>{const e=pt(100,100,52,h),t=pt(100,100,-14,h); return <>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke={W} strokeWidth="5" strokeLinecap="round"/>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </>;})()}
      {(()=>{const e=pt(100,100,65,m),t=pt(100,100,-16,m); return <>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke={W} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1={t.x} y1={t.y} x2={e.x} y2={e.y} stroke="#e74c3c" strokeWidth="0.8" strokeLinecap="round"/>
      </>;})()}
      <Secs/><Cap/>
    </svg>
  );
}

function TourbillonDial() {
  const { h, m, s } = useContext(TimeCtx);
  const cage = { cx:100, cy:140, r:18 };
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="tourbillon"/>
      {[0,90,270].map((a,i)=>{
        const p1=pt(100,100,83,a), p2=pt(100,100,74,a);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={W} strokeWidth="2.5"/>;
      })}
      {Array.from({length:60},(_,i)=>{
        if(i%15===0) return null;
        const p1=pt(100,100,83,i*6), p2=pt(100,100,80,i*6);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={DIM} strokeWidth="0.6"/>;
      })}
      <text x="100" y="64" textAnchor="middle" fill="#666" fontSize="7"
        fontFamily="Georgia,serif" letterSpacing="3">TOURBILLON</text>
      {/* aperture */}
      <circle cx={cage.cx} cy={cage.cy} r={cage.r+3} fill="#080808" stroke="#222" strokeWidth="1.5"/>
      {/* rotating cage */}
      <g transform={`rotate(${s}, ${cage.cx}, ${cage.cy})`}>
        <circle cx={cage.cx} cy={cage.cy} r={cage.r} fill="none" stroke="#3a3a3a" strokeWidth="1.5"/>
        {[0,120,240].map(a=>{
          const p=pt(cage.cx,cage.cy,cage.r-2,a);
          return <line key={a} x1={cage.cx} y1={cage.cy} x2={p.x} y2={p.y} stroke="#3a3a3a" strokeWidth="1.2"/>;
        })}
        {Array.from({length:10},(_,i)=>{
          const p1=pt(cage.cx,cage.cy,cage.r-6,i*36);
          const p2=pt(cage.cx,cage.cy,cage.r-2,i*36+2);
          const p3=pt(cage.cx,cage.cy,cage.r-2,i*36-2);
          return <polygon key={i} points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`} fill="#444"/>;
        })}
        <circle cx={cage.cx} cy={cage.cy} r="4" fill="#111" stroke="#444" strokeWidth="1"/>
      </g>
      {(()=>{const e=pt(100,100,48,h); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="3.5" strokeLinecap="round"/>})()}
      {(()=>{const e=pt(100,100,60,m); return <line x1="100" y1="100" x2={e.x} y2={e.y} stroke={W} strokeWidth="2" strokeLinecap="round"/>})()}
      <Cap/>
    </svg>
  );
}

function RetrogradeDial() {
  const { h, m } = useContext(TimeCtx);
  const hr12 = new Date().getHours() % 12;
  // retrograde minute fan: sweeps from 240° (lower-left) to 120° (lower-right) via 180° (bottom)
  const FAN_S = 240, FAN_E = 120, FAN_SPAN = 120;
  const mAngle = FAN_S - (m / 59.9) * FAN_SPAN; // 240→120 as min goes 0→60
  const mTip = pt(100,100,64,mAngle), mTail = pt(100,100,-14,mAngle);
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Base id="retro"/>
      {/* minute fan tick marks */}
      {Array.from({length:61},(_,i)=>{
        const a=FAN_S-(i/60)*FAN_SPAN;
        const maj=i%5===0, p1=pt(100,100,66,a), p2=pt(100,100,maj?56:62,a);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
          stroke={maj?W:DIM} strokeWidth={maj?1.5:0.6}/>;
      })}
      {/* fan minute labels */}
      {[0,15,30,45,60].map((v,i)=>{
        const a=FAN_S-(v/60)*FAN_SPAN, p=pt(100,100,74,a);
        return <text key={v} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
          fill={DIM} fontSize="7" fontFamily="Arial,sans-serif">{v}</text>;
      })}
      {/* hour dot indicators — top half */}
      {Array.from({length:12},(_,i)=>{
        const p=pt(100,100,74,i*30);
        if(p.y > 108) return null;
        return <circle key={i} cx={p.x} cy={p.y} r={i===hr12?4:2.5}
          fill={i===hr12?W:DIM}/>;
      })}
      {/* small hour markers top */}
      {Array.from({length:12},(_,i)=>{
        const p=pt(100,100,83,i*30);
        if(p.y > 108) return null;
        const p2=pt(100,100,78,i*30);
        return <line key={i} x1={p.x} y1={p.y} x2={p2.x} y2={p2.y} stroke={DIM} strokeWidth="0.8"/>;
      })}
      <text x="100" y="108" textAnchor="middle" fill={DIM} fontSize="5.5"
        fontFamily="Georgia,serif" letterSpacing="2">RETROGRADE</text>
      {/* retrograde hand */}
      <line x1={mTail.x} y1={mTail.y} x2={mTip.x} y2={mTip.y}
        stroke={W} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="100" cy="100" r="3.5" fill={W}/>
      <circle cx="100" cy="100" r="1.5" fill="#0b0b0b"/>
    </svg>
  );
}

/* ── registry ── */
const dialItems = [
  { label: 'Analog Dial',     Dial: AnalogDial      },
  { label: 'Diver',           Dial: DiverDial        },
  { label: 'Racing',          Dial: RacingDial       },
  { label: 'Pilot / Aviation',Dial: PilotDial        },
  { label: 'GMT Dual Time',   Dial: GMTDial          },
  { label: 'Chronograph',     Dial: ChronographDial  },
  { label: 'Skeleton',        Dial: SkeletonDial     },
  { label: 'Tourbillon',      Dial: TourbillonDial   },
  { label: 'Retrograde',      Dial: RetrogradeDial   },
  { label: 'Automatic',       Dial: AutomaticDial    },
  { label: 'Digital',         Dial: DigitalDial      },
  { label: 'Moon Phase',      Dial: MoonPhaseDial    },
  { label: 'Roman Dial',      Dial: RomanDial        },
  { label: 'Stick Dial',      Dial: StickDial        },
];

const N       = dialItems.length;
const SLIDE_W = 240;  // horizontal slot width per slide (px)
const CONT_H  = 360;  // carousel window height (px)

export default function PickPerfectDial() {
  const router  = useRouter();
  const [current, setCurrent] = useState(2);
  const touchX = useRef(0);
  const time   = useTime();

  const go = (dir: number) => setCurrent(c => (c + dir + N) % N);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <TimeCtx.Provider value={time}>
        <div className="max-w-[1400px] mx-auto">
          <span className="block text-xs uppercase tracking-[0.125rem] opacity-60 mb-2.5">
            Pick Perfect Dial
          </span>
          <h2 className="mt-2.5 text-[1.75rem] font-medium text-white">
            Dedicated To Style
          </h2>

          <div className="relative mt-[4.375rem]">
            {/* horizontal carousel window */}
            <div style={{ position: 'relative', height: CONT_H, overflow: 'hidden' }}>
              {dialItems.map(({ label, Dial }, i) => {
                const isActive = i === current;
                const raw  = i - current;
                /* shortest circular distance → smooth infinite wrap */
                const dist = raw > N / 2 ? raw - N : raw < -N / 2 ? raw + N : raw;
                const x    = dist * SLIDE_W;
                const opacity = Math.abs(dist) > 2
                  ? 0
                  : isActive ? 1 : Math.max(0.18, 0.42 - (Math.abs(dist) - 1) * 0.14);

                return (
                  <button
                    key={label}
                    onClick={() => isActive ? router.push('/products') : setCurrent(i)}
                    style={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      width: 220,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      transform: `translate(calc(-50% + ${x}px), -50%) scale(${isActive ? 1 : 0.82})`,
                      opacity,
                      transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s',
                      border: 'none', background: 'transparent',
                      cursor: 'pointer', outline: 'none', padding: 0,
                    }}
                  >
                    <div style={{
                      width:  isActive ? '13.75rem' : '8.75rem',
                      height: isActive ? '13.75rem' : '8.75rem',
                      filter: isActive ? 'drop-shadow(0 0 20px rgba(255,255,255,0.09))' : 'none',
                      transition: 'width 0.45s, height 0.45s, filter 0.45s',
                    }}>
                      <Dial />
                    </div>

                    <p className="text-xs tracking-[0.06rem] inline-block" style={{
                      marginTop:  isActive ? '1.125rem' : '1.825rem',
                      background: isActive ? '#fff' : 'transparent',
                      color:      isActive ? '#333' : '#fff',
                      padding:    isActive ? '0.5rem 0.75rem' : '0',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all 0.45s',
                    }}>
                      {label}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* left / right nav */}
            <div className="flex justify-center gap-4 mt-6">
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

            {/* horizontal dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {dialItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to ${dialItems[i].label}`}
                  style={{
                    width: i === current ? 20 : 6, height: 6, borderRadius: 3,
                    background: i === current ? '#fff' : 'rgba(255,255,255,0.22)',
                    border: 'none', padding: 0, cursor: 'pointer',
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </TimeCtx.Provider>
    </section>
  );
}

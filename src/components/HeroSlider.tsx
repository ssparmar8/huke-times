'use client';

import { useEffect, useState } from 'react';

const SLIDES = [
  '/watch-images/watch-25.jpg',
  '/watch-images/watch-23.jpg',
  '/watch-images/watch-19.jpg',
  '/watch-images/watch-26.jpg',
  '/watch-images/watch-27.jpg',
  '/watch-images/watch-28.jpg',
  '/watch-images/watch-32.jpg',
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => {
        setPrev(c);
        return (c + 1) % SLIDES.length;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Slides */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-10" />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { setPrev(current); setCurrent(i); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-6' : 'bg-white/40 w-2 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

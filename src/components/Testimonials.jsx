import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setIdx((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[idx];

  const slide = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40, transition: { duration: 0.3 } }),
  };

  return (
    <section style={{ background: '#FAFAFA', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 line-grid pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Customers Say"
          subtitle="Real feedback from contractors, hardware retailers, and civil engineers across Ahmedabad and Gujarat."
          center
        />

        <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={idx}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                background: '#fff', borderRadius: 20,
                border: '1px solid #E4E4E7', padding: '2.5rem 2rem',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 4px 24px -8px rgba(9,9,11,0.07)',
              }}
            >
              <div className="quote-mark" style={{ position: 'absolute', top: -8, left: 20 }}>"</div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} style={{ color: '#F59E0B', fill: 'rgba(245,158,11,0.25)' }} />
                ))}
              </div>
              {/* Quote */}
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: '#09090B', lineHeight: 1.65, textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                "{t.review}"
              </p>
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.875rem', color: '#fff', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9375rem', color: '#09090B' }}>{t.name}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A1A1AA', marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button onClick={() => go(-1)} className="btn-ghost" style={{ padding: '0.5rem 0.75rem', borderRadius: 10 }} aria-label="Previous">
              <ChevronLeft size={16} />
            </button>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                style={{
                  height: 8, borderRadius: 99, border: 'none', cursor: 'pointer',
                  width: i === idx ? 24 : 8,
                  background: i === idx ? '#F59E0B' : '#D4D4D8',
                  transition: 'all 0.25s',
                }}
              />
            ))}
            <button onClick={() => go(1)} className="btn-ghost" style={{ padding: '0.5rem 0.75rem', borderRadius: 10 }} aria-label="Next">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

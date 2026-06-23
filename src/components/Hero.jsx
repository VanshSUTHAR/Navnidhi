import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { COMPANY } from '../data/content';
import { FEATURED_PRODUCTS } from '../data/products';

const HERO_IMGS = [
  FEATURED_PRODUCTS[1],
  FEATURED_PRODUCTS[0],
  FEATURED_PRODUCTS[6],
];

const TRUST = [
  '500+ Products In Stock',
  'Pan-Gujarat Delivery',
  'ISI-Marked & BIS Certified',
];

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const [activeCard, setActiveCard] = useState(1); // Default to center card (index 1)

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: '#09090B' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 dot-grid-light pointer-events-none opacity-60" />
      {/* Warm glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%', right: '-5%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-5%', left: '-5%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.div custom={0} variants={item}>
              <span className="eyebrow-dark">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', display: 'inline-block', marginRight: 2 }} />
                Authorized Distributor · Veen & Kankai
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={item}
              className="hero-title"
              style={{ color: '#FAFAFA' }}
            >
              Gujarat's Trusted
              <br />
              <span className="text-amber-grad">Plumbing Supply</span>
              <br />
              Partner
            </motion.h1>

            {/* Sub */}
            <motion.p custom={2} variants={item} style={{ color: '#A1A1AA', fontSize: '1rem', lineHeight: 1.7, maxWidth: '36rem' }}>
              Navnidhi Trading Co. supplies ISI-marked UPVC, CPVC, SWR pipes, brass cocks,
              and premium fittings to builders and contractors across Ahmedabad and Gujarat.
              Wholesale pricing. Same-day dispatch.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={item} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); scrollTo('products'); }}
                className="btn-amber"
                style={{ padding: '0.875rem 1.75rem', fontSize: '0.875rem' }}
              >
                Browse Products
                <ArrowRight size={16} />
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-ghost-light"
                style={{ padding: '0.875rem 1.75rem', fontSize: '0.875rem' }}
              >
                <Phone size={15} />
                {COMPANY.phone}
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div custom={4} variants={item} className="flex flex-wrap gap-2.5 pt-2">
              {TRUST.map((t) => (
                <div key={t} className="flex items-center gap-1.5" style={{ fontSize: '0.75rem', color: '#71717A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  <CheckCircle size={13} style={{ color: '#F59E0B', flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </motion.div>

            {/* Metrics row */}
            <motion.div
              custom={5}
              variants={item}
              className="grid grid-cols-3 gap-6 pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: '0.5rem' }}
            >
              {[
                { v: '500+', l: 'SKUs in Stock' },
                { v: '1,200+', l: 'Orders Fulfilled' },
                { v: '17+', l: 'Years of Trust' },
              ].map((m) => (
                <div key={m.l}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.03em', color: '#FAFAFA' }}>
                    {m.v}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#71717A', fontWeight: 500, marginTop: '2px', letterSpacing: '0.02em' }}>
                    {m.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Product cards stack */}
          <div className="hidden lg:flex justify-center items-center relative" style={{ height: 520 }}>
            {/* Soft glow behind cards */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 340, height: 340,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            {HERO_IMGS.map((product, i) => {
              const position = i === activeCard ? 'center' : ((i - activeCard + 3) % 3 === 1 ? 'left' : 'right');
              const isCenter = position === 'center';

              let animateProps = {};
              let cardStyles = {};

              if (position === 'center') {
                animateProps = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 };
                cardStyles = {
                  width: 240,
                  background: '#FAFAFA',
                  borderColor: '#E4E4E7',
                  zIndex: 20,
                  boxShadow: '0 24px 64px -12px rgba(0,0,0,0.4)',
                };
              } else if (position === 'left') {
                animateProps = { opacity: 0.8, x: -80, y: 30, scale: 0.83, rotate: -12 };
                cardStyles = {
                  width: 240,
                  background: '#18181B',
                  borderColor: '#27272A',
                  zIndex: 10,
                };
              } else {
                animateProps = { opacity: 0.8, x: 80, y: 30, scale: 0.83, rotate: 12 };
                cardStyles = {
                  width: 240,
                  background: '#18181B',
                  borderColor: '#27272A',
                  zIndex: 10,
                };
              }

              return (
                <motion.div
                  key={product.name}
                  onClick={() => setActiveCard(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${product.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCard(i);
                    }
                  }}
                  animate={animateProps}
                  transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                  style={{
                    position: 'absolute',
                    borderRadius: 20,
                    border: '1px solid',
                    padding: '18px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, border-color 0.3s',
                    ...cardStyles,
                  }}
                >
                  {/* Premium badge */}
                  {isCenter && product.badge && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      background: '#F59E0B', borderRadius: 6,
                      padding: '3px 8px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '9px', fontWeight: 500,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: '#09090B',
                      zIndex: 30,
                    }}>
                      {product.badge}
                    </div>
                  )}

                  {/* Image container */}
                  <div style={{
                    background: isCenter ? '#F4F4F5' : '#09090B',
                    borderRadius: 12,
                    aspectRatio: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    marginBottom: '14px',
                    transition: 'background-color 0.3s',
                  }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      width={240}
                      height={240}
                      fetchPriority={isCenter ? "high" : "low"}
                      style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Category */}
                  <div style={{
                    fontSize: '10px',
                    color: '#D97706',
                    fontFamily: 'JetBrains Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>
                    {product.category} · {product.name.includes('Veen') ? 'Veen™' : 'Kankai™'}
                  </div>

                  {/* Name */}
                  <div style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: '15px',
                    color: isCenter ? '#09090B' : '#FAFAFA',
                    marginTop: '4px',
                    lineHeight: 1.25,
                    transition: 'color 0.3s',
                  }}>
                    {product.name}
                  </div>

                  {/* Description */}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{ fontSize: '11px', color: '#71717A', marginTop: '6px', lineHeight: 1.5, overflow: 'hidden' }}
                    >
                      {product.desc}
                    </motion.div>
                  )}

                  {/* Ping dot */}
                  {isCenter && (
                    <div style={{ position: 'absolute', bottom: 18, right: 18, width: 8, height: 8, borderRadius: '50%', background: '#14B8A6' }}>
                      <div style={{ position: 'absolute', inset: -3, borderRadius: '50%', border: '1.5px solid rgba(20,184,166,0.3)', animation: 'ping 1.8s ease-out infinite' }} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

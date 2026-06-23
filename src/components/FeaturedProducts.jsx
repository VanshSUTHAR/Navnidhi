import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { FEATURED_PRODUCTS } from '../data/products';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Fittings & Storage', value: 'fittings' },
  { label: 'Plumbing Cocks', value: 'cocks' },
  { label: 'PVC Pipes', value: 'pipes' },
];

const BADGE_COLORS = {
  'Best Seller': { bg: '#FFFBEB', border: '#FCD34D', color: '#92400E' },
  'Top Rated':   { bg: '#EEF2FF', border: '#C7D2FE', color: '#4338CA' },
  'Popular':     { bg: '#ECFDF5', border: '#A7F3D0', color: '#065F46' },
  'New Arrival': { bg: '#FAF5FF', border: '#E9D5FF', color: '#6D28D9' },
  'Value Pack':  { bg: '#FFFBEB', border: '#FDE68A', color: '#B45309' },
};

const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

export default function FeaturedProducts() {
  const [filter, setFilter] = useState('all');

  const products = FEATURED_PRODUCTS.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'pipes') return p.category === 'PVC Pipes';
    if (filter === 'cocks') return ['Pillar Cock', 'Sink Cock', 'Angle Cock', 'Flush Cock'].includes(p.category);
    if (filter === 'fittings') return ['UPVC Fitting', 'SWR Fittings', 'Water Storage'].includes(p.category);
    return true;
  });

  return (
    <section id="featured" style={{ background: '#FAFAFA', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Featured Selection"
          title="Most Requested Products"
          subtitle="Handpicked Veen & Kankai products sized accurately to Indian standard dimensions."
          center
        />

        {/* Filter bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <SlidersHorizontal size={13} style={{ color: '#D97706' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A1A1AA', marginRight: 4 }}>Filter:</span>
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`filter-pill ${filter === f.value ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {products.map((product) => {
              const badge = BADGE_COLORS[product.badge] || BADGE_COLORS['Popular'];
              return (
                <motion.div
                  layout
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={scrollToContact}
                  className="group card-white cursor-pointer flex flex-col"
                  style={{ overflow: 'hidden', padding: 0 }}
                >
                  <div className="product-img-wrap" style={{ position: 'relative' }}>
                    <img src={product.image} alt={product.name} width={300} height={300} loading="lazy" onError={(e) => { e.target.style.opacity = 0; }} />
                    {/* Badge */}
                    <span className="badge" style={{ position: 'absolute', top: 10, left: 10, background: badge.bg, borderColor: badge.border, color: badge.color }}>
                      {product.badge}
                    </span>
                    {/* Hover overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,9,11,0.45)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(2px)' }} className="group-hover:!opacity-100">
                      <button onClick={(e) => { e.stopPropagation(); scrollToContact(); }} className="btn-amber" style={{ padding: '0.5rem 1.125rem', fontSize: '0.75rem' }}>
                        Get Quote
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: '1rem 1.125rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D97706' }}>{product.category}</span>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9375rem', color: '#09090B', lineHeight: 1.3 }} className="group-hover:!text-amber-600">
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: '#52525B', lineHeight: 1.55, marginTop: 4 }}>{product.desc}</p>
                  </div>
                  <div style={{ padding: '0.625rem 1.125rem 1rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#09090B', fontFamily: 'Syne, sans-serif', transition: 'color 0.2s' }} className="group-hover:!text-amber-600">
                      Rate Sheet
                    </span>
                    <ArrowRight size={12} style={{ color: 'inherit', transition: 'transform 0.2s' }} className="group-hover:!translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="btn-ghost">
            Request Full Catalog PDF
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

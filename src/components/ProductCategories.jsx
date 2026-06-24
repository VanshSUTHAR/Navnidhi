import { motion } from 'framer-motion';
import { Pipette, Droplets, Container, ArrowDownCircle, Hammer, HardHat, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { PRODUCT_CATEGORIES } from '../data/products';

const ICONS = { Pipette, Droplets, Container, ArrowDownCircle, Hammer, HardHat };

const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

export default function ProductCategories() {
  return (
    <section id="products" style={{ background: '#09090B', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.4 }} />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Our Products"
          title={<>Premium Plumbing & Industrial Solutions</>}
          subtitle="Explore our extensive range of high-quality plumbing, sanitary, piping, and industrial products, sourced directly from trusted manufacturers like Veen and Kankai to ensure superior durability, performance, and reliability."
          light
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCT_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon] || Pipette;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onClick={scrollToContact}
                className="group card-ink cursor-pointer flex flex-col"
                style={{ overflow: 'hidden' }}
              >
                {/* Image or placeholder */}
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#18181B', position: 'relative' }}>
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease', display: 'block' }}
                      className="group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={24} style={{ color: '#F59E0B' }} />
                      </div>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525B' }}>Navnidhi Stock Item</span>
                    </div>
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,9,11,0.8) 0%, transparent 60%)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: 12, left: 12, width: 32, height: 32, borderRadius: 8, background: 'rgba(9,9,11,0.7)', border: '1px solid #27272A', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={14} style={{ color: '#F59E0B' }} />
                  </div>
                </div>

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#FAFAFA', marginBottom: '0.5rem', lineHeight: 1.25, transition: 'color 0.2s' }} className="group-hover:!text-amber-400">
                      {cat.name}
                    </h3>
                    <p style={{ fontSize: '0.8125rem', color: '#71717A', lineHeight: 1.6 }}>{cat.desc}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', fontWeight: 600, color: '#D97706', marginTop: '1.25rem', transition: 'gap 0.2s, color 0.2s', fontFamily: 'Syne, sans-serif' }} className="group-hover:!text-amber-400 group-hover:!gap-2">
                    <span>Enquire Wholesale Rates</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

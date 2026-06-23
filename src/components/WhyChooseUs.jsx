import { motion } from 'framer-motion';
import { ShieldCheck, Tag, Star, Truck, Headphones, Package, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { WHY_CHOOSE_US } from '../data/content';

const ICON_MAP = { ShieldCheck, Tag, Star, Truck, Headphones, Package };

export default function WhyChooseUs() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="why-us" style={{ background: '#FAFAFA', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 line-grid pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Our Strengths"
          title="What Makes Navnidhi Different"
          subtitle="Beyond supplying fittings — we provide logistical support, bulk reliability, and custom solutions built for professional worksites."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group card-white"
                style={{ padding: '1.75rem' }}
              >
                <div className="icon-box mb-5">
                  <Icon size={18} />
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#09090B', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#71717A', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
                <div style={{ height: 2, width: 0, background: '#F59E0B', borderRadius: 99, marginTop: '1.25rem', transition: 'width 0.3s ease' }} className="group-hover:!w-10" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            marginTop: '4rem', borderRadius: 18,
            background: '#09090B', padding: '2.5rem 2rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
            position: 'relative', overflow: 'hidden',
          }}
          className="md:!flex-row md:!justify-between"
        >
          <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.4 }} />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }} className="md:!text-left">
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.375rem', color: '#FAFAFA' }}>
              Ready to Partner with Navnidhi?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#71717A', marginTop: '0.375rem', maxWidth: '36rem' }}>
              Contact our sales desk for wholesale quotes, logistics scheduling, or custom product packaging for builders.
            </p>
          </div>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="btn-amber" style={{ position: 'relative', zIndex: 1, flexShrink: 0, padding: '0.875rem 1.75rem' }}>
            Request Direct Quote
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

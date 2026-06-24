import { motion } from 'framer-motion';
import { CheckCircle, Shield, Calendar, Users, Package } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { COMPANY } from '../data/content';

const PILLARS = [
  { icon: Calendar, label: 'Established', value: '2008' },
  { icon: Users, label: 'Happy Customers', value: '1,200+' },
  { icon: Package, label: 'Product SKUs', value: '500+' },
];

const POINTS = [
  'Authorized wholesale distributor of Veen & Kankai premium brand portfolios.',
  'GST-registered proprietor firm operating in Dholka, Ahmedabad since 2008.',
  'Consistent supply lines to contractors, builders, and retailers across Gujarat.',
  'Uncompromising quality control, wholesale pricing, and on-time delivery.',
];

const IMGS = [
  { src: 'https://5.imimg.com/data5/SELLER/Default/2024/6/428481988/MX/WX/DX/223657018/upvc-brass-fitting-250x250.jpg', name: 'UPVC Fitting' },
  { src: 'https://5.imimg.com/data5/SELLER/Default/2024/6/427320316/SB/VM/UH/223657018/aquara-pillar-cock-250x250.jpg', name: 'Aquara Cock' },
  { src: 'https://5.imimg.com/data5/SELLER/Default/2024/6/428445908/HE/KM/XQ/223657018/swr-tee-1-250x250.jpg', name: 'SWR Pipe Tee' },
  { src: 'https://5.imimg.com/data5/SELLER/Default/2024/6/428443669/SY/TH/FL/223657018/rigid-pvc-pipes-1-250x250.jpg', name: 'PVC Pipes' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ padding: '6rem 0', background: '#fff' }}>
      <div className="absolute inset-0 line-grid pointer-events-none opacity-50" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Our Story"
          title="Trusted Wholesaler for Plumbing & Piping Systems"
          subtitle={`Since ${COMPANY.established}, Navnidhi Trading Co. has served as Gujarat's preferred source for commercial, industrial, and residential plumbing. We partner with premier brands to deliver verified, reliable systems at wholesale scale.`}
          center
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              {IMGS.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-xl overflow-hidden border border-ink-200 group"
                  style={{ aspectRatio: '1', background: '#FAFAFA' }}
                >
                  <img
                    src={img.src}
                    alt={img.name}
                    width={250}
                    height={250}
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    className="group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
            {/* Float badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: -16, right: -12,
                background: '#fff', borderRadius: 14,
                border: '1px solid #E4E4E7',
                padding: '14px 18px',
                boxShadow: '0 16px 40px -12px rgba(9,9,11,0.14)',
                display: 'flex', alignItems: 'center', gap: 12,
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#FFFBEB', border: '1px solid #FCD34D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={18} style={{ color: '#D97706' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#09090B', lineHeight: 1 }}>17+</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A1A1AA', marginTop: 3 }}>Years of Trust</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Details */}
          <div className="flex flex-col gap-8">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    style={{
                      background: '#FAFAFA', border: '1px solid #E4E4E7',
                      borderRadius: 12, padding: '1rem 0.875rem',
                      textAlign: 'center',
                    }}
                  >
                    <Icon size={15} style={{ color: '#D97706', margin: '0 auto 8px' }} />
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#09090B' }}>{p.value}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A1A1AA', marginTop: 2 }}>{p.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mission */}
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#09090B', marginBottom: '0.875rem', borderLeft: '3px solid #F59E0B', paddingLeft: '0.875rem' }}>
                Our Distribution Commitment
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#52525B', lineHeight: 1.7 }}>
                We bridge premium manufacturers and professional worksites. By holding inventory in our Dholka warehouse, we eliminate waiting times for major projects in Ahmedabad and surrounding Gujarat.
              </p>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3">
              {POINTS.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="check-row"
                >
                  <div className="check-dot">
                    <CheckCircle size={11} />
                  </div>
                  <span>{pt}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-amber"
              style={{ alignSelf: 'flex-start', padding: '0.875rem 1.75rem' }}
            >
              Request Corporate Quote
              <CheckCircle size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

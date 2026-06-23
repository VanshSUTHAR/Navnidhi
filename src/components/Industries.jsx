import { motion } from 'framer-motion';
import { Home, Building2, Factory, Landmark, Wrench } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { INDUSTRIES } from '../data/content';

const ICON_MAP = { Home, Building2, Factory, Landmark, Wrench };

export default function Industries() {
  return (
    <section style={{ background: '#fff', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Applications"
          title="Sectors We Supply"
          subtitle="From minor home piping updates to major municipal wastewater setups — engineered to meet the standards of diverse builds."
          center
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Home;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="industry-card"
              >
                <div className="icon-box">
                  <Icon size={20} />
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#09090B', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#A1A1AA', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
        <div className="divider-amber" style={{ marginTop: '4rem', opacity: 0.6 }} />
      </div>
    </section>
  );
}

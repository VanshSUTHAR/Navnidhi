import { motion } from 'framer-motion';
import AnimatedCounter from './ui/AnimatedCounter';
import { STATS } from '../data/content';

export default function Stats() {
  return (
    <section style={{ background: '#09090B', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.4 }} />
      <div
        className="absolute pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)' }}
      />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0" style={{ borderRadius: 16, border: '1px solid #27272A', overflow: 'hidden' }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '2.5rem 2rem',
                borderRight: i < 3 ? '1px solid #27272A' : 'none',
                borderBottom: i < 2 ? '1px solid #27272A' : 'none',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.01)',
              }}
            >
              <div className="stat-num">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#71717A', marginTop: '8px', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`section-heading-wrap ${center ? 'text-center' : 'text-left'}`}
      style={{ textAlign: center ? 'center' : 'left' }}
    >
      {eyebrow && (
        <div style={{ display: 'flex', justifyContent: center ? 'center' : 'flex-start', marginBottom: '1rem' }}>
          <span className={light ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`section-heading-title ${light ? 'text-ink-50' : 'text-ink-950'}`}
        style={{
          color: light ? '#FAFAFA' : '#09090B',
          marginBottom: subtitle ? '1.25rem' : 0,
          maxWidth: center ? '58rem' : 'none',
          marginLeft: center ? 'auto' : '0',
          marginRight: center ? 'auto' : '0',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-heading-sub ${light ? 'text-ink-400' : 'text-ink-600'}`}
          style={{
            color: light ? '#A1A1AA' : '#52525B',
            maxWidth: center ? '44rem' : '36rem',
            marginLeft: center ? 'auto' : '0',
            marginRight: center ? 'auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

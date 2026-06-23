import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: '3rem', textAlign: center ? 'center' : 'left' }}
    >
      {eyebrow && (
        <div style={{ display: 'flex', justifyContent: center ? 'center' : 'flex-start', marginBottom: '1rem' }}>
          <span className={light ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
        </div>
      )}
      <h2
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.625rem, 3vw + 0.875rem, 3rem)',
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          color: light ? '#FAFAFA' : '#09090B',
          marginBottom: subtitle ? '1rem' : 0,
          maxWidth: center ? '38rem' : 'none',
          marginLeft: center ? 'auto' : '0',
          marginRight: center ? 'auto' : '0',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '1rem',
            color: light ? '#A1A1AA' : '#52525B',
            lineHeight: 1.7,
            maxWidth: center ? '40rem' : '36rem',
            margin: center ? '0 auto' : '0',
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

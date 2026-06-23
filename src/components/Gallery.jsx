import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { GALLERY_IMAGES } from '../data/products';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" style={{ background: '#09090B', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.4 }} />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Visual Portfolio"
          title="Product Showcase"
          subtitle="A sample of authentic brass cocks, couplers, rigid pipes, and high-pressure fittings supplied to commercial sites."
          light
          center
        />

        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5" style={{ columnGap: '0.875rem' }}>
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: (i % 5) * 0.04, duration: 0.45 }}
              className="gallery-card"
              onClick={() => setLightbox(img)}
              role="button"
              tabIndex={0}
              aria-label={`View larger image of ${img.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightbox(img);
                }
              }}
            >
              <div className="gallery-img" style={{ background: '#18181B' }}>
                <img src={img.src} alt={img.alt} width={150} height={150} loading="lazy" onError={(e) => { e.target.style.opacity = 0; }} />
              </div>
              <div className="gallery-label" style={{ color: '#A1A1AA', background: '#18181B', borderTop: '1px solid #27272A' }}>
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(12px)' }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.94, y: 16 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 16 }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                style={{ background: '#fff', borderRadius: 20, padding: '1.25rem', maxWidth: 420, width: '100%', position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
              >
                <button
                  onClick={() => setLightbox(null)}
                  style={{ position: 'absolute', top: -14, right: -14, width: 36, height: 36, borderRadius: '50%', background: '#09090B', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                >
                  <X size={15} />
                </button>
                <div style={{ background: '#FAFAFA', borderRadius: 12, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem', marginBottom: '1rem' }}>
                  <img src={lightbox.src} alt={lightbox.alt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8 }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#09090B' }}>{lightbox.alt}</h4>
                  <span className="eyebrow" style={{ marginTop: '0.5rem', display: 'inline-flex', fontSize: '9px' }}>Authentic Factory Supply</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

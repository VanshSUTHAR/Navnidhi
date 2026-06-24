import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { COMPANY } from '../data/content';

const EMPTY = { name: '', phone: '', email: '', message: '' };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Full name is required';
  if (!f.phone.trim()) e.phone = 'Phone number is required';
  else if (!/^[6-9]\d{9}$/.test(f.phone.replace(/\s/g, ''))) e.phone = 'Enter valid 10-digit Indian number';
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email';
  if (!f.message.trim()) e.message = 'Please specify your order/enquiry details';
  return e;
}

function LazyMap() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="map-wrap">
      {visible ? (
        <iframe
          title="Navnidhi Trading Co. Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29408.62617413621!2d72.43836!3d22.44135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ca7b50eb4a5%3A0x1fadbaa6a3abfe1e!2sDholka%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin"
          width="100%" height="220" style={{ border: 0, filter: 'invert(0.88) hue-rotate(180deg) saturate(1.1)', display: 'block' }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div style={{ width: '100%', height: 220, background: '#18181B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3F3F46' }}>Loading map…</span>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('submitting');
    setTimeout(() => { setStatus('success'); setForm(EMPTY); }, 1200);
  };

  const inputStyle = (err) => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${err ? '#EF4444' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 10, padding: '0.75rem 1rem',
    fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500,
    color: '#FAFAFA', outline: 'none', width: '100%', display: 'block',
    transition: 'border-color 0.2s',
  });

  return (
    <section id="contact" style={{ background: '#09090B', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.35 }} />
      <div className="absolute pointer-events-none" style={{ top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)' }} />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Contact us"
          title="Direct Wholesale Enquiries"
          subtitle="Fill out the form or reach us directly. Our sales team compiles rate sheets within 24 hours."
          light
          center
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: '2rem' }}
          >
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#FAFAFA', marginBottom: '1.5rem' }}>
              Send Wholesale Enquiry
            </h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#14B8A6' }}>
                    <CheckCircle size={24} />
                  </div>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#FAFAFA' }}>Enquiry Submitted!</h4>
                  <p style={{ fontSize: '0.875rem', color: '#71717A', marginTop: '0.5rem' }}>Our team will contact you with a rate sheet within 24 hours.</p>
                  <button onClick={() => setStatus(null)} className="btn-ghost-light" style={{ marginTop: '1.5rem' }}>Submit Another</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  {/* Name */}
                  <div className="field">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={onChange} placeholder="e.g. Rajesh Patel" style={inputStyle(errors.name)} />
                    {errors.name && <span style={{ fontSize: '10px', color: '#F87171', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}><AlertCircle size={10} />{errors.name}</span>}
                  </div>
                  {/* Phone + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="field">
                      <label>Phone *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="9876543210" style={inputStyle(errors.phone)} />
                      {errors.phone && <span style={{ fontSize: '10px', color: '#F87171', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}><AlertCircle size={10} />{errors.phone}</span>}
                    </div>
                    <div className="field">
                      <label>Email (optional)</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" style={inputStyle(errors.email)} />
                      {errors.email && <span style={{ fontSize: '10px', color: '#F87171', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}><AlertCircle size={10} />{errors.email}</span>}
                    </div>
                  </div>
                  {/* Message */}
                  <div className="field">
                    <label>Requirement Details *</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="List products, quantities, delivery timeline..." style={{ ...inputStyle(errors.message), resize: 'none' }} />
                    {errors.message && <span style={{ fontSize: '10px', color: '#F87171', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}><AlertCircle size={10} />{errors.message}</span>}
                  </div>
                  <button type="submit" disabled={status === 'submitting'} className="btn-amber" style={{ justifyContent: 'center', padding: '0.9375rem', fontSize: '0.875rem', opacity: status === 'submitting' ? 0.6 : 1 }}>
                    {status === 'submitting' ? (<><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} />Sending...</>) : (<><Send size={15} />Submit Enquiry</>)}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {[
              { Icon: MapPin, label: 'Headquarters', value: COMPANY.address },
              { Icon: Phone, label: 'Call Sales', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
              { Icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="contact-tile">
                <div className="icon-box-dark"><Icon size={16} /></div>
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525B', marginBottom: 4 }}>{label}</div>
                  {href ? (
                    <a href={href} style={{ fontSize: '0.875rem', fontWeight: 500, color: '#FAFAFA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#F59E0B'} onMouseLeave={e => e.target.style.color = '#FAFAFA'}>
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#FAFAFA', lineHeight: 1.55 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            <LazyMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

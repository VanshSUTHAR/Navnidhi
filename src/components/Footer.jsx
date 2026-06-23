import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY } from '../data/content';
import { PRODUCT_CATEGORIES } from '../data/products';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

const goTo = (href) => {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer style={{ background: '#09090B', borderTop: '1px solid #18181B', color: '#71717A', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.25 }} />
      <div className="section-container relative z-10" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, overflow: 'hidden', border: '1px solid #27272A', background: '#18181B', flexShrink: 0 }}>
                <img src={COMPANY.logo} alt="Navnidhi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;background:#F59E0B;display:flex;align-items:center;justify-content:center;font-weight:800;color:#09090B;font-family:Syne,sans-serif;font-size:16px">N</div>`; }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.9375rem', color: '#FAFAFA', lineHeight: 1.2 }}>Navnidhi</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#D97706' }}>Trading Co.</div>
              </div>
            </div>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: '#52525B', maxWidth: 240 }}>
              Trusted supplier of premier plumbing systems, UPVC, CPVC & SWR pipes, taps, and sanitary fittings in Gujarat since 2008.
            </p>
            <div style={{ display: 'inline-flex', padding: '5px 10px', borderRadius: 6, background: '#18181B', border: '1px solid #27272A', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.1em', color: '#D97706', alignSelf: 'flex-start' }}>
              GST: {COMPANY.gst}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#52525B', marginBottom: '1.25rem', borderLeft: '2px solid #F59E0B', paddingLeft: '0.75rem' }}>
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {LINKS.map(l => (
                <li key={l.href}>
                  <button onClick={() => goTo(l.href)} className="footer-link">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#52525B', marginBottom: '1.25rem', borderLeft: '2px solid #F59E0B', paddingLeft: '0.75rem' }}>
              Products
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {PRODUCT_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button onClick={() => goTo('#products')} className="footer-link">{cat.name}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#52525B', marginBottom: '1.25rem', borderLeft: '2px solid #F59E0B', paddingLeft: '0.75rem' }}>
                Reach Us
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { Icon: Phone, text: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                  { Icon: Mail, text: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { Icon: MapPin, text: COMPANY.address },
                ].map(({ Icon, text, href }) => (
                  <li key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <Icon size={13} style={{ color: '#D97706', flexShrink: 0, marginTop: 2 }} />
                    {href ? (
                      <a href={href} className="footer-link" style={{ fontSize: '0.8125rem' }}>{text}</a>
                    ) : (
                      <span style={{ fontSize: '0.8125rem', color: '#52525B', lineHeight: 1.5 }}>{text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3F3F46', marginBottom: 8 }}>Authorized Dealer</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['Veen', 'Kankai'].map(b => (
                  <span key={b} style={{ padding: '4px 10px', borderRadius: 6, background: '#18181B', border: '1px solid #27272A', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#D97706' }}>
                    {b}™
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #18181B', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }} className="sm:!flex-row sm:!justify-between">
          <p style={{ fontSize: '0.75rem', color: '#3F3F46', textAlign: 'center' }}>
            © {new Date().getFullYear()} Navnidhi Trading Co. All rights reserved. · Dholka, Gujarat
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ width: 34, height: 34, borderRadius: 8, background: '#18181B', border: '1px solid #27272A', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s, transform 0.2s', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F59E0B'; e.currentTarget.style.color = '#09090B'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#18181B'; e.currentTarget.style.color = '#D97706'; e.currentTarget.style.transform = 'none'; }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

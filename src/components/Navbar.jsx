import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/content';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-200/50 bg-white flex-shrink-0">
                <img
                  src={COMPANY.logo}
                  alt="Navnidhi Trading Co."
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;background:#F59E0B;display:flex;align-items:center;justify-content:center;font-weight:800;color:#09090B;font-size:14px;font-family:Syne,sans-serif">N</div>`;
                  }}
                />
              </div>
              <div className="leading-none">
                <div className="font-display font-800 text-ink-950 text-sm tracking-tight" style={{fontWeight:800,color: scrolled ? '#09090B' : '#FAFAFA',fontFamily:'Syne,sans-serif'}}>
                  Navnidhi
                </div>
                <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'9px',letterSpacing:'0.12em',textTransform:'uppercase',color:'#D97706',fontWeight:500,lineHeight:1.2,marginTop:'1px'}}>
                  Trading Co.
                </div>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className={`relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive ? '' : (scrolled ? 'hover:text-zinc-950' : 'hover:text-white')
                    }`}
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      color: isActive ? '#09090B' : (scrolled ? '#71717A' : '#D4D4D8'),
                      textDecoration: 'none',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navHighlight"
                        className="absolute inset-0 rounded-lg -z-10"
                        style={{ background: scrolled ? '#F4F4F5' : 'rgba(255, 255, 255, 0.2)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={`tel:${COMPANY.phone}`}
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors px-2 py-1.5 rounded-lg ${
                  scrolled ? 'hover:bg-ink-100' : 'hover:bg-white/10'
                }`}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  color: scrolled ? '#3F3F46' : '#D4D4D8',
                }}
              >
                <Phone size={13} style={{ color: '#D97706' }} />
                <span>{COMPANY.phone}</span>
              </a>
              <button
                onClick={() => handleNav('#contact')}
                className="btn-amber"
                style={{ padding: '0.5rem 1.125rem', fontSize: '0.75rem' }}
              >
                Get a Quote
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Mobile buttons */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY.phone}`}
                className={`p-2 rounded-lg border transition-all ${
                  scrolled
                    ? 'bg-amber-50 border-amber-200 text-amber-600 hover:bg-amber-100'
                    : 'bg-amber-950/40 border-amber-800/60 text-amber-400 hover:bg-amber-900/50'
                }`}
                aria-label="Call"
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-lg border transition-colors ${
                  scrolled
                    ? 'bg-ink-100 border-ink-200 text-ink-800 hover:text-ink-950'
                    : 'bg-white/10 border-white/10 text-zinc-300 hover:text-white hover:bg-white/20'
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(9,9,11,0.25)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-4 right-4 z-40 md:hidden rounded-2xl p-4 shadow-2xl border border-ink-200"
              style={{ background: 'rgba(250,250,250,0.96)', backdropFilter: 'blur(20px)' }}
            >
              <div className="flex flex-col gap-0.5 mb-4">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                      className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        background: isActive ? '#09090B' : 'transparent',
                        color: isActive ? '#fff' : '#3F3F46',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <div className="border-t border-ink-200 pt-4 flex flex-col gap-2.5">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="btn-ghost w-full justify-center"
                >
                  <Phone size={14} style={{ color: '#D97706' }} />
                  {COMPANY.phone}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                  className="btn-amber w-full justify-center"
                >
                  Enquire Now
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

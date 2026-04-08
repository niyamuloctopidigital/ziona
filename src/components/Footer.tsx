import { Facebook, Instagram, Linkedin } from 'lucide-react';

const links = [
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Features', id: 'features' },
  { label: 'Demos', id: 'demos' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: Facebook,  href: '#', label: 'Facebook'  },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn'  },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ flexDirection: 'column', gap: '2.5rem', padding: '3rem 5vw' }}>
      <div className="footer-top">
        <div className="footer-brand">
          <a
            className="footer-logo"
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          >
            <img src="https://zionaai.octopi-digital.com/wp-content/uploads/2026/02/Frame-2147226786.webp" alt="ZIONA AI" style={{ height: '30px', width: 'auto' }} />
          </a>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', maxWidth: '260px', lineHeight: '1.6', marginTop: '0.75rem' }}>
            AI-powered voice agents that book appointments and follow up 24/7 — so your team doesn't have to.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <ul className="footer-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-right">
          <div className="footer-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="footer-social-icon">
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p>© 2026 ZIONA AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

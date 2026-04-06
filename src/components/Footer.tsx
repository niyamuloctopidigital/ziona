const links = [
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Features', id: 'features' },
  { label: 'Demos', id: 'demos' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <a
        className="footer-logo"
        href="#home"
        onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
      >
        <div className="footer-logo-icon">JR</div>
        <span className="footer-logo-text">Jack Ryan AI</span>
      </a>
      <ul className="footer-links">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© 2026 Jack Ryan AI. All rights reserved.</p>
    </footer>
  );
}

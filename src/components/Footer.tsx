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
        <img src="https://zionaai.octopi-digital.com/wp-content/uploads/2026/02/Frame-2147226786.webp" alt="Jack Ryan AI" style={{ height: '30px', width: 'auto' }} />
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
      <p>© 2026 ZIONA AI. All rights reserved.</p>
    </footer>
  );
}

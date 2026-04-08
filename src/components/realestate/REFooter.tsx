const links = [
  { label: 'How It Works', id: 're-how-it-works' },
  { label: 'Features', id: 're-features' },
  { label: 'Demos', id: 're-demos' },
  { label: 'Pricing', id: 're-pricing' },
  { label: 'Contact', id: 're-contact' },
];

export default function REFooter() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <a
        className="footer-logo"
        href="#re-home"
        onClick={(e) => { e.preventDefault(); scrollTo('re-home'); }}
      >
        <img src="https://zionaai.octopi-digital.com/wp-content/uploads/2026/02/Frame-2147226786.webp" alt="ZIONA AI" style={{ height: '30px', width: 'auto' }} />
      </a>
      <ul className="footer-links">
        {links.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© 2026 ZIONA AI. All rights reserved. &nbsp;·&nbsp; Real Estate Solutions</p>
    </footer>
  );
}

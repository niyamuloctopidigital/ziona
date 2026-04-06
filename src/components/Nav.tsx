export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
        <div className="nav-logo-icon">JR</div>
        <span className="nav-logo-text">Jack Ryan AI</span>
      </a>
      <ul className="nav-links">
        <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }}>How It Works</a></li>
        <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features'); }}>Features</a></li>
        <li><a href="#demos" onClick={(e) => { e.preventDefault(); scrollTo('demos'); }}>Demos</a></li>
        <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo('pricing'); }}>Pricing</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
      </ul>
      <button className="btn-nav" onClick={() => scrollTo('contact')}>Book a Demo</button>
    </nav>
  );
}

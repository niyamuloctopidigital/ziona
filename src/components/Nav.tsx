interface NavProps {
  page: 'home' | 'realestate';
  onNavigate: (page: 'home' | 'realestate') => void;
}

export default function Nav({ page, onNavigate }: NavProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const prefix = page === 'realestate' ? 're-' : '';

  const homeLinks = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features',     id: 'features'     },
    { label: 'Demos',        id: 'demos'         },
    { label: 'Pricing',      id: 'pricing'       },
    { label: 'Contact',      id: 'contact'       },
  ];

  const reLinks = [
    { label: 'How It Works', id: 're-how-it-works' },
    { label: 'Features',     id: 're-features'     },
    { label: 'Demos',        id: 're-demos'        },
    { label: 'Pricing',      id: 're-pricing'      },
    { label: 'Contact',      id: 're-contact'      },
  ];

  const links = page === 'realestate' ? reLinks : homeLinks;

  return (
    <nav>
      <a
        className="nav-logo"
        href="#home"
        onClick={(e) => { e.preventDefault(); scrollTo(`${prefix}home`); }}
      >
        <img src="https://zionaai.octopi-digital.com/wp-content/uploads/2026/02/Frame-2147226786.webp" alt="ZIONA AI" style={{ height: '36px', width: 'auto' }} />
      </a>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className={page === 'realestate' ? 'nav-page-active' : 'nav-page-link'}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(page === 'realestate' ? 'home' : 'realestate');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {page === 'realestate' ? '← All Industries' : 'For Real Estate'}
          </a>
        </li>
      </ul>

      <button className="btn-nav" onClick={() => scrollTo(`${prefix}contact`)}>
        Book a Demo
      </button>
    </nav>
  );
}

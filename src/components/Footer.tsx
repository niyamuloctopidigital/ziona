import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

const FOOTER_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/O7FdFwAXD339u8MjAKQH/webhook-trigger/a4b3154d-0e6c-4155-b307-968f8c21adfb';

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
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.email) return;
    setStatus('loading');

    await Promise.allSettled([
      supabase.from('demo_popup_leads').insert({
        first_name: form.firstName,
        last_name: form.lastName,
        phone: form.phone,
        email: form.email,
      }),
      fetch(FOOTER_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          phone: form.phone,
          email: form.email,
        }),
      }),
    ]);

    setStatus('success');
    setForm({ firstName: '', lastName: '', phone: '', email: '' });
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

        <div className="footer-cta-form">
          <h3 className="footer-form-title">Get a live AI call — right to your phone</h3>
          <p className="footer-form-sub">Fill in your details and ZIONA AI will call you in seconds.</p>
          {status === 'success' ? (
            <div className="footer-form-success">
              <span>✓</span> Expect a call shortly — ZIONA AI is dialling now.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="footer-form">
              <div className="footer-form-row">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="footer-input"
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="footer-input"
                />
              </div>
              <div className="footer-form-row">
                <div className="footer-input-wrap">
                  <Phone size={14} className="footer-input-icon" />
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="footer-input footer-input-padded"
                  />
                </div>
                <div className="footer-input-wrap">
                  <Mail size={14} className="footer-input-icon" />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Work email"
                    required
                    className="footer-input footer-input-padded"
                  />
                </div>
              </div>
              <button type="submit" className="footer-form-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Connecting...' : 'Call Me Now — It\'s Free'}
              </button>
            </form>
          )}
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

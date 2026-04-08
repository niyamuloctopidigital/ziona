import { useState, useEffect } from 'react';
import { X, Mail, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

const POPUP_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/O7FdFwAXD339u8MjAKQH/webhook-trigger/a4b3154d-0e6c-4155-b307-968f8c21adfb';

interface DemoPopupProps {
  delay?: number;
}

export default function DemoPopup({ delay = 3000 }: DemoPopupProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const close = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);

    await Promise.allSettled([
      supabase.from('demo_popup_leads').insert({
        first_name: form.firstName,
        last_name: form.lastName,
        phone: form.phone,
        email: form.email,
      }),
      fetch(POPUP_WEBHOOK, {
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

    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  if (!open) return null;

  return (
    <div
      className="popup-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="popup-card">
        <button className="popup-close" onClick={close} aria-label="Close">
          <X size={16} />
        </button>

        {submitted ? (
          <div className="popup-success">
            <div className="popup-success-icon">✓</div>
            <h3>Expect a call shortly.</h3>
            <p>ZIONA AI is already queuing your demo. You'll hear what autonomous calling sounds like — live, on your phone.</p>
          </div>
        ) : (
          <>
            <div className="popup-brand">
              <img
                src="https://zionaai.octopi-digital.com/wp-content/uploads/2026/02/Frame-2147226786.webp"
                alt="ZIONA AI"
                className="popup-logo"
              />
            </div>

            <h2 className="popup-title">
              Hear ZIONA AI call <span>you</span> — live, right now.
            </h2>
            <p className="popup-desc">
              Drop your details below and our AI agent will place a real outbound call to your number. No recording, no slideshow — just the actual voice agent doing what it does 24/7.
            </p>

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="popup-row">
                <div className="popup-field">
                  <label>First Name <span>*</span></label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                  />
                </div>
                <div className="popup-field">
                  <label>Last Name <span>*</span></label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="popup-field">
                <label>Phone <span>*</span></label>
                <div className="popup-input-wrap">
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                  <Phone size={15} className="popup-input-icon" />
                </div>
              </div>

              <div className="popup-field">
                <label>Work Email <span>*</span></label>
                <div className="popup-input-wrap">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                  />
                  <Mail size={15} className="popup-input-icon" />
                </div>
              </div>

              {error && <p className="popup-error">{error}</p>}

              <button type="submit" className="popup-submit" disabled={loading}>
                {loading ? 'Connecting...' : 'Call Me Now — It\'s Free'}
              </button>

              <p className="popup-note">No sales pitch. No obligation. Just the AI, live on your line.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

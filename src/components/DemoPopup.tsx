import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

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
    const dismissed = sessionStorage.getItem('demo-popup-dismissed');
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const close = () => {
    sessionStorage.setItem('demo-popup-dismissed', '1');
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    const { error: dbError } = await supabase.from('demo_popup_leads').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      phone: form.phone,
      email: form.email,
    });
    setLoading(false);
    if (dbError) {
      setError('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
      setTimeout(() => {
        sessionStorage.setItem('demo-popup-dismissed', '1');
        setOpen(false);
      }, 2500);
    }
  };

  if (!open) return null;

  return (
    <div
      className="popup-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="popup-card">
        <button className="popup-close" onClick={close} aria-label="Close">
          <X size={18} />
        </button>

        {submitted ? (
          <div className="popup-success">
            <div className="popup-success-icon">✓</div>
            <h3>You're all set!</h3>
            <p>We'll call you shortly with a live demo. Get ready to experience the future of AI-powered sales.</p>
          </div>
        ) : (
          <>
            <h2 className="popup-title">Receive a FREE live demo call from our AI Salesman!</h2>
            <p className="popup-desc">
              Experience next-level sales without lifting a finger! Our AI Salesman handles leads in real-time and boosts conversions 24/7. Simply enter your information below and you will receive a FREE call — let's show you the future of automated sales today!
            </p>

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="popup-field">
                <label>First Name <span>*</span></label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div className="popup-field">
                <label>Last Name <span>*</span></label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
              <div className="popup-field">
                <label>Phone <span>*</span></label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
              <div className="popup-field">
                <label>Email <span>*</span></label>
                <div className="popup-input-wrap">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <Mail size={16} className="popup-input-icon" />
                </div>
              </div>

              {error && <p className="popup-error">{error}</p>}

              <button type="submit" className="popup-submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

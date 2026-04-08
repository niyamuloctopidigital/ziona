import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import PulseIcon from '../PulseIcon';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/O7FdFwAXD339u8MjAKQH/webhook-trigger/d05360a2-edba-4f7d-a016-5baea537b69e';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function REContact() {
  const [form, setForm] = useState<FormState>({ name: '', company: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');

    const [dbResult] = await Promise.allSettled([
      supabase.from('contact_submissions').insert({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, company: form.company, email: form.email, phone: form.phone, message: form.message }),
      }),
    ]);

    const dbError = dbResult.status === 'fulfilled' ? dbResult.value.error : dbResult.reason;

    if (dbError) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', company: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section className="contact-section" id="re-contact">
      <div className="contact-layout">
        <div>
          <span className="section-tag">Hear It for Yourself</span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            Let's Talk <em>Real Estate</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: '2rem' }}>
            Curious how ZIONA AI integrates with your prospecting workflow? Want to see live examples of it handling seller and buyer calls? Our team is ready to walk you through everything — no pressure, just results.
          </p>
          <a className="contact-link" href="mailto:abdc@gmail.com">
            <span className="contact-link-icon"><PulseIcon icon={Mail} size={16} /></span>
            abdc@gmail.com
          </a>
          <a className="contact-link" href="tel:">
            <span className="contact-link-icon"><PulseIcon icon={Phone} size={16} /></span>
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="fgroup">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="fgroup">
            <label>Brokerage / Team Name</label>
            <input type="text" name="company" placeholder="Your brokerage or team name" value={form.company} onChange={handleChange} />
          </div>
          <div className="fgroup">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="you@yourbrokerage.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="fgroup">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="(470) 000-0000" value={form.phone} onChange={handleChange} />
          </div>
          <div className="fgroup">
            <label>Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your market, your lead volume, and what you'd like ZIONA AI to handle for you..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }} disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Book a Free Demo'}
          </button>
          {status === 'success' && <div className="form-success">Message sent! We'll be in touch within 24 hours.</div>}
          {status === 'error' && <div className="form-error">Something went wrong. Please try again or email us directly.</div>}
        </form>
      </div>
    </section>
  );
}

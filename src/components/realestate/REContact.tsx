import { useState } from 'react';
import { Mail } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import PulseIcon from '../PulseIcon';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/O7FdFwAXD339u8MjAKQH/webhook-trigger/d05360a2-edba-4f7d-a016-5baea537b69e';

interface FormState {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  leadCount: string;
}

export default function REContact() {
  const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', company: '', email: '', phone: '', leadCount: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email) return;
    setStatus('loading');

    const fullName = `${form.firstName} ${form.lastName}`.trim();

    const [dbResult] = await Promise.allSettled([
      supabase.from('contact_submissions').insert({
        name: fullName,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.leadCount ? `Leads in database: ${form.leadCount}` : '',
      }),
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, company: form.company, email: form.email, phone: form.phone, message: form.leadCount ? `Leads in database: ${form.leadCount}` : '' }),
      }),
    ]);

    const dbError = dbResult.status === 'fulfilled' ? dbResult.value.error : dbResult.reason;

    if (dbError) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ firstName: '', lastName: '', company: '', email: '', phone: '', leadCount: '' });
    }
  };

  return (
    <section className="contact-section" id="re-contact">
      <div className="contact-layout">
        <div>
          <span className="section-tag">Hear It for Yourself</span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            Hear It <em>For Yourself</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: '2rem' }}>
            Curious how the AI sounds calling expired listings and handling seller objections? Our team is here to help you book more listing appointments without the grind. We're proud to share live call recordings — this isn't theory, it's working for agents right now.
          </p>
          <a className="contact-link" href="mailto:info@zionaai.com">
            <span className="contact-link-icon"><PulseIcon icon={Mail} size={16} /></span>
            info@zionaai.com
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="fgroup">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="fgroup">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
            </div>
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
            <label>Brokerage <span style={{ opacity: 0.5 }}>(optional)</span></label>
            <input type="text" name="company" placeholder="Your brokerage or team name" value={form.company} onChange={handleChange} />
          </div>
          <div className="fgroup">
            <label>How many leads do you have in your database?</label>
            <select name="leadCount" value={form.leadCount} onChange={handleChange}>
              <option value="">Select a range</option>
              <option value="Under 500">Under 500</option>
              <option value="500–1,000">500–1,000</option>
              <option value="1,000–5,000">1,000–5,000</option>
              <option value="5,000–10,000">5,000–10,000</option>
              <option value="10,000+">10,000+</option>
            </select>
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }} disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'SEND ME LIVE CALL EXAMPLES'}
          </button>
          {status === 'success' && <div className="form-success">Message sent! We'll be in touch within 24 hours.</div>}
          {status === 'error' && <div className="form-error">Something went wrong. Please try again or email us directly.</div>}
        </form>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-layout">
        <div>
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            Let's Talk <em>Results</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: '2rem' }}>
            Curious how AI fits your workflow? Want a live walkthrough? Our team will show you everything — no fluff, no pressure.
          </p>
          <a className="contact-link" href="mailto:ryan@jackryangroup.com">
            <span className="contact-link-icon">✉</span>
            ryan@jackryangroup.com
          </a>
          <a className="contact-link" href="tel:4704377242">
            <span className="contact-link-icon">📞</span>
            (470) 437-7242
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="fgroup">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Sarah Mitchell"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="fgroup">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="sarah@yourbrokerage.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="fgroup">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="(470) 000-0000"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="fgroup">
            <label>Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your business and what you'd like to achieve..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{ marginTop: '0.5rem' }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <div className="form-success">
              Message sent! We'll be in touch within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="form-error">
              Something went wrong. Please try again or email us directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

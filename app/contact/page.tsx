'use client';

import React, { useState } from 'react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AgePulse Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:support@agepulse.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-200">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <section className="space-y-3 text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
          Contact AgePulse
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          Have feedback, bug reports, or feature suggestions? Send us a message below.
        </p>
      </section>

      <div className="max-w-xl mx-auto bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Opening Email Client</h3>
            <p className="text-sm text-slate-300">
              Your message draft has been generated in your default email application. You can also email us directly at <strong>support@agepulse.com</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="contact-msg" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="contact-msg"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-md transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

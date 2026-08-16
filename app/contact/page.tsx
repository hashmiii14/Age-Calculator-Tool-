'use client';

import React, { useState } from 'react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { Send, CheckCircle2, Mail, Heart } from 'lucide-react';
import CuteCharacter from '../../components/ui/CuteCharacter';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AgePulse Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:mdhashmi955@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-purpleText-900 dark:text-purpleText-100">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <section className="space-y-3 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs font-extrabold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5 text-pinkPastel-500" />
          <span>Get In Touch</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-purpleText-900 dark:text-white tracking-tight font-serif">
          Contact <span className="text-pinkPastel-500 font-serif italic">AgePulse</span>
        </h1>
        <p className="text-sm sm:text-base text-purpleText-600 dark:text-purpleText-300 font-medium">
          Have feedback, feature requests, or questions? Send us a message or email us directly at{' '}
          <a href="mailto:mdhashmi955@gmail.com" className="text-pinkPastel-500 font-bold underline">
            mdhashmi955@gmail.com
          </a>.
        </p>
      </section>

      <div className="max-w-xl mx-auto bg-white dark:bg-purpleText-900 p-6 sm:p-8 rounded-3xl sm:rounded-4xl border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute">
        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-3xl bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-500 flex items-center justify-center mx-auto border-2 border-pinkPastel-300 dark:border-purpleText-700">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black font-serif text-purpleText-900 dark:text-white">Email Draft Prepared!</h3>
            <p className="text-xs sm:text-sm text-purpleText-600 dark:text-purpleText-300 font-medium leading-relaxed max-w-sm mx-auto">
              Your default email application has opened with your message. If it did not launch automatically, send an email directly to{' '}
              <a href="mailto:mdhashmi955@gmail.com" className="text-pinkPastel-500 font-bold underline">
                mdhashmi955@gmail.com
              </a>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex justify-center pb-2">
              <CuteCharacter variant="celebrating" size={80} className="drop-shadow-sm" />
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-name" className="block text-xs font-black uppercase tracking-wider text-purpleText-900 dark:text-purpleText-100">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-2xl border-2 border-pinkPastel-200 dark:border-purpleText-800 bg-white dark:bg-purpleText-950 text-purpleText-900 dark:text-white focus:border-pinkPastel-500 focus:outline-none text-sm font-bold placeholder-purpleText-400"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-email" className="block text-xs font-black uppercase tracking-wider text-purpleText-900 dark:text-purpleText-100">
                Your Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-2xl border-2 border-pinkPastel-200 dark:border-purpleText-800 bg-white dark:bg-purpleText-950 text-purpleText-900 dark:text-white focus:border-pinkPastel-500 focus:outline-none text-sm font-bold placeholder-purpleText-400"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-msg" className="block text-xs font-black uppercase tracking-wider text-purpleText-900 dark:text-purpleText-100">
                Your Message
              </label>
              <textarea
                id="contact-msg"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-2xl border-2 border-pinkPastel-200 dark:border-purpleText-800 bg-white dark:bg-purpleText-950 text-purpleText-900 dark:text-white focus:border-pinkPastel-500 focus:outline-none text-sm font-bold placeholder-purpleText-400"
              />
            </div>

            <button
              type="submit"
              className="btn-calculate w-full cursor-pointer py-3.5"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>

      <div className="text-center text-xs text-purpleText-500 dark:text-purpleText-400 font-medium">
        Email us directly at{' '}
        <a href="mailto:mdhashmi955@gmail.com" className="text-pinkPastel-500 font-bold hover:underline">
          mdhashmi955@gmail.com
        </a>
      </div>
    </div>
  );
}

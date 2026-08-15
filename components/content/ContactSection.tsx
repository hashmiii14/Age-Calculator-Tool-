'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Copy, Check, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const contactEmail = 'mdhashmi955@gmail.com';
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject || `AgePulse Inquiry from ${name}`);
    const mailBody = encodeURIComponent(`Name: ${name}\nSender Email: ${userEmail}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact-section"
      className="rounded-3xl sm:rounded-4xl border-2 border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 p-6 sm:p-8 lg:p-10 space-y-8 shadow-cute transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blush-200 dark:border-plum-800 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-plum-900 dark:text-white">
            Get In Touch With Us
          </h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl text-slate-600 dark:text-slate-300 font-medium">
            Have questions, feedback, feature requests, or business inquiries? Contact our team directly via email.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 hover:bg-coral-500 hover:text-white transition-all border border-blush-200 dark:border-plum-700 whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          <span>Dedicated Contact Page</span>
          <ArrowRight className="w-4 h-4 text-coral-500 group-hover:text-white" />
        </Link>
      </div>

      {/* Main Grid: Direct Contact Info + Quick Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        {/* Left Column: Direct Gmail Details (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-coral-100 dark:bg-plum-800 border border-blush-200 dark:border-plum-700 flex items-center justify-center text-coral-500 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-plum-900 dark:text-white">
                  Official Email Address
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Direct Inbox Support
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 flex items-center justify-between gap-3 group">
              <span className="font-mono text-sm sm:text-base font-bold text-coral-500 truncate">
                {contactEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-blush-200 dark:border-plum-700 bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 hover:bg-coral-500 hover:text-white transition-all shrink-0 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${contactEmail}`}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 text-white transition-all shadow-cute cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App ({contactEmail})</span>
              </a>
            </div>

            <div className="text-xs leading-relaxed border-t border-blush-200 dark:border-plum-800 pt-4 space-y-1 text-slate-500 dark:text-slate-400">
              <p className="flex items-center gap-1.5 font-bold text-plum-900 dark:text-slate-200">
                <MessageSquare className="w-3.5 h-3.5 text-coral-500" />
                Typical response time: Within 24 hours
              </p>
              <p>We read every message and value user feedback to continuously improve AgePulse.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Contact Form (3 Cols) */}
        <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-up">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-500 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-plum-900 dark:text-white">
                Email Client Launched!
              </h3>
              <p className="text-sm max-w-md mx-auto leading-relaxed text-slate-600 dark:text-slate-300">
                Your email draft has been generated. You can also write to us directly at{' '}
                <strong className="text-coral-500 font-mono">{contactEmail}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 hover:bg-coral-500 hover:text-white transition-all border border-blush-200 dark:border-plum-700 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-plum-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-coral-500" />
                <span>Send a Quick Message</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sec-contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="sec-contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 text-plum-900 dark:text-white text-sm focus:outline-none focus:border-coral-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sec-contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="sec-contact-email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 text-plum-900 dark:text-white text-sm focus:outline-none focus:border-coral-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sec-contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="sec-contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Feature request, feedback, inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 text-plum-900 dark:text-white text-sm focus:outline-none focus:border-coral-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="sec-contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="sec-contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 text-plum-900 dark:text-white text-sm focus:outline-none focus:border-coral-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-extrabold text-sm bg-coral-500 hover:bg-coral-600 text-white shadow-cute transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to {contactEmail}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}


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
      style={{ backgroundColor: '#161A26', borderColor: '#252A3D' }}
      className="rounded-3xl border p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xl transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#252A3D] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/60">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Support</span>
          </div>
          <h2 style={{ color: '#F2F4FB' }} className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif">
            Get In Touch With Us
          </h2>
          <p style={{ color: '#9AA3C4' }} className="text-sm sm:text-base leading-relaxed max-w-2xl">
            Have questions, feedback, feature requests, or business inquiries? Contact our team directly via email.
          </p>
        </div>

        <Link
          href="/contact"
          style={{ backgroundColor: '#1E2436', borderColor: '#252A3D', color: '#F2F4FB' }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold border hover:bg-[#252C42] hover:border-sky-500/40 transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <span>Dedicated Contact Page</span>
          <ArrowRight className="w-4 h-4 text-sky-400" />
        </Link>
      </div>

      {/* Main Grid: Direct Contact Info + Quick Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        {/* Left Column: Direct Gmail Details (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div
            style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
            className="p-6 rounded-2xl border space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-[#E85D36] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 style={{ color: '#F2F4FB' }} className="text-base font-bold">
                  Official Email Address
                </h3>
                <p style={{ color: '#636B8A' }} className="text-xs">
                  Direct Inbox Support
                </p>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#161A26', borderColor: '#252A3D' }}
              className="p-4 rounded-xl border flex items-center justify-between gap-3 group"
            >
              <span className="font-mono text-sm sm:text-base font-bold text-[#E85D36] truncate">
                {contactEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                style={{ backgroundColor: '#0E1018', borderColor: '#252A3D', color: '#9AA3C4' }}
                className="p-2 rounded-lg border hover:text-white hover:border-[#E85D36]/50 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-bold"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
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
                style={{ backgroundColor: '#E85D36', color: '#fff' }}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#D04521] transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App ({contactEmail})</span>
              </a>
            </div>

            <div style={{ color: '#636B8A' }} className="text-xs leading-relaxed border-t border-[#252A3D] pt-4 space-y-1">
              <p className="flex items-center gap-1.5 font-medium" style={{ color: '#9AA3C4' }}>
                <MessageSquare className="w-3.5 h-3.5 text-[#E85D36]" />
                Typical response time: Within 24 hours
              </p>
              <p>We read every message and value user feedback to continuously improve AgePulse.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Contact Form (3 Cols) */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="lg:col-span-3 p-6 sm:p-8 rounded-2xl border shadow-xl"
        >
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-up">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 style={{ color: '#F2F4FB' }} className="text-xl font-bold">
                Email Client Launched!
              </h3>
              <p style={{ color: '#9AA3C4' }} className="text-sm max-w-md mx-auto leading-relaxed">
                Your email draft has been generated. You can also write to us directly at{' '}
                <strong className="text-[#E85D36] font-mono">{contactEmail}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#F2F4FB' }}
                className="mt-2 px-4 py-2 rounded-xl text-xs font-bold border hover:border-[#E85D36] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 style={{ color: '#F2F4FB' }} className="text-lg font-bold flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#E85D36]" />
                <span>Send a Quick Message</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sec-contact-name" style={{ color: '#9AA3C4' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="sec-contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#F2F4FB' }}
                    className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#E85D36] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sec-contact-email" style={{ color: '#9AA3C4' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="sec-contact-email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                    placeholder="name@example.com"
                    style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#F2F4FB' }}
                    className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#E85D36] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sec-contact-subject" style={{ color: '#9AA3C4' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  id="sec-contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Feature request, feedback, inquiry..."
                  style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#F2F4FB' }}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#E85D36] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="sec-contact-message" style={{ color: '#9AA3C4' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="sec-contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Type your message here..."
                  style={{ backgroundColor: '#161A26', borderColor: '#252A3D', color: '#F2F4FB' }}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#E85D36] transition-colors"
                />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: '#E85D36', color: '#fff' }}
                className="w-full py-3 px-6 rounded-xl font-extrabold text-sm shadow-md hover:bg-[#D04521] transition-colors flex items-center justify-center gap-2"
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

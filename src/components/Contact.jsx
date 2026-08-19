import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  User, 
  FileText 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolio';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast('Email copied to clipboard: ' + personalInfo.email, 'success');
    }
    setTimeout(() => setCopied(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) {
        onShowToast('Please fill out all required fields.', 'error');
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate swift frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }

      if (onShowToast) {
        onShowToast('Message simulated! Thanks for reaching out.', 'success');
      }
    }, 600);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
            <span>GET_IN_TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for full-time frontend/full-stack opportunities, internships, hackathons, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 text-xs font-medium text-slate-300 hover:text-white transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Direct Email</span>
                <p className="text-base font-semibold text-white mt-0.5 break-all">
                  {personalInfo.email}
                </p>
              </div>
            </div>

            {/* Social Connection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github-link"
                className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-slate-300 group-hover:text-white border border-slate-800">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                      GitHub Profile
                    </h4>
                    <p className="text-xs text-slate-400">Explore repositories & code</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin-link"
                className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-indigo-400 border border-slate-800">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      LinkedIn Network
                    </h4>
                    <p className="text-xs text-slate-400">Connect professionally</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Connect →
                </span>
              </a>

              {/* Location */}
              <div className="p-5 rounded-2xl glass-card border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 text-teal-400 border border-slate-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Location</h4>
                  <p className="text-xs text-slate-400">{personalInfo.location}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Frontend Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-brand-300 font-semibold">{formData.name}</span>. This frontend mock has captured your response. I will respond to your email shortly!
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sm font-semibold text-white transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5" htmlFor="contact-name">
                        <User className="w-3.5 h-3.5 text-brand-400" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/60 text-white placeholder-slate-500 text-sm focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5" htmlFor="contact-email">
                        <Mail className="w-3.5 h-3.5 text-brand-400" />
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/60 text-white placeholder-slate-500 text-sm focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5" htmlFor="contact-subject">
                      <FileText className="w-3.5 h-3.5 text-indigo-400" />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/60 text-white placeholder-slate-500 text-sm focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5" htmlFor="contact-message">
                      <MessageSquare className="w-3.5 h-3.5 text-brand-400" />
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/60 text-white placeholder-slate-500 text-sm focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-primary-600 hover:from-brand-500 hover:to-primary-500 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 font-mono">
                    * Pure frontend form with simulated feedback (no backend/database storage required)
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

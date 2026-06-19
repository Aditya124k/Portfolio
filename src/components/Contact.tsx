"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Loader2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    // Simulate API request delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-[#04040a] to-[#030306]">
      {/* Background soft purple glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-purple/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Get In <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            Have a question, research proposal, or speaking opportunity? Drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent-cyan" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                
                {/* Email Info */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-accent-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Email Me</p>
                    <a
                      href="mailto:gudduyadav.mcbu@gmail.com"
                      className="text-sm font-semibold text-slate-200 mt-0.5 hover:text-accent-cyan transition-colors"
                    >
                      gudduyadav.mcbu@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-accent-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Call Me</p>
                    <a
                      href="tel:+919424754593"
                      className="text-sm font-semibold text-slate-200 mt-0.5 hover:text-accent-gold transition-colors"
                    >
                      +91 94247 54593
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-accent-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Location</p>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      Patna, Bihar, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/5 space-y-3">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Follow My Research</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#090a0f]"
            >
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Dr. Kumar"
                          className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="e.g. scholar@example.com"
                          className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Academic Inquiry / Lectureship invitation"
                        className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Write your request or proposal..."
                        className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-cyan to-accent-purple text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-accent-cyan/10 hover:scale-[1.01] transition-all disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed group"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center text-accent-cyan shadow-xl shadow-accent-cyan/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">Message Transmitted</h3>
                      <p className="text-sm text-slate-400 font-light max-w-sm">
                        Thank you for reaching out. Your academic inquiry has been registered. I will respond to your email address shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-xs text-accent-cyan hover:text-white border border-accent-cyan/25 bg-accent-cyan/5 hover:bg-accent-cyan/10 font-semibold px-4 py-2 rounded-lg transition-colors mt-2"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

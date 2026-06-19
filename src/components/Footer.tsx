"use client";

import React from "react";
import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030306] py-12 px-6 overflow-hidden">
      {/* Background soft ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent-cyan/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand Branding */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-bold text-white tracking-wide">Guddu Yadav</h3>
          <p className="text-xs text-slate-500 font-light">
            Assistant Professor & Academic Counselor
          </p>
        </div>

        {/* Quick Links Menu */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          <a href="#about" className="hover:text-accent-cyan transition-colors">About</a>
          <a href="#journey" className="hover:text-accent-cyan transition-colors">Journey</a>
          <a href="#education" className="hover:text-accent-cyan transition-colors">Education</a>
          <a href="#skills" className="hover:text-accent-cyan transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent-cyan transition-colors">Projects</a>
          <a href="#gallery" className="hover:text-accent-cyan transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-accent-cyan transition-colors">Contact</a>
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="mailto:gudduyadav.mcbu@gmail.com"
              className="p-2 rounded-lg border border-white/5 bg-white/5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/5 bg-white/5 text-slate-400 hover:text-accent-cyan transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-accent-cyan/10 hover:border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan hover:text-white transition-all duration-300"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl w-full mx-auto mt-8 pt-8 border-t border-white/5 text-center text-[10px] text-slate-600">
        <p>© {new Date().getFullYear()} Guddu Yadav. Patna, Bihar. All rights reserved.</p>
        <p className="mt-1">Built as a premium academic portfolio experience.</p>
      </div>
    </footer>
  );
}

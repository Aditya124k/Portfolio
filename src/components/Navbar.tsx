"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Crest logo brand */}
        <a href="#" className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors">
          <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center text-accent-cyan font-bold">
            GY
          </div>
          <span className="font-bold tracking-wider text-sm uppercase">Guddu Yadav</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-accent-cyan transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-accent-cyan text-black font-semibold hover:bg-white hover:scale-105 transition-all text-xs"
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile menu triggers */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[68px] left-0 w-full bg-black/95 border-b border-white/10 flex flex-col p-6 space-y-4 text-center text-md font-semibold text-slate-300 z-30">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-accent-cyan py-2 border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2.5 rounded-lg bg-accent-cyan text-black font-semibold hover:bg-white transition-all text-sm block"
          >
            Inquire Now
          </a>
        </div>
      )}
    </nav>
  );
}

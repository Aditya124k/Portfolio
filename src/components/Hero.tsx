"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, ArrowRight, Download, Send } from "lucide-react";

export default function Hero() {
  const titles = [
    "Assistant Professor",
    "Academic Counselor",
    "English Language Educator",
    "UGC NET Qualified Scholar",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(title.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(title.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === title) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  // Mouse tilt effect for 3D Photo Frame
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35vw] h-[35vw] bg-accent-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center Order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel-glow-cyan text-accent-cyan text-sm font-semibold tracking-wide w-fit"
          >
            <GraduationCap className="w-4 h-4" />
            Empowering Minds & Education
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-gold bg-clip-text text-transparent text-glow-cyan">Guddu Yadav</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 text-xl md:text-3xl font-semibold text-slate-300"
            >
              <span>{currentText}</span>
              <span className="animate-pulse text-accent-cyan">|</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-lg max-w-xl leading-relaxed font-light"
          >
            A passionate academic educator and language researcher with over 10 years of experience 
            in lecturing, counseling, and curriculum design. Committed to fostering academic 
            excellence and inspiring student growth at prestigious universities.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#journey"
              className="flex items-center gap-2 bg-gradient-to-r from-accent-cyan to-accent-purple text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-accent-cyan/20 hover:scale-105 transition-all duration-300 group"
            >
              Explore My Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 border border-slate-700 bg-white/5 hover:bg-white/10 hover:border-slate-500 text-slate-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              Contact Me
              <Send className="w-4 h-4 text-accent-cyan" />
            </a>

            <a
              href="#education"
              className="flex items-center gap-2 border border-accent-gold/20 hover:border-accent-gold/50 bg-accent-gold/5 hover:bg-accent-gold/10 text-accent-gold font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              View CV
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right 3D Photo Frame Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
            className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl glass-panel p-4 cursor-pointer transition-transform duration-200 ease-out group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/25 to-accent-gold/25 rounded-2xl opacity-40 group-hover:opacity-60 blur-md transition-opacity duration-300" />
            
            {/* Main Photo Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#090a0f]">
              <Image
                src="/guddu_profile_selfie.jpg"
                alt="Guddu Yadav Selfie"
                fill
                priority
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
              
              {/* Frame Label */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-xs uppercase tracking-widest text-accent-cyan font-bold">Assistant Professor</p>
                <h3 className="text-lg font-bold text-white tracking-wide">Guddu Yadav</h3>
                <p className="text-xs text-slate-400">Patna, Bihar</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BookOpen, Star, UserCheck, Shield, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface Accolade {
  title: string;
  category: "Award" | "Publication" | "Leadership";
  details: string;
  sub: string;
  icon: React.ReactNode;
}

function Counter({ endValue, label, suffix = "" }: { endValue: number; label: string; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500; // ms
    const stepTime = Math.abs(Math.floor(duration / endValue));
    
    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl glass-panel border border-white/5 space-y-2 select-none">
      <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-gold to-accent-cyan bg-clip-text text-transparent tracking-tight text-glow-gold">
        {value}{suffix}
      </span>
      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function Achievements() {
  const accolades: Accolade[] = [
    {
      title: "UGC NET Lectureship Qualification",
      category: "Award",
      details: "Qualified national-level eligibility benchmark for Assistant Professorship, administered by UGC.",
      sub: "December 2017",
      icon: <Shield className="w-5 h-5 text-accent-cyan" />,
    },
    {
      title: "Distance Pedagogy Specialist Certification",
      category: "Award",
      details: "Top-performance citation from STRIDE, IGNOU for development of open learning frameworks.",
      sub: "December 2024",
      icon: <Award className="w-5 h-5 text-accent-gold" />,
    },
    {
      title: "E-Learning Methods in Bihar Colleges",
      category: "Publication",
      details: "Research paper on e-learning adoption in regional education colleges, discussing infrastructure barriers.",
      sub: "Published in Regional Education Review",
      icon: <BookOpen className="w-5 h-5 text-accent-purple" />,
    },
    {
      title: "Post-Colonial Pedagogy Models",
      category: "Publication",
      details: "Scholarly publication on integrating vernacular translation models in English classrooms.",
      sub: "Presented at MGKVP Varanasi Conclave",
      icon: <BookOpen className="w-5 h-5 text-accent-cyan" />,
    },
    {
      title: "Academic Counselor, School of Education",
      category: "Leadership",
      details: "Leading workshops and counseling sessions for distance learners and B.Ed candidates across Patna region.",
      sub: "IGNOU Patna (2021 - Present)",
      icon: <UserCheck className="w-5 h-5 text-accent-gold" />,
    },
    {
      title: "Assistant Professor & Faculty Member",
      category: "Leadership",
      details: "Directing student seminar groups, designing syllabus updates, and mentoring junior lecturers.",
      sub: "MCBU Chhatarpur & Gyanveer University",
      icon: <Star className="w-5 h-5 text-accent-purple" />,
    },
  ];

  const triggerConfetti = (e: React.MouseEvent) => {
    // Custom colorful confetti spray
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ["#06b6d4", "#fbbf24", "#8b5cf6", "#f8fafc"],
    });
  };

  return (
    <section id="achievements" className="relative py-24 px-6 bg-[#030306]">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-gold/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Milestone <span className="bg-gradient-to-r from-accent-gold via-accent-purple to-accent-cyan bg-clip-text text-transparent">Accomplishments</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-cyan mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            An overview of my academic metrics, research papers, awards, and leadership milestones. Click cards to celebrate!
          </p>
        </div>

        {/* Counter Widget Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Counter endValue={10} label="Years Teaching" suffix="+" />
          <Counter endValue={3} label="Universities Served" suffix="" />
          <Counter endValue={1000} label="Students Mentored" suffix="+" />
          <Counter endValue={5} label="Curriculum Designs" suffix="+" />
        </div>

        {/* Accolades & Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accolades.map((accolade, index) => {
            const isAward = accolade.category === "Award";
            const isPub = accolade.category === "Publication";
            
            const badgeTheme = isAward
              ? "border-accent-gold/20 hover:border-accent-gold/45 text-accent-gold bg-accent-gold/5"
              : isPub
              ? "border-accent-purple/20 hover:border-accent-purple/45 text-accent-purple bg-accent-purple/5"
              : "border-accent-cyan/20 hover:border-accent-cyan/45 text-accent-cyan bg-accent-cyan/5";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={triggerConfetti}
                className={`relative rounded-2xl border p-6 flex flex-col justify-between cursor-pointer select-none transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 ${badgeTheme}`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 border border-white/5 text-slate-300">
                      {accolade.category}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                      {accolade.icon}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-md font-bold text-white tracking-wide leading-snug">
                      {accolade.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {accolade.details}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-white/5 justify-between">
                  <span className="text-[10px] text-slate-500 font-semibold">{accolade.sub}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

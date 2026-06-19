"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, MapPin, GraduationCap, Compass, BookOpen, ShieldCheck } from "lucide-react";

export default function About() {
  const details = [
    { icon: <User className="w-5 h-5 text-accent-cyan" />, label: "Full Name", value: "Guddu Yadav" },
    { icon: <MapPin className="w-5 h-5 text-accent-gold" />, label: "Location", value: "Patna, Bihar, India" },
    { icon: <GraduationCap className="w-5 h-5 text-accent-purple" />, label: "Primary Role", value: "Assistant Professor & Counselor" },
    { icon: <Compass className="w-5 h-5 text-accent-cyan" />, label: "Interests", value: "English Literature, Pedagogy, E-Learning" },
    { icon: <BookOpen className="w-5 h-5 text-accent-gold" />, label: "Career Goal", value: "Nurturing educational leadership & research" },
    { icon: <ShieldCheck className="w-5 h-5 text-accent-purple" />, label: "Values", value: "Dedication, Integrity, Inclusivity" },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#030306] to-[#04040a]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-accent-purple/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto z-10 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            About <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos/Gallery Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass-panel border border-white/10 group shadow-2xl"
            >
              <Image
                src="/guddu_profile_full.jpg"
                alt="Guddu Yadav standing in front of Rajju Bhaiya University Prayagraj"
                fill
                className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">Campus Visit</span>
                <p className="text-sm text-slate-300">Rajendra Singh (Rajju Bhaiya) University Prayagraj</p>
              </div>
            </motion.div>
          </div>

          {/* Story & Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">My Personal Story</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                Driven by a deep passion for language and education, my career spans over a decade in university 
                teaching and counseling. Based in Patna, Bihar, I believe that education should be 
                an immersive journey that opens doors to independent thinking and creativity.
              </p>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                As an Assistant Professor and Counselor at renowned institutions like Gyanveer University and 
                IGNOU Regional Centre Patna, I develop student-centric methodologies that bridge traditional 
                learning with flexible digital curriculums. I am highly devoted to distance learning 
                practices, English language instruction, and educational technology.
              </p>
            </motion.div>

            {/* Structured Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-panel hover:bg-white/5 border border-white/5 p-4 rounded-xl flex items-start gap-4 transition-all hover:border-white/10 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{detail.label}</p>
                    <p className="text-sm font-semibold text-slate-200 mt-1">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

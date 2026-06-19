"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, ExternalLink, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  details: string;
  image: string;
  credentialId?: string;
  verifyUrl: string;
}

export default function Certifications() {
  const certificates: Certificate[] = [
    {
      id: 0,
      title: "UGC NET Lectureship Qualification",
      issuer: "University Grants Commission",
      date: "December 2017",
      details: "National Eligibility Test certification declaring eligibility for Assistant Professorship and lectureship roles across India.",
      image: "/education_fb.jpg",
      credentialId: "UGC-NET-2017-DEC-GY",
      verifyUrl: "https://ugcnet.nta.nic.in",
    },
    {
      id: 1,
      title: "Staff Training in Distance Education",
      issuer: "STRIDE, IGNOU",
      date: "December 2024",
      details: "Postgraduate specialization certificate in developing curriculum systems and designing online student counseling portals.",
      image: "/work_fb.jpg",
      credentialId: "IGNOU-STRIDE-DEC-24",
      verifyUrl: "https://www.ignou.ac.in",
    },
    {
      id: 2,
      title: "Advanced Language Pedagogy Cert",
      issuer: "Mahatma Gandhi Kashi Vidyapith University",
      date: "June 2023",
      details: "Specialist certificate in post-colonial literature teaching methodologies and language testing protocols.",
      image: "/education_fb.jpg",
      credentialId: "MGKVP-PED-2023",
      verifyUrl: "https://www.mgkvp.ac.in",
    },
    {
      id: 3,
      title: "UGC NET Research & Education Standards",
      issuer: "UGC / Dr. H.S. Gour University",
      date: "School Year 2019",
      details: "Research and evaluation techniques certificate under Central University standards for higher education.",
      image: "/work_fb.jpg",
      credentialId: "HSG-RES-2019",
      verifyUrl: "http://www.dhsgsu.edu.in",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certifications" className="relative py-24 px-6 bg-[#030306]">
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Certifications & <span className="bg-gradient-to-r from-accent-purple via-accent-gold to-accent-cyan bg-clip-text text-transparent">Credentials</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            Verified academic credentials and training certifications.
          </p>
        </div>

        {/* 3D Stack Carousel Container */}
        <div className="relative flex flex-col items-center justify-center min-h-[420px] w-full">
          <div className="relative w-full max-w-lg h-[320px] flex items-center justify-center">
            
            {certificates.map((cert, index) => {
              // Calculate offset relative to active card
              let offset = index - activeIndex;
              if (offset < -1) offset += certificates.length;
              if (offset > certificates.length - 2) offset -= certificates.length;

              const isActive = offset === 0;
              const isPrev = offset === -1 || (offset === certificates.length - 1 && certificates.length > 2);
              const isNext = offset === 1 || (offset === -certificates.length + 1 && certificates.length > 2);
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              // Compute positioning styles
              const rotation = isActive ? 0 : isPrev ? -8 : 8;
              const translateX = isActive ? 0 : isPrev ? "-60%" : "60%";
              const scale = isActive ? 1 : 0.85;
              const zIndex = isActive ? 30 : 10;
              const opacity = isActive ? 1 : 0.45;

              return (
                <motion.div
                  key={cert.id}
                  style={{ zIndex }}
                  animate={{
                    x: translateX,
                    scale,
                    rotate: rotation,
                    opacity,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 18 }}
                  className="absolute w-full h-full glass-panel border border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-2xl bg-[#0b0c10]/90 select-none cursor-pointer"
                  onClick={() => setActiveIndex(cert.id)}
                >
                  {/* Top card layout */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-2 rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-accent-gold">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="text-xs text-slate-500 font-light">{cert.date}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-accent-cyan font-semibold">
                        {cert.issuer}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {cert.details}
                    </p>
                  </div>

                  {/* Bottom Layout with verification and mini-preview */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    {cert.credentialId && (
                      <span className="text-[10px] font-mono text-slate-500">
                        ID: {cert.credentialId}
                      </span>
                    )}

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent-gold flex items-center gap-1 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Verify Credentials
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Overlapping thumbnail screenshot */}
                  <div className="absolute right-5 top-5 w-14 h-14 rounded-lg overflow-hidden border border-white/10 opacity-30 group-hover:opacity-60 transition-opacity">
                    <Image
                      src={cert.image}
                      alt="Credential image"
                      fill
                      className="object-cover"
                    />
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Carousel controls */}
          <div className="flex gap-6 mt-8 z-20">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  caption: string;
  date: string;
  location: string;
  aspect: string; // for styling masonry heights
}

export default function PhotoStory() {
  const photos: PhotoItem[] = [
    {
      id: 1,
      src: "/guddu_profile_full.jpg",
      title: "University Campus Lecture Visit",
      caption: "Standing in front of the Administrative Building at Rajendra Singh (Rajju Bhaiya) University, Prayagraj during academic exchange.",
      date: "Academic Tour",
      location: "Prayagraj, UP",
      aspect: "aspect-[9/16]",
    },
    {
      id: 2,
      src: "/guddu_profile_selfie.jpg",
      title: "Assistant Professor Faculty Selfie",
      caption: "Celebrating appointment as Assistant Professor at Gyanveer University, Sagar (MP). Dedicated to teaching classical linguistics and modern literature.",
      date: "2026 - Present",
      location: "Gyanveer University, Sagar",
      aspect: "aspect-[1/1]",
    },
    {
      id: 3,
      src: "/education_fb.jpg",
      title: "Academic Qualification Registry",
      caption: "Archival record of official certifications, including Mahatma Gandhi Kashi Vidyapith Varanasi, Nalanda Open University, and UGC NET validation.",
      date: "Archive 2017 - 2024",
      location: "Patna, Bihar",
      aspect: "aspect-[3/4]",
    },
    {
      id: 4,
      src: "/work_fb.jpg",
      title: "Teaching Appointments Record",
      caption: "Chronological documentation of professional milestones, representing lectureships at Maharaja Chhatrasal Bundelkhand University, IGNOU Regional Centre Patna, and Gyanveer University.",
      date: "Archive 2016 - 2026",
      location: "Regional Centre, Patna",
      aspect: "aspect-[3/4]",
    },
  ];

  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="relative py-24 px-6 bg-gradient-to-b from-[#030306] to-[#04040a]">
      {/* Background Neon Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Photo Story <span className="bg-gradient-to-r from-accent-cyan to-accent-gold bg-clip-text text-transparent">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-gold mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            A visual documentation of my academic postings, qualifications, and campus landmarks. Click to enlarge.
          </p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden glass-panel border border-white/5 cursor-pointer group shadow-xl hover:border-white/20 transition-all duration-300"
            >
              {/* Photo Image wrapper */}
              <div className={`relative w-full ${photo.aspect} bg-[#0b0c10]`}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover scale-100 group-hover:scale-[1.03] transition-all duration-500"
                />
                
                {/* Visual overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 opacity-60 group-hover:opacity-85 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-black/60 border border-white/20 text-white shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-accent-cyan" />
                  </div>
                </div>
              </div>

              {/* In-Grid Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                <span className="text-[9px] uppercase tracking-wider text-accent-gold font-bold bg-black/50 border border-white/10 px-2 py-0.5 rounded">
                  {photo.date}
                </span>
                <h3 className="text-sm font-bold text-white tracking-wide mt-2">
                  {photo.title}
                </h3>
                <p className="text-[10px] text-slate-300 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent-cyan" />
                  {photo.location}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Lightbox Overlay Modal */}
        <AnimatePresence>
          {lightboxPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => setLightboxPhoto(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="relative max-w-4xl w-full flex flex-col md:flex-row rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl bg-[#090a0f] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo Box */}
                <div className="relative flex-1 bg-black min-h-[300px] md:min-h-[480px]">
                  <Image
                    src={lightboxPhoto.src}
                    alt={lightboxPhoto.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Description Panel */}
                <div className="w-full md:w-[320px] p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#090a0f]">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-cyan flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {lightboxPhoto.date}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-wide mt-1">
                        {lightboxPhoto.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {lightboxPhoto.caption}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Location</p>
                    <p className="text-xs text-slate-300 font-semibold mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                      {lightboxPhoto.location}
                    </p>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

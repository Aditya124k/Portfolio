"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Github, CheckCircle2, Bookmark } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Interactive English Pedagogy Portal",
      category: "E-Learning Systems",
      description: "An online study portal integrating regional English Literature curricula, enabling self-paced modules and digital learning for learners across Patna, Bihar.",
      image: "/work_fb.jpg",
      technologies: ["Next.js", "Tailwind CSS", "LMS Integration", "Framer Motion"],
      achievements: [
        "Delivered lectures and modules to over 5,000 active university students.",
        "Increased engagement rate by 30% through self-guided instructional design."
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "STRIDE Courseware System",
      category: "Curriculum Design",
      description: "A distance learning framework built under IGNOU STRIDE guidelines. Redesigned training guidelines for regional academic counselors.",
      image: "/education_fb.jpg",
      technologies: ["Instructional Design", "Distance Education Tools", "Digital PDF Modules", "Audio-Visual Systems"],
      achievements: [
        "Adopted as counselor support material at IGNOU Patna.",
        "Improved regional training evaluation scores by 20%."
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Semantics & Phonetics Lab",
      category: "Infrastructure Projects",
      description: "Established a state-of-the-art semantics and English phonetics lab setup at MCBU Chhatarpur to support undergraduate pronunciation and accent studies.",
      image: "/guddu_profile_full.jpg",
      technologies: ["Acoustic Software", "Digital Recording Modules", "Interactive Evaluation Kits"],
      achievements: [
        "Modernized phonetics training protocols for 600+ undergraduates annually.",
        "Created digital student grading templates for lab coordinators."
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  // Hover 3D Tilt State
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Limits rotation between -10 and 10 degrees
    setRotateX(-y / 12);
    setRotateY(x / 12);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHoveredIndex(null);
  };

  return (
    <section id="projects" className="relative py-24 px-6 bg-gradient-to-b from-[#04040a] to-[#030306]">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent-cyan/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Academic & Tech <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            Highlighting interactive teaching portals, laboratory installations, and open learning systems designed by me.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transformStyle: "preserve-3d",
                }}
                className="relative rounded-2xl glass-panel border border-white/5 p-5 flex flex-col justify-between hover:bg-white/5 hover:border-white/10 transition-all duration-300 shadow-2xl h-full cursor-pointer select-none"
              >
                <div>
                  {/* Project image */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/5 bg-[#0e0f14] mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    
                    {/* Category Label */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-bold text-accent-cyan uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed h-16 overflow-hidden text-ellipsis">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements bullet list */}
                  <div className="space-y-2 pt-5 border-t border-white/5 mt-5">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-accent-gold" />
                      Key Accolades
                    </h4>
                    <ul className="space-y-1.5">
                      {project.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs text-slate-400 font-light flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-accent-cyan flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="flex gap-4 pt-6 border-t border-white/5 mt-6 justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Resource Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-accent-cyan hover:text-white transition-colors font-semibold"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

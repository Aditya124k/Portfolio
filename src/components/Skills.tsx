"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Cpu, ArrowUpRight } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
}

export default function Skills() {
  const technicalSkills: SkillItem[] = [
    { name: "English Literature Studies", level: 95 },
    { name: "Linguistics & Grammar", level: 90 },
    { name: "Curriculum & Syllabus Design", level: 88 },
    { name: "Instructional Methodologies", level: 92 },
    { name: "Academic Research & Writing", level: 85 },
  ];

  const softSkills: SkillItem[] = [
    { name: "Public Speaking & Lecturing", level: 95 },
    { name: "Student Counseling & Guidance", level: 92 },
    { name: "Educational Leadership", level: 90 },
    { name: "Classroom Management", level: 88 },
    { name: "Empathetic Mentorship", level: 95 },
  ];

  const tools: string[] = [
    "IGNOU e-Learning",
    "Learning Management Systems (LMS)",
    "Zoom & Teams Instruction",
    "Digital Courseware",
    "Google Scholar & Research Tools",
    "MS Office Suite & LaTeX",
    "Educational Audio-Visual Systems",
    "Distance Learning Platforms",
  ];

  // 3D Tag Cloud Implementation using Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tagList = [
    "Literature", "Pedagogy", "English", "Counseling", "Research",
    "Linguistics", "Semiotics", "IGNOU", "Lecturing", "Curriculum",
    "Mentoring", "Syllabus", "E-learning", "Grammar", "Education",
    "Leadership", "Scholarly", "Tutoring", "Advising", "Writing"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;

    // Project tags onto 3D sphere
    interface Tag {
      text: string;
      x: number;
      y: number;
      z: number;
      color: string;
    }

    const tags: Tag[] = tagList.map((tag, idx) => {
      // Fibonacci sphere distribution
      const k = -1 + (2 * (idx + 1) - 1) / tagList.length;
      const phi = Math.acos(k);
      const theta = Math.sqrt(tagList.length * Math.PI) * phi;
      
      const r = 110; // Sphere radius
      
      // Select premium colors
      const colors = ["#06b6d4", "#fbbf24", "#8b5cf6", "#f8fafc"];
      const color = colors[idx % colors.length];

      return {
        text: tag,
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        color,
      };
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetSpeedX = 0.005;
    let targetSpeedY = 0.005;
    let curSpeedX = 0.005;
    let curSpeedY = 0.005;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2;
      
      targetSpeedX = mouseX * 0.00008;
      targetSpeedY = -mouseY * 0.00008;
    };

    const handleMouseLeave = () => {
      targetSpeedX = 0.003;
      targetSpeedY = 0.003;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let animationId: number;

    const rotateSphere = () => {
      // Dampen speed transitions
      curSpeedX += (targetSpeedX - curSpeedX) * 0.05;
      curSpeedY += (targetSpeedY - curSpeedY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Trigonometric cache
      const cosX = Math.cos(curSpeedY);
      const sinX = Math.sin(curSpeedY);
      const cosY = Math.cos(curSpeedX);
      const sinY = Math.sin(curSpeedX);

      // Render tags
      tags.forEach((tag) => {
        // Rotate X axis
        const y1 = tag.y * cosX - tag.z * sinX;
        const z1 = tag.z * cosX + tag.y * sinX;

        // Rotate Y axis
        const x2 = tag.x * cosY - z1 * sinY;
        const z2 = z1 * cosY + tag.x * sinY;

        tag.x = x2;
        tag.y = y1;
        tag.z = z2;

        // Perspective projection
        const fov = 350;
        const scale = fov / (fov + z2);
        const projX = tag.x * scale + width / 2;
        const projY = tag.y * scale + height / 2;

        // Depth buffer fade
        const alpha = (tag.z + 120) / 240; // 0.0 to 1.0
        
        ctx.save();
        ctx.fillStyle = tag.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(0.95, alpha));
        ctx.font = `bold ${Math.round(13 + scale * 4)}px var(--font-outfit), sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = isActiveTag(tag.text) ? 12 : 2;
        ctx.shadowColor = tag.color;
        
        ctx.fillText(tag.text, projX, projY);
        ctx.restore();
      });

      animationId = requestAnimationFrame(rotateSphere);
    };

    // Helper for highlighted tag effects
    const isActiveTag = (txt: string) => {
      return ["Pedagogy", "English", "IGNOU", "Literature", "Research"].includes(txt);
    };

    rotateSphere();

    return () => {
      cancelAnimationFrame(animationId);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="skills" className="relative py-24 px-6 bg-gradient-to-b from-[#030306] to-[#04040a]">
      {/* Background neon elements */}
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Core Expertise & <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            An overview of my academic proficiencies, soft skills, educational technologies, and teaching methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Progress Bars */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Technical Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-5"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <BookOpen className="w-5 h-5 text-accent-cyan" />
                <h3 className="text-lg font-bold text-white">Academic & Pedagogical Skills</h3>
              </div>

              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>{skill.name}</span>
                      <span className="text-accent-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-5"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Users className="w-5 h-5 text-accent-gold" />
                <h3 className="text-lg font-bold text-white">Soft & Instructional Skills</h3>
              </div>

              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>{skill.name}</span>
                      <span className="text-accent-gold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent-gold to-accent-purple rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Side 3D Tag Cloud & Tools */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-8">
            
            {/* Rotating 3D tag cloud container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] aspect-square rounded-2xl glass-panel p-4 flex items-center justify-center border border-white/5 overflow-hidden"
            >
              <canvas
                ref={canvasRef}
                width={320}
                height={320}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              />
              <span className="absolute bottom-2 text-[10px] text-slate-600 uppercase tracking-widest pointer-events-none">
                Interactive 3D tag cloud
              </span>
            </motion.div>

            {/* Tools Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full glass-panel p-6 rounded-2xl border border-white/5 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Cpu className="w-5 h-5 text-accent-cyan" />
                <h3 className="text-md font-bold text-white">Tools & Instructional Systems</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 font-light hover:border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                    <span className="truncate">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

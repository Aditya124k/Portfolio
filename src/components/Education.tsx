"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Calendar, Bookmark, Plus, Minus, CheckCircle } from "lucide-react";

interface Qualification {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  subjects: string[];
  achievements: string[];
  logoText: string;
  theme: "cyan" | "gold" | "purple";
}

export default function Education() {
  const qualifications: Qualification[] = [
    {
      id: "ugc-net",
      institution: "University Grants Commission",
      degree: "UGC NET Qualified",
      duration: "Dec 2017 - Present",
      grade: "Qualified for Lectureship",
      subjects: ["Pedagogy", "English Language", "Teaching Aptitude", "Research Methodology"],
      achievements: [
        "Qualified on the first attempt.",
        "Established eligibility to lecture at Central & State Universities nationwide."
      ],
      logoText: "NET",
      theme: "cyan",
    },
    {
      id: "ignou-stride",
      institution: "IGNOU - Staff Training & Research Inst. of Distance Education",
      degree: "Postgraduate Specialty in Open & Distance Education",
      duration: "Dec 2024 Completed",
      grade: "A Grade / Outstanding",
      subjects: ["Instructional Design", "E-learning Frameworks", "Distance Education Administration"],
      achievements: [
        "Specialized in digital learning platform design and virtual classroom systems.",
        "Authored model counseling modules for regional teacher development."
      ],
      logoText: "STR",
      theme: "purple",
    },
    {
      id: "mgkv",
      institution: "Mahatma Gandhi Kashi Vidyapith University, Varanasi",
      degree: "Postgraduate Academic Specialty",
      duration: "June 2023 Completed",
      grade: "First Class",
      subjects: ["Advanced Literary Theory", "Classroom Pedagogy", "English Language Assessment"],
      achievements: [
        "Spearheaded language education workshops during study modules.",
        "Researched post-colonial literary structures and modern Indian English poetry."
      ],
      logoText: "MGK",
      theme: "gold",
    },
    {
      id: "ignou-peoples",
      institution: "IGNOU - The People's University",
      degree: "Master's Specialty in Education",
      duration: "Dec 2017 - Dec 2019",
      grade: "First Division",
      subjects: ["Educational Psychology", "Curriculum Design", "Guidance & Counseling"],
      achievements: [
        "Published action research on student-retention models in Patna colleges.",
        "Mentored fellow educators on integrating multimedia tools in course structures."
      ],
      logoText: "IGN",
      theme: "purple",
    },
    {
      id: "hsg-central",
      institution: "Dr. H.S. Gour Sagar Central University, MP",
      degree: "Academic Scholar / Researcher Program",
      duration: "School Year 2019",
      grade: "First Division",
      subjects: ["Educational Philosophy", "Qualitative Research Methods", "Evaluation Systems"],
      achievements: [
        "Participated in regional education conclaves representing central universities.",
        "Delivered research seminars on vernacular language pedagogical models."
      ],
      logoText: "HSG",
      theme: "cyan",
    },
    {
      id: "nou-patna",
      institution: "Nalanda Open University, Patna",
      degree: "Academic Degree",
      duration: "School Year 2017",
      grade: "First Division",
      subjects: ["Teacher Training", "School Management", "Distance Learner Counseling"],
      achievements: [
        "Achieved Top Rank in distance education modules.",
        "Designed local curriculum templates for secondary schools in Patna."
      ],
      logoText: "NOU",
      theme: "gold",
    },
    {
      id: "bra-bihar",
      institution: "B.R.A. Bihar University, Muzaffarpur",
      degree: "Bachelor's Program (English & Humanities)",
      duration: "Undergraduate Years",
      grade: "Honors",
      subjects: ["English Literature", "Linguistics", "Educational Foundations"],
      achievements: [
        "Debating champion and literary circle founder.",
        "Elected Student Academic representative."
      ],
      logoText: "BRA",
      theme: "purple",
    },
  ];

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="relative py-24 px-6 bg-gradient-to-b from-[#04040a] to-[#030306]">
      {/* Background Neon Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Academic <span className="bg-gradient-to-r from-accent-cyan to-accent-gold bg-clip-text text-transparent">Qualifications</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-gold mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            Interactive cards detailing my degrees, research, and national eligibility qualification. Click cards to expand.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualifications.map((qual, index) => {
            const isExpanded = expandedId === qual.id;
            const themeColor =
              qual.theme === "cyan"
                ? "text-accent-cyan"
                : qual.theme === "gold"
                ? "text-accent-gold"
                : "text-accent-purple";
            
            const themeBorder =
              qual.theme === "cyan"
                ? "hover:border-accent-cyan/45"
                : qual.theme === "gold"
                ? "hover:border-accent-gold/45"
                : "hover:border-accent-purple/45";

            const themeGlow =
              qual.theme === "cyan"
                ? "glass-panel-glow-cyan"
                : qual.theme === "gold"
                ? "glass-panel-glow-gold"
                : "glass-panel";

            return (
              <motion.div
                key={qual.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => toggleExpand(qual.id)}
                className={`relative rounded-2xl glass-panel p-6 border border-white/5 ${themeBorder} cursor-pointer transition-all duration-300 hover:bg-white/5 select-none h-fit`}
              >
                {/* Header Section */}
                <div className="flex items-start gap-4">
                  {/* Institution Logo placeholder */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm bg-white/5 border border-white/10 ${themeColor}`}>
                    {qual.logoText}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5 font-light">
                      <Calendar className="w-3 h-3" />
                      {qual.duration}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight mt-1">
                      {qual.degree}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-semibold">
                      {qual.institution}
                    </p>
                  </div>
                </div>

                {/* Grade and Expand Trigger */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  {qual.grade && (
                    <span className={`text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${themeColor}`}>
                      {qual.grade}
                    </span>
                  )}
                  <div className={`p-1.5 rounded-full bg-white/5 border border-white/10 ${themeColor} ml-auto`}>
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {/* Expanded Details Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 pt-4 border-t border-white/5 space-y-4"
                    >
                      {/* Key Subjects */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                          Key Subjects
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {qual.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                          Key Achievements
                        </p>
                        <ul className="space-y-1.5">
                          {qual.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="text-xs text-slate-400 flex items-start gap-1.5 leading-relaxed font-light">
                              <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${themeColor}`} />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

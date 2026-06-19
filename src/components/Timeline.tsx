"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Award, Compass, Star } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  category: "personal" | "academic" | "career";
}

export default function Timeline() {
  const milestones: Milestone[] = [
    {
      year: "Early Life",
      title: "Childhood & School Life",
      subtitle: "Patna, Bihar",
      description: "Cultivated a deep passion for language, communication, and storytelling. Active in debate groups and public speaking during early school days.",
      icon: <Star className="w-5 h-5" />,
      category: "personal",
    },
    {
      year: "Higher Secondary",
      title: "Foundation of Language Studies",
      subtitle: "Secondary Education",
      description: "Focused on languages, humanities, and social sciences. Graduated with honors, laying the academic path for English literature and pedagogy.",
      icon: <GraduationCap className="w-5 h-5" />,
      category: "academic",
    },
    {
      year: "Undergrad Years",
      title: "College & Higher Studies",
      subtitle: "B.R.A. Bihar University, Muzaffarpur",
      description: "Immersed in advanced language structures and classical English literature. Explored the philosophy of teaching and higher education curriculum models.",
      icon: <GraduationCap className="w-5 h-5" />,
      category: "academic",
    },
    {
      year: "2016 - Present",
      title: "Assistant Professor",
      subtitle: "Maharaja Chhatrasal Bundelkhand University, Chhatarpur",
      description: "Initiated professional lecturing career. Appointed as Assistant Professor, delivering English language curriculum and organizing student seminars for over a decade.",
      icon: <Briefcase className="w-5 h-5" />,
      category: "career",
    },
    {
      year: "2017",
      title: "Degree Achievement",
      subtitle: "Nalanda Open University, Patna",
      description: "Graduated with honors in specialized education frameworks, researching the effectiveness of open-learning methodologies in Bihar.",
      icon: <GraduationCap className="w-5 h-5" />,
      category: "academic",
    },
    {
      year: "Dec 2017",
      title: "UGC NET Qualified",
      subtitle: "National Eligibility Test",
      description: "Qualified the prestigious National Eligibility Test (NET) conducted by the University Grants Commission, declaring eligibility for Assistant Professorship nationwide.",
      icon: <Award className="w-5 h-5" />,
      category: "academic",
    },
    {
      year: "2021 - Present",
      title: "Academic Counselor - School of Education",
      subtitle: "IGNOU Regional Centre, Patna",
      description: "Appointed to guide distance education learners, designing interactive counseling workshops and counseling materials for undergraduate and postgraduate teachers.",
      icon: <Briefcase className="w-5 h-5" />,
      category: "career",
    },
    {
      year: "June 2023",
      title: "Postgraduate Specialty & Research",
      subtitle: "Mahatma Gandhi Kashi Vidyapith University, Varanasi",
      description: "Earned academic certifications in advanced pedagogical methods, expanding theoretical foundations in literary criticism and language instruction.",
      icon: <GraduationCap className="w-5 h-5" />,
      category: "academic",
    },
    {
      year: "Dec 2024",
      title: "Professional Distance Learning Specialty",
      subtitle: "Indira Gandhi National Open University",
      description: "Completed postgraduate research studies at IGNOU's Staff Training and Research Institute of Distance Education, specializing in digital pedagogy.",
      icon: <Award className="w-5 h-5" />,
      category: "academic",
    },
    {
      year: "2026 - Present",
      title: "Assistant Professor",
      subtitle: "Gyanveer University, Sagar (MP)",
      description: "Joined Gyanveer University faculty to teach advanced English and education methodologies, combining active classroom teaching with digital research modules.",
      icon: <Briefcase className="w-5 h-5" />,
      category: "career",
    },
    {
      year: "Future Goals",
      title: "Curriculum Modernization & E-Learning",
      subtitle: "Vision & Academic Goals",
      description: "Developing open-access digital content for English language learners in Bihar, driving pedagogical research, and authoring educational textbooks.",
      icon: <Compass className="w-5 h-5" />,
      category: "personal",
    },
  ];

  return (
    <section id="journey" className="relative py-24 px-6 bg-[#04040a]">
      {/* Visual Ambient Light */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            My Journey <span className="bg-gradient-to-r from-accent-gold to-accent-purple bg-clip-text text-transparent">Timeline</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light">
            Scroll down to walk through my educational, personal, and career milestones.
          </p>
        </div>

        {/* The Timeline Container */}
        <div className="relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-gold timeline-line-glow"
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row md:items-center">
                  
                  {/* Outer spacing wrapper to alternate left/right columns on desktop */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}>
                    
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                      className="ml-8 md:ml-0 glass-panel border border-white/5 hover:border-white/10 p-6 rounded-xl relative hover:bg-white/5 transition-all duration-300 group"
                    >
                      {/* Year badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-wider ${
                        milestone.category === "career"
                          ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25"
                          : milestone.category === "academic"
                          ? "bg-accent-purple/10 text-accent-purple border border-accent-purple/25"
                          : "bg-accent-gold/10 text-accent-gold border border-accent-gold/25"
                      }`}>
                        {milestone.year}
                      </span>

                      <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-sm font-semibold text-slate-400 mt-1">
                        {milestone.subtitle}
                      </p>

                      <p className="text-sm text-slate-400 mt-3 font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>

                  </div>

                  {/* Center Icon Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-4 md:top-auto -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 shadow-lg ${
                        milestone.category === "career"
                          ? "bg-slate-950 border-accent-cyan text-accent-cyan shadow-accent-cyan/20"
                          : milestone.category === "academic"
                          ? "bg-slate-950 border-accent-purple text-accent-purple shadow-accent-purple/20"
                          : "bg-slate-950 border-accent-gold text-accent-gold shadow-accent-gold/20"
                      }`}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>

                  {/* Empty node for opposite side spacing on desktop */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

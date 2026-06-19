"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import PhotoStory from "@/components/PhotoStory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Lazy load 3D background scene to prevent SSR issues with canvas/WebGL
const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 3D WebGL Background Scene */}
      <Scene3D />

      {/* Floating Header */}
      <Navbar />

      {/* Content Layout */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Timeline />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Achievements />
        <PhotoStory />
        <Contact />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}

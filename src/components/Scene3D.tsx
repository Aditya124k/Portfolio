"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Floating Shape Component representing ideas / academia
function FloatingShape({ position, color, args, type }: { position: [number, number, number]; color: string; args: any[]; type: "torus" | "box" | "dodecahedron" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [speed] = useState(() => Math.random() * 0.4 + 0.1);
  const [rotSpeed] = useState(() => (Math.random() - 0.5) * 0.5);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    // Hover animation
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.4;
    meshRef.current.rotation.x = time * rotSpeed * 0.2;
    meshRef.current.rotation.y = time * rotSpeed * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      {type === "torus" && <torusGeometry args={args as any} />}
      {type === "box" && <boxGeometry args={args as any} />}
      {type === "dodecahedron" && <dodecahedronGeometry args={args as any} />}
      <meshPhysicalMaterial
        color={color}
        roughness={0.2}
        metalness={0.9}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        transmission={0.6}
        thickness={0.5}
        transparent
        opacity={0.3}
        wireframe={Math.random() > 0.5}
      />
    </mesh>
  );
}

// Particle System representing thoughts / stars
function StarParticles() {
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 45;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 45;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 45;
    }
    return arr;
  });

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

// Camera and interaction controller
function SceneController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    // Lerp camera position based on mouse position
    const targetX = mouse.current.x * 2.5;
    const targetY = mouse.current.y * 2.5 + 5; // Default height

    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;

    // Transition camera Z and Y depth based on scroll position
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight || 1;
    const scrollPercent = scrollY.current / totalHeight;
    
    // Smoothly push camera back and down as user scrolls
    const targetZ = 12 + scrollPercent * 18;
    camera.position.z += (targetZ - camera.position.z) * 0.1;
    
    // Look slightly towards the center
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#030306]">
      {/* Dynamic CSS overlay gradient for atmosphere */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030306]/80 to-[#030306] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 5, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fbbf24" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#06b6d4" />
        <directionalLight position={[0, 10, 5]} intensity={0.8} color="#8b5cf6" />

        <StarParticles />

        {/* Floating Academic Shapes */}
        <FloatingShape position={[-4, 2, -2]} color="#06b6d4" args={[0.8, 0.2, 16, 100]} type="torus" />
        <FloatingShape position={[4, -1, -3]} color="#fbbf24" args={[0.9, 0.9, 0.9]} type="box" />
        <FloatingShape position={[-3, -3, 2]} color="#8b5cf6" args={[0.7]} type="dodecahedron" />
        <FloatingShape position={[3.5, 4, 1]} color="#06b6d4" args={[0.6]} type="dodecahedron" />
        <FloatingShape position={[-5, 5, -4]} color="#fbbf24" args={[1, 0.15, 16, 64]} type="torus" />
        <FloatingShape position={[5, -4, 3]} color="#8b5cf6" args={[0.8, 0.8, 0.8]} type="box" />

        <SceneController />
      </Canvas>
    </div>
  );
}

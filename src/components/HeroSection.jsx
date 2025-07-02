"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import gsap from 'gsap'
import Link from 'next/link'

// 3D animated sphere component
const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  )
}

export default function HeroSection() {
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      textRef.current.querySelectorAll('h1, p, div'),
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: "power3.out" 
      }
    )
  }, [])

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#121212]">
      <div className="container mx-auto h-full px-4 pt-16 md:pt-20">
        <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <motion.div 
            ref={textRef}
            className="z-10 flex flex-col items-start justify-center"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-100 md:text-6xl pt-6 md:pt-8">
              Next-Gen <span className="text-blue-400">Tech Solutions</span> for Your Business
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Transforming ideas into powerful digital experiences with cutting-edge technologies
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Get In Touch
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-gray-700 bg-[#1e1e1e] px-6 py-3 font-medium text-gray-300 transition-colors hover:bg-[#2a2a2a]"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
          
          <div className="relative h-full w-full">
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Link from 'next/link'
import Galaxy from './Galaxy'

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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#121212]">
      {/* Galaxy Background */}
      <div className="absolute inset-0">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          speed={1.0}
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          transparent={true}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={textRef}
            className="text-center max-w-4xl mx-auto pointer-events-auto"
          >
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-100">
              Next-Gen <span className="text-blue-400">Tech Solutions</span> for Your Business
            </h1>
            <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-300">
              Transforming ideas into powerful digital experiences with cutting-edge technologies
            </p>
            
            {/* Glassy Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="relative rounded-xl px-6 py-3 font-medium text-white 
                           bg-blue-500/20 border border-blue-400/40 backdrop-blur-md 
                           shadow-lg shadow-blue-500/20 
                           transition-all duration-300 hover:bg-blue-500/30 hover:shadow-blue-500/40 
                           hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                href="/services"
                className="relative rounded-xl px-6 py-3 font-medium text-gray-200 
                           bg-white/10 border border-gray-500/30 backdrop-blur-md 
                           shadow-lg shadow-gray-800/30 
                           transition-all duration-300 hover:bg-white/20 hover:border-gray-400 
                           hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

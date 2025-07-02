"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'GraphQL', icon: '⬢' },
  { name: 'Next.js', icon: '▲' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Django', icon: '🎯' },
]

export default function TechStack() {
  const marqueeRef1 = useRef(null)
  const marqueeRef2 = useRef(null)
  
  useEffect(() => {
    const marquee1 = marqueeRef1.current
    const marquee2 = marqueeRef2.current
    
    // Clone items for seamless infinite loop
    const items1 = [...marquee1.children]
    const items2 = [...marquee2.children]
    
    items1.forEach(item => {
      const clone = item.cloneNode(true)
      marquee1.appendChild(clone)
    })
    
    items2.forEach(item => {
      const clone = item.cloneNode(true)
      marquee2.appendChild(clone)
    })
    
    // Animate first row left-to-right
    gsap.to(marquee1.children, {
      x: "-50%",
      duration: 25,
      ease: "linear",
      repeat: -1,
    })
    
    // Animate second row right-to-left
    gsap.fromTo(marquee2.children, 
      { x: "-50%" },
      { 
        x: "0%", 
        duration: 25,
        ease: "linear",
        repeat: -1,
      }
    )
    
    return () => {
      gsap.killTweensOf(marquee1.children)
      gsap.killTweensOf(marquee2.children)
    }
  }, [])
  
  return (
    <section className="py-20 bg-[#151515] overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Tech Stack</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver powerful solutions
          </p>
        </motion.div>
      </div>
      
      <div className="relative w-full">
        {/* First row marquee */}
        <div className="py-8 bg-[#1a1a1a]">
          <div className="flex whitespace-nowrap" ref={marqueeRef1}>
            {techStack.map((tech, index) => (
              <div 
                key={`tech1-${index}`}
                className="flex items-center justify-center mx-8 min-w-[180px]"
              >
                <div className="bg-[#212121] rounded-lg shadow-md p-4 w-full text-center border border-[#2a2a2a]">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <div className="font-medium text-gray-300">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row marquee (opposite direction) */}
        <div className="py-8 bg-[#161616]">
          <div className="flex whitespace-nowrap" ref={marqueeRef2}>
            {techStack.slice().reverse().map((tech, index) => (
              <div 
                key={`tech2-${index}`}
                className="flex items-center justify-center mx-8 min-w-[180px]"
              >
                <div className="bg-[#212121] rounded-lg shadow-md p-4 w-full text-center border border-[#2a2a2a]">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <div className="font-medium text-gray-300">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
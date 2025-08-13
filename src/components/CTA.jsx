"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-[#151515] text-white relative overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-800 blur-3xl"></div>
      </div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-10 text-gray-300">
              Let's discuss how our technology solutions can help you reach your goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors"
                >
                  Get In Touch
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/services" 
                  className="inline-block bg-[#1e1e1e] text-gray-300 border border-[#2a2a2a] px-8 py-3 rounded-lg font-medium hover:bg-[#2a2a2a] transition-colors"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left"
          >
            <div className="md:border-r md:border-gray-700 md:pr-8">
              <div className="text-3xl font-bold">250+</div>
              <div className="text-gray-400">Successful Projects</div>
            </div>
            
            <div className="md:border-r md:border-gray-700 md:px-8">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-gray-400">Years of Experience</div>
            </div>
            
            <div className="md:pl-8">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
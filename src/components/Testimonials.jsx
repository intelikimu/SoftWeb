"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, Acme Corp",
    quote:
      "TechWave’s AI Chatbot Platform slashed our support costs by 60% while boosting CSAT scores over 95%. Truly game-changing!",
    avatar: "/team/john-smith.jpg",
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "CTO, FinTech Inc",
    quote:
      "The NFSTAY tokenization engine opened up new liquidity channels for our real-estate portfolio. Their team is top-notch!",
    avatar: "/team/emily-davis.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Engineering, DeFiCo",
    quote:
      "Integrating the Crypto Index Pool was seamless—and our users love the transparent reward dashboards. Outstanding work!",
    avatar: "/team/michael-chen.jpg",
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Product Lead, CryptoDeals",
    quote:
      "Crypto On Discount’s front-end is intuitive and lightning-fast. User engagement and referral sign-ups jumped 3× overnight!",
    avatar: "/team/aisha-patel.jpg",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-blue-500"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real feedback from real users—see why they trust us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg"
            >
              <div className="relative mb-4 h-20 w-20 rounded-full overflow-hidden border-4 border-blue-500">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-300 italic text-center mb-6">“{t.quote}”</p>
              <div className="text-center">
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

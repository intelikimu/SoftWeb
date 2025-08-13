"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

// Projects data
const projects = [
  {
    id: 1,
    title: 'AI Chatbot Platform',
    categories: ['AI', 'Chatbot', 'Crypto'],
    description:
      'Decentralized autonomous organization (DAO) & digital wallet for token purchases, lending, staking, cross-border payments and efficient fiat↔crypto conversions.',
    images: ['/assets/aichatbot.png', '/assets/aichatbot2.png'],
    link: 'https://degenforest.com/',
  },
  {
    id: 2,
    title: 'NFSTAY',
    categories: ['NFT', 'DeFi', 'Staking'],
    description:
      'Real-world asset (RWA) tokenization for real estate, enabling fractional ownership and seamless rental-yield distribution.',
    images: ['/assets/nfstay1.png', '/assets/nfstay2.png'],
    link: 'https://nfstay.com',
  },
  {
    id: 3,
    title: 'Crypto Index Pool',
    categories: ['DeFi', 'Staking'],
    description:
      'Staking dashboard for CIP tokens, with real-time reward tracking, portfolio management and performance analytics.',
    images: ['/assets/crypto.png', '/assets/crypto2.png'],
    link: 'https://cip-staking-new.vercel.app/',
  },
  {
    id: 4,
    title: 'Crypto On Discount',
    categories: ['Crypto', 'Deals'],
    description:
      'Discounted crypto purchases platform with investment tracking, referral rewards, ROI monitoring and bonus incentives.',
    images: ['/assets/cryptoon.png', '/assets/cryptoon.png'],
    link: 'https://cryptoondiscount.com',
  },
  {
    id: 5,
    title: 'Smashnft',
    categories: ['NFT', 'Marketplace'],
    description:
      'Ethereum-based NFT marketplace for exploring, buying, selling and managing digital collectibles, with full metadata & provenance.',
    images: ['/assets/smashnft.png', '/assets/smashnft.png'],
    link: 'https://nft.smashpay.io/ethereum',
  },
]

// map each category to a Tailwind color class
const categoryColors = {
  AI: 'border border-blue-600 text-blue-600',
  Chatbot: 'border border-indigo-600 text-indigo-600',
  NFT: 'border border-pink-500 text-pink-500',
  DeFi: 'border border-green-500 text-green-500',
  Staking: 'border border-yellow-500 text-yellow-500',
  Crypto: 'border border-purple-600 text-purple-600',
  Deals: 'border border-red-500 text-red-500',
  Marketplace: 'border border-teal-500 text-teal-500',
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Projects</h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-blue-500"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our featured case studies presented in a clean, focused layout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-xl transition-transform"
            >
              {/* external link button */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-2 text-white opacity-80 hover:opacity-100 transition"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
              </Link>

              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                {/* Top image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title pill */}
                <div className="mx-6 mt-4">
                  <span className="inline-block w-full bg-[#212121] px-4 py-2 rounded-full text-center text-lg font-semibold text-white">
                    {project.title}
                  </span>
                </div>

                {/* Category pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-4 px-6">
                  {project.categories.map((cat, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[cat] || 'bg-gray-600 text-white'}`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Description pill */}
                <div className="mx-6 my-6">
                  <p className="bg-[#212121] p-4 rounded-lg text-sm text-gray-300">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a] text-center p-6 mt-10">
      <div className="mb-4 flex justify-center gap-4 text-gray-400">
        <FaFacebook className="hover:text-blue-400 cursor-pointer transition-colors" />
        <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors" />
        <FaLinkedin className="hover:text-blue-400 cursor-pointer transition-colors" />
      </div>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} TechWave. All rights reserved.</p>
    </footer>
  )
}

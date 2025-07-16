"use client"

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { name: 'AI & Machine Learning', href: '/services/ai' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'Custom Software', href: '/services/software' },
    { name: 'IoT Solutions', href: '/services/iot' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a] text-gray-400 pt-10 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">TechWave</h4>
          <p className="text-sm mb-4">
            Your one-stop destination for cutting-edge technology solutions: AI, Blockchain, Cloud, Software, and more.
          </p>
          <p className="text-sm mb-1">
            Email: <Link href="mailto:info@techwave.com" className="text-blue-500 hover:underline">info@techwave.com</Link>
          </p>
          <p className="text-sm">
            Phone: <Link href="tel:+15551234567" className="text-blue-500 hover:underline">(555) 123-4567</Link>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {pages.map((page) => (
              <li key={page.name}>
                <Link href={page.href} className="hover:text-blue-500 transition-colors">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((svc) => (
              <li key={svc.name}>
                <Link href={svc.href} className="hover:text-blue-500 transition-colors">
                  {svc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Follow Us</h4>
          <div className="flex space-x-4 mb-6 text-xl">
            {[
              { icon: <FaFacebook />, href: 'https://facebook.com/techwave' },
              { icon: <FaTwitter />, href: 'https://twitter.com/techwave' },
              { icon: <FaLinkedin />, href: 'https://linkedin.com/company/techwave' },
              { icon: <FaInstagram />, href: 'https://instagram.com/techwave' },
              { icon: <FaGithub />, href: 'https://github.com/techwave' },
            ].map(({ icon, href }, idx) => (
              <Link key={idx} href={href} className="text-blue-500 hover:text-white transition-colors">
                {icon}
              </Link>
            ))}
          </div>
          <p className="text-xs">© {year} TechWave. All rights reserved.</p>
          <p className="text-xs mt-2">
            <Link href="/privacy" className="hover:text-blue-500 transition-colors mr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

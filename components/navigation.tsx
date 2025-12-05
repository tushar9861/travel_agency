"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#C4186F] via-[#A01558] to-[#8B0E4F] shadow-2xl border-b-4 border-[#FFD700]"
          : "bg-gradient-to-r from-[#C4186F] via-[#B01860] to-[#9B1456]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/darshan-bharat-logo.png"
                alt="Darshan Bharat Spiritual Tours"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white hover:text-[#FFD700] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">
              <Phone size={16} />
              +91 95835 30551
            </div>
            <button className="bg-[#FFD700] text-[#1a1a1a] font-bold px-6 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-slide-in border-t-2 border-white/20">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="w-full px-4 py-3 bg-[#FFD700] text-[#1a1a1a] font-bold rounded-full mt-4 hover:bg-white transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

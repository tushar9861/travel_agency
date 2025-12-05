import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/98 to-accent text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="w-20 h-20 relative mb-4">
              <Image src="/darshan-bharat-logo.png" alt="Darshan Bharat" fill className="object-contain" />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Sacred spiritual journeys to India's holiest destinations with expert guides and unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="opacity-90 hover:text-secondary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="opacity-90 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#kedarnath" className="opacity-90 hover:text-secondary transition-colors">
                  Kedarnath
                </Link>
              </li>
              <li>
                <Link href="#badrinath" className="opacity-90 hover:text-secondary transition-colors">
                  Badrinath
                </Link>
              </li>
              <li>
                <Link href="#prayagraj" className="opacity-90 hover:text-secondary transition-colors">
                  Prayagraj Magh Mela
                </Link>
              </li>
              <li>
                <Link href="#char-dham" className="opacity-90 hover:text-secondary transition-colors">
                  Char Dham Yatra
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="flex-shrink-0 mt-1 text-secondary" />
                <div>
                  <p className="opacity-90">+91 9583530551</p>
                  <p className="opacity-90">+91 9583530552</p>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="flex-shrink-0 mt-1 text-secondary" />
                <span className="opacity-90">booking.darshanbharat@gmail.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="flex-shrink-0 mt-1 text-secondary" />
                <span className="opacity-90">www.darshanbharat.info</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 bg-white/20 hover:bg-secondary rounded-full transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 bg-white/20 hover:bg-secondary rounded-full transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 bg-white/20 hover:bg-secondary rounded-full transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © 2025 Darshan Bharat Spiritual Tours. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Users, MapPin, Clock, Heart, ArrowRight, Star, Zap } from "lucide-react"
import { RegistrationForm } from "@/components/registration-form"
import { PackageCard } from "@/components/package-card"
import { ThreeDRouteHero } from "@/components/3d-route-hero"

const packages = [
  {
    id: 1,
    name: "Char Dham Yatra",
    description: "Complete 4-site pilgrimage journey to India's holiest temples",
    places: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri"],
    duration: "12 Days",
    price: "₹45,000",
    rating: 4.9,
    reviews: 248,
    image: "https://images.unsplash.com/photo-1511343541974-747f6b5f0b00?w=500&h=400&fit=crop",
    highlights: ["Guided tours", "Accommodation", "Meals", "Transport"],
  },
  {
    id: 2,
    name: "Prayagraj Magh Mela",
    description: "Join the world's largest spiritual gathering",
    places: ["Prayagraj", "Sangam", "Holy Ganges"],
    duration: "7 Days",
    price: "₹28,000",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    highlights: ["Expert guides", "Comfortable stays", "All meals", "Spiritual talks"],
  },
  {
    id: 3,
    name: "Twin Temple Expedition",
    description: "Kedarnath & Badrinath sacred pilgrimage",
    places: ["Kedarnath", "Badrinath"],
    duration: "8 Days",
    price: "₹32,000",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1517760442042-50b1e6c55bf0?w=500&h=400&fit=crop",
    highlights: ["Small groups", "Nature walks", "Vegetarian meals", "Meditation"],
  },
  {
    id: 4,
    name: "Extended Sacred Tour",
    description: "Char Dham + Valley of Flowers adventure",
    places: ["Kedarnath", "Badrinath", "Valley of Flowers"],
    duration: "15 Days",
    price: "₹65,000",
    rating: 5.0,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop",
    highlights: ["Premium tours", "Photo stops", "Expert naturalists", "Luxury stays"],
  },
]

const features = [
  { icon: Users, title: "Expert Spiritual Guides", desc: "Experienced guides with profound spiritual knowledge" },
  { icon: MapPin, title: "Sacred Destinations", desc: "Access to India's holiest pilgrimage sites" },
  { icon: Clock, title: "Flexible Packages", desc: "Tours from 6 to 15 days tailored for you" },
  { icon: Heart, title: "Authentic Experience", desc: "Genuine spiritual practices and local culture immersion" },
]

export default function Home() {
  return (
    <div className="bg-white">
      <ThreeDRouteHero />

      <section className="py-24 bg-gradient-to-r from-[#C4186F] via-[#B01860] to-[#A01558] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Why Choose Darshan Bharat?</h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full" />
            <p className="text-lg text-white/90 max-w-2xl mx-auto mt-6">
              We provide authentic spiritual experiences with professional service and unforgettable memories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center group hover:bg-white/20 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-block p-4 bg-[#FFD700]/20 rounded-full mb-4 group-hover:bg-[#FFD700]/40 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#C4186F] to-[#1E3A8A] bg-clip-text text-transparent">
              Spiritual Packages
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full mt-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Carefully curated packages for your soul's transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4186F] to-[#A01558] text-white font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1E3A8A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#FFD700]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#C4186F]/20 rounded-full blur-3xl animate-float-reverse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Tours Completed", value: "500+" },
              { label: "Happy Customers", value: "5000+" },
              { label: "Destinations", value: "25+" },
              { label: "Years of Service", value: "15+" },
            ].map((stat, i) => (
              <div key={i} className="transform transition-transform hover:scale-110 animate-float">
                <p className="text-5xl md:text-6xl font-serif font-bold text-[#FFD700] mb-2">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#C4186F] to-[#1E3A8A] bg-clip-text text-transparent">
              Begin Your Spiritual Journey
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full mt-4" />
            <p className="text-gray-600 text-lg mt-6">
              Register your interest and let us help you plan your perfect pilgrimage
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center bg-gradient-to-r from-[#C4186F] to-[#1E3A8A] bg-clip-text text-transparent mb-4">
            What's Included in Every Tour
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🙏", benefit: "Expert spiritual guides with profound knowledge", highlight: true },
              { icon: "🍲", benefit: "All meals - vegetarian and non-vegetarian options" },
              { icon: "🏨", benefit: "Comfortable and clean accommodations", highlight: true },
              { icon: "📞", benefit: "24/7 customer support and assistance" },
              { icon: "🧘", benefit: "Group meditation and yoga sessions", highlight: true },
              { icon: "📸", benefit: "Photography stops at scenic locations" },
              { icon: "🛡️", benefit: "Travel insurance included", highlight: true },
              { icon: "💫", benefit: "Post-tour spiritual guidance and support" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 items-start p-6 rounded-xl transition-all duration-300 group cursor-pointer ${
                  item.highlight
                    ? "bg-gradient-to-r from-[#C4186F]/20 to-[#FFD700]/20 border-2 border-[#C4186F] hover:border-[#FFD700] hover:shadow-lg"
                    : "bg-gray-100 border-2 border-gray-200 hover:bg-gray-50 hover:border-[#C4186F]"
                }`}
              >
                <span className="text-3xl group-hover:scale-125 transition-transform">{item.icon}</span>
                <span className="text-gray-800 font-medium group-hover:text-[#C4186F] transition-colors">
                  {item.benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#C4186F] via-[#B01860] to-[#A01558] relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                location: "Delhi",
                text: "An incredible spiritual experience. The guides were knowledgeable and caring. Highly recommended!",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                location: "Mumbai",
                text: "Best Char Dham tour ever! Everything was perfectly organized. Worth every penny!",
                rating: 5,
              },
              {
                name: "Amit Patel",
                location: "Bangalore",
                text: "The Prayagraj Magh Mela experience was life-changing. Thank you Darshan Bharat!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#C4186F]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1E3A8A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C4186F]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl animate-float-reverse" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
          <div className="inline-flex items-center gap-2 mb-6 bg-[#FFD700]/20 text-[#FFD700] px-4 py-2 rounded-full backdrop-blur-md border border-[#FFD700]/50">
            <Zap size={16} />
            <span className="font-semibold text-sm">Limited Time Offer</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Ready for Your Spiritual Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Book now and receive exclusive early-bird discounts. Limited seats available for each tour!
          </p>
          <button className="inline-block bg-[#FFD700] text-[#1a1a1a] font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110">
            Reserve Your Spot Today
          </button>
        </div>
      </section>
    </div>
  )
}

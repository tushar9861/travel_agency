"use client"

import { useState, useEffect } from "react"
import { ChevronDown, MapPin, Bus, Calendar } from "lucide-react"

interface Route {
  id: number
  name: string
  start: string
  end: string
  distance: string
  days: string
  price: string
  color: string
  description: string
  mapUrl: string
}

const spiritualRoutes: Route[] = [
  {
    id: 1,
    name: "Ayodhya to Varanasi",
    start: "Ayodhya",
    end: "Varanasi",
    distance: "250 km",
    days: "4 Days",
    price: "₹18,500",
    color: "from-[#FFD700] to-[#FF9933]",
    description: "From the sacred birthplace of Lord Rama to the spiritual capital of India",
    mapUrl:
      "https://api.mapbox.com/styles/v1/mapbox/light-v11/static/79.85,26.8,81.2,25.3,6/800x500@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazAwMDAwMDAwIn0",
  },
  {
    id: 2,
    name: "Rameswaram to Kanyakumari",
    start: "Rameswaram",
    end: "Kanyakumari",
    distance: "150 km",
    days: "3 Days",
    price: "₹14,000",
    color: "from-[#C4186F] to-[#1E3A8A]",
    description: "South India's most sacred pilgrimage to the land's end",
    mapUrl:
      "https://api.mapbox.com/styles/v1/mapbox/light-v11/static/79.18,8.59,77.07,8.07,6/800x500@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazAwMDAwMDAwIn0",
  },
  {
    id: 3,
    name: "Char Dham Sacred Circuit",
    start: "Kedarnath",
    end: "Gangotri",
    distance: "320 km",
    days: "12 Days",
    price: "₹45,000",
    color: "from-[#138808] to-[#FFD700]",
    description: "Complete pilgrimage to India's four holiest Himalayan temples",
    mapUrl:
      "https://api.mapbox.com/styles/v1/mapbox/light-v11/static/79.56,30.21,79.2,30.76,6/800x500@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazAwMDAwMDAwIn0",
  },
  {
    id: 4,
    name: "Mathura to Agra",
    start: "Mathura",
    end: "Agra",
    distance: "65 km",
    days: "2 Days",
    price: "₹9,500",
    color: "from-[#FF9933] to-[#C4186F]",
    description: "Krishna's hometown to the city of immortal love",
    mapUrl:
      "https://api.mapbox.com/styles/v1/mapbox/light-v11/static/77.65,27.60,77.10,27.13,6/800x500@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazAwMDAwMDAwIn0",
  },
]

export function ThreeDRouteHero() {
  const [activeRoute, setActiveRoute] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveRoute((prev) => (prev + 1) % spiritualRoutes.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const route = spiritualRoutes[activeRoute]

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#0F1D4D] to-[#000000] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#C4186F]/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-[#FFD700]/15 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#138808]/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD700] rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-20">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full backdrop-blur-md border border-[#FFD700]/30">
            <Bus size={16} />
            <span className="font-semibold text-sm">Spiritual Route Visualization</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 text-balance">
            Journey Through Sacred India
          </h1>
          <p className="text-xl md:text-2xl text-[#FFD700] font-semibold mb-2">{route.name}</p>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">{route.description}</p>
        </div>

        {/* Map Container with 3D Effect */}
        <div className="w-full max-w-4xl mb-12">
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFD700] transform perspective">
            {/* Map SVG with animated route */}
            <svg className="w-full h-96 animate-map-pan" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
              {/* Map background */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#e0f2fe", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#bae6fd", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id={`routeGradient-${activeRoute}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: route.color.split(" ")[1], stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: route.color.split(" ")[3], stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect width="800" height="500" fill="url(#mapGradient)" />

              {/* Animated route line */}
              <path
                d="M 100 400 Q 300 200, 500 150 T 700 100"
                stroke={`url(#routeGradient-${activeRoute})`}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="animate-route-glow"
                strokeDasharray="20,10"
                strokeDashoffset="0"
              />

              {/* Start point */}
              <circle cx="100" cy="400" r="20" fill="#138808" opacity="0.9" />
              <circle cx="100" cy="400" r="25" fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.6" />
              <text x="100" y="450" textAnchor="middle" className="text-xs font-bold fill-white">
                {route.start}
              </text>

              {/* End point */}
              <circle cx="700" cy="100" r="20" fill="#C4186F" opacity="0.9" />
              <circle cx="700" cy="100" r="25" fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.6" />
              <text x="700" y="50" textAnchor="middle" className="text-xs font-bold fill-white">
                {route.end}
              </text>

              {/* Animated bus on route */}
              <g
                className="animate-bus-travel"
                style={{ offsetPath: "path('M 100 400 Q 300 200, 500 150 T 700 100')" }}
              >
                <rect x="-12" y="-8" width="24" height="16" rx="4" fill="#FFD700" />
                <circle cx="-6" cy="4" r="3" fill="#1a1a1a" />
                <circle cx="6" cy="4" r="3" fill="#1a1a1a" />
              </g>
            </svg>

            {/* Route info overlay */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C4186F] to-[#A01558] text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-md border border-[#FFD700]/30">
              <p className="font-bold text-lg">{route.distance}</p>
              <p className="text-xs text-white/80">{route.days}</p>
            </div>
          </div>

          {/* Route Details */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <MapPin className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
              <p className="text-white/80 text-sm">Distance</p>
              <p className="text-[#FFD700] font-bold text-lg">{route.distance}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Calendar className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
              <p className="text-white/80 text-sm">Duration</p>
              <p className="text-[#FFD700] font-bold text-lg">{route.days}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Bus className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
              <p className="text-white/80 text-sm">Starting Price</p>
              <p className="text-[#FFD700] font-bold text-lg">{route.price}</p>
            </div>
          </div>
        </div>

        {/* Route Carousel Navigation */}
        <div className="flex gap-3 mb-12 flex-wrap justify-center">
          {spiritualRoutes.map((r, i) => (
            <button
              key={r.id}
              onClick={() => {
                setActiveRoute(i)
                setAutoPlay(false)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                i === activeRoute
                  ? `bg-gradient-to-r ${r.color} text-[#1a1a1a] shadow-lg`
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/30"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-[#FFD700] to-[#FF9933] text-[#1a1a1a] font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Book This Route
          </button>
          <button className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-[#FFD700] text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-indicator">
          <ChevronDown size={24} className="text-[#FFD700]" />
        </div>
      </div>

      {/* Auto-play toggle indicator */}
      {autoPlay && (
        <div className="absolute bottom-4 right-4 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/80 text-xs border border-white/20">
          Auto-playing routes
        </div>
      )}
    </div>
  )
}

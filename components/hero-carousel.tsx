"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const heroSlides = [
  {
    title: "Char Dham Yatra",
    subtitle: "Journey Through the Sacred Himalayas",
    description: "Experience the four holiest temples in a transformative pilgrimage",
    image: "/images/kedarnath-20250520-191354-0000-20-281-29.jpg",
    cta: "Book Your Journey",
    price: "From ₹45,000",
  },
  {
    title: "Prayagraj Magh Mela",
    subtitle: "The World's Largest Spiritual Gathering",
    description: "Join millions in the sacred ritual at the Sangam of three rivers",
    image: "/images/prayagraj-20magh-20mela-20yatra-20-28-207-20days-20-2015-2b-20places-29.jpg",
    cta: "Explore Magh Mela",
    price: "From ₹28,000",
  },
  {
    title: "Spiritual Awakening",
    subtitle: "Transform Your Soul",
    description: "Connect with India's most sacred temples and ancient traditions",
    image: "https://images.unsplash.com/photo-1517760442042-50b1e6c55bf0?w=1200&h=600&fit=crop",
    cta: "Discover More",
    price: "Customized",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative w-full h-screen max-h-[700px] overflow-hidden rounded-3xl group">
      <div className="relative w-full h-full" style={{ perspective: "1200px" }}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transform:
                index === currentSlide
                  ? "translateX(0) rotateY(0deg)"
                  : direction > 0
                    ? "translateX(100%) rotateY(25deg)"
                    : "translateX(-100%) rotateY(-25deg)",
            }}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
              <div className="max-w-3xl animate-fade-in">
                <div className="inline-flex items-center gap-2 mb-4 bg-secondary/20 text-secondary px-4 py-2 rounded-full backdrop-blur-md border border-secondary/30">
                  <Sparkles size={16} />
                  <span className="font-semibold text-sm">Premium Spiritual Journey</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
                <p className="text-2xl md:text-3xl mb-6 font-light text-white/90">{slide.subtitle}</p>
                <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">{slide.description}</p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button className="btn-primary text-lg px-8 py-4 shadow-2xl">{slide.cta}</button>
                  <span className="text-secondary font-bold text-lg">{slide.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-primary backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl group/btn"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="group-hover/btn:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-primary backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl group/btn"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="group-hover/btn:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-8 h-3 shadow-lg shadow-secondary/50"
                : "bg-white/40 w-3 h-3 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-secondary/10" />

      {/* Animated background elements with brand colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating spiritual elements */}
        <div className="absolute top-1/4 right-1/4 text-6xl opacity-10 animate-rotate-slow">ॐ</div>
        <div
          className="absolute bottom-1/3 left-1/4 text-5xl opacity-10 animate-rotate-slow"
          style={{ animationDelay: "10s" }}
        >
          ✨
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="space-y-6 mb-12 animate-scale-up">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border-2 border-secondary px-4 py-2 rounded-full">
            <Sparkles size={16} className="text-primary" />
            <p className="text-primary font-bold text-sm">Spiritual Tours & Experiences</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Journey to the Divine
            </span>
          </h1>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Experience the sacred spiritual journey of Char Dham Yatra with expert guides, comfortable accommodations,
            and unforgettable moments of serenity amidst the majestic Himalayas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-in-up">
          <Link href="#packages" className="btn-primary inline-flex items-center justify-center gap-2">
            Explore Packages <ArrowRight size={18} />
          </Link>
          <Link
            href="/book"
            className="btn-secondary inline-flex items-center justify-center gap-2 border-2 border-secondary"
          >
            Book Your Tour
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 w-full max-w-3xl">
          {[
            { value: "500+", label: "Tours Completed" },
            { value: "5000+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="animate-scale-up" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white to-primary/5 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <p className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-foreground/70 mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

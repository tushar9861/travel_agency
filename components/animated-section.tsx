"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "scale-up"
}

export function AnimatedSection({ children, className = "", delay = 0, animation = "fade-in" }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    "fade-in": "opacity-0 group-[&]:opacity-100",
    "slide-in-left": isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10",
    "slide-in-right": isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10",
    "scale-up": isVisible ? "animate-scale-up" : "opacity-0 scale-95",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${animationClasses[animation]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

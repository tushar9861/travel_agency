"use client"

import Link from "next/link"
import { Calendar, MapPin, Flame } from "lucide-react"
import { useState } from "react"

interface PackageCardProps {
  id: number
  name: string
  description: string
  places: string[]
  duration: string
  price: string
  rating: number
  reviews: number
  image: string
  highlights: string[]
}

export function PackageCard(props: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card-elevated flex flex-col h-full overflow-hidden group relative transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-3 border-2 border-primary/20 hover:border-primary/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden rounded-xl mb-4">
        <img
          src={props.image || "/placeholder.svg"}
          alt={props.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-125 rotate-1" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-60"}`}
        />

        {/* Price Badge */}
        <div
          className={`absolute top-4 right-4 bg-gradient-to-r from-secondary to-accent-light text-black px-3 py-2 rounded-full text-sm font-bold transform transition-all duration-500 ${isHovered ? "scale-110 shadow-lg shadow-secondary/50" : "scale-100"}`}
        >
          {props.price}
        </div>

        {/* Hot Deal Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-primary/90 text-white px-3 py-1.5 rounded-full text-xs font-bold animate-pulse-golden">
          <Flame size={14} /> Popular
        </div>

        {/* Floating Rating on Hover */}
        {isHovered && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce-gentle">
            <span className="bg-secondary text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-secondary/50">
              ⭐ {props.rating} ({props.reviews} reviews)
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-serif font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors duration-300">
        {props.name}
      </h3>
      <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{props.description}</p>

      {/* Details with smooth animations */}
      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex gap-3 items-start transform transition-transform duration-300 group-hover:translate-x-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar size={16} className="text-primary flex-shrink-0" />
          </div>
          <span className="text-sm text-foreground font-medium">{props.duration}</span>
        </div>

        <div
          className="flex gap-3 items-start transform transition-transform duration-300 group-hover:translate-x-2"
          style={{ transitionDelay: "50ms" }}
        >
          <div className="p-2 bg-accent-light/10 rounded-lg">
            <MapPin size={16} className="text-accent-light flex-shrink-0" />
          </div>
          <span className="text-sm text-foreground font-medium">{props.places.join(", ")}</span>
        </div>
      </div>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-6">
        {props.highlights.slice(0, 2).map((h, i) => (
          <span
            key={h}
            className="text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-bold px-3 py-1.5 rounded-full border border-primary/30 transform transition-all duration-300 group-hover:border-primary/80 group-hover:bg-primary/10"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            ✓ {h}
          </span>
        ))}
      </div>

      <Link
        href={`/packages/${props.id}`}
        className="btn-primary w-full text-center mt-auto transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/50"
      >
        View Details →
      </Link>
    </div>
  )
}

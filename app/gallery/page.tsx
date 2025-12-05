"use client"

import { useState } from "react"

const galleryItems = [
  { id: 1, title: "Kedarnath Temple", category: "temple", image: "/kedarnath-temple-snow-mountains.jpg" },
  { id: 2, title: "Badrinath Sacred Site", category: "temple", image: "/badrinath-spiritual-mountains-river.jpg" },
  { id: 3, title: "Mountain Vista", category: "landscape", image: "/himalayan-mountains-sunrise.jpg" },
  { id: 4, title: "Spiritual Gathering", category: "people", image: "/pilgrims-gathering-ceremony.jpg" },
  { id: 5, title: "River Ganges", category: "landscape", image: "/ganges-river-flowing-mountains.jpg" },
  { id: 6, title: "Yamunotri Source", category: "temple", image: "/yamunotri-temple-hot-springs.jpg" },
  { id: 7, title: "Group Tour", category: "people", image: "/tourist-group-mountain-trail.jpg" },
  { id: 8, title: "Alpine Meadows", category: "landscape", image: "/alpine-meadows-flowers-mountains.jpg" },
  { id: 9, title: "Sunset View", category: "landscape", image: "/sunset-mountain-temple-evening.jpg" },
]

export default function Gallery() {
  const [filter, setFilter] = useState("all")

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Photo Gallery</h1>
          <p className="text-lg text-foreground/80">Capturing moments of spiritual beauty and inspiration</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "temple", "landscape", "people"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === cat ? "btn-primary" : "border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg h-80 cursor-pointer">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

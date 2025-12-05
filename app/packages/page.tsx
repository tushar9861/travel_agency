import { PackageCard } from "@/components/package-card"

const packages = [
  {
    id: 1,
    name: "Char Dham Yatra",
    description: "Complete 4-site pilgrimage journey",
    places: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri"],
    duration: "12 Days",
    price: "₹45,000",
    rating: 4.9,
    reviews: 248,
    image: "/mountain-temple-spiritual.jpg",
    highlights: ["Guided tours", "Accommodation", "Meals", "Transport"],
  },
  {
    id: 2,
    name: "Twin Temple Expedition",
    description: "Kedarnath & Badrinath pilgrimage",
    places: ["Kedarnath", "Badrinath"],
    duration: "7 Days",
    price: "₹28,000",
    rating: 4.8,
    reviews: 156,
    image: "/sacred-temple-mountains.jpg",
    highlights: ["Expert guides", "Comfortable stays", "All meals", "Spiritual talks"],
  },
  {
    id: 3,
    name: "Source Journey",
    description: "Yamunotri & Gangotri expedition",
    places: ["Yamunotri", "Gangotri"],
    duration: "6 Days",
    price: "₹24,000",
    rating: 4.7,
    reviews: 89,
    image: "/river-source-mountains-trek.jpg",
    highlights: ["Small groups", "Nature walks", "Vegetarian meals", "Meditation"],
  },
  {
    id: 4,
    name: "Extended Sacred Tour",
    description: "Char Dham + Valley of Flowers",
    places: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri", "Valley of Flowers"],
    duration: "15 Days",
    price: "₹65,000",
    rating: 5.0,
    reviews: 124,
    image: "/valley-flowers-alpine-meadows.jpg",
    highlights: ["Premium tours", "Photo stops", "Expert naturalists", "Luxury stays"],
  },
  {
    id: 5,
    name: "Budget Pilgrimage",
    description: "Essential Char Dham experience",
    places: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri"],
    duration: "10 Days",
    price: "₹32,000",
    rating: 4.6,
    reviews: 92,
    image: "/temples-river-valley.jpg",
    highlights: ["Budget friendly", "Quality service", "Vegetarian meals", "Group tours"],
  },
  {
    id: 6,
    name: "Luxury Expedition",
    description: "Premium Char Dham experience",
    places: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri", "Valley of Flowers"],
    duration: "14 Days",
    price: "₹85,000",
    rating: 5.0,
    reviews: 67,
    image: "/luxury-mountain-resort-spa.png",
    highlights: ["5-star hotels", "Personal guide", "Gourmet meals", "Premium transport"],
  },
]

export default function Packages() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Packages</h1>
          <p className="text-lg text-foreground/80">Choose the perfect spiritual journey for your soul's calling</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

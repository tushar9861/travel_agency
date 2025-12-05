import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    city: "Delhi",
    rating: 5,
    text: "An absolutely transformative experience. The guides were knowledgeable, the accommodations were comfortable, and the spiritual atmosphere was unmatched. Highly recommended!",
    image: "/person-face-happy.jpg",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    text: "I came seeking answers and left with peace. Every detail of the tour was perfectly planned. The attention to comfort while maintaining spiritual authenticity was remarkable.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Arun Patel",
    city: "Bangalore",
    rating: 5,
    text: "The Char Dham Yatra has been on my bucket list for years. This company made it possible and unforgettable. The value for money is exceptional.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Anjali Gupta",
    city: "Pune",
    rating: 4.5,
    text: "A beautiful journey connecting me with my roots and spirituality. The natural beauty combined with spiritual significance created an immersive experience I'll never forget.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Vikram Singh",
    city: "Chandigarh",
    rating: 5,
    text: "Professional team, spiritual guides, and a perfect itinerary. The meals were authentic and delicious. This is truly a world-class spiritual tour operator.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Meera Nair",
    city: "Kochi",
    rating: 5,
    text: "Beyond expectations! The safety measures were excellent, the guide was incredibly knowledgeable about the spiritual significance, and the company was wonderful.",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function Testimonials() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Happy Pilgrims</h1>
          <p className="text-lg text-foreground/80">Real stories from our spiritual journey travelers</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-serif font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/60">{testimonial.city}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < Math.floor(testimonial.rating) ? "fill-accent text-accent" : "text-border"}`}
                    />
                  ))}
                </div>

                <p className="text-foreground/80 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif font-bold mb-2">5000+</p>
              <p className="text-primary-foreground/80">Happy Pilgrims</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold mb-2">4.9★</p>
              <p className="text-primary-foreground/80">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold mb-2">15+</p>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold mb-2">100%</p>
              <p className="text-primary-foreground/80">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

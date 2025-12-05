import { RegistrationForm } from "@/components/registration-form"
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
]

export default function BookNow() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Book Your Spiritual Journey</h1>
          <p className="text-lg text-foreground/80">Begin your sacred pilgrimage to India's holiest destinations</p>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="section-title text-center mb-12">Select Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Complete Your Registration</h2>
            <p className="text-foreground/70">Provide your details to secure your booking</p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated">
            <h3 className="font-serif font-bold text-lg mb-4">Booking Terms & Conditions</h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>• A 50% deposit is required to confirm your booking</li>
              <li>• The remaining 50% is due 2 weeks before the tour</li>
              <li>• Cancellations made 30+ days before the tour receive a full refund</li>
              <li>• Cancellations made 15-30 days before receive 50% refund</li>
              <li>• Cancellations within 15 days are non-refundable</li>
              <li>• We recommend purchasing travel insurance</li>
              <li>• All guests must be in good health for the journey</li>
              <li>• Group discounts available for 10+ participants</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

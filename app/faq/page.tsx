"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    category: "Booking & Cancellation",
    items: [
      {
        q: "How do I book a tour package?",
        a: "You can book through our website registration form or contact us directly. A small deposit secures your booking.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Full refund if cancelled 30 days before. 50% refund for 15-30 days prior. No refund within 15 days.",
      },
      {
        q: "Can I modify my booking dates?",
        a: "Yes, you can modify dates up to 2 weeks before the tour with a small rescheduling fee.",
      },
    ],
  },
  {
    category: "Itinerary & Duration",
    items: [
      {
        q: "How many days is the Char Dham Yatra?",
        a: "Our standard tour is 12 days, but we offer 7-15 day variants depending on your schedule.",
      },
      {
        q: "What is included in the package?",
        a: "Accommodation, all meals, guided tours, transport, and spiritual activities are included.",
      },
      {
        q: "Is there a best time to visit?",
        a: "May-October is ideal. Char Dham typically opens in May and closes in October.",
      },
    ],
  },
  {
    category: "Health & Fitness",
    items: [
      {
        q: "What is the altitude and physical difficulty?",
        a: "Altitudes range from 6,000-12,000 feet. Moderate fitness is required. We provide acclimatization breaks.",
      },
      {
        q: "Is this suitable for elderly people?",
        a: "Yes, with modifications. We offer alternative routes and additional rest days for seniors.",
      },
      {
        q: "What about altitude sickness?",
        a: "We provide acclimatization, hydration support, and medical assistance if needed. Consult your doctor before traveling.",
      },
    ],
  },
  {
    category: "Payments & Costs",
    items: [
      {
        q: "What is the payment schedule?",
        a: "50% upfront to confirm, 50% 2 weeks before the tour. We accept all major payment methods.",
      },
      {
        q: "Are there group discounts?",
        a: "Yes, groups of 10+ get 10% discount. Corporate groups get additional benefits.",
      },
      {
        q: "What extra costs might I incur?",
        a: "Personal expenses, additional activities, and tips are not included in the package cost.",
      },
    ],
  },
  {
    category: "Logistics & Travel",
    items: [
      {
        q: "What documents do I need?",
        a: "Valid ID/passport, and any required travel insurance. Check visa requirements based on your nationality.",
      },
      {
        q: "How is the accommodation?",
        a: "Hotels, guest houses, and pilgrim lodges. All accommodations are selected for comfort and cleanliness.",
      },
      {
        q: "What about meals?",
        a: "Vegetarian and non-vegetarian options available. Special dietary requirements can be accommodated.",
      },
    ],
  },
  {
    category: "Spiritual & Cultural",
    items: [
      {
        q: "Do I need to be religious?",
        a: "No, this journey welcomes all faiths and spiritual seekers. It's about connection with nature and spirituality.",
      },
      {
        q: "Will there be spiritual activities?",
        a: "Yes, meditation sessions, puja ceremonies, and guidance on spiritual significance of sites.",
      },
      { q: "Can I do this tour solo?", a: "Yes, solo travelers are welcome. You'll join a group with other pilgrims." },
    ],
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (key: string) => {
    setOpenItems((prev) => (prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]))
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-foreground/80">Find answers to common questions about our spiritual tours</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">{category.category}</h2>
              <div className="space-y-3">
                {category.items.map((item, i) => {
                  const key = `${category.category}-${i}`
                  const isOpen = openItems.includes(key)
                  return (
                    <div key={key} className="card-elevated">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex justify-between items-start gap-4 font-semibold text-left"
                      >
                        <span>{item.q}</span>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 mt-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && <p className="mt-4 text-foreground/80 leading-relaxed">{item.a}</p>}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Still have questions?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our expert team is ready to help you plan the perfect spiritual journey
          </p>
          <a
            href="/contact"
            className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-3 rounded-lg font-semibold inline-block transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

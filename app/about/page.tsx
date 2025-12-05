import { Heart, Users, Target, Award } from "lucide-react"

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-text mb-6">About Spiritual Journeys</h1>
          <p className="text-xl text-foreground/80">
            Dedicated to providing authentic, meaningful spiritual experiences to seekers from around the world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="card-elevated">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-foreground/80">
                To create transformative spiritual journeys that connect pilgrims with the sacred energy of India's
                holiest destinations while maintaining the sanctity and authenticity of these spiritual places.
              </p>
            </div>
            <div className="card-elevated">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-foreground/80">
                To be the most trusted and respected spiritual tour operator, known for our commitment to excellence,
                cultural sensitivity, and unforgettable pilgrim experiences.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Spirituality", desc: "Deep respect for all faiths and traditions" },
              { icon: Users, title: "Community", desc: "Supporting local communities along our routes" },
              { icon: Target, title: "Excellence", desc: "Highest standards in service and safety" },
              { icon: Award, title: "Trust", desc: "Transparent and reliable partnerships" },
            ].map((v, i) => (
              <div key={i} className="card-elevated text-center">
                <v.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-serif font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-foreground/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2009", title: "Founded", desc: "Started with a vision to provide authentic spiritual tours" },
              { year: "2012", title: "Expansion", desc: "Expanded to all four Char Dham destinations" },
              { year: "2018", title: "Recognition", desc: "Awarded as Best Spiritual Tour Operator" },
              { year: "2025", title: "Legacy", desc: "Over 5000 satisfied pilgrims and counting" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-24 flex-shrink-0">
                  <p className="font-serif font-bold text-2xl text-primary">{item.year}</p>
                </div>
                <div className="pb-6 border-b border-border">
                  <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

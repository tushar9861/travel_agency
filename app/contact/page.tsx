import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-lg text-foreground/80">We'd love to hear from you and help plan your spiritual journey</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                details: ["+91 9XXX XXX XXX", "+91 8XXX XXX XXX"],
              },
              {
                icon: Mail,
                title: "Email",
                details: ["info@spiritualjourneys.com", "bookings@spiritualjourneys.com"],
              },
              {
                icon: MapPin,
                title: "Address",
                details: ["Rishikesh, Uttarakhand", "India - 249201"],
              },
              {
                icon: Clock,
                title: "Hours",
                details: ["Monday - Sunday", "9:00 AM - 8:00 PM IST"],
              },
            ].map((item, i) => (
              <div key={i} className="card-elevated text-center">
                <item.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-serif font-bold text-lg mb-3">{item.title}</h3>
                {item.details.map((detail, j) => (
                  <p key={j} className="text-sm text-foreground/70 mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto card-elevated">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Visit Our Office</h2>
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-foreground/60">Interactive map coming soon - Rishikesh, Uttarakhand</p>
          </div>
        </div>
      </section>
    </div>
  )
}

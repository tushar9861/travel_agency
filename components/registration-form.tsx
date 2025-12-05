"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, AlertCircle } from "lucide-react"
import { saveRegistration } from "@/lib/data-store"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    passengers: "1",
    email: "",
    packageInterest: "Char Dham Yatra",
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      setError("Please fill in all required fields")
      setLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      setLoading(false)
      return
    }

    if (formData.phone.length < 10) {
      setError("Phone number must be at least 10 digits")
      setLoading(false)
      return
    }

    try {
      saveRegistration({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        passengers: Number.parseInt(formData.passengers),
        packageInterest: formData.packageInterest,
      })

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          address: "",
          passengers: "1",
          email: "",
          packageInterest: "Char Dham Yatra",
        })
      }, 3000)
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error("[v0] Registration error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="card-elevated max-w-2xl mx-auto border-2 border-primary/30">
      {submitted && (
        <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-lg flex gap-3 items-start animate-scale-up">
          <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-bold text-primary">Registration Successful!</p>
            <p className="text-sm text-foreground/70">Thank you! We will contact you soon with exclusive offers.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg flex gap-3 items-start">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-primary mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-foreground/50"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-foreground/50"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-foreground/50"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Number of Passengers *</label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            max="20"
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-bold text-primary mb-2">Address *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-foreground/50"
            placeholder="Your full address"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-bold text-primary mb-2">Interested Package</label>
          <select
            name="packageInterest"
            value={formData.packageInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white"
          >
            <option>Char Dham Yatra</option>
            <option>Twin Temple Expedition</option>
            <option>Source Journey</option>
            <option>Extended Sacred Tour</option>
            <option>Prayagraj Magh Mela</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary mt-6 text-lg font-bold py-4 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Registration"}
      </button>

      <p className="text-xs text-center text-foreground/60 mt-4">
        ✓ We respect your privacy. Your information is secure with us.
      </p>
    </form>
  )
}

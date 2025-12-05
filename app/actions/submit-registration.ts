"use server"

import { addRegistration } from "@/lib/database"

export async function submitRegistration(formData: {
  name: string
  email: string
  phone: string
  address: string
  passengers: number
  packageInterest: string
}) {
  try {
    // Validate data
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Invalid email address",
      }
    }

    // Phone validation (basic)
    if (formData.phone.length < 10) {
      return {
        success: false,
        error: "Phone number must be at least 10 digits",
      }
    }

    // Add to database
    const id = addRegistration(formData)

    return {
      success: true,
      id,
      message: "Registration submitted successfully! We will contact you soon.",
    }
  } catch (error) {
    console.error("Registration error:", error)
    return {
      success: false,
      error: "Failed to submit registration. Please try again.",
    }
  }
}

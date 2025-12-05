import { getRegistrations } from "@/lib/database"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const csvData = getRegistrations()
    const lines = csvData
      .split("\n")
      .filter((line) => line.trim())
      .slice(1) // Remove header

    const registrations = lines.map((line) => {
      const [id, timestamp, name, email, phone, address, passengers, packageInterest, status] = line
        .split('","')
        .map((field) => field.replace(/^"|"$/g, ""))

      return {
        id,
        timestamp,
        name,
        email,
        phone,
        address,
        passengers,
        packageInterest,
        status,
      }
    })

    return NextResponse.json({ success: true, data: registrations })
  } catch (error) {
    console.error("Error fetching registrations data:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch registrations", data: [] }, { status: 500 })
  }
}

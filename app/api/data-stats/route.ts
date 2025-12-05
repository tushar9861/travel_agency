import { getRegistrations, getTrips, getEvents } from "@/lib/database"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const registrations = getRegistrations()
    const trips = getTrips()
    const events = getEvents()

    // Count lines (excluding header)
    const registrationCount = registrations.split("\n").filter((line) => line.trim()).length - 1
    const tripsCount = trips.split("\n").filter((line) => line.trim()).length - 1
    const eventsCount = events.split("\n").filter((line) => line.trim()).length - 1

    return NextResponse.json({
      registrations: Math.max(0, registrationCount),
      trips: Math.max(0, tripsCount),
      events: Math.max(0, eventsCount),
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error fetching data stats:", error)
    return NextResponse.json(
      { error: "Failed to fetch data stats", registrations: 0, trips: 0, events: 0 },
      { status: 500 },
    )
  }
}

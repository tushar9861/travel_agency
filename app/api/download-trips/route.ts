import { getTrips } from "@/lib/database"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const csvData = getTrips()

    return new NextResponse(csvData, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="trips.csv"',
      },
    })
  } catch (error) {
    console.error("Error downloading trips:", error)
    return NextResponse.json({ error: "Failed to download file" }, { status: 500 })
  }
}

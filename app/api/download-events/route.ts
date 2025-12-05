import { getEvents } from "@/lib/database"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const csvData = getEvents()

    return new NextResponse(csvData, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="events.csv"',
      },
    })
  } catch (error) {
    console.error("Error downloading events:", error)
    return NextResponse.json({ error: "Failed to download file" }, { status: 500 })
  }
}

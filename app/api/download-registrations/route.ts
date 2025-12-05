import { getRegistrations } from "@/lib/database"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const csvData = getRegistrations()

    return new NextResponse(csvData, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="registrations.csv"',
      },
    })
  } catch (error) {
    console.error("Error downloading registrations:", error)
    return NextResponse.json({ error: "Failed to download file" }, { status: 500 })
  }
}

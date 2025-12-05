import { initializeDataSystem } from "@/lib/database"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    initializeDataSystem()
    return NextResponse.json({
      success: true,
      message: "Data system initialized successfully",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error initializing data system:", error)
    return NextResponse.json({ success: false, error: "Failed to initialize data system" }, { status: 500 })
  }
}

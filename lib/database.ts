import fs from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const REGISTRATIONS_FILE = path.join(DATA_DIR, "registrations.csv")
const TRIPS_FILE = path.join(DATA_DIR, "trips.csv")
const EVENTS_FILE = path.join(DATA_DIR, "events.csv")

// Ensure data directory exists
export function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// Initialize CSV files with headers
export function initializeCSVFiles() {
  ensureDataDir()

  const registrationHeaders = "ID,Timestamp,Name,Email,Phone,Address,NumberOfPassengers,PackageInterest,Status\n"
  const tripsHeaders = "ID,Timestamp,PackageName,Duration,Price,Destinations,StartDate,EndDate,Status\n"
  const eventsHeaders = "ID,Timestamp,EventName,EventDate,EventType,Location,Capacity,Registered,Status\n"

  if (!fs.existsSync(REGISTRATIONS_FILE)) {
    fs.writeFileSync(REGISTRATIONS_FILE, registrationHeaders)
  }

  if (!fs.existsSync(TRIPS_FILE)) {
    fs.writeFileSync(TRIPS_FILE, tripsHeaders)
  }

  if (!fs.existsSync(EVENTS_FILE)) {
    fs.writeFileSync(EVENTS_FILE, eventsHeaders)
  }
}

export function initializeDataSystem() {
  try {
    ensureDataDir()
    initializeCSVFiles()
  } catch (error) {
    console.error("[v0] Failed to initialize data system:", error)
  }
}

// Add registration to CSV
export function addRegistration(data: {
  name: string
  email: string
  phone: string
  address: string
  passengers: number
  packageInterest: string
}) {
  initializeDataSystem()

  const id = Date.now().toString()
  const timestamp = new Date().toISOString()
  const row = `${id},"${timestamp}","${data.name}","${data.email}","${data.phone}","${data.address}","${data.passengers}","${data.packageInterest}","pending"\n`

  fs.appendFileSync(REGISTRATIONS_FILE, row)
  return id
}

// Add trip to CSV
export function addTrip(data: {
  packageName: string
  duration: string
  price: string
  destinations: string[]
  startDate: string
  endDate: string
}) {
  initializeDataSystem()

  const id = Date.now().toString()
  const timestamp = new Date().toISOString()
  const destinations = data.destinations.join(" | ")
  const row = `${id},"${timestamp}","${data.packageName}","${data.duration}","${data.price}","${destinations}","${data.startDate}","${data.endDate}","active"\n`

  fs.appendFileSync(TRIPS_FILE, row)
  return id
}

// Add event to CSV
export function addEvent(data: {
  eventName: string
  eventDate: string
  eventType: string
  location: string
  capacity: number
}) {
  initializeDataSystem()

  const id = Date.now().toString()
  const timestamp = new Date().toISOString()
  const row = `${id},"${timestamp}","${data.eventName}","${data.eventDate}","${data.eventType}","${data.location}","${data.capacity}","0","active"\n`

  fs.appendFileSync(EVENTS_FILE, row)
  return id
}

// Get all registrations
export function getRegistrations() {
  initializeDataSystem()

  if (fs.existsSync(REGISTRATIONS_FILE)) {
    return fs.readFileSync(REGISTRATIONS_FILE, "utf-8")
  }
  return ""
}

// Get all trips
export function getTrips() {
  initializeDataSystem()

  if (fs.existsSync(TRIPS_FILE)) {
    return fs.readFileSync(TRIPS_FILE, "utf-8")
  }
  return ""
}

// Get all events
export function getEvents() {
  initializeDataSystem()

  if (fs.existsSync(EVENTS_FILE)) {
    return fs.readFileSync(EVENTS_FILE, "utf-8")
  }
  return ""
}

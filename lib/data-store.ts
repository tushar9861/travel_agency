// This stores registration data in the browser and persists between sessions

export interface Registration {
  id: string
  timestamp: string
  name: string
  email: string
  phone: string
  address: string
  passengers: number
  packageInterest: string
}

const STORAGE_KEY = "darshan_bharat_registrations"

export function saveRegistration(data: Omit<Registration, "id" | "timestamp">) {
  const registrations = getRegistrations()

  const newRegistration: Registration = {
    id: `REG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    ...data,
  }

  registrations.push(newRegistration)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations))
  return newRegistration
}

export function getRegistrations(): Registration[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function exportToCSV(registrations: Registration[]): string {
  const headers = ["ID", "Timestamp", "Name", "Email", "Phone", "Address", "Passengers", "Package Interest"]
  const rows = registrations.map((reg) => [
    reg.id,
    new Date(reg.timestamp).toLocaleString(),
    `"${reg.name}"`,
    reg.email,
    reg.phone,
    `"${reg.address}"`,
    reg.passengers,
    reg.packageInterest,
  ])

  const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")

  return csvContent
}

export function downloadCSV(registrations: Registration[], filename = "registrations.csv") {
  const csv = exportToCSV(registrations)
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)

  link.setAttribute("href", url)
  link.setAttribute("download", filename)
  link.style.visibility = "hidden"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

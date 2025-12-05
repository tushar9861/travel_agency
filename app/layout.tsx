import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Darshan Bharat - Spiritual Tours & Pilgrimage Packages | Char Dham Yatra",
  description:
    "Experience sacred spiritual journeys with Darshan Bharat. Premium Char Dham Yatra packages, Prayagraj Magh Mela, and pilgrim tours across India. Book your spiritual adventure today!",
  icons: {
    icon: "/icon.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-background text-foreground`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

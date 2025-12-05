"use client"

import { downloadCSV, getRegistrations, type Registration } from "@/lib/data-store"
import { motion } from "framer-motion"
import { BarChart, Download, FileText, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import "react-loading-skeleton/dist/skeleton.css"

export default function DataManagement() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const data = getRegistrations()
      setRegistrations(data)
    } catch (error) {
      console.error("[v0] Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleDownloadCSV = () => {
    downloadCSV(registrations, "darshan-bharat-registrations.csv")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#C4186F] to-[#1E3A8A] bg-clip-text text-transparent">
            Data Management Dashboard
          </h1>
          <p className="text-gray-600 text-lg mt-4">View and download all collected customer registrations</p>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              label: "Total Registrations",
              value: registrations.length,
              icon: Users,
              color: "from-[#C4186F] to-[#A01558]",
            },
            {
              label: "This Month",
              value: registrations.filter((r) => new Date(r.timestamp).getMonth() === new Date().getMonth()).length,
              icon: BarChart,
              color: "from-[#FFD700] to-[#FFC700]",
            },
            {
              label: "This Week",
              value: registrations.filter((r) => new Date(r.timestamp).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000)
                .length,
              icon: FileText,
              color: "from-[#1E3A8A] to-[#1A2E5C]",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className={`bg-gradient-to-br ${stat.color} rounded-xl shadow-lg p-8 text-white transform hover:scale-105 transition-transform duration-300`}
              variants={itemVariants}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold opacity-90">{stat.label}</p>
                  <p className="text-4xl font-bold mt-2">{stat.value}</p>
                </div>
                <stat.icon size={40} className="opacity-80" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Section */}
        <motion.div className="bg-white rounded-xl shadow-lg p-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 className="text-2xl font-bold text-[#C4186F] mb-6">Download Data</h2>
          <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#C4186F] transition-colors duration-300">
            <FileText className="w-16 h-16 mx-auto text-[#C4186F] mb-4" />
            <h3 className="text-lg font-bold text-[#C4186F] mb-2">Export All Registrations</h3>
            <p className="text-gray-600 mb-6">
              Download all {registrations.length} registrations as CSV file compatible with Excel
            </p>
            <button
              onClick={handleDownloadCSV}
              disabled={registrations.length === 0}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4186F] to-[#A01558] text-white font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={18} />
              Download CSV ({registrations.length} records)
            </button>
          </div>
        </motion.div>

        {/* Recent Registrations Table */}
        <motion.div className="bg-white rounded-xl shadow-lg p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-bold text-[#C4186F] mb-6">Recent Registrations</h2>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading data...</p>
            </div>
          ) : registrations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No registrations yet. Data will appear here when customers submit the form.
              </p>
              <Link href="/" className="text-[#C4186F] hover:text-[#A01558] font-bold mt-4 inline-block">
                Go back to home
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#C4186F] to-[#A01558] text-white">
                    <th className="px-4 py-3 text-left font-bold">Name</th>
                    <th className="px-4 py-3 text-left font-bold">Email</th>
                    <th className="px-4 py-3 text-left font-bold">Phone</th>
                    <th className="px-4 py-3 text-left font-bold">Passengers</th>
                    <th className="px-4 py-3 text-left font-bold">Package</th>
                    <th className="px-4 py-3 text-left font-bold">Date</th>
                  </tr>
                </thead>
                <motion.tbody variants={containerVariants} initial="hidden" animate="visible">
                  {registrations.map((reg, idx) => (
                    <motion.tr
                      key={reg.id}
                      className={`border-b ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors duration-200`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 font-semibold text-gray-900">{reg.name}</td>
                      <td className="px-4 py-3 text-gray-700">{reg.email}</td>
                      <td className="px-4 py-3 text-gray-700">{reg.phone}</td>
                      <td className="px-4 py-3 text-gray-700">{reg.passengers}</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-[#FFD700] text-gray-900 rounded-full text-xs font-bold">
                          {reg.packageInterest}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">
                        {new Date(reg.timestamp).toLocaleDateString()} {new Date(reg.timestamp).toLocaleTimeString()}
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          )}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-[#C4186F] hover:text-[#A01558] font-bold transition-colors text-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

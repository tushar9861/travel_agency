import Layout from './layout'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookNow() {
  const packages = [
    "Char Dham Yatra",
    "Varanasi Spiritual Tour",
    "Golden Triangle with Rishikesh",
    "Amritsar and Dharamshala Tour",
    "South India Temple Tour"
  ]

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6 text-orange-800">Book Your Spiritual Journey</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Registration Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Phone Number" type="tel" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Address" />
            <Input placeholder="Number of Passengers" type="number" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a package" />
              </SelectTrigger>
              <SelectContent>
                {packages.map((pkg, index) => (
                  <SelectItem key={index} value={pkg.toLowerCase().replace(/\s+/g, '-')}>{pkg}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Preferred Date" type="date" />
            <Button className="w-full">Book Now</Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  )
}

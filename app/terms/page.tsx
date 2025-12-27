import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary">
              Legal
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">Last updated: December 27, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Rent.OK platform, you agree to be bound by these Terms of Service. If you
                disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Rental Services</h2>
              <h3 className="text-xl font-semibold mt-4">Booking Process</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All rentals are subject to availability and confirmation</li>
                <li>Rental periods are calculated from the delivery to pickup time</li>
                <li>Security deposits are required for most items and will be refunded upon successful return</li>
                <li>You must provide accurate information for delivery and pickup</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">User Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You must be at least 18 years old to use our services</li>
                <li>You are responsible for the safety and proper use of rented items</li>
                <li>Items must be returned in the same condition as received</li>
                <li>Any damage or loss will be charged to the user</li>
                <li>You must not sublease or transfer rented items to third parties</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Pricing and Payments</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All prices are displayed in Indian Rupees (INR)</li>
                <li>Prices include applicable taxes unless stated otherwise</li>
                <li>Delivery charges may apply based on location and order value</li>
                <li>Payment can be made via cash on delivery or online methods</li>
                <li>Security deposits are refundable upon successful item return</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Cancellation and Refunds</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Cancellations made 24 hours before delivery are eligible for full refund</li>
                <li>Cancellations within 24 hours may incur a cancellation fee</li>
                <li>No refunds for early returns unless agreed upon</li>
                <li>We reserve the right to cancel orders due to unavailability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rent.OK acts as a platform connecting renters with vendors. While we verify our partners, we are not
                liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Product defects or malfunctions</li>
                <li>Delays in delivery or pickup beyond our control</li>
                <li>Personal injury resulting from product use</li>
                <li>Indirect, consequential, or incidental damages</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="font-medium">Rent.OK - Raunak Studio</p>
                <p className="text-muted-foreground">Email: legal@rentok.com</p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

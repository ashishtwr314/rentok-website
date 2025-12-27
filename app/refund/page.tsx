import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function RefundPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold">Refund Policy</h1>
            <p className="text-muted-foreground text-lg">Last updated: December 27, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Rent.OK, we strive to provide excellent service. This Refund Policy outlines the circumstances under
                which refunds are provided and the process for requesting them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Cancellation and Refunds</h2>

              <h3 className="text-xl font-semibold mt-4">Before Delivery</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong>More than 24 hours before delivery:</strong> 100% refund
                </li>
                <li>
                  <strong>12-24 hours before delivery:</strong> 75% refund
                </li>
                <li>
                  <strong>Less than 12 hours before delivery:</strong> 50% refund
                </li>
                <li>
                  <strong>After delivery has started:</strong> No refund
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">Product Issues</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Wrong item delivered: Full refund or free replacement</li>
                <li>Item damaged or defective upon delivery: Full refund or replacement</li>
                <li>Item significantly different from description: Full refund</li>
                <li>Non-delivery: Full refund within 7 business days</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Security Deposit Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Security deposits are refundable under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Item returned on time and in original condition</li>
                <li>No damage, loss, or excessive wear</li>
                <li>All accessories and components returned</li>
                <li>Refund processed within 5-7 business days after successful return</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">Security Deposit Deductions</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Late return: ₹50-500 depending on rental value</li>
                <li>Minor damage: Repair costs deducted</li>
                <li>Major damage or loss: Full deposit forfeited, additional charges may apply</li>
                <li>Missing accessories: Replacement cost deducted</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Non-Refundable Situations</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Rental fees after the rental period has started</li>
                <li>Delivery charges if order is cancelled after dispatch</li>
                <li>User-caused damage during rental period</li>
                <li>Change of mind after delivery</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Refund Process</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Contact our support team via app, email, or phone</li>
                <li>Provide order details and reason for refund request</li>
                <li>Our team will review within 24-48 hours</li>
                <li>Approved refunds are processed within 5-7 business days</li>
                <li>Amount credited to original payment method or bank account</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact for Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                For refund requests or questions about this policy:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="font-medium">Rent.OK Customer Support</p>
                <p className="text-muted-foreground">Email: refunds@rentok.com</p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                <p className="text-muted-foreground">Hours: Mon-Sat, 9 AM - 7 PM IST</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

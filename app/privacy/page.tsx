import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">Last updated: December 27, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rent.OK ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you use our mobile application and
                website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <h3 className="text-xl font-semibold mt-4">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We collect personal information that you voluntarily provide when registering for the app, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Delivery address and billing information</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Government-issued ID for verification purposes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">Usage Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect certain information about your device and how you interact with our app:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Location data (with your permission)</li>
                <li>Rental history and preferences</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Processing and managing your rental bookings</li>
                <li>Facilitating pickup and delivery services</li>
                <li>Processing payments and security deposits</li>
                <li>Sending booking confirmations and updates</li>
                <li>Providing customer support</li>
                <li>Improving our services and user experience</li>
                <li>Sending promotional offers (with your consent)</li>
                <li>Preventing fraud and ensuring platform security</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong>Vendors:</strong> To fulfill your rental orders
                </li>
                <li>
                  <strong>Delivery Partners:</strong> To coordinate pickup and delivery
                </li>
                <li>
                  <strong>Payment Processors:</strong> To process transactions securely
                </li>
                <li>
                  <strong>Service Providers:</strong> Who assist in operating our platform
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to protect our rights
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure storage of payment information</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data by authorized personnel</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of promotional communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy or to exercise your rights, contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="font-medium">Rent.OK - Raunak Studio</p>
                <p className="text-muted-foreground">Email: privacy@rentok.com</p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                <p className="text-muted-foreground">Address: Mumbai, Maharashtra, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

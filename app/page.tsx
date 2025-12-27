import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { AppScreenshotsCarousel } from "@/components/app-screenshots-carousel";
import {
  Star,
  TrendingUp,
  Package,
  Shield,
  Clock,
  Truck,
  IndianRupee,
  CheckCircle2,
  Download,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary text-primary-foreground">
                <TrendingUp className="h-3 w-3 mr-1" />
                India's #1 Wedding Rental App
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                Everything for Your{" "}
                <span className="text-primary">Dream Wedding</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                From designer clothes to luxury vehicles, utensils to DJ
                services - rent everything you need for your special day. One
                app, unlimited possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="#download">Download Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent"
                  asChild
                >
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-secondary">50K+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Couples
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">10K+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">4.8★</div>
                  <div className="text-sm text-muted-foreground">
                    User Rating
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero-device-mockup.png"
                  alt="Rent OK App - End of Year Super Sale up to 50% off"
                  width={800}
                  height={1600}
                  className="mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5"
      >
        <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Why Choose Rent.OK?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience hassle-free wedding planning with our comprehensive
              rental platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Vast Categories</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse through electronics, furniture, fashion, vehicles,
                  catering equipment, and everything else you need
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Best Prices</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Save up to 70% with our competitive pricing and exclusive
                  discounts on bulk rentals
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Free Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complimentary pickup and delivery service to your doorstep
                  across major Indian cities
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Flexible Duration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rent for hours, days, or weeks - customize your rental period
                  based on your needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Secure Payments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cash on delivery option available, with secure online payments
                  coming soon
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Quality Assured</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All products are verified, sanitized, and quality-checked
                  before delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              App Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Seamless Experience, Every Step
            </h2>
          </div>

          <AppScreenshotsCarousel />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      >
        <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-primary border-primary">
                About Rent.OK
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                Making Dream Weddings Affordable
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Rent.OK was born from a simple idea: every couple deserves their
                dream wedding without breaking the bank. We understand that
                Indian weddings are grand celebrations that require countless
                items - from traditional attire to modern electronics, from
                catering equipment to luxury vehicles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Our platform connects you with verified vendors across India,
                offering quality products at unbeatable prices. With seamless
                booking, doorstep delivery, and dedicated customer support,
                we're transforming how India celebrates its most special
                moments.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Verified Quality Products</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Pan-India Coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Instant Confirmation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/images/app-screenshot-search.jpeg"
                    alt="Search Products"
                    width={400}
                    height={800}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section
        id="download"
        className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Start Planning Your Dream Wedding Today
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Download Rent.OK and get access to 10,000+ products with exclusive
              discounts for first-time users
            </p>
            <div className="flex justify-center pt-4">
              <Link href="#" className="hover:opacity-90 transition-opacity">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                <span className="font-semibold">50K+ Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5"
      >
        <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-primary border-primary">
              Contact Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Have Questions? We're Here to Help
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Reach out to our team for any inquiries about rentals, pricing, or
              partnerships
            </p>
          </div>

          <Card className="max-w-xl mx-auto">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+91 97538 72597"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

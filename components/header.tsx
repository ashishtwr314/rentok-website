"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5 pointer-events-none" />
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8 relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/rent-ok-logo.png" alt="Rent.OK Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold text-secondary">Rent.OK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
            Privacy
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="#download">Download App</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/indian-wedding-pattern.jpg')] opacity-5 pointer-events-none" />
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6 relative z-10">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
            </Link>
            <Button asChild className="w-full">
              <Link href="#download">Download App</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

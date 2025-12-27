"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screenshots = [
  {
    src: "/images/app-screenshot-categories.jpeg",
    alt: "All Categories",
    title: "Browse Categories",
    description: "Explore our extensive range of categories organized for easy navigation",
  },
  {
    src: "/images/app-screenshot-product-detail.jpeg",
    alt: "Product Details",
    title: "Detailed Information",
    description: "View pricing, reviews, and complete product details with discount badges",
  },
  {
    src: "/images/app-screenshot-rental-selection.jpeg",
    alt: "Easy Booking",
    title: "Simple Booking",
    description: "Select dates, customize options, and complete your rental in minutes",
  },
  {
    src: "/images/app-screenshot-menu.jpeg",
    alt: "App Navigation",
    title: "Easy Navigation",
    description: "Access your orders, track rentals, and manage everything from one dashboard",
  },
  {
    src: "/images/app-screenshot-payment.jpeg",
    alt: "Secure Payment",
    title: "Flexible Payment",
    description: "Pay via cash on delivery with transparent pricing and no hidden charges",
  },
  {
    src: "/images/app-screenshot-search.jpeg",
    alt: "Smart Search",
    title: "Quick Search",
    description: "Find exactly what you need with our intelligent search and filters",
  },
]

export function AppScreenshotsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = screenshots.length - slidesToShow
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = screenshots.length - slidesToShow
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const maxDots = screenshots.length - slidesToShow + 1

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        >
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / slidesToShow}%` }}>
              <Card className="overflow-hidden shadow-2xl mx-auto max-w-md">
                <CardContent className="p-0">
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    width={400}
                    height={800}
                    className="w-full"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
              <div className="space-y-3 mt-8 text-center">
                <h3 className="text-2xl font-semibold">{screenshot.title}</h3>
                <p className="text-muted-foreground text-pretty max-w-md mx-auto">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous screenshot</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next screenshot</span>
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

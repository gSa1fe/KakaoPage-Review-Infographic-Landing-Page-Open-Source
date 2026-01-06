"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { appInfo } from "@/data/review-data"

export function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const screenshots = appInfo.screenshots

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }, [screenshots.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Get visible screenshots (3 at a time for desktop)
  const getVisibleIndexes = () => {
    const prev = (currentIndex - 1 + screenshots.length) % screenshots.length
    const next = (currentIndex + 1) % screenshots.length
    return [prev, currentIndex, next]
  }

  const visibleIndexes = getVisibleIndexes()

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Smartphone className="size-4 text-primary" />
              <span className="text-sm text-primary">App Preview</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">ตัวอย่างหน้าจอแอป</h2>
            <p className="text-muted-foreground mt-2">สัมผัสประสบการณ์การใช้งานจริง</p>
          </div>
        </FadeIn>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop (sides) */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              prevSlide()
              setIsAutoPlaying(false)
            }}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/90 backdrop-blur-sm border-primary/20 shadow-lg hidden md:flex hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronLeft className="size-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              nextSlide()
              setIsAutoPlaying(false)
            }}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/90 backdrop-blur-sm border-primary/20 shadow-lg hidden md:flex hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronRight className="size-5" />
          </Button>

          {/* Screenshots Display */}
          <div className="flex items-center justify-center gap-4 md:gap-8 py-8 px-4 md:px-16">
            {visibleIndexes.map((index, position) => {
              const isCenter = position === 1
              const screenshot = screenshots[index]
              
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    scale: isCenter ? 1 : 0.75,
                    opacity: isCenter ? 1 : 0.5,
                    z: isCenter ? 10 : 0,
                    rotateY: position === 0 ? 15 : position === 2 ? -15 : 0,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                  className={`relative shrink-0 cursor-pointer ${
                    isCenter ? "z-10" : "z-0 hidden sm:block"
                  }`}
                  onClick={() => goToSlide(index)}
                  style={{ perspective: "1000px" }}
                >
                  {/* Phone Frame */}
                  <div className={`relative ${isCenter ? "w-[200px] sm:w-[240px] md:w-[280px]" : "w-[160px] md:w-[200px]"}`}>
                    {/* Phone Border */}
                    <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl shadow-black/30">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-10" />
                      
                      {/* Screen */}
                      <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/19.5]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                          >
                            <Image
                              src={screenshot.url}
                              alt={screenshot.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 200px, 280px"
                              priority={isCenter}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full" />
                    </div>

                    {/* Reflection */}
                    {isCenter && (
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/10 blur-2xl rounded-full" />
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Caption */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4"
          >
            <p className="text-sm text-muted-foreground">
              {screenshots[currentIndex].alt}
            </p>
          </motion.div>

          {/* Mobile Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                prevSlide()
                setIsAutoPlaying(false)
              }}
              className="rounded-full bg-background/90 backdrop-blur-sm border-primary/20 shadow-lg"
            >
              <ChevronLeft className="size-5" />
            </Button>
            
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {screenshots.length}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                nextSlide()
                setIsAutoPlaying(false)
              }}
              className="rounded-full bg-background/90 backdrop-blur-sm border-primary/20 shadow-lg"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all hover:scale-125 active:scale-95 ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground"
            >
              {isAutoPlaying ? "⏸ หยุดเล่นอัตโนมัติ" : "▶ เล่นอัตโนมัติ"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


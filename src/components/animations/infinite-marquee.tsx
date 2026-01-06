"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface InfiniteMarqueeProps {
  imageUrl: string
  alt?: string
  speed?: number
  direction?: "left" | "right"
  className?: string
}

export function InfiniteMarquee({
  imageUrl,
  alt = "Kakao Entertainment",
  speed = 30,
  direction = "left",
  className = "",
}: InfiniteMarqueeProps) {
  // Create multiple copies for seamless loop
  const items = Array(4).fill(null)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Marquee Container */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className="relative h-[150px] md:h-[200px] w-[600px] md:w-[900px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
          >
            <Image
              src={imageUrl}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 600px, 900px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Alternative: Text Marquee for branding
interface TextMarqueeProps {
  items: string[]
  speed?: number
  className?: string
}

export function TextMarquee({
  items,
  speed = 20,
  className = "",
}: TextMarqueeProps) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        className="flex gap-8 w-max items-center"
        animate={{ x: ["0%", "-25%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="text-2xl md:text-4xl font-bold text-muted-foreground/30 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}


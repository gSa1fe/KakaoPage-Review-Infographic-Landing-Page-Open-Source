"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

// Parallax effect - element moves slower than scroll
export function ParallaxScroll({ 
  children, 
  className = "",
  speed = 0.5 
}: ScrollRevealProps & { speed?: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// Scale up on scroll
export function ScaleOnScroll({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

// Rotate on scroll
export function RotateOnScroll({ 
  children, 
  className = "",
  direction = "left"
}: ScrollRevealProps & { direction?: "left" | "right" }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "left" ? [15, -15] : [-15, 15]
  )

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  )
}

// Slide in from side on scroll
export function SlideInOnScroll({ 
  children, 
  className = "",
  direction = "left"
}: ScrollRevealProps & { direction?: "left" | "right" }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "left" ? [-100, 0] : [100, 0]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div ref={ref} style={{ x, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

// Text reveal character by character
export function TextRevealOnScroll({ 
  text, 
  className = "" 
}: { text: string; className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const words = text.split(" ")

  return (
    <motion.p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </motion.p>
  )
}

function Word({ 
  children, 
  progress, 
  range 
}: { 
  children: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number] 
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  
  return (
    <motion.span style={{ opacity }} className="inline-block mr-2">
      {children}
    </motion.span>
  )
}


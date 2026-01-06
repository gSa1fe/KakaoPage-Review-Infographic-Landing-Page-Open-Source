"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useAnimationConfig } from "@/hooks"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: FadeInProps) {
  const { shouldDisableAnimations, durationMultiplier } = useAnimationConfig()

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  // ถ้าปิด animation ให้แสดง static
  if (shouldDisableAnimations) {
    return <div className={className}>{children}</div>
  }

  // ลด distance ถ้า reduce complexity
  const reducedDirections = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  }

  const usedDirection = durationMultiplier < 1 ? reducedDirections[direction] : directions[direction]

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...usedDirection
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7 * durationMultiplier, 
        delay: delay * durationMultiplier,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}

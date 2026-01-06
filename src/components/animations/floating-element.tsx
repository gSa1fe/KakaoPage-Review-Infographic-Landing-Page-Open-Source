"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useAnimationConfig } from "@/hooks"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  distance?: number
}

export function FloatingElement({ 
  children, 
  className = "",
  duration = 6,
  distance = 20,
}: FloatingElementProps) {
  const { shouldDisableAnimations, shouldReduceComplexity, durationMultiplier } = useAnimationConfig()

  // ถ้าปิด animation ให้แสดง static
  if (shouldDisableAnimations) {
    return <div className={className}>{children}</div>
  }

  // ลด complexity ของ animation
  const adjustedDistance = shouldReduceComplexity ? distance * 0.5 : distance
  const adjustedDuration = shouldReduceComplexity ? duration * 1.5 : duration

  // Animation แบบง่ายสำหรับ low-end devices
  if (shouldReduceComplexity) {
    return (
      <motion.div
        className={className}
        animate={{
          y: [0, -adjustedDistance, 0],
        }}
        transition={{
          duration: adjustedDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    )
  }

  // Animation เต็มรูปแบบ
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -adjustedDistance, 0],
        rotateX: [0, 5, 0, -5, 0],
        rotateY: [0, -5, 0, 5, 0],
      }}
      transition={{
        duration: adjustedDuration * durationMultiplier,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  )
}

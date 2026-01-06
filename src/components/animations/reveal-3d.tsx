"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useAnimationConfig } from "@/hooks"

interface Reveal3DProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal3D({ 
  children, 
  className = "",
  delay = 0,
}: Reveal3DProps) {
  const { shouldDisableAnimations, shouldDisable3D, durationMultiplier } = useAnimationConfig()

  // ถ้าปิด animation ให้แสดง static
  if (shouldDisableAnimations) {
    return <div className={className}>{children}</div>
  }

  // ถ้าปิดแค่ 3D ให้ใช้ fade-in แทน
  if (shouldDisable3D) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.5 * durationMultiplier,
          delay: delay * durationMultiplier,
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        rotateX: 35,
        y: 80,
        scale: 0.9,
      }}
      whileInView={{ 
        opacity: 1,
        rotateX: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8 * durationMultiplier,
        delay: delay * durationMultiplier,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

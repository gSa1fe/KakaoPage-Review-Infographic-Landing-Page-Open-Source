"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useAnimationConfig } from "@/hooks"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ 
  children, 
  className = "",
}: StaggerContainerProps) {
  const { shouldDisableAnimations, durationMultiplier } = useAnimationConfig()

  // ถ้าปิด animation ให้แสดง static
  if (shouldDisableAnimations) {
    return <div className={className}>{children}</div>
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 * durationMultiplier,
        delayChildren: 0.1 * durationMultiplier,
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger Item - ใช้คู่กับ StaggerContainer
export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export function StaggerItem({ 
  children, 
  className = "" 
}: { children: ReactNode; className?: string }) {
  const { shouldDisableAnimations } = useAnimationConfig()

  // ถ้าปิด animation ให้แสดง static
  if (shouldDisableAnimations) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div 
      variants={staggerItem} 
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}

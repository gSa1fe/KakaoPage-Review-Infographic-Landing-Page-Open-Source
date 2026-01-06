"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { useAnimationConfig } from "@/hooks"

export function ParallaxBackground() {
  const [mounted, setMounted] = useState(false)
  const { shouldDisableParallax, shouldReduceComplexity } = useAnimationConfig()
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // ลด spring stiffness สำหรับ performance ที่ดีขึ้น
  const springConfig = { damping: 50, stiffness: 50, mass: 1 }
  const x1 = useSpring(useTransform(mouseX, [0, 1920], [-20, 20]), springConfig)
  const y1 = useSpring(useTransform(mouseY, [0, 1080], [-20, 20]), springConfig)
  const x2 = useSpring(useTransform(mouseX, [0, 1920], [15, -15]), springConfig)
  const y2 = useSpring(useTransform(mouseY, [0, 1080], [15, -15]), springConfig)

  useEffect(() => {
    setMounted(true)
    
    // ไม่ track mouse ถ้าปิด parallax
    if (shouldDisableParallax) return

    // ใช้ throttle เพื่อลด CPU usage
    let ticking = false
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          mouseX.set(e.clientX)
          mouseY.set(e.clientY)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, shouldDisableParallax])

  if (!mounted) return null

  // ถ้าปิด parallax แสดงแค่ static background
  if (shouldDisableParallax) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 size-[500px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 size-[400px] rounded-full bg-primary/5 blur-[80px]" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary orb - ใช้ will-change เพื่อ GPU acceleration */}
      <motion.div
        className="absolute top-1/4 -left-32 size-[500px] rounded-full bg-primary/15 blur-[100px] will-change-transform"
        style={{ x: x1, y: y1 }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute bottom-1/4 -right-32 size-[400px] rounded-full bg-primary/10 blur-[80px] will-change-transform"
        style={{ x: x2, y: y2 }}
      />

      {/* Accent orb - ลด animation ถ้า reduce complexity */}
      {!shouldReduceComplexity && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Grid overlay - ซ่อนบน low-end devices */}
      {!shouldReduceComplexity && (
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      )}
    </div>
  )
}

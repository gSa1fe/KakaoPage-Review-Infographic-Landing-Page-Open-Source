"use client"

import { useEffect, useState } from "react"

type PerformanceLevel = "high" | "medium" | "low"

/**
 * Hook ตรวจสอบ performance ของอุปกรณ์
 * - ใช้ hardware concurrency (จำนวน CPU cores)
 * - ใช้ device memory (ถ้ามี)
 * - ตรวจสอบ connection type
 */
export function useDevicePerformance(): PerformanceLevel {
  const [performance, setPerformance] = useState<PerformanceLevel>("high")

  useEffect(() => {
    const checkPerformance = () => {
      // Check CPU cores
      const cores = navigator.hardwareConcurrency || 4
      
      // Check device memory (Chrome only)
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4
      
      // Check connection (slow connection = reduce animations)
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection
      const connectionType = connection?.effectiveType || "4g"
      
      // Determine performance level
      if (cores <= 2 || memory <= 2 || connectionType === "2g" || connectionType === "slow-2g") {
        setPerformance("low")
      } else if (cores <= 4 || memory <= 4 || connectionType === "3g") {
        setPerformance("medium")
      } else {
        setPerformance("high")
      }
    }

    checkPerformance()
  }, [])

  return performance
}

/**
 * Hook ที่รวม reduced motion และ device performance
 * ใช้เพื่อตัดสินใจว่าควรแสดง animation แบบไหน
 */
export function useAnimationConfig() {
  const reducedMotion = useReducedMotionSafe()
  const performance = useDevicePerformance()

  return {
    // ควรปิด animation ทั้งหมดไหม
    shouldDisableAnimations: reducedMotion,
    
    // ควรลด animation complexity ไหม
    shouldReduceComplexity: performance === "low" || performance === "medium",
    
    // ควรปิด parallax ไหม
    shouldDisableParallax: reducedMotion || performance === "low",
    
    // ควรปิด 3D effects ไหม
    shouldDisable3D: reducedMotion || performance === "low",
    
    // Animation duration multiplier
    durationMultiplier: reducedMotion ? 0 : performance === "low" ? 0.5 : 1,
    
    // Performance level
    performance,
  }
}

// Safe version for SSR
function useReducedMotionSafe(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return reducedMotion
}


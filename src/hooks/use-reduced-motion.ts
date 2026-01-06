"use client"

import { useEffect, useState } from "react"

/**
 * Hook ตรวจสอบว่าผู้ใช้เปิด "Reduce Motion" ในระบบหรือไม่
 * - Windows: Settings > Accessibility > Visual effects > Animation effects
 * - macOS: System Preferences > Accessibility > Display > Reduce motion
 * - iOS: Settings > Accessibility > Motion > Reduce Motion
 */
export function useReducedMotion(): boolean {
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


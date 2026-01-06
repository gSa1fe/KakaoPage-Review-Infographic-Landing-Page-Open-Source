"use client"

import { ReactNode, useEffect, useRef } from "react"
import Lenis from "lenis"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,           // ระยะเวลา scroll (วินาที)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      orientation: "vertical", // ทิศทาง scroll
      gestureOrientation: "vertical",
      smoothWheel: true,       // smooth สำหรับ mouse wheel
      touchMultiplier: 2,      // ความเร็วบน touch devices
      infinite: false,         // ไม่ใช่ infinite scroll
    })

    lenisRef.current = lenis

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}


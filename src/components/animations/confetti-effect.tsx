"use client"

import { useEffect, useRef, useState } from "react"
import confetti from "canvas-confetti"

interface ConfettiEffectProps {
  trigger?: boolean
}

export function ConfettiEffect({ trigger = false }: ConfettiEffectProps) {
  const hasTriggered = useRef(false)

  useEffect(() => {
    if (trigger && !hasTriggered.current) {
      hasTriggered.current = true
      
      // Fire confetti from both sides
      const duration = 3000
      const end = Date.now() + duration

      const colors = ["#eab308", "#f59e0b", "#fbbf24", "#fcd34d", "#fef3c7"]

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: colors,
        })
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: colors,
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }

      // Initial burst
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: colors,
      })

      frame()
    }
  }, [trigger])

  return null
}

// Hook to trigger confetti when element is in view
export function useConfettiOnView() {
  const [shouldTrigger, setShouldTrigger] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldTrigger(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, shouldTrigger }
}


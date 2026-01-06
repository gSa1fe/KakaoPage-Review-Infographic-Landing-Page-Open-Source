"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)

      // Easing function (ease out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOut * value)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, value, duration])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toLocaleString()
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  )
}

// Simple version for displaying pre-formatted strings like "10M+"
interface AnimatedStatProps {
  value: string
  className?: string
}

export function AnimatedStat({ value, className = "" }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState("")

  useEffect(() => {
    if (!isInView) return

    // Handle comma-separated numbers like "10,000+" 
    const hasComma = value.includes(",")

    const cleanValue = value.replace(/,/g, "")
    const numMatch = cleanValue.match(/[\d.]+/)
    const suffixMatch = value.match(/[A-Za-z+#]+$/)

    if (!numMatch) {
      setDisplayValue(value)
      return
    }

    const targetNum = parseFloat(numMatch[0])
    const suffix = suffixMatch ? suffixMatch[0] : ""

    const duration = 2000
    const startTime = Date.now()

    const formatWithComma = (num: number) => {
      return Math.floor(num).toLocaleString('en-US')
    }

    const updateValue = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const current = targetNum * easeOut

      if (value.includes("M")) {
        setDisplayValue(current.toFixed(1) + suffix)
      } else if (value.includes("K")) {
        setDisplayValue(Math.floor(current) + suffix)
      } else if (value.includes("#")) {
        setDisplayValue("#" + Math.max(1, Math.floor(targetNum - (targetNum - 1) * easeOut)))
      } else if (hasComma) {
        // Handle comma-formatted numbers like "10,000+"
        setDisplayValue(formatWithComma(current) + suffix)
      } else {
        setDisplayValue(current.toFixed(1) + suffix)
      }

      if (progress < 1) {
        requestAnimationFrame(updateValue)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(updateValue)
  }, [isInView, value])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {displayValue || value}
    </motion.span>
  )
}


"use client"

import Tilt from "react-parallax-tilt"
import { ReactNode } from "react"
import { useAnimationConfig } from "@/hooks"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltMaxAngle?: number
  scale?: number
  glareEnable?: boolean
}

export function TiltCard({ 
  children, 
  className = "",
  tiltMaxAngle = 15,
  scale = 1.02,
  glareEnable = true,
}: TiltCardProps) {
  const { shouldDisable3D, shouldReduceComplexity } = useAnimationConfig()

  // ถ้าปิด 3D effects ให้ return children เลย
  if (shouldDisable3D) {
    return <div className={className}>{children}</div>
  }

  // ลด intensity ถ้า reduce complexity
  const adjustedTiltAngle = shouldReduceComplexity ? tiltMaxAngle * 0.5 : tiltMaxAngle
  const adjustedScale = shouldReduceComplexity ? 1 + (scale - 1) * 0.5 : scale

  return (
    <Tilt
      tiltMaxAngleX={adjustedTiltAngle}
      tiltMaxAngleY={adjustedTiltAngle}
      perspective={1000}
      scale={adjustedScale}
      transitionSpeed={shouldReduceComplexity ? 3000 : 2000}
      glareEnable={glareEnable && !shouldReduceComplexity}
      glareMaxOpacity={0.2}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="12px"
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </Tilt>
  )
}

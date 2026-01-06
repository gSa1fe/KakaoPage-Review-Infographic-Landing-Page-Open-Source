"use client"

import { AlertTriangle, ShieldAlert } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Reveal3D, TiltCard, StaggerContainer, StaggerItem } from "@/components/animations"
import { limitations } from "@/data/review-data"

export function LimitationsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-rose-500/5 to-transparent" />
      
      {/* Warning decoration */}
      <motion.div
        className="absolute top-20 right-20 text-red-500/10"
        animate={{ 
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldAlert className="size-32" />
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Reveal3D>
          <TiltCard tiltMaxAngle={6} scale={1.01}>
            <Card className="border-red-500/30 bg-card/80 backdrop-blur-sm overflow-hidden">
              {/* Red accent bar */}
              <div className="h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500" />
              
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-4 text-red-500" />
                  <CardDescription className="text-red-500/80">{limitations.subtitle}</CardDescription>
                </div>
                <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ 
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <AlertTriangle className="size-7 text-red-500" />
                  </motion.div>
                  {limitations.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {limitations.drawbacks.map((item, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="p-3 sm:p-4 rounded-lg bg-red-500/5 border border-red-500/20"
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgba(239, 68, 68, 0.1)",
                          borderColor: "rgba(239, 68, 68, 0.4)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-red-500 font-bold text-sm sm:text-base">✕</span>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-red-400 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </TiltCard>
        </Reveal3D>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem, TiltCard } from "@/components/animations"
import { keyHighlights, iconMap } from "@/data/review-data"

export function HighlightsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Orange/Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent" />
      
      {/* Decorative flame */}
      <motion.div
        className="absolute bottom-10 left-10 text-orange-500/10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Flame className="size-40" />
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Flame className="size-4 text-orange-500" />
              <span className="text-sm text-orange-500">{keyHighlights.subtitle}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{keyHighlights.title}</h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {keyHighlights.highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon]
            return (
              <StaggerItem key={index}>
                <TiltCard tiltMaxAngle={12}>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <Card className="h-full bg-card/80 backdrop-blur-sm border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
                      {/* Orange accent */}
                      <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <motion.div 
                            className="size-10 sm:size-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center shrink-0"
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: [0, -10, 10, 0],
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {IconComponent && <IconComponent className="size-5 sm:size-6 text-orange-500" />}
                          </motion.div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-base sm:text-lg">{highlight.title}</CardTitle>
                            <CardDescription className="mt-1 sm:mt-2 text-xs sm:text-sm">
                              {highlight.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

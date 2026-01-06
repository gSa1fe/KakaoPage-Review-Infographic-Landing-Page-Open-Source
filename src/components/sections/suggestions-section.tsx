"use client"

import { Lightbulb, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal3D, TiltCard, StaggerContainer, StaggerItem } from "@/components/animations"
import { suggestions } from "@/data/review-data"

const priorityConfig = {
  high: { label: "สำคัญมาก", color: "bg-cyan-500 text-white" },
  medium: { label: "สำคัญปานกลาง", color: "bg-cyan-500/50 text-cyan-100" },
  low: { label: "ถ้ามีจะดี", color: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" },
}

export function SuggestionsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Cyan/Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-transparent" />
      
      {/* Rocket decoration */}
      <motion.div
        className="absolute bottom-20 right-10 text-cyan-500/10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rocket className="size-32" />
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Reveal3D>
          <TiltCard tiltMaxAngle={6} scale={1.01}>
            <Card className="bg-card/80 backdrop-blur-sm border-cyan-500/20 overflow-hidden">
              {/* Cyan accent bar */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500" />
              
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Rocket className="size-4 text-cyan-500" />
                  <CardDescription className="text-cyan-500/80">{suggestions.subtitle}</CardDescription>
                </div>
                <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Lightbulb className="size-7 text-cyan-500" />
                  </motion.div>
                  {suggestions.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <StaggerContainer className="space-y-3 sm:space-y-4">
                  {suggestions.items.map((item, index) => {
                    const priority = priorityConfig[item.priority as keyof typeof priorityConfig]
                    return (
                      <StaggerItem key={index}>
                        <motion.div
                          className="p-3 sm:p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                          whileHover={{ 
                            scale: 1.01,
                            x: 5,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-500 text-sm sm:text-base">💡</span>
                              <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                            </div>
                            <motion.div whileHover={{ scale: 1.1 }}>
                              <Badge className={`shrink-0 text-xs ${priority.color}`}>
                                {priority.label}
                              </Badge>
                            </motion.div>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground pl-5 sm:pl-7">{item.description}</p>
                        </motion.div>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </CardContent>
            </Card>
          </TiltCard>
        </Reveal3D>
      </div>
    </section>
  )
}

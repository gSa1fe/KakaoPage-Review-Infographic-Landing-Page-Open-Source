"use client"

import { CheckCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem, TiltCard } from "@/components/animations"
import { keyBenefits } from "@/data/review-data"

export function BenefitsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 text-green-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="size-32" />
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <CheckCircle className="size-4 text-green-500" />
              <span className="text-sm text-green-500">{keyBenefits.subtitle}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{keyBenefits.title}</h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {keyBenefits.benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <TiltCard tiltMaxAngle={12}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full bg-card/80 backdrop-blur-sm border-green-500/20 hover:shadow-xl hover:shadow-green-500/10 transition-all">
                    {/* Green accent */}
                    <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-start gap-3">
                        <motion.div
                          initial={{ rotate: -180, opacity: 0 }}
                          whileInView={{ rotate: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                          className="p-1.5 sm:p-2 rounded-lg bg-green-500/10"
                        >
                          <CheckCircle className="size-4 sm:size-5 text-green-500 shrink-0" />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-base sm:text-lg">{benefit.title}</CardTitle>
                          <CardDescription className="mt-2 text-xs sm:text-sm">
                            {benefit.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

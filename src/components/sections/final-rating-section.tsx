"use client"

import { Trophy, Download, Sparkles, Crown } from "lucide-react"
import { motion } from "framer-motion"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal3D, TiltCard, FloatingElement, ConfettiEffect, useConfettiOnView } from "@/components/animations"
import { finalRating, appInfo } from "@/data/review-data"

export function FinalRatingSection() {
  const percentage = (finalRating.overall / finalRating.maxScore) * 100
  const { ref: confettiRef, shouldTrigger } = useConfettiOnView()

  // Data for radial chart
  const gaugeData = [
    {
      name: "Score",
      value: percentage,
      fill: "url(#goldGradient)",
    },
  ]

  return (
    <section ref={confettiRef} className="py-20 px-4 relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiEffect trigger={shouldTrigger} />
      {/* Kakao Entertainment background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-image-optimized"
        style={{ backgroundImage: 'url(https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d3dc6017900001.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-optimized" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-500/20 rotating-element"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="size-24" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 text-amber-500/20 rotating-element"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Crown className="size-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-yellow-500/20 rotating-element"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="size-16" />
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Reveal3D>
          <TiltCard tiltMaxAngle={5} scale={1.02} glareEnable={true}>
            <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-card/90 to-card/80 backdrop-blur-sm overflow-hidden">
              {/* Gold accent bar */}
              <div className="h-2 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

              <CardHeader className="text-center">
                <FloatingElement duration={4} distance={10}>
                  <motion.div
                    className="mx-auto mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 1 }}
                  >
                    <div className="relative">
                      <Trophy className="size-16 text-yellow-500" />
                      <motion.div
                        className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </FloatingElement>
                <CardTitle className="text-2xl md:text-3xl">คะแนนสรุป</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Gauge Chart */}
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="100%"
                        barSize={20}
                        data={gaugeData}
                        startAngle={180}
                        endAngle={0}
                      >
                        <defs>
                          <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#eab308" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#eab308" />
                          </linearGradient>
                        </defs>
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background={{ fill: "rgba(234, 179, 8, 0.1)" }}
                          dataKey="value"
                          cornerRadius={10}
                          fill="url(#goldGradient)"
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>

                    {/* Center Score Display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: "spring" }}
                      >
                        {finalRating.overall}
                      </motion.div>
                      <div className="text-lg text-muted-foreground">
                        / {finalRating.maxScore}
                      </div>
                    </div>
                  </div>

                  {/* Verdict Badge */}
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className="mt-4"
                  >
                    <Badge className="text-sm sm:text-lg px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold shadow-lg shadow-yellow-500/30">
                      {finalRating.verdict}
                    </Badge>
                  </motion.div>
                </motion.div>

                {/* Score Breakdown Mini */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto px-2"
                >
                  {[
                    { label: "เนื้อหา", score: 9 },
                    { label: "UI/UX", score: 8 },
                    { label: "ความคุ้ม", score: 9 },
                    { label: "แนะนำ", score: 8 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      className="text-center p-2 sm:p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
                    >
                      <div className="text-lg sm:text-xl font-bold text-yellow-500">{item.score}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Summary */}
                <motion.p
                  className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  {finalRating.summary}
                </motion.p>

                {/* CTA */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto flex justify-center"
                  >
                    <Button size="lg" className="shadow-lg shadow-yellow-500/30 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold hover:from-yellow-400 hover:to-amber-400" asChild>
                      <a href={appInfo.appStoreUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="size-5" />
                        ดาวน์โหลดเลย
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </TiltCard>
        </Reveal3D>
      </div>
    </section>
  )
}

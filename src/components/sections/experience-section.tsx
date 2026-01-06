"use client"

import { Star, Gauge } from "lucide-react"
import { motion } from "framer-motion"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Reveal3D, TiltCard } from "@/components/animations"
import { userExperience } from "@/data/review-data"

// Transform data for Radar Chart
const radarData = userExperience.ratings.map(item => ({
  category: item.label.replace("ความ", "").replace("การ", "").slice(0, 8),
  score: item.score,
  fullMark: 5,
}))

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Kakao Webtoon background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-image-optimized"
        style={{ backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/bc603195265161.5ee349986f15a.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-optimized" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <Reveal3D>
          <TiltCard tiltMaxAngle={6} scale={1.01}>
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-purple-500/20">
              {/* Purple accent bar */}
              <div className="h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500" />

              <CardHeader>
                <div className="flex items-center gap-2">
                  <Gauge className="size-4 text-purple-500" />
                  <CardDescription className="text-purple-500/80">{userExperience.subtitle}</CardDescription>
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  {userExperience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-4 sm:p-6">
                {/* Two Column Layout: Chart + Bars */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Radar Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-full h-[220px] sm:h-[280px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                          <PolarGrid
                            stroke="rgba(168, 85, 247, 0.2)"
                            strokeDasharray="3 3"
                          />
                          <PolarAngleAxis
                            dataKey="category"
                            tick={{ fill: 'rgba(168, 85, 247, 0.8)', fontSize: 9 }}
                          />
                          <PolarRadiusAxis
                            angle={90}
                            domain={[0, 5]}
                            tick={{ fill: 'rgba(168, 85, 247, 0.5)', fontSize: 8 }}
                            tickCount={6}
                          />
                          <Radar
                            name="คะแนน"
                            dataKey="score"
                            stroke="rgb(168, 85, 247)"
                            fill="rgb(168, 85, 247)"
                            fillOpacity={0.4}
                            strokeWidth={2}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>

                  {/* Rating Bars */}
                  <div className="space-y-4 sm:space-y-5">
                    {userExperience.ratings.map((item, index) => (
                      <motion.div
                        key={index}
                        className="space-y-1.5 sm:space-y-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.15 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                          <div className="flex items-center gap-1">
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + index * 0.15, type: "spring" }}
                            >
                              <Star className="size-3 sm:size-4 fill-purple-500 text-purple-500" />
                            </motion.div>
                            <span className="text-xs sm:text-sm font-semibold text-purple-500">{item.score}/5</span>
                          </div>
                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
                          style={{ originX: 0 }}
                        >
                          <div className="relative h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-purple-500/20">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-violet-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(item.score / 5) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-muted-foreground leading-relaxed pt-4 border-t border-purple-500/20 text-sm sm:text-base"
                >
                  {userExperience.summary}
                </motion.p>
              </CardContent>
            </Card>
          </TiltCard>
        </Reveal3D>
      </div>
    </section>
  )
}

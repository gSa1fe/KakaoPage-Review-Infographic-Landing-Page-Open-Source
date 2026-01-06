"use client"

import { Users, Info } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal3D, TiltCard, InfiniteMarquee } from "@/components/animations"
import { applicationOverview } from "@/data/review-data"

const KAKAO_MEDIA_IMAGE = "https://newsroom.kakaoent.com/wp-content/themes/kakao-ent/assets/img/home/media-img.jpg"

export function OverviewSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Kakao Entertainment background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-image-optimized"
        style={{ backgroundImage: 'url(https://newsroom.kakaoent.com/wp-content/uploads/2022/04/Kakao-Entertainment-films-shows-lineup-2022.png)' }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-optimized" />

      {/* Kakao Entertainment Media Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <InfiniteMarquee
          imageUrl={KAKAO_MEDIA_IMAGE}
          alt="Kakao Entertainment Media"
          speed={40}
          className="py-4"
        />
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Reveal3D>
          <TiltCard tiltMaxAngle={8} scale={1.01}>
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-blue-500/20">
              {/* Color accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />

              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Info className="size-4 text-blue-500" />
                  <CardDescription className="text-blue-500/80">{applicationOverview.subtitle}</CardDescription>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <CardTitle className="text-2xl md:text-3xl">
                    {applicationOverview.title}
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                >
                  {applicationOverview.description}
                </motion.p>

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 mb-4"
                  >
                    <Users className="size-5 text-blue-500" />
                    <h3 className="font-semibold text-sm sm:text-base">กลุ่มเป้าหมาย</h3>
                  </motion.div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {applicationOverview.targetAudience.map((audience, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="border-blue-500/30 hover:bg-blue-500/10 text-xs sm:text-sm">
                          {audience}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        </Reveal3D>
      </div>
    </section>
  )
}

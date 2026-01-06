"use client"

import Image from "next/image"
import { Star, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingElement, AnimatedStat } from "@/components/animations"
import { appInfo } from "@/data/review-data"

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Kakao Entertainment background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-image-optimized"
        style={{ backgroundImage: 'url(https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/ad529918017900001.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-optimized" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        {/* 3D Floating App Icon */}
        <FloatingElement duration={5} distance={15}>
          <motion.div className="floating-element mx-auto mb-8 size-32 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              bounce: 0.4
            }}
            style={{
              boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.4)",
            }}
          >
            <Image
              src={appInfo.logoUrl}
              alt={`${appInfo.name} Logo`}
              width={128}
              height={128}
              className="size-full object-cover"
              priority
            />
          </motion.div>
        </FloatingElement>

        {/* Shadow under icon */}
        <motion.div
          className="mx-auto mb-8 w-24 h-4 bg-primary/20 rounded-full blur-xl will-change-transform-opacity"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* App Name & Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)' }}
        >
          {appInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 mb-6 mx-auto max-w-3xl px-4"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.4)' }}
        >
          {appInfo.tagline}
        </motion.p>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-8 text-sm">
            {appInfo.category}
          </Badge>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              >
                <Star
                  className={`size-6 ${i < Math.floor(appInfo.rating)
                    ? "fill-primary text-primary"
                    : i < appInfo.rating
                      ? "fill-primary/50 text-primary"
                      : "text-muted-foreground"
                    }`}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-lg font-semibold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{appInfo.rating}</span>
          <span className="text-white/80" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>({appInfo.totalRatings} ratings)</span>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" asChild>
              <a href={appInfo.appStoreUrl} target="_blank" rel="noopener noreferrer">
                <Download className="size-5" />
                App Store
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <a href={appInfo.playStoreUrl} target="_blank" rel="noopener noreferrer">
                <Download className="size-5" />
                Google Play
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats with Animated Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-xl mx-auto px-2"
        >
          {[
            { value: appInfo.downloads, label: "Downloads" },
            { value: "10,000+", label: "Webtoons" },
            { value: appInfo.rating.toString(), label: "Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <AnimatedStat
                value={stat.value}
                className="text-lg sm:text-2xl md:text-3xl font-bold text-primary block truncate"
              />
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-muted-foreground/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

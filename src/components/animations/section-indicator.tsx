"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { id: "hero", label: "Hero", color: "bg-yellow-500" },
  { id: "overview", label: "Overview", color: "bg-blue-500" },
  { id: "benefits", label: "Benefits", color: "bg-green-500" },
  { id: "experience", label: "Experience", color: "bg-purple-500" },
  { id: "highlights", label: "Highlights", color: "bg-orange-500" },
  { id: "limitations", label: "Limitations", color: "bg-red-500" },
  { id: "suggestions", label: "Suggestions", color: "bg-cyan-500" },
  { id: "rating", label: "Rating", color: "bg-yellow-500" },
]

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const documentHeight = document.documentElement.scrollHeight
      const sectionHeight = documentHeight / sections.length

      const currentSection = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        sections.length - 1
      )
      
      setActiveSection(currentSection)
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="relative group"
              whileHover={{ scale: 1.2 }}
            >
              {/* Dot */}
              <motion.div
                className={`size-3 rounded-full transition-all duration-300 ${
                  index === activeSection
                    ? `${section.color} scale-125`
                    : "bg-muted-foreground/30"
                }`}
                animate={{
                  scale: index === activeSection ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: index === activeSection ? Infinity : 0,
                }}
              />
              
              {/* Label on hover */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-card border text-xs whitespace-nowrap pointer-events-none"
              >
                {section.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}


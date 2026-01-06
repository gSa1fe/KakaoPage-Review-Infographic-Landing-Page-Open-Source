"use client"

import { motion } from "framer-motion"
import { Mail, Github, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const contactInfo = {
  name: "Yannawut Panjaruan",
  email: "yannawutpanjaruan@gmail.com",
  github: "https://github.com/gSa1fe",
  githubUsername: "gSa1fe",
}

export function FooterSection() {
  return (
    <footer className="relative z-10 border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold mb-4">ติดต่อผู้รีวิว</h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild className="gap-2">
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail className="size-4" />
                  {contactInfo.email}
                </a>
              </Button>
            </motion.div>

            {/* GitHub */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild className="gap-2">
                <a 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  {contactInfo.githubUsername}
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="my-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-muted-foreground"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span>© 2026 KakaoPage Review</span>
            <span className="hidden sm:inline">-</span>
            <span className="flex items-center gap-1">
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="size-4 text-red-500 fill-red-500" />
              </motion.span>
              by {contactInfo.name}
            </span>
          </div>
          <p className="mt-2 text-xs px-4">
            Infographic Landing Page | Built with Next.js + shadcn/ui + Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


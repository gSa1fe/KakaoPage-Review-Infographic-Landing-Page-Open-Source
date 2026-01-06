import { HeroSection } from "@/components/sections/hero-section"
import { ScreenshotsSection } from "@/components/sections/screenshots-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { LimitationsSection } from "@/components/sections/limitations-section"
import { SuggestionsSection } from "@/components/sections/suggestions-section"
import { FinalRatingSection } from "@/components/sections/final-rating-section"
import { FooterSection } from "@/components/sections/footer-section"
import { 
  ParallaxBackground, 
  ScrollProgress, 
  ScrollToTop,
  SectionIndicator 
} from "@/components/animations"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Theme Toggle Button */}
      <ThemeToggle />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* 3D Parallax Background */}
      <ParallaxBackground />
      
      {/* Section Navigation Dots */}
      <SectionIndicator />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* App Screenshots Carousel */}
      <ScreenshotsSection />
      
      <Separator />
      
      {/* Section 1: ภาพรวมแอปพลิเคชัน */}
      <OverviewSection />
      
      {/* Section 2: ประโยชน์ที่ได้รับ */}
      <BenefitsSection />
      
      {/* Section 3: ประสบการณ์ผู้ใช้ */}
      <ExperienceSection />
      
      {/* Section 4: จุดเด่นที่น่าสนใจ */}
      <HighlightsSection />
      
      {/* Section 5: ข้อจำกัดและจุดสังเกต */}
      <LimitationsSection />
      
      {/* Section 6: ข้อเสนอแนะเพื่อการพัฒนา */}
      <SuggestionsSection />
      
      <Separator />
      
      {/* Final Rating */}
      <FinalRatingSection />
      
      {/* Footer */}
      <FooterSection />
    </main>
  )
}

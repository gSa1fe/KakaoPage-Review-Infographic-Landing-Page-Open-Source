import { LucideIcon, Smartphone, Gift, Sparkles, AlertTriangle, Lightbulb, Star } from "lucide-react"

//  REVIEW DATA - แก้ไขข้อมูลรีวิวได้ที่นี่

// ข้อมูลพื้นฐานของแอป
export const appInfo = {
  name: "KakaoPage",
  tagline: "สัมผัสประสบการณ์ความบันเทิงไร้ขีดจำกัด ทั้งเว็บตูน นิยาย และหนังสือคุณภาพที่คัดสรรมาเพื่อคุณ เพลิดเพลินกับผลงานลิขสิทธิ์แท้ (Originals) ได้ฟรีผ่านฟีเจอร์ 'รอฟรี (Wait-Until-Free)' พิเศษสุด! ห้ามพลาดกับกิจกรรมแจก Cash และตั๋วอ่านฟรีที่มีให้คุณในทุกๆ วัน",
  category: "Entertainment",
  developer: "Kakao Entertainment Corp.",
  rating: 2.9,
  totalRatings: "131K",
  downloads: "10M+",
  logoUrl: "https://play-lh.googleusercontent.com/5sJiMAEO66dYGE9IigEfYRwVe5qD5V_F6PVZna4XF7ZGwnqgKZj-6RUJ2RF_3Ve2_bA1hB6Qc0Jfh5cTnZdAjSg=w240-h480-rw",
  appStoreUrl: "https://apps.apple.com/app/kakaopage/id616643813",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.kakao.page",
  screenshots: [
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/eb/a6/7b/eba67bca-c512-97d7-a629-33ff5771c93e/ios_en_6in_01.jpg/600x1300bb.webp",
      alt: "All Stories, One Place - หน้าแรก",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b7/ee/db/b7eedb2c-caba-c0ba-2476-8fe97b093e57/ios_en_6in_02.jpg/600x1300bb.webp",
      alt: "Webtoon Featured - เนื้อหาแนะนำ",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f5/34/8b/f5348bf2-347d-d359-6efc-a04e9d03dcc6/ios_en_6in_03.jpg/600x1300bb.webp",
      alt: "Personalized Picks - แนะนำตามความชอบ",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c5/9b/61/c59b618d-20eb-1ffa-f1e1-b224898d163e/ios_en_6in_04.jpg/600x1300bb.webp",
      alt: "Fresh Every Day - อัพเดทใหม่ทุกวัน",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b7/93/f3/b793f3ad-d380-53b5-3af3-030327e6f886/ios_en_6in_06.jpg/600x1300bb.webp",
      alt: "Instant Access - อ่านได้ทันที",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/94/6b/62946b47-f874-53b2-c40f-665f12b66b54/ios_en_6in_07.jpg/600x1300bb.webp",
      alt: "Reading Experience - ประสบการณ์การอ่าน",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8b/56/11/8b5611ca-f5d3-aca6-145a-2a5971af04de/ios_en_6in_05.jpg/600x1300bb.webp",
      alt: "Wait-Until-Free - รออ่านฟรี",
    },
  ],
}

// Section 1: ภาพรวมแอปพลิเคชัน (Application Overview)
export const applicationOverview = {
  title: "ภาพรวมแอปพลิเคชัน",
  subtitle: "Application Overview",
  description: `KakaoPage (คากาวเพจ) คือแพลตฟอร์มดิจิทัลคอนเทนต์ (Digital Content Platform) ชั้นนำจากประเทศเกาหลีใต้ ภายใต้การบริหารของ Kakao Entertainment เปิดตัวครั้งแรกในปี 2013 โดยวางตำแหน่งเป็น "Premium Content Hub" ที่รวบรวมความบันเทิงไว้อย่างครบวงจร ทั้งการ์ตูน (Webtoon), นิยาย (Web Novel), หนังสือทั่วไป และสื่อมัลติมีเดีย`,
  targetAudience: [
    "ผู้ที่ชื่นชอบการอ่าน Webtoon",
    "แฟนคลับซีรีส์เกาหลีที่ต้องการอ่านต้นฉบับ",
    "ผู้ที่ต้องการความบันเทิงแบบพกพา",
    "ทุกเพศทุกวัย โดยเฉพาะกลุ่มอายุ 15-35 ปี",
  ],
}

// Section 2: ประโยชน์ที่ได้รับ (Key Benefits)
export const keyBenefits = {
  title: "ประโยชน์ที่ได้รับ",
  subtitle: "Key Benefits",
  benefits: [
    {
      title: "เข้าถึงเนื้อหาต้นฉบับได้รวดเร็วที่สุด (First Access to Originals)",
      description: "ผู้ใช้งานสามารถติดตามตอนล่าสุดของ Webtoon และนิยายเรื่องโปรดได้ทันทีที่เกาหลีอัปเดต (Real-time update) โดยไม่ต้องรอระยะเวลาในการแปลลิขสิทธิ์ ช่วยให้ทราบเนื้อเรื่องก่อนใครและไม่พลาดกระแสสำคัญ",
    },
    {
      title: "ความยืดหยุ่นในการใช้งานด้วยระบบ รอฟรี (Wait or Pay Flexibility)",
      description: "ช่วยลดภาระค่าใช้จ่ายสำหรับผู้ใช้งานทั่วไป ด้วยโมเดลที่อนุญาตให้อ่านตอนต่อไปได้ฟรีเมื่อครบกำหนดเวลา (Cool-down time) ทำให้ผู้ใช้สามารถบริหารจัดการการเสพคอนเทนต์ได้ตามงบประมาณและความสะดวกส่วนตัว",
    },
    {
      title: "แหล่งรวมนิยายต้นฉบับที่สมบูรณ์ที่สุด (Comprehensive Web Novel Library)",
      description: "แตกต่างจากแอปฯ แปลภาษาไทยที่มักเน้นเฉพาะ Webtoon แต่ KakaoPage มีคลัง นิยาย (Web Novel) ต้นฉบับจำนวนมหาศาล ซึ่งเป็นเนื้อหาเชิงลึกที่ช่วยเติมเต็มอรรถรสสำหรับแฟนคลับที่ต้องการทราบรายละเอียดที่มากกว่าเวอร์ชันการ์ตูน",
    },
    {
      title: "เครื่องมือส่งเสริมการเรียนรู้ภาษา (Language Learning Tool)",
      description: "สำหรับผู้ที่กำลังศึกษาภาษาเกาหลี แอปพลิเคชันนี้เปรียบเสมือนสื่อการเรียนรู้ชั้นดีที่เต็มไปด้วยคำศัพท์สแลง (Slang), ประโยคสนทนาในชีวิตจริง และบริบททางวัฒนธรรมเกาหลีที่ทันสมัย ซึ่งหาไม่ได้ในตำราเรียนทั่วไป",
    },
  ],
}

// Section 3: ประสบการณ์ผู้ใช้ (User Experience / Usability)
export const userExperience = {
  title: "ประสบการณ์ผู้ใช้",
  subtitle: "User Experience / Usability",
  ratings: [
    { label: "ความง่ายในการใช้งาน", score: 4.5 },
    { label: "การออกแบบ UI/UX", score: 4.0 },
    { label: "ความเร็วในการโหลด", score: 3.5 },
    { label: "Learning Curve", score: 4.5 },
  ],
  summary: `อินเทอร์เฟซใช้งานง่าย มีการจัดหมวดหมู่ชัดเจน ผู้ใช้ใหม่สามารถเริ่มต้นได้ทันทีโดยไม่ต้องเรียนรู้มาก มีระบบแนะนำเรื่องที่ตรงใจ และ Dark Mode ที่ช่วยถนอมสายตา`,
}

// Section 4: จุดเด่นที่น่าสนใจ (Key Highlights)
export const keyHighlights = {
  title: "จุดเด่นที่น่าสนใจ",
  subtitle: "Key Highlights",
  highlights: [
    {
      icon: "Gift",
      title: "ระบบรออ่านฟรี",
      description: "อ่านฟรีทุกวันโดยรอเวลา ไม่ต้องเสียเงินซื้อตอน",
    },
    {
      icon: "Sparkles",
      title: "Original Content",
      description: "เนื้อหาต้นฉบับก่อนถูกนำไปทำซีรีส์ เช่น Business Proposal, True Beauty",
    },
    {
      icon: "Star",
      title: "ระบบ Coin & Ticket",
      description: "หลากหลายวิธีในการปลดล็อคเนื้อหา ยืดหยุ่นตามงบประมาณ",
    },
    {
      icon: "Smartphone",
      title: "Offline Reading",
      description: "ดาวน์โหลดเก็บไว้อ่านได้แม้ไม่มีอินเทอร์เน็ต",
    },
  ],
}

// Section 5: ข้อจำกัดและจุดสังเกต (Limitations & Drawbacks)
export const limitations = {
  title: "ข้อจำกัดและจุดสังเกต",
  subtitle: "Limitations & Drawbacks",
  drawbacks: [
    {
      title: "ต้องรอนาน",
      description: "ระบบรออ่านฟรีต้องรอ 24 ชั่วโมงต่อตอน อาจไม่เหมาะกับคนใจร้อน",
    },
    {
      title: "มีโฆษณา",
      description: "มีโฆษณาแทรกระหว่างการอ่าน แม้จะปิดได้แต่อาจรบกวนบ้าง",
    },
    {
      title: "ใช้พื้นที่เครื่องมาก",
      description: "แอปและ Cache มีขนาดใหญ่ อาจเป็นปัญหากับเครื่องที่มีพื้นที่น้อย",
    },
    {
      title: "บางเนื้อหาต้องจ่ายเงิน",
      description: "ตอนใหม่ล่าสุดมักต้องใช้ Coin หรือรอนานกว่าจะฟรี",
    },
  ],
}

// Section 6: ข้อเสนอแนะเพื่อการพัฒนา (Suggestions)
export const suggestions = {
  title: "ข้อเสนอแนะเพื่อการพัฒนา",
  subtitle: "Suggestions for Improvement",
  items: [
    {
      title: "เพิ่มระบบ Subscription",
      description: "แพ็คเกจรายเดือนที่อ่านได้ไม่จำกัด จะช่วยให้ผู้ใช้ประหยัดและสะดวกกว่า",
      priority: "medium",
    },
    {
      title: "ปรับปรุงระบบค้นหา",
      description: "เพิ่ม Filter ตามประเภท, ปีที่ออก, Rating และ Tags ที่ละเอียดกว่านี้",
      priority: "medium",
    },
    {
      title: "หน้าแสดงการ์ตูน เพิ่มฟีเจอร์แสดง episode ต่างๆ ของแต่ละเรื่อง",
      description: "แสดง episode ต่างๆ ของแต่ละเรื่อง",
      priority: "low",
    },
  ],
}

// Final Rating - คะแนนรวม
export const finalRating = {
  overall: 8.5,
  maxScore: 10,
  verdict: "แนะนำอย่างยิ่ง",
  summary: `KakaoPage เป็นแอปที่ยอดเยี่ยมสำหรับคนรัก Webtoon ด้วยเนื้อหาที่หลากหลาย ระบบรออ่านฟรีที่เป็นมิตรกับผู้ใช้ และอินเทอร์เฟซที่ใช้งานง่าย แม้จะมีข้อจำกัดบ้างแต่โดยรวมถือว่าคุ้มค่าที่จะดาวน์โหลดมาใช้งาน`,
}

// Icon Mapping - สำหรับ render icon ใน component
export const iconMap: Record<string, LucideIcon> = {
  Gift,
  Sparkles,
  Star,
  Smartphone,
  AlertTriangle,
  Lightbulb,
}


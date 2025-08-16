"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "bn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isHydrated: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.history": "School History",
    "nav.teachers": "Teachers",
    "nav.admission": "Online Admission",
    "nav.gallery": "Photo Gallery",
    "nav.video": "Video",
    "nav.notice": "Notice Board",
    "nav.academic": "Academic Info",
    "nav.contact": "Contact",
    "nav.login": "Login",

    // School Info
    "school.name": "Chandkathi Adarsha Girls' Secondary School",
    "school.tagline": "Excellence in Education, Character in Life",
    "school.established": "Established",
    "school.location": "Chandkathi, Bangladesh",

    // Common
    "common.read_more": "Read More",
    "common.view_all": "View All",
    "common.download": "Download",
    "common.search": "Search",
    "common.language": "Language",

    // Homepage sections
    "home.welcome": "Welcome to",
    "home.principal_message": "Principal's Message",
    "home.latest_news": "Latest News & Updates",
    "home.upcoming_events": "Upcoming Events",
    "home.quick_links": "Quick Links",

    // Hero section
    "hero.title": "Empowering Young Women Through Quality Education",
    "hero.subtitle": "Building tomorrow's leaders with excellence in academics and character development",
    "hero.cta.primary": "Explore Programs",
    "hero.cta.secondary": "Virtual Tour",

    // About section
    "about.title": "About Our School",
    "about.description":
      "Chandkathi Adarsha Girls' Secondary School has been a beacon of educational excellence since 1970, dedicated to nurturing young minds and building strong character.",
    "about.cta": "Learn More About Us",

    // Features section
    "features.title": "Why Choose Our School",
    "features.subtitle": "Comprehensive education that prepares students for success in academics and life",
    "features.education.title": "Quality Education",
    "features.education.description": "Modern curriculum with experienced teachers ensuring academic excellence",
    "features.community.title": "Strong Community",
    "features.community.description": "Supportive environment fostering personal growth and social responsibility",
    "features.excellence.title": "Academic Excellence",
    "features.excellence.description": "Proven track record of outstanding results and university admissions",
    "features.future.title": "Future Ready",
    "features.future.description": "Preparing students with skills needed for tomorrow's challenges",

    // Statistics
    "stats.students": "Students",
    "stats.teachers": "Teachers",
    "stats.years": "Years of Excellence",

    // Contact section
    "contact.title": "Get in Touch",
    "contact.subtitle": "We're here to help with any questions about admissions, programs, or school life",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.followUs": "Follow Us",

    // CTA section
    "cta.title": "Ready to Join Our School Community?",
    "cta.description":
      "Take the first step towards your daughter's bright future. Apply now for admission or schedule a visit to our campus.",
    "cta.button": "Apply Now",
  },
  bn: {
    // Navigation
    "nav.home": "হোম",
    "nav.history": "প্রতিষ্ঠানের ইতিহাস",
    "nav.teachers": "শিক্ষক",
    "nav.admission": "অনলাইন এডমিশন",
    "nav.gallery": "ফটো গ্যালারী",
    "nav.video": "ভিডিও",
    "nav.notice": "নোটিশ",
    "nav.academic": "একাডেমিক তথ্য",
    "nav.contact": "যোগাযোগ",
    "nav.login": "লগইন",

    // School Info
    "school.name": "চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয়",
    "school.tagline": "শিক্ষায় উৎকর্ষতা, জীবনে চরিত্র",
    "school.established": "প্রতিষ্ঠিত",
    "school.location": "চাঁদকাঠি, বাংলাদেশ",

    // Common
    "common.read_more": "আরও পড়ুন",
    "common.view_all": "সব দেখুন",
    "common.download": "ডাউনলোড",
    "common.search": "খুঁজুন",
    "common.language": "ভাষা",

    // Homepage sections
    "home.welcome": "স্বাগতম",
    "home.principal_message": "প্রধান শিক্ষকের বার্তা",
    "home.latest_news": "সর্বশেষ সংবাদ ও আপডেট",
    "home.upcoming_events": "আসন্ন অনুষ্ঠান",
    "home.quick_links": "দ্রুত লিংক",

    // Hero section
    "hero.title": "মানসম্পন্ন শিক্ষার মাধ্যমে তরুণীদের ক্ষমতায়ন",
    "hero.subtitle": "একাডেমিক উৎকর্ষতা ও চরিত্র গঠনের মাধ্যমে আগামীর নেতৃত্ব তৈরি করা",
    "hero.cta.primary": "প্রোগ্রাম দেখুন",
    "hero.cta.secondary": "ভার্চুয়াল ট্যুর",

    // About section
    "about.title": "আমাদের স্কুল সম্পর্কে",
    "about.description":
      "চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয় ১৯৭০ সাল থেকে শিক্ষার উৎকর্ষতার আলোকবর্তিকা হিসেবে তরুণ মনের পরিচর্যা ও দৃঢ় চরিত্র গঠনে নিবেদিত।",
    "about.cta": "আমাদের সম্পর্কে আরও জানুন",

    // Features section
    "features.title": "কেন আমাদের স্কুল বেছে নেবেন",
    "features.subtitle": "ব্যাপক শিক্ষা যা শিক্ষার্থীদের একাডেমিক ও জীবনে সফলতার জন্য প্রস্তুত করে",
    "features.education.title": "মানসম্পন্ন শিক্ষা",
    "features.education.description": "অভিজ্ঞ শিক্ষকদের সাথে আধুনিক পাঠ্যক্রম একাডেমিক উৎকর্ষতা নিশ্চিত করে",
    "features.community.title": "শক্তিশালী সম্প্রদায়",
    "features.community.description": "ব্যক্তিগত বৃদ্ধি ও সামাজিক দায়বদ্ধতা বৃদ্ধিকারী সহায়ক পরিবেশ",
    "features.excellence.title": "একাডেমিক উৎকর্ষতা",
    "features.excellence.description": "অসাধারণ ফলাফল ও বিশ্ববিদ্যালয় ভর্তির প্রমাণিত ট্র্যাক রেকর্ড",
    "features.future.title": "ভবিষ্যতের জন্য প্রস্তুত",
    "features.future.description": "আগামীর চ্যালেঞ্জের জন্য প্রয়োজনীয় দক্ষতা নিয়ে শিক্ষার্থীদের প্রস্তুত করা",

    // Statistics
    "stats.students": "শিক্ষার্থী",
    "stats.teachers": "শিক্ষক",
    "stats.years": "বছরের উৎকর্ষতা",

    // Contact section
    "contact.title": "যোগাযোগ করুন",
    "contact.subtitle": "ভর্তি, প্রোগ্রাম বা স্কুল জীবন সম্পর্কে যেকোনো প্রশ্নে আমরা সাহায্য করতে এখানে আছি",
    "contact.phone": "ফোন",
    "contact.email": "ইমেইল",
    "contact.address": "ঠিকানা",
    "contact.followUs": "আমাদের ফলো করুন",

    // CTA section
    "cta.title": "আমাদের স্কুল কমিউনিটিতে যোগ দিতে প্রস্তুত?",
    "cta.description":
      "আপনার মেয়ের উজ্জ্বল ভবিষ্যতের দিকে প্রথম পদক্ষেপ নিন। ভর্তির জন্য এখনই আবেদন করুন বা আমাদের ক্যাম্পাস পরিদর্শনের সময় নির্ধারণ করুন।",
    "cta.button": "এখনই আবেদন করুন",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("bn")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang === "bn" ? "bn" : "en"
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

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

    // Headmaster section
    "headmaster.name": "Sarojini Mondal",
    "headmaster.designation": "Headmaster",
    "headmaster.experience": "25+ Years Experience",
    "headmaster.speechTitle": "A Message from Our Headmaster",
    "headmaster.speech":
      "Welcome to Chandkathi Adarsha Girls' Secondary School. For over five decades, we have been committed to providing quality education that nurtures both academic excellence and moral character. Our dedicated faculty and supportive environment ensure every student reaches their full potential.",
    "headmaster.signature": "Sarojini Mondal, Headmaster",

    // Hero section
    "hero.title": "Empowering Young Minds",
    "hero.subtitle": "Building Tomorrow's Leaders Through Quality Education",
    "hero.cta.primary": "Explore Programs",
    "hero.cta.secondary": "Virtual Tour",

    // Statistics
    "stats.students": "Students",
    "stats.teachers": "Teachers",
    "stats.years": "Years of Excellence",

    // About section
    "about.title": "About Our School",
    "about.description":
      "Chandkathi Adarsha Girls' Secondary School has been a beacon of educational excellence since 1970. We are committed to providing quality education that empowers young women to become confident, capable leaders of tomorrow.",
    "about.cta": "Learn More",

    // Features section
    "features.title": "Why Choose Our School",
    "features.subtitle": "Discover what makes our educational approach unique and effective",
    "features.education.title": "Quality Education",
    "features.education.description": "Comprehensive curriculum designed to foster critical thinking and creativity",
    "features.community.title": "Strong Community",
    "features.community.description": "Supportive environment that encourages collaboration and personal growth",
    "features.excellence.title": "Academic Excellence",
    "features.excellence.description": "Proven track record of outstanding academic achievements and results",
    "features.future.title": "Future Ready",
    "features.future.description": "Preparing students for success in higher education and professional careers",

    // Contact section
    "contact.title": "Get in Touch",
    "contact.subtitle": "We're here to help and answer any questions you might have",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.followUs": "Follow Us",

    // CTA section
    "cta.title": "Ready to Join Our Community?",
    "cta.description": "Take the first step towards an exceptional educational journey",
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

    // Headmaster section
    "headmaster.name": "সরোজিনী মন্ডল",
    "headmaster.designation": "প্রধান শিক্ষক",
    "headmaster.experience": "২৫+ বছরের অভিজ্ঞতা",
    "headmaster.speechTitle": "আমাদের প্রধান শিক্ষকের বার্তা",
    "headmaster.speech":
      "চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয়ে আপনাদের স্বাগতম। পাঁচ দশকেরও বেশি সময় ধরে আমরা মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ যা একাডেমিক উৎকর্ষতা এবং নৈতিক চরিত্র উভয়কেই লালন করে। আমাদের নিবেদিতপ্রাণ শিক্ষকমণ্ডলী এবং সহায়ক পরিবেশ নিশ্চিত করে যে প্রতিটি শিক্ষার্থী তাদের পূর্ণ সম্ভাবনায় পৌঁছায়।",
    "headmaster.signature": "সরোজিনী মন্ডল, প্রধান শিক্ষক",

    // Hero section
    "hero.title": "মানসম্পন্ন শিক্ষার মাধ্যমে তরুণীদের ক্ষমতায়ন",
    "hero.subtitle": "মানসম্পন্ন শিক্ষার মাধ্যমে আগামীর নেতা গড়ে তোলা",
    "hero.cta.primary": "কোর্স দেখুন",
    "hero.cta.secondary": "ভার্চুয়াল ট্যুর",

    // Statistics
    "stats.students": "শিক্ষার্থী",
    "stats.teachers": "শিক্ষক",
    "stats.years": "বছরের উৎকর্ষতা",

    // About section
    "about.title": "আমাদের স্কুল সম্পর্কে",
    "about.description":
      "চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয় ১৯৭০ সাল থেকে শিক্ষার উৎকর্ষতার একটি আলোকবর্তিকা। আমরা মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ যা তরুণীদের আগামীর আত্মবিশ্বাসী, দক্ষ নেতা হতে ক্ষমতায়ন করে।",
    "about.cta": "আরও জানুন",

    // Features section
    "features.title": "কেন আমাদের স্কুল বেছে নিবেন",
    "features.subtitle": "আমাদের শিক্ষাগত পদ্ধতি কী অনন্য এবং কার্যকর তা আবিষ্কার করুন",
    "features.education.title": "মানসম্পন্ন শিক্ষা",
    "features.education.description": "সমালোচনামূলক চিন্তাভাবনা এবং সৃজনশীলতা বৃদ্ধির জন্য ডিজাইন করা ব্যাপক পাঠ্যক্রম",
    "features.community.title": "শক্তিশালী সম্প্রদায়",
    "features.community.description": "সহায়ক পরিবেশ যা সহযোগিতা এবং ব্যক্তিগত বৃদ্ধিকে উৎসাহিত করে",
    "features.excellence.title": "একাডেমিক উৎকর্ষতা",
    "features.excellence.description": "অসাধারণ একাডেমিক অর্জন এবং ফলাফলের প্রমাণিত ট্র্যাক রেকর্ড",
    "features.future.title": "ভবিষ্যতের জন্য প্রস্তুত",
    "features.future.description": "উচ্চশিক্ষা এবং পেশাগত ক্যারিয়ারে সাফল্যের জন্য শিক্ষার্থীদের প্রস্তুত করা",

    // Contact section
    "contact.title": "যোগাযোগ করুন",
    "contact.subtitle": "আমরা সাহায্য করতে এবং আপনার যেকোনো প্রশ্নের উত্তর দিতে এখানে আছি",
    "contact.phone": "ফোন",
    "contact.email": "ইমেইল",
    "contact.address": "ঠিকানা",
    "contact.followUs": "আমাদের ফলো করুন",

    // CTA section
    "cta.title": "আমাদের সম্প্রদায়ে যোগ দিতে প্রস্তুত?",
    "cta.description": "একটি ব্যতিক্রমী শিক্ষামূলক যাত্রার দিকে প্রথম পদক্ষেপ নিন",
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

"use client"

import { useState } from "react"
import { NewsCard } from "./news-card"
import { Button } from "@/components/ui/button"
import { Newspaper, TrendingUp } from "lucide-react"

const newsData = [
  {
    id: 1,
    title: {
      en: "Annual Sports Day Celebration 2024",
      bn: "বার্ষিক ক্রীড়া দিবস উদযাপন ২০২৪",
    },
    excerpt: {
      en: "Our school celebrated the annual sports day with great enthusiasm. Students participated in various competitions and showcased their athletic talents.",
      bn: "আমাদের স্কুল অত্যন্ত উৎসাহের সাথে বার্ষিক ক্রীড়া দিবস উদযাপন করেছে। শিক্ষার্থীরা বিভিন্ন প্রতিযোগিতায় অংশগ্রহণ করে তাদের ক্রীড়া প্রতিভা প্রদর্শন করেছে।",
    },
    date: "2024-12-15",
    category: {
      en: "Sports",
      bn: "ক্রীড়া",
    },
    image: "/images/school-ceremony.jpeg",
    priority: "high" as const,
  },
  {
    id: 2,
    title: {
      en: "Science Fair Winners Announced",
      bn: "বিজ্ঞান মেলার বিজয়ীদের ঘোষণা",
    },
    excerpt: {
      en: "Congratulations to all students who participated in the science fair. The innovative projects demonstrated exceptional creativity and scientific thinking.",
      bn: "বিজ্ঞান মেলায় অংশগ্রহণকারী সকল শিক্ষার্থীদের অভিনন্দন। উদ্ভাবনী প্রকল্পগুলি ব্যতিক্রমী সৃজনশীলতা এবং বৈজ্ঞানিক চিন্তাভাবনা প্রদর্শন করেছে।",
    },
    date: "2024-12-10",
    category: {
      en: "Academic",
      bn: "শিক্ষাবিষয়ক",
    },
    image: "/images/classroom-students.jpeg",
    priority: "medium" as const,
  },
  {
    id: 3,
    title: {
      en: "New Library Books Collection",
      bn: "নতুন লাইব্রেরি বই সংগ্রহ",
    },
    excerpt: {
      en: "Our school library has been enriched with new collection of books covering various subjects including literature, science, and technology.",
      bn: "আমাদের স্কুল লাইব্রেরি সাহিত্য, বিজ্ঞান এবং প্রযুক্তি সহ বিভিন্ন বিষয়ের নতুন বই সংগ্রহে সমৃদ্ধ হয়েছে।",
    },
    date: "2024-12-05",
    category: {
      en: "Library",
      bn: "গ্রন্থাগার",
    },
    image: "/images/school-signboard.jpeg",
    priority: "low" as const,
  },
]

export function LatestNews() {
  const [visibleNews, setVisibleNews] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [language] = useState<"en" | "bn">("bn")

  const loadMoreNews = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setVisibleNews((prev) => Math.min(prev + 3, newsData.length))
    setIsLoading(false)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-full animate-bounce">
              <Newspaper className="w-6 h-6 text-primary" />
            </div>
            <TrendingUp className="w-5 h-5 text-primary animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "bn" ? "সাম্প্রতিক সংবাদ" : "Latest News"}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-scale-in" />

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {language === "bn"
              ? "আমাদের স্কুলের সাম্প্রতিক কার্যক্রম এবং অর্জনের খবর জানুন"
              : "Stay updated with the latest activities and achievements of our school"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.slice(0, visibleNews).map((news, index) => (
            <NewsCard
              key={news.id}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              category={news.category}
              image={news.image}
              priority={news.priority}
              delay={index * 200}
            />
          ))}
        </div>

        {visibleNews < newsData.length && (
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Button
              onClick={loadMoreNews}
              disabled={isLoading}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {language === "bn" ? "লোড হচ্ছে..." : "Loading..."}
                </div>
              ) : language === "bn" ? (
                "আরও সংবাদ দেখুন"
              ) : (
                "Load More News"
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

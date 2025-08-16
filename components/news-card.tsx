"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  title: {
    en: string
    bn: string
  }
  excerpt: {
    en: string
    bn: string
  }
  date: string
  category: {
    en: string
    bn: string
  }
  image?: string
  priority?: "high" | "medium" | "low"
  delay?: number
}

export function NewsCard({ title, excerpt, date, category, image, priority = "medium", delay = 0 }: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [language] = useState<"en" | "bn">("bn") // This would come from context in real app

  const priorityColors = {
    high: "bg-red-100 text-red-800 border-red-200",
    medium: "bg-blue-100 text-blue-800 border-blue-200",
    low: "bg-green-100 text-green-800 border-green-200",
  }

  return (
    <Card
      className={`group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative overflow-hidden rounded-t-lg h-48">
          <img
            src={image || "/placeholder.svg"}
            alt={title[language]}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge
            className={`absolute top-3 right-3 ${priorityColors[priority]} transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
          >
            {category[language]}
          </Badge>
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span>{new Date(date).toLocaleDateString(language === "bn" ? "bn-BD" : "en-US")}</span>
          <Clock className="w-4 h-4 ml-2" />
          <span>{language === "bn" ? "সাম্প্রতিক" : "Recent"}</span>
        </div>

        <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title[language]}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed">{excerpt[language]}</p>

        <Button
          variant="ghost"
          size="sm"
          className={`group/btn transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}
        >
          {language === "bn" ? "বিস্তারিত পড়ুন" : "Read More"}
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  )
}

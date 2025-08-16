"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, BookOpen } from "lucide-react"
import { BannerCarousel } from "./banner-carousel"

export function HeroSection() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: t("stats.students"),
    },
    {
      icon: BookOpen,
      value: "25+",
      label: t("stats.teachers"),
    },
    {
      icon: Award,
      value: "50+",
      label: t("stats.years"),
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center">
      <BannerCarousel />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">{t("hero.subtitle")}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                  {t("hero.cta.primary")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  {t("hero.cta.secondary")}
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

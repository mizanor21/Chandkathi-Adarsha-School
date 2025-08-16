"use client"

import { useLanguage } from "@/contexts/language-context"
import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "@/components/hero-section"
import { ContactInfo } from "@/components/contact-info"
import { LatestNews } from "@/components/latest-news"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Target } from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: BookOpen,
      title: t("features.education.title"),
      description: t("features.education.description"),
    },
    {
      icon: Users,
      title: t("features.community.title"),
      description: t("features.community.description"),
    },
    {
      icon: Award,
      title: t("features.excellence.title"),
      description: t("features.excellence.description"),
    },
    {
      icon: Target,
      title: t("features.future.title"),
      description: t("features.future.description"),
    },
  ]

  return (
    <MainLayout>
      <HeroSection />

      {/* About Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t("about.title")}</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t("about.description")}</p>
              <Button className="bg-accent hover:bg-accent/90">{t("about.cta")}</Button>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="/images/classroom-students.jpeg"
                alt="Students in classroom"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("features.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("features.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="modern-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Latest News */}
      <LatestNews />

      {/* Contact Info */}
      <ContactInfo />

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{t("cta.description")}</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {t("cta.button")}
          </Button>
        </div>
      </AnimatedSection>
    </MainLayout>
  )
}

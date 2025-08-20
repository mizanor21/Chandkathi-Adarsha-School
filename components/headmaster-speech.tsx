"use client"

import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import speach from "@/public/images/sorojimondol.jpg"

export function HeadmasterSpeech() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Photo Section */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 headmaster-photo-hover">
                      <Image
                        src={speach}
                        alt={t("headmaster.name")}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-primary mb-2">{t("headmaster.name")}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{t("headmaster.designation")}</p>
                    <div className="mt-4 flex items-center justify-center md:justify-start space-x-2">
                      <div className="w-12 h-0.5 bg-secondary"></div>
                      <span className="text-sm text-muted-foreground">{t("headmaster.experience")}</span>
                    </div>
                  </div>
                </div>

                {/* Speech Section */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">{t("headmaster.speechTitle")}</h2>
                    <div className="w-16 h-1 bg-secondary rounded-full mb-6"></div>
                  </div>

                  <blockquote className="relative">
                    <div className="absolute -top-4 -left-2 text-6xl text-secondary/20 font-serif">"</div>
                    <p className="text-lg leading-relaxed text-card-foreground relative z-10 pl-6">
                      {t("headmaster.speech")}
                    </p>
                    <div className="absolute -bottom-4 -right-2 text-6xl text-secondary/20 font-serif rotate-180">
                      "
                    </div>
                  </blockquote>

                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-12 h-0.5 bg-border"></div>
                    <span className="text-sm text-muted-foreground italic">{t("headmaster.signature")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

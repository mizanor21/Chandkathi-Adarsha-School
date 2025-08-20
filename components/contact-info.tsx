"use client"

import { useLanguage } from "@/contexts/language-context"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function ContactInfo() {
  const { language, t } = useLanguage()

  const contactItems = [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "০১৭৪০১৯৮৫৩৪",
      href: "tel:+8801711288308",
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "chandkathiadarshasecondarygirl@gmail.com",
      href: "mailto:chandkathiadarshasecondarygirl@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: language === "bn" ? "চাঁদকাঠী, নাজিরপুর, পিরোজপুর" : "Chandkathi, Nazirpur, Pirojpur",
      href: "https://maps.google.com/?q=Chandkathi,Nazirpur,Pirojpur",
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <AnimatedSection className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="contact-item group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              <div>
                <p className="font-medium text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                  {item.label}
                </p>
                <p className="font-semibold group-hover:text-accent-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-primary">{t("contact.followUs")}</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Bengali } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ContentProvider } from "@/contexts/content-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-bengali",
})

export const metadata: Metadata = {
  title: "Chandkathi Adarsha Girls' Secondary School",
  description:
    "Welcome to Chandkathi Adarsha Girls' Secondary School - Empowering young minds through quality education",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansBengali.variable} antialiased`} suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <ContentProvider>{children}</ContentProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

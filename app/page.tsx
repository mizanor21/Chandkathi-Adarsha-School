"use client"

import { MainLayout } from "@/components/main-layout"
import { useLanguage } from "@/contexts/language-context"
import { useContent } from "@/contexts/content-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Users, BookOpen, Award, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function HomePage() {
  const { language } = useLanguage()
  const { content } = useContent()

  const stats = [
    {
      icon: Users,
      number: "850+",
      label: language === "bn" ? "শিক্ষার্থী" : "Students",
    },
    {
      icon: GraduationCap,
      number: "45+",
      label: language === "bn" ? "শিক্ষক" : "Teachers",
    },
    {
      icon: BookOpen,
      number: "15+",
      label: language === "bn" ? "বিষয়" : "Subjects",
    },
    {
      icon: Award,
      number: "25+",
      label: language === "bn" ? "বছরের অভিজ্ঞতা" : "Years of Excellence",
    },
  ]

  const quickLinks = [
    {
      title: language === "bn" ? "অনলাইন ভর্তি" : "Online Admission",
      description: language === "bn" ? "নতুন শিক্ষাবর্ষের জন্য আবেদন করুন" : "Apply for the new academic year",
      href: "/admission",
      color: "bg-blue-500",
    },
    {
      title: language === "bn" ? "পরীক্ষার ফলাফল" : "Exam Results",
      description: language === "bn" ? "সর্বশেষ পরীক্ষার ফলাফল দেখুন" : "View latest exam results",
      href: "/results",
      color: "bg-green-500",
    },
    {
      title: language === "bn" ? "একাডেমিক ক্যালেন্ডার" : "Academic Calendar",
      description: language === "bn" ? "গুরুত্বপূর্ণ তারিখ ও অনুষ্ঠান" : "Important dates and events",
      href: "/academic",
      color: "bg-purple-500",
    },
    {
      title: language === "bn" ? "ডাউনলোড" : "Downloads",
      description: language === "bn" ? "ফর্ম ও সিলেবাস ডাউনলোড করুন" : "Download forms and syllabus",
      href: "/downloads",
      color: "bg-orange-500",
    },
  ]

  const latestNews = [
    {
      title: language === "bn" ? "২০২৫ শিক্ষাবর্ষের ভর্তি শুরু" : "Admission Open for 2025 Academic Year",
      date: "২০২৫-০১-১৫",
      category: language === "bn" ? "ভর্তি" : "Admission",
    },
    {
      title: language === "bn" ? "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫" : "Annual Sports Competition 2025",
      date: "২০২৫-০২-১০",
      category: language === "bn" ? "অনুষ্ঠান" : "Event",
    },
    {
      title: language === "bn" ? "এসএসসি পরীক্ষার রুটিন প্রকাশ" : "SSC Exam Routine Published",
      date: "২০২৫-০১-২০",
      category: language === "bn" ? "পরীক্ষা" : "Exam",
    },
  ]

  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {language === "bn" ? "চাঁদকাঠী আদর্শ বালিকা মাধ্যমিক বিদ্যালয়" : "Chandkathi Adarsha Girls' Secondary School"}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {language === "bn"
                    ? "শিক্ষার আলোয় আলোকিত হোন, জ্ঞানের পথে এগিয়ে চলুন"
                    : "Illuminated by the light of education, moving forward on the path of knowledge"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    {language === "bn" ? "ভর্তি তথ্য" : "Admission Info"}
                  </Button>
                  <Button size="lg" variant="outline">
                    {language === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/school-signboard.jpeg"
                  alt={language === "bn" ? "স্কুলের সাইনবোর্ড" : "School Signboard"}
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">1970</div>
                <div className="text-gray-600 dark:text-gray-400">{language === "bn" ? "প্রতিষ্ঠিত" : "Established"}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">{language === "bn" ? "শিক্ষার্থী" : "Students"}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-400">{language === "bn" ? "শিক্ষক" : "Teachers"}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">
                  {language === "bn" ? "বছরের অভিজ্ঞতা" : "Years Experience"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Life Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {language === "bn" ? "আমাদের স্কুল জীবন" : "Our School Life"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === "bn"
                  ? "আমাদের শিক্ষার্থীরা একটি উৎসাহব্যঞ্জক ও শিক্ষামূলক পরিবেশে শিক্ষা গ্রহণ করে"
                  : "Our students learn in an inspiring and educational environment"}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/classroom-students.jpeg"
                  alt={language === "bn" ? "শ্রেণীকক্ষে শিক্ষার্থীরা" : "Students in Classroom"}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language === "bn" ? "মানসম্পন্ন শিক্ষা" : "Quality Education"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "bn"
                    ? "আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী প্রতিটি শিক্ষার্থীর ব্যক্তিগত বিকাশে মনোযোগ দেন এবং তাদের সর্বোচ্চ সম্ভাবনা অর্জনে সহায়তা করেন।"
                    : "Our experienced faculty focuses on the personal development of each student and helps them achieve their maximum potential."}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {language === "bn" ? "আধুনিক শিক্ষা পদ্ধতি" : "Modern Teaching Methods"}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {language === "bn" ? "ব্যক্তিগত মনোযোগ" : "Individual Attention"}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {language === "bn" ? "সহপাঠক্রমিক কার্যক্রম" : "Extracurricular Activities"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Events & Activities Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {language === "bn" ? "কার্যক্রম ও অনুষ্ঠান" : "Events & Activities"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === "bn"
                  ? "আমাদের স্কুলে নিয়মিত বিভিন্ন শিক্ষামূলক ও সাংস্কৃতিক অনুষ্ঠান আয়োজন করা হয়"
                  : "Our school regularly organizes various educational and cultural events"}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language === "bn" ? "বিশেষ অনুষ্ঠান" : "Special Events"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "bn"
                    ? "আমাদের স্কুলে বিভিন্ন জাতীয় দিবস, পুরস্কার বিতরণী, সাংস্কৃতিক অনুষ্ঠান এবং শিক্ষামূলক কর্মসূচি নিয়মিত আয়োজন করা হয়।"
                    : "Our school regularly organizes various national days, prize distributions, cultural programs and educational activities."}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      {language === "bn" ? "পুরস্কার বিতরণী" : "Prize Distribution"}
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      {language === "bn" ? "মেধাবী শিক্ষার্থীদের সম্মাননা" : "Honoring meritorious students"}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      {language === "bn" ? "সাংস্কৃতিক অনুষ্ঠান" : "Cultural Programs"}
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {language === "bn" ? "শিল্প ও সংস্কৃতি চর্চা" : "Arts and cultural practice"}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/school-ceremony.jpeg"
                  alt={language === "bn" ? "স্কুলের অনুষ্ঠান" : "School Ceremony"}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Headmaster Sarojini Mondal"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {language === "bn" ? "প্রধান শিক্ষকের বাণী" : "Headmaster's Message"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === "bn"
                    ? "প্রিয় শিক্ষার্থী ও অভিভাবকগণ, চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয়ে আপনাদের স্বাগতম। আমাদের বিদ্যালয় শুধু একাডেমিক শিক্ষায় নয়, বরং নৈতিক মূল্যবোধ ও চরিত্র গঠনে প্রতিশ্রুতিবদ্ধ। আমরা প্রতিটি ছাত্রীর সুপ্ত প্রতিভা বিকাশে এবং তাদের ভবিষ্যৎ গড়তে নিরলসভাবে কাজ করে যাচ্ছি।"
                    : "Dear students and parents, welcome to Chandkathi Adarsha Girls' Secondary School. Our institution is committed not only to academic excellence but also to moral values and character development. We work tirelessly to nurture the hidden talents of every student and shape their bright future."}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {language === "bn" ? "সরোজিনী মন্ডল" : "Sarojini Mondal"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{language === "bn" ? "প্রধান শিক্ষক" : "Headmaster"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {content.quick_links_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="card-hover cursor-pointer group overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="animate-shimmer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    >
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 relative z-10`}>
                      {link.title}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-300 text-sm mb-4 relative z-10`}>{link.description}</p>
                    <Link
                      href={link.href}
                      className="text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 relative z-10 transition-colors duration-200"
                    >
                      {language === "bn" ? "বিস্তারিত" : "Learn More"} →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News & Events */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Latest News */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{content.latest_news_title}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {latestNews.map((news, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{news.category}</Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{news.date}</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors duration-200">
                          {news.title}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Link
                  href="/notice"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200"
                >
                  {content.view_all} →
                </Link>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{content.contact_info_title}</h2>
                <Card className="card-hover">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start gap-4 group">
                      <MapPin className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{content.address_title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{content.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{content.phone_title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{content.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <Mail className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{content.email_title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{content.email}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">{content.contact_us}</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

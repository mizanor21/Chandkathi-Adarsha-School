"use client"

import { MainLayout } from "@/components/main-layout"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Calendar, MapPin, Users, Target } from "lucide-react"
import SchoolBanner from "@/public/images/school-banner.jpeg"
import { useState } from "react"

export default function HistoryPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("history")

  const milestones = [
    {
      year: "1970",
      title: language === "bn" ? "প্রতিষ্ঠান স্থাপনা" : "School Establishment",
      description:
        language === "bn"
          ? "চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয় প্রতিষ্ঠিত হয়।"
          : "Chandkathi Adarsha Girls' Secondary School was established.",
      details: language === "bn" 
        ? "স্থানীয় শিক্ষানুরাগী ব্যক্তিবর্গের অক্লান্ত পরিশ্রমে তালতলা নদীর পূর্বতীরে মনোরম পরিবেশে বিদ্যালয়টি স্থাপন করা হয়।"
        : "Established through the tireless efforts of local education enthusiasts on the eastern bank of the Taltole River in a serene environment."
    },
    {
      year: "1972",
      title: language === "bn" ? "নিম্নমাধ্যমিক স্বীকৃতি" : "Junior Secondary Recognition",
      description: language === "bn" ? "বিদ্যালয়টি নিম্নমাধ্যমিক বিদ্যালয় হিসাবে স্বীকৃতিপ্রাপ্ত হয়।" : "The school was recognized as a junior secondary school.",
      details: language === "bn" 
        ? "০১/০১/১৯৭২ সালে বিদ্যালয়টি নিম্নমাধ্যমিক বিদ্যালয় হিসাবে স্বীকৃতি লাভ করে।"
        : "The school received recognition as a junior secondary school on 01/01/1972."
    },
    {
      year: "1975",
      title: language === "bn" ? "মাধ্যমিক স্বীকৃতি" : "Secondary Recognition",
      description: language === "bn" ? "বিদ্যালয়টি মাধ্যমিক বিদ্যালয় হিসাবে স্বীকৃতিপ্রাপ্ত হয়।" : "The school was recognized as a secondary school.",
      details: language === "bn" 
        ? "০১/০১/১৯৭৫ সালে বিদ্যালয়টি মাধ্যমিক বিদ্যালয় হিসাবে স্বীকৃতি লাভ করে।"
        : "The school received recognition as a secondary school on 01/01/1975."
    },
    {
      year: "2005",
      title: language === "bn" ? "এমপিও ভুক্তি" : "MPO Inclusion",
      description: language === "bn" ? "বিদ্যালয়টি সরকারি এমপিও ভুক্ত হয়।" : "The school received government MPO status.",
      details: language === "bn" 
        ? "সরকারি অর্থায়ন সুবিধা প্রাপ্তির মাধ্যমে বিদ্যালয়ের আর্থিক অবস্থার উন্নতি ঘটে।"
        : "The school's financial situation improved with access to government funding."
    },
    {
      year: "2007",
      title: language === "bn" ? "জমি ক্রয়" : "Land Acquisition",
      description: language === "bn" ? "প্রতিষ্ঠানের কল্যাণের জন্য অতিরিক্ত জমি ক্রয় করা হয়।" : "Additional land was acquired for the institution's welfare.",
      details: language === "bn" 
        ? "০৯/০৭/২০০৭ সালে বিদ্যালয় কর্তৃপক্ষ ১৭ শতক জমি ক্রয় করেন।"
        : "The school authority purchased 17 decimals of land on 09/07/2007."
    },
    {
      year: "2010",
      title: language === "bn" ? "নতুন ভবন নির্মাণ" : "New Building Construction",
      description:
        language === "bn"
          ? "আধুনিক সুবিধা সহ নতুন ভবন নির্মাণ সম্পন্ন।"
          : "Construction of new building with modern facilities completed.",
      details: language === "bn" 
        ? "আধুনিক সুযোগ-সুবিধা সম্পন্ন নতুন ভবন নির্মাণের মাধ্যমে শিক্ষার পরিবেশ উন্নত করা হয়।"
        : "The learning environment was enhanced with the construction of a new building with modern facilities."
    },
    {
      year: "2018",
      title: language === "bn" ? "উদার দান" : "Generous Donation",
      description: language === "bn" ? "স্থানীয় দানশীল ব্যক্তির কাছ থেকে বড় অঙ্কের দান প্রাপ্তি।" : "Received a significant donation from a local philanthropist.",
      details: language === "bn" 
        ? "জনাব সুজন কুমার মন্ডল ২,৬৮,১৮২ টাকা দান করে বিদ্যালয়ের আজীবন দাতা হন।"
        : "Mr. Sujon Kumar Mondal donated 268,182 Taka, becoming a lifelong donor of the institution."
    },
    {
      year: "2020",
      title: language === "bn" ? "ডিজিটাল ক্লাসরুম" : "Digital Classroom",
      description:
        language === "bn"
          ? "সকল শ্রেণিকক্ষে ডিজিটাল শিক্ষা ব্যবস্থা চালু।"
          : "Digital education system introduced in all classrooms.",
      details: language === "bn" 
        ? "ডিজিটাল শিক্ষা পদ্ধতি চালুর মাধ্যমে শিক্ষার গুণগত মান বৃদ্ধি করা হয়।"
        : "The quality of education was improved by introducing digital teaching methods."
    },
  ]

  const founders = [
    { name: "Late Satyendranath Gain", contribution: language === "bn" ? "প্রতিষ্ঠাতা" : "Founder" },
    { name: "Dasharath Halder", contribution: language === "bn" ? "প্রতিষ্ঠাতা" : "Founder" },
    { name: "Manoranjan Biswas", contribution: language === "bn" ? "প্রতিষ্ঠাতা" : "Founder" },
    { name: "Ramkrishna Bepari", contribution: language === "bn" ? "প্রতিষ্ঠাতা" : "Founder" },
    { name: "Nidhu Bhushan Halder", contribution: language === "bn" ? "প্রতিষ্ঠাতা" : "Founder" },
    { name: "Shishu Kumar Majumdar", contribution: language === "bn" ? "প্রতিষ্ঠাতা ও জমিদাতা" : "Founder & Land Donor" },
    { name: "Late Md. Rahman Miah", contribution: language === "bn" ? "প্রতিষ্ঠাতা" : "Founder" },
    { name: "Babu Chitta Ranjan Mondal", contribution: language === "bn" ? "প্রতিষ্ঠাতা" : "Founder" },
    { name: "Shantisudha Bepari", contribution: language === "bn" ? "জমিদাতা (৩৮ শতক)" : "Land Donor (38 decimals)" },
    { name: "Amrit Mali", contribution: language === "bn" ? "জমিদাতা (১৯ শতক)" : "Land Donor (19 decimals)" },
    { name: "Sujon Kumar Mondal", contribution: language === "bn" ? "আজীবন দাতা" : "Lifetime Donor" },
  ]

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold text-gray-800 mb-4 ${language === "bn" ? "font-bengali" : ""}`}>
            {language === "bn" ? "প্রতিষ্ঠানের ইতিহাস" : "School History"}
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === "bn" ? "font-bengali" : ""}`}>
            {language === "bn"
              ? "১৯৭০ সাল থেকে নারী শিক্ষার ক্ষেত্রে অগ্রগামী ভূমিকা পালন করে আসছে চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয়।"
              : "Since 1970, Chandkathi Adarsha Girls' Secondary School has been playing a pioneering role in women's education."}
          </p>
        </div>

        {/* School Image */}
        <div className="mb-12 relative">
          <img
            src={SchoolBanner.src}
            alt="School Building"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-100 p-4">
              <h2 className={`text-3xl font-bold mb-2 ${language === "bn" ? "font-bengali" : ""}`}>
          {language === "bn" ? "চাঁদকাঠি আদর্শ বালিকা মাধ্যমিক বিদ্যালয়" : "Chandkathi Adarsha Girls' Secondary School"}
              </h2>
              <p className={`text-xl flex items-center justify-center ${language === "bn" ? "font-bengali" : ""}`}>
          <MapPin className="mr-2 h-5 w-5" />
          {language === "bn" 
            ? "দীঘা ইউনিয়ন, নাজিরপুর, পিরোজপুর"  
            : "Digha Union, Nazirpur, Pirojpur"}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-3 px-6 font-medium text-lg ${activeTab === "history" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("history")}
          >
            {language === "bn" ? "ইতিহাস" : "History"}
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg ${activeTab === "milestones" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("milestones")}
          >
            {language === "bn" ? "মাইলফলক" : "Milestones"}
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg ${activeTab === "founders" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("founders")}
          >
            {language === "bn" ? "প্রতিষ্ঠাতাগণ" : "Founders"}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "history" && (
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className={`text-2xl font-bold text-gray-800 mb-4 flex items-center ${language === "bn" ? "font-bengali" : ""}`}>
                <Calendar className="mr-3 h-6 w-6 text-green-600" />
                {language === "bn" ? "প্রতিষ্ঠানের পটভূমি" : "School Background"}
              </h2>
              <div className={`text-gray-700 leading-relaxed space-y-4 ${language === "bn" ? "font-bengali text-lg" : ""}`}>
                <p>
                  {language === "bn" 
                    ? "চাঁদকাঠী আদর্শ বালিকা মাধ্যমিক বিদ্যালয়টি বরিশাল বিভাগের পিরোজপুর জেলার নাজিরপুর উপজেলার ৪ নং দীঘা ইউনিয়নের অন্তর্গত চাঁদকাঠী গ্রামে অবস্থিত। স্থানীয় শিক্ষানুরাগী ব্যক্তিবর্গের অক্লান্ত পরিশ্রমে নারীশিক্ষা বিস্তারের জন্য তালতলা নদীর পূর্বতীরে মনোরম পরিবেশে ১৯৭০ সালে বিদ্যালয়টি স্থাপন করা হয়।"
                    : "Chandkathi Adarsha Girls' Secondary School is located in Chandkathi village under Ward No. 4 of Digha Union, Nazirpur Upazila, Pirojpur District, in the Barishal Division. The school was established in 1970 on the eastern bank of the Taltole River in a serene environment through the tireless efforts of local education enthusiasts to spread women's education."}
                </p>
                <p>
                  {language === "bn" 
                    ? "এলাকার নারী শিক্ষা উন্নয়নের জন্য শান্তিসুধা বেপারী ৩৮ শতক এবং শিশু কুমার মজুমদার ৭ শতক জমি প্রতিষ্ঠান স্থাপনের জন্য দান করেন। বিদ্যালয়টি ০১/০১/১৯৭২ সালে নিম্নমাধ্যমিক এবং ০১/০১/১৯৭৫ সালে মাধ্যমিক বিদ্যালয় হিসাবে স্বীকৃতিপ্রাপ্ত হয়।"
                    : "For the development of women's education in the area, Shantisudha Bepari donated 38 decimals of land and Shishu Kumar Majumdar donated 7 decimals of land for the establishment of the institution. The school was recognized as a junior secondary school on 01/01/1972 and as a secondary school on 01/01/1975."}
                </p>
                <p>
                  {language === "bn" 
                    ? "প্রতিষ্ঠানের কল্যাণের জন্য বিদ্যালয় কর্তৃপক্ষ ০৯/০৭/২০০৭ সালে ১৭ শতক জমি ক্রয় করেন। স্থানীয় দানশীল ও শিক্ষানুরাগী ব্যক্তি জনাব সুজন কুমার মন্ডল মহোদয় গত ০৭/০৬/২০১৮ সালে বিদ্যালয়ের অবকাঠামো নির্মানের কাজে ২,৬৮,১৮২ টাকা দান করে বিদ্যালয়ের আজীবন দাতা হন। বিদ্যালয়ের খেলার মাঠ বিস্তারের জন্য অমৃত মালী বিদ্যালয় সংলগ্ন ১৯ শতক জমি দান করেন।"
                    : "For the welfare of the institution, the school authority purchased 17 decimals of land on 09/07/2007. A local generous and education-minded person, Mr. Sujon Kumar Mondal, donated 268,182 Taka for the construction of the school's infrastructure on 07/06/2018 and became a lifelong donor of the institution. Amrit Mali donated 19 decimals of land adjacent to the school for the expansion of the playground."}
                </p>
                <p>
                  {language === "bn" 
                    ? "নারী শিক্ষার বাহক হিসাবে প্রতিষ্ঠানটি ১৯৭০ সাল হতে অদ্যাবধি সুনামের সাথে পরিচালিত হচ্ছে। নারী প্রজন্মের ধারক ও বাহক। নারী শিক্ষা, নারী উন্নয়নকে পিছিয়ে রেখে দেশ ও জাতির উন্নয়ন সম্ভব নয়। দেশকে উন্নতির স্বর্ণশিখরে উন্নীত করতে নারী শিক্ষা, নারী জাগরণ অনস্বীকার্য।"
                    : "As a carrier of women's education, the institution has been running with reputation since 1970. Women are the bearers and carriers of future generations. The development of the country and the nation is not possible without women's education and development. Women's education and awakening are indispensable to take the country to the pinnacle of development."}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "milestones" && (
          <div className="mb-12">
            <h2 className={`text-3xl font-bold text-gray-800 mb-8 text-center ${language === "bn" ? "font-bengali" : ""}`}>
              {language === "bn" ? "গুরুত্বপূর্ণ মাইলফলক" : "Important Milestones"}
            </h2>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-green-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row items-center">
                    <div className={`flex-none mx-4 md:mx-0 w-8 h-8 rounded-full bg-green-600 z-10 ${index % 2 === 0 ? "md:mr-8 md:ml-auto" : "md:ml-8 md:mr-auto"}`}></div>
                    
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8 order-first" : "md:pl-8"} my-4`}>
                      <div className="bg-green-600 text-white px-4 py-1 rounded-lg font-bold text-lg inline-block mb-2">
                        {milestone.year}
                      </div>
                      <h3 className={`text-xl font-semibold text-gray-800 mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
                        {milestone.title}
                      </h3>
                      <p className={`text-gray-600 mb-2 ${language === "bn" ? "font-bengali" : ""}`}>
                        {milestone.description}
                      </p>
                      <p className={`text-gray-700 text-sm ${language === "bn" ? "font-bengali" : ""}`}>
                        {milestone.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "founders" && (
          <div className="mb-12">
            <h2 className={`text-3xl font-bold text-gray-800 mb-8 text-center ${language === "bn" ? "font-bengali" : ""}`}>
              {language === "bn" ? "প্রতিষ্ঠাতা ও অবদানকারীবৃন্দ" : "Founders & Contributors"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {founders.map((person, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Users className="h-5 w-5 text-green-600 mr-2" />
                      <h3 className={`font-semibold text-gray-800 ${language === "bn" ? "font-bengali" : ""}`}>
                        {person.name}
                      </h3>
                    </div>
                    <p className={`text-sm text-gray-600 ${language === "bn" ? "font-bengali" : ""}`}>
                      {person.contribution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-green-600" />
                <h3 className={`text-2xl font-bold text-gray-800 ${language === "bn" ? "font-bengali" : ""}`}>
                  {language === "bn" ? "আমাদের লক্ষ্য" : "Our Vision"}
                </h3>
              </div>
              <p className={`text-gray-600 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                {language === "bn"
                  ? "একটি আদর্শ শিক্ষা প্রতিষ্ঠান হিসেবে প্রতিটি শিক্ষার্থীর সর্বোচ্চ বিকাশ সাধন এবং তাদের চরিত্র গঠনে সহায়তা করা। নারী শিক্ষার মাধ্যমে একটি উন্নত ও আলোকিত সমাজ গঠনে ভূমিকা রাখা।"
                  : "To be an ideal educational institution that helps every student achieve their maximum potential and assists in character building. To contribute to the formation of an advanced and enlightened society through women's education."}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
                <h3 className={`text-2xl font-bold text-gray-800 ${language === "bn" ? "font-bengali" : ""}`}>
                  {language === "bn" ? "আমাদের উদ্দেশ্য" : "Our Mission"}
                </h3>
              </div>
              <p className={`text-gray-600 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                {language === "bn"
                  ? "গুণগত শিক্ষা প্রদান, নৈতিক মূল্যবোধ গঠন এবং শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করা। নারীশিক্ষা প্রসারে অগ্রণী ভূমিকা পালন এবং শিক্ষার্থীদের মধ্যে দেশপ্রেম, সততা ও মানবিক মূল্যবোধের বিকাশ ঘটানো।"
                  : "To provide quality education, build moral values, and prepare students for their future. To play a pioneering role in promoting women's education and developing patriotism, honesty, and human values among students."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
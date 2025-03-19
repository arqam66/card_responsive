"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import { Mail, Phone, Linkedin, Sun, Moon, ChevronLeft, GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BusinessCard() {
  const [flipped, setFlipped] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("about")

  // Initialize theme based on user preference and check device
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check for dark mode preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      }

      // Check if mobile
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 640)
      }

      checkIfMobile()
      window.addEventListener("resize", checkIfMobile)

      return () => {
        window.removeEventListener("resize", checkIfMobile)
      }
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <>
      <Head>
        <title>Osama Siddiqui - Digital Resume</title>
        <meta name="description" content="Digital resume for Osama Siddiqui, External Auditor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-2 sm:p-4 dark:from-gray-900 dark:to-slate-900 transition-colors duration-300">
        <div
          className={`relative w-full max-w-[360px] sm:max-w-md transition-all duration-700 ${flipped ? "rotate-y-180" : ""}`}
          style={{ perspective: "1000px" }}
        >
          <Card
            className={`relative h-full w-full transition-all duration-700 ${
              flipped ? "rotate-y-180 invisible opacity-0" : "rotate-y-0 visible opacity-100"
            } bg-white dark:bg-gray-800 shadow-xl border-0 dark:border dark:border-gray-700 overflow-hidden`}
          >
            <CardContent className="p-2.5 sm:p-6">
              <div className="flex flex-col items-center space-y-2.5 sm:space-y-4">
                <div className="absolute right-1.5 top-1.5 sm:right-4 sm:top-4 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full h-7 w-7 sm:h-8 sm:w-8 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {isDarkMode ? (
                      <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-300" />
                    ) : (
                      <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                  </Button>
                </div>

                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-primary shadow-md mt-2 sm:mt-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/view-3d-businessman.jpg-ELcRrFTFGDUquJ7jRkf3Ju3Blb9FN2.jpeg"
                    alt="Osama Siddiqui"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="text-center">
                  <h1 className="text-lg sm:text-2xl font-bold dark:text-white">Osama Siddiqui</h1>
                  <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-300">External Auditor</p>
                </div>

                <div className="flex w-full justify-center space-x-2 sm:space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 h-8 px-2 sm:px-3 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-slate-100 transition-colors"
                    asChild
                  >
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=osamasiddiqui7809@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500 dark:text-blue-400" />
                      <span className="sr-only sm:not-sr-only sm:text-xs ml-1">Email</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 h-8 px-2 sm:px-3 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-slate-100 transition-colors"
                    asChild
                  >
                    <a href="https://wa.me/03456198029" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 dark:text-green-400" />
                      <span className="sr-only sm:not-sr-only sm:text-xs ml-1">WhatsApp</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 h-8 px-2 sm:px-3 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-slate-100 transition-colors"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/osama-siddiqui-8b552a296/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-blue-500" />
                      <span className="sr-only sm:not-sr-only sm:text-xs ml-1">LinkedIn</span>
                    </a>
                  </Button>
                </div>

                <div className="w-full border-t dark:border-gray-700 pt-2 sm:pt-3">
                  <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3 dark:bg-gray-700 rounded-lg h-8 min-h-8 sm:h-10">
                      <TabsTrigger
                        value="about"
                        className="text-xs dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm transition-all px-1 sm:px-2"
                      >
                        About
                      </TabsTrigger>
                      <TabsTrigger
                        value="experience"
                        className="text-xs dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm transition-all px-1 sm:px-2"
                      >
                        Experience
                      </TabsTrigger>
                      <TabsTrigger
                        value="skills"
                        className="text-xs dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm transition-all px-1 sm:px-2"
                      >
                        Skills
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="about"
                      className="mt-2 sm:mt-3 text-[11px] sm:text-xs dark:text-gray-200 max-h-[150px] overflow-y-auto pr-1"
                    >
                      <p className="leading-relaxed">
                        Detail-oriented and ethical External Auditor with experience in financial statement reviews,
                        risk assessment, and internal control evaluation. Strong analytical and critical-thinking skills
                        with a commitment to ensuring compliance with IFRS, GAAP, and regulatory standards.
                      </p>

                      <div className="flex w-full justify-center pt-2 sm:pt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setFlipped(true)}
                          className="text-[11px] sm:text-xs h-7 sm:h-8 px-3 sm:px-4 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-slate-100 transition-colors"
                        >
                          More Info
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="experience"
                      className="mt-2 sm:mt-3 text-[11px] sm:text-xs max-h-[150px] overflow-y-auto pr-1"
                    >
                      <div>
                        <h3 className="font-semibold dark:text-white">Audit Associate</h3>
                        <p className="text-muted-foreground dark:text-gray-300">Forvis Mazars, Karachi</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground dark:text-gray-400">
                          June 2023 – Present
                        </p>
                        <ul className="mt-1.5 sm:mt-2 list-inside list-disc text-[11px] sm:text-xs dark:text-gray-200 space-y-1">
                          <li>Conduct financial statement audits</li>
                          <li>Assess financial and operational risks</li>
                          <li>Evaluate internal control mechanisms</li>
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="skills" className="mt-2 sm:mt-3 max-h-[150px] overflow-y-auto pr-1">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          IFRS
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          GAAP
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          Risk Assessment
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          Internal Controls
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          Financial Analysis
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          Compliance
                        </Badge>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back of card */}
          <Card
            className={`absolute top-0 h-full w-full transition-all duration-700 ${
              flipped ? "rotate-y-0 visible opacity-100" : "rotate-y-180 invisible opacity-0"
            } bg-white dark:bg-gray-800 shadow-xl border-0 dark:border dark:border-gray-700 overflow-hidden`}
          >
            <CardContent className="p-2.5 sm:p-6 overflow-y-auto max-h-[100vh]">
              <div className="flex flex-col space-y-2.5 sm:space-y-4">
                <div className="absolute right-1.5 top-1.5 sm:right-4 sm:top-4 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full h-7 w-7 sm:h-8 sm:w-8 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {isDarkMode ? (
                      <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-300" />
                    ) : (
                      <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setFlipped(false)}
                    className="p-0 h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-primary shadow-sm">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/view-3d-businessman.jpg-ELcRrFTFGDUquJ7jRkf3Ju3Blb9FN2.jpeg"
                        alt="Osama Siddiqui"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold dark:text-white">Osama Resume</h2>
                  </div>
                </div>

                <h2 className="text-sm sm:text-lg font-bold dark:text-white mt-1">Achievements</h2>
                <ul className="list-inside list-disc space-y-1 text-[10px] sm:text-xs dark:text-gray-200">
                  <li>
                    Successfully led audits for over{" "}
                    <span className="font-semibold text-primary dark:text-blue-400">15 high-profile clients</span> in
                    the financial services sector
                  </li>
                  <li>
                    Identified internal control weaknesses, leading to a{" "}
                    <span className="font-semibold text-primary dark:text-blue-400">20% reduction in errors</span>
                  </li>
                  <li>
                    Recommended supply chain improvements, resulting in a{" "}
                    <span className="font-semibold text-primary dark:text-blue-400">
                      15% reduction in operating costs
                    </span>
                  </li>
                </ul>

                <h2 className="text-sm sm:text-lg font-bold dark:text-white">Industry Expertise</h2>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <Badge className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                    Financial Services
                  </Badge>
                  <Badge className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                    Manufacturing & Retail
                  </Badge>
                  <Badge className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                    Government & Public Sector
                  </Badge>
                  <Badge className="text-[10px] sm:text-xs py-0.5 h-6 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                    Construction & Real Estate
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                  <h2 className="text-sm sm:text-lg font-bold dark:text-white">Education</h2>
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary dark:text-blue-400" />
                </div>

                <div className="bg-slate-50 dark:bg-gray-700/50 rounded-lg p-2.5 sm:p-3 border border-slate-200 dark:border-gray-700 mb-1 sm:mb-2">
                  <div className="flex flex-col text-[10px] sm:text-xs">
                    <h3 className="font-semibold dark:text-white">Intermediate, Pre-Engineering</h3>
                    <p className="text-muted-foreground dark:text-gray-300">Pakistan Shipowners' Government College</p>
                    <div className="flex items-center mt-1 text-black dark:text-white">
                      <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5 text-primary dark:text-blue-400" />
                      <span className="font-medium">January 2019 – August 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}


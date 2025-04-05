"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Mail, MessageSquare } from "lucide-react"
import Image from "next/image"
import Hero from "../../../public/interview.svg"
import Google from "../../../public/Google.svg"
import Girl from "../../../public/girls.svg"

interface Interview {
  id: number
  day: string
  date: number
  time: string
  location: string
  company: string
  round: string
  practiceOption: string
}

interface TestType {
  id: number
  title: string
  description: string
  imageUrl: string
}

export default function InterviewsPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const interviews: Interview[] = [
    {
      id: 1,
      day: "Fri",
      date: 28,
      time: "10:00 AM",
      location: "Chandigarh, Sector 20",
      company: "Google",
      round: "Round 1",
      practiceOption: "Practice With Virtual HR",
    },
    {
      id: 2,
      day: "Fri",
      date: 28,
      time: "12:00 PM",
      location: "Chandigarh, Sector 20",
      company: "Google",
      round: "Round 1",
      practiceOption: "Practice With Virtual HR",
    },
    {
      id: 3,
      day: "Fri",
      date: 28,
      time: "10:00 AM",
      location: "Chandigarh, Sector 20",
      company: "Google",
      round: "Round 1",
      practiceOption: "Practice With Virtual HR",
    },
    {
      id: 4,
      day: "Fri",
      date: 28,
      time: "10:00 AM",
      location: "Chandigarh, Sector 20",
      company: "Google",
      round: "Round 1",
      practiceOption: "Practice With Virtual HR",
    },
  ]

  const testTypes: TestType[] = [
    {
      id: 1,
      title: "Behavioral Test",
      description:
        "Evaluates personality, adaptability, leadership, teamwork, communication, and workplace decision-making skills.",
      imageUrl: Google,
    },
    {
      id: 2,
      title: "General Aptitude Test",
      description:
        "Measures logical reasoning, problem-solving, numerical ability, critical thinking, and data interpretation.",
      imageUrl: Google,
    },
    {
      id: 3,
      title: "Skill-Based Test",
      description: "Assesses technical expertise, industry knowledge, practical skills, and role-specific proficiency.",
      imageUrl: Google,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12 p-4">
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-2xl w-full">
        <Image
          src={Hero}
          alt="Interview with top employers"
          fill
          className="object-cover rounded-2xl "
          priority
        />
        <div className="absolute inset-0 rounded-2xl bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Interview With Top
              <br />
              Employers
            </h1>
          </div>
        </div>
      </div>

      {/* Upcoming Interviews Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
          <div className="text-sm text-gray-600">Today</div>
        </div>

        <div className="space-y-4">
          {interviews.map((interview) => (
            <Card key={interview.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center p-4">
                  <div className="flex flex-col items-center justify-center mr-4 w-16">
                    <span className="text-sm text-gray-600">{interview.day}</span>
                    <span className="text-2xl font-bold">{interview.date}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mr-4">
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                      <span className="text-xs">⏱️</span>
                    </div>
                    {interview.time}
                  </div>

                  <div className="text-sm text-gray-600 mr-6">{interview.location}</div>

                  <div className="flex items-center mr-6">
                    <div className="w-8 h-8 mr-2">
                     <div className="flex relative ">
                     <Image
                        src={Girl}
                        alt="Google logo"
                       
                        className="rounded absolute -left-6"
                      />
                      <Image
                        src={Google}
                        alt="Google logo"
                       
                        className="rounded"
                      />
                     </div>
                    </div>
                    <div>
                      <div className="font-medium">{interview.company}</div>
                      <div className="text-xs text-gray-500">{interview.round}</div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex items-center">
                      <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 mr-2">
                        {interview.practiceOption}
                      </Button>
                      <Badge className="bg-purple-600 text-white">HR</Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="text-green-500">
                        <MessageSquare size={20} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-blue-500">
                        <MessageCircle size={20} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Mail size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      
    </div>
  )
}


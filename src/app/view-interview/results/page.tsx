"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { ArrowRight } from "lucide-react"

interface ScoreCategory {
  name: string
  score: number
  color: string
}

interface IdealAnswer {
  question: string
  answer: string
  elements: string[]
}

export default function InterviewResultsPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scoreCategories: ScoreCategory[] = [
    { name: "Confidence", score: 60, color: "gradient" },
    { name: "Knowledge", score: 54, color: "gradient" },
    { name: "Calmness", score: 79, color: "gradient" },
    { name: "Focus", score: 89, color: "gradient" },
    { name: "Energy", score: 79, color: "gradient" },
  ]

  const idealAnswers: IdealAnswer[] = [
    {
      question: "Which element should have the Highest Priority On A Landing Page Present On User Sign-page?",
      answer: "Image, Brightly Colored Call-to-Action Button",
      elements: ["Image", "Brightly Colored", "Call-to-Action Button"],
    },
    {
      question: "Which element should have the Highest Priority On A Landing Page Present On User Sign-page?",
      answer: "Image, Brightly Colored Call-to-Action Button Saying 'Sign Up Now'",
      elements: ["Image", "Brightly Colored", "Call-to-Action Button", "Saying 'Sign Up Now'"],
    },
  ]

  const CircularProgress = ({ percentage, color, name }: { percentage: number; color: string; name: string }) => {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference
    
    // Define unique gradient ID for each circle
    const gradientId = `gradient-${name.toLowerCase().replace(/\s+/g, '-')}`

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Define gradient */}
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
              </linearGradient>
            </defs>
            
            {/* Background circle */}
            <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#e6e6e6" strokeWidth="10" />
            
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              stroke={color === "gradient" ? `url(#${gradientId})` : (color === "purple" ? "#9333ea" : "#3b82f6")}
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
            
            {/* Percentage text */}
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="20"
              fontWeight="bold"
              fill="#333"
            >
              {percentage}%
            </text>
          </svg>
        </div>
        <span className="mt-1 text-sm font-medium">{name}</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#EBF2FA] pb-12">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
       
        {/* Score Categories */}
        <Card className="mb-8">
        <div className="flex justify-between px-4 items-center mb-4">
          <div>
            <h1 className="text-xl font-bold lg:text-[28px]">AI Video Score</h1>
            <p className="text-sm lg:text-[24px] ">How to Master Networking and Land Your Dream Job</p>
          </div>
          <Button className="bg-[#4E0684] hover:bg-[#4E0684]/50">Download Report</Button>
        </div>
          <CardContent className="p-4">
            <div className="flex flex-wrap justify-between gap-2">
              {scoreCategories.map((category) => (
                <CircularProgress
                  key={category.name}
                  percentage={category.score}
                  color={category.color}
                  name={category.name}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strengths and Weaknesses - Appears on scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 overflow-y-scroll max-h-[350px]">
              <h2 className="text-lg font-semibold mb-4 lg:text-[20px]">Know Your Strengths/ Weaknesses</h2>
              <h2 className="text-lg font-semibold mb-4 text-red-600 underline"> Weaknesses</h2>
              
              <div className="space-y-3">
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
              </div>

              <h2 className="text-lg font-semibold my-4 text-green-600 underline"> Strenghts</h2>
              
              <div className="space-y-3">
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
                <p className=" text-sm  lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 overflow-y-scroll max-h-[350px]">
              <h2 className="text-lg font-semibold mb-4 lg:text-[20px] ">Ideal Answer</h2>

              {idealAnswers.map((item, index) => (
                <div key={index} className="mb-4 text-[20px]">
                  <p className="text-sm text-[20px] font-medium mb-4">Q: {item.question}</p>
                  <p className="text-sm text-[20px]  mb-3">
                    <span className="font-medium">Answer:</span> {item.answer}
                  </p>
                  {/* {index < idealAnswers.length - 1 && <hr className="my-3" />} */}
                </div>
              ))}

              {/* <Button variant="link" className="text-purple-700 p-0 mt-2">
                Watch Again <ArrowRight className="h-4 w-4 ml-1" />
              </Button> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Hero from "../../../public/interview.svg"
import Google from "../../../public/Google.svg"
import Girl from "../../../public/girls.svg"
import Message from "../../../public/Message.svg"
import Gmail from "../../../public/Gmail.png"
import Whatsapp from "../../../public/Whatsapp.svg"
import Slant from "../../../public/SlantArrow.svg"
import { MapPin } from "lucide-react"

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



export default function InterviewsPage() {
  const [, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true)
      }else{
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
      round: "Technical Round - 1",
      practiceOption: "Practice With Virtual HR",
    },
    {
      id: 2,
      day: "Fri",
      date: 28,
      time: "12:00 PM",
      location: "Chandigarh, Sector 20",
      company: "Google",
      round: "Technical Round - 1",
      practiceOption: "Practice With Virtual HR",
    },
    {
      id: 3,
      day: "Fri",
      date: 28,
      time: "10:00 AM",
      location: "Chandigarh, Sector 20",
      company: "Google",
      round: "Technical Round - 1",
      practiceOption: "Practice With Virtual HR",
    },
    {
      id: 4,
      day: "Fri",
      date: 28,
      time: "10:00 AM",
      location: "Chandigarh, Sector 20",
      company: "Google",
      round: "Technical Round - 1",
      practiceOption: "Practice With Virtual HR",
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
          <div className="text-sm text-gray-600">Today</div>
        </div>

        <div className="space-y-6">
          {interviews.map((interview) => (
            <div key={interview.id}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center px-4  relative">
                    {/* Day and Date */}
                    <div className="flex flex-col items-center  justify-center mr-4 w-16">
                      <span className="text-sm text-gray-600">{interview.day}</span>
                      <span className="text-2xl font-bold">{interview.date}</span>
                    </div>
                    
                    {/* Vertical Separator */}
                    <div className="h-10 w-px bg-gray-400 mx-2"></div>
                    
                    {/* Time */}
                    <div className="flex items-center text-sm lg:text-[20px] mr-4">
                      <div className="w-6 h-6 rounded-full border  border-gray-300 flex items-center justify-center mr-2">
                        <span className="text-xs">⏱️</span>
                      </div>
                      {interview.time}
                    </div>
                   
                    
                    {/* Location */}
                    <div className="text-sm lg:text-[20px] mr-4"><MapPin className="inline text-white" fill={"black"}></MapPin> {interview.location}</div>
                    
                    {/* Vertical Separator */}
                    <div className="h-10 w-px bg-gray-400 mx-2"></div>

                    {/* Company */}
                    <div className="flex items-center ml-6 mr-6">
                      <div className="w-8 h-8 mr-2">
                        <div className="flex relative">
                          <Image
                            src={Girl}
                            alt="Profile"
                           
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
                        <div className="text-xs text-gray-500 ">{interview.round}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex items-center">
                        <Button variant="outline" size="sm" className="text-[#571BAD] border-none shadow-none underline mr-2 lg:text-[20px]">
                          {interview.practiceOption}
                        </Button>
                        <div className="w-6 h-6">
                          <Image src={Slant} alt="Arrow" width={24} height={24} />
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button variant="ghost" size="icon" className="text-green-500 p-1">
                          <Image src={Message} alt="Message"  />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-blue-500 p-1">
                          <Image src={Whatsapp} alt="Whatsapp" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 p-1">
                          <Image src={Gmail} alt="Gmail" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Horizontal separators between cards */}
              {/* {index < 3 && (
                <div className="mt-4 mb-4">
                  <div className="h-px bg-gray-200 w-full"></div>
                  <div className="h-px bg-gray-200 w-full mt-2"></div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
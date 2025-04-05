"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Resume1 from "../../../public/Resum1.svg"
import Resume2 from "../../../public/resume2.svg"
import Resume3 from "../../../public/resume3.svg"

interface ChooseTemplateProps {
  onNext: () => void
  onSelectTemplate: (template: string) => void
  selectedTemplate: string | null
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    image: Resume1,
  },
  {
    id: "professional",
    name: "Professional",
    image: Resume2,
  },
  {
    id: "creative",
    name: "Creative",
    image: Resume3,
  },
  {
    id: "minimal",
    name: "Minimal",
    image: Resume2,
  },
]

export default function ChooseTemplate({ onNext, onSelectTemplate, selectedTemplate }: ChooseTemplateProps) {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0])

  // Function to handle next slide
  const nextSlide = () => {
    setActiveIndex((prev) => [(prev[0] + 1) % templates.length, 1])
    onSelectTemplate(templates[(activeIndex + 1) % templates.length].id)
  }

  // Function to handle previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => [(prev[0] - 1 + templates.length) % templates.length, -1])
    onSelectTemplate(templates[(activeIndex - 1 + templates.length) % templates.length].id)
  }

  // Set the first template as selected by default
  useEffect(() => {
    if (!selectedTemplate) {
      onSelectTemplate(templates[0].id)
    }
  }, [selectedTemplate, onSelectTemplate])

  // Calculate indices for visible slides
  const indexLeft = (activeIndex - 1 + templates.length) % templates.length
  const indexRight = (activeIndex + 1) % templates.length

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-2">Choose your CV Template</h2>

      <div className="relative h-[450px] w-full overflow-hidden mt-8">
        {/* Left (previous) slide */}
        <motion.div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-[200px] h-[300px] opacity-60"
          initial={{ x: direction > 0 ? -300 : 0, opacity: direction > 0 ? 0 : 0.6 }}
          animate={{ x: 0, opacity: 0.6 }}
          exit={{ x: direction < 0 ? -300 : 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
            <Image
              src={templates[indexLeft].image || "/placeholder.svg"}
              alt={templates[indexLeft].name}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Center (active) slide */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] h-[400px]"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border-4 border-[#4E0684]">
              <Image
                src={templates[activeIndex].image || "/placeholder.svg"}
                alt={templates[activeIndex].name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4E0684] text-white py-2 px-4 text-center">
                <span className="font-medium">{templates[activeIndex].name}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right (next) slide */}
        <motion.div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 w-[200px] h-[300px] opacity-60"
          initial={{ x: direction < 0 ? 300 : 0, opacity: direction < 0 ? 0 : 0.6 }}
          animate={{ x: 0, opacity: 0.6 }}
          exit={{ x: direction > 0 ? 300 : 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
            <Image
              src={templates[indexRight].image || "/placeholder.svg"}
              alt={templates[indexRight].name}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="h-6 w-6 text-[#4E0684]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6 text-[#4E0684]" />
        </button>
      </div>

      <div className="mt-8 flex justify-center">
        <Button onClick={onNext} className="bg-[#4E0684] hover:bg-[#4E0684] text-white px-8">
          Next
        </Button>
      </div>
    </div>
  )
}


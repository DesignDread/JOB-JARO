"use client"

import type React from "react"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import StepIndicator from "./step-indication"
import ChooseTemplate from "./steps/choose-templates"
import EnterDetails from "./steps/enter-details"
import DownloadResume from "./steps/download-resume"
import { cn } from "@/lib/utils"

export type Step = {
  id: number
  title: string
  component: React.ReactNode
}

export type DetailStep = "name" | "contact" | "social" | "education" | "skills" | "highlights" | "goals"

export default function CVBuilder() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [currentDetailStep, setCurrentDetailStep] = useState<DetailStep>("social")

  const steps: Step[] = [
    {
      id: 1,
      title: "Choose Template",
      component: (
        <ChooseTemplate
          onNext={() => setCurrentStep(2)}
          onSelectTemplate={setSelectedTemplate}
          selectedTemplate={selectedTemplate}
        />
      ),
    },
    {
      id: 2,
      title: "Enter Your Details",
      component: (
        <EnterDetails
          onNext={() => setCurrentStep(3)}
          onBack={() => setCurrentStep(1)}
          currentDetailStep={currentDetailStep}
          setCurrentDetailStep={setCurrentDetailStep}
        />
      ),
    },
    {
      id: 3,
      title: "Download Resume",
      component: <DownloadResume onBack={() => setCurrentStep(2)} />,
    },
  ]

  const currentStepObj = steps.find((step) => step.id === currentStep)

  return (
    <div className="w-full max-w-5xl flex">
      {/* Left sidebar */}
      <div className="w-64  rounded-l-3xl p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-8">Build Your CV</h1>
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      {/* Main content */}
      <div
        className={cn(
          "flex-1 bg-white rounded-3xl p-6 min-h-[80vh] relative overflow-hidden",
          currentStep === 1 ? "flex items-center justify-center" : "",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {currentStepObj?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}


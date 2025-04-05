"use client"

import { motion } from "framer-motion"
import type { Step } from "./cv-builder"

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-start">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{
                scale: currentStep === step.id ? 1 : 0.9,
                backgroundColor: currentStep === step.id ? "#8b5cf6" : "#c4b5fd",
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
            >
              {step.id}
            </motion.div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-16 bg-[#4E0684]/50 my-1">
                <motion.div
                  className="w-full bg-[#4E0684]"
                  initial={{ height: "0%" }}
                  animate={{
                    height: currentStep > step.id ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </div>
          <span className="ml-3 text-sm font-medium">{step.title}</span>
        </div>
      ))}
    </div>
  )
}


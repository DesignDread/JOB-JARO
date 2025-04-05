"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import type { DetailStep } from "../cv-builder"
import { Linkedin } from "lucide-react"

interface EnterDetailsProps {
  onNext: () => void
  onBack: () => void
  currentDetailStep: DetailStep
  setCurrentDetailStep: (step: DetailStep) => void
}

export default function EnterDetails({ onNext, onBack, currentDetailStep, setCurrentDetailStep }: EnterDetailsProps) {
  const goToStep = (step: DetailStep) => {
    setCurrentDetailStep(step)
  }

  const goToNextDetailStep = () => {
    const steps: DetailStep[] = ["social", "name", "contact", "education", "skills", "highlights", "goals"]
    const currentIndex = steps.indexOf(currentDetailStep)

    if (currentIndex < steps.length - 1) {
      setCurrentDetailStep(steps[currentIndex + 1])
    } else {
      onNext()
    }
  }

  const goToPrevDetailStep = () => {
    const steps: DetailStep[] = ["social", "name", "contact", "education", "skills", "highlights", "goals"]
    const currentIndex = steps.indexOf(currentDetailStep)

    if (currentIndex > 0) {
      setCurrentDetailStep(steps[currentIndex - 1])
    } else {
      onBack()
    }
  }

  return (
    <div className="w-full max-w-md py-32 mx-auto">
      <AnimatePresence mode="wait">
        {currentDetailStep === "social" && (
          <DetailStepWrapper key="social">
            <h2 className="text-2xl font-semibold text-center">Connect Your Social Profile</h2>
            <p className="text-center text-gray-500 mb-8">Prefill your resume with data from your social profile</p>

            <div className="space-y-4  bg-[#EBF2FA] rounded-3xl ">
              <SocialButton icon={<GoogleIcon />} name="Google" />
              <SocialButton icon={<FacebookIcon />} name="Meta" />
              <SocialButton icon={<Linkedin className="h-5 w-5" />} name="LinkedIn" />
            </div>
          </DetailStepWrapper>
        )}

        {currentDetailStep === "name" && (
          <DetailStepWrapper key="name">
            <h2 className="text-2xl font-semibold text-center">Add your name</h2>
            <p className="text-center text-gray-500 mb-8">
              You made a great template selection! Now let's add your name to your resume
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Enter Your First Name</label>
                <Input placeholder="Enter Your First Name" className="bg-[#EBF2FA] py-6 rounded-none border-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Enter Your Last Name</label>
                <Input placeholder="Enter Your Last Name" className="bg-[#EBF2FA] py-6 rounded-none border-none" />
              </div>
            </div>
          </DetailStepWrapper>
        )}

        {currentDetailStep === "contact" && (
          <DetailStepWrapper key="contact">
            <h2 className="text-2xl font-semibold text-center">Provide Your Contact Information</h2>
            <p className="text-center text-gray-500 mb-8">
              It's important to let employers know how to contact you. Enter your email address below
            </p>

            <div>
              <label className="block text-sm font-medium mb-1">Enter Your Email Address</label>
              <Input placeholder="Enter your email address" type="email" />
            </div>
          </DetailStepWrapper>
        )}

        {currentDetailStep === "education" && (
          <DetailStepWrapper key="education">
            <h2 className="text-2xl font-semibold text-center">Your Education</h2>
            <p className="text-center text-gray-500 mb-8">
              We can begin in a few ways; pick the one that works best for you
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name of the educational institution</label>
                <Input placeholder="University name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Degree</label>
                <Input placeholder="Bachelor's, Master's, etc." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Start & End Date</label>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YYYY" />
                  <Input placeholder="MM/YYYY" />
                </div>
              </div>
            </div>
          </DetailStepWrapper>
        )}

        {currentDetailStep === "skills" && (
          <DetailStepWrapper key="skills">
            <h2 className="text-2xl font-semibold text-center">Choose your top skills</h2>
            <p className="text-center text-gray-500 mb-8">
              We can begin in a few ways; pick the one that works best for you
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Selected Skills:</label>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX", "Wireframes", "Shopify", "UI/UX", "Wireframes"].map((skill) => (
                    <Badge key={skill} className="bg-purple-100 text-[#4E0684] hover:bg-purple-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Skills</label>
                <Input placeholder="Add more skills" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Suggested Skills:</label>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX", "Wireframes", "Shopify", "UI/UX", "Wireframes"].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-purple-50 hover:bg-purple-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DetailStepWrapper>
        )}

        {currentDetailStep === "highlights" && (
          <DetailStepWrapper key="highlights">
            <h2 className="text-2xl font-semibold text-center">Professional Highlights</h2>
            <p className="text-center text-gray-500 mb-8">
              Achievements, awards, stand-out results - share your past success
            </p>

            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-white rounded-full p-1 flex">
                  <Button variant="default" className="rounded-l-full rounded-r-none bg-[#4E0684] hover:bg-[#4E0684]">
                    Voice Input
                  </Button>
                  <Button variant="outline" className="rounded-r-full rounded-l-none">
                    Text Input
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.div
                  animate={{
                    pathLength: [0, 1, 0],
                    pathOffset: [0, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                  className="w-full h-20"
                >
                  <svg viewBox="0 0 300 50" className="w-full h-full">
                    <motion.path
                      d="M0,25 C50,5 100,45 150,25 C200,5 250,45 300,25"
                      fill="transparent"
                      stroke="#8b5cf6"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </DetailStepWrapper>
        )}

        {currentDetailStep === "goals" && (
          <DetailStepWrapper key="goals">
            <h2 className="text-2xl font-semibold text-center">Career Goals</h2>
            <p className="text-center text-gray-500 mb-8">
              Achievements, awards, stand-out results - share your past success
            </p>

            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-white rounded-full p-1 flex">
                  <Button variant="outline" className="rounded-l-full rounded-r-none">
                    Voice Input
                  </Button>
                  <Button variant="default" className="rounded-r-full rounded-l-none bg-[#4E0684] hover:bg-[#4E0684]">
                    Text Input
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Write your text here</label>
                <Textarea placeholder="Write your text here" className="h-32" />
              </div>
            </div>
          </DetailStepWrapper>
        )}
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <Button onClick={goToPrevDetailStep} variant="outline" className="px-8">
          {currentDetailStep === "social" ? "Previous" : "Previous"}
        </Button>

        <Button onClick={goToNextDetailStep} className="bg-[#4E0684] hover:bg-[#4E0684] text-white px-8">
          {currentDetailStep === "goals"
            ? "Create My Resume"
            : currentDetailStep === "highlights"
              ? "Skip"
              : "Continue"}
        </Button>
      </div>
    </div>
  )
}

function DetailStepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

function SocialButton({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center justify-between p-4  rounded-lg hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center">
        {icon}
        <span className="ml-3">{name}</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-[#4E0684] flex items-center justify-center text-white">
        <PlusIcon />
      </div>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 6H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1711 8.36788H17.4998V8.33329H9.99984V11.6666H14.7094C14.0223 13.607 12.1761 15 9.99984 15C7.23859 15 4.99984 12.7612 4.99984 10C4.99984 7.23871 7.23859 5 9.99984 5C11.2744 5 12.4344 5.48683 13.3169 6.28537L15.6744 3.92788C14.1886 2.56683 12.1969 1.66663 9.99984 1.66663C5.39775 1.66663 1.6665 5.39788 1.6665 10C1.6665 14.6021 5.39775 18.3333 9.99984 18.3333C14.6019 18.3333 18.3332 14.6021 18.3332 10C18.3332 9.44121 18.2757 8.89579 18.1711 8.36788Z"
        fill="#FFC107"
      />
      <path
        d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 5 9.99994 5C11.2745 5 12.4345 5.48683 13.317 6.28537L15.6745 3.92788C14.1887 2.56683 12.197 1.66663 9.99994 1.66663C6.74077 1.66663 3.91327 3.47371 2.62744 6.12121Z"
        fill="#FF3D00"
      />
      <path
        d="M10 18.3334C12.1517 18.3334 14.1054 17.4642 15.5804 16.1442L13.0138 13.9875C12.1384 14.6452 11.0802 15.0009 10 15C7.83255 15 5.99213 13.6179 5.2988 11.6875L2.5863 13.7434C3.85172 16.4384 6.7113 18.3334 10 18.3334Z"
        fill="#4CAF50"
      />
      <path
        d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3917 13.0125 13.9879L13.0138 13.9871L15.5804 16.1438C15.4088 16.3021 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z"
        fill="#1976D2"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.3332 10.0001C18.3332 5.39758 14.6023 1.66675 9.99984 1.66675C5.39734 1.66675 1.6665 5.39758 1.6665 10.0001C1.6665 14.1084 4.61317 17.5018 8.5415 18.2084V12.5001H6.6665V10.0001H8.5415V8.12508C8.5415 5.97508 9.72984 4.87508 11.6873 4.87508C12.6207 4.87508 13.5957 5.05008 13.5957 5.05008V6.87508H12.5123C11.4457 6.87508 11.0832 7.50008 11.0832 8.14258V10.0001H13.4998L13.0873 12.5001H11.0832V18.2084C15.0115 17.5018 18.3332 14.1084 18.3332 10.0001Z"
        fill="#1877F2"
      />
      <path
        d="M13.0873 12.5L13.4998 10H11.0832V8.14254C11.0832 7.50004 11.4457 6.87504 12.5123 6.87504H13.5957V5.05004C13.5957 5.05004 12.6207 4.87504 11.6873 4.87504C9.72984 4.87504 8.5415 5.97504 8.5415 8.12504V10H6.6665V12.5H8.5415V18.2084C9.02317 18.2967 9.51734 18.3334 9.99984 18.3334C10.4823 18.3334 10.9765 18.2967 11.4582 18.2084V12.5H13.0873Z"
        fill="white"
      />
    </svg>
  )
}


"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface DownloadResumeProps {
  onBack: () => void
}

export default function DownloadResume({ onBack }: DownloadResumeProps) {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-semibold text-center text-[#4E0684]">AI Assistant at work</h2>
      <p className="text-center text-gray-500 mt-2 mb-8">
        Your resume is almost ready!
        <br />
        You will still be able to add more details and make edits
      </p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, 0, -10, 0] }}
        transition={{
          scale: { duration: 0.5 },
          rotate: { duration: 1.5, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 },
        }}
        className="w-16 h-16 rounded-full bg-[#4E0684] flex items-center justify-center text-white mb-8"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <div className="flex space-x-4">
        <Button onClick={onBack} variant="outline" className="px-8">
          Previous
        </Button>

        <Button className="bg-[#4E0684] hover:bg-[#4E0684] text-white px-8">Download CV</Button>
      </div>
    </div>
  )
}


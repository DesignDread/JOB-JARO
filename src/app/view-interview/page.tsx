"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Mic, Video, MicOff, VideoOff } from "lucide-react"

export default function VirtualInterviewPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [timer, setTimer] = useState(0)
  const [isRecording, setIsRecording] = useState(true)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Mock question
  const question =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the?"

  useEffect(() => {
    // Start timer
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)

    // Request camera access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err)
          setIsCameraOn(false)
        })
    }

    return () => {
      clearInterval(interval)
      // Clean up video stream
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        const tracks = stream.getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const toggleMicrophone = () => {
    setIsRecording(!isRecording)
  }

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn)

    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const videoTracks = stream.getVideoTracks()
      videoTracks.forEach((track) => {
        track.enabled = !isCameraOn
      })
    }
  }

  const completeInterview = () => {
    router.push("/view-interview/results")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#C092FF]/50 p-4">
      {/* Video feed */}
      <div className="self-end mt-4 relative">
        <div className="w-[300px] h-[180px] bg-gray-800 rounded-lg overflow-hidden">
          {isCameraOn ? (
            <video ref={videoRef} autoPlay muted className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">Camera Off</div>
          )}
        </div>
        <div className="absolute mt-3 right-2 bg-gradient-to-b from-[#5417A3] to-[#410F80] text-white text-xs w-[290px] px-2 py-1 rounded-full">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        Listening
        </div>
      </div>
     

      {/* Question */}
      <div className="max-w-5xl text-center my-12">
        <h2 className="text-xl lg:text-[32px]  mb-6">Question {currentQuestion}</h2>
        <p className="text-lg lg:text-[32px] font-medium">{question}</p>
      </div>

      {/* Controls */}
      <div className="w-full max-w-7xl mb-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm">
            <p className="lg:text-[22px]">Interview Duration</p>
            <p className="text-xl font-semibold">{formatTime(timer)}</p>
          </div>

          <Button onClick={completeInterview} className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-6">
            Complete Interview
          </Button>

          <div className="w-[100px]">{/* Spacer for layout balance */}</div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full bg-white w-12 h-12" onClick={toggleMicrophone}>
            {isRecording ? <Mic className="h-5 w-5 text-[#4E0684]" /> : <MicOff className="h-5 w-5" />}
          </Button>

          <Button variant="outline" size="icon" className="rounded-full bg-white w-12 h-12" onClick={toggleCamera}>
            {isCameraOn ? <Video className="h-5 w-5 text-[#4E0684]" /> : <VideoOff className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  )
}


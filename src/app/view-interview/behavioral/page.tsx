"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, CheckCircle2 } from "lucide-react"

interface Question {
  id: string
  time: number
  text: string
  section: "behavioral" | "interview" | "real"
  completed: boolean
}

export default function BehavioralTestPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [activeTab, setActiveTab] = useState("in-progress")
  const [selectedInProgress, setSelectedInProgress] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([
    // Behavioral Test Questions
    {
      id: "b1",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "behavioral",
      completed: false,
    },
    {
      id: "b2",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "behavioral",
      completed: false,
    },
    {
      id: "b3",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "behavioral",
      completed: false,
    },
    {
      id: "b4",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "behavioral",
      completed: false,
    },
    // Polish Your Interview Skills Questions
    {
      id: "i1",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "interview",
      completed: false,
    },
    {
      id: "i2",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "interview",
      completed: false,
    },
    {
      id: "i3",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "interview",
      completed: false,
    },
    {
      id: "i4",
      time: 5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      section: "interview",
      completed: false,
    },
    // Get Ready For The Real Thing Questions
    {
      id: "r1",
      time: 5,
      text: "Lorem ipsum is a simple dummy text",
      section: "real",
      completed: false,
    },
    {
      id: "r2",
      time: 5,
      text: "Lorem ipsum is a simple dummy text",
      section: "real",
      completed: false,
    },
    {
      id: "r3",
      time: 5,
      text: "Lorem ipsum is a simple dummy text",
      section: "real",
      completed: false,
    },
    {
      id: "r4",
      time: 5,
      text: "Lorem ipsum is a simple dummy text",
      section: "real",
      completed: false,
    },
  ])

  const behavioralQuestions = questions.filter((q) => q.section === "behavioral")
  const interviewQuestions = questions.filter((q) => q.section === "interview")
  const realQuestions = questions.filter((q) => q.section === "real")

  const completedCount = behavioralQuestions.filter((q) => q.completed).length
  const totalCount = behavioralQuestions.length

  const handleQuestionSelect = (question: Question) => {
    setSelectedQuestion(question)
    setOpenDialog(true)
  }

  const handleCompleteQuestion = (id: string) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, completed: true } : q)))
    setOpenDialog(false)
  }

  const handleInProgressClick = () => {
    setSelectedInProgress(!selectedInProgress)
  }

  const handleContinueClick = () => {
    // In a real app, we would navigate to the appropriate question or action
    // For demo purposes, just show the dialog with the first incomplete question
    const firstIncompleteQuestion = behavioralQuestions.find(q => !q.completed)
    if (firstIncompleteQuestion) {
      setSelectedQuestion(firstIncompleteQuestion)
      setOpenDialog(true)
    }
  }

  return (
    <div className="container bg-[#EBF2FA] mx-auto px-4 py-8 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Behavioral Test</h1>
        <span className="text-sm">
          {completedCount} of {totalCount} Completed
        </span>
      </div>

      {/* Behavioral Test Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {behavioralQuestions.map((question) => (
          <Card
            key={question.id}
            className={`border py-0  ${question.completed ? "border-green-500 bg-green-50" : "border-gray-200"}`}
          >
            <CardContent className="p-4 gap-8  flex flex-col h-full w-full">
              <div className="flex items-center  justify-between mb-2">
                <div className="flex items-center  rounded-full p-1 pr-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-xs">{question.time} mins</span>
                </div>
                <Button
                  variant="link"
                  className="ml-auto text-[#4E0684] text-xs p-0"
                  onClick={() => handleQuestionSelect(question)}
                >
                  {question.completed ? "View Question" : "Start Question"}
                </Button>
              </div>
              <p className="text-xs line-clamp-4">{question.text}</p>
              {question.completed && (
                <div className="absolute top-2 right-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <Tabs defaultValue="in-progress" onValueChange={setActiveTab}>
          <div className="border-b">
            <div className="flex justify-between" >
                <TabsList className="bg-transparent h-auto p-0" >
              <TabsTrigger
                value="in-progress"
                className={`px-4 py-2 rounded-none border-b-2 bg-[#EBF2FA] ${
                  activeTab === "in-progress" ? "border-b-[black] bg-[#EBF2FA] text-black" : " bg-[#EBF2FA] border-transparent"
                }`}
              >
                In Progress
              </TabsTrigger>
              <TabsTrigger
                value="complete"
                className={`px-4 py-2 rounded-none border-b-2 ${
                  activeTab === "complete" ? "border-b-[black] bg-[#EBF2FA] text-black" : "border-transparent"
                }`}
              >
                Complete
              </TabsTrigger>
              </TabsList>
              <Button variant="outline" className="text-[#4E0684] rounded-full" disabled={completedCount === 0}>
                Create Now
              </Button>
            </div>
          </div>
          
          <TabsContent value="in-progress" className="pt-4">
            <div className="flex justify-between items-center mb-4">
              
            </div>

            {/* Updated In Progress Card to match other card sizes */}
            <Card 
              className={`border max-w-60 py-0 p-4 h-48 relative ${selectedInProgress ? "border-green-500  bg-green-50" : "border-gray-200"}`}
              onClick={handleInProgressClick}
            >
              <CardContent className="flex flex-col py-0 items-center justify-between">
                <div className="flex absolute left-2 top-2 items-center pb-12">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  <span className="text-sm">
                    {completedCount} of {totalCount} Completed
                  </span>
                </div>
                <div className="flex  absolute bottom-14 left-2  items-center">
                  <div className="w-8 h-8 bg-[#007AFF]  rounded-md flex items-center justify-center mr-4">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Head</h3>
                  </div>
                </div>
                <Button 
                  className="bg-[#EBF2FA] hover:bg-[#EBF2FA]/80 bottom-3 rounded-full  w-56 absolute  text-[#4E0684]"
                  onClick={handleContinueClick}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complete" className="pt-4">
            {completedCount > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {behavioralQuestions
                  .filter((q) => q.completed)
                  .map((question) => (
                    <Card key={question.id} className="border py-0 border-green-500 bg-green-50">
                      <CardContent className="p-4 flex flex-col gap-8">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center bg-gray-100 rounded-full p-1 pr-2">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-xs">{question.time} mins</span>
                          </div>
                          <Button
                            variant="link"
                            className="ml-auto text-[#4E0684] text-xs p-0"
                            onClick={() => handleQuestionSelect(question)}
                          >
                            View Question
                          </Button>
                        </div>
                        <p className="text-xs line-clamp-4">{question.text}</p>
                        <div className="absolute top-2 right-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <p className="text-center py-8">No completed questions yet.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Polish Your Interview Skills */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Polish Your Interview Skills</h2>
          <Button variant="outline" className="text-[#4E0684] bg-transparent rounded-full border-[#4E0684]">
            Question Library
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {interviewQuestions.map((question) => (
            <Card
              key={question.id}
              className={`border py-0 ${question.completed ? "border-green-500 bg-green-50" : "border-gray-200"}`}
            >
              <CardContent className="p-4 flex flex-col gap-8">
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-gray-100 rounded-full p-1 pr-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-xs">{question.time} mins</span>
                  </div>
                  <Button
                    variant="link"
                    className="ml-auto text-[#4E0684] text-xs p-0"
                    onClick={() => handleQuestionSelect(question)}
                  >
                    {question.completed ? "View Question" : "Start Question"}
                  </Button>
                </div>
                <p className="text-xs line-clamp-4">{question.text}</p>
                {question.completed && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Get Ready For The Real Thing */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Get Ready For The Real Thing</h2>
          <span className="text-sm">Based On Your Profile</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {realQuestions.map((question) => (
            <Card
              key={question.id}
              className={`border py-0 ${question.completed ? "border-green-500 bg-green-50" : "border-gray-200"}`}
            >
              <CardContent className="p-4 flex flex-col gap-3">
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-gray-100 rounded-full p-1 pr-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-xs">{question.time} mins</span>
                  </div>
                  <Button
                    variant="link"
                    className="ml-auto text-[#4E0684] text-xs p-0"
                    onClick={() => handleQuestionSelect(question)}
                  >
                    Interview
                  </Button>
                </div>
                <div className="mt-4 mb-2">
                <div className="w-8 h-8 bg-[#007AFF]  rounded-md flex items-center justify-center mr-4">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-xs">{question.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Question Dialog - Updated text sizes */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Question</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center bg-gray-100 rounded-full p-1 pr-2">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-xs">{selectedQuestion?.time} mins</span>
              </div>
            </div>
            <p className="text-lg">{selectedQuestion?.text}</p>
            <p className="text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industrys
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
            <div className="pt-4 border-t border-gray-200">
              <Button variant="link" className="text-[#4E0684] p-0 text-lg">
                Monitor the question
              </Button>
            </div>
            <div className="flex justify-end">
              <Button
                className="bg-green-500 hover:bg-green-600 text-lg"
                onClick={() => selectedQuestion && handleCompleteQuestion(selectedQuestion.id)}
              >
                Complete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
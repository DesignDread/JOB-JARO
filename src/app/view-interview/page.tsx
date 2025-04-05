import Image from "next/image"
import Link from "next/link"
import Vh1 from "../../../public/VHR1.svg"
import Vh2 from "../../../public/VHR2.svg"
import Vh3 from "../../../public/VHR3.svg"

export default function TestSelectionPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-3xl space-y-4">
        <TestCard
          title="Behavioral Test"
          description="Evaluates personality, adaptability, leadership, teamwork, communication, and workplace decision-making skills."
          imageSrc={Vh1}
          buttonText="Take Test"
          buttonLink="/behavioral-test"
        />

        <TestCard
          title="General Aptitude Test"
          description="Measures logical reasoning, problem-solving, numerical ability, critical thinking, and data interpretation."
          imageSrc={Vh2}
          buttonText="Take Test"
          buttonLink="/general-aptitude-test"
        />

        <TestCard
          title="Skill-Based Test"
          description="Assesses technical expertise, industry knowledge, practical skills, and role-specific proficiency."
          imageSrc={Vh3}
          buttonText="Start Now"
          buttonLink="/skill-based-test"
        />
      </div>
    </div>
  )
}

interface TestCardProps {
  title: string
  description: string
  imageSrc: string
  buttonText: string
  buttonLink: string
}

function TestCard({ title, description, imageSrc, buttonText, buttonLink }: TestCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 w-full md:h-auto md:w-1/3">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h2 className="mb-2 text-xl font-medium text-gray-900">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <div className="mt-4">
            <Link
              href={buttonLink}
              className="inline-block rounded bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


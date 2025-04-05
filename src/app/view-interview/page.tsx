import Image from "next/image"
import Link from "next/link"
import Vh1 from "../../../public/VHR1.svg"
import Vh2 from "../../../public/VHR2.svg"
import Vh3 from "../../../public/VHR3.svg"

export default function TestSelectionPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-4">
        <TestCard
          title="Behavioral Test"
          description="Evaluates personality, adaptability, leadership, teamwork, communication, and workplace decision-making skills."
          imageSrc={Vh1}
          buttonText="Take Test"
          buttonLink="/view-interview/behavioral"
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
    <div className="overflow-hidden rounded-2xl bg-white p-4 shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative min-h-[250px] rounded-2xl overflow-hidden w-full md:h-auto md:w-1/3">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h2 className="mb-2 text-xl lg:text-[38px] font-medium text-gray-900">{title}</h2>
            <p className="text-sm lg:text-[24px]">{description}</p>
          </div>
          <div className="mt-4">
            <Link
              href={buttonLink}
              className="inline-block text-[#4E0684] rounded bg-[#EBF2FA] px-6 py-2 text-xs font-medium  hover:bg-[#EBF2FA]/50 lg:text-[16px]"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


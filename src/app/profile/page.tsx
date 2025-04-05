import Image from "next/image"
import { MapPin, ExternalLink, Edit, Plus } from "lucide-react"

export default function UserProfile() {
  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Header */}
      <div className="p-4 flex items-start gap-3 border-b">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Jane Foster"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-semibold text-lg">Jane Foster</h1>
              <p className="text-sm text-gray-500">UX/UI Designer</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <MapPin size={12} className="mr-1" />
                <span>Chicago, IL, USA</span>
                <span className="mx-1">•</span>
                <span>9:30</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-purple-600 border border-purple-600 rounded-md px-3 py-1 text-sm flex items-center">
                <Plus size={16} className="mr-1" />
                Add Video Resume
              </button>
              <button className="bg-purple-600 text-white rounded-md px-3 py-1 text-sm flex items-center">
                <Edit size={16} className="mr-1" />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex">


        <div className="w-full md:w-2/3 p-4">
          {/* About Me */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">About me</h2>
            <p className="text-sm text-gray-700">
              UX Product Designer and Founder
              <br />
              <br />I am a UX/UI designer with 5+ years of experience using creative and technical business. I am a
              results-first product designer who can create elegant experiences that solve complex challenges for
              businesses and their customers. I have a passion for creating beautiful, functional, and user-centered
              digital products that help people and make a difference.
            </p>
          </div>
          </div>


<div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-lg mb-6">
            <div className="text-6xl font-bold">10%</div>
            <div className="text-sm mb-2">off your first contract</div>
            <p className="text-xs mb-4">
              Complete your profile to apply for your first contract and receive 10% off. This offer is valid for new
              users only and applies to your first contract on our platform.
            </p>
            <div className="flex items-center text-xs">
              <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
              <span>Offer expires in 7 days</span>
            </div>
          </div>
          </div>
<div>
          {/* Skills */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Skills</h2>
              <button className="text-gray-400">
                <Edit size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <SkillTag label="Product Design" />
              <SkillTag label="User Experience" />
              <SkillTag label="User Research" />
              <SkillTag label="Prototyping" />
              <SkillTag label="Figma" />
              <SkillTag label="Wireframing" />
              <SkillTag label="Web" />
              <SkillTag label="Product Design" />
              <SkillTag label="User Experience" />
              <SkillTag label="User Research" />
              <SkillTag label="Prototyping" />
              <SkillTag label="Information Architecture" />
              <SkillTag label="Product Design" />
              <SkillTag label="User Experience" />
              <SkillTag label="Card Sorting" />
              <SkillTag label="Jobs" />
            </div>
          </div>

          {/* Currently working with */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Currently working with...</h2>
              <button className="text-gray-400">
                <Edit size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 bg-green-100 rounded-md p-2 w-fit">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
                <Image src="/placeholder.svg?height=20&width=20" alt="Figma" width={20} height={20} />
              </div>
              <span className="text-sm">Figma</span>
            </div>
          </div>

          {/* Certificates */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Certificates</h2>
              <button className="text-gray-400">
                <Edit size={16} />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs">
                  G
                </div>
                <span className="text-sm">Google UX Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs">
                  G
                </div>
                <span className="text-sm">Google UI Designer</span>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Portfolio</h2>
              <button className="text-gray-400">
                <Edit size={16} />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-600 flex items-center justify-center text-white text-xs">
                  W
                </div>
                <span className="text-sm">Website 1</span>
                <ExternalLink size={14} className="text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-600 flex items-center justify-center text-white text-xs">
                  W
                </div>
                <span className="text-sm">Website 2</span>
                <ExternalLink size={14} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Work History */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Work History</h2>
              <button className="text-gray-400">
                <Edit size={16} />
              </button>
            </div>
            <div className="space-y-4">
              <WorkHistoryItem
                company="Co-Founder, Partner - Head of Design"
                duration="2019 - Present • 5 yrs"
                status="Full-time"
                statusColor="green"
              />
              <WorkHistoryItem
                company="Co-Founder, Partner - Head of Design"
                duration="2019 - Present • 5 yrs"
                status="Full-time"
                statusColor="green"
              />
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Education</h2>
              <button className="text-gray-400">
                <Edit size={16} />
              </button>
            </div>
            <div className="space-y-4">
              <EducationItem
                degree="Master's degree in Information Technology"
                school="MIT"
                duration="2015 - 2017 • 2 yrs"
              />
              <EducationItem
                degree="Co-Founder, Partner - Head of Design"
                school="University"
                duration="2010 - 2015 • 5 yrs"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          {/* Promo Banner */}
          

          {/* Add Remaining Details */}
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-4">
              Add Remaining Details To Your Profile{" "}
              <span className="text-xs text-gray-500">(helps find Profile Matches)</span>
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Availability</label>
                <input type="text" className="w-full border rounded-md p-2 text-sm" placeholder="" />
              </div>

              <div>
                <label className="block text-sm mb-1">Preferred Work Team</label>
                <input type="text" className="w-full border rounded-md p-2 text-sm" placeholder="" />
              </div>

              <div>
                <label className="block text-sm mb-1">Preferred Work Mode</label>
                <input type="text" className="w-full border rounded-md p-2 text-sm" placeholder="" />
              </div>

              <div>
                <label className="block text-sm mb-1">Preferred Location</label>
                <div className="relative">
                  <input type="text" className="w-full border rounded-md p-2 pl-8 text-sm" placeholder="" />
                  <MapPin size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Right To Work</label>
                <div className="text-xs text-gray-500 mb-1">Specify Your Preference To Work</div>
                <div className="relative">
                  <input type="text" className="w-full border rounded-md p-2 pl-8 text-sm" placeholder="" />
                  <MapPin size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <button className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm w-full">+ Add Details</button>
              </div>

              <div>
                <label className="block text-sm mb-1">Salary Expectations</label>
                <input type="text" className="w-full border rounded-md p-2 text-sm" placeholder="$50,000/year" />
              </div>

              <div>
                <label className="block text-sm mb-1">Classification of Interest</label>
                <input type="text" className="w-full border rounded-md p-2 text-sm" placeholder="" />
              </div>

              <div>
                <button className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm w-full">Save & Close</button>
              </div>

              <div>
                <label className="block text-sm mb-1">Append to PDF</label>
                <input type="text" className="w-full border rounded-md p-2 text-sm" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillTag({ label }: { label: string }) {
  return <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{label}</div>
}

interface WorkHistoryItemProps {
  company: string;
  duration: string;
  status: string;
  statusColor: string;
}

function WorkHistoryItem({ company, duration, status, statusColor }: WorkHistoryItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-600 text-xs mt-1">
        <Image src="/placeholder.svg?height=20&width=20" alt="Company" width={20} height={20} />
      </div>
      <div>
        <div className="font-medium text-sm">{company}</div>
        <div className="flex items-center text-xs text-gray-500">
          <span>{duration}</span>
          <span className="mx-1">•</span>
          <span className={`text-${statusColor}-500`}>{status}</span>
        </div>
      </div>
    </div>
  )
}

interface EducationItemProps {
  degree: string;
  school: string;
  duration: string;
}

function EducationItem({ degree, school, duration }: EducationItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-600 text-xs mt-1">
        <Image src="/placeholder.svg?height=20&width=20" alt="School" width={20} height={20} />
      </div>
      <div>
        <div className="font-medium text-sm">{degree}</div>
        <div className="flex items-center text-xs text-gray-500">
          <span>{school}</span>
          <span className="mx-1">•</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  )
}


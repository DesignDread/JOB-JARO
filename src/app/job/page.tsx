import { Search, ChevronDown, MoreVertical, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Google from "../../../public/Google.svg"

export default function JobSearchInterface() {
  return (
    <div className="min-h-screen bg-[#f0f1fa] p-6">
      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-white rounded-full p-4 max-w-6xl">
        {/* Job Title */}
        <div className="flex items-center relative">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Job Title</label>
            <div className="bg-white rounded-md px-1 py-2">
              <span className="text-sm font-medium">UI/UX Designer</span>
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200 absolute right-0"></div>
        </div>

        {/* Location */}
        <div className="flex items-center relative">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Location</label>
            <div className="bg-white rounded-md px-1 py-2 flex items-center justify-between">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1 text-gray-500" />
                <span className="text-sm font-medium">New Zealand</span>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200 absolute right-0"></div>
        </div>

        {/* Job Type */}
        <div className="flex items-center relative">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Job Type</label>
            <div className="bg-white rounded-md px-1 py-2 flex items-center justify-between">
              <span className="text-sm font-medium">Full Time</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-[#4E0684] text-white rounded-full w-14 h-14 flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5  gap-4 mb-8">
        {/* Work arrangement */}
        <div className="bg-white px-4 py-2 rounded-full relative flex items-center">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Work arrangement</label>
            <div className="bg-white rounded-md px-1 py-2 flex items-center justify-between">
              <span className="text-sm font-medium">Hybrid (Office + Remote)</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200 absolute right-0"></div>
        </div>

        {/* Salary range */}
        <div className="bg-white px-4 py-2 rounded-full relative flex items-center">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Salary range</label>
            <div className="bg-white rounded-md px-1 py-2 flex items-center justify-between">
              <span className="text-sm font-medium">From $2k monthly</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200 absolute right-0"></div>
        </div>

        {/* Listed within */}
        <div className="bg-white px-4 py-2 rounded-full relative flex items-center">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Listed within</label>
            <div className="bg-white rounded-md px-1 py-2 flex items-center justify-between">
              <span className="text-sm font-medium">Last 24 hours</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200 absolute right-0"></div>
        </div>

        {/* Experience level */}
        <div className="bg-white px-4 py-2 rounded-full relative flex items-center">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Experience level</label>
            <div className="bg-white rounded-md px-1 py-2 flex items-center justify-between">
              <span className="text-sm font-medium">(0-2 years)</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200 absolute right-0"></div>
        </div>

        {/* Industry */}
        <div className="bg-white px-4 py-2 rounded-full relative flex items-center">
          <div className="w-full">
            <label className="block text-xs pt-2 px-1 text-[#1A1A1A]">Industry</label>
            <div className="bg-white rounded-md px-1 py-2 flex items-center justify-between">
              <span className="text-sm font-medium">Accounting</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Search Button */}
        
      </div>

      {/* Jobs Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Top Jobs For You</h2>
        <button className="bg-white text-[#4E0684] rounded-full px-4 py-2 flex items-center gap-2 font-medium text-sm">
          <div className="w-5 h-5 rounded-full bg-[#4E0684] flex items-center justify-center text-white text-xs">
            6
          </div>
          Explore More Jobs
        </button>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-4">
        {[...Array(6)].map((_, index) => (
          <JobCard key={index} />
        ))}
      </div>
    </div>
  )
}

function JobCard() {
  return (
    <div className="rounded-lg bg-white border border-[#410F80] p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image src={Google} alt="Google" />
          </div>
          <div>
            <div className="text-xs text-[#1A1A1A]">Google, INC</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-right">
            <div className="text-xs text-[#1A1A1A]">$ 350,000 - 450,000 Year</div>
            {/* <div className="text-xs"></div> */}
          </div>
          <button className="ml-2">
            <MoreVertical size={16} className="text-gray-400" />
          </button>
        </div>
      </div>
      <h3 className="font-semibold pb-4">UI/UX Designer</h3>

      <div className="flex items-center gap-4 mb-3 pb-4">
        <div className="flex items-center text-xs text-[#1A1A1A]">
          <Clock size={12} className="mr-1" />
          <span>4 days ago</span>
        </div>
        <div className="flex items-center text-xs text-[#1A1A1A]">
          <MapPin size={12} className="mr-1" />
          <span>Sohna Road Ajit Singh Nagar, Punjab, India</span>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">On-Site</span>
        <span className="text-xs bg-purple-100 text-[#4E0684] px-2 py-1 rounded-full">Remote</span>
      </div>

      <div className="flex gap-2">
        <button className="bg-[#4E0684] text-white text-xs max-w-[100px] py-2 rounded-md flex-1">Apply Now</button>
        <button className="border border-[#4E0684] text-[#4E0684] text-xs max-w-[100px] px-4 py-2 rounded-md flex-1">
          Explore&nbsp;More
        </button>
      </div>
    </div>
  )
}
import Image from "next/image"
import Google from "../../public/Google.svg"
import { Clock, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Home1 from "../../public/home1.svg"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#EBF2FA]">
      {/* Sidebar */}
      {/* <SideNav /> */}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        {/* <TopNav /> */}

        {/* Dashboard Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 lg:text-[24px]">Overview</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <StatCard title="Total Applications" value="53" percentage="65%" isPositive={true} />
            <StatCard title="Application Rejected" value="22" percentage="45%" isPositive={false} />
            <StatCard title="Profile Visits" value="12" percentage="85%" isPositive={true} />
            <StatCard title="Interview Schedule" value="34" percentage="65%" isPositive={true} />
          </div>

          {/* Charts and Data - All three boxes in one row */}
          <div className="grid grid-cols-10 gap-6 mb-6">
            {/* First box - wider (5/12 of the width) */}
            <div className="bg-white p-4 rounded-lg col-span-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Last Week Applications</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-xs text-gray-600">This Week</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <span className="text-xs text-gray-600">This Month</span>
                  </div>
                </div>
              </div>
              <div className="h-[180px] relative">
                <svg viewBox="0 0 400 180" className="w-full h-full">
                  {/* X-axis */}
                  <line x1="40" y1="150" x2="380" y2="150" stroke="#e5e7eb" strokeWidth="1" />

                  {/* Y-axis labels */}
                  <text x="20" y="150" fontSize="10" textAnchor="end" fill="#6b7280">
                    30
                  </text>
                  <text x="20" y="120" fontSize="10" textAnchor="end" fill="#6b7280">
                    50
                  </text>
                  <text x="20" y="90" fontSize="10" textAnchor="end" fill="#6b7280">
                    70
                  </text>
                  <text x="20" y="60" fontSize="10" textAnchor="end" fill="#6b7280">
                    90
                  </text>
                  <text x="20" y="30" fontSize="10" textAnchor="end" fill="#6b7280">
                    100
                  </text>

                  {/* X-axis labels */}
                  <text x="40" y="165" fontSize="8" textAnchor="middle" fill="#6b7280">
                    01 July
                  </text>
                  <text x="100" y="165" fontSize="8" textAnchor="middle" fill="#6b7280">
                    01 July
                  </text>
                  <text x="160" y="165" fontSize="8" textAnchor="middle" fill="#6b7280">
                    01 July
                  </text>
                  <text x="220" y="165" fontSize="8" textAnchor="middle" fill="#6b7280">
                    01 July
                  </text>
                  <text x="280" y="165" fontSize="8" textAnchor="middle" fill="#6b7280">
                    01 July
                  </text>
                  <text x="340" y="165" fontSize="8" textAnchor="middle" fill="#6b7280">
                    01 July
                  </text>

                  {/* Line chart */}
                  <path
                    d="M40,60 L100,90 L160,50 L220,100 L280,80 L340,90"
                    fill="none"
                    stroke="#d946ef"
                    strokeWidth="2"
                  />

                  {/* Data points */}
                  <circle cx="40" cy="60" r="4" fill="#d946ef" />
                  <circle cx="100" cy="90" r="4" fill="#d946ef" />
                  <circle cx="160" cy="50" r="4" fill="#d946ef" />
                  <circle cx="220" cy="100" r="4" fill="#d946ef" />
                  <circle cx="280" cy="80" r="4" fill="#d946ef" />
                  <circle cx="340" cy="90" r="4" fill="#d946ef" />
                </svg>
              </div>
            </div>

            {/* Second box (Upcoming Interviews) - normal width (4/12) */}
            <div className="bg-white p-4 rounded-lg col-span-3">
              <h3 className="font-medium mb-4">Upcoming Interviews</h3>
              <div className="space-y-3">
                <InterviewItem
                  day="Fri"
                  date="28"
                  time="10:00 AM"
                  location="Sunnyvale, Silicon Valley"
                  company="Google"
                  logo={Home1}
                />
                <InterviewItem
                  day="Fri"
                  date="28"
                  time="10:00 AM"
                  location="Virtual Meeting"
                  company="Facebook"
                  logo={Home1}
                />
                <InterviewItem
                  day="Fri"
                  date="28"
                  time="10:00 AM"
                  location="Sunnyvale, Silicon Valley"
                  company="Twitch"
                  logo={Home1}
                />
                <InterviewItem
                  day="Fri"
                  date="28"
                  time="10:00 AM"
                  location="Sunnyvale, Silicon Valley"
                  company="Dell"
                  logo="/placeholder.svg?height=30&width=30"
                  subtitle="Technical Round"
                />
              </div>
            </div>
            
            {/* Third box (Upcoming Workshops) - normal width (3/12) */}
            <div className="bg-white p-4 rounded-lg col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Upcoming Workshops</h3>
                <div className="flex">
                  <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 ml-1">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="mb-3">
                    <Image
                
                  src=  {Home1}
                      alt="Workshop"
                      width={300}
                      height={150}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lorem Ipsum</h4>
                    <p className="text-sm lg:text-[20px] text-gray-600">By John</p>
                  </div>
                  <button className="absolute top-3 right-3 bg-purple-100 text-purple-900 text-xs px-2 py-1 rounded">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second row with equal sizing */}
          <div className="grid grid-cols-10 gap-6 mb-6">
            {/* Profile Views */}
            <div className="bg-white  p-4 rounded-lg col-span-4">
              <h3 className="font-medium mb-4">Profile Views</h3>
              <div className="h-[180px] flex items-end justify-between gap-2">
            <div className="flex flex-col gap-6 justify-between text-xs text-gray-500 pb--6">
                <div>6h</div>
                <div>4h</div>
                <div>2h</div>
                <div>0h</div>
              </div>
                {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, index) => (
                  <div key={day} className="flex flex-col items-center">
                    <div
                      className={`w-8 ${index === 3 ? "bg-yellow-400" : "bg-yellow-100"} rounded-t-sm`}
                      style={{
                        height: `${[30, 60, 20, 80, 60, 20, 30][index]}px`,
                      }}
                    ></div>
                    <div className="text-xs text-gray-600 mt-2">{day}</div>
                  </div>
                ))}
              </div>
              
            </div>

            {/* Application History */}
            <div className="bg-white p-4 rounded-lg col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Application History</h3>
                <button className="flex items-center text-sm lg:text-[20px] text-gray-600">
                  Today <ChevronDown size={16} />
                </button>
              </div>
              <div className="space-y-4">
                <ApplicationItem
                  logo={Google}
                  position="Product Designer"
                  company="Google"
                  location="San Jose, CA"
                  salary="$240k/Year"
                  status="In Review"
                />
                <ApplicationItem
                  logo={Google}
                  position="Product Designer"
                  company="Google"
                  location="San Jose, CA"
                  salary="$240k/Year"
                  status="Decline"
                />
                <ApplicationItem
                  logo={Google}
                  position="Product Designer"
                  company="Google"
                  location="San Jose, CA"
                  salary="$240k/Year"
                  status="Decline"
                />
              </div>
            </div>

            {/* HR Score */}
            <div className="bg-white p-4 rounded-lg col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Average Virtual HR Score</h3>
              </div>
              <div className="flex justify-center gap-16">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f3e8ff" strokeWidth="10" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#d946ef"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="113"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">60%</span>
                    </div>
                  </div>
                  <span className="mt-2 font-medium">Confidence</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f3e8ff" strokeWidth="10" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#d946ef"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="130"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">54%</span>
                    </div>
                  </div>
                  <span className="mt-2 font-medium">Knowledge</span>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-4 gap-2">
                <button className="text-[#4E0684] bg-[#EBF2FA] py-2 px-2 w-1/2 mx-auto rounded-lg text-sm lg:text-[20px] font-medium">View All Insights</button>
                <button className="text-[#4E0684] bg-[#EBF2FA] py-2 px-2 w-1/2 mx-auto rounded-lg text-sm lg:text-[20px] font-medium">Attempt New Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, percentage, isPositive }: { title: string; value: string; percentage: string; isPositive: boolean }) {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <h3 className="text-sm lg:text-[20px]  mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold">{value}</span>
        <span
          className={`text-xs px-2 py-1 lg:text-[16px] rounded-full ${isPositive ? "bg-[#6AFF92] text-black" : "bg-[#FF887E] "}`}
        >
          {percentage}
          {isPositive ? "+" : "-"}
        </span>
      </div>
    </div>
  )
}

function InterviewItem({ day, date, time, location, company, logo, subtitle = "" }: { day: string; date: string; time: string; location: string; company: string; logo: string; subtitle?: string }) {
  return (
    <div className="flex items-center p-2 border rounded-lg">
      <div className="flex flex-col items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mr-3">
        <span className="text-xs text-gray-500">{day}</span>
        <span className="text-lg font-bold">{date}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <Clock size={12} className="mr-1" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <MapPin width={12} height={12} className="mr-1" />
          <span>{location}</span>
        </div>
      </div>
      <div className="flex items-center">
        <Image src={logo || "/placeholder.svg"} alt={company} width={24} height={24} className="mr-2" />
        <div>
          <div className="font-medium text-sm lg:text-[20px]">{company}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
      </div>
    </div>
  )
}

function ApplicationItem({ logo, position, company, location, salary, status }: { logo: string; position: string; company: string; location: string; salary: string; status: string }) {
  return (
    <div className="flex items-start">
      <Image src={logo || "/placeholder.svg"} alt={company}  className="mr-3 mt-1" />
      <div className="flex-1">
        <h4 className="font-medium">{position}</h4>
        <div className="flex items-center text-xs text-gray-500">
          <span>{company}</span>
          <span className="mx-1">•</span>
          <span>{location}</span>
          <span className="mx-1">•</span>
          <span>{salary}</span>
        </div>
        {status === "In Review" ? (
          <div className="text-blue-600 text-xs mt-1">{status}</div>
        ) : (
          <button className="bg-red-500 text-white text-xs px-3 py-1 rounded mt-1">{status}</button>
        )}
      </div>
    </div>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
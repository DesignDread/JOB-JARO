import Link from "next/link"
import { MessageSquare, Bell } from "lucide-react"
import Logo from "../../public/Logo.svg"
import Image from "next/image"
export default function TopNav() {
  return (
    <header className="bg-[#EBF2FA] z-50 px-4 flex items-center justify-between">
        <Image src={Logo} alt=""
        ></Image>
      <nav className="flex items-center gap-8">
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Job Search
        </Link>
        <Link href="#" className="text-purple-900 font-medium">
          My Space
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          About Us
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Top Companies
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-gray-600">
          <MessageSquare size={20} />
        </button>
        <div className="relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-purple-900 font-medium text-sm">JD</span>
        </div>
      </div>
    </header>
  )
}
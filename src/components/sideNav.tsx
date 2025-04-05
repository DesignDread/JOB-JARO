"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "../../public/HomeIcon.svg"
import Person from "../../public/PersonIcon.svg"
import Image, { StaticImageData } from "next/image";
import Bag from "../../public/BagIcon.svg"
import Virtual from "../../public/VirtualIcon.png"
import Upcoming from "../../public/UpcomingIcon.svg"
import Salary from "../../public/SalaryIcon.svg"
import Chat from "../../public/ChatIcon.svg"
import Workshop from "../../public/WorkshopIcon.svg"
import CV from "../../public/CVIcon.svg"
import Support from "../../public/SupportIcon.svg"
import Sparkles from "../../public/FindJobIcon.svg"

interface SidebarItemProps {
  icon: string | StaticImageData;
  label: string;
  href: string;
  active?: boolean;
}

function SidebarItem({ icon, label, href, active = false }: SidebarItemProps ) {
  return (
    <Link href={href}>
      <div className={`flex items-center gap-3 p-2 rounded-lg ${active ? 'bg-purple-800 font-medium' : ''}`}>
      <Image src={icon} alt=""></Image>
        {label}
      </div>
    </Link>
  );
}

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="bg-[#4E0684] text-white rounded-tr-2xl h-full w-60 pt-16 border-r">
      {/* Logo */}

      
      {/* Navigation */}
      <nav className="flex flex-col px-3 py-2">
        <SidebarItem 
          icon={Home} 
          href="/" 
          label="Dashboard" 
          active={pathname === "/"} 
        />
        <SidebarItem 
          icon={Person} 
          href="/profile" 
          label="My Profile" 
          active={pathname === "/profile"} 
        />
        <SidebarItem 
          icon={Bag} 
          href="/job" 
          label="Top Jobs" 
          active={pathname === "/job"} 
        />
        <SidebarItem 
          icon={Virtual} 
          href="/virtual-interview" 
          label="Virtual HR" 
          active={pathname === "/virtual-interview"} 
        />
        <SidebarItem 
          icon={Upcoming} 
          href="/interview" 
          label="Upcoming Interviews" 
          active={pathname === "/interview"} 
        />
        <SidebarItem 
          icon={Salary} 
          href="/salary-calculator" 
          label="Salary Calculator" 
          active={pathname === "/salary-calculator"} 
        />
        <SidebarItem 
          icon={Chat } 
          href="/chat" 
          label="Chat" 
          active={pathname === "/chat"} 
        />
        <SidebarItem 
          icon={Workshop} 
          href="/workshops" 
          label="Workshops" 
          active={pathname === "/workshops"} 
        />
        <SidebarItem 
          icon={CV} 
          href="/cv-builder" 
          label="Build Your CV" 
          active={pathname === "/cv-builder"} 
        />
      </nav>
      
      <div className="mt-auto p-4">
        <SidebarItem 
          icon={Support} 
          href="/support" 
          label="Support" 
          active={pathname === "/support"} 
        />
        
        <Link href="/search">
          <div className="mt-4 flex items-center w-full gap-2 rounded bg-white p-2 text-[#4E0684]">
            <Image src={Sparkles} alt="Find Jobs" 
            ></Image>
            <span>Find Jobs</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
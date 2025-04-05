"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  Clock,
  Calculator,
  MessageCircle,
  BookOpen,
  FileText,
  LifeBuoy,
  Search,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

function SidebarItem({ icon, label, href, active = false }: SidebarItemProps) {
  return (
    <Link href={href}>
      <div className={`flex items-center gap-3 p-2 rounded-lg ${active ? 'bg-purple-800 font-medium' : ''}`}>
        {icon}
        {label}
      </div>
    </Link>
  );
}

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="bg-[#4E0684] text-white rounded-tr-2xl h-full w-64 border-r">
      {/* Logo */}

      
      {/* Navigation */}
      <nav className="flex flex-col px-3 py-2">
        <SidebarItem 
          icon={<Home size={20} />} 
          href="/" 
          label="Dashboard" 
          active={pathname === "/"} 
        />
        <SidebarItem 
          icon={<User size={20} />} 
          href="/profile" 
          label="My Profile" 
          active={pathname === "/profile"} 
        />
        <SidebarItem 
          icon={<Briefcase size={20} />} 
          href="/job" 
          label="Top Jobs" 
          active={pathname === "/job"} 
        />
        <SidebarItem 
          icon={<User size={20} />} 
          href="/view-interview" 
          label="Virtual HR" 
          active={pathname === "/view-interview"} 
        />
        <SidebarItem 
          icon={<Clock size={20} />} 
          href="/interview" 
          label="Upcoming Interviews" 
          active={pathname === "/interview"} 
        />
        <SidebarItem 
          icon={<Calculator size={20} />} 
          href="/salary-calculator" 
          label="Salary Calculator" 
          active={pathname === "/salary-calculator"} 
        />
        <SidebarItem 
          icon={<MessageCircle size={20} />} 
          href="/chat" 
          label="Chat" 
          active={pathname === "/chat"} 
        />
        <SidebarItem 
          icon={<BookOpen size={20} />} 
          href="/workshops" 
          label="Workshops" 
          active={pathname === "/workshops"} 
        />
        <SidebarItem 
          icon={<FileText size={20} />} 
          href="/cv-builder" 
          label="Build Your CV" 
          active={pathname === "/cv-builder"} 
        />
      </nav>
      
      <div className="mt-auto p-4">
        <SidebarItem 
          icon={<LifeBuoy size={20} />} 
          href="/support" 
          label="Support" 
          active={pathname === "/support"} 
        />
        
        <Link href="/search">
          <div className="mt-4 flex items-center w-full gap-2 rounded bg-white p-2 text-[#4E0684]">
            <Search size={18} />
            <span>Find Jobs</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
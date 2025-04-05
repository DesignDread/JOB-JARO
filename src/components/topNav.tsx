"use client"; // Add this for client components in Next.js App Router

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.svg"
import one from "../../public/one.svg"
import bell from "../../public/bell.svg"
import message from "../../public/Messagenav.svg"
import Profile from "../../public/profile.svg"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="py-3 px-4 lg:px-6 flex items-center justify-between  relative z-50" >
            {/* Logo and Brand */}
            <div className="flex items-center">
                <div className="flex items-center mr-4">
                    <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center">
                        <Image 
                            src={Logo}
                            alt="Logo" 
                            width={40} 
                            height={40} 
                            className="object-contain" 
                        />
                    </div>
                    <span className="ml-2 font-bold text-lg">JOBJARO</span>
                </div>
            </div>

            {/* Hamburger Menu for mobile + tablet */}
            <div className="lg:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Nav links for desktop only */}
            <div className="hidden lg:flex space-x-8">
                <Link href="/" className="text-gray-800 hover:text-purple-700">Home</Link>
                <Link href="/job-post" className="text-gray-800 hover:text-purple-700">Job Post</Link>
                <Link href="/my-space" className="text-purple-700 font-medium">My Space</Link>
                <Link href="/about-us" className="text-gray-800 hover:text-purple-700">About Us</Link>
                <Link href="/top-candidates" className="text-gray-800 hover:text-purple-700">Top Candidates</Link>
            </div>

            {/* Right section - Always visible */}
            <div className="flex items-center ml-4">
                <Image src={message} alt="Messages" width={24} height={24} className="ml-4" />
                <Image src={bell}
                 alt="Notifications" width={24} height={24} className="ml-4" />
                <span className="ml-2 text-sm text-gray-600 hidden sm:inline">Notifications</span>
                <Image src={one} alt="1" width={16} height={16} className="ml-2" />
                <div className="w-8 h-8  overflow-hidden ml-4">
                    <Link href={"/your-cv"}>
                    <Image 
                        src={Profile}
                        alt="Profile" 
                        width={32} 
                        height={32} 
                        className="object-cover" 
                    />
                    </Link>
                    
                </div>
            </div>

            {/* Mobile/Tablet dropdown menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md px-4 py-4 lg:hidden z-40">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-gray-800 hover:text-purple-700 text-left">Home</Link>
                        <Link href="/job-post" className="text-gray-800 hover:text-purple-700 text-left">Job Post</Link>
                        <Link href="/my-space" className="text-purple-700 font-medium text-left">My Space</Link>
                        <Link href="/about-us" className="text-gray-800 hover:text-purple-700 text-left">About Us</Link>
                        <Link href="/top-candidates" className="text-gray-800 hover:text-purple-700 text-left">Top Candidates</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
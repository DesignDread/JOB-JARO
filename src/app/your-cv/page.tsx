"use client";
import React, { useState } from "react";
import Image from "next/image";
import flag from "../../../public/flag.svg";
import resume from "../../../public/resume.svg";
import at from "../../../public/arrowTop.svg";
import resumepic from "../../../public/resumepic.svg";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import s1 from "../../../public/section1.svg";
import s2 from "../../../public/section2.svg";
import s3 from "../../../public/section3.svg";
import s4 from "../../../public/section4.svg";
import s5 from "../../../public/section5.svg";
import s6 from "../../../public/section6.svg";
import s7 from "../../../public/section7.svg";
function Page() {
  const pattern = ["Choose Template", "Enter Your Details", "Download Resume"];
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });

  const moreSections = [
    {
      img: s1,
      section: "Custom Section",
    },
    {
      img: s2,
      section: "Courses",
    },
    {
      img: s3,
      section: "Extra-curricular Activities",
    },
    {
      img: s4,
      section: "Internships",
    },
    {
      img: s5,
      section: "Hobbies",
    },
    {
      img: s6,
      section: "Languages",
    },
    {
      img: s7,
      section: "References",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex gap-3 ">
        <div className="w-[60%] mx-auto flex gap-4">
          {pattern.map((item, index) => (
            <>
              <div className="bg-[#571BAD] text-white flex justify-center items-center h-[40px] w-[40px] rounded-full">
                {index + 1}
              </div>
              <p className="text-[20px] my-auto">{item}</p>
            </>
          ))}
        </div>
      </div>
      <div className="flex gap-3 h-screen mt-10">
        {/* form  */}
        <div className="w-1/3 h-full flex overflow-y-scroll flex-col">
          {/* file name and language choice  */}
          <div>
            <h1 className="text-center text-[38px] font-[700]">Untitled</h1>
            <div className="flex gap-2 w-fit mx-auto">
              <Image src={flag} alt="lang" className="w-5 h-5 rounded-full" />
              <h3>English</h3>
            </div>
          </div>
          {/* score  */}
          <div className="border-b-2 flex gap-2 border-[#52B47A] p-2">
            <h1 className="text-center w-fit  text-[16px] font-[700] px-2 text-white bg-[#52B47A]">
              100
            </h1>
            <p>Your resume score</p>
          </div>

          {/* form  */}
          <form>
            <div className="flex gap-3 mt-5 ">
              <Image
                src={resumepic}
                alt="profilepic"
                className="w-20 h-20 object-cover rounded-full"
              />
              <p className="text-[16] my-auto">Upload Photo</p>
            </div>
            <div className=" pl-5 flex flex-col gap-2 mt-5">
              <p className="text-[22px]">Job Title</p>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-[90%] h-[50px] bg-white rounded-[10px] p-2"
              />
            </div>
            <div className=" pl-5 flex flex-col gap-2 mt-5">
              <p className="text-[22px]">Full Name</p>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-[90%] h-[50px] bg-white rounded-[10px] p-2"
              />
            </div>
            <div className=" pl-5 flex flex-col gap-2 mt-5">
              <p className="text-[22px]">Last Name</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-[90%] h-[50px] bg-white rounded-[10px] p-2"
              />
            </div>
            <div className=" pl-5 flex flex-col gap-2 mt-5">
              <p className="text-[22px]">Email</p>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[90%] h-[50px] bg-white rounded-[10px] p-2"
              />
            </div>
            <div className=" pl-5 flex flex-col gap-2 mt-5">
              <p className="text-[22px]">Phone Number</p>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-[90%] h-[50px] bg-white rounded-[10px] p-2"
              />
            </div>
            <div className=" pl-5 flex flex-col gap-2 mt-5">
              <p className="text-[22px]">Country</p>
              <input
                type="text"
                name="phone"
                value={formData.country}
                onChange={handleChange}
                className="w-[90%] h-[50px] bg-white rounded-[10px] p-2"
              />
            </div>
            <div className=" pl-5 flex flex-col gap-2 mt-5">
              <p className="text-[22px]">City</p>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-[90%] h-[50px] bg-white rounded-[10px] p-2"
              />
            </div>
          </form>

          <div className="flex flex-col gap-4 mt-5">
            {[
              "Job Title",
              "Employment History",
              "Education",
              "Website & Social Links",
              "Skills",
            ].map((item, index) => (
              <div
                key={index}
                className="border-b-2 pb-3 border-[#1A1A1A1A] flex justify-between"
              >
                <p className="text-[22px] pl-3 font-[500]">{item}</p>
                <button className="bg-[#571BAD] text-white flex justify-center items-center h-[35px] w-[35px] rounded-full">
                  <ChevronDown className="text-[15px]" />
                </button>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-[22px] font-[700] text-left">Add Section</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {moreSections.map((item, index) => (
                <div key={index} className="flex gap-2 p-2 rounded-[10px]">
                  <Image
                    src={item.img}
                    alt="section"
                    className="w-[33px] h-[33px] object-contain"
                  />
                  <p className="text-[15px]">{item.section}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Download  */}
        <div className="P-2 w-3/5 h-fit flex bg-white p-2 flex-col gap-4">
          <div className="flex mx-auto w-fit gap-6">
            <div className="bg-[#571BAD] text-white flex justify-center items-center h-[35px] w-[35px] p-2 rounded-full">
              <Image
                src={at}
                alt="arrow-top"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-[20px] my-auto text-[#571BAD] underline">
              Check your Jobjaro Profile
            </h1>
            <Link
              href="/"
              className="bg-[#EBF2FA] p-2 rounded-full flex justify-center text-[22px] items-center text-[#571BAD]"
            >
              Download PDF
            </Link>
            <Link
              href="/"
              className="bg-[#571BAD] p-2 rounded-full flex justify-center text-[22px] px-5 items-center text-white"
            >
              . . .
            </Link>
            {/* <Link /> */}
          </div>
          <Image
            src={resume}
            alt="resumt"
            className="w-full h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;

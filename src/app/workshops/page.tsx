"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import workshop from "../../../public/workshop.svg";
import m1 from "../../../public/resumepic.svg";
import m2 from "../../../public/girls.svg";
import m3 from "../../../public/mentor.svg";
import m4 from "../../../public/mentor2.svg";
import m5 from "../../../public/mentor3.svg";
import w1 from "../../../public/workshop1.svg";
import w2 from "../../../public/workshop2.svg";
import w3 from "../../../public/workshop3.svg";
function page() {
  const [search, setSearch] = useState("");
  const mentors = [m1, m2, m3, m4, m5, m1, m2, m3, m4, m5];
  const workshops = [
    {
      img: w1,
      heading: "Lorem Ipsum",
      speaker: "By John",
      speakerimg: m1,
      register: "/",
      join: "/",
    },
    {
      img: w2,
      heading: "Lorem Ipsum",
      speaker: "By John",
      speakerimg: m1,
      register: "/",
      join: "/",
    },
    {
      img: w3,
      heading: "Lorem Ipsum",
      speaker: "By John",
      speakerimg: m1,
      register: "/",
      join: "/",
    },
  ];
  return (
    <div className="pl-4">
      <h1 className="text-left w-[225px] text-[22px]">WorkShops</h1>
      <div className="bg-white  rounded-[10px] mt-5 border-2 border-[#B3B3B3] p-2 w-fit flex gap-3">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Anything"
          className="p-4 w-[200px] text-[#4E0684] h-[25px] "
        />
        <Search className="text-[#4E0684] my-auto h-6 w-6"></Search>
      </div>

      <div className="bg-[#233C4C] h-[408px] relative flex justify-between rounded-[60px] mt-5 p-4">
        <div className="pl-8">
          <h1 className="text-white text-[84px] font-[700]">
            Workshops Of This <br />
            Week
          </h1>
          <div className="flex gap-6 mt-6 ">
            <Link
              href="/"
              className="bg-white text-[18px] font-[600] rounded-full flex justify-center items-center px-8 py-5 "
            >
              Join Now
            </Link>
            <Link
              href="/"
              className="bg-white text-[18px] font-[600] rounded-full flex justify-center items-center px-8 py-5 "
            >
              Register
            </Link>
          </div>
        </div>
        <Image
          src={workshop}
          alt="awesome-workshops"
          className=" absolute w-auto h-auto right-10 -top-[95px] obect-cover"
        ></Image>
      </div>

      {/* //top mentors  */}
      <div className="mt-10 ">
        <h1 className="text-left w-[225px] text-[22px]">Top Mentors</h1>
        <div className="flex gap-4">
          {mentors.map((item, index) => (
            <Image
              src={item}
              alt="mentor-image"
              className="w-20 h-20 object-contain"
            />
          ))}
        </div>
      </div>

      {/* upcoming workshops  */}
      <div className="my-10">
        <h1 className="text-left text-[22px]">Upcoming Workshops</h1>
        <div className="grid mt-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
          {workshops.map((item, index) => {
            return (
              <WorkshopCard
                img={item.img}
                heading={item.heading}
                speaker={item.speaker}
                speakerimg={item.speakerimg}
                register={item.register}
                join={item.join}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const WorkshopCard = ({
  img,
  heading,
  speaker,
  speakerimg,
  register,
  join,
}: any) => {
  return (
    <div className="border-2 rounded-[20px] border-[#B3B3B3] bg-white p-1">
      <div className="w-[95%] mx-auto ">
        <Image
          src={img}
          alt="workshop-image"
          className="w-full h-[200px] mt-2 object-cover rounded-[10px]"
        />
        <div className="">
          <h1 className="text-[20px] font-[700] text-left mt-2">{heading}</h1>
          <div className="flex gap-2 mt-2">
            <Image
              src={speakerimg}
              alt="speaker-image"
              className="w-[33px] h-[33px] object-contain"
            />
            <h1 className="text-[15px] my-auto">{speaker}</h1>
          </div>

          <div className="flex gap-4 w-fit mx-auto my-4">
            <Link
              href={register}
              className="bg-white border-2 rounded-full px-4 py-2 border-[#571BAD] text-[#571BAD]"
            >
              Register
            </Link>
            <Link
              href={join}
              className="bg-[#EBF2FA] flex justify-center items-center px-4 py-2 rounded-full text-[#571BAD]"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;

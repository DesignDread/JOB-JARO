"use client"
import React from 'react';
import { MapPin, ExternalLink, Edit2, ChevronDown, Plus, Eye } from 'lucide-react';
import Image from 'next/image';
import Girl from "../../../public/girls.svg"
import Edit from "../../../public/Edit.svg"
import Flower from "../../../public/Flower.svg"
import FilledBag from "../../../public/FilledBag.svg"
import OutlineBag from "../../../public/outlineBag.svg"
import Calander from "../../../public/Calander.svg"
import {Input} from "@/components/ui/input"
import Video from "../../../public/video.svg"
import Note from "../../../public/note.svg"

const ProfilePage = () => {
  return (
    <div className="bg-slate-100 p-4 min-h-screen font-sans">
      {/* Header with profile info */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
              <Image src={Girl} alt="Profile" className="rounded-full" />
            </div>
          </div>
          <div>
            <h1 className="font-medium text-lg">Jane Foster</h1>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className=" rounded px-3 py-1 text-[#4E0684] text-sm flex items-center gap-1">
        
            <Image src={Video} alt=''></Image>
            <span>Add Video Resume</span>
          </button>
          <button className=" rounded px-3 text-[#4E0684] py-1  text-sm flex items-center gap-1">
          <Image src={Note} alt=''></Image>
          <span className='text-[#4E0684]'>View Resume</span>
          </button>
        </div>
      </div>

      {/* Profile Info and Progress */}
      <div className="flex gap-4 mb-4">
        {/* About me section */}
        <div className="bg-[#F1DFFF] max-w-[650px] p-8 rounded-lg flex-1">
          <h2 className="font-medium pb-4 lg:text-[26px]">About me</h2>
          <h3 className="font-medium text-sm pb-2 lg:text-[22px]">UX Design Specialist and Teacher</h3>
          <p className="text-xs lg:text-[18px] mt-1">
            Brings 10+ years of comprehensive UX/UI design expertise to the table. Specializes in devising intuitive user interfaces that reduce product abandonment trends through the growth lifecycle by business stakeholders... Designs and technical debt represent soaring costs for countless businesses +
            <span className="text-[#4E0684]"> Read more</span>
          </p>
        </div>

        {/* Profile completion */}
        <div className="bg-white p-8 rounded-lg relative flex flex-col gap-6 flex-1">
        <div className="w-full rounded-full overflow-hidden  h-[35px] bg-gray-300 relative">
                <div className="h-full  bg-[#4E0684]" style={{ width: '25%' }}></div>
            </div>
            <div className='flex gap-4' >
          
           
          <div className="flex flex-col justify-center">
            <div className="relative">
                <span className="text-3xl lg:text-[115px] font-medium">10%</span>
              
              <p className="text-xs text-center lg:text-[16px] mt-1">of your profile is complete</p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-medium lg:text-[24px]">Complete your profile to apply for jobs!</h2>
            <p className="text-xs mt-1 lg:text-[14px]">
              To learn more about building a great profile, check out our
              <span className="text-[#4E0684]"> guide to success</span>. Cover all your job fit factors to make
              sure employers can find you. The more complete your profile is, the 
              more likely you'll get hired.
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white p-8 border border-[#B3B3B3] rounded-lg mb-4 relative">
        <div className="flex justify-between">
          <h2 className="font-medium lg:text-[24px]">Skills</h2>
          {/*  <Image src={Edit} alt=''></Image>
 */}
          <Image src={Edit} alt=''></Image>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {['Product Design', 'User Experience', 'User Research', 'Wireframing', 'Web'].map((skill) => (
            <span key={skill} className="bg-[#D2F4E6] lg:text-[16px] text-teal-700 text-xs px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {Array(15).fill(null).map((_, i) => (
            <span key={i} className="bg-[#EBF2FA] text-gray-700 text-xs px-3 py-1 lg:text-[16px] rounded-full truncate w-fit">
              {['Product Design', 'User Experience', 'User Research', 'Wireframing', 'Web'][i % 5]}
            </span>
          ))}
        </div>
      </div>

      {/* Working with Section */}
      {/* <div className="bg-white p-4 rounded-lg mb-4 relative">
        <div className="flex justify-between">
          <h2 className="font-medium">Currently working with...</h2>
           <Image src={Edit} alt=''></Image>

        </div>
        <div className="flex gap-2 mt-3">
          <div className="border rounded-lg p-3 flex items-center justify-between w-40">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-red-500 text-xs">*</span>
              </div>
              <span className="text-sm">Zapier</span>
            </div>
            <div className="text-green-500">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex gap-4 mb-4">
        
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-4">
        <div className="bg-white  border border-[#B3B3B3] shadow-md p-8 lg:text-[24px] rounded-lg relative">
            <div className="flex justify-between">
              <h2 className="font-medium pt-2">Currently working with...</h2>
              <Image src={Edit} className='' alt=''></Image>
              </div>
            <div className="flex flex-col gap-3 mt-3">
             
                <div  className="border bg-[#DDF2AF] rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src={Flower} alt=''></Image>
                    <span className="text-sm text-[#7C984E] font-medium lg:text-[16px]">Zapier </span>
                  </div>
                  <ExternalLink size={16} className="text-gray-600" />
                </div>
            
            </div>
          </div>
          {/* Certificates Section */}
          <div className="bg-white  border border-[#B3B3B3] shadow-md p-8 lg:text-[24px] rounded-lg relative">
            <div className="flex justify-between">
              <h2 className="font-medium">Certificates</h2>
               <Image src={Edit} alt=''></Image>

            </div>
            <div className="flex flex-col gap-3 mt-3">
              {Array(2).fill(null).map((_, i) => (
                <div key={i} className="flex gap-2 bg-[#FFFCEB] p-3 items-center">
                    <Image src={Flower} alt=''></Image>
                    <span className="text-sm lg:text-[24px]">Google UX Designer</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="bg-white  border border-[#B3B3B3] p-4 rounded-lg relative">
            <div className="flex justify-between">
              <h2 className="font-medium">Portfolio</h2>
               <Image src={Edit} alt=''></Image>

            </div>
            <div className="flex flex-col gap-3 mt-3">
              {Array(2).fill(null).map((_, i) => (
                <div key={i} className="border rounded-lg bg-[#EBF2FA] p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className='bg-white p-4 rounded-full'>
                    <Image src={FilledBag} alt="" className='h-8 w-8' ></Image>
                    </div>
                    <span className="text-sm lg:text-[24px]">Website {i + 1}</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-600" />
                </div>
              ))}
            </div>
          </div>
          
        </div>





        {/* Right column */}
        <div className="flex-[2] flex flex-col gap-4">
          {/* Work History Section */}
          <div className="bg-white  border border-[#B3B3B3] p-8 rounded-lg relative">
            <div className="flex justify-between">
              <h2 className="font-medium lg:text-[24px]">Work History</h2>
               <Image src={Edit} alt=''></Image>

            </div>
            <div className="flex flex-col gap-4 mt-3">
              {Array(3).fill(null).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <div className=" bg-[#FAF7FE] p-2 w-[55px] h-[55px] rounded flex items-center justify-center flex-shrink-0">
                    <Image src={OutlineBag} alt=''></Image>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm lg:text-[26px] ">Co-Founder, Partner, Head of Design</h3>
                    <div className="flex items-center text-xs lg:text-[16px]  mt-1">
                      <span className='font-bold'>Simply Design</span>
                      <span className="mx-2">•</span>
                      <span><Image src={Calander} alt='' className='inline'></Image> Oct 2019 - Present</span>
                    </div>
                <div className="w-full border-t border-gray-300 my-4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white  border border-[#B3B3B3] p-4 rounded-lg relative">
            <div className="flex justify-between">
              <h2 className="font-medium lg:text-[24px]">Education</h2>
               <Image src={Edit} alt=''></Image>

            </div>
            <div className="flex flex-col gap-4 mt-3">
            <div  className="flex gap-3">
                  <div className=" bg-[#FAF7FE] p-2 w-[55px] h-[55px] rounded flex items-center justify-center flex-shrink-0">
                    <Image src={OutlineBag} alt=''></Image>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm lg:text-[26px] ">Master’s degree in Information Technology</h3>
                    <div className="flex items-center text-xs lg:text-[16px]  mt-1">
                      <span className='font-bold'>UILS</span>
                      <span className="mx-2">•</span>
                      <span><Image src={Calander} alt='' className='inline'></Image> Oct 2019 - Present</span>
                    </div>
                <div className="w-full border-t border-gray-300 my-4"></div>
                  </div>
                </div>
            
              <div  className="flex gap-3">
                  <div className=" bg-[#FAF7FE] p-2 w-[55px] h-[55px] rounded flex items-center justify-center flex-shrink-0">
                    <Image src={OutlineBag} alt=''></Image>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm lg:text-[26px] ">Co-Founder, Partner, Head of Design</h3>
                    <div className="flex items-center text-xs lg:text-[16px]  mt-1">
                      <span className='font-bold'>Simply Design</span>
                      <span className="mx-2">•</span>
                      <span><Image src={Calander} alt='' className='inline'></Image> Oct 2019 - Present</span>
                    </div>
                <div className="w-full border-t border-gray-300 my-4"></div>
                  </div>
                </div>
            </div>
          </div>

          {/* Profile Details Form */}
          <div className=" p-4 rounded-lg">
            <h2 className="font-medium lg:text-[32px] mb-2">Add Remaining Details To Your Profile <span className="text-xs lg:text-[20px]">(Helps You Boost Profile Strength!)</span></h2>
            
            {/* Form fields */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm block mb-1 lg:text-[20px] ">Availability</label>
                <select className="w-full border bg-white rounded-md p-2 text-gray-400">
                  <option>Not Specified</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm block mb-1 lg:text-[20px]">Preferred Work Type</label>
                <select className="w-full border bg-white rounded-md p-2 text-gray-400">
                  <option>Not Specified</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm block mb-1 lg:text-[20px]">Preferred Work Mode</label>
                <select className="w-full border bg-white rounded-md p-2 text-gray-400">
                  <option>Not Specified</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm block mb-1 lg:text-[20px]">Preferred Locations</label>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="+ Location" 
                    className="w-full border rounded-md p-2 pl-8" 
                  />
                  <MapPin size={20} fill='#4E0684' className="absolute left-3 top-2 text-white" />
                </div>
                <button className="bg-[#4285F4] rounded-full lg:text-[20px] text-white text-xs  py-1 px-3 mt-2">
                  + New Location
                </button>
              </div>
              
              <div>
                <label className="text-sm block mb-1 lg:text-[20px]">Right To Work</label>
                <p className="text-xs mb-1 lg:text-[20px]">Specify Your Residence Or Visa</p>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="+ Location" 
                    className="w-full border rounded-md p-2 pl-8" 
                  />
                  <MapPin size={20} fill='#4E0684' className="absolute left-3 top-2 text-white" />
                  </div>
                <div className="flex justify-between items-center mt-2">
                  <button className="bg-[#4285F4] rounded-full lg:text-[20px] text-white text-xs  py-1 px-3">
                    + New Location
                  </button>
                  <Edit2 size={16} className="text-gray-400" />
                </div>
              </div>
              
              <div>
                <label className="text-sm block mb-1 lg:text-[20px]">Salary Expectations</label>
                <select className="w-full border bg-white rounded-md p-2 text-gray-400">
                  <option>Not Specified</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm block mb-1 lg:text-[20px]">Classification of Interest</label>
                <Input 
                  type="text" 
                  placeholder="Add" 
                  className="w-full border rounded-md p-2" 
                />
                <button className="bg-[#4285F4] rounded-full lg:text-[20px] text-white text-xs py-1 px-3 mt-2">
                  + Primary Interest
                </button>
              </div>
              
              <div>
                <label className="text-sm block mb-1 lg:text-[20px]">Approachability</label>
                <select className="w-full border bg-white rounded-md p-2 text-gray-400">
                  <option>Online</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
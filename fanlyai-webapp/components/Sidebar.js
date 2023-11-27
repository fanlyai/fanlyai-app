import { Outfit, Roboto } from "next/font/google";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { IoMdDocument } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";
import Link from "next/link";
import Image from 'next/image'

const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default function Sidebar({ userInfo }) {
  const [section, setSection] = useState("");

  const sectionStyle = (currentSection) =>
    `flex space-x-3 cursor-pointer items-center hover:bg-gray-800 px-[10px] py-[12px] rounded-xl hover:text-white ${section === currentSection ? 'bg-gray-800 text-white ' : 'text-[#868E96]'}`;

  return (
    <div
      className={`h-full border-r fixed top-0 left-0 border-gray-900 flex w-[80px] md:min-w-[300px] flex-col px-4 justify-between bg-black text-black p-4 ${outfit.className} `}
    >
      {/* Logo */}
      <div>
        <div className=" flex flex-col justify-center items-center">
          {/* Replace 'LogoSrc' with your actual logo source */}
         <Image src="/vuzzAIlogo.png" width={100} height={100}></Image>
          <div className="w-full mt-4 bg-slate-800 h-[1px]"></div>
        </div>

        {/* Sections */}
        <div
          className={`${roboto.className} text-xl pt-4 tracking-wide leading-6 text-[#868E96]`}
        >
          <ul className="space-y-2 flex flex-col">
            <Link href="/chatbots">
            <div className={sectionStyle('Chatbots')} onClick={() => setSection('Chatbots')}>
              <FaRobot  className="text-white"/>

              <li className="md:block hidden">Chatbots</li>
            </div></Link>
            <Link href="/vuzzbot">
            <div className={sectionStyle('Fanly Chat')} onClick={() => setSection('Fanly Chat')}>
            <IoChatboxOutline  className="text-white"/>
            <li className="md:block hidden">
              Vuzz Chat
            </li></div></Link>
            <Link href="/featured-chatbots">
            <div className={sectionStyle('Featured Chatbots')} onClick={() => setSection('Featured Chatbots')}>
            <GrResources className="text-white"/>
            <li className="md:block hidden">
              Featured Chatbots
            </li>
            </div></Link>
            <Link href="/resources">
            <div className={sectionStyle('Resources')} onClick={() => setSection('Resources')}>
            <IoMdDocument className="text-white" />

            <li className="md:block hidden">
              Resources
            </li></div></Link>
            <Link href="/editor">
            <div className={sectionStyle('Fanly Editor')} onClick={() => setSection('Fanly Editor')}>
            <FaBoltLightning className="text-white"/>

            <li className="md:block hidden">
              Vuzz Editor
            </li></div></Link>
          </ul>
        </div>
      </div>

      {/* User Info */}
      <div className=" cursor-pointer">
      <div className="w-full  mb-4 bg-slate-800 h-[1px]"></div>

        <div className="flex  items-center">
          {/* You can add an avatar or user icon here */}
          <div className="rounded-full w-12 h-12 bg-blue-400"></div>
          <div className="text-white hidden md:block ml-4">
            <p>{userInfo.name}</p>
            <p className="text-gray-400 text-sm">{userInfo.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

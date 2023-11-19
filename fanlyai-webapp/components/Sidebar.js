import { Outfit, Roboto } from "next/font/google";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { IoMdDocument } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";

const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default function Sidebar({ userInfo }) {
  const [section, setSection] = useState("");

  return (
    <div
      className={`h-screen flex flex-col px-8 justify-between bg-white text-black p-4 ${outfit.className} `}
    >
      {/* Logo */}
      <div>
        <div className="mb-6 flex flex-col justify-center items-center">
          {/* Replace 'LogoSrc' with your actual logo source */}
          <p className=" text-4xl text-black">
            fanly<span className="text-[#C80FB0]">AI</span>
          </p>
          <div className="w-full mt-4 bg-slate-400 h-[1px]"></div>
        </div>

        {/* Sections */}
        <div
          className={`${roboto.className} text-xl tracking-wide leading-6 text-[#868E96]`}
        >
          <ul className="space-y-2">
            <div className="flex space-x-3 cursor-pointer items-center hover:bg-gray-200 p-4 rounded-full hover:text-black">
              <FaRobot  className="text-[#C80FB0]"/>

              <li>Chatbots</li>
            </div>
            <div className="flex space-x-3 cursor-pointer items-center hover:bg-gray-200 p-4 rounded-full hover:text-black">
            <IoChatboxOutline  className="text-[#C80FB0]"/>
            <li>
              Fanly Chat
            </li></div>
            <div className="flex space-x-3 cursor-pointer items-center hover:bg-gray-200 p-4 rounded-full hover:text-black">
            <GrResources className="text-[#C80FB0]"/>
            <li >
              Featured Chatbots
            </li>
            </div>
            <div className="flex space-x-3 cursor-pointer items-center hover:bg-gray-200 p-4 rounded-full hover:text-black">
            <IoMdDocument className="text-[#C80FB0]" />

            <li >
              Resources
            </li></div>
            <div className="flex space-x-3 cursor-pointer items-center hover:bg-gray-200 p-4 rounded-full hover:text-black">
            <FaBoltLightning className="text-[#C80FB0]"/>

            <li >
              Fanly Editor
            </li></div>
          </ul>
        </div>
      </div>

      {/* User Info */}
      <div>
        <div className="flex items-center">
          {/* You can add an avatar or user icon here */}
          <div className="rounded-full w-12 h-12 bg-blue-400"></div>
          <div className="ml-4">
            <p>{userInfo.name}</p>
            <p className="text-gray-400 text-sm">{userInfo.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

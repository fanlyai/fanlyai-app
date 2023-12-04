import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Outfit, Roboto } from "next/font/google";
import { useState } from "react";
const roboto = Roboto({ weight: "300", subsets: ["latin"] });
const roboto4 = Roboto({ weight: "400", subsets: ["latin"] });


const Home: React.FC = () => {
  return (
    <div
      className={`flex w-full  h-screen overflow-hidden bg-black flex-col items-center justify-between  ${roboto.className}`}
    >
      <div className="absolute flex top-36 md:top-72 opacity-80 flex-col space-y-1">
        <div className="w-screen h-[1px]  bg-white"></div>
        <div className="w-screen h-[2px] bg-white"></div>
        <div className="w-screen h-[3px] bg-white"></div>
        <div className="w-screen h-[4px] bg-white"></div>
        <div className="w-screen h-[5px] bg-white"></div>
        <div className="w-screen h-[6px] bg-white"></div>
        <div className="w-screen h-[7px] bg-white"></div>
        <div className="w-screen h-[8px] bg-white"></div>
        <div className="w-screen h-[9px] bg-white"></div>
        <div className="w-screen h-[10px] bg-white"></div>
        <div className="w-screen h-[12px] bg-white"></div>
        <div className="w-screen h-[14px] bg-white"></div>
        <div className="w-screen h-[16px] bg-white"></div>
        <div className="w-screen h-[18px] bg-white"></div>
        <div className="w-screen h-[20px] bg-white"></div>
        <div className="w-screen h-[22px] bg-white"></div>
        <div className="w-screen h-[24px] bg-white"></div>
        <div className="w-screen h-[30px] bg-white"></div>
        <div className="w-screen h-[36px] bg-white"></div>
        <div className="w-screen h-[40px] bg-white"></div>
        <div className="w-screen h-[46px] bg-white"></div>
        <div className="w-screen h-[52px] bg-white"></div>
        <div className="w-screen h-[58px] bg-white"></div>
        <div className="w-screen h-[70px] bg-white"></div>
      </div>
      <div className="absolute z-0 left-0 h-full w-full overflow-hidden ">
        <div className="absolute left-1/2 top-[50px] md:top-[50px] ml-[-2000px] h-[4000px] w-[4000px] rounded-full bg-transparent shadow-[0px_10px_100px_0px_rgba(255,255,255)] "></div>
      </div>
      <div className={`text-5xl flex flex-col items-center justify-center ${roboto.className} text-black`}>
        <Image
        alt='logo'
          src="/vuzzAIlogo.png"
          width={1500}
          height={200}
          className="md:w-[100px] w-[100px]"
        ></Image> 
      </div>
     
     
    </div>
  );
};

export default Home;

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

interface ChatbotsProps{
  image? :string,
  name: string,
  user?: boolean,
  assistantId?:string,
  role?:string,
  description?:string
  onClick?: () => void;
}


  

const ChatbotEdit : React.FC<ChatbotsProps> = ({ image, name,user,assistantId,role,description,onClick }) =>
{


    return (
      <div className={`bg-[#3f3f3f] p-4   justify-center md:justify-between  h-full md:px-4 py-2 border border-[#575757] rounded-lg flex md:flex-row flex-col items-center`}>
         
         <div className="flex  md:space-x-2 ">
            
         <img className=" object-cover  md:min-w-[48px] md:h-12 w-12 h-12 object-fit  rounded-full overflow-hidden border-2 border-[#5f5f5f]"  src={!image ? "vuzzAIlogo.png" : image} alt={name} />
       
       
        <div className="flex flex-col justify-start ">
         <div className="text-white md:text-sm text-sm py-1 ">{name}</div>
       
        <p className="text-[#afafaf] uppercase text-xs md:text-xs break-all">{role}</p>
       
       {user && <button className="px-4 mt-2 py-2 bg-[#171717] text-sm rounded-full">Talk With Me !</button>}
      </div> </div>   
      <div onClick={onClick} className="text-red-500  cursor-pointer px-[2px] py-[1px] rounded-lg">X</div></div>
    );
  }

  export default ChatbotEdit
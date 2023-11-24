import Select from "@/components/Select";
import Input from "@/components/Input";

import { Outfit, Roboto } from "next/font/google";
import Resources from "@/containers/Chatbots/Resources";
import Configuration from "@/containers/Chatbots/Configuration";
import Customization from "@/containers/Chatbots/Customization";
import Integration from "@/containers/Chatbots/Integration";

const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export default function Add(){
    const options = [
        // Add your options here, for example:
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
    ];
    return(
        <main className=" bg-[#0f0f0f] ml-[80px] md:ml-[300px] text-gray-200 w-full ">
            <p className={`text-4xl  ${roboto.className}`}>Create a Chatbot</p>
            
            <div className="h-full md:block hidden w-[4px] z-0 bg-white absolute mt-8 ml-[38px]"></div>
            <Resources></Resources>
            <div className="h-full  md:block hidden w-[4px] z-0 bg-white absolute  ml-[38px]"></div>
            <Configuration></Configuration>
            <div className="h-full  md:block hidden min-h-[1250px] w-[4px] z-0 bg-white absolute  ml-[38px]"></div>
            <Customization></Customization>
            
            <Integration></Integration>
            <div className="w-full  flex justify-center items-center">
            <button className={`bg-white rounded-3xl py-2 px-6 text-xl text-black  ${roboto.className}`}>Create</button>
            </div>
           
        </main>
    )
}
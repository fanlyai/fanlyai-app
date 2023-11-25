import Switch from "../..//components/Switch";

import { Outfit, Roboto } from "next/font/google";
import Image from "next/image";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const roboto4 = Roboto({ weight: "400", subsets: ["latin"] });
import { FaRegEye } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

export default function Integration() {
  return (
    <div className="flex  flex-col py-8 md:px-6 text-gray-300 w-full justify-center items-start">
      <div className="flex justify-start w-full items-center">
        <div className="h-8 w-8 z-10 bg-white text-black  rounded-full flex justify-center items-center">
          <FaRegEye size={24} />
        </div>
        <p className={`${roboto4.className}  ml-6 text-2xl`}>
          Third party integrations
        </p>
      </div>
      <div className="px-4 ml-8 flex w-full flex-col py-8">
        <div className="flex space-x-4 items-center">
          <Image
            src="/vuzzlogo.png"
            width={60}
            height={60}
            className="justify-center items-center rounded-full"
          ></Image>
          <Switch
            title="vuzz.app"
            desc="Connect your chatbot to your vuzz account!"
          ></Switch>
        </div>
        <div  className="flex space-x-4 items-center">
            <TbWorld size={60}></TbWorld>
        <Switch
          title="Website"
          desc="Add your chatbot to your own website!"
        ></Switch></div>
      </div>
    </div>
  );
}

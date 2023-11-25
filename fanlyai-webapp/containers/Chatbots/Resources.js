import Input from "../../components/Input";
import { Outfit, Roboto } from "next/font/google";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const roboto4 = Roboto({ weight: "400", subsets: ["latin"] });
import { IoDocumentsOutline } from "react-icons/io5";

export default function Resources() {
  return (
    <div className="flex flex-col py-8 md:px-6 text-gray-300 w-full justify-center items-start">
      <div className="flex justify-start w-full items-center">
        <div className="h-8 w-8 z-10 bg-white text-black  rounded-full flex justify-center items-center">
          <IoDocumentsOutline size={24}/>
        </div>
        <p className={`${roboto4.className}  ml-6 text-2xl`}>
          Resources to train your chatbot
        </p>
      </div>
      <div className="px-12 flex w-full flex-col py-8">
        <p className={`${roboto4.className} text-white py-2`}>Select resource(s)</p>
        <div className="w-full p-4 rounded-2xl flex flex-col min-h-[250px] border border-[#343434]">
          <div className="flex space-x-2">
            <Input  placeholder="Filter your resources..."></Input>
            <button className="px-4  whitespace-nowrap bg-[#343434] rounded-xl py-1">Upload New</button></div>
            <div className="w-full mt-4 bg-[#343434] h-[1px]"></div>
        </div>
      </div>
    </div>
  );
}

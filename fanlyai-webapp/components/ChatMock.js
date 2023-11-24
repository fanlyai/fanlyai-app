import { Outfit, Roboto } from "next/font/google";
import Input from "./Input";
const roboto = Roboto({ weight: "300", subsets: ["latin"] });
export default function ChatMock() {
  return (
    <div
      className={`w-full p-4 flex space-x-2 rounded-xl ${roboto.className} bg-[#343434] h-[600px]`}
    >
      <div className="w-1/3 rounded-2xl flex flex-col items-center bg-[#0f0f0f] h-full">
        <div className=" my-4 border border-[#515151] w-[90%] flex rounded-2xl text-sm justify-center items-center px-8 py-1 bg-[#343434] ">
          New
        </div>
        <div className="w-[90%] h-[1px] bg-gray-700 mx-8"></div>
        <div className=" my-2 text-xs border border-[#515151] w-[90%] flex rounded-lg justify-center items-center px-4 py-1 bg-[#343434] ">
          Conversation 2
        </div>
        <div className="  border text-xs border-[#515151] w-[90%] flex rounded-lg justify-center items-center px-4 py-1 bg-[#343434] ">
          Conversation 2
        </div>
      </div>
      <div className="w-2/3 rounded-2xl flex flex-col bg-[#0f0f0f] h-full">
        <div className="w-full flex text-xl items-center py-2 justify-center">
          Name
        </div>
        <div className="w-full flex justify-end">
          <div className="bg-[#515151] text-xs w-[60%] mt-4 mr-2 rounded-tr-xl p-2 rounded-l-xl">
            This is a placeholder message from the user, demonstrating how a
            user would interact with the chatbot in a typical conversation.
          </div>
        </div>
        <div className="w-full flex justify-start">
          <div className="h-8 w-8 bg-white rounded-full ml-2"></div>
          <div className="bg-[#515151] text-xs w-[60%] mt-4 ml-2 rounded-bl-xl p-2 rounded-r-xl">
            This is a placeholder message from the user, demonstrating how a
            user would interact with the chatbot in a typical conversation.
          </div>
        </div>
        <div className="flex items-end h-full">
          <input className="w-full rounded-3xl bg-[#0f0f0f] border text-sm placeholder:text-[#3f3f3f] border-[#3f3f3f]  borde p-2" placeholder="Type your message"></input>
        </div>
      </div>
    </div>
  );
}

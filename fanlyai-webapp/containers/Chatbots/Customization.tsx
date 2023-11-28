import { useState } from "react";
import ChatMock from "../../components/ChatMock";
import ColorPicker from "../../components/ColorPicker";
import Input from "../../components/Input";

import Switch from "../../components/Switch";
import UploadAvatar from "../../components/UploadAvatar";
import { Outfit, Roboto } from "next/font/google";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const roboto4 = Roboto({ weight: "400", subsets: ["latin"] });
import { FaRegEye } from "react-icons/fa6";

const Customization: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="flex  flex-col py-8 md:px-6 text-gray-300 w-full justify-center items-start">
      <div className="flex justify-start w-full items-center">
        <div className="h-8 w-8 z-10 bg-white text-black  rounded-full flex justify-center items-center">
          <FaRegEye size={24} />
        </div>
        <p className={`${roboto4.className}  ml-6 text-2xl`}>Customization</p>
      </div>
      <div className="px-4 md:ml-8 flex w-full flex-col py-8">
        <div className="flex md:flex-row flex-col w-full space-x-8">
          <div className="w-full p-4 rounded-2xl flex flex-col min-h-[250px]">
            <div className="flex flex-col space-y-2">
              <label className="py-2">Name your chatbot</label>
              <Input
                value={selectedValue}
                onChange={(newValue) => {
                  console.log("Selected value:", newValue);
                  setSelectedValue(newValue); // Update the state with the new value
                }}
                placeholder="Name your chatbot"
              ></Input>
              <div className="flex flex-col ">
                <label className="py-2">Choose a welcome message</label>
                <textarea
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas dui at libero mollis, sit amet lacinia ligula faucibus. Morbi tortor enim, rutrum ut ex in, tincidunt tempus risus. "
                  className="py-[8px] h-[100px] placeholder:text-[#606060] placeholder:text-sm bg-[#343434] text-gray-300 w-full px-4 rounded-2xl border-[1px] border-gray-500 "
                ></textarea>
              </div>

              <ColorPicker title="Chatbot's name color"></ColorPicker>
              <ColorPicker title="Chatbot's message color"></ColorPicker>
              <ColorPicker title="User's message color"></ColorPicker>
              <ColorPicker title="Accent color"></ColorPicker>
              <ColorPicker title="Background color"></ColorPicker>
              <ColorPicker title="Conversation background color"></ColorPicker>
              <ColorPicker title="Side bar background color"></ColorPicker>
              <Switch
                title="Enable Emojis"
                desc="When enabled, your chatbot will use emojis in it's responses"
              ></Switch>
              <UploadAvatar></UploadAvatar>
            </div>
          </div>
          <div className="w-full mt-12 md:mt-64">
            <ChatMock></ChatMock>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customization;

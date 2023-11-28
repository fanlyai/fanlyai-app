import Input from "../../components/Input";
import { Outfit, Roboto } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

const Editor: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <main
      className={`bg-[#0f0f0f] md:ml-[300px] ml-[80px] h-screen w-full p-8 ${roboto.className}`}
    >
      <div className="flex w-full justify-between">
        <p className="text-4xl text-white">Vuzz Editor</p>
      </div>
      <div className="my-8 flex space-x-8">
        <Input
          value={selectedValue}
          onChange={(newValue) => {
            console.log("Selected value:", newValue);
            setSelectedValue(newValue); // Update the state with the new value
          }}
          placeholder="Search document"
        ></Input>
        <button
          onClick={() => setIsModalOpen(true)}
          className=" bg-white hover:bg-[#3f3f3f] hover:text-white text-black flex justify-center py-2 items-center px-8 rounded"
        >
          Add
        </button>
      </div>
      <div className="w-full h-[500px] p-8 text-white border rounded-lg border-[#3f3f3f]">
        <div className="flex w-full md:text-base text-xs justify-between">
          <p className="w-full pl-4">Name</p>
          <div className="flex w-full justify-around">
            <p>Created On</p>
            <p className="md:ml-0 ml-4">Delete</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#3f3f3f] my-4"></div>
        <div className="h-[300px] flex justify-center items-center text-gray-300 opacity-20 text-center text-4xl">
          You don't have any documents yet
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto text-black bg-[#34343480] flex">
          <div className="relative p-8 bg-white  md:w-full max-w-md m-auto flex-col flex rounded-lg">
            <div>
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Create new document</p>
                <div
                  className="cursor-pointer z-50"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M15 3.6l-1.2-1.2L9 7.2 4.2 2.4 3 3.6l4.8 4.8L3 13.2l1.2 1.2L9 10.8l4.8 4.8 1.2-1.2-4.8-4.8z" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-4 ">
                <Input
                  value={selectedValue}
                  onChange={(newValue) => {
                    console.log("Selected value:", newValue);
                    setSelectedValue(newValue); // Update the state with the new value
                  }}
                  placeholder="Name your chatbot"
                ></Input>
                <button className=" bg-[#3f3f3f]  hover:text-white text-white flex justify-center py-1 items-center px-8 rounded">
                  Add
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Editor;

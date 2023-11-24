// pages/index.js
import { useState } from "react";
import { Outfit, Roboto } from "next/font/google";
import Link from "next/link";
const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
import { MdFileUpload } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Resources() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`relative md:ml-[300px] bg-[#0f0f0f] ml-[250px] ${roboto.className} h-screen  w-full p-8`}
    >
      {/* Other content of your page */}
      <p className="text-4xl text-white">Resources</p>
      <button
        className="fixed top-4 right-4 bg-white hover:bg-[#3f3f3f] hover:text-white text-black font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        + Add
      </button>
      <div className="h-[500px] flex justify-center items-center text-gray-300 text-center opacity-20 text-4xl">You don't have any resources yet</div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-[#34343480] flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
            <div>
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Select resource type</p>
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

              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="flex shadow-lg transform transition duration-200 hover:scale-105 flex-col items-center justify-center p-4 border rounded-lg">
                  <div className="text-gray-700">
                    <MdFileUpload size={60} />
                  </div>
                  <div className="mt-2 text-sm">Device</div>
                </div>

                <div className="flex shadow-lg transform transition duration-200 hover:scale-105 flex-col items-center justify-center p-4 border rounded-lg">
                  <div className="text-red-600">
                    <FaYoutube size={60} />
                  </div>
                  <div className="mt-2 text-sm">YouTube</div>
                </div>

                <div className="flex shadow-lg transform transition duration-200 hover:scale-105 flex-col items-center justify-center p-4 border rounded-lg">
                  <div className="text-green-600">
                    <TbWorld size={60} />
                  </div>
                  <div className="mt-2 text-sm">Website</div>
                </div>

                <div className="flex shadow-lg transform transition duration-200 hover:scale-105 flex-col items-center justify-center p-4 border rounded-lg">
                  <div className="text-blue-600">
                    <IoDocumentTextOutline size={60} />
                  </div>
                  <div className="mt-2 text-sm">Raw Text</div>
                </div>
              </div>
              <div>
                {/* Insert your grid or any other modal content here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { Outfit, Roboto } from "next/font/google";
const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export default function Chatbots() {
  return (
    <main className={`bg-white h-screen w-full p-8 ${roboto.className}`}>

      <div className="flex w-full justify-between">
        <p className="text-4xl">Chatbots</p>
        <button className="bg-black text-white px-[16px] space-x-4 flex justify-between py-[6px] items-center rounded-2xl">
          <span>+</span> <span>Add</span>
        </button>
      </div>
      <div className="h-[500px] flex justify-center items-center text-gray-300 text-4xl">You don't have any Chatbots yet</div>
    </main>
  );
}

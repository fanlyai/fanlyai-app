import { Outfit, Roboto } from "next/font/google";
import Link from "next/link";
const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

const Chatbots : React.FC = () => {
  return (
    <main className={`bg-[#0f0f0f] md:ml-[300px] ml-[80px] h-screen w-full p-8 ${roboto.className}`}>

      <div className="flex w-full justify-between">
        <p className="text-4xl text-white">Chatbots</p>
        <Link href="/chatbots/add">
        <button
        className="fixed top-4 right-4 bg-white hover:bg-[#3f3f3f] hover:text-white text-black font-bold py-2 px-4 rounded"
       
      >
        + Add
      </button></Link>
      </div>
      <div className="h-[500px] flex justify-center items-center opacity-20 text-gray-300 text-center text-4xl">You don't have any Chatbots yet</div>
    </main>
  );
}
export default Chatbots
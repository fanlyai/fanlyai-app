

import ChatbotCard from "@/components/ChatbotCard";
import { Outfit, Roboto } from "next/font/google";
import Link from "next/link";
const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export default function Chatbots() {
  return (
    <main className={`bg-[#0f0f0f] md:ml-[300px] ml-[80px] h-screen w-full p-8 ${roboto.className}`}>

      <div className="flex w-full justify-between">
        <p className="text-4xl text-white">Featured Chatbots</p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
        <ChatbotCard name="Elon Musk" image="/elon.jpeg"></ChatbotCard>
        <ChatbotCard name="Elon Musk" image="/elon.jpeg"></ChatbotCard>
        <ChatbotCard name="Elon Musk" image="/elon.jpeg"></ChatbotCard>
        <ChatbotCard name="Elon Musk" image="/elon.jpeg"></ChatbotCard>
        <ChatbotCard name="Elon Musk" image="/elon.jpeg"></ChatbotCard>
      </div>
     
    </main>
  );
}

import { Outfit, Roboto } from "next/font/google";
import Link from "next/link";
import ChatbotCard from "../../components/ChatbotCard";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useEditModal from "../../hooks/useEditModal";
import { useStore } from "zustand";
const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

const Chatbots : React.FC = () => {


  const editModal = useEditModal();
  const id = useParams();

  const [chatbots, setChatbots] = useState([]);

  const router = useRouter();
  async function getAssistantData() {
   
    const apiUrl = `http://localhost:3001/assistants`;

    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setChatbots(response.data);
     
      router.push("/chatbots")
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getAssistantData()
  }, []);

  

  return (
    <main className={`bg-[#0f0f0f] md:ml-[300px] ml-[80px] h-screen w-full p-8 ${roboto.className}`}>

      <div className="flex w-full justify-between">
        <p className="text-2xl md:text-4xl text-white">Chatbots</p>
        <Link href="/chatbots/add">
        <button
        className="fixed top-4 right-4 bg-white hover:bg-black hover:border hover:border-white hover:text-white z-50 md:text-base text-sm text-black font-bold py-2 px-2 md:px-4 rounded"
       
      >
        + Add
      </button></Link>
      <button
      onClick={editModal.onOpen}
        className="fixed md:top-4 top-16 right-4 md:right-28 bg-white hover:bg-black hover:border hover:border-white hover:text-white z-50 md:text-base text-sm text-black font-bold py-2 px-[14px] md:px-4 rounded"
      >
         Edit
      </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-4 ">
      {chatbots.map((chatbot, index) => (
        <div key={index} onClick={()=>{router.push(`/chat/${chatbot.assistantId}`)}}>
        <ChatbotCard name={chatbot.name} assistantId={chatbot.assistantId} role={chatbot.role} description={chatbot.description}></ChatbotCard>
        </div>
      ))}
      </div>
      <div className="h-[500px] flex justify-center items-center opacity-20 text-gray-300 text-center text-4xl">{chatbots ?"" : "You don't have any Chatbots yet"}</div>
    </main>
  );
}
export default Chatbots
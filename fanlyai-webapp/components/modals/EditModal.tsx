import { useCallback, useEffect, useRef, useState } from "react";

import Modal from "./Modal";

import { useRouter } from "next/router";

import useEditModal from "../../hooks/useEditModal";
import axios from "axios";
import { Outfit, Roboto } from "next/font/google";
import ChatbotEdit from "../ChatbotEdit";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

const EditModal = () => {
  const modalRef = useRef(null); 
  const router = useRouter();

  async function getAssistantData() {
    const apiUrl = `https://vuzz-api-oxkf4xsofa-lm.a.run.app/assistants`;

    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setChatbots(response.data);
     
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const editModal = useEditModal();

  const [isLoading, setIsloading] = useState(false);

  const handleClose = useCallback(() => {
    editModal.onClose();
  }, [editModal]);

  useEffect(() => {
    getAssistantData();
  }, []);

  const close = useCallback(() => {
    if (isLoading) {
      return;
    }

    editModal.onClose();
  }, [isLoading, editModal]);

  /* https://vuzz-api-oxkf4xsofa-lm.a.run.app */

  const [chatbots, setChatbots] = useState([]);
  async function deleteAssistantData(index : number) {
    const apiUrl = `https://vuzz-api-oxkf4xsofa-lm.a.run.app/assistants/${chatbots[index].assistantId}`;

    try {
      const response = await axios.delete(apiUrl);
      console.log(response.data);
      
    } catch (error) {
      console.error("Error:", error);
    }finally{
      router.reload();
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // or editModal.onClose, depending on how you want to handle the close event
      }
    }
  
    // Attach the listener
    document.addEventListener('mousedown', handleClickOutside);
  
    // Clean up the listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, handleClose]);
  const bodyContent = (
    <div ref={modalRef} className="flex flex-col gap-4">
      <div onClick={close}  className="fixed top-4 right-4 text-white cursor-pointer px-[2px] py-[1px] rounded-lg">X</div>
      {chatbots.length !==0  ? chatbots.map((chatbot, index) => (
        <div key={index}>
          <ChatbotEdit
            onClick={() =>deleteAssistantData(index)}
            name={chatbot.name}
            assistantId={chatbot.assistantId}
            role={chatbot.role}
            description={chatbot.description}
          ></ChatbotEdit>
        </div>
      )): <div className="w-full flex justify-center"> <p className={`${roboto.className} text-xl text-gray-300`}>You don't have any Chatbots yet</p></div>}
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      isNotShow={true}
      actionLabel="Close"
      onClose={editModal.onClose}
      onSubmit={handleClose}
      body={bodyContent}
    />
  );
};

export default EditModal;

import { useCallback, useState } from "react";
import useRegisterModal from "../../hooks/useRegisterModal"
import Modal from "./Modal";
import Input from "../Input";
import LoginModal from "./LoginModal";
import useLoginModal from "../../hooks/useLoginModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';




const RegisterModal = () => {
  const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading , setIsloading] = useState(false);

    const router = useRouter();


    const onToggle = useCallback(()=>{
      if(isLoading){
        return;
      }
      registerModal.onClose();
      loginModal.onOpen();
    },[isLoading , loginModal,registerModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsloading(true)
            console.log(email)
            console.log(password)
            await axios.post('/api/register', {
              email,
              password,
            });
      
            setIsloading(false)
      
            toast.success('Account created.');
      
            signIn('credentials', {
              redirect: false,
              email,
              password,
            });

            console.log(email)
            console.log(password)
      
            registerModal.onClose()
        } catch (error) {
            console.log(error)
        }finally{
            setIsloading(false) 
           loginModal.onOpen()
        }
    },[email,password,registerModal])

    
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e)}
        value={email}
        type="text"
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e)}
        value={password}
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p className="text-[#4b4b4b]">Do you have an account?
        <span 
         onClick={onToggle}
          className="
            text-black 
            cursor-pointer 
            underline
            pl-2
          "
          >Sign in</span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Create an Account"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};



export default RegisterModal
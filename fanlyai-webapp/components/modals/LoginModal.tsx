import { useCallback, useState } from "react";
import useLoginModal from "../../hooks/useLoginModal"
import Modal from "./Modal";
import Input from "../Input";
import useRegisterModal from "../../hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";


const LoginModal = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading , setIsloading] = useState(false);
    const handleEmailChange = (event) => {
      setEmail(event.target.value); // Update the email state with the new input value
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value); // Update the email state with the new input value
    };

    const router = useRouter();
    const onToggle = useCallback(()=>{
        if(isLoading){
          return;
        }
        loginModal.onClose();
        registerModal.onOpen();
      },[isLoading , loginModal,registerModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsloading(true)

          const result =   await signIn("credentials" , {
                redirect: false,
                email,
                password,
            }) 
           
            
           
            console.log("logged in")
            if(!result?.ok){
                alert("Invalid Credentials")
            }
            else{
                router.push("/chatbots")
                 loginModal.onClose()
            }
            setIsloading(false)
           
        } catch (error) {
         
            router.push("/")
        }finally{
            setIsloading(false)
            
            
        }
    },[loginModal, email,password])

    
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
        type="text"
       
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={handlePasswordChange}
        value={password}
       
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p className="text-[#4b4b4b]">First time using Vuzz?
        <span 
         onClick={onToggle}
          className="
          pl-2
            text-black 
            font-bold
            cursor-pointer 
            underline
          "
          >Create an account</span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};



export default LoginModal
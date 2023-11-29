import Image from "next/image";

interface ChatbotsProps{
  image? :string,
  name: string,
  user?: boolean,
  assistantId?:string,
  role?:string,
  description?:string
  

}

const ChatbotCard : React.FC<ChatbotsProps> = ({ image, name,user,assistantId,role,description }) =>
{
    return (
      <div className={`bg-[#3f3f3f] cursor-pointer mt-8 min-h-[160px] space-x-2 transform transition duration-200 hover:scale-105 md:px-4 py-2 border border-[#575757] rounded-lg flex md:flex-row flex-col items-center`}>
         
         <div className="">
         <img className=" object-cover  md:min-w-[96px] md:h-24 w-12 h-12 object-fit  rounded-full overflow-hidden border-2 border-[#5f5f5f]"  src={!image ? "vuzzAIlogo.png" : image} alt={name} />
       
        </div>   
        <div className="flex flex-col justify-start ">
         <div className="text-white md:text-lg text-sm py-2 ">{name}</div>
       
        <p className="text-[#afafaf] uppercase text-xs md:text-sm">{role}</p>
        <p className="text-[#949494] text-xs md:text-sm">{description}</p>
       {user && <button className="px-4 mt-2 py-2 bg-[#171717] text-sm rounded-full">Talk With Me !</button>}
      </div></div>
    );
  }

  export default ChatbotCard
import Image from "next/image";


export default function CharbotCard({ image, name }) {
    return (
      <div className="bg-[#3f3f3f] mt-8  transform transition duration-200 hover:scale-105 px-4 py-2 border border-[#575757] rounded-lg flex flex-col items-center">
         <div className="text-white py-2 ">{name}</div>
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#5f5f5f]">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>
       
      </div>
    );
  }
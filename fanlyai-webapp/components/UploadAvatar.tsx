import { useState,ChangeEvent } from 'react';
import Image from 'next/image';
import { FaUpload } from 'react-icons/fa';

const UploadAvatar: React.FC = () => {
  const [avatar, setAvatar] = useState<string>('/vuzzAIlogo.png'); // Replace with your avatar's path

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <span className="text-lg mb-2">Chatbot's avatar</span>
      <div className="relative">
        <Image 
          src={avatar} 
        alt='avatar'
          width={80} 
          height={80} 
          className="rounded-full ml-6 bg-gray-500" 
        />
        <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full cursor-pointer">
          <FaUpload className="text-white" />
          <input 
            id="avatar-upload" 
            type="file" 
            className="hidden" 
            onChange={handleAvatarChange} 
            accept="image/*" 
          />
        </label>
      </div>
    </div>
  );
};

export default UploadAvatar;

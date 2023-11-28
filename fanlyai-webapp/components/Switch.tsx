// Import useState hook from React
import { useState } from 'react';

interface SwitchProps{
  title:string,
  desc:string
}

const Switch: React.FC<SwitchProps> = ({title,desc}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <label className="flex py-4 items-center cursor-pointer">
      {/* Toggle */}
      <div className="relative">
        {/* Input */}
        <input type="checkbox" id="toggle" className="sr-only" checked={isEnabled} onChange={toggleSwitch} />
        {/* Line */}
        <div 
          className={`block w-14 h-8 rounded-full transition-colors ${
            isEnabled ? 'bg-[#C80FB0]' : 'bg-gray-600'
          }`}
        ></div>
        {/* Dot */}
        <div 
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
            isEnabled ? 'translate-x-6' : ''
          }`}
        ></div>
      </div>
      {/* Label */}
      <div className='flex justify-center items-start flex-col'>
      <div className="ml-3 text-gray-300 font-medium">
        {title}
      </div>
      <div className="ml-3 text-xs text-gray-500">
       {desc}
      </div></div>
    </label>
  );
};

export default Switch;

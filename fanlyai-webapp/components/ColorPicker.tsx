import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';

interface ColorPickerProps{
  title : string
}

const ColorPicker: React.FC<ColorPickerProps> = ({title}) => {
  const [color, setColor] = useState('#fff');
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLInputElement>(null);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  const handleFocus = () => {
    setShowPicker(true);
  };

  const handleClickOutside = (event:any) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={pickerRef} className="relative">
      <div className="flex flex-col items-start justify-center mt-2">
        <label className='py-2'>{title}</label>
        <div className='flex w-full items-center'>
        <div
          style={{ backgroundColor: color }}
          className="w-5 h-5 rounded-full border border-gray-300 mr-2"
        />
        <input 
          type="text" 
          value={color} 
          onChange={handleInputChange}
          onFocus={handleFocus}
          className="py-[2px]  placeholder:text-[#606060] placeholder:text-sm bg-[#343434] text-gray-300 w-full px-4 rounded-2xl  "
        /></div>
      </div>
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;

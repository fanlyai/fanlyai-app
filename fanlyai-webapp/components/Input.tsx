interface InputProps {
  placeholder?: string;
  onChange: (value: string) => void;
  value: string
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder,  type, onChange ,value }) => {
  return (
    <input
    value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={type}
      className="py-[2px]  placeholder:text-[#606060] placeholder:text-sm bg-[#343434] text-gray-300 w-full px-4 rounded-2xl  "
    ></input>
  );
};

export default Input;

interface InputProps {
  placeholder?: string;
  onChange: any;
  value: string
  type?: string;
  id?:string;
  name?: string
}

const Input: React.FC<InputProps> = ({ placeholder,  type, onChange ,value ,id,name}) => {
  return (
    <input
    value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      className="py-[2px]  placeholder:text-[#606060] placeholder:text-sm bg-[#343434] text-gray-300 w-full px-4 rounded-2xl  "
    ></input>
  );
};

export default Input;

interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline,
  }) => {
    return (
      <button
      disabled={disabled}
      onClick={onClick}
        className={`disabled:opacity-70 py-1 px-2 max-h-10 border-[#343434] disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 ${
          fullWidth ? "w-[70%]" : "w-fit"
        } ${
          secondary ? "bg-white" : "bg-[#343434]"
        } ${
          secondary ? "text-black" : "text-white"
        }${
          secondary ? "border-black" : "bg-[#343434]"
        }${
          large ? "text-xl" : "text-md"
        }${
          large ? "px-5" : "px-4"
        }${
          large ? "py-3" : "py-2"
        }${
          outline ? "bg-transparent" : " "
        }${
          outline ? "border-white" : " "
        }${
          outline ? "text-white" : " "
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  
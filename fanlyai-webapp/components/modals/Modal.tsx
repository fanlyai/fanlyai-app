import { AiOutlineClose } from "react-icons/ai";
import { useCallback } from "react";
import { Outfit, Roboto } from "next/font/google";
import Button from "../Button";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  isNotShow?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  isNotShow,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
    console.log("submitted");
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={`
            justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-50 
            outline-none 
            focus:outline-none
            
            
            ${roboto.className}
   `}
      >
        <div className="relative w-auto border rounded-lg border-[#353535] lg:w-1/3 my-6 mx-auto lg:max-w-3xl h-auto lg:h-auto">
          {/*content*/}
          <div
            className="
              h-full
              py-12
              lg:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-transparent
              filter
              backdrop-blur-md 
              outline-none 
              focus:outline-none
              "
          >
            {/*header*/}
            <div
              className={`flex 
                items-center 
                justify-between 
                p-4
                rounded-t
                ${roboto.className}
               ` }
                
                
            >
              <h3 className="text-4xl w-full justify-center flex text-white">{title}</h3>
           
            </div>
            <div className="relative p-10 flex-auto">{body}</div>
            <div className="flex items-center flex-col gap-2 p-4">
            {isNotShow ? null : <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              ></Button>
              }
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal
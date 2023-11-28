import Select from "../../components/Select";
import { Outfit, Roboto } from "next/font/google";
import { useState } from "react";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const roboto4 = Roboto({ weight: "400", subsets: ["latin"] });
import { IoDocumentsOutline } from "react-icons/io5";

export default function Configuration() {
  Select.defaultProps = {
    onChange: () => {}
  };
  const options = [
    // Add your options here, for example:

    { value: "assistant", label: "Assistant" },
    { value: "coach", label: "Coach" },
    { value: "advisor", label: "Advisor" },
    { value: "expert", label: "Expert" },
    // Add more options as needed
  ];
  const options2 = [
    // Add your options here, for example:
    { value: "humorous", label: "Humorous" },
    { value: "friendly", label: "Friendly" },
    { value: "normal", label: "Normal" },

    // Add more options as needed
  ];
  const botopt = [
    // Add your options here, for example:
    { value: "gpt35", label: "GPT-3.5 Turbo" },
    { value: "gpt4", label: "GPT-4" },

    // Add more options as needed
  ];
  const yesno = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
  ];

  const access = [
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
    { value: "protected", label: "Protected" },
  ];

  const [selectedValue, setSelectedValue] = useState(yesno[0].value);


  return (

    <div className="flex z-10 flex-col py-8 md:px-6 text-gray-300 w-full justify-center items-start">
      <div className="flex justify-start w-full items-center">
        <div className="h-8 z-10 w-8 bg-white text-black  rounded-full flex justify-center items-center">
          <IoDocumentsOutline size={24} />
        </div>
        <p className={`${roboto4.className}  ml-6 text-2xl`}>Configuration </p>
      </div>
      <div className="px-12 flex w-full flex-col py-8">
        <p className={`${roboto4.className} text-white py-2`}>
          Choose from the pre-built behaviours
        </p>
        <div className="flex md:flex-row flex-col">
          
            <div className="w-full p-4 rounded-2xl flex flex-col min-h-[250px]">
              <div className="flex flex-col space-y-6">
                <Select
                  options={options}
                  title="Select a personality"
                  placeholder="Filter your resources..."
                  onChange={(newValue) => {
                    console.log("Selected value:", newValue);
                    setSelectedValue(newValue); // Update the state with the new value
                  }}
                  value={selectedValue} // Use the state variable here
                
                ></Select>
                <Select
                  options={options2}
                  title="Select a tone"
                  placeholder="Filter your resources..."
                  onChange={(newValue) => {
                    console.log("Selected value:", newValue);
                    setSelectedValue(newValue); // Update the state with the new value
                  }}
                  value={selectedValue} // Use the state variable here
                
                ></Select>
                <div className="pt-12 space-y-5">
                  <Select
                    options={botopt}
                    title="Model"
                    placeholder="Filter your resources..."
                    onChange={(newValue) => {
                      console.log("Selected value:", newValue);
                      setSelectedValue(newValue); // Update the state with the new value
                    }}
                    value={selectedValue} // Use the state variable here
                  
                  ></Select>
                  <Select
                    options={yesno}
                    title="Restrict responses to resources content"
                    placeholder="Filter your resources..."
                    onChange={(newValue) => {
                      console.log("Selected value:", newValue);
                      setSelectedValue(newValue); // Update the state with the new value
                    }}
                    value={selectedValue} // Use the state variable here
                  
                  ></Select>
                  <Select
                    options={access}
                    title="Accessibility"
                    placeholder="Filter your resources..."
                    onChange={(newValue) => {
                      console.log("Selected value:", newValue);
                      setSelectedValue(newValue); // Update the state with the new value
                    }}
                    value={selectedValue} // Use the state variable here
                  
                  ></Select>
                </div>
              </div>
              <div className="w-full"></div>
            </div>
            <div className="md:flex hidden  flex-col items-center">
              <div className="h-[150px] w-[1px] lg:mx-12 bg-[#606060]"></div>
              <p className="py-2 text-gray-400">OR</p>
              <div className="h-[150px] w-[1px] lg:mx-12 bg-[#606060]"></div>
            </div>
            <div className="flex md:hidden   flex-col items-center">
              <div className="h-[1px] w-[150px] lg:mx-12 bg-[#606060]"></div>
              <p className="py-2 text-gray-400">OR</p>
              <div className="h-[1px] w-[150px] lg:mx-12 bg-[#606060]"></div>
            </div>
      
          <div className="w-full p-4 rounded-2xl flex flex-col min-h-[250px]">
            <div className="flex flex-col ">
              <label className="py-2">Custom behaviour</label>
              <textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas dui at libero mollis, sit amet lacinia ligula faucibus. Morbi tortor enim, rutrum ut ex in, tincidunt tempus risus. Nam molestie blandit arcu a ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                className="py-[8px] h-[200px] placeholder:text-[#606060] placeholder:text-sm bg-[#343434] text-gray-300 w-full px-4 rounded-2xl border-[1px] border-gray-500 "
              ></textarea>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}

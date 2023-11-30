import axios from "axios";
import Select from "../../components/Select";
import { Outfit, Roboto } from "next/font/google";
import { ChangeEvent, useState } from "react";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const roboto4 = Roboto({ weight: "400", subsets: ["latin"] });
import { IoDocumentsOutline } from "react-icons/io5";

interface RequestData {
  personality: string;
  tone: string;
  model: string;
  restrictResponse: boolean;
  accessibility: string;
  name: string;
  welcomeMessage: string;
  chatBotNameColor: string;
  chatBotMessageColor: string;
  userMessageColor: string;
  accentColor: string;
  backgroundColor: string;
  conversationBackgroundColor: string;
  sideBarBackgroundColor: string;
  enableEmoji: boolean;
  fileId: string;
  assistantId: string;
  userId: string;
}

async function sendAssistantData() {
  const apiUrl = "https://vuzz-api-oxkf4xsofa-lm.a.run.app/assistants";
  const data = {
    personality: "Expert",
    tone: "Funny",
    model: "gpt-4-1106-preview",
    restrictResponse: false,
    accessibility: "protected",
    name: "onur",
    welcomeMessage: "Hello Onur",
    chatBotNameColor: "red",
    chatBotMessageColor: "red",
    userMessageColor: "red",
    accentColor: "red",
    backgroundColor: "red",
    conversationBackgroundColor: "red",
    sideBarBackgroundColor: "red",
    enableEmoji: false,
    fileId: "",
    assistantId: "",
    userId: "",
  };

  try {
    const response = await axios.post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/8.4.1",
        "Access-Control-Allow-Headers": "*",
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

/* 
async function sendPostRequest(apiEndpoint: string, data: RequestData) {
  try {

    const response = await fetch(
      "https://vuzz-api-oxkf4xsofa-lm.a.run.app/assistants",{
        method: "POST",
        mode:"no-cors",
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=---011000010111000001101001",
          "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify(data)
      }
      
    );
    // const response = await fetch(apiEndpoint, {
    //   method: 'POST',
    //   // mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
    //   },
    //   body: JSON.stringify(data),
    // });
console.log(data)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending POST request:", error.message);
    } else {
      console.error("Unknown error sending POST request");
    }
    throw error;
  }
} */

export default function Configuration({formik} : {formik:any} ) {
  Select.defaultProps = {
    onChange: () => {},
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
    { value: "gpt-3.5-turbo-1106", label: "GPT-3.5 Turbo" },
    { value: "gpt-4-0613", label: "GPT-4" },

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
  const role = [
    { value: "developer", label: "Developer" },
    { value: "footballtrainer", label: "Football Trainer" },
    { value: "musician", label: "Musician" },
    { value: "math teacher", label: "Math Tutor" },
    { value: "art teacher", label: "Art Teacher" },
 
  ];

  const [selectedValue, setSelectedValue] = useState(yesno[0].value);
  const [personality, setPersonality] = useState("");
  const [tone, setTone] = useState("");
  const [model, setModel] = useState("");
  const [accessibility, setAccesibility] = useState("");
  const [name, setName] = useState("");
  const [custom, setCustom] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCustom(event.target.value); // Extracting the value from the event
  };

  
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
                placeholder="Personality"
                id="personality"
                name="personality"
                onChange={formik.handleChange}
                value={formik.values.personality}
              ></Select>
              <Select
                options={options2}
                title="Select a tone"
                id="tone"
                name="tone"
                placeholder="Tone"
                onChange={formik.handleChange}
                value={formik.values.tone}
              ></Select>
              <Select
                  options={role}
                  title="Role"
                  placeholder="Role"
                  id="role"
                  name="role" 
                  onChange={formik.handleChange}
                value={formik.values.role}// Use the state variable here
                ></Select>
              <div className="pt-12 space-y-5">
                <Select
                  options={botopt}
                  title="Model"
                  placeholder="Model"
                  id="model"
                  name="model" 
                  onChange={formik.handleChange}
                value={formik.values.model}// Use the state variable here
                ></Select>
                  
                <Select
                  options={yesno}
                  title="Restrict responses to resources content"
                  placeholder="Restrictions"
                  onChange={(newValue) => {
                    console.log("Selected value:", newValue);
                    setSelectedValue(newValue); // Update the state with the new value
                  }}
                  value={selectedValue} // Use the state variable here
                ></Select>
                <Select
                  options={access}
                  title="Accessibility"
                  placeholder="Accessibility"
                  id="accessibility"
                  name="accessibility" 
                  onChange={formik.handleChange}
                value={formik.values.accessibility}// U // Use the state variable here
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
                onChange={handleInputChange}
                value={custom}
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

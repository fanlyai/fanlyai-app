"use client";
import { Outfit, Roboto } from "next/font/google";
import Resources from "../../../containers/Chatbots/Resources";
import Configuration from "../../../containers/Chatbots/Configuration";
import Customization from "../../../containers/Chatbots/Customization";
import Integration from "../../../containers/Chatbots/Integration";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";

const outfit = Outfit({ weight: "200", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

const Add: React.FC = () => {

const router = useRouter();

  const formik = useFormik({
    initialValues: {
      personality: "",
      tone: "",
      model: "",
      accessibility: "",
      name: "",
      description:"",
      role:""
    },
    onSubmit: async (values) => {
      await sendAssistantData({
        assistant: JSON.stringify({
          personality: values.personality,
          tone: values.tone,
          model: values.model,
          accessibility: values.accessibility,
          name: values.name,
          description:values.description,
          role:values.role
          // other fields
        }),
      });
    },
  });
  
  async function sendAssistantData(queryParams: any) {
    const queryString = new URLSearchParams(queryParams).toString();
    const apiUrl = `https://vuzz-api-oxkf4xsofa-lm.a.run.app/assistants?${queryString}`;

    try {
      const response = await axios.post(apiUrl,{},{
       
      });
      console.log(response.data);
      router.push("/chatbots")
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
   
      <main className=" bg-[#0f0f0f] ml-[80px] md:ml-[300px] text-gray-200 w-full "> <form onSubmit={formik.handleSubmit}>
        <p className={`text-4xl  ${roboto.className}`}>Create a Chatbot</p>

        <div className="h-full md:block hidden w-[4px] z-0 bg-white absolute mt-8 ml-[38px]"></div>
        <Resources></Resources>
        <div className="h-full  md:block hidden  min-h-[1250px] w-[4px] z-0 bg-white absolute  ml-[38px]"></div>
        <Configuration formik={formik}></Configuration>
        <div className="h-full  md:block hidden min-h-[1350px] w-[4px] z-0 bg-white absolute  ml-[38px]"></div>
        <Customization formik={formik}></Customization>

        <Integration></Integration>
        <div className="w-full  flex justify-center items-center">
          <button

            className={`bg-white rounded-3xl py-2 px-6 text-xl text-black  ${roboto.className}`}
          >
            Create
          </button>
        </div> </form>
      </main>
   
  );
};

export default Add;

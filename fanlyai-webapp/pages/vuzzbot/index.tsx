"use client";
import Image from "next/image";
import useState from "react-usestateref";
import { Josefin_Sans, Outfit } from "next/font/google";
import { useEffect, useRef } from "react";

const manrope = Josefin_Sans({ weight: "400", subsets: ["latin"] });
const out = Outfit({ weight: "200", subsets: ["latin"] });
enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}

const ChatMessage = ({ text, from }: MessageProps) => {
  return (
    <div className="z-10">
      {from == Creator.Me && (
        <div className="bg-[#b0b0b080] justify-start relative z-10 p-4 my-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <Image
            src="/user.png"
            alt="User"
            className="rounded-full"
            width={40}
            height={40}
          />

          <p className="text-white">{text}</p>
        </div>
      )}
      {from == Creator.Bot && (
        <div className="bg-[#cbcbcb40] p-4 z-10 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <Image
            src="/vuzzAIlogo.png"
            alt="User"
            className="bg-black rounded-full"
            width={40}
            height={40}
          />
          <p className="text-white">{text}</p>
        </div>
      )}
    </div>
  );
};

const ChatInput = ({ onSend, disabled }: InputProps) => {
  const [input, setInput] = useState("");

  const sendInput = () => {
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      sendInput();
    }
  };

  return (
    <div className="bg-transparent  p-2 rounded-lg flex justify-center">
      <input
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
        className="w-full py-2 px-3 text-black border-4 border-white bg-white rounded-lg focus:outline-none"
        type="text"
        placeholder="Talk with VuzzAI!"
        disabled={disabled}
        onKeyDown={(e) => handleKeyDown(e)}
      />

      {!disabled && (
        <button
          onClick={() => sendInput()}
          className="p-2 rounded-md text-gray-500 bottom-1.5 right-1"
        ></button>
      )}
    </div>
  );
};

export default function Home() {

  const bottomChatRef = useRef(null);
  const [messages, setMessages, messagesRef] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bottomChatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const callApi = async (input: string) => {
    setLoading(true);

    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
    };

    setMessages([...messagesRef.current, myMessage]);
    const response = await fetch("/api/generate-answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
      }),
    }).then((response) => response.json());
    setLoading(false);

    if (response.text) {
      const botMessage: MessageProps = {
        text: response.text,
        from: Creator.Bot,
        key: new Date().getTime(),
      };
      setMessages([...messagesRef.current, botMessage]);
    } else {
    }
  };

  return (
    <main className="bg-black w-full md:ml-[300px] md:px-36 min-h-screen  bg-cover  mx-auto">
     <div className="flex items-center space-x-2">
      <div className="text-white">Status</div>
      <div className="h-4 w-4 bg-green-500 rounded-full"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          alt="logo"
          src="/vuzzAIlogo.png"
          width={200}
          height={200}
        ></Image>

        <div className={manrope.className}>
          <div className="text-white text-xl">BETA</div>
        </div>
      </div>

      <div className="sticky z-20 top-0 w-full pt-10 px-4">
        <ChatInput
          onSend={(input) => callApi(input)}
          disabled={loading}
        ></ChatInput>
      </div>
      <div className="mt-10 flex flex-col z-10 px-4">
        {messages.map((msg: MessageProps) => (
          <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
        ))}
 <div ref={bottomChatRef} />
      </div>
    </main>
  );
}

import { useState } from "react";
import Header from "../../Layout/Header/Header";
import Wrapper from "../../UI/Wrapper/Wrapper";

const LinkPage = () => {
  const [link, setLink] = useState("https://es.tl/t-hlVvxXmEdh");

  return (
    <div className="link-page">
      <Header />
      <Wrapper className="grid md:grid-cols-2 md:mt-24 items-center">
        <div className="bg-slate-400 py-4 px-2 rounded-lg md:w-3/5 mb-5 md:mb-0">
          <div className="flex justify-center ">
            <img
              src={require("../../assets/jumping-boy.png")}
              className="h-32 md:h-full"
            />
          </div>
          <h1 className="text-white text-xl md:text-2xl font-bold text-center mt-1">
            You're done!
          </h1>
          <p className="my-2 text-white text-center">
            Copy your download link{" "}
            <span className="text-blue-300">or see what's inside</span>
          </p>
          <div className="flex flex-col items-center justify-center w-full">
            <button
              className="
                    bg-white border-0 text-black w-full md:w-auto py-1 
                    px-4 rounded-l-full rounded-br-full rounded-tr-sm
                    hover:bg-slate-200 transition-all mt-5
                "
            >
              {link}
            </button>
            <button
              className=" 
                    bg-white border-0 text-blue-400 md:w-auto py-1 
                    px-4 rounded-l-full rounded-tr-full
                    mt-10
                    mb-5
                    hover:bg-slate-200 hover:text-blue-600 transition-all"
            >
              send another?
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-base md:text-2xl font-bold">
            File sharing made <span className="font-black">EASY</span>
          </h2>
          <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            lacus, urna faucibus pellentesque aliquam proin nunc. Porttitor nec
            penatibus ipsum lectus laoreet purus enim nisl. Vel diam ut
            convallis leo sed ipsum, convallis eget.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default LinkPage;

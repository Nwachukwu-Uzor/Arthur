import { useState } from "react";

import Header from "../../Layout/Header/Header";
import Wrapper from "../../UI/Wrapper/Wrapper";

const Receiver = () => {
  const [size, setSize] = useState(605);
  return (
    <div className="receiver-page">
      <Header />
      <Wrapper className="grid md:grid-cols-2 md:mt-24 items-center">
        <form className="bg-slate-500 py-4 px-2 rounded-lg md:w-3/5 mb-5 md:mb-0">
          <h2 className="text-base md:text-2xl font-bold text-white text-center">
            Ready when you are
          </h2>
          <p className="text-center text-white text-sm">
            Transfer expires in 7 days
          </p>
          <div className="bg-white rounded-2xl px-2 py-6 rounded-tr-none mt-6">
            <p className="text-slate-400">File Name</p>
            <p className="text-slate-400 text-xs">
              <i className="fa-solid fa-folder-closed text-xl md:text-2xl "></i>{" "}
              {size} Kb
            </p>
            <hr className="border-t-slate-200 my-4" />
            <p className="text-slate-500">Folder Name</p>
            <p className="text-slate-500 text-xs">
              <i className="fa-solid fa-folder-minus text-xl md:text-2xl "></i>{" "}
              {size} Kb
            </p>
          </div>
          <div className="text-center my-4">
            <button className="bg-slate-400 text-black px-5 py-1.5 border-none rounded-l-full rounded-tr-full hover:bg-slate-300 transition-all">
              Download <i class="fa-solid fa-cloud-arrow-down"></i>
            </button>
          </div>
        </form>
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

export default Receiver;

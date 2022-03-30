import React from "react";
import Header from "../../Layout/Header/Header";
import Wrapper from "../../UI/Wrapper/Wrapper";

import "./main-page.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <Wrapper className="grid md:grid-cols-2 md:mt-24 items-center justify-between">
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
        <form className="bg-gray-500 py-4 px-2 rounded-lg md:w-3/5 mb-5 mt-20 md:mt-auto md:mb-0 relative">
          <img
            src={require("../../assets/blue-suit-businessman.png")}
            className="absolute right-0 image-form-top h-32 md:h-54"
          />
          <div className="flex gap-2 my-2">
            <i className="fa-regular fa-folder-closed text-white text-5xl"></i>
            <div className="flex flex-col text-white">
              <h2 className="font-medium text-lg">Upload File</h2>
              <p className="my-0.5 underline">Or select a folder</p>
            </div>
          </div>
          <input
            type="text"
            className="w-full p-1 rounded-md focus:border-none focus:outline-none mt-5"
            placeholder="Title"
          />
          <textarea
            className="my-2 w-full rounded-md p-1"
            cols={20}
            placeholder="message"
          ></textarea>
          <div className="text-center">
            <button className="bg-gray-300 py-0.5 w-3/5 mt-20 rounded-l-full rounded-tr-full">
              Get Link
            </button>
          </div>
          <img
            src={require("../../assets/blue-suit-businesswoman.png")}
            className="absolute left-0 translate-y-2/4 bottom-0 h-32 md:h-54"
          />
        </form>
      </Wrapper>
    </div>
  );
};

export default MainPage;

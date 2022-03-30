import Header from "../../Layout/Header/Header";
import Button from "../../UI/Button/Button";
import Wrapper from "../../UI/Wrapper/Wrapper";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Wrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-center justify-between lg:justify-center">
        <form className="bg-slate-400 py-4 px-2 rounded-lg md:w-4/5">
          <div className="flex items-center justify-center w-full mb-2">
            <label className="flex flex-col w-full h-32 border-0.5 border-violet-200 border-dashed bg-white hover:bg-white hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Attach a file
                </p>
              </div>
              <input type="file" className="opacity-0" />
            </label>
          </div>
          <div>
            <input
              type="text"
              className="py-0.5 px-1 rounded w-full focus:ring-blue-500 focus:border-indigo-500"
              placeholder="Title"
            />
          </div>
          <div className="mt-3">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="shadow-sm active:border-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
        <div className="justify-self-center">
          <img
            src={require("../../assets/girl-boy.png")}
            alt="girl-boy"
            className="h-48 md:h-80 lg:h-96"
          />
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

export default Home;

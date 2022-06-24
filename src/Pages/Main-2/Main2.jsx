import React from "react";
import styles from "./main2.module.css";

import Logo from "../../assets/Logo.png";
import star from "../../assets/svg/Star.svg";

const Main2 = () => {
  return (
    <section className={styles.main2}>
      <div className="flex flex-col justify-start px-5 items-start h-full">
        <img
          src={Logo}
          alt="share logo"
          className={`${styles.logo} h-4 md:h-6 mt-2`}
        />
        <div className={`self-center m-auto ${styles.main2Text}`}>
          <h2 className="text-2xl md:text-3xl font-bold my-3">
            File Sharing Made{" "}
            <span className="text-blue-300">
              EASY <img src={star} alt="" className="h-5 inline-block" />
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            nisi quis libero ultricies bibendum. Morbi in orci nec urna porta
            commodo ac ac turpis.
          </p>
        </div>
      </div>
      <div className={`${styles.blue} flex justify-center items-center`}>
        <form
          className={`${styles.form} flex items-center justify-stretch flex-col`}
        >
          <div className={`flex items-center`}>
            <i class="fa-light fa-folder-medical mr-4 text-2xl text-gray-200"></i>
            <div>
              <h4 className="text-2xl font-bold ">Upload File</h4>
              <p className="underline hover:text-opacity-50 cursor-pointer my-1">
                Or select a folder
              </p>
            </div>
          </div>
          <div className="my-2 w-full">
            <input
              type="text"
              placeholder="Title"
              className="outline-none bg-gray-100 px-1 py-2 rounded-lg w-full focus:ring-4 
              focus:ring-blue-300 focus:ring-opacity-50"
            />
          </div>
          <div className="my-2 w-full">
            <input
              type="text"
              placeholder="Receiver Email"
              className="outline-none bg-gray-100 px-1 py-2 rounded-lg w-full focus:ring-4 
              focus:ring-blue-300 focus:ring-opacity-50"
            />
          </div>
          <div className="my-2 w-full">
            <input
              type="text"
              placeholder="Message"
              className="outline-none bg-gray-100 px-1 py-2 rounded-lg w-full focus:ring-4 
              focus:ring-blue-300 focus:ring-opacity-50"
            />
          </div>
          <button
            className="bg-gray-900 text-white w-full p-2 
              my-2 rounded-md 
              "
          >
            Get a link
          </button>
        </form>
      </div>
    </section>
  );
};

export default Main2;

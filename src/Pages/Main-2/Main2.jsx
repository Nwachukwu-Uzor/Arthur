import React from "react";
import styles from "./main2.module.css";

import { useState } from "react";

import Logo from "../../assets/Logo.png";
import star from "../../assets/svg/Star.svg";

import leftBorder from "../../assets/left-border.png";
import rightBorder from "../../assets/right-border.png";

import facebook from "../../assets/svg/Facebook.svg";
import ios from "../../assets/svg/ios.svg";
import google from "../../assets/svg/google.svg";

const Main2 = () => {
  const [isAuth, setIsAuth] = useState(false);

  const Input = ({ type, placeholder }) => (
    <div className="my-2 w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none bg-gray-100 px-1 py-2 rounded-lg w-full focus:ring-4 
              focus:ring-blue-300 focus:ring-opacity-50"
      />
    </div>
  );

  const FileShareForm = () => (
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
      <Input placeholder={"Title"} type={"text"} />
      <Input placeholder={"Receiver Email"} type={"text"} />
      <Input placeholder={"Message"} type={"text"} />
      <button
        className="bg-gray-900 text-white w-full p-2 
              my-3 rounded-md 
              "
      >
        Get a link
      </button>
    </form>
  );

  const Border = ({ src, alt }) => (
    <div>
      <img src={src} alt={alt} className="h-0.5 block w-12" />
    </div>
  );

  const AuthLogo = ({ src, alt }) => (
    <div className="p-2 rounded-3xl bg-gray-200 cursor-pointer hover:opacity-50">
      <img src={src} alt={alt} className="h-4" />
    </div>
  );

  const AuthForm = () => (
    <form
      className={`${styles.form} flex items-center justify-stretch flex-col`}
    >
      <h4 className="text-2xl text-center md:text-3xl font-bold">
        Welcome Back
      </h4>
      <p className="text-center mt-2 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas
        mi non sed ut odio. Non, justo, sed facilisi et.
      </p>
      <Input type={"text"} placeholder="Username , Email & Phone Number" />
      <Input type={"password"} placeholder="Password" />
      <p className="text-right my-2 w-full">
        <a href="#" className="underline font-medium text-xs">
          Forgot Password ?
        </a>
      </p>
      <button
        className={`bg-blue-400 hover:opacity-50 text-white w-full p-2 
              my-3 rounded-md 
              ${styles.btnShadow}
              `}
      >
        Sign in
      </button>
      <div className="my-2 flex justify-between items-center h-10 gap-x-1">
        <Border src={leftBorder} alt={"left border"} />
        <p className="text-xs">Or Sign up With</p>
        <Border src={rightBorder} alt={"left border"} />
      </div>
      <div className="flex justify-between align-center w-2/5 mx-auto">
        <AuthLogo src={google} alt="google logo" />
        <AuthLogo src={facebook} alt="facebook logo" />
        <AuthLogo src={ios} alt="ios logo" />
      </div>
    </form>
  );

  return (
    <section className={styles.main2}>
      <div
        className={`flex flex-col justify-start px-5 items-start min-h-screen ${
          !isAuth && styles.blue
        }`}
      >
        <img
          src={Logo}
          alt="share logo"
          className={`${styles.logo} h-4 md:h-6 mt-2`}
        />
        <div className={`self-center m-auto ${styles.main2Text}`}>
          <h2 className="text-2xl md:text-5xl font-bold my-3 leading-4">
            File Sharing Made{" "}
            <span className="text-blue-400 flex items-center">
              EASY <img src={star} alt="" className="ml-2 h-5 inline-block" />
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            nisi quis libero ultricies bibendum. Morbi in orci nec urna porta
            commodo ac ac turpis.
          </p>
        </div>
      </div>
      <div
        className={`${
          isAuth && styles.blue
        } flex justify-center items-center min-h-screen`}
      >
        {isAuth ? <FileShareForm /> : <AuthForm />}
      </div>
    </section>
  );
};

export default Main2;

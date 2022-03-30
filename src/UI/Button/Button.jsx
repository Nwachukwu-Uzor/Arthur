import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="py-1 px-6 bg-pink-400 text-white font-bold rounded rounded-tr-2xl hover:bg-pink-600 transition-all"
    >
      {props.children}
    </button>
  );
};

export default Button;

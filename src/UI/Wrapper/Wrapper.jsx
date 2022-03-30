import React from "react";

const Wrapper = (props) => {
  return (
    <div className={`py-4 md:py-6 px-6 ${props.className && props.className}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;

import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className=" text-[#3b6ff5] bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;

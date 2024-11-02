import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]  sm:px-10 md:px-12 sm:py-3 py-2 px-8 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-[#3b6ff5] text-white" : "bg-richblack-700 text-white"
        } hover:shadow-none hover:scale-95 transition-all duration-200`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;

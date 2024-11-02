import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center mt-24 px-4 lg:px-0">
      <div className="lg:w-[80%] flex gap-10 flex-col mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Become an
          <HighlightText text={" Instructor "} />
          and start earning
        </h1>

        <p className="font-medium text-base text-center w-[90%] mx-auto text-richblack-300">
          Join the community of passionate educators dedicated to transforming the learning experience. Our platform offers a range of resources designed to enhance your teaching experience.
        </p>

        <div className="w-fit mx-auto">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-3">
              Become Instructor
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection
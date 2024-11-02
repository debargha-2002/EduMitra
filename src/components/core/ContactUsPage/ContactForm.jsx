import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="shadow-[-6px_-6px_6px_rgba(255,255,255,0.8),6px_6px_6px_rgba(0,0,0,0.2)] text-richblack-500 rounded-xl p-5 sm:p-7 lg:p-14 flex flex-col gap-4 bg-[#f5f6f6]">
      <h1 className="text-2xl sm:text-4xl leading-8 sm:leading-10 font-semibold text-richblack-900">
        Reach out to us
      </h1>
      <p className="text-xs sm:text-base">
        Tell us more about yourself and what you have in mind.
      </p>

      <div className="mt-5 sm:mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;

import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto shadow-[-6px_-6px_6px_rgba(255,255,255,0.8),6px_6px_6px_rgba(0,0,0,0.2)] px-8 py-16 rounded-xl bg-[#f5f6f6]">
      <h1 className="text-center text-4xl font-semibold text-richblack-900">Get in Touch</h1>
      <p className="text-center text-richblack-400 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;

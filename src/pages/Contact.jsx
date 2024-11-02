import React from "react"

import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactForm from "../components/core/ContactUsPage/ContactForm"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto my-20 md:max-w-[48%] sm:max-w-[60%] max-w-[85%]  justify-between text-richblack-900">
        
          <ContactForm />
     
      </div>
      <div className="relative mx-auto my-32 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-richblack-900">
        {/* Reviws from Other Learner */}
        <h1 className="text-center md:text-4xl font-semibold mt-8 text-base">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default Contact

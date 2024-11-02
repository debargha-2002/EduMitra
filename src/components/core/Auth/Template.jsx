import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"


import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, formType }) {
  const { loading } = useSelector((state) => state.auth)
  
  return (
    <>
      {loading ? (
        <div className="spinner mx-auto my-auto"></div>
      ) : (
        <div className={` ${formType == "signup"?"my-10 min-w-[38%]":"md:my-auto md:min-w-[35%] sm:min-w-[60%] min-w-[80%] my-6"} mx-auto  bg-[#f5f6f6]  py-2 rounded-lg  shadow-[inset_5px_5px_5px_#cbced1,inset_-5px_-5px_5px_#ffffff] border border-richblack-5`}>
        <div className=" mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className=" mx-auto w-full max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-800 text-center">
              {title}
            </h1>
            <p className=" text-center font-mono"> {formType === "login"?"Login to your account":"Create Account for Free"}</p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
         
        </div>
        </div>
      )}
    </>
  )
}

export default Template

import React from 'react'
import { NavbarLinks } from "../../data/navbar-links"
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import ProfileDropdown from '../core/Auth/ProfileDropdown';
import { useSelector } from 'react-redux';
const MobileNav = ({mobileView,setMobileView,token}) => {
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.profile)
    console.log(user)
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 place-items-center overflow-auto bg-richblack-900 bg-opacity-50 backdrop-blur-sm text-white flex flex-col pt-4 text-sm sm:text-base font-semibold items-start pl-4">
        <div className=' text-white text-4xl font-bold' onClick={()=>{ setMobileView(!mobileView); navigate(-1)}}>
            <IoIosArrowRoundBack/>
        </div>
        <div>
          {
            NavbarLinks.map((ele,i)=>(
                <div onClick={()=>{setMobileView(!mobileView);navigate(ele.path)}}>
                <p>{ele.title}</p>
                </div>
            ))
          }
        </div>
        <div className='flex gap-2 mt-4'>
        {token === null && (
            <Link to="/login">
              <button onClick={()=>setMobileView(!mobileView)} className="rounded-lg text-sm border border-richblack-200 bg-[#0056b3] px-[10px] py-[3px] text-white">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button onClick={()=>setMobileView(!mobileView)} className="rounded-lg text-sm border border-richblack-200 bg-[#28A745] px-[10px] py-[3px] text-white">
                Sign up
              </button>
            </Link>
          )}
          </div>
          <div className=' flex items-center gap-2'>
          {token !== null && <ProfileDropdown />}
          <p>{user?.firstName} {user?.lastName}</p>

          </div>
    </div>
  )
}

export default MobileNav
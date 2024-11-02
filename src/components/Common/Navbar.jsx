import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/logo.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropdown"
import MobileNav from "./MobileNav"



function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const [mobileView,setMobileView] = useState(false)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const func = async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
      
       setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    }
    func();
  }, [])

  console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <>
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-richblack-25 ${
        location.pathname !== "/" ? " bg-white" : " bg-white"
      } transition-all duration-200`}
    >
      <div className="flex md:w-11/12 max-w-maxContent items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className=" hidden md:block">
          <img src={logo} alt="Logo" width={200} height={32} loading="lazy" />
        </Link>
        <Link to="/" className=" md:hidden ml-0">
          <img src={logo} alt="Logo" width={120} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 font-semibold">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "All Courses" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-blue-500"
                          : "text-richblack-600"
                      }`}
                    >
                      <p>{link.title}</p>
                    
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center text-richblack-900">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? " text-blue-300"
                          : "text-richblack-600"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-600" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-red-5 text-center text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-lg border border-richblack-200 bg-[#0056b3] px-[18px] py-[8px] text-white">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-lg border border-richblack-200 bg-[#28A745] px-[16px] py-[8px] text-white">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <div className=" flex sm:gap-5 mr-2 gap-4 md:hidden">
        {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative md:hidden ">
              <AiOutlineShoppingCart className="text-2xl text-richblack-600" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-4 w-4 place-items-center overflow-hidden rounded-full bg-red-5 text-center text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
        <button className=" md:hidden" onClick={()=>{setMobileView(!mobileView)}}>
          <AiOutlineMenu fontSize={20} fill="#AFB2BF" />
        </button>
        
        </div>
      </div>
      
    </div>
    {mobileView && <MobileNav mobileView={mobileView} setMobileView={setMobileView} token={token}/>}
    </>
  )
}

export default Navbar

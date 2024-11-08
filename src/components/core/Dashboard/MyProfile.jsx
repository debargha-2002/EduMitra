import { RiEditBoxLine } from "react-icons/ri"
import { MdModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../Common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-14 text-3xl font-semibold text-richblack-700">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-25 bg-[#f5f6f6] p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-800">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-400">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          color={"blue"}
          onclick={() => {
            navigate("/dashboard/settings")
          }}
         
        >
          <MdModeEditOutline/>
        </IconBtn>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-25 bg-[#f5f6f6] p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-800">About</p>
          <IconBtn
            text="Edit"
            color = {"blue"}
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
             <MdModeEditOutline/>
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-700"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-25 bg-[#f5f6f6] p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-800">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            color = {"blue"}
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <MdModeEditOutline/>
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-400">First Name</p>
              <p className="text-sm font-medium text-richblack-700">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-400">Email</p>
              <p className="text-sm font-medium text-richblack-700">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-400">Gender</p>
              <p className="text-sm font-medium text-richblack-700">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-400">Last Name</p>
              <p className="text-sm font-medium text-richblack-700">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-400">Phone Number</p>
              <p className="text-sm font-medium text-richblack-700">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-400">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-700">
                { user?.additionalDetails?.dateOfBirth?formattedDate(user?.additionalDetails?.dateOfBirth):
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

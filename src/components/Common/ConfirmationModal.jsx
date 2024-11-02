import IconBtn from "./IconBtn"

export default function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-200 bg-[#f5f6f6] p-6">
        <p className="text-2xl font-semibold text-richblack-900">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-600">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <button className="cursor-pointer rounded-md bg-red-5 py-[8px] px-[20px] font-semibold text-white border border-richblack-200"
            onClick={modalData?.btn1Handler}>
            {modalData?.btn1Text}
            </button>
          <button
            className="cursor-pointer rounded-md bg-[#80f13f] py-[8px] px-[20px] font-semibold text-richblack-900 border border-richblack-200"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}

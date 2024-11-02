export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  color,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center shadow-[7px_7px_8px_#cbced1,-7px_-7px_8px_#ffffff] ${
        outline ? "border border-richblue-200 bg-transparent" : `${color == "yellow"?"bg-[#fdbe00]":`${color == "blue"?" bg-[#55a7f9] text-white":" bg-[#008080] text-white"}`}`
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && color && " text-richblue-200"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}

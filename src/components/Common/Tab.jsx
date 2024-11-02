export default function Tab({ tabData, field, setField }) {
  return (
    <div
      
      className="flex shadow-[inset_5px_5px_5px_#cbced1,inset_-5px_-5px_5px_#ffffff] bg-[#f5f6f6]  p-1 gap-x-1 my-6 rounded-full max-w-max"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-richblack-800 text-richblack-5"
              : "bg-transparent text-richblack-400"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  );
}

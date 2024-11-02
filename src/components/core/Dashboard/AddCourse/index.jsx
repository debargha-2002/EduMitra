import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-[80%] items-start gap-x-6 mx-auto">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-semibold text-richblack-900">
            Add Course
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        
      </div>
    </>
  )
}

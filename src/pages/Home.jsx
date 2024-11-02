// Icons and Component Imports
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// Component Imports
import { CgProfile } from "react-icons/cg";
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import HomePageButton from "../components/core/HomePage/Button"

import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"


function Home() {
  return (
    <div className="bg-gradient-to-b from-[#e0f7fa] to-[#f5f6f6]">
      {/* Hero Section */}
      <motion.div
        className="relative flex min-h-screen items-center justify-center text-center text-richblack-900"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg space-y-6 max-w-3xl">
          <div className=" flex flex-col gap-1">
          <h1 className="text-2xl md:text-4xl font-bold">
            Welcome to <HighlightText text="EduMitra" />
          </h1>
          <h2 className="text-base md:text-xl font-semibold">
          Your Gateway to Learning
          </h2>
          </div>
          <p className="text-lg md:text-xl font-light">
            Discover a world of opportunities with courses designed for all levels.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <HomePageButton active={true} linkto="/signup">
              Get Started
            </HomePageButton>
            <Link to="/about" className="text-blue-600 flex items-center gap-2 font-semibold">
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="mx-auto mt-20 max-w-5xl px-6 py-12 space-y-8 text-center text-richblack-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Why Choose EduMitra?</h2>
        <p className="text-gray-700 md:text-lg">
          Discover the benefits of learning with EduMitra: quality content, flexible access, and certification.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Quality Content", color: "bg-blue-400" },
            { title: "Flexible Learning", color: "bg-[#4ade80]" },
            { title: "Certification", color: "bg-[#a855f7]" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-lg p-8 ${feature.color} text-white hover:scale-105 transition duration-300 shadow-lg`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm mt-2">Explore courses tailored to your learning needs.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Instructor Showcase */}
      <motion.div
        className="mx-auto mt-20 max-w-5xl px-6 space-y-8 text-center text-richblack-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Meet Our Expert Instructors</h2>
        <p className="text-gray-700 md:text-lg">Learn from industry leaders who bring real-world experience to the classroom.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              name: "John Doe",
              subject: "Web Development",
              bio: "A passionate web developer with over 10 years of experience in building robust web applications.",
            },
            {
              name: "John Doe",
              subject: "Graphic Design",
              
              bio: "Creative graphic designer specializing in brand identity and marketing materials.",
            },
            {
              name: "John Doe",
              subject: "Data Science",
             
              bio: "Data scientist with a knack for turning complex data into actionable insights.",
            },
          ].map((instructor, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CgProfile size={60} className=" text-richblack-500 "/>
              <h3 className="text-lg font-semibold">{instructor.name}</h3>
              <p className="text-gray-600">{instructor.subject}</p>
              <p className="text-gray-500 text-sm text-center mt-2">{instructor.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
       <InstructorSection/>
      {/* Success Stories Section */}
      <motion.div
        className="mx-auto mt-20 max-w-5xl px-6 space-y-8 text-center text-richblack-900"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Success Stories</h2>
        <p className="text-gray-700 md:text-lg">
          Read inspiring stories from our students who have transformed their careers through our courses.
        </p>
        <div className="space-y-4">
          {[
            {
              name: "John Doe",
              story: "After completing the Data Science course, I landed my dream job as a Data Analyst!",
            },
            {
              name: "John Doe",
              story: "The Graphic Design program helped me become a freelance designer with multiple clients.",
            },
            {
              name: "John Doe",
              story: "I transitioned from a different career to Web Development, and now I love what I do!",
            },
          ].map((story, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg shadow-md border border-richblack-25"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold">{story.name}</h4>
              <p className="text-gray-600">{story.story}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-richblack-900">
        {/* Become an Instructor Section */}
        {/* Add your content here */}

        {/* Reviews from Other Learners */}
        <h1 className="text-center md:text-4xl font-semibold mt-8 text-base">
          Reviews from our students
        </h1>
        <ReviewSlider />
      </div>

      {/* Fixed Join Now Button */}
      <Link to="/signup" className="fixed bottom-6 right-6 z-50">
        <motion.button
          className="bg-richblue-600 text-white md:py-3 md:px-5 py-2 px-3 text-sm md:text-lg rounded-full shadow-lg hover:bg-richblue-700 transition duration-300"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          Join Now
        </motion.button>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

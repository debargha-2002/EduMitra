import React, { useEffect } from "react";
import { FaUsers, FaGlobe, FaLightbulb, FaBook, FaChalkboardTeacher, FaLaptop } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Common/Footer";

const AboutUs = () => {
  const controlsMission = useAnimation();
  const controlsApproach = useAnimation();
  const controlsFeatures = useAnimation();

  const [refMission, inViewMission] = useInView({ threshold: 0.1, triggerOnce: false });
  const [refApproach, inViewApproach] = useInView({ threshold: 0.1, triggerOnce: false });
  const [refFeatures, inViewFeatures] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    // Animate when in view, no hiding
    if (inViewMission) controlsMission.start("visible");
    if (inViewApproach) controlsApproach.start("visible");
    if (inViewFeatures) controlsFeatures.start("visible");
  }, [controlsMission, inViewMission, controlsApproach, inViewApproach, controlsFeatures, inViewFeatures]);

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <>
    <section className="relative bg-gradient-to-b from-[#e0f7fa] to-[#f5f6f6] py-20 px-8 lg:px-24 text-gray-800 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-5xl font-extrabold text-teal-700 mb-4">About Edumitra</h2>
        <p className="text-xl text-gray-600">
          Bridging knowledge and opportunity, Edumitra empowers learners to achieve their full potential with cutting-edge resources and a world-class learning experience.
        </p>
      </div>

      {/* Mission, Vision, Values Cards */}
      <div ref={refMission} className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {[{ id: 0, icon: <FaUsers />, title: "Our Mission", text: "To break down barriers in education by providing accessible, high-quality resources globally." },
          { id: 1, icon: <FaGlobe />, title: "Our Vision", text: "A world where learning is limitless, technology-driven, and accessible to all." },
          { id: 2, icon: <FaLightbulb />, title: "Our Values", text: "Inclusivity, innovation, and a passion for lifelong learning guide every course and experience we create." }].map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            className="bg-white p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate={controlsMission}
            variants={cardVariants}
          >
            <div className="text-5xl text-teal-600 mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-teal-700">{item.title}</h3>
            <p className="mt-4 text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Our Approach Section */}
      <motion.div
        ref={refApproach}
        className="mt-20 max-w-5xl mx-auto relative z-10 text-center"
        initial="hidden"
        animate={controlsApproach}
        variants={cardVariants}
      >
        <h3 className="text-3xl font-bold text-teal-700 mb-6">Our Approach</h3>
        <p className="text-gray-600 mb-10">Edumitra believes in a balanced blend of traditional learning principles and modern technology, creating an inclusive environment that fosters creativity, critical thinking, and collaboration.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ id: 0, icon: <FaBook />, title: "Comprehensive Curriculum", text: "Wide-ranging courses crafted by experts to meet diverse learning needs." },
            { id: 1, icon: <FaChalkboardTeacher />, title: "Expert Instructors", text: "Access to experienced mentors and real-world knowledge." },
            { id: 2, icon: <FaLaptop />, title: "Interactive Learning", text: "Hands-on projects, assessments, and discussions to deepen understanding." }].map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              initial="hidden"
              animate={controlsApproach}
              variants={cardVariants}
            >
              <div className="text-4xl text-teal-600 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-teal-700">{item.title}</h4>
              <p className="mt-4 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        ref={refFeatures}
        className="mt-20 max-w-5xl mx-auto relative z-10 text-center"
        initial="hidden"
        animate={controlsFeatures}
        variants={cardVariants}
      >
        <h3 className="text-3xl font-bold text-teal-700 mb-6">Key Features</h3>
        <p className="text-gray-600 mb-10">Edumitra provides a feature-rich learning experience tailored to support each learner's journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ id: 0, icon: <FaUsers />, title: "Community Support", text: "Join a community of learners to support and inspire each other." },
            { id: 1, icon: <FaLightbulb />, title: "Skill-Based Learning", text: "Learn practical skills that translate directly into the real world." },
            { id: 2, icon: <FaGlobe />, title: "Global Access", text: "Learn anywhere, anytime, with resources designed for accessibility." }].map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              initial="hidden"
              animate={controlsFeatures}
              variants={cardVariants}
            >
              <div className="text-4xl text-teal-600 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-teal-700">{item.title}</h4>
              <p className="mt-4 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    <Footer/>
    </>
  );
};

export default AboutUs;

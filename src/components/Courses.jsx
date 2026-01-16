import { motion } from "framer-motion"
import {
  Calculator,
  Brain,
  Monitor,
  Building2,
  Clock,
  Users,
  CheckCircle,
  ChevronDown,
  Cpu,
} from "lucide-react"
import { useState } from "react"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Images
import abacusImg from "../assets/abacus.jpg"
import phonicsImg from "../assets/Phonics.jpg"
import vedicImg from "../assets/Vedic.jpg"
import roboticsImg from "../assets/Robatics.jpg"

const courses = [
  {
    title: "Abacus Training",
    description:
      "Hands-on visual learning that strengthens concentration, memory, and calculation speed.",
    icon: Calculator,
    image: abacusImg,
    age: "5 – 14 Years",
    duration: "8 Levels · 2–3 Months / Level",
    who: "Beginners & primary school students",
    mode: ["Online", "Offline"],
    syllabus: [
      "Number recognition & finger movements",
      "Addition & subtraction techniques",
      "Mental calculation using visualization",
      "Speed & accuracy drills",
    ],
    benefits: [
      "Improves concentration",
      "Enhances brain coordination",
      "Builds strong mental math skills",
    ],
  },
  {
    title: "Phonics Training",
    description:
      "A structured phonics program that helps children read and pronounce English confidently.",
    icon: Monitor,
    image: phonicsImg,
    age: "4 – 8 Years",
    duration: "3 Levels · 2 Months / Level",
    who: "Early learners & young children",
    mode: ["Online", "Offline"],
    syllabus: [
      "Letter sounds & blending",
      "Word formation",
      "Sentence reading",
      "Phonemic awareness",
    ],
    benefits: [
      "Improves reading fluency",
      "Boosts confidence",
      "Strong pronunciation skills",
    ],
  },
  {
    title: "Vedic Maths",
    description:
      "Advanced mental calculation techniques for faster problem solving.",
    icon: Brain,
    image: vedicImg,
    age: "8 – 16 Years",
    duration: "4 Levels · 2 Months / Level",
    who: "School students & exam aspirants",
    mode: ["Online", "Offline"],
    syllabus: [
      "Vedic shortcuts",
      "Fast multiplication",
      "Squares & cubes",
      "Exam strategies",
    ],
    benefits: [
      "Faster calculations",
      "Improved accuracy",
      "Reduced math anxiety",
    ],
  },
  {
    title: "Robotics",
    description:
      "Hands-on robotics training with electronics, sensors and automation.",
    icon: Cpu,
    image: roboticsImg,
    age: "9 – 16 Years",
    duration: "Project-based · 2–3 Months",
    who: "Tech-enthusiastic students",
    mode: ["Offline"],
    syllabus: [
      "Electronics basics",
      "Motors & sensors",
      "Robot assembly",
      "Live projects",
    ],
    benefits: [
      "STEM exposure",
      "Logical thinking",
      "Problem-solving skills",
    ],
  },
]

const Courses = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="courses" className="py-28 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-violet-600">Courses</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Skill-based programs designed for academic and career excellence.
          </p>
        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden
                  border border-violet-100 shadow-md hover:shadow-xl transition"
                >
                  {/* Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-8">
                    {/* Icon */}
                    <div className="mb-4 w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center">
                      <Icon className="text-violet-600" size={26} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-700 mb-4">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-sm mb-4">
                      <span className="flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full">
                        <Users size={16} className="text-violet-600" />
                        {course.age}
                      </span>
                      <span className="flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full">
                        <Clock size={16} className="text-purple-600" />
                        {course.duration}
                      </span>
                    </div>

                    {/* Mode */}
                    <div className="flex gap-2 mb-4">
                      {course.mode.map((m, i) => (
                        <span
                          key={i}
                          className={`px-4 py-1 rounded-full text-sm font-medium
                          ${
                            m === "Online"
                              ? "bg-violet-50 text-violet-700"
                              : "bg-purple-50 text-purple-700"
                          }`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-5">
                      {course.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2 text-gray-700">
                          <CheckCircle size={18} className="text-violet-600 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Accordion */}
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex justify-between items-center w-full
                      text-violet-600 font-semibold mb-4"
                    >
                      View Syllabus
                      <ChevronDown
                        className={`transition ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openIndex === index && (
                      <ul className="mb-5 space-y-2 text-sm text-gray-700">
                        {course.syllabus.map((s, i) => (
                          <li key={i}>• {s}</li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <a
                      href="https://wa.me/919025205280"
                      className="block text-center bg-gradient-to-r
                      from-violet-600 to-purple-500 text-white
                      font-semibold py-3 rounded-xl shadow hover:scale-[1.02] transition"
                    >
                      Book Free Demo Class
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Courses

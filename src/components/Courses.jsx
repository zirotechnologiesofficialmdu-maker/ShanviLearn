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
} from "lucide-react"
import { useState } from "react"

const courses = [
  {
    title: "Abacus Training",
    description:
      "Hands-on visual learning that strengthens concentration, memory, and calculation speed through structured abacus practice.",
    icon: Calculator,
    age: "5 – 12 Years",
    duration: "6 Levels · 2–3 Months / Level",
    who: "Ideal for beginners and primary school students",
    syllabus: [
      "Number recognition & finger movements",
      "Basic addition & subtraction",
      "Mental calculation using visualization",
      "Speed & accuracy drills",
    ],
    benefits: [
      "Improves focus & concentration",
      "Enhances left & right brain coordination",
      "Builds strong mental arithmetic skills",
    ],
  },
  {
    title: "Vedic Maths",
    description:
      "Advanced mental calculation techniques that help students solve complex problems quickly and confidently.",
    icon: Brain,
    age: "8 – 16 Years",
    duration: "4 Levels · 2 Months / Level",
    who: "Recommended for school students & exam preparation",
    syllabus: [
      "Vedic calculation shortcuts",
      "Multiplication & division tricks",
      "Squares, cubes & fast calculations",
      "Time-saving exam strategies",
    ],
    benefits: [
      "Faster problem-solving skills",
      "Boosts exam performance",
      "Reduces fear of mathematics",
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
            Structured programs that build confidence, speed, and mental
            strength through proven learning techniques.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/80 backdrop-blur-xl border border-violet-100
                rounded-3xl p-8 shadow-md hover:shadow-2xl transition"
              >
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center">
                  <Icon className="text-violet-600" size={30} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-700 mb-5">{course.description}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-sm mb-5">
                  <span className="flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full">
                    <Users size={16} className="text-violet-600" />
                    {course.age}
                  </span>
                  <span className="flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full">
                    <Clock size={16} className="text-purple-600" />
                    {course.duration}
                  </span>
                </div>

                {/* Who */}
                <p className="text-sm text-gray-600 mb-5">
                  <strong>Who should join:</strong> {course.who}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
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
                  className="flex items-center justify-between w-full text-violet-600 font-semibold mb-4"
                >
                  View Syllabus
                  <ChevronDown
                    className={`transition ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <ul className="mb-6 space-y-2 text-gray-700 text-sm">
                    {course.syllabus.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <a
                  href="https://wa.me/919025205280"
                  className="block text-center bg-gradient-to-r from-violet-600 to-purple-500
                  text-white font-semibold py-3 rounded-xl shadow hover:scale-[1.02] transition"
                >
                  Book Free Demo Class
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Modes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col sm:flex-row justify-center gap-6"
        >
          <div className="flex items-center gap-3 bg-white/80 border border-violet-100 rounded-xl px-6 py-4 shadow-sm">
            <Monitor className="text-violet-600" />
            Online Classes Available
          </div>
          <div className="flex items-center gap-3 bg-white/80 border border-violet-100 rounded-xl px-6 py-4 shadow-sm">
            <Building2 className="text-purple-600" />
            Offline Classes Available
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses

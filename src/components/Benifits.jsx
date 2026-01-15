import { motion } from "framer-motion"
import {
  Brain,
  Sparkles,
  Zap,
  Smile,
  Trophy,
  BookOpen,
} from "lucide-react"

const benefits = [
  {
    title: "Improves Concentration",
    desc: "Children develop better focus and attention span through structured mental exercises.",
    icon: Brain,
  },
  {
    title: "Boosts Memory Power",
    desc: "Regular practice strengthens visual and auditory memory skills.",
    icon: Sparkles,
  },
  {
    title: "Faster Calculations",
    desc: "Mental calculation techniques improve speed and accuracy in maths.",
    icon: Zap,
  },
  {
    title: "Builds Confidence",
    desc: "Children gain confidence as maths becomes easy and enjoyable.",
    icon: Smile,
  },
  {
    title: "Academic Excellence",
    desc: "Supports better performance in school exams and competitions.",
    icon: Trophy,
  },
  {
    title: "Love for Learning",
    desc: "Fun-based learning removes fear and stress from mathematics.",
    icon: BookOpen,
  },
]

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Benefits of <span className="text-violet-600">Our Program</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our Abacus & Vedic Maths training helps children grow mentally,
            academically, and emotionally.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white/80 backdrop-blur-lg border border-violet-100
                rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center
                rounded-full bg-violet-100">
                  <Icon className="text-violet-600" size={26} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits

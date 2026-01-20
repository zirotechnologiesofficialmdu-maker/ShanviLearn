import { motion } from "framer-motion"
import {
  Brain,
  Sparkles,
  Zap,
  Calculator,
  GraduationCap,
  Users,
} from "lucide-react"

const features = [
  {
    title: "Boost Concentration",
    icon: Brain,
    color: "text-violet-600",
  },
  {
    title: "Improve Memory",
    icon: Sparkles,
    color: "text-purple-600",
  },
  {
    title: "Increase Speed & Accuracy",
    icon: Zap,
    color: "text-indigo-600",
  },
  {
    title: "Develop Mental Maths Skills",
    icon: Calculator,
    color: "text-fuchsia-600",
  },
]

const Features = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= ABOUT US ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* About Text */}
          <div>
            <span className="inline-flex items-center gap-2 text-violet-600 font-semibold mb-3">
              <GraduationCap size={18} />
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Empowering Young Minds Through
              <span className="text-violet-600"> Abacus & Vedic Maths</span>
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Shanvi Learning Hub is dedicated to helping children unlock their
              true mental potential. Our programs are carefully designed to
              enhance concentration, memory, and calculation speed in a fun,
              engaging, and stress-free environment.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              With experienced trainers and structured learning methods, we
              ensure every child receives personal attention and measurable
              progress.
            </p>

            {/* ================= TUTOR INFO ================= */}
            <div className="mt-6 inline-block rounded-2xl bg-violet-50 border border-violet-200 px-6 py-4">
              <p className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <GraduationCap size={18} className="text-violet-600" />
                S. Sivasathya
              </p>
              <p className="text-sm font-semibold text-violet-700 mt-1">
                M.E., M.D (Acu)., Spl. D.Ed.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Tutor
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <Users className="text-violet-600" />
                Small Batch Learning
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <Brain className="text-purple-600" />
                Child-Friendly Approach
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="bg-white/80 backdrop-blur-lg border border-violet-100 rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              What Makes Us Different?
            </h3>

            <ul className="space-y-4">
              {[
                "Certified & Experienced Trainer",
                "Online & Offline Classes",
                "Interactive Learning Methods",
                "Regular Progress Tracking",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 w-2 h-2 bg-violet-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ================= FEATURES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-violet-600">Shanvi?</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our scientifically designed learning methods help children
            develop strong mental abilities from an early age.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/80 backdrop-blur-lg border border-violet-100
                rounded-2xl p-6 text-center shadow-sm hover:shadow-xl
                transition-all duration-300"
              >
                <div
                  className="mx-auto mb-5 w-14 h-14 flex items-center justify-center
                  rounded-full bg-violet-100 group-hover:bg-violet-200 transition"
                >
                  <Icon className={`${feature.color}`} size={28} />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

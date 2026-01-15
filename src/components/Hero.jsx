import { motion } from "framer-motion"
import { Brain, Calculator, Phone, MessageCircle } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-32 flex items-center justify-center overflow-hidden"
    >
      {/* 🔮 Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/Hero.png')",
        }}
      />

      {/* 🤍 Soft White + Purple Overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-white/70 via-violet-50/60 to-purple-100/60" />

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />

      {/* 🧠 Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col justify-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)]">
        
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/80 text-violet-700 px-4 py-1 rounded-full text-sm mb-6 shadow mx-auto"
        >
          <Brain size={16} />
          Abacus & Vedic Maths Training
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Build Your Child’s <br />
          <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
            Brain Power & Calculation Speed
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Fun and effective Abacus & Vedic Maths classes that enhance
          concentration, memory, and mental calculation skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:9025205280"
            className="inline-flex items-center justify-center gap-2
            bg-gradient-to-r from-violet-600 to-purple-500
            px-8 py-4 rounded-full text-white font-semibold
            shadow-lg hover:scale-105 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href="https://wa.me/919025205280"
            className="inline-flex items-center justify-center gap-2
            bg-white px-8 py-4 rounded-full
            text-violet-700 font-semibold border border-violet-200
            hover:bg-violet-50 transition"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Feature Highlights */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="mt-10 sm:mt-12 md:mt-16
  grid grid-cols-1 sm:grid-cols-3
  gap-3 sm:gap-4 md:gap-6
  text-gray-800"
>
  <div className="flex items-center justify-center gap-2
  bg-white/80 border border-violet-100
  rounded-lg sm:rounded-xl
  px-4 py-3 sm:p-4
  shadow-sm text-sm sm:text-base">
    <Brain className="text-violet-600" size={18} />
    Boost Concentration
  </div>

  <div className="flex items-center justify-center gap-2
  bg-white/80 border border-violet-100
  rounded-lg sm:rounded-xl
  px-4 py-3 sm:p-4
  shadow-sm text-sm sm:text-base">
    <Calculator className="text-purple-600" size={18} />
    Faster Calculations
  </div>

  <div className="flex items-center justify-center gap-2
  bg-white/80 border border-violet-100
  rounded-lg sm:rounded-xl
  px-4 py-3 sm:p-4
  shadow-sm text-sm sm:text-base">
    <Brain className="text-indigo-600" size={18} />
    Improve Memory
  </div>
</motion.div>

      </div>
    </section>
  )
}

export default Hero

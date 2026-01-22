import { motion } from "framer-motion"
import { Brain, Calculator, Phone, MessageCircle } from "lucide-react"

const Hero = () => {
  return (
<section
  id="home"
  className="
    relative min-h-screen
    pt-20 sm:pt-24 md:pt-36
    flex items-center justify-center
    overflow-hidden
  "
>

      {/* 🔮 Background Image */}
{/* 🔮 Background Image */}
<motion.div
  initial={{ scaleY: 1.08 }}
  animate={{ scaleY: 1 }}
  transition={{ duration: 2.2, ease: "easeOut" }}
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/Hero.png')",
    transformOrigin: "center",
  }}
/>


      {/* 🤍 Softer Overlay */}
{/* 🤍 Softer Overlay */}
<div
  className="absolute inset-0 bg-gradient-to-br
  from-white/25 via-violet-50/20 to-purple-100/25"
/>


      {/* ✨ Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-violet-300/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-[420px] h-[420px] bg-purple-300/25 rounded-full blur-3xl" />

      {/* 🧠 Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6
        flex flex-col items-center justify-center text-center
        min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)]"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2
          bg-white/90 backdrop-blur
          text-violet-700 px-5 py-1.5
          rounded-full text-sm
          shadow-sm mb-8"
        >
          <Brain size={16} />
          Abacus • Phonics • Vedic Maths
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl
          font-extrabold text-gray-900 leading-tight
          max-w-4xl"
        >
          Build Your Child’s <br />
          <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
            Brain Power & Confidence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-base sm:text-lg
          text-gray-700 max-w-3xl leading-relaxed"
        >
          Scientifically designed programs that improve concentration,
          calculation speed, memory, and learning confidence through
          fun, engaging, and effective methods.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row
          gap-4 sm:gap-6 justify-center"
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
            text-violet-700 font-semibold
            border border-violet-200
            hover:bg-violet-50 transition"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* ⭐ Feature Highlights */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 1,
              },
            },
          }}
          className="mt-16 sm:mt-20
          grid grid-cols-1 sm:grid-cols-3
          gap-4 sm:gap-6
          w-full max-w-4xl"
        >
          {[
            { icon: Brain, text: "Boost Concentration", color: "text-violet-600" },
            { icon: Calculator, text: "Faster Calculations", color: "text-purple-600" },
            { icon: Brain, text: "Improve Memory", color: "text-indigo-600" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center justify-center gap-3
                bg-white/90 backdrop-blur
                border border-violet-100
                rounded-xl px-6 py-4
                shadow-sm text-sm sm:text-base"
              >
                <Icon className={item.color} size={20} />
                {item.text}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

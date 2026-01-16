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
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Hero.png')",
        }}
      />

      {/* 🤍 Soft Overlay (Reduced opacity) */}
      <div
        className="absolute inset-0 bg-gradient-to-br
        from-white/30 via-violet-50/25 to-purple-100/30"
      />

      {/* ✨ Glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />

      {/* 🧠 Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center
        flex flex-col justify-center
        min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-8rem)]"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/85
          text-violet-700 px-4 py-1 rounded-full text-sm mb-6
          shadow mx-auto backdrop-blur"
        >
          <Brain size={16} />
          Abacus • Phonics • Vedic Maths
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold
          text-gray-900 leading-tight"
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
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Scientifically designed programs that improve concentration,
          calculation speed, memory, and learning confidence through fun
          and effective methods.
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
            text-violet-700 font-semibold
            border border-violet-200
            hover:bg-violet-50 transition"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* ⭐ Feature Highlights (Mobile Friendly + Stagger Animation) */}
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
          className="
            mt-14 sm:mt-16 md:mt-20
            grid grid-cols-1 sm:grid-cols-3
            gap-4 sm:gap-6
            text-gray-800
          "
        >
          {[
            {
              icon: Brain,
              text: "Boost Concentration",
              color: "text-violet-600",
            },
            {
              icon: Calculator,
              text: "Faster Calculations",
              color: "text-purple-600",
            },
            {
              icon: Brain,
              text: "Improve Memory",
              color: "text-indigo-600",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="
                  flex items-center justify-center gap-3
                  bg-white/85 border border-violet-100
                  rounded-xl px-5 py-4
                  shadow-sm backdrop-blur
                  text-sm sm:text-base
                "
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

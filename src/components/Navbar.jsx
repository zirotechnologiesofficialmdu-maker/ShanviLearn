import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { motion } from "framer-motion"

const navItems = ["Home", "About", "Courses", "Benefits", "Contact"]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/90 shadow-lg shadow-violet-100 backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md"}
        border-b border-violet-100`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🌸 Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900"
        >
          <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
            Shanvi
          </span>{" "}
          <span className="text-gray-700 font-semibold">
            Learning Hub
          </span>
        </motion.h1>

        {/* 🌿 Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative text-gray-700 font-medium tracking-wide group"
            >
              {item}
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </motion.a>
          ))}
        </div>

        {/* 📞 Call Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="tel:9025205280"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full
          bg-gradient-to-r from-violet-600 to-purple-500
          text-white font-semibold shadow-lg shadow-violet-200
          hover:shadow-violet-300 transition-all"
        >
          <Phone size={18} />
          Call Now
        </motion.a>

        {/* 📱 Mobile Menu Icon */}
        <button
          className="md:hidden text-violet-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-xl px-6 py-6 space-y-6
          text-gray-800 border-t border-violet-100"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              whileTap={{ scale: 0.95 }}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold tracking-wide"
            >
              {item}
            </motion.a>
          ))}

          <a
            href="tel:9025205280"
            className="flex items-center justify-center gap-2 bg-gradient-to-r
            from-violet-600 to-purple-500 py-3 rounded-xl
            text-white font-semibold shadow-md"
          >
            <Phone size={18} />
            Call Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar

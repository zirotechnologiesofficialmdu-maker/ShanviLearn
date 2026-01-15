import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-white to-violet-50"
    >
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
            Get in <span className="text-violet-600">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or want to enroll your child? We’re happy to help you.
            Contact us today for a free demo class.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-violet-100
            rounded-3xl p-8 shadow-md hover:shadow-xl transition"
          >
            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-violet-100
            flex items-center justify-center">
              <Phone className="text-violet-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-700 mb-4">90252 05280</p>
            <a
              href="tel:9025205280"
              className="text-violet-600 font-semibold hover:underline"
            >
              Call Now
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-violet-100
            rounded-3xl p-8 shadow-md hover:shadow-xl transition"
          >
            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-green-100
            flex items-center justify-center">
              <MessageCircle className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-700 mb-4">
              Quick responses & easy communication
            </p>
            <a
              href="https://wa.me/919025205280"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-full
              font-semibold shadow hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Location / Timing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-violet-100
            rounded-3xl p-8 shadow-md hover:shadow-xl transition"
          >
            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-violet-100
            flex items-center justify-center">
              <MapPin className="text-violet-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Classes Available
            </h3>
            <p className="text-gray-700 mb-2">Online & Offline</p>
            <div className="flex items-center justify-center gap-2 text-gray-700 mt-3">
              <Clock size={16} />
              Flexible Timings
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact

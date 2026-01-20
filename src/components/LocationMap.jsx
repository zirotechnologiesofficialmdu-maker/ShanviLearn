import { motion } from "framer-motion"
import { Navigation } from "lucide-react"

const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Glow background */}
      <div className="absolute -inset-2 bg-violet-600/20 blur-2xl rounded-3xl" />

      {/* Map Card */}
      <div
        className="relative rounded-3xl overflow-hidden
        border border-violet-700/60
        bg-white/10 backdrop-blur-xl
        shadow-[0_25px_60px_rgba(124,58,237,0.35)]"
      >
        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3929.5088750101872!2d78.0883429!3d9.9747569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c92ac1ad0157%3A0x5c9e73df0fb44bb9!2sShanvi%20Learning%20Hub!5e0!3m2!1sen!2sin!4v1768899936909!5m2!1sen!2sin"
          className="w-full h-[220px] md:h-[260px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shanvi Learning Hub Location"
        />

        {/* Bottom overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-4">
          <a
            href="https://www.google.com/maps/place/Shanvi+Learning+Hub/@9.9747569,78.0883429,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
            bg-white text-violet-700
            px-4 py-2 rounded-full
            font-semibold shadow
            hover:bg-violet-100 transition"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default LocationMap

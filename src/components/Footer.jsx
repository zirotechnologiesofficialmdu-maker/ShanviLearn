import { Phone, MessageCircle, MapPin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-violet-900 to-violet-950 text-violet-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Shanvi <span className="text-violet-300">Learning Hub</span>
          </h2>
          <p className="text-violet-200 leading-relaxed">
            Empowering young minds through Abacus & Vedic Maths with
            proven methods that build confidence, focus, and speed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["Home", "About", "Courses", "Benefits", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-violet-200">
            <li className="flex items-center gap-3">
              <Phone size={18} /> 90252 05280
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={18} /> WhatsApp Support
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} /> Online & Offline Classes
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> shanvilearninghub@gmail.com
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get Started
          </h3>
          <p className="text-violet-200 mb-4">
            Book a free demo class and help your child excel in mathematics.
          </p>
          <a
            href="https://wa.me/919025205280"
            className="inline-flex items-center gap-2 bg-green-500 text-white
            px-6 py-3 rounded-full font-semibold shadow-lg
            hover:scale-105 transition"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-violet-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row
        justify-between items-center text-violet-300 text-sm">
          <p>
            © {new Date().getFullYear()} Shanvi Learning Hub. All Rights Reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Designed with 💜 for young learners
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { motion } from "framer-motion"
import { ShieldCheck, Building2, CheckCircle } from "lucide-react"

import isoImg from "../assets/ISO.jpg"
import msmeImg from "../assets/MSME.jpg"

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-28 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-violet-600">Certifications</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Shanvi Learning Hub is officially recognized and certified,
            ensuring trust, quality education standards, and institutional credibility.
          </p>
        </motion.div>

        {/* ================= ISO CERTIFICATE ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* Certificate Image (A4 – FULL VIEW) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Depth shadow layers */}
            <div className="absolute -rotate-2 top-6 w-[85%] h-[95%]
              bg-violet-200/40 rounded-2xl blur-md" />
            <div className="absolute rotate-1 top-3 w-[90%] h-[98%]
              bg-violet-100/60 rounded-2xl blur-sm" />

            <img
              src={isoImg}
              alt="ISO Certificate - Shanvi Learning Hub"
              className="relative w-[92%] max-w-md bg-white
              rounded-2xl shadow-2xl border border-slate-200
              object-contain"
            />
          </motion.div>

          {/* ISO Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <ShieldCheck className="text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                ISO Certified Institution
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Shanvi Learning Hub is an ISO certified educational institution,
              demonstrating adherence to internationally accepted standards
              in quality management, teaching methodology, and operational excellence.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "International quality standards in education",
                "Structured curriculum & learning outcomes",
                "Student-focused teaching approach",
                "Continuous improvement in learning systems",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-violet-600 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ================= MSME CERTIFICATE ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* MSME Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Building2 className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                MSME Registered Learning Hub
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Shanvi Learning Hub is registered under the Ministry of Micro,
              Small & Medium Enterprises (MSME), Government of India,
              validating our authenticity, transparency, and long-term commitment
              to educational excellence.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "Government of India recognized institution",
                "Legally registered and verified entity",
                "High standards of operational transparency",
                "Trusted by parents and students",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* MSME Image (A4 – FULL VIEW) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Depth shadow layers */}
            <div className="absolute -rotate-2 top-6 w-[85%] h-[95%]
              bg-purple-200/40 rounded-2xl blur-md" />
            <div className="absolute rotate-1 top-3 w-[90%] h-[98%]
              bg-purple-100/60 rounded-2xl blur-sm" />

            <img
              src={msmeImg}
              alt="MSME Certificate - Shanvi Learning Hub"
              className="relative w-[92%] max-w-md bg-white
              rounded-2xl shadow-2xl border border-slate-200
              object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

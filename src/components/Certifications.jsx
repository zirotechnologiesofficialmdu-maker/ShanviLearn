import { motion } from "framer-motion"
import { ShieldCheck, Building2, Award, CheckCircle } from "lucide-react"

import isoImg from "../assets/ISO.jpg"
import msmeImg from "../assets/MSME.jpg"
import certImg from "../assets/Cert.jpeg"

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 sm:py-28 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-violet-600">Certifications</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Shanvi Learning Hub is officially recognized and certified,
            ensuring trust, quality education standards, and institutional credibility.
          </p>
        </motion.div>

        {/* ================= ISO ================= */}
        <div className="grid md:grid-cols-2 gap-14 sm:gap-16 items-center mb-24 sm:mb-32">
          <CertificateImage img={isoImg} color="violet" />
          <CertificateContent
            icon={<ShieldCheck className="text-violet-600" />}
            title="ISO Certified Institution"
            color="violet"
            description="Shanvi Learning Hub is an ISO certified educational institution that follows internationally accepted standards in quality management and teaching excellence."
            points={[
              "International education quality standards",
              "Structured curriculum & outcomes",
              "Student-centric learning approach",
              "Continuous academic improvement",
            ]}
          />
        </div>

        {/* ================= MSME ================= */}
        <div className="grid md:grid-cols-2 gap-14 sm:gap-16 items-center mb-24 sm:mb-32">
          <CertificateContent
            icon={<Building2 className="text-purple-600" />}
            title="MSME Registered Learning Hub"
            color="purple"
            description="Registered under the Ministry of Micro, Small & Medium Enterprises (MSME), Government of India, validating institutional authenticity and transparency."
            points={[
              "Government of India recognized",
              "Legally verified educational entity",
              "High operational transparency",
              "Trusted by parents & students",
            ]}
          />
          <CertificateImage img={msmeImg} color="purple" />
        </div>

        {/* ================= ADDITIONAL CERTIFICATE ================= */}
        <div className="grid md:grid-cols-2 gap-14 sm:gap-16 items-center">

          <CertificateImage img={certImg} color="amber" />

          <CertificateContent
            icon={<Award className="text-amber-600" />}
            title="Professional Membership Certification"
            color="amber"
            description="This certification represents professional affiliation and active membership in a recognized educational initiative, strengthening credibility and teaching excellence."
            points={[
              "Recognized professional membership",
              "Certified educator affiliation",
              "Commitment to ethical teaching standards",
              "Continuous professional development",
            ]}
          />
        </div>

      </div>
    </section>
  )
}

/* ================= IMAGE COMPONENT ================= */
const CertificateImage = ({ img, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative flex justify-center"
  >
    <div
      className={`absolute -rotate-2 top-6 w-[85%] h-[95%]
      bg-${color}-200/40 rounded-2xl blur-md`}
    />
    <div
      className={`absolute rotate-1 top-3 w-[90%] h-[98%]
      bg-${color}-100/60 rounded-2xl blur-sm`}
    />

    <img
      src={img}
      alt="Certificate"
      className="relative w-[92%] max-w-md bg-white
      rounded-2xl shadow-2xl border border-slate-200
      object-contain"
    />
  </motion.div>
)

/* ================= CONTENT COMPONENT ================= */
const CertificateContent = ({ icon, title, description, points, color }) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>

    <p className="text-gray-700 leading-relaxed mb-6">
      {description}
    </p>

    <ul className="space-y-3 text-gray-700">
      {points.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle className={`text-${color}-600 mt-1`} size={18} />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

export default Certifications

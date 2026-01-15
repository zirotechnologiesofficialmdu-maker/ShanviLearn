import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useEffect, useState } from "react"

const reviews = [
  {
    name: "Mrs. Lakshmi",
    role: "Parent",
    review:
      "My child’s concentration and calculation speed improved within a few months. Very happy with the teaching method.",
  },
  {
    name: "Mr. Arun",
    role: "Parent",
    review:
      "Excellent coaching. Maths has become fun for my son. Teachers are very patient and supportive.",
  },
  {
    name: "Mrs. Revathi",
    role: "Parent",
    review:
      "Highly recommended! The Abacus program helped my daughter gain confidence in maths.",
  },
  {
    name: "Mr. Suresh",
    role: "Parent",
    review:
      "We noticed a big improvement in our child’s memory and speed. Classes are well-structured and engaging.",
  },
  {
    name: "Mrs. Kavitha",
    role: "Parent",
    review:
      "Very friendly teachers and excellent learning environment. My child enjoys every class.",
  },
  {
    name: "Mr. Ramesh",
    role: "Parent",
    review:
      "Abacus training helped my son perform better in school exams. Truly effective teaching methods.",
  },
]

const getCardsPerView = () => {
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(getCardsPerView())

  useEffect(() => {
    const handleResize = () => setPerView(getCardsPerView())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + perView) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [perView])

  const visibleReviews = reviews.slice(index, index + perView)

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-violet-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What <span className="text-violet-600">Parents Say</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by parents for delivering real improvement in children.
          </p>
        </motion.div>

        {/* Slideshow */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleReviews.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-lg border border-violet-100
                  rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
                >
                  <Quote className="text-violet-300 mb-4" size={28} />

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    “{item.review}”
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <span className="text-sm text-gray-600">{item.role}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Reviews

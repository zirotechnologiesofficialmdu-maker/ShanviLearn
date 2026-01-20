import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "/front1.jpg",
  "/inside.jpg",
  "/inside1.jpg",
  "/inside2.jpg",
  "/Price.jpeg",
  "/Price2.jpeg",
]

const AUTO_DELAY = 3500 // ms

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [activeImg, setActiveImg] = useState(null)
  const [paused, setPaused] = useState(false)

  // Auto slide
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, AUTO_DELAY)
    return () => clearInterval(timer)
  }, [paused])

  // ESC close
  useEffect(() => {
    const close = (e) => e.key === "Escape" && setActiveImg(null)
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [])

  return (
    <section style={styles.container}>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={styles.title}
      >
        Our <span style={{ color: "#7c3aed" }}>Learning Space</span>
      </motion.h2>

      {/* Slider */}
      <div
        style={styles.sliderWrapper}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={styles.slideCard}
            onClick={() => setActiveImg(images[index])}
          >
            <img
              src={images[index]}
              alt="Gallery Slide"
              style={styles.image}
            />
            <div style={styles.overlay} />
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div style={styles.dots}>
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              style={{
                ...styles.dot,
                opacity: index === i ? 1 : 0.4,
                transform: index === i ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* 🔍 LIGHTBOX */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.lightbox}
            onClick={() => setActiveImg(null)}
          >
            <motion.img
              src={activeImg}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.4 }}
              style={styles.lightboxImg}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "32px",
    fontWeight: "800",
    color: "#1f2937",
  },

  sliderWrapper: {
    position: "relative",
  },
  slideCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "26px",
    cursor: "zoom-in",
    boxShadow:
      "0 30px 60px rgba(124,58,237,0.25), inset 0 0 0 1px rgba(124,58,237,0.2)",
  },
  image: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0))",
  },

  /* Dots */
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "18px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#7c3aed",
    cursor: "pointer",
    transition: "all 0.3s",
  },

  /* Lightbox */
  lightbox: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    cursor: "zoom-out",
    padding: "20px",
  },
  lightboxImg: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "18px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
  },
}

export default Gallery

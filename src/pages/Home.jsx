import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Courses from "../components/Courses"
import Benefits from "../components/Benifits"
import Reviews from "../components/Reviews"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import Certifications from "../components/Certifications"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-[72px] sm:pt-[80px]">
        {/* Hero must come first */}
        <Hero />

        {/* Content Sections */}
        <Features />
        <Courses />
        <Benefits />
        <Reviews />
        <Contact />
        <Gallery />
        <Certifications />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

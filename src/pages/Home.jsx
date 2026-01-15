import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Courses from "../components/Courses"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Benefits from "../components/Benifits"
import Reviews from "../components/Reviews"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Benefits/>
      <Reviews/>
      <Contact />
      <Footer />
    </>
  )
}

export default Home

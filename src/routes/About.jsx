import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
export default function About() {
  return (
    <>
      <Navbar />
      <Hero cName="w-full h-[70vh] relative" heroImg={heroImg} title="About" />
      <AboutUs/>
      <Footer/>
    </>
  );
}

import Navbar from "../components/Navbar";
import heroImage from '../assets/2.jpg'
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
    <Navbar/>
    <Hero cName="w-full h-[70vh] relative" heroImg={heroImage} title="Contact" />
    <Footer/>
    </>
  )
}

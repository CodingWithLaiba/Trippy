import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import heroImage from '../assets/12.jpg'
import Destination from "../components/Destination"

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero 
    cName="w-full h-screen relative"
    heroImg={heroImage}
    title = "Your Journey Your Story"
    text = "Choose Your Favourit Destination"
    btnText = "Travel Plan"
    btnclass = "bg-white py-2.5 px-4 md:py-4 md:px-8 rounded-md md:text-lg text-sm font-bold text-black"
    url= "/"
    />
    <Destination/>
    </>
    
  )
}

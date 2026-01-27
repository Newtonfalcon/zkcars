import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Car3D from "./components/Car3d";
import AboutZK from "./components/AboutZK";
import ZKCinematicSection from "./components/Zksection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
    <Navbar />
    <Carousel/>
    <Car3D/>
    <ZKCinematicSection/>
    <Footer/>


    
    
    
  
    
    </div>
   
      
       
  );
}

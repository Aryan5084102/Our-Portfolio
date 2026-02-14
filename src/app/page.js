import HeroSection from "./component/HeroSection";
import Journey from "./component/Journey";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";


export default function Home() {
  return (
   <div className="flex flex-col w-[85%] mx-auto gap-12">
      <Navbar />
      <HeroSection />
      <Skills />
      <Journey />
      <Projects />
      <Footer />
   </div>
  );
}

import HeroSection from "./component/HeroSection";
import Journey from "./component/Journey";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Footer from "./component/Footer";


export default function Home() {
  return (
   <div className="flex flex-col w-[85%] mx-auto gap-12">
      <HeroSection />
      <Skills />
      <Journey />
      <Projects />
      <Footer />
   </div>
  );
}

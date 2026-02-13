import Gallery from "./component/Gallery";
import HeroSection from "./component/HeroSection";
import Journey from "./component/Journey";
import MeetTeam from './component/MeetTeam'
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import TeamSection from "./component/TeamSection";


export default function Home() {
  return (
   <div className="flex flex-col w-[85%] mx-auto gap-12">
      <Navbar />
      <HeroSection />
      <Skills />
      {/* <Gallery /> */}
      <Journey />
      {/* <MeetTeam /> */}
      <Projects />
      <TeamSection />
   </div>
  );
}

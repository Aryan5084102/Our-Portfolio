import Gallery from "./component/Gallery";
import HeroSection from "./component/HeroSection";
import HoverCard from "./component/HoverCard";
import MeetTeam from './component/MeetTeam'
import Navbar from "./component/Navbar";
import Shows from "./component/Shows";
import TeamSection from "./component/TeamSection";


export default function Home() {
  return (
   <div className="flex flex-col gap-y-24">
      <Navbar />
      <HeroSection />
      <Gallery />
      <HoverCard />
      <MeetTeam />
      <Shows />
      <TeamSection />
   </div>
  );
}

import AnimatedBackground from "../components/background/animatedbackground";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import Header from "@/components/ui/header";
import TopRightMenu from "@/components/ui/TopRightMenu";
import TopLeftAvatar from "@/components/ui/TopLeftAvatar";
import IntroText from "@/components/ui/IntroText";
import SectionOne from "@/components/ui/sectionOne"
import Experience from "@/components/ui/Experience"
import AboutMe from "@/components/ui/AboutMe"
import ContactMe from "@/components/ui/ContactMe"
import Resume from "@/components/ui/Resume"


// Fix up the neon text in your IntroText and make it look nicer
// Below the horizontal sliding menu, put cards with my experience, sectioning them off with cards like "Cybersecurity" "Programming" etc.
// Replace some of the bland logos in the tech scroller with better colorful ones
// Figure out some filler to go in the Lorem Ipsum cards in SectionOne
// Figure out why and fix the text in Experience carousel turns white during hover transition


export default function Home() {
  return (
      <div className="relative z-10 min-h-screen">
      <AnimatedBackground>
        <h1></h1>
      </AnimatedBackground>

          <header className="mt-8 w-full flex justify-center relative min-h-[400px]">

              <TopLeftAvatar />
              <Header />
              <TopRightMenu />
              <IntroText />
          </header>


          <main className="flex flex-col">

              <SectionOne />
              <Experience />
              <AboutMe />
              <Resume />


          </main>

          <footer>

              <ContactMe />

          </footer>

      </div>
  );
}
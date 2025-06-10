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


          </main>

          <footer id="contact" className="flex flex-col mt-20 min-h-[150px] bg-gray-900 bg-opacity-75">

              <h2 className="text-2xl flex justify-center items-center text-purple-500 font-bold mb-4">Contact Me</h2>

              <p className="flex justify-center items-center text-purple-300 mb-4">Phone Number: (123)-123-1234</p>

          </footer>
      </div>
  );
}
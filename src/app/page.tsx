"use client"

import { useEffect } from "react";
import AnimatedBackground from "../components/background/animatedbackground";
import Header from "@/components/ui/header";
import TopRightMenu from "@/components/ui/TopRightMenu";
import TopLeftAvatar from "@/components/ui/TopLeftAvatar";
import IntroText from "@/components/ui/IntroText";
import SectionOne from "@/components/ui/sectionOne"
import Experience from "@/components/ui/Experience"
import AboutMe from "@/components/ui/AboutMe"
import ContactMe from "@/components/ui/ContactMe"
import Resume from "@/components/ui/Resume"



// Make the neon intro text that glows so that it cant be highlighted with the mouse
// Replace some of the bland logos in the tech scroller with better colorful ones
// Figure out some filler to go in the Lorem Ipsum cards in SectionOne
// Figure out why and fix the text in Experience carousel turns white during hover transition
// Add a fun picture or style of some sort to the third grid column inside ContactMe section
// Add a picture or something between resume and ContactMe sections to pad space. Currently the Resume and Contact Me nav menu buttons lead to exactly the same spot.
// Update the avatar pictures when ready with a headshot
// Optimize the site for mobile
// In SectionOne, the images for Planned Projects are not inline the way the icons in the other cards are, try to find a fix
// Fix up the length of the scroll on the tech scroller for mobile screens
// Fix up the hover cards in Experience section for mobile screens
// IntroText does not delay appearance on mobile


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
      <div className="relative z-10 min-h-screen">

      <AnimatedBackground>
        <h1></h1>
      </AnimatedBackground>

          <header className="mt-8 w-full flex flex-col md:flex-row justify-center relative md:min-h-[400px]">

              <div
                  className="fixed top-4 left-4 bg-yellow-200 text-yellow-800 text-lg px-3 py-1 rounded shadow-lg z-50">
                  🚧 Work in Progress
              </div>


              <Header/>
              <TopRightMenu/>
              <IntroText />
              <TopLeftAvatar/>


          </header>


          <main className="flex flex-col">

              <SectionOne/>
              <Experience/>
              <AboutMe/>
              <Resume />


          </main>

          <footer>

              <ContactMe />

          </footer>

      </div>
  );
}
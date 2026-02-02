"use client"

import { useEffect } from "react";
import AnimatedBackground from "../components/background/animatedbackground";
import TopRightMenu from "@/components/ui/TopRightMenu";
import TopLeftAvatar from "@/components/ui/TopLeftAvatar";
import IntroText from "@/components/ui/IntroText";
import SectionOne from "@/components/ui/sectionOne"
import Experience from "@/components/ui/Experience"
import AboutMe from "@/components/ui/AboutMe"
import ContactMe from "@/components/ui/ContactMe"
import Resume from "@/components/ui/Resume"



// Figure out why and fix the text in Experience carousel turns white during hover transition
// In SectionOne, the images for Planned Projects are not inline the way the icons in the other cards are, try to find a fix
// Fix up the length of the scroll on the tech scroller for mobile screens
// Fix the neon text delay on mobile specifically in the IntroText section
// Finish the Trademarks page, go through each logo and find the trademark owner and policy


export default function Home() {
    /* useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
*/
  return (
      <div className="relative z-10 min-h-screen">

      <AnimatedBackground>
        <h1></h1>
      </AnimatedBackground>

          <header className="mt-8 w-full flex flex-col md:flex-row justify-center relative md:min-h-[220px] 2xl:min-h-[400px]">

              <IntroText />
              <TopRightMenu/>
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
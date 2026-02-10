"use client"

import { useEffect } from "react";
import AnimatedBackground from "../components/background/animatedbackground";
import TopRightMenu from "@/components/ui/TopRightMenu";
import TopLeftAvatar from "@/components/ui/TopLeftAvatar";
import IntroText from "@/components/ui/IntroText";
import SectionOne from "@/components/ui/sectionOne"
import Expertise from "@/components/ui/Expertise"
import AboutMe from "@/components/ui/AboutMe"
import ContactMe from "@/components/ui/ContactMe"
import Resume from "@/components/ui/Resume"


// Finish the Trademarks page, go through each logo and find the trademark owner and policy


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
              <Expertise/>
              <AboutMe/>
              <Resume />


          </main>

          <footer>

              <ContactMe />

          </footer>

      </div>
  );
}
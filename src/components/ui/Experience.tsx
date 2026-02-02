"use client";

import React from "react";
import TechScroller from "@/components/ui/TechScroller";
import ExperienceCards from "@/components/ui/ExperienceCards";

export default function Experience() {

    return (
        <section>

            <h2 id="experience" className="flex justify-center items-center mt-48 md:mt-80 scroll-mt-16 text-xl md:text-2xl text-white cursor-default">
                What do I have&nbsp;
                <span className="text-purple-300 font-bold">experience</span>
                &nbsp;with?
            </h2>

            <TechScroller />
            <ExperienceCards />

        </section>
    );
};
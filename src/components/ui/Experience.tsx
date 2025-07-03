"use client";

import React from "react";
import TechScroller from "@/components/ui/TechScroller";
import ExperienceCards from "@/components/ui/ExperienceCards";
import { motion } from "framer-motion";

export default function Experience() {

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}>

            <h2 id="experience" className="flex justify-center items-center mt-48 md:mt-80 scroll-mt-16 text-xl md:text-2xl text-white cursor-default">
                What do I have&nbsp;
                <span className="text-purple-300 font-bold">experience</span>
                &nbsp;with?
            </h2>

            <TechScroller />
            <ExperienceCards />

            </motion.div>
        </section>
    );
};
"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
    return (
        <section className="flex justify-center items-center mt-80 px-4">

            <Card id="about" className="bg-gray-900 border border-slate-600 scroll-mt-24 max-w-3xl w-full p-2 md:p-8">

                <CardContent className="mt-8 ">

                    <h2 className="text-xl md:text-3xl text-center font-bold text-purple-300 mb-4">
                        About Me
                    </h2>

                    <p className="text-white text-sm md:text-lg leading-relaxed indent-6 mt-8 md:mt-12">
                        My name is Christian Tucker, and I’m an early-career software engineer based in Orlando, Florida. I focus on building clean, maintainable
                        full-stack applications with an emphasis on backend reliability, thoughtful API design, and practical problem-solving.
                    </p>

                    <p className="text-white text-sm md:text-lg leading-relaxed indent-6 mt-6 md:mt-12">
                        I spend most of my time working with technologies like Node.js, Express, PostgreSQL, React, and TypeScript, while also building tools and
                        automation using languages like Python, Bash, and PowerShell. This portfolio is both a showcase of what I’ve built and a record of how I
                        approach learning and growth as an engineer. I’m detail-oriented, curious, and motivated by challenges that push me to understand systems
                        more deeply and improve how they’re designed.
                    </p>

                </CardContent>
            </Card>
        </section>
    );
};

export default AboutMe;
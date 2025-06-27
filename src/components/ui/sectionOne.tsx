"use client"

import React from "react";
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card";


export default function SectionOne() {
    return (
        <div className="mt-80 ml-48 mr-48 flex flex-row justify-start items-center">

            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
            >
            <Card className="p-8 h-[1000px] w-[600px] bg-gray-900 border-slate-600 border-[1px] flex flex-col items-center">

                <h2 className="text-3xl flex justify-center items-center text-purple-300 font-bold">Planned Projects</h2>
                <p className="mt-16 flex flex-row text-white text-lg leading-relaxed indent-6">
                    <img src="/python.svg" alt="Python Logo" className="w-6 h-6 mt-0.5" />
                    A Python script that scrapes job postings from websites based on keywords, extracts relevant details, and saves them for easy review.
                </p>

                <p className="mt-16 flex flex-row text-white text-lg leading-relaxed indent-6">
                    <img src="/ruby.svg" alt="Ruby Logo" className="w-6 h-6 mt-0.5" />
                    A lightweight and customizable Ruby on Rails CRUD application to manage tasks and lists.
                </p>

                <p className="mt-16 flex flex-row text-white text-lg leading-relaxed indent-6">
                    <img src="/bash.svg" alt="Bash Logo" className="w-6 h-6 mt-0.5" />
                    A Bash script that installs essential development tools and dependencies on a fresh Linux installation. Currently deciding between
                    using Ubuntu or Arch Linux as the base system.
                </p>

                <p className="mt-16 flex flex-row text-white text-lg leading-relaxed indent-6">
                    <img src="/powershell.svg" alt="PowerShell Logo" className="w-6 h-6 mt-0.5" />
                    A PowerShell script that collects system information and outputs it as a report. Optionally delivers warnings based on certain
                    conditions such as high temperatures.
                </p>

                <p className="mt-16 flex flex-row text-white text-lg leading-relaxed indent-6">
                    <img src="/cpp.svg" alt="C++ Logo" className="w-6 h-6 mt-0.5" />
                    C++ code for a simple text-based adventure game with a focus on object-oriented design.
                </p>

                <p className="mt-16 flex flex-row text-white text-lg leading-relaxed indent-6">
                    <img src="/c.svg" alt="C Logo" className="w-6 h-6 mt-0.5" />
                    A C-based command-line tool that analyzes text files—counting words, characters, lines, and more—and outputs a summary report.
                </p>

            </Card>
            </motion.div>

            <div className="flex flex-col justify-between ml-20 h-[1000px]">

                <motion.div
                    initial={{ opacity: 0, y: -50}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
                >
                <Card className="p-8 flex-col w-[800px] h-[450px] bg-gray-900 border-slate-600 border-[1px]">

                    <h2 className="text-3xl flex justify-center items-center text-purple-300 font-bold">My Goals</h2>
                    <p className="mt-6 text-white text-lg leading-relaxed indent-8">
                        🎯&nbsp;My main goal with this website is to create a central place to document my progress and growth as I continue my journey as a developer.
                    </p>

                        <p className="mt-8 text-white text-lg leading-relaxed indent-8">

                        🚀&nbsp;With countless paths to explore in the world of tech, the most challenging part has often been choosing where to start. This portfolio
                        will evolve alongside me as I grow, reflecting not just what I’ve built, but what I’ve learned.

                        </p>
                    <p className="mt-8 text-white text-lg leading-relaxed indent-8">
                        📈&nbsp;I aim to become a lifelong learner and strive to create tools that are as precise, efficient, and thoughtful as I’d want them to be for myself.
                    </p>

                </Card>
                </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -50}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
                    >
                <Card className="p-8 flex-col w-[800px] h-[450px] bg-gray-900 border-slate-600 border-[1px]">

                    <h2 className="text-3xl flex justify-center items-center text-purple-300 font-bold">What I&apos;m Learning</h2>
                    <p className="mt-6 text-white text-lg leading-relaxed indent-8">
                        🚧&nbsp;Building this website portfolio has been a great way to reinforce my skills with front-end tools like React, Next.js, and Tailwind CSS.
                    </p>
                    <p className="mt-8 text-white text-lg leading-relaxed indent-8">
                        ⚙️&nbsp;Recently, I’ve started using languages already in my toolbox—like Python and Ruby—for scripting and automation tasks, while also picking
                        up new tools such as Bash and PowerShell. Exploring these languages in the context of automation has given me a fresh perspective, very
                        different from how I previously used them to build applications and websites.
                    </p>
                    <p className="mt-8 text-white text-lg leading-relaxed indent-8">
                        🌱&nbsp;I plan to continue leaning into this tech stack while expanding my knowledge and sharpening my workflow with these tools.
                    </p>


                </Card>
                    </motion.div>

            </div>


        </div>

    );
}
"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section className="flex justify-center items-center mt-80 px-4">
            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}>

            <Card id="about" className="relative bg-gray-900 border border-slate-600 scroll-mt-24 max-w-3xl w-full p-2 md:p-8">

                <div className="absolute -top-8 left-8">
                    <Avatar className="w-32 h-32 border-4 border-gray-900 select-none">
                        <AvatarImage src="/Headshot2.png" alt="Christian Tucker" />
                        <AvatarFallback>CT</AvatarFallback>
                    </Avatar>
                </div>

                <CardContent className="mt-8">
                    <h2 className="text-xl md:text-3xl font-bold text-purple-300 mb-4 flex ml-36 md:ml-28">
                        About Me
                    </h2>
                    <p className="text-white text-sm md:text-lg leading-relaxed indent-6 mt-8 md:mt-12">
                        My name is Christian Tucker, and I’m a self-driven developer and student based in Orlando, Florida. I’m currently pursuing a degree
                        in Computer Programming & Analysis, and I spend most of my time building, breaking, and improving things on my own terms. I enjoy
                        creating tools and projects that serve a real purpose — from front-end websites to backend scripts and system automation. I like learning
                        both how to make things look good and how to make them efficient behind the scenes.
                    </p>

                    <p className="text-white text-sm md:text-lg leading-relaxed indent-6 mt-6 md:mt-12">
                        I’ve spent most of my time working with technologies like C++, C, React, Next.js, Tailwind CSS, and Python, and I’ve recently started working
                        with scripting languages like Ruby, Bash and PowerShell for automation. I created this portfolio to showcase what I&apos;ve done — but also to
                        document my journey as I grow. It’s both a learning space and a digital footprint that reflects my evolving skill set and interests. I’m
                        detail-oriented, curious, and always looking for new challenges. Whether I’m cleaning up code, tackling something unfamiliar, or picking up new
                        skills, I love the challenge and the constant learning along the way.
                    </p>
                </CardContent>
            </Card>
            </motion.div>
        </section>
    );
};

export default AboutMe;
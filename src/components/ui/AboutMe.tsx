"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section className="flex justify-center items-center mt-48 px-4">
            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}>

            <Card id="about" className="relative bg-gray-900 border border-slate-600 scroll-mt-24 max-w-3xl w-full p-8">

                <div className="absolute -top-8 left-8">
                    <Avatar className="w-32 h-32 border-4 border-gray-900">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Christian Tucker" />
                        <AvatarFallback>CT</AvatarFallback>
                    </Avatar>
                </div>

                <CardContent className="mt-8">
                    <h2 className="text-3xl font-bold text-purple-300 mb-4 flex ml-28">
                        About Me
                    </h2>
                    <p className="text-white text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci
                        nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula
                        sed pretium tristique, nunc magna sagittis risus
                    </p>
                </CardContent>
            </Card>
            </motion.div>
        </section>
    );
};

export default AboutMe;
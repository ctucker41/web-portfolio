"use client"

import React from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";

const MotionCard = motion(Card);


export default function TopRightMenu() {
    return (

        <MotionCard
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
            className="w-full md:w-[45%] 2xl:w-[600px] md:h-[60px] 2xl:h-[80px] fixed top-4 md:right-1 2xl:right-10 bg-gray-800 flex flex-row items-center justify-center border-slate-600 border-[1px] z-50"
        >

            <CardContent className="p-0 flex flex-wrap md:flex-nowrap flex-row items-center justify-center gap-4 w-full">
                <Button variant="ghost" className="text-white text-xs md:text-md lg:text-lg px-2 md:px-6 py-3">
                    <a href="#experience" draggable={false}>
                    Experience
                    </a>
                </Button>
                <Button variant="ghost" className="text-white text-xs md:text-md lg:text-lg px-2 md:px-6 py-3">
                    <a href="#about" draggable={false}>
                    About Me
                    </a>
                </Button>
                <Button variant="ghost" className="text-white text-xs md:text-md lg:text-lg px-2 md:px-6 py-3">
                    <a href="#resume" draggable={false}>
                    Resume
                    </a>
                </Button>
                <Button variant="ghost" className="text-white text-xs md:text-md lg:text-lg px-2 md:px-6 py-3">
                    <a href="#contact" draggable={false}>
                    Contact Me
                    </a>
                </Button>
            </CardContent>

        </MotionCard>
    );
}
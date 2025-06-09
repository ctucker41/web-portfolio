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
            className="w-[600px] h-[80px] fixed top-4 right-10 bg-gray-800 flex items-center justify-center border-slate-600 border-[1px] z-50"
        >

            <CardContent className="p-0 flex flex-row items-center justify-center gap-4">
                <Button variant="ghost" className="text-white text-lg px-6 py-3">
                    <a href="#experience">
                    Experience
                    </a>
                </Button>
                <Button variant="ghost" className="text-white text-lg px-6 py-3">
                    <a href="#about">
                    About Me
                    </a>
                </Button>
                <Button variant="ghost" className="text-white text-lg px-6 py-3">
                    <a href="#resume">
                    Resume
                    </a>
                </Button>
                <Button variant="ghost" className="text-white text-lg px-6 py-3">
                    <a href="#contact">
                    Contact Me
                    </a>
                </Button>
            </CardContent>

        </MotionCard>
    );
}
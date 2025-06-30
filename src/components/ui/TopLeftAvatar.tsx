"use client"

import React from "react";
import { Avatar, AvatarFallback, /*AvatarImage*/ } from "@/components/ui/avatar";
import { motion } from "framer-motion"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export default function TopLeftAvatar() {
    return (
        <div className="relative md:absolute top-16 md:top-8 md:left-24">
            <motion.div
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
            className="flex flex-col items-center select-none"
        >

            <Avatar className="w-24 h-24 md:w-[200px] md:h-[200px]">
                {/* <AvatarImage src="" /> */}
                <AvatarFallback>C T</AvatarFallback>
            </Avatar>

                <Card className="rounded-xl bg-slate-600 mt-2 border-0 w-[150px]">
                    <CardContent className="p-0 flex items-center justify-center">
                        <h1 className="text-slate-300">Christian Tucker</h1>
                    </CardContent>
                </Card>

                <div className="flex flex-row justify-center gap-4 mt-0">

                    <Link href="https://github.com/ctucker41" target="_blank">
                <Button variant="outline" size="icon" className="bg-slate-300 border-0 rounded-full mt-2">
                    <FaGithub />
                </Button>
                    </Link>

                    <Link href="https://www.linkedin.com/in/christian-tucker-55b423196/" target="_blank">
                <Button variant="outline" size="icon" className="bg-slate-300 border-0 rounded-full mt-2">
                    <FaLinkedin />
                </Button>
                    </Link>

                </div>

        </motion.div>
        </div>
    );
}
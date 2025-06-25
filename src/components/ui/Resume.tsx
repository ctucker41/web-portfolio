"use client";

import { buttonVariants} from "@/components/ui/button";
import Link from "next/link"
import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.section
            id="resume"
            className="flex flex-col items-center mt-48 px-4 scroll-mt-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
        >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <img
                    src="/resume.svg"
                    alt="Resume Logo"
                    className="w-12 h-12 mr-3"
                />
                Take a look at my&nbsp;
                <span className="font-bold text-purple-300">
                    resume
                </span>
            </h2>
            <p className="text-white text-center mb-8">
                <span className="font-bold text-pink-700 text-2xl"> Valencia College </span><br />
                Finishing up my&nbsp;
                <span className="font-bold text-purple-300">Associates of Science </span>
                in Computer Programming & Analysis<br /> <br />
                Planning to pursue my&nbsp;<span className="font-bold text-purple-300">Bachelors of Applied Science </span>
                in Computing Technology & Software Development<br />
            </p>
            <Link
                href="/"
                className=
                        "text-white bg-purple-600 hover:bg-purple-700 font-semibold px-10 py-3 rounded-md transition"
            >
                View Resume
            </Link>
        </motion.section>
    );
};

export default Resume;
"use client";

import Link from "next/link"
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";


const Resume = () => {
    return (
        <div id="resume" className="flex flex-col items-center mt-48 md:mt-80 px-4 scroll-mt-24 max-w-3xl mx-auto">

            <h2 className="text-xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <img
                    src="/resume.svg"
                    alt="Resume Logo"
                    draggable={false}
                    className="w-8 h-8 md:w-12 md:h-12 mr-3"
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

            <div className="flex items-center gap-3">
                <Link
                    href="/Christian_Tucker_Resume.pdf"
                    draggable={false}
                    className="text-white bg-purple-600 hover:bg-purple-700 font-semibold px-10 py-3 rounded-md transition h-[48px] flex items-center"
                >
                    View Resume
                </Link>
                <Button
                    asChild
                    size="icon"
                    className="text-white bg-purple-600 hover:bg-purple-700 h-[48px] w-[48px]"
                >
                    <Link
                        href="/Christian_Tucker_Resume.pdf"
                        download="Christian_Tucker_Resume.pdf"
                        target="_blank"
                        draggable={false}
                    >
                        <Download className="w-4 h-4" />
                    </Link>
                </Button>
            </div>

            <img src="/textmessage.svg" alt="Texting Image" draggable={false} className="w-full h-60 w-60 mt-28 md:mt-48" />


        </div>
    );
};

export default Resume;
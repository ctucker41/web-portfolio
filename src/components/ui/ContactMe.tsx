"use client";

import {Button} from "@/components/ui/button";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import Link from "next/link";
import React from "react";

const ContactMe = () => {
    return (

            <footer id="contact" className="grid grid-cols-3 md:items-center w-full mt-80 min-h-[150px] gap-4 px-4 bg-gray-900 text-white">

                <div className="text-[6px] md:text-xs xl:text-sm text-left mr-4 mt-12 md:mt-0 select-none">

                    &copy; {new Date().getFullYear()} Christian Tucker
                    <br /><br />
                    <div className="text-[6px] md:text-xs text-white/60">
                    Built with Next.js + Tailwind.
                    </div>

                </div>



                <div className="flex-col">

                <h2 className="text-l md:text-2xl flex justify-center text-white font-bold md:mb-4 mt-4 md:mt-0 cursor-default">Contact Me</h2>

                <div className="flex gap-1.5 md:gap-4 text-white justify-center">

                    <Link href="mailto:ctuckercareers@yahoo.com" target="_blank" aria-label="Email Christian"  draggable={false}>
                        <Button variant="outline" size="icon" className="bg-purple-600 hover:bg-purple-700 border-0 rounded-full mt-2 w-7 h-7 md:w-9 md:h-9">
                            <FaEnvelope />
                        </Button>
                    </Link>

                    <Link href="https://github.com/ctucker41" target="_blank" aria-label="Christian's GitHub" draggable={false}>
                        <Button variant="outline" size="icon" className="bg-purple-600 hover:bg-purple-700 border-0 rounded-full mt-2 w-7 h-7 md:w-9 md:h-9">
                            <FaGithub />
                        </Button>
                    </Link>

                    <Link href="https://www.linkedin.com/in/christian-tucker-55b423196/" target="_blank" aria-label="Christian's LinkedIn" draggable={false}>
                        <Button variant="outline" size="icon" className="bg-purple-600 hover:bg-purple-700 border-0 rounded-full mt-2 w-7 h-7 md:w-9 md:h-9">
                            <FaLinkedin />
                        </Button>
                    </Link>

                </div>

                    <div className="flex justify-center mt-3 text-xs md:text-sm text-white/80">
                        <a
                            href="mailto:ctuckercareers@yahoo.com"
                            className="underline underline-offset-4 hover:text-white"
                            draggable={false}
                        >
                            ctuckercareers@yahoo.com
                        </a>
                    </div>

            </div>

                <div className="flex justify-end items-center">
                    <img src="/social.svg" alt="Social Media Photo" draggable={false} className="w-20 h-20 md:w-32 md:h-32" />
                </div>
            </footer>
    );
};

export default ContactMe;
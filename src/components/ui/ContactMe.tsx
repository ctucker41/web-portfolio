"use client";

import { motion } from "framer-motion";
import {Button} from "@/components/ui/button";
import {FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from "react-icons/fa";
import Link from "next/link";
import React from "react";

const ContactMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}>

            <footer id="contact" className="grid grid-cols-3 items-center w-full mt-80 min-h-[150px] gap-4 px-6 bg-gray-900 text-white">

                <div className="text-sm text-left select-none">
                    Copyright &copy; 2025 Christian Tucker
                </div>

                <div className="flex-col">

                <h2 className="text-2xl flex justify-center text-white font-bold mb-4 cursor-default">Contact Me</h2>

                <div className="flex gap-4 text-xl text-white justify-center">

                    <Link href="mailto:ctuckercareers@yahoo.com" target="_blank">
                        <Button variant="outline" size="icon" className="bg-purple-600 hover:bg-purple-700 border-0 rounded-full mt-2">
                            <FaEnvelope />
                        </Button>
                    </Link>

                    <Link href="https://github.com/ctucker41" target="_blank">
                        <Button variant="outline" size="icon" className="bg-purple-600 hover:bg-purple-700 border-0 rounded-full mt-2">
                            <FaGithub />
                        </Button>
                    </Link>

                    <Link href="https://www.linkedin.com/in/christian-tucker-55b423196/" target="_blank">
                        <Button variant="outline" size="icon" className="bg-purple-600 hover:bg-purple-700 border-0 rounded-full mt-2">
                            <FaLinkedin />
                        </Button>
                    </Link>

                    <Link href="https://x.com/ctuckercareers" target="_blank">
                        <Button variant="outline" size="icon" className="bg-purple-600 hover:bg-purple-700 border-0 rounded-full mt-2">
                            <FaTwitter />
                        </Button>
                    </Link>
                </div>
            </div>
            </footer>
        </motion.div>
    );
};

export default ContactMe;
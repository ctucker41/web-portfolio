"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TechScroller from "@/components/ui/TechScroller";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
    const [hoveredFirst, setHoveredFirst] = useState(false);
    const [hoveredSecond, setHoveredSecond] = useState(false);

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}>

            <h2 id="experience" className="flex justify-center items-center mt-48 scroll-mt-24 text-2xl text-white">
                What do I have&nbsp;
                <span className="text-purple-300 font-bold">experience</span>
                &nbsp;with?
            </h2>

            <TechScroller />

            <div className="flex flex-row justify-center items-center mt-32">
                <div
                    className="w-[600px] mr-28 overflow-hidden relative rounded-xl"
                    onMouseEnter={() => setHoveredFirst(true)}
                    onMouseLeave={() => setHoveredFirst(false)}
                >
                    <div
                        className={`flex transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: hoveredFirst ? "translateX(-100%)" : "translateX(0)",
                        }}
                    >
                        {[0, 1].map((index) => (
                            <div key={index} className="p-1 min-w-full">
                                <Card className="aspect-square bg-gray-900 border border-slate-600">
                                    <CardHeader className="flex items-center justify-start p-10">
                                        {index === 0 ? (
                                            <span className="text-4xl font-semibold text-purple-300">
                        Languages
                      </span>
                                        ) : (
                                            <span className="text-4xl font-semibold text-purple-300">
                        Cybersecurity Tools
                      </span>
                                        )}
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-4 items-start justify-start text-white">
                                        {index === 0 ? (
                                            <>
                                                // TypeScript, JavaScript, SQL, C++, C, Python, Powershell, Bash, Ruby, HTML5
                                            <div className="flex items-center gap-3">
                                                <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                <span className="text-lg">HTML5</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                <span className="text-lg">HTML5</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                            <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                            <span className="text-lg">HTML5</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                            <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                            <span className="text-lg">HTML5</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                            <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                            <span className="text-lg">HTML5</span>
                                            </div>

                                            </>
                                            ) : (
                                            <>
                                                // Wireshark, Nmap, Kali Linux, Hashcat, OSINT Framework
                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                            </>
                                            )}
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>


                <div
                    className="w-[600px] ml-28 overflow-hidden relative rounded-xl"
                    onMouseEnter={() => setHoveredSecond(true)}
                    onMouseLeave={() => setHoveredSecond(false)}
                >
                    <div
                        className={`flex transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: hoveredSecond ? "translateX(-100%)" : "translateX(0)",
                        }}
                    >
                        {[0, 1].map((index) => (
                            <div key={index} className="p-1 min-w-full">
                                <Card className="aspect-square bg-gray-900 border border-slate-600">
                                    <CardHeader className="flex items-center justify-start p-10">
                                        {index === 0 ? (
                                            <span className="text-4xl font-semibold text-purple-300">
                        Developer Tools
                      </span>
                                        ) : (
                                            <span className="text-4xl font-semibold text-purple-300">
                        Software
                      </span>
                                        )}
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-4 items-start justify-start text-white">
                                        {index === 0 ? (
                                            <>
                                                // Git, Github, Vercel, AWS, Framer Motion, React, Next.js, Node.js, Tailwind CSS,
                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                            </>
                                        ) : (
                                            <>
                                                // Visual Studio, PyCharm, RubyMine, WebStorm, CLion, VMware, VirtualBox,
                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                    <span className="text-lg">HTML5</span>
                                                </div>

                                            </>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </motion.div>
        </section>
    );
};

export default Experience;
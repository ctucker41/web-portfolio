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

            <h2 id="experience" className="flex justify-center items-center mt-48 md:mt-80 scroll-mt-16 text-xl md:text-2xl text-white cursor-default">
                What do I have&nbsp;
                <span className="text-purple-300 font-bold">experience</span>
                &nbsp;with?
            </h2>

            <TechScroller />

                <div className="flex flex-row justify-center items-center mt-32 select-none">
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

                                                    <div className="flex items-center gap-3">
                                                        <img src="/typescript.svg" alt="Typescript" className="w-6 h-6" />
                                                        <span className="text-lg">Typescript</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/javascript.svg" alt="Javascript" className="w-6 h-6" />
                                                        <span className="text-lg">Javascript</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/cpp.svg" alt="C++" className="w-6 h-6" />
                                                        <span className="text-lg">C++</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/c.svg" alt="C" className="w-6 h-6" />
                                                        <span className="text-lg">C</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/python.svg" alt="Python" className="w-6 h-6" />
                                                        <span className="text-lg">Python</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/html5.svg" alt="HTML5" className="w-6 h-6" />
                                                        <span className="text-lg">HTML5</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/sql.svg" alt="SQL" className="w-6 h-6" />
                                                        <span className="text-lg">SQL</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/bash.svg" alt="Bash" className="w-6 h-6" />
                                                        <span className="text-lg">Bash</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/powershell.svg" alt="Powershell" className="w-6 h-6" />
                                                        <span className="text-lg">Powershell</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/ruby.svg" alt="Ruby" className="w-6 h-6" />
                                                        <span className="text-lg">Ruby</span>
                                                    </div>

                                                </>
                                            ) : (
                                                <>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="Kali Linux" className="w-6 h-6" />
                                                        <span className="text-lg">Kali Linux</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/wireshark.svg" alt="Wireshark" className="w-6 h-6" />
                                                        <span className="text-lg">Wireshark</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/nmap.svg" alt="Nmap" className="w-6 h-6" />
                                                        <span className="text-lg">Nmap</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="OSINT Framework" className="w-6 h-6" />
                                                        <span className="text-lg">OSINT Framework</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="Hashcat" className="w-6 h-6" />
                                                        <span className="text-lg">Hashcat</span>
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

                                                    <div className="flex items-center gap-3">
                                                        <img src="/git.svg" alt="Git" className="w-6 h-6" />
                                                        <span className="text-lg">Git</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/github.svg" alt="Github" className="w-6 h-6" />
                                                        <span className="text-lg">Github</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/react.svg" alt="React" className="w-6 h-6" />
                                                        <span className="text-lg">React</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/nextjs.svg" alt="Next.js" className="w-6 h-6" />
                                                        <span className="text-lg">Next.js</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/nodejs.svg" alt="Node.js" className="w-6 h-6" />
                                                        <span className="text-lg">Node.js</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/tailwindcss.svg" alt="Tailwind CSS" className="w-6 h-6" />
                                                        <span className="text-lg">Tailwind CSS</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/vercel.svg" alt="Vercel" className="w-6 h-6" />
                                                        <span className="text-lg">Vercel</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/framermotion.svg" alt="Framer Motion" className="w-6 h-6" />
                                                        <span className="text-lg">Framer Motion</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/aws.svg" alt="AWS" className="w-6 h-6" />
                                                        <span className="text-lg">AWS</span>
                                                    </div>

                                                </>
                                            ) : (
                                                <>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="Visual Studio" className="w-6 h-6" />
                                                        <span className="text-lg">Visual Studio</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="PyCharm" className="w-6 h-6" />
                                                        <span className="text-lg">PyCharm</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="WebStorm" className="w-6 h-6" />
                                                        <span className="text-lg">WebStorm</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="CLion" className="w-6 h-6" />
                                                        <span className="text-lg">CLion</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/.svg" alt="RubyMine" className="w-6 h-6" />
                                                        <span className="text-lg">RubyMine</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/vmware.svg" alt="VMware" className="w-6 h-6" />
                                                        <span className="text-lg">VMware</span>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <img src="/virtualbox.svg" alt="VirtualBox" className="w-6 h-6" />
                                                        <span className="text-lg">VirtualBox</span>
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
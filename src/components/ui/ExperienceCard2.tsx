import React, { useState } from "react";
import SingleCard from "@/components/ui/SingleCard";

export default function ExperienceCard2() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="w-[600px] overflow-hidden relative rounded-xl ml-28"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: hovered ? "translateX(-100%)" : "translateX(0)",
                }}
            >
                <div className="min-w-full p-2">
                    <SingleCard
                        title="Languages"
                        content={
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
                        }/>
                </div>

                <div className="min-w-full p-2">
                    <SingleCard
                        title="Cybersecurity Tools"
                        content={
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
                        } />

                </div>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import SingleCard from "@/components/ui/SingleCard";

export default function ExperienceCard1() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="w-[600px] overflow-hidden relative rounded-xl mr-28"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: hovered ? "translateX(-100%)" : "translateX(0)",
                }}
            >
                <div className="min-w-full p-2 select-none">
                    <SingleCard
                        title="Languages"
                        content={
                            <>
                                <div className="flex items-center gap-3">
                                    <img src="/typescript.svg" alt="Typescript" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Typescript</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/javascript.svg" alt="Javascript" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Javascript</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/cpp.svg" alt="C++" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">C++</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/c.svg" alt="C" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">C</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/python.svg" alt="Python" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Python</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/html5.svg" alt="HTML5" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">HTML5</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/sql.svg" alt="SQL" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">SQL</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/bash.svg" alt="Bash" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Bash</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/powershell.svg" alt="Powershell" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Powershell</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/ruby.svg" alt="Ruby" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Ruby</span>
                                </div>
                            </>
                        }/>
                </div>

                <div className="min-w-full p-2 select-none">
                    <SingleCard
                        title="Cybersecurity Tools"
                        content={
                            <>
                                <div className="flex items-center gap-3">
                                    <img src="/JWT.svg" alt="JSON Web Tokens" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">JSON Web Tokens (JWT)</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/bcrypt.svg" alt="bcrypt" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">bcrypt</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/wireshark.svg" alt="Wireshark" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Wireshark</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/nmap.svg" alt="Nmap" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Nmap</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/osint.svg" alt="OSINT Framework" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">OSINT Framework</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/kalilinux.svg" alt="Kali Linux" draggable={false} className="w-6 h-6" />
                                    <span className="text-lg">Kali Linux</span>
                                </div>

                            </>
                        } />

                </div>
            </div>
        </div>
    );
}

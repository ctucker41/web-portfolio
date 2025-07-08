import React, { useEffect, useState } from "react";
import SingleCard from "@/components/ui/SingleCard";
import ExperienceCard1 from "@/components/ui/ExperienceCard1";

export default function HoverCard1() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {

    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex flex-row gap-2 justify-center items-center">
                <SingleCard
                    title="Languages"
                    className="w-[45%]"
                    content={
                        <>
                            <div className="flex items-center gap-3">
                                <img src="/typescript.svg" alt="Typescript" className="w-4 h-4" />
                                <span className="text-sm">Typescript</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/javascript.svg" alt="Javascript" className="w-4 h-4" />
                                <span className="text-sm">Javascript</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/cpp.svg" alt="C++" className="w-4 h-4" />
                                <span className="text-sm">C++</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/c.svg" alt="C" className="w-4 h-4" />
                                <span className="text-sm">C</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/python.svg" alt="Python" className="w-4 h-4" />
                                <span className="text-sm">Python</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/html5.svg" alt="HTML5" className="w-4 h-4" />
                                <span className="text-sm">HTML5</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/sql.svg" alt="SQL" className="w-4 h-4" />
                                <span className="text-sm">SQL</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/bash.svg" alt="Bash" className="w-4 h-4" />
                                <span className="text-sm">Bash</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/powershell.svg" alt="Powershell" className="w-4 h-4" />
                                <span className="text-sm">Powershell</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/ruby.svg" alt="Ruby" className="w-4 h-4" />
                                <span className="text-sm">Ruby</span>
                            </div>
                        </>
                    }/>
                <SingleCard
                    title="Security Tools"
                    className="w-[45%]"
                    content={
                        <>
                            <div className="flex items-center gap-3">
                                <img src="/kalilinux.svg" alt="Kali Linux" className="w-4 h-4" />
                                <span className="text-sm">Kali Linux</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/wireshark.svg" alt="Wireshark" className="w-4 h-4" />
                                <span className="text-sm">Wireshark</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/nmap.svg" alt="Nmap" className="w-4 h-4" />
                                <span className="text-sm">Nmap</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src="/osint.svg" alt="OSINT Framework" className="w-4 h-4" />
                                <span className="text-sm">OSINT Framework</span>
                            </div>
                            
                        </>
                    } />
            </div>
        </div>
    );
}

    return <ExperienceCard1 />;
}
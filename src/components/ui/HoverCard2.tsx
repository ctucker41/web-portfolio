import React, { useEffect, useState } from "react";
import SingleCard from "@/components/ui/SingleCard";
import ExperienceCard2 from "@/components/ui/ExperienceCard2";

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
                <div className="w-full flex flex-row gap-2 justify-center items-center mt-4">
                    <SingleCard
                        title="Developer Tools"
                        className="w-[45%]"
                        content={
                            <>
                                <div className="flex items-center gap-3">
                                    <img src="/git.svg" alt="Git" className="w-4 h-4" />
                                    <span className="text-sm">Git</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/github.svg" alt="Github" className="w-4 h-4" />
                                    <span className="text-sm">Github</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/react.svg" alt="React" className="w-4 h-4" />
                                    <span className="text-sm">React</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/nextjs.svg" alt="Next.js" className="w-4 h-4" />
                                    <span className="text-sm">Next.js</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/nodejs.svg" alt="Node.js" className="w-4 h-4" />
                                    <span className="text-sm">Node.js</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/tailwindcss.svg" alt="Tailwind CSS" className="w-4 h-4" />
                                    <span className="text-sm">Tailwind CSS</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/vercel.svg" alt="Vercel" className="w-4 h-4" />
                                    <span className="text-sm">Vercel</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/framermotion.svg" alt="Framer Motion" className="w-4 h-4" />
                                    <span className="text-sm">Framer Motion</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/aws.svg" alt="AWS" className="w-4 h-4" />
                                    <span className="text-sm">AWS</span>
                                </div>
                            </>
                        }/>
                    <SingleCard
                        title="Software"
                        className="w-[45%]"
                        content={
                            <>
                                <div className="flex items-center gap-3">
                                    <img src="/.svg" alt="Visual Studio" className="w-4 h-4" />
                                    <span className="text-sm">Visual Studio</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/.svg" alt="PyCharm" className="w-4 h-4" />
                                    <span className="text-sm">PyCharm</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/.svg" alt="WebStorm" className="w-4 h-4" />
                                    <span className="text-sm">WebStorm</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/.svg" alt="CLion" className="w-4 h-4" />
                                    <span className="text-sm">CLion</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/.svg" alt="RubyMine" className="w-4 h-4" />
                                    <span className="text-sm">RubyMine</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/vmware.svg" alt="VMware" className="w-4 h-4" />
                                    <span className="text-sm">VMware</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/virtualbox.svg" alt="VirtualBox" className="w-4 h-4" />
                                    <span className="text-sm">VirtualBox</span>
                                </div>
                            </>
                        } />
                </div>
            </div>
        );
    }

    return <ExperienceCard2 />;
}
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
                        title="Developer Tools"
                        content={
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
                        }/>
                </div>

                <div className="min-w-full p-2">
                    <SingleCard
                        title="Software"
                        content={
                            <>
                                <div className="flex items-center gap-3">
                                    <img src="/vscode.svg" alt="Visual Studio Code" className="w-6 h-6" />
                                    <span className="text-lg">VS Code</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/pycharm.svg" alt="PyCharm" className="w-6 h-6" />
                                    <span className="text-lg">PyCharm</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/webstorm.svg" alt="WebStorm" className="w-6 h-6" />
                                    <span className="text-lg">WebStorm</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/clion.svg" alt="CLion" className="w-6 h-6" />
                                    <span className="text-lg">CLion</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/rubymine.svg" alt="RubyMine" className="w-6 h-6" />
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
                        } />

                </div>
            </div>
        </div>
    );
}
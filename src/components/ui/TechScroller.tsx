"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const techStack = [
    { name: "Wireshark", logo: "/wireshark.svg" },
    { name: "Nmap", logo: "/nmap.svg" },
    { name: "SQL", logo: "/sql.svg"},
    { name: "Vercel", logo: "/vercel.svg" },
    { name: "C++", logo: "/cpp.svg" },
    { name: "C", logo: "/c.svg" },
    { name: "Python", logo: "/python.svg" },
    { name: "TypeScript", logo: "/typescript.svg" },
    { name: "JavaScript", logo: "/javascript.svg" },
    { name: "HTML5", logo: "/html5.svg" },
    { name: "Tailwind CSS", logo: "/tailwindcss.svg" },
    { name: "Bash", logo: "/bash.svg" },
    { name: "Powershell", logo: "/powershell.svg" },
    { name: "Git", logo: "/git.svg" },
    { name: "AWS", logo: "/aws.svg" },
    { name: "VMware", logo: "/vmware.svg" },
    { name: "VirtualBox", logo: "/virtualbox.svg" },
    { name: "Github", logo: "/github.svg" },
    { name: "Linux", logo: "/linux.svg" },
    { name: "Framer Motion", logo: "/framermotion.svg"},
    { name: "React", logo: "/react.svg"},
    { name: "Node.js", logo: "/nodejs.svg"},
    { name: "Next.js", logo: "/nextjs.svg" },
    { name: "Ruby", logo: "/ruby.svg" },
];

export default function TechScroller() {
    const controls = useAnimation();
    const itemWidth = 190;
    const totalItems = techStack.length;
    const currentIndex = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex.current += 1;
            controls.start({
                x: -currentIndex.current * itemWidth,
                transition: { duration: 0.5, ease: "easeInOut" },
            });

            if (currentIndex.current >= totalItems) {
                setTimeout(() => {
                    controls.set({ x: 0 });
                    currentIndex.current = 0;
                }, 600);
            }
        }, 2500);

        return () => clearInterval(interval);
    }, [controls, totalItems, itemWidth]);

    return (
            <div className="overflow-hidden w-full py-4 bg-gray-900 rounded-xl mt-8">
                <motion.div
                    className="flex gap-10 whitespace-nowrap px-4"
                    animate={controls}
                    initial={{ x: 0 }}
                >
                    {techStack.concat(techStack).map((tech, index) => (
                        <div
                            key={index}
                            className="text-white text-lg font-medium bg-gray-800 px-4 py-2 rounded-md shadow-md min-w-[150px] text-center"
                        >
                            <div className="flex flex-col items-center">
                                <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2" />
                                <span>{tech.name}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            );
            }

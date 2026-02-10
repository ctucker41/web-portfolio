"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";

const techItems = [
    { name: "Next.js", icon: <SiNextdotjs className="text-xl" /> },
    { name: "React", icon: <FaReact className="text-xl text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-xl text-violet-600" /> },
];

export default function VerticalTechScroller() {
    const items = [...techItems, ...techItems];

    return (

        <div className="h-9 w-[18rem] overflow-hidden rounded-xl bg-gray-900 mx-auto mt-8 shadow-md select-none">
            <motion.div
                className="flex flex-col items-center justify-center gap-4 py-4"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                }}
            >
                {items.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white px-4">
                        {tech.icon}
                        <span className="text-sm">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
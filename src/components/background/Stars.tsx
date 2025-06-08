"use client"

import { useEffect, useState } from "react";
import {motion} from "framer-motion";

type Star = {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
};

export default function Stars() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generated: Star[] = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 10 + 5,
            delay: Math.random() * 5,
        }));
        setStars(generated);
    }, []);


    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {stars.map(({ id, x, y, size, delay }) => (
                <motion.img
                    key={id}
                    src="/staricon.svg"
                    alt="star"
                    style={{
                        position: "absolute",
                        top: `${y}%`,
                        left: `${x}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        opacity: 0.8,
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
"use client"

import React, {useEffect} from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const AnimatedText = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "span",
            { opacity: 1, y: 0 },
            {
                duration: 0.5,
                delay: stagger(0.3),
            }
        );
    }, [animate]);

    const words = "Dynamic Web Portfolio Using".split(" ");

    return (
        <div ref={scope} className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold">
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    className={`mr-2 ${
                        index < 3 ? "text-purple-500" : "text-white"
                    }`}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedText;
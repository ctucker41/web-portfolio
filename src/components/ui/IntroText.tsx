"use client";

import { motion } from "framer-motion";

export default function IntroText() {
    const heyText = "Hey!";

    return (
        <div className="relative top-4 md:top-48 w-full text-center select-none">
            <motion.div
                className="flex justify-center font-bold text-3xl"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 3
                        }
                    }
                }}
            >
                {heyText.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="text-purple-500 neon-text mb-8"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{
                            type: "spring",
                            damping: 8,
                            stiffness: 100
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>

            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 1.5, ease: "easeOut" }}
                className="font-bold text-purple-300 text-2xl mt-7 neon-text"
            >
                {"I'm Christian, a student developer based in Orlando, FL"}
            </motion.span>
        </div>
    );
}
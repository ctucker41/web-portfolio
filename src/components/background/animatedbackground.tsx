"use client";

import { motion } from "framer-motion";
import Stars from "./Stars";
import Grid from "./grid";

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-purple-900">

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 3 }}
            className="min-h-screen bg-gradient-to-tr from-fuchsia-950  to-blue-950"
        >
            {children}
        </motion.div>
        <Grid />
        <Stars />
        </div>
    );
}

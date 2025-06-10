"use client";

import { motion } from "framer-motion";

const ContactMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}>

        <div id="contact" className="flex flex-col mt-20 min-h-[150px] bg-gray-900 bg-opacity-75">
            <h2 className="text-2xl flex justify-center items-center text-purple-500 font-bold mb-4">Contact Me</h2>
            <p className="flex justify-center items-center text-purple-300 mb-4">Phone Number: (123)-123-1234</p>
        </div>
        </motion.div>
    );
};

export default ContactMe;
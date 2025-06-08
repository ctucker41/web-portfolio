"use client"

import React from "react";
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card";


export default function SectionOne() {
    return (
        <div className="mt-80 ml-48 mr-48 flex flex-row justify-start items-center">

            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
            >
            <Card className="p-8 h-[800px] w-[600px] bg-gray-900 border-slate-600 border-[1px]">

                <h2 className="text-2xl flex justify-center items-center text-purple-300 font-bold mb-4">Lorem Ipsum Section</h2>
                <p className="mt-20 mb-4 text-purple-300 flex justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                </p>

            </Card>
            </motion.div>

            <div className="flex flex-col justify-between ml-20 h-[800px]">

                <motion.div
                    initial={{ opacity: 0, y: -50}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
                >
                <Card className="p-8 flex-col w-[800px] bg-gray-900 border-slate-600 border-[1px]">

                    <h2 className="text-2xl flex justify-center items-center text-purple-300 font-bold mb-4">Lorem Ipsum Section</h2>
                    <p className="mt-20 mb-4 text-purple-300 flex justify-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                    </p>

                </Card>
                </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -50}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 5.5 }}
                    >
                <Card className="p-8 flex-col w-[800px] bg-gray-900 border-slate-600 border-[1px]">

                    <h2 className="text-2xl flex justify-center items-center text-purple-300 font-bold mb-4">Lorem Ipsum Section</h2>
                    <p className="mt-20 mb-4 text-purple-300 flex justify-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec metus dictum eleifend. Aliquam erat volutpat. Maecenas vehicula, ligula sed pretium tristique, nunc magna sagittis risus, sed vulputate magna nunc non sem.
                    </p>

                </Card>
                    </motion.div>

            </div>


        </div>

    );
}
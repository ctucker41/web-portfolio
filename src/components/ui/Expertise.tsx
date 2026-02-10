"use client";

import React from "react";
import ExpertiseCards from "@/components/ui/ExpertiseCards";

export default function Expertise() {

    return (
        <section>

            <h2 id="expertise" className="flex justify-center items-center mt-48 md:mt-80 scroll-mt-16 text-xl md:text-2xl text-white cursor-default">
                My Technical&nbsp;
                <span className="text-purple-300 font-bold">Expertise</span>
            </h2>

            <ExpertiseCards />

        </section>
    );
};